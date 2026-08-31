import svgPaths from "./svg-9m1v939krx";

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[20px] tracking-[-0.2px] whitespace-nowrap">
          <p className="leading-[28px]">PerfektWerk OS</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavPlaceholder() {
  return (
    <div className="bg-[#fbf8ff] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[64px] relative shrink-0 w-full" data-name="Header - Top Nav Placeholder">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-px px-[32px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function AsideSideNavPlaceholder() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[256px]" data-name="Aside - Side Nav Placeholder">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[16px] pr-[17px] py-[24px] relative size-full">
        <div className="bg-[rgba(0,82,255,0.2)] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay" />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="bg-[#e7e7f5] h-[32px] relative rounded-[4px] shrink-0 w-[256px]" data-name="Background" />
      <div className="bg-[#f3f2ff] h-[16px] relative rounded-[4px] shrink-0 w-[384px]" data-name="Background" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <div className="bg-[#f3f2ff] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Background" />
        <div className="bg-[#f3f2ff] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Background" />
        <div className="bg-[#f3f2ff] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Background" />
        <div className="bg-[#f3f2ff] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Background" />
      </div>
    </div>
  );
}

function DataTablePlaceholder() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Data Table Placeholder">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="bg-[#f3f2ff] h-[48px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
          <div aria-hidden className="absolute border-[rgba(195,197,217,0.3)] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <Container4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(195,197,217,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SectionCanvasPlaceholder() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Section - Canvas Placeholder">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
        <Container2 />
        <DataTablePlaceholder />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-name="Container">
      <AsideSideNavPlaceholder />
      <SectionCanvasPlaceholder />
    </div>
  );
}

function MainBackgroundInternalOperationsTasksScreenSimulatedContent() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="Main - Background: Internal Operations Tasks Screen (Simulated Content)">
      <HeaderTopNavPlaceholder />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[24px] tracking-[-0.24px] whitespace-nowrap">
          <p className="leading-[32px]">Create New Task</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
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

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[14px] pt-[8px] px-[8px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Header">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[32px] relative size-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">e.g., Upgrade Kubernetes clusters to v1.28</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative size-full">
          <Container6 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TaskDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Task Description">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TASK DESCRIPTION</p>
      </div>
      <Input />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="image">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] w-full">
          <p className="leading-[20px]">Select a member...</p>
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
        <div className="content-stretch flex items-center justify-center pl-[49px] pr-[17px] py-[13px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[262px] pr-[9px] py-[12.5px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#dde1ff] content-stretch flex items-center justify-center left-[12px] pb-[7px] pt-[6px] rounded-[9999px] size-[28px] top-1/2" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#001452] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">ME</p>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="absolute bottom-[23.91%] right-[12px] top-[23.91%] w-[12px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Background />
      <Container10 />
    </div>
  );
}

function AssignedTo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.5px] items-start min-w-px pt-[5.5px] relative" data-name="Assigned To">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ASSIGNED TO</p>
      </div>
      <Container8 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-px items-start leading-[0] not-italic pl-px pr-[1.01px] relative self-stretch shrink-0 text-[#191b25] text-[14px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">mm</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">dd</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">yyyy</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-start min-w-px overflow-clip relative" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Image1() {
  return <div className="h-[13.125px] relative shrink-0 w-[14px]" data-name="image" />;
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0 size-[18px]" data-name="Button menu">
      <Image1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container12 />
        <ButtonMenu />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[13px] relative size-full">
          <Container11 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DueDate() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.5px] items-start min-w-px pt-[5.5px] relative" data-name="Due Date">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DUE DATE</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <AssignedTo />
      <DueDate />
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center px-[17px] py-[13px] relative size-full">
          <div className="bg-[#d3e4fe] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Low</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center px-[17px] py-[13px] relative size-full">
          <div className="bg-[#b7c4ff] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Medium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#003ec7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center px-[17px] py-[13px] relative size-full">
          <div className="bg-[#003ec7] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
            <p className="leading-[20px]">High</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center px-[17px] py-[13px] relative size-full">
          <div className="bg-[#ba1a1a] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191b25] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Critical</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function PrioritySegmentedPicker() {
  return (
    <div className="content-stretch flex flex-col gap-[14.5px] items-start pt-[5.5px] relative shrink-0 w-full" data-name="Priority Segmented Picker">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PRIORITY LEVEL</p>
      </div>
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[20px]">Describe scope, dependencies, and expected outcomes...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[73px] pt-[13px] px-[17px] relative size-full">
          <Container14 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c3c5d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DetailedNotes() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] items-start pb-[6px] pt-[5.5px] relative shrink-0 w-full" data-name="Detailed Notes">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DETAILED OPERATIONAL NOTES</p>
      </div>
      <Textarea />
    </div>
  );
}

function ModalContentScrollableForm() {
  return (
    <div className="max-h-[716px] relative shrink-0 w-full" data-name="Modal Content (Scrollable Form)">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-h-[inherit] p-[32px] relative size-full">
          <TaskDescription />
          <Container7 />
          <PrioritySegmentedPicker />
          <DetailedNotes />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#003ec7] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[32px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Create Task</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
      <div aria-hidden className="absolute border-[rgba(195,197,217,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end pb-[24px] pt-[25px] px-[32px] relative size-full">
          <Button5 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function ModalContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[672px] overflow-clip relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[672px]" data-name="Modal Container">
      <ModalHeader />
      <ModalContentScrollableForm />
      <ModalFooter />
    </div>
  );
}

function ModalOverlay() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(25,27,37,0.4)] content-stretch flex inset-0 items-center justify-center p-[16px]" data-name="Modal Overlay">
      <ModalContainer />
    </div>
  );
}

export default function CreateTaskModal() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(251, 248, 255) 0%, rgb(251, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Create Task Modal">
      <MainBackgroundInternalOperationsTasksScreenSimulatedContent />
      <ModalOverlay />
    </div>
  );
}