import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

// Brand assets
import imgLogo from "@/imports/Group39/2233ef5993b58b6508a9fac8d00d456a0c37c585.png";
import imgLogoWhite from "@/imports/Group39/4c79f177864774dec81cfdad2477b70042207dbf.png";
import imgPhoto1 from "@/imports/Phone/091adb822821db9fa4ca06f9b006a6201f09ffa9.png";
import imgPhoto2 from "@/imports/Phone-1/c44a3311576d0c1a25b5e159d62b73356fd98815.png";
import imgPhoto3 from "@/imports/Phone-2/f6ebc872c410e4110e279f4549e1365bb6be1ff5.png";
import iconInvoice from "@/imports/dashboard/icon-invoice.svg";
import navOverviewIcon from "@/imports/dashboard/nav-overview-icon.svg";
import navInvoicesIcon from "@/imports/dashboard/nav-invoices-icon.svg";
import navContactsIcon from "@/imports/dashboard/nav-contacts-icon.svg";
import navOverviewActive from "@/imports/dashboard/nav-overview-active.png";
import dropdownArrow from "@/imports/dashboard/dropdown-arrow.png";

// Design tokens
const R = "#DA291C";   // Primary Red
const RD = "#A31F15";  // Dark Red
const DARK = "#1C1D1B";
const CHAR = "#373A36";
const GRAY = "#696B68";
const LG = "#F2F2F2";  // Light surface
const BORDER = "#D1D1D1";
const F = "'Be Vietnam Pro', sans-serif";

// Types
type Screen =
  | "splash" | "permissions"
  | "ob1" | "ob2" | "ob3"
  | "login" | "login_loading" | "login_error"
  | "otp" | "otp_success" | "otp_error"
  | "signup" | "signup_error" | "signup_loading"
  | "su_otp" | "su_otp_error" | "account_type" | "signup_success"
  | "fp_email" | "fp_sent" | "fp_verify" | "fp_error"
  | "fp_newpass" | "fp_newpass_ok" | "fp_success"
  | "dashboard";

// Phone shell
function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white"
      style={{ width: 375, height: 812, borderRadius: 50,
        boxShadow: `0 0 0 2px ${DARK}, 0 40px 100px rgba(0,0,0,0.5)` }}>
      {/* Dynamic island / notch */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black z-50 rounded-full"
        style={{ width: 120, height: 36 }} />
      {/* Home bar */}
      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-black/80 rounded-full z-50"
        style={{ width: 130, height: 5 }} />
      <div className="absolute inset-0 overflow-hidden rounded-[50px]" style={{ background: "#fff" }}>{children}</div>
    </div>
  );
}

// Status bar
function StatusBar({ dark }: { dark?: boolean }) {
  const col = dark ? "rgba(255,255,255,0.9)" : DARK;
  return (
    <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between"
      style={{ height: 52, paddingTop: 14, paddingLeft: 20, paddingRight: 20 }}>
      <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: col }}>9:41</span>
      <div style={{ width: 120 }} /> {/* notch space */}
      <div className="flex items-center gap-[5px]">
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          {[0,1,2,3].map((i) => (
            <rect key={i} x={i*4} y={9-i*2.5} width="3" height={3+i*2.5}
              rx="1" fill={i < 4 ? col : col} opacity={i < 3 ? 1 : 0.35} />
          ))}
        </svg>
        {/* WiFi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.5 8.5a1 1 0 110 2 1 1 0 010-2z" fill={col}/>
          <path d="M4.5 6.5C5.4 5.6 6.4 5 7.5 5s2.1.6 3 1.5" stroke={col} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 4C3.6 2.4 5.5 1.5 7.5 1.5S11.4 2.4 13 4" stroke={col} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        </svg>
        {/* Battery */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke={col} strokeOpacity="0.5"/>
          <rect x="2" y="2" width="15" height="8" rx="2" fill={col}/>
          <path d="M22 4.5v3c.83-.4 1.33-1 1.33-1.5S22.83 4.9 22 4.5z" fill={col} fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}

// Common UI components
function FieldInput({ label, value, onChange, type = "text", placeholder, error, disabled, hint }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; error?: string; disabled?: boolean; hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: DARK }}>{label}</span>
      <div style={{
        position: "relative", border: `1.5px solid ${error ? R : focused ? R : BORDER}`,
        borderRadius: 12, background: error ? "#FFF5F5" : disabled ? "#F8F8F8" : "#fff",
        transition: "border-color .15s",
      }}>
        <input
          type={type} value={value} placeholder={placeholder} disabled={disabled}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: "100%", height: 50, padding: "0 16px", background: "transparent",
            border: "none", outline: "none", fontFamily: F, fontSize: 14,
            fontWeight: 500, color: disabled ? GRAY : DARK,
          }}
        />
      </div>
      {error && <span style={{ fontFamily: F, fontSize: 11, color: R, fontWeight: 600 }}>! {error}</span>}
      {hint && !error && <span style={{ fontFamily: F, fontSize: 11, color: GRAY }}>{hint}</span>}
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled, loading, small }: {
  children: React.ReactNode; onClick?: () => void;
  disabled?: boolean; loading?: boolean; small?: boolean;
}) {
  return (
    <button onClick={onClick} disabled={disabled || loading}
      style={{
        width: "100%", height: small ? 44 : 52, borderRadius: small ? 10 : 14,
        background: loading ? `linear-gradient(135deg, ${R}99 0%, ${RD}99 100%)` : `linear-gradient(135deg, ${R} 0%, ${RD} 100%)`,
        color: "#fff",
        fontFamily: F, fontSize: small ? 13 : 15, fontWeight: 700,
        border: "none", cursor: disabled || loading ? "not-allowed" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        boxShadow: `0 4px 14px ${R}55`,
        transition: "all .2s",
      }}>
      {loading && (
        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
          <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )}
      {children}
    </button>
  );
}

function GhostBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick}
      style={{
        width: "100%", height: 52, borderRadius: 14, background: "transparent",
        color: DARK, fontFamily: F, fontSize: 15, fontWeight: 600,
        border: `1.5px solid ${BORDER}`, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
      {children}
    </button>
  );
}

function TextLink({ children, onClick, color = R }: {
  children: React.ReactNode; onClick?: () => void; color?: string;
}) {
  return (
    <button onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F,
        fontSize: 13, fontWeight: 600, color, textDecoration: "underline",
        textUnderlineOffset: 3, padding: 0 }}>
      {children}
    </button>
  );
}

function OTPBoxes({ value, onChange, error }: {
  value: string[]; onChange: (v: string[]) => void; error?: string;
}) {
  const refs = [0,1,2,3,4,5].map(() => useRef<HTMLInputElement>(null));
  const handle = (i: number, v: string) => {
    if (!/^\d*$/.test(v)) return;
    const next = [...value]; next[i] = v.slice(-1); onChange(next);
    if (v && i < 5) refs[i+1].current?.focus();
  };
  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !value[i] && i > 0) refs[i-1].current?.focus();
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex", gap: 10 }}>
        {[0,1,2,3,4,5].map(i => (
          <input key={i} ref={refs[i]} type="text" inputMode="numeric" maxLength={1}
            value={value[i] || ""}
            onChange={e => handle(i, e.target.value)}
            onKeyDown={e => handleKey(i, e)}
            style={{
              width: 48, height: 54, textAlign: "center", fontFamily: F,
              fontSize: 20, fontWeight: 800, color: DARK, borderRadius: 14,
              border: `2px solid ${error ? R : value[i] ? DARK : BORDER}`,
              background: error ? "#FFF5F5" : value[i] ? LG : "#fff",
              outline: "none", transition: "all .15s",
            }}
          />
        ))}
      </div>
      {error && <span style={{ fontFamily: F, fontSize: 12, color: R, fontWeight: 600 }}>! {error}</span>}
    </div>
  );
}

function Dots({ active }: { active: 0 | 1 | 2 }) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: i === active ? 20 : 8, height: 8, borderRadius: 4,
          background: i === active ? R : BORDER,
          transition: "all .3s",
        }} />
      ))}
    </div>
  );
}

// 1.1 SPLASH
function SplashScreen({ go }: { go: (s: Screen) => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProgress(p => Math.min(p + 1, 100)), 25);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (progress >= 100) go("permissions");
  }, [progress, go]);
  return (
    <div style={{ height: "100%", background: `linear-gradient(160deg, ${R} 0%, ${RD} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "80px 40px 60px" }}>
      <div />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <img src={imgLogoWhite} alt="Vietpay" style={{ width: 120, height: 120, objectFit: "contain" }} />
        <span style={{ fontFamily: F, fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 500 }}>
          Your money, your future
        </span>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
          <motion.div style={{ height: "100%", background: R, borderRadius: 2 }}
            animate={{ width: `${progress}%` }} transition={{ ease: "linear" }} />
        </div>
        <span style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>v1.0.0</span>
      </div>
    </div>
  );
}

// 1.2 PERMISSIONS
function PermissionsScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div style={{ height: "100%", background: "#fff", position: "relative" }}>
      <StatusBar />
      {/* Ghost dashboard behind */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, padding: "80px 20px 20px", pointerEvents: "none" }}>
        <div style={{ height: 120, background: R, borderRadius: 20, marginBottom: 16 }} />
        <div style={{ height: 60, background: DARK, borderRadius: 12, marginBottom: 12 }} />
        <div style={{ height: 60, background: DARK, borderRadius: 12 }} />
      </div>
      {/* Backdrop blur */}
      <div style={{ position: "absolute", inset: 0, backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.6)" }} />
      {/* Modal */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          style={{ background: "#fff", borderRadius: 28, padding: 28, width: "100%",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: 18, background: `${R}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" stroke={R} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.7 21a2 2 0 0 1-3.4 0" stroke={R} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: F, fontSize: 17, fontWeight: 800, color: DARK }}>Allow Notifications?</span>
              <span style={{ fontFamily: F, fontSize: 13, color: GRAY, lineHeight: 1.5 }}>
                Stay updated on instant money transfers & security alerts.
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <PrimaryBtn onClick={() => go("ob1")}>Allow</PrimaryBtn>
            <GhostBtn onClick={() => go("ob1")}>Not Now</GhostBtn>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ONBOARDING (shared layout)
function OnboardScreen({ go, step, img, title, body, cta, imgStyle, contentTop }: {
  go: (s: Screen) => void; step: 0|1|2; img: string;
  title: string; body: string; cta: string;
  imgStyle?: React.CSSProperties; contentTop?: number;
}) {
  const next: Screen = step === 0 ? "ob2" : step === 1 ? "ob3" : "login";
  const defaultImgStyle: React.CSSProperties = { position: "absolute", left: 0, top: -113, width: "100%", height: 790, objectFit: "cover" };
  return (
    <div style={{ height: "100%", position: "relative", overflow: "hidden", background: DARK }}>
      <img src={img} alt="" style={{ ...defaultImgStyle, ...imgStyle }} />

      {/* Bottom white gradient - Figma spec: top 452px, height 360px */}
      <div style={{ position: "absolute", left: 0, top: 452, width: "100%", height: 360,
        background: "linear-gradient(to top, #ffffff 45%, rgba(255,255,255,0) 100%)" }} />

      {/* Skip button */}
      <div style={{ position: "absolute", top: 54, right: 20 }}>
        <button onClick={() => go("login")}
          style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: "#fff", background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 20, padding: "6px 16px", cursor: "pointer", backdropFilter: "blur(6px)" }}>
          Skip &gt;
        </button>
      </div>

      {/* Content */}
      <div style={{ position: "absolute", left: 0, top: contentTop ?? 562, width: "100%", padding: "0 24px 64px",
        display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 26, fontWeight: 900, color: DARK, lineHeight: 1.2 }}>{title}</span>
          <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14, fontWeight: 400, color: GRAY, lineHeight: 1.6 }}>{body}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Dots active={step} />
          <PrimaryBtn onClick={() => go(next)}>{cta}</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}

// 2.x LOGIN
function LoginScreen({ go, prefillError }: { go: (s: Screen) => void; prefillError?: boolean }) {
  const [email, setEmail] = useState(prefillError ? "user@email.com" : "");
  const [pass, setPass] = useState(prefillError ? "wrongpass" : "");
  const filled = email.trim().length > 0 && pass.length > 0;

  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, overflowY: "auto", padding: "68px 24px 32px" }}>
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 36 }}>
          <img src={imgLogo} alt="Vietpay" style={{ height: 106, objectFit: "contain" }} />
          <span style={{ fontFamily: F, fontSize: 13, color: GRAY, fontWeight: 500 }}>Welcome back</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FieldInput label="Email Address" value={email} onChange={setEmail} type="email"
            placeholder="Enter your email"
            error={prefillError ? "Invalid email or password" : undefined} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <FieldInput label="Password" value={pass} onChange={setPass} type="password" placeholder="Enter your password" />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <TextLink onClick={() => go("fp_email")}>Forgot Password?</TextLink>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 24px 48px", display: "flex", flexDirection: "column", gap: 14 }}>
        <PrimaryBtn onClick={() => filled ? go("login_loading") : undefined} disabled={!filled}>
          Log In
        </PrimaryBtn>
        <div style={{ textAlign: "center", fontFamily: F, fontSize: 13, color: GRAY }}>
          Don&apos;t have an account?{" "}
          <TextLink onClick={() => go("signup")}>Sign Up</TextLink>
        </div>
      </div>
    </div>
  );
}

function LoginLoadingScreen({ go }: { go: (s: Screen) => void }) {
  useEffect(() => { const t = setTimeout(() => go("otp"), 800); return () => clearTimeout(t); }, [go]);
  return (
    <div style={{ height: "100%", background: `linear-gradient(160deg, ${R} 0%, ${RD} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
      <StatusBar dark />
      <img src={imgLogoWhite} alt="Vietpay" style={{ height: 104, objectFit: "contain" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <svg className="animate-spin" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
          <path d="M18 4a14 14 0 0114 14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Signing in...</span>
      </div>
    </div>
  );
}

// 2.5-2.8 OTP
function OTPScreen({ go, toSuccess, toError, label, correctCode, attempts, setAttempts }: {
  go: (s: Screen) => void; toSuccess: Screen; toError: Screen;
  label: string; correctCode: string;
  attempts: number; setAttempts: (n: number) => void;
}) {
  const [digits, setDigits] = useState(["","","","","",""]);
  const [error, setError] = useState("");
  const full = digits.every(d => d !== "");

  const verify = () => {
    if (!full) return;
    if (digits.join("") === correctCode) { go(toSuccess); return; }
    const next = attempts + 1; setAttempts(next);
    if (next >= 3) { go(toError); return; }
    setError(`Invalid code. ${3 - next} attempt${3 - next !== 1 ? "s" : ""} remaining.`);
    setDigits(["","","",""]);
  };

  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      {/* Header strip */}
      <div style={{ height: 160, background: `linear-gradient(135deg, ${R} 0%, ${RD} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: 28, flexShrink: 0 }}>
        <div style={{ width: 56, height: 56, borderRadius: 20, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="2.5" stroke="#fff" strokeWidth="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 14v2.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div style={{ flex: 1, padding: "28px 24px 0", display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontFamily: F, fontSize: 22, fontWeight: 900, color: DARK, textAlign: "center" }}>Verify Your Identity</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, textAlign: "center", lineHeight: 1.5 }}>{label}</span>
        <div style={{ marginTop: 28 }}>
          <OTPBoxes value={digits} onChange={setDigits} error={error} />
        </div>
        <span style={{ fontFamily: F, fontSize: 11, color: GRAY, textAlign: "center", marginTop: 8 }}>
          Hint: enter <strong style={{ color: DARK }}>{correctCode}</strong>
        </span>
      </div>
      <div style={{ padding: "20px 24px 48px", display: "flex", flexDirection: "column", gap: 14 }}>
        <PrimaryBtn onClick={verify} disabled={!full}>Verify</PrimaryBtn>
        <div style={{ textAlign: "center" }}><TextLink onClick={() => setDigits(["","","",""])}>Resend Code</TextLink></div>
      </div>
    </div>
  );
}

function OTPSuccessScreen({ go }: { go: (s: Screen) => void }) {
  useEffect(() => { const t = setTimeout(() => go("dashboard"), 2200); return () => clearTimeout(t); }, [go]);
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "0 32px" }}>
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        style={{ width: 88, height: 88, borderRadius: 28, background: `linear-gradient(135deg, ${R}, ${RD})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 30px ${R}55` }}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5l4.2 4.2L19 7" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "center" }}>
        <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK }}>Verified!</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY }}>Redirecting to your dashboard...</span>
      </div>
      <div style={{ width: 160, height: 4, background: LG, borderRadius: 2, overflow: "hidden" }}>
        <motion.div style={{ height: "100%", background: R, borderRadius: 2 }}
          initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.2, ease: "linear" }} />
      </div>
    </div>
  );
}

function OTPErrorScreen({ go, backTo }: { go: (s: Screen) => void; backTo: Screen }) {
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "0 32px" }}>
      <div style={{ width: 88, height: 88, borderRadius: 28, background: `${R}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="10" width="14" height="10" rx="2.5" stroke={R} strokeWidth="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke={R} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 14v2.5" stroke={R} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "center" }}>
        <span style={{ fontFamily: F, fontSize: 22, fontWeight: 900, color: DARK }}>Too Many Attempts</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, lineHeight: 1.6 }}>Maximum OTP attempts exceeded. Please try again.</span>
      </div>
      <PrimaryBtn onClick={() => go(backTo)}>Try Again</PrimaryBtn>
    </div>
  );
}

// 3.x SIGN UP
function SignupScreen({ go, showError }: { go: (s: Screen) => void; showError?: boolean }) {
  const [name, setName] = useState(showError ? "Nguyen Van A" : "");
  const [phone, setPhone] = useState(showError ? "+84 901234567" : "");
  const [email, setEmail] = useState(showError ? "vana@vietpay.vn" : "");
  const [pass, setPass] = useState(showError ? "123" : "");
  const [partner, setPartner] = useState("");
  const filled = name && phone && email && pass;

  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, overflowY: "auto", padding: "68px 24px 24px" }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK, display: "block" }}>Create Account</span>
          <span style={{ fontFamily: F, fontSize: 13, color: GRAY, marginTop: 4, display: "block" }}>Sign up to start using Vietpay</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <FieldInput label="Full Name" value={name} onChange={setName} placeholder="Enter your full name" />
          <FieldInput label="Mobile Number" value={phone} onChange={setPhone} placeholder="e.g. +84 901234567" type="tel" />
          <FieldInput label="Email Address" value={email} onChange={setEmail} type="email" placeholder="name@domain.com"
            error={showError ? "Email already registered" : undefined} />
          <FieldInput label="Password" value={pass} onChange={setPass} type="password" placeholder="Minimum 8 characters"
            error={showError && pass.length < 8 ? "Must be at least 8 characters" : undefined} />
          <FieldInput label="Partner ID (Optional)" value={partner} onChange={setPartner} placeholder="e.g. VP-12345" />
        </div>
      </div>
      <div style={{ padding: "12px 24px 48px", display: "flex", flexDirection: "column", gap: 14, borderTop: `1px solid ${BORDER}` }}>
        <PrimaryBtn onClick={() => filled ? go("signup_loading") : undefined} disabled={!filled}>
          Create Account
        </PrimaryBtn>
        <div style={{ textAlign: "center", fontFamily: F, fontSize: 13, color: GRAY }}>
          Already have an account?{" "}<TextLink onClick={() => go("login")}>Log In</TextLink>
        </div>
      </div>
    </div>
  );
}

function SignupLoadingScreen({ go }: { go: (s: Screen) => void }) {
  useEffect(() => { const t = setTimeout(() => go("su_otp"), 1800); return () => clearTimeout(t); }, [go]);
  return (
    <div style={{ height: "100%", background: `linear-gradient(160deg, ${R} 0%, ${RD} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
      <StatusBar dark />
      <img src={imgLogoWhite} alt="Vietpay" style={{ height: 104, objectFit: "contain" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <svg className="animate-spin" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
          <path d="M18 4a14 14 0 0114 14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>Creating account...</span>
      </div>
    </div>
  );
}

function AccountTypeScreen({ go }: { go: (s: Screen) => void }) {
  const [sel, setSel] = useState("personal");
  const types = [
    { id: "personal", icon: "P", label: "Personal", desc: "For personal transfers & bills" },
    { id: "family", icon: "FB", label: "Family Business", desc: "For small household shops" },
    { id: "enterprise", icon: "E", label: "Enterprise", desc: "For registered corporations" },
  ];
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, padding: "68px 24px 24px" }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK, display: "block" }}>Choose Account Type</span>
          <span style={{ fontFamily: F, fontSize: 13, color: GRAY, marginTop: 4, display: "block" }}>Select the profile that best fits you</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {types.map(t => (
            <button key={t.id} onClick={() => setSel(t.id)}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderRadius: 16,
                border: `2px solid ${sel === t.id ? R : BORDER}`,
                background: sel === t.id ? `${R}08` : "#fff", cursor: "pointer", textAlign: "left", transition: "all .2s" }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: sel === t.id ? `${R}15` : LG,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: F, fontSize: 14, fontWeight: 800, color: sel === t.id ? R : GRAY }}>
                {t.icon}
              </div>
              <div>
                <span style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: DARK, display: "block" }}>{t.label}</span>
                <span style={{ fontFamily: F, fontSize: 12, color: GRAY }}>{t.desc}</span>
              </div>
              <div style={{ marginLeft: "auto", width: 22, height: 22, borderRadius: "50%",
                border: `2px solid ${sel === t.id ? R : BORDER}`, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center" }}>
                {sel === t.id && <div style={{ width: 12, height: 12, borderRadius: "50%", background: R }} />}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "0 24px 48px" }}>
        <PrimaryBtn onClick={() => go("signup_success")}>Continue</PrimaryBtn>
      </div>
    </div>
  );
}

function SuccessScreen({ title, body, btnLabel, onBtn, note }: {
  title: string; body: string; btnLabel: string; onBtn: () => void; note?: string;
}) {
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "0 32px" }}>
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        style={{ width: 88, height: 88, borderRadius: 28, background: `linear-gradient(135deg, ${R}, ${RD})`,
          display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 30px ${R}55` }}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5l4.2 4.2L19 7" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "center" }}>
        <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK }}>{title}</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, lineHeight: 1.6 }}>{body}</span>
      </div>
      <div style={{ width: "100%" }}>
        <PrimaryBtn onClick={onBtn}>{btnLabel}</PrimaryBtn>
      </div>
      {note && <span style={{ fontFamily: F, fontSize: 11, color: GRAY }}>{note}</span>}
    </div>
  );
}

// 4.x FORGOT PASSWORD
function FPEmailScreen({ go }: { go: (s: Screen) => void }) {
  const [email, setEmail] = useState("");
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, padding: "68px 24px 0" }}>
        <button onClick={() => go("login")}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", marginBottom: 28, color: DARK, fontFamily: F, fontSize: 14, fontWeight: 600 }}>
          &lt; Back to Login
        </button>
        <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK, display: "block", marginBottom: 6 }}>Reset Password</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, display: "block", marginBottom: 32, lineHeight: 1.5 }}>Enter your email and we will send a verification code.</span>
        <FieldInput label="Email Address" value={email} onChange={setEmail} type="email" placeholder="name@email.com" />
      </div>
      <div style={{ padding: "24px 24px 48px", display: "flex", flexDirection: "column", gap: 14 }}>
        <PrimaryBtn onClick={() => go("fp_sent")} disabled={!email.trim()}>Send Code</PrimaryBtn>
      </div>
    </div>
  );
}

function FPSentScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, padding: "68px 24px 0" }}>
        <button onClick={() => go("login")}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", marginBottom: 20, color: DARK, fontFamily: F, fontSize: 14, fontWeight: 600 }}>
          &lt; Back to Login
        </button>
        {/* Confirmation banner */}
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "#E8F8E8", borderRadius: 12, padding: "12px 16px", marginBottom: 28 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#1A7A1A" opacity="0.16" />
            <path d="M7 12.5l3.2 3.2L17 9" stroke="#1A7A1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: "#1A7A1A" }}>Code sent to user@email.com</span>
        </motion.div>
        <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK, display: "block", marginBottom: 6 }}>Reset Password</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, display: "block", marginBottom: 24, lineHeight: 1.5 }}>Enter your email and we will send a verification code.</span>
        <div style={{ height: 50, borderRadius: 12, border: `1.5px solid ${BORDER}`, display: "flex", alignItems: "center", padding: "0 16px" }}>
          <span style={{ fontFamily: F, fontSize: 14, fontWeight: 500, color: DARK }}>user@email.com</span>
        </div>
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <TextLink color={GRAY}>Resend Code (01:30)</TextLink>
        </div>
      </div>
      <div style={{ padding: "24px 24px 48px" }}>
        <PrimaryBtn onClick={() => go("fp_verify")}>Enter Verification Code</PrimaryBtn>
      </div>
    </div>
  );
}

function FPVerifyScreen({ go, attempts, setAttempts }: { go: (s: Screen) => void; attempts: number; setAttempts: (n: number) => void }) {
  const [digits, setDigits] = useState(["","","","","",""]);
  const [error, setError] = useState("");
  const full = digits.every(d => d !== "");
  const verify = () => {
    if (digits.join("") === "901234") { go("fp_newpass"); return; }
    const next = attempts + 1; setAttempts(next);
    if (next >= 3) { go("fp_email"); return; }
    setError(`Invalid code. ${3 - next} attempt${3 - next !== 1 ? "s" : ""} remaining.`);
    setDigits(["","","",""]);
  };
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ height: 160, background: `linear-gradient(135deg, ${R} 0%, ${RD} 100%)`, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 28 }}>
        <div style={{ width: 56, height: 56, borderRadius: 20, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="8" cy="12" r="4" stroke="#fff" strokeWidth="2" />
            <path d="M12 12h9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 12v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 12v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div style={{ flex: 1, padding: "28px 24px 0", display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontFamily: F, fontSize: 22, fontWeight: 900, color: DARK, textAlign: "center" }}>Verify Code</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, textAlign: "center" }}>Code sent to user@email.com</span>
        <div style={{ marginTop: 24 }}><OTPBoxes value={digits} onChange={setDigits} error={error} /></div>
        <span style={{ fontFamily: F, fontSize: 11, color: GRAY, textAlign: "center", marginTop: 8 }}>
          Hint: enter <strong style={{ color: DARK }}>901234</strong>
        </span>
      </div>
      <div style={{ padding: "20px 24px 48px", display: "flex", flexDirection: "column", gap: 14 }}>
        <PrimaryBtn onClick={verify} disabled={!full}>Verify</PrimaryBtn>
        <span style={{ fontFamily: F, fontSize: 11, color: GRAY, textAlign: "center" }}>After 3 fails -&gt; returns to Step 4.1</span>
      </div>
    </div>
  );
}

function FPNewPassScreen({ go }: { go: (s: Screen) => void }) {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const checks = { length: pass.length >= 8, upper: /[A-Z]/.test(pass), number: /[0-9]/.test(pass), special: /[^A-Za-z0-9]/.test(pass) };
  const allOk = Object.values(checks).every(Boolean) && pass === confirm;
  const step = Object.values(checks).filter(Boolean).length;
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, overflowY: "auto", padding: "68px 24px 24px" }}>
        <span style={{ fontFamily: F, fontSize: 26, fontWeight: 900, color: DARK, display: "block", marginBottom: 6 }}>New Password</span>
        <span style={{ fontFamily: F, fontSize: 13, color: GRAY, display: "block", marginBottom: 28 }}>Create a strong password for your account.</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <FieldInput label="Create Password" value={pass} onChange={setPass} type="password" placeholder="Minimum 8 characters" />
          {/* Requirements */}
          <div style={{ background: LG, borderRadius: 14, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: DARK }}>Password strength</span>
              <span style={{ fontFamily: F, fontSize: 12, color: step >= 4 ? "#1A7A1A" : R, fontWeight: 700 }}>{step >= 4 ? "Strong" : step >= 2 ? "Medium" : "Weak"}</span>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {[0,1,2,3].map(i => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < step ? R : BORDER, transition: "background .2s" }} />)}
            </div>
            {[{k:"length",l:"8+ characters"},{k:"upper",l:"1 uppercase letter"},{k:"number",l:"1 number"},{k:"special",l:"1 special character"}].map(c => (
              <div key={c.k} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 18, height: 18, borderRadius: 6, background: checks[c.k as keyof typeof checks] ? R : "transparent", border: `2px solid ${checks[c.k as keyof typeof checks] ? R : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s" }}>
                  {checks[c.k as keyof typeof checks] && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6.2 5 8.6 9.7 3.4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontFamily: F, fontSize: 12, color: checks[c.k as keyof typeof checks] ? DARK : GRAY }}>{c.l}</span>
              </div>
            ))}
          </div>
          <FieldInput label="Confirm Password" value={confirm} onChange={setConfirm} type="password" placeholder="Re-enter password"
            error={confirm && pass !== confirm ? "Passwords do not match" : undefined} />
        </div>
      </div>
      <div style={{ padding: "12px 24px 48px", borderTop: `1px solid ${BORDER}` }}>
        <PrimaryBtn onClick={() => allOk ? go("fp_success") : undefined} disabled={!allOk}>Reset Password</PrimaryBtn>
      </div>
    </div>
  );
}

// DASHBOARD
function DashboardScreen({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragScroll = useRef({ active: false, startY: 0, scrollTop: 0 });

  const startDashboardDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !scrollRef.current) return;
    dragScroll.current = {
      active: true,
      startY: event.clientY,
      scrollTop: scrollRef.current.scrollTop,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDashboardDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragScroll.current.active || !scrollRef.current) return;
    scrollRef.current.scrollTop = dragScroll.current.scrollTop + dragScroll.current.startY - event.clientY;
  };

  const stopDashboardDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    dragScroll.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div style={{ height: "100%", background: "linear-gradient(172deg, #797979 11.24%, #DFDFDF 34.14%, #ACACAC 53.29%, #D7D7D7 97.68%)", position: "relative", overflow: "hidden" }}>
      <StatusBar dark />

      {/* Header */}
      <div style={{ background: `linear-gradient(147deg, ${R} 0%, ${RD} 100%)`, padding: "56px 24px 28px", position: "relative" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 22, background: "#DFDFDF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: DARK }}>HC</span>
          </div>
          <span style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: "#fff" }}>HUNG CUONG .LTD</span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: "#fff" }}>This month</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Balance card */}
        <div style={{ background: "linear-gradient(135deg, #D7A44C 0%, #4B4B4B 100%)", borderRadius: 12, padding: 18, marginTop: 30, boxShadow: "0 0 4px 2px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
          {/* Dragon pattern overlay */}
          <svg style={{ position: "absolute", bottom: -20, right: -20, width: 180, height: 180, opacity: 0.15, pointerEvents: "none" }} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20C90 25 85 35 82 45C80 50 78 58 75 65C72 58 70 50 68 45C65 35 60 25 50 20C55 30 58 42 60 52C62 62 63 72 62 82C61 72 60 62 58 52C56 42 53 30 48 20C53 32 56 45 57 58C58 71 57 84 54 96C51 84 50 71 51 58C52 45 55 32 60 20C50 28 43 40 39 53C35 66 34 80 36 94C38 80 37 66 33 53C29 40 22 28 12 20C22 30 29 43 33 57C37 71 38 86 36 100C34 86 33 71 29 57C25 43 18 30 8 20C18 32 25 46 29 61C33 76 34 92 32 107C30 92 29 76 25 61C21 46 14 32 4 20C14 35 21 52 25 69C29 86 30 104 28 121C26 104 25 86 21 69C17 52 10 35 0 20C10 40 17 62 21 84C25 106 26 129 24 151C22 129 21 106 17 84C13 62 6 40 -4 20" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(15 100 100)"/>
            <circle cx="120" cy="60" r="8" fill="white" opacity="0.3"/>
            <circle cx="125" cy="58" r="3" fill="black" opacity="0.4"/>
            <path d="M140 55C145 50 148 45 150 40M145 58C150 54 153 50 155 45" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div style={{ position: "absolute", top: 13, right: 18, width: 40, height: 36, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontFamily: F, fontSize: 16, fontWeight: 600, color: "#fff", display: "block", marginBottom: 18, position: "relative" }}>This month's cash flow</span>
          <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: "#fff", display: "block", marginBottom: 4, position: "relative" }}>Balance</span>
          <span style={{ fontFamily: F, fontSize: 26, fontWeight: 700, color: "#fff", display: "block", marginBottom: 18, textShadow: "0px 4px 4px rgba(0,0,0,0.25)", position: "relative" }}>+16,394,491 VND</span>
          <span style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: "#fff", position: "relative" }}>In 16,403,923 VND - Out 9,432 VND</span>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        onPointerDown={startDashboardDrag}
        onPointerMove={moveDashboardDrag}
        onPointerUp={stopDashboardDrag}
        onPointerCancel={stopDashboardDrag}
        style={{ height: "calc(100% - 341px)", overflowY: "auto", padding: "16px 20px 100px", scrollbarWidth: "none", cursor: "grab", userSelect: "none" }}
      >
        {/* Quick actions */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 12, width: 118, height: 96, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "2px 4px 4px rgba(0,0,0,0.1)" }}>
            <img src={iconInvoice} alt="" style={{ width: 34, height: 34 }} />
            <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 600, color: CHAR }}>Create invoice</span>
          </div>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 12, width: 118, height: 96, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "2px 4px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ width: 34, height: 34, borderRadius: 17, background: "#F7ECDA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 4v10" stroke="#D7A44C" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M7.5 10.5 12 15l4.5-4.5" stroke="#D7A44C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 18h14" stroke="#D7A44C" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 600, color: CHAR }}>Receive money</span>
          </div>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 12, width: 118, height: 96, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "2px 4px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ width: 34, height: 34, borderRadius: 17, background: "#FBECEB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14" stroke={R} strokeWidth="2.4" strokeLinecap="round" />
                <path d="M5 12h14" stroke={R} strokeWidth="2.4" strokeLinecap="round" />
                <path d="M6.5 18.5h11" stroke={R} strokeWidth="2.2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
            <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 600, color: CHAR }}>Add expense</span>
          </div>
        </div>

        {/* Needs attention */}
        <div style={{ background: "#FBECEB", border: "1px solid #F0B8B2", borderRadius: 14, padding: 14, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontFamily: F, fontSize: 18, fontWeight: 600, color: RD }}>Needs attention</span>
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: R }}>View all &gt;</span>
          </div>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 10, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: "#EDEDED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: DARK }}>INV</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: DARK, flex: 1 }}>3 unpaid invoices</span>
              <span style={{ fontFamily: F, fontSize: 19, fontWeight: 400, color: GRAY }}>&gt;</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: "#FBECEB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: R }}>!</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: DARK, flex: 1 }}>2 overdue payments</span>
              <span style={{ fontFamily: F, fontSize: 19, fontWeight: 400, color: GRAY }}>&gt;</span>
            </div>
          </div>
        </div>

        {/* Income by payment method */}
        <div style={{ background: "#F1F0EF", border: "1px solid #DFDFDF", borderRadius: 14, padding: 14, marginBottom: 16 }}>
          <span style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color: DARK, display: "block", marginBottom: 12 }}>Income by payment method</span>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #EDEDED" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 15, color: "#D7A44C" }}>C</span>
                <span style={{ fontFamily: F, fontSize: 12.5, fontWeight: 600, color: DARK }}>Cash</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 700, color: DARK }}>16,194,101 VND</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #EDEDED" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 15, color: "#D7A44C" }}>Q</span>
                <span style={{ fontFamily: F, fontSize: 12.5, fontWeight: 600, color: DARK }}>QR / Bank transfer</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 700, color: DARK }}>208,822 VND</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 15, color: "#D7A44C" }}>P</span>
                <span style={{ fontFamily: F, fontSize: 12.5, fontWeight: 600, color: DARK }}>POS terminal</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 700, color: DARK }}>1,000 VND</span>
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <div style={{ background: "#F1F0EF", border: "1px solid #DFDFDF", borderRadius: 14, padding: 14, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontFamily: F, fontSize: 17, fontWeight: 600, color: DARK }}>Recent transactions</span>
            <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: R }}>View all &gt;</span>
          </div>
          <div style={{ background: "#fff", border: "1px solid #DFDFDF", borderRadius: 10, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 14, borderBottom: "1px solid #EDEDED" }}>
              <div style={{ width: 38, height: 38, borderRadius: 19, background: "#DFDFDF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: DARK }}>NM</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: DARK, display: "block" }}>Nguyen Van Minh</span>
                <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 400, color: GRAY, display: "block", marginBottom: 6 }}>Paid invoice #VP-1028</span>
                <div style={{ background: "#EDEDED", borderRadius: 9, padding: "3px 10px", display: "inline-block" }}>
                  <span style={{ fontFamily: F, fontSize: 9, fontWeight: 600, color: CHAR }}>Verified</span>
                </div>
              </div>
              <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 700, color: DARK }}>+2,500,000 VND</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingTop: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 19, background: "#DFDFDF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: DARK }}>AP</span>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: DARK, display: "block" }}>An Phat Supplier</span>
                <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 400, color: GRAY, display: "block" }}>Inventory purchase</span>
              </div>
              <span style={{ fontFamily: F, fontSize: 11.5, fontWeight: 700, color: R }}>-1,200,000 VND</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 84, background: "#fff", borderTop: "1px solid #D9D6D6", display: "flex", alignItems: "flex-start", justifyContent: "space-around", paddingTop: 8, boxShadow: "0 -2px 12px rgba(0,0,0,0.15)" }}>
        <button onClick={() => setTab(0)} style={{ width: 64, height: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", position: "relative", padding: 0 }}>
          {tab === 0 && <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 64, height: 56, borderRadius: 16, background: "#FBECEB" }} />}
          <img src={navOverviewIcon} alt="" style={{ width: 18, height: 18, position: "relative", zIndex: 1, marginTop: 8, filter: tab === 0 ? "invert(19%) sepia(89%) saturate(3142%) hue-rotate(349deg) brightness(95%) contrast(91%)" : "none" }} />
          <span style={{ fontFamily: F, fontSize: 9.5, lineHeight: "12px", fontWeight: 600, color: tab === 0 ? R : GRAY, position: "relative", zIndex: 1 }}>Overview</span>
        </button>
        <button onClick={() => setTab(1)} style={{ width: 64, height: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: 8 }}>
            <path d="M13.5 9C13.5 11.485 11.485 13.5 9 13.5M13.5 9C13.5 6.515 11.485 4.5 9 4.5M13.5 9H16.5M9 13.5C6.515 13.5 4.5 11.485 4.5 9M9 13.5V16.5M4.5 9C4.5 6.515 6.515 4.5 9 4.5M4.5 9H1.5M9 4.5V1.5" stroke="#696B68" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: F, fontSize: 9.5, lineHeight: "12px", fontWeight: 600, color: GRAY }}>Cash flow</span>
        </button>
        <button onClick={() => setTab(2)} style={{ width: 64, height: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <img src={navInvoicesIcon} alt="" style={{ width: 18, height: 18, marginTop: 8 }} />
          <span style={{ fontFamily: F, fontSize: 9.5, lineHeight: "12px", fontWeight: 600, color: GRAY }}>Invoices</span>
        </button>
        <button onClick={() => setTab(3)} style={{ width: 64, height: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <img src={navContactsIcon} alt="" style={{ width: 18, height: 18, marginTop: 8 }} />
          <span style={{ fontFamily: F, fontSize: 9.5, lineHeight: "12px", fontWeight: 600, color: GRAY }}>Contacts</span>
        </button>
        <button onClick={() => setTab(4)} style={{ width: 64, height: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: 8 }} aria-hidden="true">
            <circle cx="4" cy="9" r="1.6" fill={GRAY} />
            <circle cx="9" cy="9" r="1.6" fill={GRAY} />
            <circle cx="14" cy="9" r="1.6" fill={GRAY} />
          </svg>
          <span style={{ fontFamily: F, fontSize: 9.5, lineHeight: "12px", fontWeight: 600, color: GRAY }}>More</span>
        </button>
      </div>
    </div>
  );
}

// App + navigation
const LABELS: Partial<Record<Screen, string>> = {
  splash:"1.1 Splash", permissions:"1.2 Permissions",
  ob1:"Onboard 1", ob2:"Onboard 2", ob3:"Onboard 3",
  login:"2.1-2.3 Login", login_loading:"2.4 Loading", login_error:"2.3 Error",
  otp:"2.5-2.6 OTP", otp_success:"2.7 OTP Success", otp_error:"2.8 OTP Error",
  signup:"3.1-3.2 Sign Up", signup_error:"3.3 Error", signup_loading:"3.4 Loading",
  su_otp:"3.5 Email OTP", su_otp_error:"3.8 OTP Error",
  account_type:"3.6 Account Type", signup_success:"3.7 Success",
  fp_email:"4.1 Email", fp_sent:"4.2 Sent", fp_verify:"4.3-4.4 Verify",
  fp_newpass:"4.5-4.6 New Password", fp_success:"4.7 Success",
  dashboard:"Dashboard",
};

const NAV_GROUPS = [
  { label: "Onboarding", screens: ["splash","permissions","ob1","ob2","ob3"] as Screen[] },
  { label: "Login", screens: ["login","login_error","login_loading","otp","otp_success","otp_error"] as Screen[] },
  { label: "Sign Up", screens: ["signup","signup_error","signup_loading","su_otp","su_otp_error","account_type","signup_success"] as Screen[] },
  { label: "Forgot PW", screens: ["fp_email","fp_sent","fp_verify","fp_newpass","fp_success"] as Screen[] },
  { label: "End", screens: ["dashboard"] as Screen[] },
];

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [dir, setDir] = useState<"fwd"|"bwd">("fwd");
  const [otpAttempts, setOtpAttempts] = useState(0);
  const [suOtpAttempts, setSuOtpAttempts] = useState(0);
  const [fpAttempts, setFpAttempts] = useState(0);

  const go = useCallback((s: Screen, d: "fwd"|"bwd" = "fwd") => {
    setDir(d); setScreen(s);
  }, []);

  useEffect(() => {
    if (screen === "login") setOtpAttempts(0);
    if (screen === "signup") setSuOtpAttempts(0);
    if (screen === "fp_email") setFpAttempts(0);
  }, [screen]);

  const render = (): React.ReactNode => {
    switch (screen) {
      case "splash":          return <SplashScreen go={go} />;
      case "permissions":     return <PermissionsScreen go={go} />;
      case "ob1":             return <OnboardScreen go={go} step={0} img={imgPhoto1} title="Send Money Instantly" body="Transfer funds to anyone, anywhere in the world - instantly and securely with Vietpay." cta="Next" />;
      case "ob2":             return <OnboardScreen go={go} step={1} img={imgPhoto2} title="Grow Your Business" body="Manage payments, track expenses, and empower your business with powerful financial tools." cta="Next" imgStyle={{ position: "absolute", left: 0, top: -211, width: 432, height: 1084, objectFit: "cover" }} contentTop={540} />;
      case "ob3":             return <OnboardScreen go={go} step={2} img={imgPhoto3} title="Secure & Reliable" body="Bank-grade encryption and biometric authentication keep your money safe at all times." cta="Get Started" imgStyle={{ position: "absolute", left: -11, top: -171, width: 429, height: 1103, objectFit: "cover" }} contentTop={540} />;
      case "login":           return <LoginScreen go={go} />;
      case "login_error":     return <LoginScreen go={go} prefillError />;
      case "login_loading":   return <LoginLoadingScreen go={go} />;
      case "otp":             return <OTPScreen go={go} toSuccess="otp_success" toError="otp_error" label="Code sent to user@email.com" correctCode="123456" attempts={otpAttempts} setAttempts={setOtpAttempts} />;
      case "otp_success":     return <OTPSuccessScreen go={go} />;
      case "otp_error":       return <OTPErrorScreen go={go} backTo="otp" />;
      case "signup":          return <SignupScreen go={go} />;
      case "signup_error":    return <SignupScreen go={go} showError />;
      case "signup_loading":  return <SignupLoadingScreen go={go} />;
      case "su_otp":          return <OTPScreen go={go} toSuccess="account_type" toError="su_otp_error" label="Code sent to vana@vietpay.vn" correctCode="567890" attempts={suOtpAttempts} setAttempts={setSuOtpAttempts} />;
      case "su_otp_error":    return <OTPErrorScreen go={go} backTo="su_otp" />;
      case "account_type":    return <AccountTypeScreen go={go} />;
      case "signup_success":  return <SuccessScreen title="Account Created!" body="Your Vietpay account is registered. You can now log in to proceed." btnLabel="Go to Login" onBtn={() => go("login","bwd")} />;
      case "fp_email":        return <FPEmailScreen go={go} />;
      case "fp_sent":         return <FPSentScreen go={go} />;
      case "fp_verify":
      case "fp_error":        return <FPVerifyScreen go={go} attempts={fpAttempts} setAttempts={setFpAttempts} />;
      case "fp_newpass":
      case "fp_newpass_ok":   return <FPNewPassScreen go={go} />;
      case "fp_success":      return <SuccessScreen title="Password Reset!" body="Your password has been successfully updated. You can now log in." btnLabel="Back to Login" onBtn={() => go("login","bwd")} />;
      case "dashboard":       return <DashboardScreen go={go} />;
      default:                return <SplashScreen go={go} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#2A2A2A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, padding: "40px 16px", fontFamily: F }}>
      {/* App label */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <span style={{ fontFamily: F, fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
          {LABELS[screen] ?? screen}
        </span>
      </div>
      {/* Phone */}
      <Phone>
        <AnimatePresence initial={false}>
          <motion.div key={screen}
            initial={{ x: dir === "fwd" ? 375 : -375 }}
            animate={{ x: 0 }}
            exit={{ x: dir === "fwd" ? -375 : 375 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            style={{ position: "absolute", inset: 0, background: "#fff" }}>
            {render()}
          </motion.div>
        </AnimatePresence>
      </Phone>
      {/* Quick nav */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center", maxWidth: 500, width: "100%" }}>
        {NAV_GROUPS.map(g => (
          <div key={g.label} style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ fontFamily: F, fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1.5, minWidth: 56, textAlign: "right" }}>
              {g.label}
            </span>
            {g.screens.map(s => (
              <button key={s} onClick={() => go(s)}
                style={{ fontFamily: F, fontSize: 9, fontWeight: 700, padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", transition: "all .15s",
                  background: screen === s ? R : "rgba(255,255,255,0.1)",
                  color: screen === s ? "#fff" : "rgba(255,255,255,0.55)" }}>
                {LABELS[s]?.split(" ")[0] ?? s}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
