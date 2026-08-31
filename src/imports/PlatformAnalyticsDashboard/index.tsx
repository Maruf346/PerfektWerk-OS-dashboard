import svgPaths from "./svg-z4ejnbjtvn";
import imgAb6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw08 from "./023c4c4a6583f4c1c2639b041e9744ea76f93423.png";
import imgAb6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy from "./d96b9f61744cf6433a27717da9f21614c95aeddb.png";

function Button() {
  return (
    <div className="bg-[#003ec7] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Platform</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Revenue</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-center p-[5px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button />
      <Button1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Platform Analytics</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Bread() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="Bread">
      <BackgroundBorder />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TOTAL COMPANIES</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 16.6667 15" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p1b7798c0} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Nimbus_Sans:Bold',sans-serif] gap-[4px] items-baseline leading-[0] not-italic pt-[8px] relative size-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px]">
          <p className="leading-[32px]">1,248</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a] text-[11px]">
          <p className="leading-[14px]">+12.4%</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] w-full">
          <p className="leading-[18px]">Active enterprise accounts</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container1 />
        <Paragraph />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TOTAL USERS</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333" width="18.3333">
        <g id="Container">
          <path d={svgPaths.p3f23d700} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Nimbus_Sans:Bold',sans-serif] gap-[4px] items-baseline leading-[0] not-italic pt-[8px] relative size-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px]">
          <p className="leading-[32px]">42.5k</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a] text-[11px]">
          <p className="leading-[14px]">+8.2%</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] w-full">
          <p className="leading-[18px]">Monthly active users (MAU)</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container5 />
        <Paragraph1 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TOTAL MRR</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333" width="18.3333">
        <g id="Container">
          <path d={svgPaths.pc297b80} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Nimbus_Sans:Bold',sans-serif] gap-[4px] items-baseline leading-[0] not-italic pt-[8px] relative size-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px]">
          <p className="leading-[32px]">$842.5k</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a] text-[11px]">
          <p className="leading-[14px]">+15.1%</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] w-full">
          <p className="leading-[18px]">Monthly Recurring Revenue</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container9 />
        <Paragraph2 />
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">GROWTH RATE</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 16.6667 10" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p26ac61c0} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Nimbus_Sans:Bold',sans-serif] gap-[4px] items-baseline leading-[0] not-italic pt-[8px] relative size-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px]">
          <p className="leading-[32px]">24.8%</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#16a34a] text-[11px]">
          <p className="leading-[14px]">+2.4%</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] w-full">
          <p className="leading-[18px]">Platform expansion index</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <Container13 />
        <Paragraph3 />
        <Container16 />
      </div>
    </div>
  );
}

function SectionKpiGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Section - KPI Grid">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] w-full">
          <p className="leading-[28px]">Usage by Region</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">EU-Central (Frankfurt)</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">42%</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ededfb] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#003ec7] h-[8px] left-0 right-[58%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Background />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">US-East (N. Virginia)</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">31%</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ededfb] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#003ec7] h-[8px] left-0 right-[69%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Background1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">US-West (Oregon)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">15%</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ededfb] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#003ec7] h-[8px] left-0 right-[85%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Background2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">AP-Southeast (Singapore)</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">8%</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ededfb] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#003ec7] h-[8px] left-0 right-[92%] rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Background3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative size-full">
        <Container18 />
        <Container22 />
        <Container26 />
        <Container30 />
      </div>
    </div>
  );
}

function PlatformUsageBreakdown() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Platform Usage breakdown">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Heading2 />
        <Container17 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">Growth Over Time</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Company and User acquisition (Last 12 Months)</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277.75px]" data-name="Container">
      <Heading3 />
      <Container36 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Companies</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#003ec7] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Users</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#505f76] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background" />
      <Container41 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[16px] h-[14px] items-start relative shrink-0" data-name="Container">
      <Container38 />
      <Container40 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container35 />
        <Container37 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[7.25px] left-[522px] top-[70.96px] w-[48.865px]" data-name="Text">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Nimbus_Sans:Bold',sans-serif] h-[7.25px] justify-center leading-[0] left-0 not-italic text-[#003ec7] text-[7.25px] top-[3.63px] w-[48.865px]">
        <p className="leading-[normal]">Current: 1,248</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute inset-px overflow-clip" data-name="SVG">
      <div className="absolute inset-[47.15%_0_24.31%_0]" data-name="Vector">
        <div className="absolute inset-[-0.58%_0.23%_-1%_0]">
          <svg className="block size-full" fill="none" height="73.645" preserveAspectRatio="none" viewBox="0 0 578.728 73.645" width="578.728">
            <path d={svgPaths.p1aa59280} id="Vector" stroke="var(--stroke-0, #64748B)" strokeDasharray="2.9" strokeWidth="1.45" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.73%_-0.5%_65.98%_99.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="5.8" preserveAspectRatio="none" viewBox="0 0 5.8 5.8" width="5.8">
          <path d={svgPaths.p1d7b0f00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Text />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">JAN</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">MAR</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">MAY</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">JUL</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">SEP</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">NOV</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">DEC</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bottom-px content-stretch flex h-[23px] items-start justify-between left-px px-[8px] py-[4px] right-px" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Border() {
  return (
    <div className="h-[256px] relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[#ededfb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Svg />
        <Container42 />
      </div>
    </div>
  );
}

function SystemPerformance() {
  return (
    <div className="bg-white col-[1/span_2] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="System Performance">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[41px] pt-[25px] px-[25px] relative size-full">
          <Container34 />
          <Border />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function ChartsSection() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_400px] pt-[16px] relative shrink-0 w-full" data-name="Charts Section">
      <PlatformUsageBreakdown />
      <SystemPerformance />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28px]">Entity Performance Matrix</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[13px] whitespace-nowrap">
        <p className="leading-[18px]">Detailed cross-metric analysis per organization</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-[268.06px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Container51 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[225.3px] pb-[17px] pt-[16px] px-[16px] right-[866.36px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PROJECTS</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[333.64px] pb-[17px] pt-[16px] px-[16px] right-[781.7px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">MRR</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.3px] pb-[17px] pt-[16px] px-[16px] right-[697.86px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ARR</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[502.14px] pb-[17px] pt-[16px] px-[16px] right-[597.25px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">REVENUE</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[602.75px] pb-[17px] pt-[16px] px-[16px] right-[515.91px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">USERS</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[684.09px] pb-[17px] pt-[16px] px-[16px] right-[432.53px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CHURN</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1020.25px] pb-[17px] pt-[16px] px-[16px] right-[92.94px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ACTION</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1107.06px] pb-[17px] pt-[16px] px-[16px] right-0 top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] text-right tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DETAILS</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 pb-[17px] pt-[16px] px-[24px] right-[974.7px] top-0" data-name="Cell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">COMPANY</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="h-[48.5px] relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[225.3px] px-[16px] py-[28.75px] right-[866.36px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">124</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[333.64px] px-[16px] py-[28.75px] right-[781.7px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$12,450</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.3px] px-[16px] py-[28.75px] right-[697.86px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$149.4k</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$42k</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">↑ 4%</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[518.14px] right-[613.25px] top-[28.75px]" data-name="Data">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Data4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[602.75px] px-[16px] py-[28.75px] right-[515.91px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">2.4k</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-start px-[9px] py-px relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#bbf7d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">0.8%</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[684.09px] pb-[27.75px] pt-[30.75px] px-[16px] right-[432.53px] top-0" data-name="Data">
      <BackgroundBorder1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">RENEW</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1020.25px] pb-[29.75px] pt-[31.75px] px-[16px] right-[92.94px] top-0" data-name="Data">
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 16 4" width="16">
        <g id="Button">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #737688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data7() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1107.06px] pb-[30.75px] pt-[22.75px] px-[16px] right-0 top-0" data-name="Data">
      <Button3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Background">
          <rect fill="var(--fill-0, #0052FF)" height="32" rx="4" width="32" />
          <path d={svgPaths.p1fcb0b40} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Nexus Labs Inc.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Enterprise Plan</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106.61px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Container56 />
    </div>
  );
}

function Data8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] py-[20.5px] right-[974.7px] top-0" data-name="Data">
      <Container55 />
    </div>
  );
}

function Row1() {
  return (
    <div className="h-[77.5px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
    </div>
  );
}

function Data9() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[225.3px] px-[16px] py-[28.75px] right-[866.36px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">42</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[333.64px] px-[16px] py-[28.75px] right-[781.7px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$4,200</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.3px] px-[16px] py-[28.75px] right-[697.86px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$50.4k</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$18k</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">↓ 2%</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[518.14px] right-[613.25px] top-[28.75px]" data-name="Data">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Data13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[602.75px] px-[16px] py-[28.75px] right-[515.91px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">840</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-start px-[9px] py-px relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#fecaca] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">4.2%</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[684.09px] pb-[27.75px] pt-[30.75px] px-[16px] right-[432.53px] top-0" data-name="Data">
      <BackgroundBorder2 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">UPSELL</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1020.25px] pb-[29.75px] pt-[31.75px] px-[16px] right-[92.94px] top-0" data-name="Data">
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 16 4" width="16">
        <g id="Button">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #737688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data16() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1107.06px] pb-[30.75px] pt-[22.75px] px-[16px] right-0 top-0" data-name="Data">
      <Button5 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AM</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Aether Media</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Growth Pro</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87.66px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <Container62 />
    </div>
  );
}

function Data17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] py-[20.5px] right-[974.7px] top-0" data-name="Data">
      <Container61 />
    </div>
  );
}

function Row2() {
  return (
    <div className="h-[77.5px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <Data9 />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[225.3px] pb-[28.25px] pt-[28.75px] px-[16px] right-[866.36px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[333.64px] pb-[28.25px] pt-[28.75px] px-[16px] right-[781.7px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$28,900</p>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[418.3px] pb-[28.25px] pt-[28.75px] px-[16px] right-[697.86px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$346.8k</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$89k</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">↑ 12%</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[518.14px] right-[613.25px] top-[28.75px]" data-name="Data">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Data22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[602.75px] pb-[28.25px] pt-[28.75px] px-[16px] right-[515.91px] top-0" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">5.2k</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-start px-[9px] py-px relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#bbf7d0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">0.2%</p>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[684.09px] pb-[27.25px] pt-[30.75px] px-[16px] right-[432.53px] top-0" data-name="Data">
      <BackgroundBorder3 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">REVIEW</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1020.25px] pb-[29.25px] pt-[31.75px] px-[16px] right-[92.94px] top-0" data-name="Data">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 16 4" width="16">
        <g id="Button">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #737688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Data25() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1107.06px] pb-[30.25px] pt-[22.75px] px-[16px] right-0 top-0" data-name="Data">
      <Button7 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#ffdbd2] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#952200] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">SK</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Skyline Kinematics</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[16.5px]">Custom Cluster</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127.83px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Container68 />
    </div>
  );
}

function Data26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] py-[20px] right-[974.7px] top-0" data-name="Data">
      <Container67 />
    </div>
  );
}

function Row3() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
      <Data25 />
      <Data26 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[1200px] relative shrink-0 w-[1200px]" data-name="Table">
      <Header />
      <Body />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <Table />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
          <p className="leading-[14px]">Showing 3 of 42 entities</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center opacity-50 px-[13px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Previous</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[13px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Next</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative size-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function SectionNewComprehensiveDataTableSection() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[768px]" data-name="Section - NEW COMPREHENSIVE DATA TABLE SECTION">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[17px] px-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container52 />
        <BackgroundHorizontalBorder />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function MainCanvasArea() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[256px] max-w-[1280px] p-[32px] right-0 top-[64px]" data-name="Main Canvas Area">
      <Bread />
      <SectionKpiGrid />
      <ChartsSection />
      <SectionNewComprehensiveDataTableSection />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[288px] opacity-50 right-[32px] top-[1948.5px]" data-name="Footer">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14px]">PerfektWerk OS Platform Analytics © 2024. All rights reserved. System V4.2.1-Enterprise</p>
      </div>
    </div>
  );
}

function Container75() {
  return <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[13.5px]" data-name="Container" />;
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start relative shrink-0 w-[256px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container74 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container77 />
      <div className="absolute bg-[#ba1a1a] right-[3.99px] rounded-[9999px] size-[8px] top-[4px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-[#fbf8ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(195,197,217,0.3)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Admin User</p>
      </div>
    </div>
  );
}

function Container81() {
  return <div className="h-[10px] relative shrink-0 w-full" data-name="Container" />;
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73.64px]" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Ab6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="AB6AXuAqBHQXbzBj4anhxyUabHGjASFoOGosd7aK0YLFQ7-mnJhCuvSMSokAtU3mTaP6__SmHAHzQsFWpWFb4FruhYnAvezDZeKVN6YadzsfmjNX6UDpBXJmmEljlTSxALo_jvjmhgz6oNGxjGuzhOuV18OxArN58C1Vg5hnmAmhF2IK8OitbiMJZL9TP8x-nPmFDjWdgt7sTpRiE2lsAyCQ8UnFBYjyyoesHxWSqu3xqBWoca2xmiL3xaRzJqHLAYuzCAZTFwXPNjADw08">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw08} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#e7e7f5] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container79 />
      <Ab6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button10 />
        <Margin />
        <Container78 />
      </div>
    </div>
  );
}

function HeaderTopNavBarAuthorityJson() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(251,248,255,0.8)] content-stretch flex h-[64px] items-center justify-between left-[256px] pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar (Authority: JSON)">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container73 />
      <Container76 />
    </div>
  );
}

function Container83() {
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

function Background7() {
  return (
    <div className="bg-[#003ec7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container83 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ENTERPRISE SUITE</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Container">
      <Heading />
      <Container85 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <Background7 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container82 />
      </div>
    </div>
  );
}

function Container86() {
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

function Container87() {
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
          <Container86 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
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

function Container89() {
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
          <Container88 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
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

function Container91() {
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
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{`Subscription & Finance`}</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container94() {
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

function Container95() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Support Center</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container96() {
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

function Container97() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Operations</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container98() {
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

function Container99() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Platform</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Analytics</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive6() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <div aria-hidden className="absolute border-[#003ec7] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container100 />
      <Container101 />
    </div>
  );
}

function Container102() {
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

function Container103() {
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
          <Container102 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-auto relative rounded-[inherit] size-full">
        <LinkDashboard />
        <LinkCompaniesActive />
        <LinkCompaniesActive1 />
        <LinkCompaniesActive2 />
        <LinkCompaniesActive3 />
        <LinkCompaniesActive4 />
        <LinkCompaniesActive5 />
        <LinkCompaniesActive6 />
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

function BackgroundBorder4() {
  return (
    <div className="bg-[#d9d9e7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Marcus Sterling</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] uppercase w-full">
        <p className="leading-[15px]">GLOBAL ADMIN</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container108() {
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

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <Container108 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <BackgroundBorder4 />
          <Container105 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container104 />
      </div>
    </div>
  );
}

function AsideSideNavigationShell() {
  return (
    <div className="absolute bg-[#fbf8ff] content-stretch flex flex-col h-[1387px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[8px] top-0 w-[256px]" data-name="Aside - Side Navigation Shell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-r border-solid inset-0 pointer-events-none" />
      <Margin1 />
      <Nav />
      <HorizontalBorder1 />
    </div>
  );
}

export default function PlatformAnalyticsDashboard() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Platform Analytics Dashboard">
      <MainCanvasArea />
      <Footer />
      <HeaderTopNavBarAuthorityJson />
      <AsideSideNavigationShell />
    </div>
  );
}