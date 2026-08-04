# VietPay Flutter App Design Specification

**Date:** 2026-08-04  
**Project:** VietPay Native Mobile App  
**Platform:** Flutter (iOS + Android)

## Overview

Build VietPay mobile app with referral intro flow shown on first 2 app launches. After launch 3+, skip intro and go to dashboard.

## Requirements

### Launch Behavior
- **Launch 1-2:** Show full referral intro flow (5 scenes)
- **Launch 3+:** Skip intro, navigate to dashboard
- Track launch count with SharedPreferences

### Referral Intro Flow
5-scene flow matching HTML design exactly:

1. **Scene 1** (auto-play 6.55s): "What is Referral Reward?"
   - Hero image + 3 feature cards (introduce business, business transacts, earn rewards)
   - Auto-advances to Scene 2

2. **Scene 2** (auto-play 7.14s): "80+ people got rewards"
   - Payout counter animation (0 → 20 million VND/month)
   - Bar chart (6 months payment stats)
   - Auto-advances to Scene 3

3. **Scene 3** (manual): Calculate reward estimate
   - Store count stepper (1-50)
   - Slider input
   - Points calculator (count × 1500 pts)
   - "Send referral link" button → Scene 4

4. **Scene 4** (manual): Share sheet modal
   - Copy link button (vietpay.vn/ref/VP1024)
   - Share options: Zalo, Messenger, SMS, Other
   - Cancel → back to Scene 3
   - Send → Scene 5

5. **Scene 5** (manual): Success confirmation
   - Green checkmark
   - "Referral sent" message
   - Pending businesses count display
   - Actions: "Track status", "Refer more" → Scene 3

**User Controls:**
- Tap screen during auto-play (scenes 1-2): skip to next scene
- Hold screen: pause auto-play
- Close button (×): close intro, mark as "closed", increment launch count

### Design System

**Colors** (from HTML CSS):
```dart
red: #DA291C
redDeep: #A31F15
gold: #D7A44C
pink: #F6C9C6
black: #1C1D1B
charcoal: #373A36
gray: #696B68
grayLight: #DFDFDF
border: #EDEDED
white: #FFFFFF
redSurface: #FDF3F2
greenSurface: #EEF5EE
green: #4E7A4E
surface: #F7F7F6
```

**Typography:**
- Font: Be Vietnam Pro (weights: 400, 600, 700)
- Download from Google Fonts
- Sizes: 10px, 11px, 13px, 14px, 15px, 16px, 18px, 23px, 24px, 26px, 30px, 31px, 34px, 40px

**Spacing:**
- 4, 6, 8, 10, 12, 14, 16, 18, 22, 24, 32, 48px

**Border Radius:**
- 5px (small), 8px (default), 10px, 12px, 14px, 16px, 99px (pill)

**Animations:**
- vpUp: translateY(14px) → 0, opacity 0 → 1
- vpPop: scale(0.92) → 1, opacity 0 → 1
- vpSheet: translateY(100%) → 0 (bottom sheet)

## Architecture

### Project Structure

```
lib/
├── core/
│   ├── theme/
│   │   ├── app_colors.dart
│   │   ├── app_text_styles.dart
│   │   ├── app_theme.dart
│   │   └── app_dimensions.dart
│   └── constants/
│       └── app_constants.dart
├── shared/
│   ├── widgets/
│   │   ├── vp_button.dart          # Primary/secondary button variants
│   │   ├── vp_icon_button.dart     # Close, increment, decrement buttons
│   │   └── vp_progress_bar.dart    # Auto-play progress indicator
│   └── services/
│       └── launch_tracker.dart     # SharedPreferences wrapper
├── features/
│   └── intro/
│       ├── presentation/
│       │   ├── screens/
│       │   │   └── intro_screen.dart
│       │   ├── widgets/
│       │   │   ├── scene_1_widget.dart
│       │   │   ├── scene_2_widget.dart
│       │   │   ├── scene_3_widget.dart
│       │   │   ├── scene_4_sheet.dart
│       │   │   └── scene_5_widget.dart
│       │   └── providers/
│       │       └── intro_state_provider.dart
│       └── data/
│           └── models/
│               └── intro_state.dart
├── app.dart
└── main.dart

assets/
├── fonts/
│   └── BeVietnamPro/
│       ├── BeVietnamPro-Regular.ttf
│       ├── BeVietnamPro-SemiBold.ttf
│       └── BeVietnamPro-Bold.ttf
└── images/
    ├── vietpay_logo.webp
    └── business_intro.png
```

### State Management

**Riverpod** for intro state management.

**IntroState model:**
```dart
class IntroState {
  final int scene;           // 1-5
  final double progress;     // 0.0-1.0 for auto-play
  final int storeCount;      // 1-50 for calculator
  final bool isPaused;       // hold to pause
  final bool isClosed;       // user clicked close
  final bool barsAnimated;   // scene 2 bar chart trigger
  final double payout;       // scene 2 counter value
  final bool copied;         // scene 4 link copied state
}
```

**IntroStateProvider:**
- `start()`: Start auto-play timer
- `pause()`: Pause timer
- `resume()`: Resume timer
- `goToScene(int)`: Navigate to scene
- `incrementCount()`: Store count +1
- `decrementCount()`: Store count -1
- `updateCount(int)`: Slider update
- `openShare()`: Scene 3 → 4
- `closeShare()`: Scene 4 → 3
- `send()`: Scene 4 → 5
- `close()`: Close intro
- `dispose()`: Clean up timers

### Launch Tracker

**Why:** Track app launch count to determine intro display.

**How to apply:** 
- Store `vietpay_launch_count` in SharedPreferences
- Read on app start in `main.dart`
- Increment when intro completes or user closes
- Route: count < 3 ? IntroScreen : DashboardPlaceholder

```dart
class LaunchTracker {
  Future<int> getCount();
  Future<void> increment();
}
```

## Data Flow

```
main.dart
  ├─→ LaunchTracker.getCount()
  ├─→ count < 3 ? IntroScreen : DashboardPlaceholder
  └─→ runApp(App)

IntroScreen
  ├─→ IntroStateProvider (Riverpod)
  ├─→ Scene 1-5 widgets read state
  ├─→ Auto-play timer (scenes 1-2)
  ├─→ User interactions fire provider methods
  └─→ On complete/close:
       ├─→ LaunchTracker.increment()
       └─→ Navigator.pop() or Navigator.pushReplacement(Dashboard)
```

## Error Handling

**Font loading failure:**
- Fallback to system font (sans-serif)
- Log warning

**Image loading failure:**
- Show colored placeholder (VietPay red surface)
- Display "Image unavailable" text

**SharedPreferences failure:**
- Default to showing intro (safe fallback)
- Log error

**Timer disposal:**
- Cancel timers in dispose() to prevent memory leaks
- Check mounted before setState

## Testing Strategy

**Unit Tests:**
- LaunchTracker: read, write, increment
- IntroStateProvider: scene transitions, timer, calculations

**Widget Tests:**
- Each scene renders correctly
- Button taps update state
- Auto-play progresses scenes
- Slider/stepper update store count

**Integration Test:**
- Launch count 0: shows intro → completes → increments to 1
- Launch count 2: shows intro → completes → increments to 3
- Launch count 3+: skips intro, shows dashboard

## Dependencies

```yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.5.1
  shared_preferences: ^2.2.3
  google_fonts: ^6.2.1  # Be Vietnam Pro

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
```

## Assets Configuration

```yaml
flutter:
  fonts:
    - family: BeVietnamPro
      fonts:
        - asset: assets/fonts/BeVietnamPro/BeVietnamPro-Regular.ttf
          weight: 400
        - asset: assets/fonts/BeVietnamPro/BeVietnamPro-SemiBold.ttf
          weight: 600
        - asset: assets/fonts/BeVietnamPro/BeVietnamPro-Bold.ttf
          weight: 700
  
  assets:
    - assets/images/
```

## Implementation Notes

**Auto-play timing:**
- Scene 1: 6550ms (extracted from HTML: `DUR = { 1: 6550, 2: 7140 }`)
- Scene 2: 7140ms
- Use `Timer.periodic` with 60ms ticks for smooth progress

**Animations:**
- Use `AnimatedOpacity` and `AnimatedContainer` for enter animations
- Stagger delays match HTML: 0.3s, 2.1s, 3.9s for scene 1 cards
- Scene 2 bars: 0.98s ease-out with stagger 0.1s, 0.2s, 0.29s, 0.39s, 0.49s

**Store count calculator:**
- Default: 10 stores
- Min: 1, Max: 50
- Points per store: 1500
- Format: Vietnamese locale (15.000 pt, 15.000.000 VND)

**Share link:**
- Static for now: `vietpay.vn/ref/VP1024`
- Copy to clipboard using `flutter/services.dart` Clipboard API
- Show "ĐÃ CHÉP" feedback for 1.8s

**Closed state:**
- Show "Đã đóng giới thiệu" overlay
- "Mở lại" button resets to scene 1

## Future Extensions

**Backend integration (later):**
- API for referral link generation
- Points balance API
- Pending referrals list

**Feature modules (stubbed for now):**
- `/features/payments/` - QR codes, send/receive
- `/features/business/` - Invoicing, sales, commissions
- `/features/merchant/` - Dashboard, analytics

**Authentication (later):**
- Login/signup flow
- Biometric auth
- Session management
