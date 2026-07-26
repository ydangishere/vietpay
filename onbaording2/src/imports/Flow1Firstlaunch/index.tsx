import svgPaths from "./svg-b508uiwrxa";

function FlowHeader() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center leading-[normal] left-0 text-white top-[71px] w-[1610px] whitespace-nowrap" data-name="FlowHeader">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[28px]">FLOW 1: FIRST LAUNCH</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[20px]">{`Vietpay fintech application onboarding & system launch sequence wireframes`}</p>
    </div>
  );
}

function StartPill() {
  return (
    <div className="bg-black content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="StartPill">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">START</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function Frame1() {
  return <div className="h-[40px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] text-black whitespace-nowrap">V</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[18px] text-black text-center w-[min-content]">Vietpay</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex h-[6px] items-start p-px relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-black h-full relative rounded-[2px] shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] opacity-60 relative shrink-0 text-[9px] text-black whitespace-nowrap">v1.0.0</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px relative w-full" data-name="Frame">
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[14px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Component11Splash() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="1.1 SPLASH">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow1() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start opacity-12 pt-[20px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[15px] text-black whitespace-nowrap">Dashboard</p>
      <div className="h-[40px] relative shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[60px] relative shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[60px] relative shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[28px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">🔔</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[10px] w-full">Allow Notifications?</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[8px] w-full">{`Stay updated on instant money transfers & security alerts.`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-black content-stretch flex h-[24px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-white whitespace-nowrap">Allow</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9px] text-black whitespace-nowrap">Not Now</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function ModalCard() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[12px] items-center left-1/2 p-[12px] rounded-[12px] top-[calc(50%-10px)] w-[154px]" data-name="ModalCard">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Frame">
      <Frame7 />
      <ModalCard />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[14px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Component12Permissions() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="1.2 PERMISSIONS">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content1 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow2() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] text-black underline whitespace-nowrap">Skip</p>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-white h-[130px] relative shrink-0 w-full" data-name="Illustration">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-0.204352cqw,1.93565cqh)] rotate-18 w-[hypot(100cqw,100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-[80.87px]" style={{ containerType: "size" }}>
          <div className="-rotate-18 flex-none h-[hypot(0.204352cqw,1.93565cqh)] w-[hypot(100cqw,-100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <Illustration />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[13px] w-full">Send Money Instantly</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[9px] w-full">Send and receive payments instantly across borders securely.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[6px] relative shrink-0 w-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 30 6" width="30">
        <g id="Frame">
          <circle cx="3" cy="3" fill="var(--fill-0, black)" id="Ellipse" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="15" cy="3" fill="var(--fill-0, white)" id="Ellipse_2" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="27" cy="3" fill="var(--fill-0, white)" id="Ellipse_3" r="2.5" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-black content-stretch flex h-[32px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[14px] relative size-full">
        <Frame13 />
      </div>
    </div>
  );
}

function Onboarding() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="Onboarding 1">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content2 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow3() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] text-black underline whitespace-nowrap">Skip</p>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="bg-white h-[130px] relative shrink-0 w-full" data-name="Illustration">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-0.204352cqw,1.93565cqh)] rotate-18 w-[hypot(100cqw,100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-[80.87px]" style={{ containerType: "size" }}>
          <div className="-rotate-18 flex-none h-[hypot(0.204352cqw,1.93565cqh)] w-[hypot(100cqw,-100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <Illustration1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[13px] w-full">Track Your Spending</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[9px] w-full">Send and receive payments instantly across borders securely.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[6px] relative shrink-0 w-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 30 6" width="30">
        <g id="Frame">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="15" cy="3" fill="var(--fill-0, black)" id="Ellipse_2" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="27" cy="3" fill="var(--fill-0, white)" id="Ellipse_3" r="2.5" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-black content-stretch flex h-[32px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[14px] relative size-full">
        <Frame20 />
      </div>
    </div>
  );
}

function Onboarding1() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="Onboarding 2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content3 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow4() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Frame">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[10px] text-black underline whitespace-nowrap">Skip</p>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="bg-white h-[130px] relative shrink-0 w-full" data-name="Illustration">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-0.204352cqw,1.93565cqh)] rotate-18 w-[hypot(100cqw,100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[49.134px] items-center justify-center left-0 right-[7.78px] top-[80.87px]" style={{ containerType: "size" }}>
          <div className="-rotate-18 flex-none h-[hypot(0.204352cqw,1.93565cqh)] w-[hypot(100cqw,-100cqh)]">
            <div className="relative size-full" data-name="Line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 159 1" width="159">
                  <line id="Line" stroke="var(--stroke-0, black)" x2="159" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <Illustration2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[13px] w-full">{`Secure & Reliable`}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[9px] w-full">Send and receive payments instantly across borders securely.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[6px] relative shrink-0 w-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 30 6" width="30">
        <g id="Frame">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="15" cy="3" fill="var(--fill-0, white)" id="Ellipse_2" r="2.5" stroke="var(--stroke-0, black)" />
          <circle cx="27" cy="3" fill="var(--fill-0, black)" id="Ellipse_3" r="2.5" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-black content-stretch flex h-[32px] items-center justify-center relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">Get Started</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Frame">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[24px] px-[14px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Onboarding2() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="Onboarding 3">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content4 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow5() {
  return (
    <div className="h-[11.314px] relative shrink-0 w-[32px]" data-name="FlowArrow">
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

function EndPill() {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="EndPill">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">To Login Flow</p>
    </div>
  );
}

function FlowSteps() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[54.5px] top-[181px]" data-name="FlowSteps">
      <StartPill />
      <FlowArrow />
      <Component11Splash />
      <FlowArrow1 />
      <Component12Permissions />
      <FlowArrow2 />
      <Onboarding />
      <FlowArrow3 />
      <Onboarding1 />
      <FlowArrow4 />
      <Onboarding2 />
      <FlowArrow5 />
      <EndPill />
    </div>
  );
}

function FooterAnnotation() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[189px] px-[24px] py-[12px] rounded-[8px] top-[678px]" data-name="FooterAnnotation">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">ℹ️ Skip button on any onboarding screen jumps directly to Login Flow</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-[71px]">
      <FlowHeader />
      <FlowSteps />
      <FooterAnnotation />
    </div>
  );
}

export default function Flow1Firstlaunch() {
  return (
    <div className="bg-[#717171] relative size-full" data-name="flow-1-firstlaunch">
      <Group />
    </div>
  );
}