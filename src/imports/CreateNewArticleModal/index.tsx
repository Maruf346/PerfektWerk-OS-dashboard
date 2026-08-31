import svgPaths from "./svg-9d5clbdk5b";

function Background() {
  return (
    <div className="bg-[#003ec7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">P</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">PerfektWerk OS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
          <Background />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #54647A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#d0e1fb] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#003ec7] border-l-4 border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative size-full">
          <Container2 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#54647a] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 20 18" width="20">
        <g id="Container">
          <path d={svgPaths.p3aa66a00} fill="var(--fill-0, #505F76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container4 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Organizations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #505F76)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container6 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[12px] tracking-[0.6px] whitespace-nowrap">
            <p className="leading-[16px]">Docs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <BackgroundVerticalBorder />
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function AsideSidebarNavigation() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[256px]" data-name="Aside - Sidebar Navigation">
      <div aria-hidden className="absolute border-[#c3c5d9] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-px py-[24px] relative size-full">
        <Margin />
        <Nav />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
          <p className="leading-[28px]">PerfektWerk Admin</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #191B25)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container9 />
        <div className="bg-[#e1e1ef] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(251,248,255,0.8)] h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[32px] relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-white flex-[1_0_0] h-[256px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
        <div aria-hidden className="absolute border border-[rgba(195,197,217,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white flex-[1_0_0] h-[256px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
        <div aria-hidden className="absolute border border-[rgba(195,197,217,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white flex-[1_0_0] h-[256px] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
        <div aria-hidden className="absolute border border-[rgba(195,197,217,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative size-full">
        <div className="bg-[#e1e1ef] h-[48px] relative rounded-[8px] shrink-0 w-[192px]" data-name="Background" />
        <Container11 />
        <div className="bg-white h-[384px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
          <div aria-hidden className="absolute border border-[rgba(195,197,217,0.5)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Main Content Area">
      <Header />
      <Container10 />
    </div>
  );
}

function BackgroundContentSimulationLockedBehindModal() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-start left-0 opacity-30 top-0 w-[1280px]" data-name="Background Content Simulation (Locked behind modal)">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <AsideSidebarNavigation />
      <MainContentArea />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[32px]">Create New Article</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Populate the fields below to publish a new technical document.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[387.16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseModal() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button - Close modal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function HeaderHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header - HEADER">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[32px] relative size-full">
          <Container12 />
          <ButtonCloseModal />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">ARTICLE TITLE</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[14px] w-full">
          <p className="leading-[normal]">e.g., Enterprise SSO Configuration Guide</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[15px] pt-[14px] px-[17px] relative size-full">
          <Container16 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">CATEGORY</p>
      </div>
    </div>
  );
}

function Image() {
  return <div className="relative shrink-0 size-[21px]" data-name="image" />;
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] w-full">
          <p className="leading-[20px]">Select Category</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-[13px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[345px] pr-[9px] py-[12.5px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container20 />
          <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
              <path d={svgPaths.p1adfde00} fill="var(--fill-0, #C3C5D9)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return <div className="absolute bottom-[23.91%] right-[16px] top-[23.92%] w-[12px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Label1 />
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function Section1BasicInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section 1: Basic Info">
      <Container15 />
      <Container17 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CONTENT EDITOR</p>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="h-[14px] relative shrink-0 w-[136.94px]" data-name="Container" />;
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[8.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 8.66667 11.6667" width="8.66667">
        <g id="Container">
          <path d={svgPaths.p12ef4f00} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 10.8333 11.6667" width="10.8333">
        <g id="Container">
          <path d={svgPaths.p27604ec0} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[8.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 16.6667 8.33333" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p3a06da80} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="bg-[#c3c5d9] h-[16px] relative shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 16.6667 10" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p2f0731c0} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 15 13.3333" width="15">
        <g id="Container">
          <path d={svgPaths.p4822980} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="bg-[#c3c5d9] h-[16px] relative shrink-0 w-px" data-name="Vertical Divider" />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p27b37980} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-[#f3f2ff] relative shrink-0 w-full" data-name="Toolbar">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pb-[9px] pt-[8px] px-[8px] relative size-full">
          <Button />
          <Button1 />
          <Button2 />
          <Margin1 />
          <Button3 />
          <Button4 />
          <Margin2 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(115,118,136,0.6)] w-full">
          <p className="leading-[20px]">Start writing your documentation here... Use Markdown or the toolbar for formatting.</p>
        </div>
      </div>
    </div>
  );
}

function TextareaTextArea() {
  return (
    <div className="bg-white min-h-[280px] relative shrink-0 w-full" data-name="Textarea - Text Area">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center min-h-[inherit] pb-[243px] pt-[17px] px-[17px] relative size-full">
          <Container30 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[7px] pt-px px-px relative rounded-[inherit] size-full">
        <Toolbar />
        <TextareaTextArea />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section2ContentEditor() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section 2: Content Editor">
      <Container22 />
      <BackgroundBorder />
    </div>
  );
}

function FormContentScrollable() {
  return (
    <div className="relative shrink-0 w-full" data-name="FORM CONTENT (Scrollable)">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
          <Section1BasicInfo />
          <Section2ContentEditor />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#003ec7] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[32px] py-[12px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.5px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,62,199,0.2),0px_2px_4px_-2px_rgba(0,62,199,0.2)]" data-name="Button:shadow" />
        <Container31 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Create Article</p>
        </div>
      </div>
    </div>
  );
}

function FooterFooterActions() {
  return (
    <div className="bg-[#f3f2ff] relative shrink-0 w-full" data-name="Footer - FOOTER ACTIONS">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center justify-end pb-[24px] pt-[25px] px-[32px] relative size-full">
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function SectionModalContainer() {
  return (
    <div className="bg-white max-h-[921.5999755859375px] max-w-[840px] relative rounded-[12px] shrink-0 w-[840px]" data-name="Section - MODAL CONTAINER">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <HeaderHeader />
        <FormContentScrollable />
        <FooterFooterActions />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ModalOverlay() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(25,27,37,0.4)] content-stretch flex inset-0 items-center justify-center p-[16px]" data-name="MODAL OVERLAY">
      <SectionModalContainer />
    </div>
  );
}

export default function CreateNewArticleModal() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 248, 255) 0%, rgb(251, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Create New Article Modal">
      <BackgroundContentSimulationLockedBehindModal />
      <ModalOverlay />
    </div>
  );
}