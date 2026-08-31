import svgPaths from "./svg-dsnjplzwhw";
import imgAb6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy from "./d96b9f61744cf6433a27717da9f21614c95aeddb.png";

function Button() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Button">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #434654)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Request Details - BauWerk Global</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button />
        <Heading1 />
      </div>
    </div>
  );
}

function HeaderTopNavShell() {
  return (
    <div className="bg-[#fbf8ff] h-[64px] relative shrink-0 w-full z-[2]" data-name="Header - Top Nav Shell">
      <div aria-hidden className="absolute border-[#c4c5d7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">SUBSCRIPTION Plans</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">/</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative self-stretch shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">BAUWERK GLOBAL</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full" data-name="Nav">
      <Container2 />
      <Margin />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[32px] whitespace-nowrap">
        <p className="leading-[40px]">Upgrade to Elite Plan</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[8.75px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.75" preserveAspectRatio="none" viewBox="0 0 12.8333 8.75" width="12.8333">
        <g id="Container">
          <path d={svgPaths.p1b1e2a00} fill="var(--fill-0, #56657C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d4e3ff] content-stretch flex gap-[3.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#56657c] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Pending Review</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[478.423px]" data-name="Container">
      <Nav />
      <Container5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p19992a40} fill="var(--fill-0, #434654)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[25px] py-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c5d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container8 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Reject Request</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 13.5 15" width="13.5">
        <g id="Container">
          <path d={svgPaths.p10e44c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#002b92] content-stretch flex gap-[8px] h-[40px] items-center px-[24px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[40px] left-0 right-[-0.5px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Generate Invoice</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function PageHeaderStatus() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header / Status">
      <Container1 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">SUBSCRIPTION DETAILS</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] w-full">
          <p className="leading-[24px]">Current Plan</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[19.05px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.05" preserveAspectRatio="none" viewBox="0 0 18 19.05" width="18">
        <g id="Container">
          <path d={svgPaths.p1104fd00} fill="var(--fill-0, #505F76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Professional</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c4c5d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0038b6] text-[16px] w-full">
          <p className="leading-[24px]">Requested Plan</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 16 21" width="16">
        <g id="Container">
          <path d={svgPaths.p6a7d700} fill="var(--fill-0, #002B92)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#002b92] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Elite</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#dde1ff] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(0,43,146,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start justify-center relative size-full">
        <BackgroundBorder />
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 15 16.6667" width="15">
        <g id="Container">
          <path d={svgPaths.p841cf00} fill="var(--fill-0, #434654)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Billing Cycle</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Annual</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(196,197,215,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative size-full">
          <Container20 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 15 16.6667" width="15">
        <g id="Container">
          <path d={svgPaths.p39997480} fill="var(--fill-0, #434654)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Requested Date</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Oct 24, 2023 · 14:32 GMT</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(196,197,215,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative size-full">
          <Container24 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[16.646px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6458 16.6667" width="16.6458">
        <g id="Container">
          <path d={svgPaths.p166184f0} fill="var(--fill-0, #434654)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Estimated Revenue (YoY)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00875a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">+$14,200.00</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between py-[16px] relative size-full">
          <Container29 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Container28 />
      </div>
    </div>
  );
}

function SectionSubscriptionDetailsCard() {
  return (
    <div className="bg-white col-[6/span_7] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Section - Subscription Details Card">
      <div aria-hidden className="absolute border border-[#c4c5d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Heading3 />
        <Container10 />
        <Container19 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase w-full">
          <p className="leading-[16px]">COMPANY INFO</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] w-full">
        <p className="leading-[24px]">Company Name</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[20px] w-full">
        <p className="leading-[28px]">BauWerk Global</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #002B92)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[48px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(196,197,215,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434654] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contact Email</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">licensing@bauwerk-intl.com</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[214.73px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] w-full">
          <p className="leading-[16.5px]">ACCOUNT MANAGER</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffdbd2] content-stretch flex items-center justify-center pb-[5px] pt-[4px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3c0800] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">SD</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1b23] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sarah Dietrich</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Background1 />
        <Container44 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(196,197,215,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container34 />
        <Container37 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[83px] right-px top-px w-[82px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="83" preserveAspectRatio="none" viewBox="0 0 82 83" width="82">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p1f424d80} fill="var(--fill-0, #1A1B23)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SectionCompanyInfoCard() {
  return (
    <div className="bg-[#f3f2fe] col-[1/span_5] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Section - Company Info Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[139.5px] pt-[25px] px-[25px] relative size-full">
          <Heading4 />
          <Container33 />
          <Container45 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c4c5d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function BentoGridContent() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___422px_320.50px_256px] h-[668px] relative shrink-0 w-full" data-name="Bento Grid Content">
      <SectionSubscriptionDetailsCard />
      <SectionCompanyInfoCard />
    </div>
  );
}

function ContentBody() {
  return (
    <div className="h-[797px] max-w-[1280px] relative shrink-0 w-full z-[1]" data-name="Content Body">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative size-full">
        <PageHeaderStatus />
        <BentoGridContent />
      </div>
    </div>
  );
}

function MainCanvasArea() {
  return (
    <div className="content-stretch flex flex-col h-[861px] isolate items-start min-h-[800px] relative shrink-0 w-full" data-name="Main Canvas Area">
      <HeaderTopNavShell />
      <ContentBody />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 20 19" width="20">
        <g id="Container">
          <path d={svgPaths.p244a0ae0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#003ec7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container47 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">PerfektWerk OS</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ENTERPRISE SUITE</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Container">
      <Heading />
      <Container49 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <Background2 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboard() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
        <g id="Container">
          <path d={svgPaths.p130f1800} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Companies</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Companies (ACTIVE)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 22 16" width="22">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sales</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{`Subscription & Finance`}</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive2() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <div aria-hidden className="absolute border-[#003ec7] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
        <g id="Container">
          <path d={svgPaths.p20cc9b00} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Support Center</p>
      </div>
    </div>
  );
}

function LinkSupport() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Support">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[18px] relative shrink-0 w-[21.9px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 21.9 18" width="21.9">
        <g id="Container">
          <path d={svgPaths.p2815d40} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Operations</p>
      </div>
    </div>
  );
}

function LinkOperations() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Operations">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container60 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Container">
          <path d={svgPaths.p105c2000} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Platform</p>
      </div>
    </div>
  );
}

function LinkPlatform() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Platform">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container62 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Analytics</p>
      </div>
    </div>
  );
}

function LinkAnalytics() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Analytics">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container64 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.pf7fd700} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Administration</p>
      </div>
    </div>
  );
}

function LinkAdministration() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link - Administration">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container66 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-auto relative rounded-[inherit] size-full">
        <LinkDashboard />
        <LinkCompaniesActive />
        <LinkCompaniesActive1 />
        <LinkCompaniesActive2 />
        <LinkSupport />
        <LinkOperations />
        <LinkPlatform />
        <LinkAnalytics />
        <LinkAdministration />
      </div>
    </div>
  );
}

function Ab6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="AB6AXuA1CP5XTppSCP6_KCZKwNLUZTPXHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3lHpQ9HbaoVJ-fQi24sSlJVOE1mcYo-5RF8HXWO3DE3f9U-LFZPI-wvwfJwHkLn9kWuRwtSrBU911DxFtrTooabZzqVIRUPoTz7DBqy7MkyS2h00qWncf8pQVxjTEdY3eD6WGMvTn-7_W6O1sLXMgNi-9lyv267MGd2jDHGmQ_1LEi_4T0-qW0ZAKw3lhy">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy} />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#d9d9e7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Marcus Sterling</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] uppercase w-full">
        <p className="leading-[15px]">GLOBAL ADMIN</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <Container72 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <BackgroundBorder3 />
          <Container69 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function AsideSideNavigationShell() {
  return (
    <div className="absolute bg-[#fbf8ff] content-stretch flex flex-col h-[861px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[8px] top-0 w-[256px]" data-name="Aside - Side Navigation Shell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-r border-solid inset-0 pointer-events-none" />
      <Margin1 />
      <Nav1 />
      <HorizontalBorder3 />
    </div>
  );
}

export default function SubscriptionRequestDetails() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 248, 255) 0%, rgb(251, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Subscription Request Details">
      <MainCanvasArea />
      <AsideSideNavigationShell />
    </div>
  );
}