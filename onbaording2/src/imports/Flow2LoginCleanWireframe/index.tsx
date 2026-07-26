import svgPaths from "./svg-ae3esun1as";

function FlowHeader() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center leading-[normal] left-[-242px] text-center text-white top-[92px] w-[1610px]" data-name="FlowHeader">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[28px] whitespace-nowrap">FLOW 2: LOGIN</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[20px] w-[800px]">Returning user authentication. Email/password login with all form states, then OTP verification. Branches to Sign Up and Forgot Password.</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-242px] top-[92px]">
      <FlowHeader />
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
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] relative shrink-0 text-black w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px]">Vietpay</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px] text-center">Enter credentials to continue</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Email Address</p>
      <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Password</p>
      <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[7px] text-black text-right underline w-[min-content]">Forgot Password?</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-40 relative shrink-0 text-[10px] text-black whitespace-nowrap">Log In</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">No account? Sign Up</p>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame />
        <Frame5 />
      </div>
    </div>
  );
}

function Component21LoginEmpty() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.1 LOGIN EMPTY">
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

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] relative shrink-0 text-black w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px]">Vietpay</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px] text-center">Enter credentials to continue</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">user@email.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Email Address</p>
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Password</p>
      <Frame13 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[7px] text-black text-right underline w-[min-content]">Forgot Password?</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Log In</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">No account? Sign Up</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame7 />
        <Frame14 />
      </div>
    </div>
  );
}

function Component22LoginFilling() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.2 LOGIN FILLING">
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

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] relative shrink-0 text-black w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px]">Vietpay</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px] text-center">Enter credentials to continue</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">user@email.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Email Address</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Password</p>
      <Frame22 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[7px] text-black w-[min-content]">⚠️ Invalid email or password</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Log In</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">No account? Sign Up</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame16 />
        <Frame23 />
      </div>
    </div>
  );
}

function Component23LoginError() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.3 LOGIN ERROR">
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

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] relative shrink-0 text-black w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px]">Vietpay</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px] text-center">Enter credentials to continue</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[22px] opacity-50 relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">user@email.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Email Address</p>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[22px] opacity-50 relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black whitespace-nowrap">Password</p>
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Loader() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="loader">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_1_1072)" id="loader">
          <path d={svgPaths.p1ee8ca20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1072">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-black content-stretch flex gap-[6px] h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <Loader />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Signing in...</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-50 relative shrink-0 text-[8px] text-black underline whitespace-nowrap">No account? Sign Up</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame25 />
        <Frame32 />
      </div>
    </div>
  );
}

function Component24LoginLoading() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.4 LOGIN LOADING">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content3 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Row1Container() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[42px] top-[212px]" data-name="Row1Container">
      <StartPill />
      <FlowArrow />
      <Component21LoginEmpty />
      <FlowArrow1 />
      <Component22LoginFilling />
      <FlowArrow2 />
      <Component23LoginError />
      <FlowArrow3 />
      <Component24LoginLoading />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[42px] top-[212px]">
      <Row1Container />
    </div>
  );
}

function BranchItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="BranchItem1">
      <div className="bg-white relative rounded-[3px] shrink-0 size-[6px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">{`"Sign Up" link click ➔ triggers Flow 3 (Sign Up)`}</p>
    </div>
  );
}

function BranchItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="BranchItem2">
      <div className="bg-white relative rounded-[3px] shrink-0 size-[6px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">{`"Forgot Password" click ➔ triggers Flow 4 (Forgot Password)`}</p>
    </div>
  );
}

function Branches() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[400px]" data-name="Branches">
      <BranchItem />
      <BranchItem1 />
    </div>
  );
}

function DecisionCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[380px]" data-name="DecisionCard">
      <div aria-hidden className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11px] text-white whitespace-nowrap">DECISION: Credentials Verification</p>
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[10px] text-white whitespace-nowrap">YES ➔ Proceed to OTP Verification (Step 2.5)</p>
      <p className="[word-break:break-word] font-['Geist:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[10px] text-white whitespace-nowrap">NO ➔ Stay on Login, display error message (Step 2.3)</p>
    </div>
  );
}

function IntermediaryBlock() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start justify-between left-[64px] px-[40px] top-[calc(50%-31px)] w-[1120px]" data-name="IntermediaryBlock">
      <Branches />
      <DecisionCard />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[64px] top-[calc(50%-31px)]">
      <IntermediaryBlock />
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

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-black text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[15px]">Verify Your Identity</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px]">Code sent to user@email.com</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[4px] shrink-0 size-[26px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[26px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[26px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="relative rounded-[4px] shrink-0 size-[26px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-40 relative shrink-0 text-[10px] text-black whitespace-nowrap">Verify</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">Resend Code</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame34 />
        <Frame37 />
      </div>
    </div>
  );
}

function Component25OtpEmpty() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.5 OTP EMPTY">
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

function Frame40() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-black text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[15px]">Verify Your Identity</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px]">Code sent to user@email.com</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">1</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">2</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">3</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <div className="relative rounded-[4px] shrink-0 size-[26px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] opacity-40 relative shrink-0 text-[10px] text-black whitespace-nowrap">Verify</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame46 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">Resend Code</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame39 />
        <Frame45 />
      </div>
    </div>
  );
}

function Component26OtpFilling() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.6 OTP FILLING">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content5 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow6() {
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

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Geist:ExtraBold','Noto_Sans_Symbols2:Regular',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[18px] text-black whitespace-nowrap">✓</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[normal] relative shrink-0 text-black text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[16px]">Verified!</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[9px]">Redirecting...</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white content-stretch flex h-[6px] items-start p-px relative rounded-[3px] shrink-0 w-[110px]" data-name="Frame">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-black h-full relative rounded-[2px] shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Frame">
      <Frame51 />
    </div>
  );
}

function Content6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame47 />
        <Frame50 />
      </div>
    </div>
  );
}

function Component27OtpSuccess() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.7 OTP SUCCESS">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content6 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function FlowArrow7() {
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

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[normal] relative shrink-0 text-black text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[15px]">Verify Your Identity</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal opacity-60 relative shrink-0 text-[8px]">Code sent to user@email.com</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">9</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">9</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">9</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[26px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap">9</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame53 />
      <Frame54 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[7px] text-black text-center w-full">⚠️ Invalid code. 2 attempts remaining.</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-black content-stretch flex h-[28px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-white whitespace-nowrap">Verify</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame60 />
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-black underline whitespace-nowrap">Resend Code</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start justify-between pb-[20px] pt-[28px] px-[12px] relative size-full">
        <Frame52 />
        <Frame59 />
      </div>
    </div>
  );
}

function Component28OtpError() {
  return (
    <div className="bg-white h-[406px] relative rounded-[24px] shrink-0 w-[187px]" data-name="2.8 OTP ERROR">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 absolute bg-black h-[14px] left-1/2 rounded-bl-[6px] rounded-br-[6px] top-0 w-[72px]" data-name="Notch" />
        <Content7 />
        <div className="-translate-x-1/2 absolute bg-black bottom-[6px] h-[3px] left-1/2 rounded-[2px] w-[60px]" data-name="HomeIndicator" />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[11.314px]">
      <div className="-rotate-45 flex-none">
        <div className="relative size-[8px]" data-name="Frame">
          <div aria-hidden className="absolute border-b-[1.5px] border-r-[1.5px] border-solid border-white inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function FlowArrow8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[32px]" data-name="FlowArrow">
      <Frame61 />
    </div>
  );
}

function Row2Container() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[125px] top-[828px]" data-name="Row2Container">
      <FlowArrow4 />
      <Component25OtpEmpty />
      <FlowArrow5 />
      <Component26OtpFilling />
      <FlowArrow6 />
      <Component27OtpSuccess />
      <FlowArrow7 />
      <Component28OtpError />
      <FlowArrow8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[125px] top-[828px]">
      <Row2Container />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[normal] min-w-px relative text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[11px]">ℹ️ SYSTEM FLOW SPECIFICATIONS</p>
      <p className="font-['Geist:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[10px]">• 2.7 Success ➔ Proceeds directly to fintech dashboard main entry point (Flow 5).</p>
      <p className="font-['Geist:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[10px]">• 2.8 Error ➔ User has 3 total attempts to input a correct OTP. Upon 3 consecutive failures, security mechanism initiates profile/account lock.</p>
    </div>
  );
}

function FooterAnnotation() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[150px] px-[24px] py-[16px] rounded-[8px] top-[1274px] w-[726px]" data-name="FooterAnnotation">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame62 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[150px] top-[1274px]">
      <FooterAnnotation />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-242px] top-[92px]">
      <Group2 />
      <Group1 />
      <Group />
      <Group3 />
      <Group4 />
    </div>
  );
}

export default function Flow2LoginCleanWireframe() {
  return (
    <div className="bg-[#717171] relative size-full" data-name="flow-2-login-clean-wireframe">
      <Group5 />
    </div>
  );
}