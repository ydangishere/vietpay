import svgPaths from "./svg-itaznlkm8q";

function FlowHeader() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center leading-[normal] left-[86px] text-white top-[74px] w-[1610px]" data-name="FlowHeader">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[28px] whitespace-nowrap">FLOW 5: POST-LOGIN + EDGE CASES</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[20.222px] text-center w-[1155.556px]">Dashboard after authentication, plus edge case screens: biometric login setup, biometric returning-user login, session expiry, and re-authentication for sensitive actions.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[86px] top-[74px]">
      <FlowHeader />
    </div>
  );
}

function StartPill() {
  return (
    <div className="bg-black content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="StartPill">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">FROM OTP SUCCESS</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="Frame">
      <div className="absolute inset-[0_-10.36%_0_0]">
        <svg className="block size-full" fill="none" height="11.3137" preserveAspectRatio="none" viewBox="0 0 35.3137 11.3137" width="35.3137">
          <g id="Frame">
            <line id="Line" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="28" y1="4.90686" y2="4.90686" />
            <g id="Frame_2">
              <mask fill="white" id="path-2-inside-1_1_1039">
                <path d={svgPaths.p16af280} />
              </mask>
              <path d={svgPaths.p3ac14de0} fill="var(--stroke-0, white)" mask="url(#path-2-inside-1_1_1039)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[80px]" data-name="FlowArrow">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[16px]" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">👤</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[10px] text-black whitespace-nowrap">Vietpay</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[10px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[7px]">TOTAL BALANCE</p>
        <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px] text-black">$12,450.00</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-black whitespace-nowrap">💸</p>
    </div>
  );
}

function QuickAction() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="QuickAction">
      <Frame7 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[7px] text-black whitespace-nowrap">Send</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-black whitespace-nowrap">📥</p>
    </div>
  );
}

function QuickAction1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="QuickAction">
      <Frame8 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[7px] text-black whitespace-nowrap">Receive</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-black whitespace-nowrap">📱</p>
    </div>
  );
}

function QuickAction2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="QuickAction">
      <Frame9 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[7px] text-black whitespace-nowrap">Pay</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[10px] text-black whitespace-nowrap">🔋</p>
    </div>
  );
}

function QuickAction3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="QuickAction">
      <Frame10 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[7px] text-black whitespace-nowrap">Top Up</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <QuickAction />
      <QuickAction1 />
      <QuickAction2 />
      <QuickAction3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">QUICK ACTIONS</p>
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[8px] text-black text-ellipsis">CGV Cinema</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[6px]">Today, 14:20</p>
    </div>
  );
}

function TransactionItem() {
  return (
    <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full" data-name="TransactionItem">
      <div aria-hidden className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">-12.50</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[8px] text-black text-ellipsis">Salary Deposit</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[6px]">Yesterday</p>
    </div>
  );
}

function TransactionItem1() {
  return (
    <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full" data-name="TransactionItem">
      <div aria-hidden className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">+1,500.00</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[8px] text-black text-ellipsis">Starbucks Coffee</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[6px]">24 Oct</p>
    </div>
  );
}

function TransactionItem2() {
  return (
    <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full" data-name="TransactionItem">
      <div aria-hidden className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame15 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">-4.80</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Frame">
      <TransactionItem />
      <TransactionItem1 />
      <TransactionItem2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">RECENT TRANSACTIONS</p>
      <Frame12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[8px]">🏠</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[5px]">Home</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] opacity-40 relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[8px]">🔄</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[5px]">Transfers</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] opacity-40 relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[8px]">💳</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[5px]">Cards</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] opacity-40 relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[8px]">👤</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[5px]">Profile</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-black border-solid border-t inset-0 pointer-events-none" />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px relative w-full" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-black whitespace-nowrap">Hello, Nguyen Van A</p>
      <Frame4 />
      <Frame5 />
      <Frame11 />
      <Frame16 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[12px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Component51Dashboard() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="5.1 DASHBOARD">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step-5.1">
      <Component51Dashboard />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5.1 DASHBOARD</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="Frame">
      <div className="absolute inset-[0_-10.36%_0_0]">
        <svg className="block size-full" fill="none" height="11.3137" preserveAspectRatio="none" viewBox="0 0 35.3137 11.3137" width="35.3137">
          <g id="Frame">
            <line id="Line" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="28" y1="4.90686" y2="4.90686" />
            <g id="Frame_2">
              <mask fill="white" id="path-2-inside-1_1_1039">
                <path d={svgPaths.p16af280} />
              </mask>
              <path d={svgPaths.p3ac14de0} fill="var(--stroke-0, white)" mask="url(#path-2-inside-1_1_1039)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FlowArrow1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[80px]" data-name="FlowArrow">
      <Frame21 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">NEXT</p>
    </div>
  );
}

function BackArrow() {
  return (
    <div className="h-[8.485px] relative shrink-0 w-[16px]" data-name="BackArrow">
      <div className="absolute inset-[0_-9.28%_0_0]">
        <svg className="block size-full" fill="none" height="8.48529" preserveAspectRatio="none" viewBox="0 0 17.4853 8.48529" width="17.4853">
          <g id="BackArrow">
            <g id="Frame">
              <mask fill="white" id="path-1-inside-1_1_1035">
                <path d={svgPaths.p1054d280} />
              </mask>
              <path d={svgPaths.p3d108300} fill="var(--stroke-0, black)" mask="url(#path-1-inside-1_1_1035)" />
            </g>
            <line id="Line" stroke="var(--stroke-0, black)" strokeWidth="1.5" x1="5.48529" x2="17.4853" y1="3.49265" y2="3.49265" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="HeaderBar">
      <BackArrow />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-black text-ellipsis whitespace-nowrap">Setup Biometrics</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">👤</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[13px] whitespace-nowrap">Enable Biometric Login</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full opacity-70 relative shrink-0 text-[9px] w-[min-content]">Use fingerprint or FaceID for faster and more secure access next time.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center pt-[20px] relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Enable</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-center py-[4px] relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] text-black underline whitespace-nowrap">Skip for now</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full" data-name="Frame">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="Frame">
      <HeaderBar />
      <Frame23 />
      <Frame26 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[12px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Component52BiometricSetup() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="5.2 BIOMETRIC SETUP">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content1 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step-5.2">
      <Component52BiometricSetup />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5.2 BIOMETRIC SETUP</p>
    </div>
  );
}

function RowConnector() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-[120px]" data-name="RowConnector">
      <div className="h-0 relative shrink-0 w-[60px]" data-name="Line">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 60 1.5" width="60">
            <line id="Line" stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="60" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[10px] whitespace-nowrap">OR ON RETURN</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Row1">
      <StartPill />
      <FlowArrow />
      <Step />
      <FlowArrow1 />
      <Step1 />
      <RowConnector />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">V</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pt-[12px] relative shrink-0 w-full" data-name="Frame">
      <Frame31 />
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[11px] text-black whitespace-nowrap">Vietpay</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[28px] text-black whitespace-nowrap">👉</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-80 relative shrink-0 text-[10px] text-black text-center whitespace-nowrap">Touch sensor to log in</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[12px] relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-black underline whitespace-nowrap">Use password instead</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px relative w-full" data-name="Frame">
      <Frame30 />
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[12px] relative size-full">
        <Frame29 />
      </div>
    </div>
  );
}

function Component53BiometricLogin() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="5.3 BIOMETRIC LOGIN">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content2 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step-5.3">
      <Component53BiometricLogin />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5.3 BIOMETRIC LOGIN</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="Frame">
      <div className="absolute inset-[0_-10.36%_0_0]">
        <svg className="block size-full" fill="none" height="11.3137" preserveAspectRatio="none" viewBox="0 0 35.3137 11.3137" width="35.3137">
          <g id="Frame">
            <line id="Line" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="28" y1="4.90686" y2="4.90686" />
            <g id="Frame_2">
              <mask fill="white" id="path-2-inside-1_1_1039">
                <path d={svgPaths.p16af280} />
              </mask>
              <path d={svgPaths.p3ac14de0} fill="var(--stroke-0, white)" mask="url(#path-2-inside-1_1_1039)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FlowArrow2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[80px]" data-name="FlowArrow">
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start opacity-12 relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-black whitespace-nowrap">Hello, Nguyen Van A</p>
      <div className="bg-black h-[40px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="bg-black h-[60px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">⚠️</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[10px] whitespace-nowrap">Session Expired</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[8px] w-[min-content]">For your security, you have been logged out due to inactivity.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Log In Again</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-black whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function ModalCard() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[12px] items-center left-1/2 p-[12px] rounded-[12px] top-[calc(50%-10px)] w-[154px]" data-name="ModalCard">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame38 />
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Frame">
      <Frame37 />
      <ModalCard />
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[12px] relative size-full">
        <Frame36 />
      </div>
    </div>
  );
}

function Component54SessionExpired() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="5.4 SESSION EXPIRED">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content3 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step-5.4">
      <Component54SessionExpired />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5.4 SESSION EXPIRED</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="Frame">
      <div className="absolute inset-[0_-10.36%_0_0]">
        <svg className="block size-full" fill="none" height="11.3137" preserveAspectRatio="none" viewBox="0 0 35.3137 11.3137" width="35.3137">
          <g id="Frame">
            <line id="Line" stroke="var(--stroke-0, white)" strokeWidth="1.5" x2="28" y1="4.90686" y2="4.90686" />
            <g id="Frame_2">
              <mask fill="white" id="path-2-inside-1_1_1039">
                <path d={svgPaths.p16af280} />
              </mask>
              <path d={svgPaths.p3ac14de0} fill="var(--stroke-0, white)" mask="url(#path-2-inside-1_1_1039)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FlowArrow3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[80px]" data-name="FlowArrow">
      <Frame43 />
    </div>
  );
}

function BackArrow1() {
  return (
    <div className="h-[8.485px] relative shrink-0 w-[16px]" data-name="BackArrow">
      <div className="absolute inset-[0_-9.28%_0_0]">
        <svg className="block size-full" fill="none" height="8.48529" preserveAspectRatio="none" viewBox="0 0 17.4853 8.48529" width="17.4853">
          <g id="BackArrow">
            <g id="Frame">
              <mask fill="white" id="path-1-inside-1_1_1035">
                <path d={svgPaths.p1054d280} />
              </mask>
              <path d={svgPaths.p3d108300} fill="var(--stroke-0, black)" mask="url(#path-1-inside-1_1_1035)" />
            </g>
            <line id="Line" stroke="var(--stroke-0, black)" strokeWidth="1.5" x1="5.48529" x2="17.4853" y1="3.49265" y2="3.49265" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeaderBar1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="HeaderBar">
      <BackArrow1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-black text-ellipsis whitespace-nowrap">Confirm Identity</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[10px] text-black">Verify before proceeding</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[8px]">Required for high-value transfers</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">👉</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame47 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-60 relative shrink-0 text-[7px] text-black whitespace-nowrap">Use Touch ID</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[1.2px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9px] whitespace-nowrap">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Enter Password</p>
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Verify</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame49 />
      <Frame51 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px relative w-full" data-name="Frame">
      <HeaderBar1 />
      <Frame45 />
      <Frame46 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] text-center whitespace-nowrap">— OR —</p>
      <Frame48 />
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[12px] relative size-full">
        <Frame44 />
      </div>
    </div>
  );
}

function Component55ReAuthentication() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="5.5 RE-AUTHENTICATION">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content4 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Step-5.5">
      <Component55ReAuthentication />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">5.5 RE-AUTHENTICATION</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Row2">
      <Step2 />
      <FlowArrow2 />
      <Step3 />
      <FlowArrow3 />
      <Step4 />
    </div>
  );
}

function FlowWorkspace() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[86px] top-[194px] w-[1610px]" data-name="FlowWorkspace">
      <Row />
      <Row1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[86px] top-[194px]">
      <FlowWorkspace />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[#18181b] text-[11px] w-full whitespace-pre" data-name="Frame">
      <p className="relative shrink-0">{`•  represents the landing hub for authenticated users. Deep-linked features trigger re-auth checks for safety.`}</p>
      <p className="relative shrink-0">{`•  is an optional workflow prompted once immediately after user validates OTP for the first time.`}</p>
      <p className="relative shrink-0">{`•  completely bypasses password + OTP authentication walls for returning application runs.`}</p>
      <p className="relative shrink-0">{`•  forces an overlay dialog blocking all system activities if the user stays idle for more than 15 minutes.`}</p>
      <p className="relative shrink-0">{`•  prompts before concluding high-value transactions ($1000+) or editing fundamental profile records.`}</p>
    </div>
  );
}

function FlowLegend() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="FlowLegend">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">ℹ️ SYSTEM FLOW ANNOTATIONS</p>
        <Frame52 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] relative shrink-0 text-[#18181b] text-[11px] w-full" data-name="Frame">
      <p className="relative shrink-0">• Flow 1 (First Launch) → Flow 2 (Login) or Flow 3 (Sign Up)</p>
      <p className="relative shrink-0">• Flow 2 (Login) → Flow 4 (Forgot Password) or Flow 5 (Dashboard)</p>
      <p className="relative shrink-0">• Flow 3 (Sign Up) → Flow 2 (Login)</p>
      <p className="relative shrink-0">• Flow 4 (Forgot Password) → Flow 2 (Login)</p>
      <p className="relative shrink-0">• Flow 5 (Dashboard) → 5.4 (Session Expired) → Flow 2 (Login)</p>
    </div>
  );
}

function FlowConnectionsMap() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="FlowConnectionsMap">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[14px] text-black">🔗 FLOW CONNECTIONS MAP</p>
        <Frame53 />
      </div>
    </div>
  );
}

function FooterAnnotations() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[86px] pt-[24px] top-[1150px] w-[1610px]" data-name="FooterAnnotations">
      <div aria-hidden className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <FlowLegend />
      <FlowConnectionsMap />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[86px] top-[1150px]">
      <FooterAnnotations />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[86px] top-[74px]">
      <Group2 />
      <Group1 />
      <Group />
    </div>
  );
}

export default function Flow5Postlogin() {
  return (
    <div className="bg-[#717171] relative size-full" data-name="flow-5-postlogin">
      <Group3 />
    </div>
  );
}