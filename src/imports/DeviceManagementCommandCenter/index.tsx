import svgPaths from "./svg-wot5cd9pxt";
import imgAb6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw08 from "./023c4c4a6583f4c1c2639b041e9744ea76f93423.png";
import imgAb6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy from "./d96b9f61744cf6433a27717da9f21614c95aeddb.png";

function Button() {
  return (
    <div className="bg-[#003ec7] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[16px]">Device Management</p>
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
          <p className="leading-[16px]">Audit Logs</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Hardware Asset Registry</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Monitor and manage high-precision sensor arrays, scanners, and industrial IoT</p>
        <p className="leading-[24px]">hardware deployed across global operations.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[594.41px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function PageHeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Page Header Section">
      <Container />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[24px] relative shrink-0 w-[209.47px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DEVICE NAME</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[118.19px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px] mb-0">SERIAL</p>
        <p className="leading-[16px]">NUMBER</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[24px] relative shrink-0 w-[126.23px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">COMPANY</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24.5px] pt-[23.5px] px-[24px] relative shrink-0 w-[148.06px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">STATUS</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24.5px] pt-[23.5px] px-[24px] relative shrink-0 w-[117.34px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FIRMWARE</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[96.28px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px] mb-0">LAST</p>
        <p className="leading-[16px]">SYNC</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[rgba(243,242,255,0.5)] content-stretch flex items-start relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.pb4d1000} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[35.86px]" data-name="Background">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">LiDAR Scanner</p>
        <p className="leading-[20px]">Pro</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Industrial/Scanning</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[102.16px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[161.47px]" data-name="Data">
      <Background />
      <Container3 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[48px] pr-[24px] pt-[28.5px] relative shrink-0 w-[142.19px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
        <p className="leading-[18px] mb-0">PW-8829-</p>
        <p className="leading-[18px]">XQ</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28px] pt-[26.5px] px-[24px] relative shrink-0 w-[126.23px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">BauWerk</p>
        <p className="leading-[20px]">Global</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#16a34a] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#15803d] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Online</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[34.5px] pt-[38px] px-[24px] relative shrink-0 w-[148.06px]" data-name="Data">
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-start justify-center px-[8px] py-[0.5px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[18px]">v4.2.1</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[35.5px] pt-[40px] px-[24px] relative shrink-0 w-[117.34px]" data-name="Data">
      <Background2 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[29.5px] pt-[29px] px-[24px] relative shrink-0 w-[96.28px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
        <p className="leading-[18px] mb-0">2 mins</p>
        <p className="leading-[18px]">ago</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21.4px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.4" preserveAspectRatio="none" viewBox="0 0 22 21.4" width="22">
        <g id="Container">
          <path d={svgPaths.p206d5540} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[39.25px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Crane Sensor</p>
        <p className="leading-[20px]">v2</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Heavy Machinery</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92.28px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[161.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background3 />
        <Container7 />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[142.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pl-[48px] pr-[24px] pt-[29px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">PW-2210-</p>
          <p className="leading-[18px]">CR</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[126.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[38px] pt-[37px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{`Stahl & Co.`}</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#d97706] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b45309] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Maintenance</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[148.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34.5px] pt-[38.5px] px-[24px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-start justify-center px-[8px] py-[0.5px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[18px]">v3.9.0</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[117.34px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[35.5px] pt-[40.5px] px-[24px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[96.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[20.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">45</p>
          <p className="leading-[18px] mb-0">mins</p>
          <p className="leading-[18px]">ago</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-px px-[24px] relative size-full">
          <Data6 />
          <Data7 />
          <Data8 />
          <Data9 />
          <Data10 />
          <Data11 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p22342900} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[36.39px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Thermal Monitor</p>
        <p className="leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Environment</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112.19px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[161.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background6 />
        <Container11 />
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[142.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pl-[48px] pr-[24px] pt-[29px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">PW-5501-</p>
          <p className="leading-[18px]">TM</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[126.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[28px] pt-[27px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
          <p className="leading-[20px] mb-0">BauWerk</p>
          <p className="leading-[20px]">Global</p>
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#dc2626] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b91c1c] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Error</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[148.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34.5px] pt-[38.5px] px-[24px] relative size-full">
        <Background7 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-start justify-center px-[8px] py-[0.5px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[18px]">v4.1.2</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[117.34px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[35.5px] pt-[40.5px] px-[24px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[96.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[29.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">14 Oct</p>
          <p className="leading-[18px]">2023</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-px px-[24px] relative size-full">
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
          <Data16 />
          <Data17 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18.65px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18.65 19" width="18.65">
        <g id="Container">
          <path d={svgPaths.p521cb00} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-[39.7px]" data-name="Background">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Edge Gateway</p>
        <p className="leading-[20px]">X</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Connectivity</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96.96px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[161.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background9 />
        <Container15 />
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[142.19px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[29.5px] pl-[48px] pr-[24px] pt-[29px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">PW-0021-</p>
          <p className="leading-[18px]">GW</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[126.23px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[37.5px] pt-[37px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Nordic Infra</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="bg-[#64748b] relative rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[11px] whitespace-nowrap">
        <p className="leading-[14px]">Offline</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[148.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[34px] pt-[38.5px] px-[24px] relative size-full">
        <Background10 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-start justify-center px-[8px] py-[0.5px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[18px]">v2.4.5</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[117.34px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[35px] pt-[40.5px] px-[24px] relative size-full">
        <Background11 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[96.28px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[29px] pt-[29.5px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[13px] whitespace-nowrap">
          <p className="leading-[18px] mb-0">2 hours</p>
          <p className="leading-[18px]">ago</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 4">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pt-px px-[24px] relative size-full">
          <Data18 />
          <Data19 />
          <Data20 />
          <Data21 />
          <Data22 />
          <Data23 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function PrecisionDataTableTable() {
  return (
    <div className="relative shrink-0 w-full" data-name="Precision Data Table → Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[13px] whitespace-nowrap">
          <p>
            <span className="leading-[18px]">{`Showing `}</span>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#191b25]">1 - 4</span>
            <span className="leading-[18px]">{` of `}</span>
            <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic text-[#191b25]">1,284</span>
            <span className="leading-[18px]">{` devices`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #191B25)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-30 p-px relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container20 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#003ec7] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">...</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">321</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #191B25)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[4px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Container21 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function TablePagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Pagination">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[24px] pt-[25px] px-[24px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function MainDataTableContainer() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[839px]" data-name="Main Data Table Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <PrecisionDataTableTable />
        <TablePagination />
      </div>
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PageContentArea() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 max-w-[1280px] px-[32px] py-[40px] right-0 top-[83px]" data-name="Page Content Area">
      <BackgroundBorder />
      <PageHeaderSection />
      <MainDataTableContainer />
    </div>
  );
}

function Container25() {
  return <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[13.5px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start relative shrink-0 w-[256px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container27() {
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

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container27 />
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

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Admin User</p>
      </div>
    </div>
  );
}

function Container31() {
  return <div className="h-[10px] relative shrink-0 w-full" data-name="Container" />;
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73.64px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Ab6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="AB6AXuAqBHQXbzBj4anhxyUabHGjASFoOGosd7aK0YLFQ7-mnJhCuvSMSokAtU3mTaP6__SmHAHzQsFWpWFb4FruhYnAvezDZeKVN6YadzsfmjNX6UDpBXJmmEljlTSxALo_jvjmhgz6oNGxjGuzhOuV18OxArN58C1Vg5hnmAmhF2IK8OitbiMJZL9TP8x-nPmFDjWdgt7sTpRiE2lsAyCQ8UnFBYjyyoesHxWSqu3xqBWoca2xmiL3xaRzJqHLAYuzCAZTFwXPNjADw08">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw08} />
      </div>
      <div aria-hidden className="absolute border-2 border-[#e7e7f5] border-solid inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container29 />
      <Ab6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button8 />
        <Margin />
        <Container28 />
      </div>
    </div>
  );
}

function HeaderTopNavBarAuthorityJson() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(251,248,255,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[32px] right-0 top-0" data-name="Header - TopNavBar (Authority: JSON)">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container23 />
      <Container26 />
    </div>
  );
}

function Container34() {
  return <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[13.5px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[30px] items-start relative shrink-0 w-[256px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Container36() {
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

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container36 />
      <div className="absolute bg-[#ba1a1a] right-[3.99px] rounded-[9999px] size-[8px] top-[4px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-[#fbf8ff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
        <g id="Container">
          <path d={svgPaths.p88bd680} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">EN</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.93333" preserveAspectRatio="none" viewBox="0 0 8 4.93333" width="8">
        <g id="Container" opacity="0.5">
          <path d={svgPaths.p5cc7680} fill="var(--fill-0, #434656)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start px-[8px] relative shrink-0 w-[17px]" data-name="Margin">
      <div className="bg-[rgba(195,197,217,0.3)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] text-right tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">Admin User</p>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="h-[10px] relative shrink-0 w-full" data-name="Container" />;
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73.64px]" data-name="Container">
      <Container42 />
      <Container43 />
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

function Container40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container41 />
      <Ab6AXuAqBhqXbzBj4AnhxyUabHGjAsFoOGosd7AK0Ylfq7MnJhCuvSmSokAtU3MTaP6SmHaHzQsFWpWFb4FruhYnAvezDZeKvn6YadzsfmjNx6UDpBxJmmEljlTSxALoJvjmhgz6ONGxjGuzhOuV18OxArN58C1Vg5HnmAmhF2Ik8OitbiMjzl9Tp8XNPmFDjWdgt7STpRiE2LsAyCq8UnFbYjyyoesHxWSqu3XqBWoca2XmiL3XaRzJqHlaYuzCaztFwXpNjADw />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button9 />
        <Button10 />
        <Margin1 />
        <Container40 />
      </div>
    </div>
  );
}

function HeaderTopNavBarAuthorityJson1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(251,248,255,0.8)] content-stretch flex h-[64px] items-center justify-between pb-px px-[32px] right-0 top-0 w-[1024px]" data-name="Header - TopNavBar (Authority: JSON)">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container32 />
      <Container35 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="h-[899px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <PageContentArea />
      <HeaderTopNavBarAuthorityJson />
      <HeaderTopNavBarAuthorityJson1 />
    </div>
  );
}

function Container45() {
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

function Background12() {
  return (
    <div className="bg-[#003ec7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container45 />
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ENTERPRISE SUITE</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Container">
      <Heading />
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <Background12 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container48() {
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

function Container49() {
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
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
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

function Container51() {
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
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
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

function Container53() {
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
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container54() {
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

function Container55() {
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
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
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

function Container57() {
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
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
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

function Container59() {
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
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Container">
          <path d={svgPaths.p105c2000} fill="var(--fill-0, #003EC7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Platform</p>
        </div>
      </div>
    </div>
  );
}

function LinkCompaniesActive5() {
  return (
    <div className="bg-[#d0e1fb] content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[10px] relative rounded-[8px] shrink-0 w-[223px]" data-name="Link - Companies (ACTIVE)">
      <div aria-hidden className="absolute border-[#003ec7] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
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

function Container63() {
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
          <Container62 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
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

function Container65() {
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
          <Container64 />
          <Container65 />
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

function BackgroundBorder1() {
  return (
    <div className="bg-[#d9d9e7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuA1Cp5XTppScp6KczKwNluztpxHftJLv7ZdQUrdlWSe7BreyIsAh91Rw3LHpQ9HbaoVjFQi24SSlJvoe1McYo5Rf8Hxwo3De3F9ULfzpiWvwfJwHkLn9KWuRwtSrBu911DxFtrTooabZzqViruPoTz7DBqy7MkyS2H00QWncf8PQVxjTEdY3ED6WgMvTn7W6O1SLxMgNi9Lyv267MGd2JDhGmQ1LEi4T0QW0ZaKw3Lhy />
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Marcus Sterling</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737688] text-[10px] uppercase w-full">
        <p className="leading-[15px]">GLOBAL ADMIN</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
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
      <Container70 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <BackgroundBorder1 />
          <Container67 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#c3c5d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function AsideSideNavigationShell() {
  return (
    <div className="absolute bg-[#fbf8ff] content-stretch flex flex-col h-[1010px] items-start justify-between left-0 pl-[16px] pr-[17px] py-[8px] top-0 w-[256px]" data-name="Aside - Side Navigation Shell">
      <div aria-hidden className="absolute border-[#c3c5d9] border-r border-solid inset-0 pointer-events-none" />
      <Margin2 />
      <Nav />
      <HorizontalBorder />
    </div>
  );
}

export default function DeviceManagementCommandCenter() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 248, 255) 0%, rgb(251, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Device Management Command Center">
      <MainContentCanvas />
      <AsideSideNavigationShell />
    </div>
  );
}