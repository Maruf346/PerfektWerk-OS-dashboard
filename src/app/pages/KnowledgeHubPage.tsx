import { useNavigate } from "react-router";
import { FileText, HelpCircle, Wrench } from "lucide-react";

import serverRackImg from "figma:asset/e262b0d3b94250b3adc9aa6da59ffc379d0f0d4f.png";

export function KnowledgeHubPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#f7f8fc] p-8">
        {/* Header row with pill toggle */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[40px] font-black text-[#191b25] leading-tight">Agent Knowledge Hub</h1>
            <p className="text-[14px] text-[#737688] mt-2 max-w-xl leading-relaxed">
              Comprehensive reference material, advanced troubleshooting, and enterprise-grade
              operational standards for PerfektWerk OS agents.
            </p>
          </div>
          <div
            className="flex items-center p-[4px] rounded-[8px] shrink-0 ml-6"
            style={{ background: "#f3f2ff", border: "1px solid rgba(195,197,217,0.3)" }}
          >
            <button
              onClick={() => navigate("/support")}
              className="px-4 py-[6px] rounded-[6px] text-[12px] font-semibold tracking-[0.5px] transition-colors"
              style={{ background: "transparent", color: "#434656" }}
            >
              Support Management
            </button>
            <button
              className="px-4 py-[6px] rounded-[6px] text-[12px] font-semibold tracking-[0.5px] transition-colors"
              style={{ background: "#003ec7", color: "#fff", boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}
            >
              Knowledge Hub
            </button>
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-5">
          <h2 className="text-[18px] font-semibold text-[#191b25]">Browse by Category</h2>
          <p className="text-[13px] text-[#737688] mt-1">Select a domain to explore specific documentation.</p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-5 max-w-3xl">
          {/* Documentation */}
          <button
            onClick={() => navigate("/support/knowledge-hub/documentation")}
            className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6 text-left hover:shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
          >
            <div className="size-12 bg-[#ededfb] rounded-xl flex items-center justify-center mb-4">
              <FileText size={22} className="text-[#003ec7]" strokeWidth={1.8} />
            </div>
            <div className="text-[18px] font-semibold text-[#191b25] mb-2">Documentation</div>
            <p className="text-[13px] text-[#737688] leading-relaxed mb-4">
              Core product manuals, system architecture, and API references.
            </p>
            <div className="text-[12px] font-bold text-[#003ec7] tracking-[0.3px]">124 ARTICLES</div>
          </button>

          {/* FAQs */}
          <button
            onClick={() => navigate("/support/knowledge-hub/faqs")}
            className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6 text-left hover:shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
          >
            <div className="size-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center mb-4">
              <HelpCircle size={22} className="text-[#16a34a]" strokeWidth={1.8} />
            </div>
            <div className="text-[18px] font-semibold text-[#191b25] mb-2">FAQs</div>
            <p className="text-[13px] text-[#737688] leading-relaxed mb-4">
              Instant answers to the most common enterprise queries.
            </p>
            <div className="text-[12px] font-bold text-[#16a34a] tracking-[0.3px]">256 ENTRIES</div>
          </button>

          {/* Setup Guides — full-width with photo background */}
          <div className="col-span-2">
            <button
              onClick={() => navigate("/support/knowledge-hub/setup-guides")}
              className="w-full relative bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden text-left hover:shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all flex items-stretch"
            >
              {/* Text side */}
              <div className="flex-1 p-6">
                <div className="size-12 bg-[#fef9c3] rounded-xl flex items-center justify-center mb-4">
                  <Wrench size={22} className="text-[#ca8a04]" strokeWidth={1.8} />
                </div>
                <div className="text-[18px] font-semibold text-[#191b25] mb-2">Setup Guides</div>
                <p className="text-[13px] text-[#737688] leading-relaxed mb-4 max-w-sm">
                  Step-by-step walkthroughs for initial environment provisioning and security handshakes.
                </p>
                <div className="text-[12px] font-bold text-[#ca8a04] tracking-[0.3px]">42 ARTICLES</div>
              </div>
              {/* Photo side */}
              <div className="w-[280px] shrink-0 overflow-hidden">
                <img
                  src={serverRackImg}
                  alt="Server rack"
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
