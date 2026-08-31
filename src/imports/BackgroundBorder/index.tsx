import svgPaths from "./svg-l98bgewnh8";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">Health Indicator Performance</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ededfb] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Daily</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#003ec7] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">Monthly</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Heading />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333" width="16.6667">
        <g id="Container">
          <path d={svgPaths.padeb980} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Ticket Volume</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">Normal</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function IndicatorCard() {
  return (
    <div className="bg-[#f3f2ff] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p2da1f880} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Login Frequency</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">+18%</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function IndicatorCard1() {
  return (
    <div className="bg-[#f3f2ff] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
        <g id="Container">
          <path d={svgPaths.p9e36100} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Usage Statistics</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">-5%</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function IndicatorCard2() {
  return (
    <div className="bg-[#f3f2ff] col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container12 />
        <Container15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[18.333px] relative shrink-0 w-[17.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3333" preserveAspectRatio="none" viewBox="0 0 17.5 18.3333" width="17.5">
        <g id="Container">
          <path d={svgPaths.p30d3d380} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Expiring Subs</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[21.98px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">12</p>
        <p className="leading-[28px]">High</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function IndicatorCard3() {
  return (
    <div className="bg-[#f3f2ff] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container17 />
        <Container20 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[17.688px] relative shrink-0 w-[17.792px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.6875" preserveAspectRatio="none" viewBox="0 0 17.7917 17.6875" width="17.7917">
        <g id="Container">
          <path d={svgPaths.p2a6b0f80} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Payment Issues</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">3</p>
        <p className="leading-[28px]">Flagged</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function IndicatorCard4() {
  return (
    <div className="bg-[#f3f2ff] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container22 />
        <Container25 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 16.6667 10" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p1aa1cd00} fill="var(--fill-0, #D97706)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Low Adoption</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[25.97px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">42%</p>
        <p className="leading-[28px]">Vol</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function IndicatorCard5() {
  return (
    <div className="bg-[#f3f2ff] col-3 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Indicator Card">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container27 />
        <Container30 />
      </div>
    </div>
  );
}

function DataGridPattern() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data Grid Pattern">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__94px_118px] relative size-full">
        <IndicatorCard />
        <IndicatorCard1 />
        <IndicatorCard2 />
        <IndicatorCard3 />
        <IndicatorCard4 />
        <IndicatorCard5 />
      </div>
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[12px] size-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container />
      <DataGridPattern />
    </div>
  );
}