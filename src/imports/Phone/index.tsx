import imgImage from "./091adb822821db9fa4ca06f9b006a6201f09ffa9.png";

function Image() {
  return (
    <div className="absolute h-[790px] left-0 top-[-113px] w-[375px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return <div className="-translate-x-1/2 absolute bg-black h-[36px] left-[calc(50%+0.5px)] rounded-[33554400px] top-[-442px] w-[120px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-gradient-to-t from-[45%] from-white h-[360px] left-0 to-[rgba(255,255,255,0)] top-[452px] w-[375px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Black',sans-serif] leading-[31.2px] not-italic relative shrink-0 text-[#1c1d1b] text-[26px] whitespace-nowrap">Send Money Instantly</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#696b68] text-[14px] w-[327px]">Transfer funds to anyone, anywhere in the world — instantly and securely with Vietpay.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#da291c] h-[8px] relative rounded-[4px] shrink-0 w-[20px]" data-name="Container" />;
}

function Container8() {
  return <div className="bg-[#d1d1d1] relative rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container9() {
  return <div className="bg-[#d1d1d1] relative rounded-[4px] shrink-0 size-[8px]" data-name="Container" />;
}

function Dots() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dots">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function PrimaryBtn() {
  return (
    <div className="drop-shadow-[0px_4px_7px_rgba(218,41,28,0.33)] h-[52px] relative rounded-[14px] shrink-0 w-[327px]" style={{ backgroundImage: "linear-gradient(170.964deg, rgb(218, 41, 28) 0%, rgb(163, 31, 21) 100%)" }} data-name="PrimaryBtn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[22.5px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Dots />
        <PrimaryBtn />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 pb-[64px] px-[24px] top-[562.03px] w-[375px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function OnboardScreen() {
  return (
    <div className="bg-[#1c1d1b] h-[812px] relative shrink-0 w-full" data-name="OnboardScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Image />
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[375px]" data-name="Container">
      <OnboardScreen />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white h-[812px] left-0 overflow-clip rounded-[50px] top-0 w-[375px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[rgba(0,0,0,0.8)] h-[5px] left-[122.5px] rounded-[33554400px] top-[799px] w-[130px]" data-name="Container" />;
}

export default function Phone() {
  return (
    <div className="bg-white overflow-clip relative rounded-[50px] shadow-[0px_0px_0px_2px_#1c1d1b,0px_40px_100px_0px_rgba(0,0,0,0.5)] size-full" data-name="Phone">
      <Container />
      <Container10 />
    </div>
  );
}