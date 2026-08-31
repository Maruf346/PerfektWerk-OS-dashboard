function Button() {
  return (
    <div className="bg-[#003ec7] drop-shadow-[0px_0.883px_0.883px_rgba(0,0,0,0.05)] relative rounded-[5.3px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[19.107px] pr-[19.116px] py-[5.3px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10.6px] text-center text-white tracking-[0.53px] whitespace-nowrap">
          <p className="leading-[14.134px] mb-0">Support</p>
          <p className="leading-[14.134px]">Management</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[14.134px] py-[5.3px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[10.6px] text-center tracking-[0.53px] whitespace-nowrap">
          <p className="leading-[14.134px] mb-0">Knowledge</p>
          <p className="leading-[14.134px]">Hub</p>
        </div>
      </div>
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="bg-[#f3f2ff] content-stretch flex items-start p-[4.416px] relative rounded-[7.067px] size-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-[0.883px] border-[rgba(195,197,217,0.3)] border-solid inset-0 pointer-events-none rounded-[7.067px]" />
      <Button />
      <Button1 />
    </div>
  );
}