function Button() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center pl-[26.84px] pr-[26.86px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#003ec7] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">System</p>
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pl-[22.28px] pr-[22.3px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#505f76] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">System</p>
        <p className="leading-[16px]">Users</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e7e7f5] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Background">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative size-full" data-name="Margin">
      <Background />
    </div>
  );
}