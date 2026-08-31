import { useNavigate } from "react-router";
import { ArrowLeft, X, FileText, Mail, Calendar, Tag, Diamond, Layers } from "lucide-react";

export function SubscriptionRequestDetailsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page-level header bar (mimics Figma design) */}
      <div className="bg-white border-b border-[rgba(195,197,217,0.35)] px-6 py-4 flex items-center gap-3 shrink-0">
        <button
          onClick={() => navigate("/subscription")}
          className="flex items-center gap-2 text-[#191b25] hover:text-[#003ec7] transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          <span className="text-[15px] font-semibold">Request Details - BauWerk Global</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#f7f8fc] p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-[#737688] uppercase tracking-[0.5px] mb-3">
          <span>Subscription Plans</span>
          <span>/</span>
          <span className="text-[#191b25] font-semibold">BauWerk Global</span>
        </div>

        {/* Title row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-[28px] font-semibold text-[#191b25]">Upgrade to Elite Plan</h1>
            <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#003ec7] border border-[#003ec7] rounded-full px-3 py-1">
              <span className="size-1.5 rounded-full bg-[#003ec7]" />
              Pending Review
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/subscription")}
              className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(195,197,217,0.6)] rounded-lg text-[13px] font-medium text-[#505f76] hover:bg-[#f7f8fc] transition-colors"
            >
              <X size={14} strokeWidth={2.5} />
              Reject Request
            </button>
            <button
              onClick={() => navigate("/subscription/invoice")}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] transition-colors"
            >
              <FileText size={14} strokeWidth={2} />
              Generate Invoice
            </button>
          </div>
        </div>

        {/* Two-column content */}
        <div className="flex gap-5">
          {/* Left – Company Info */}
          <div className="w-[380px] shrink-0 bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
            <div className="flex items-start justify-between mb-5">
              <span className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px]">COMPANY INFO</span>
              <div className="size-10 rounded-lg bg-[#f0f0f8] flex items-center justify-center">
                <Layers size={18} className="text-[#c3c5d9]" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mb-5">
              <div className="text-[12px] text-[#737688] mb-1">Company Name</div>
              <div className="text-[20px] font-bold text-[#191b25]">BauWerk Global</div>
            </div>

            <div className="flex items-start gap-3 mb-6 p-4 bg-[#f7f8fc] rounded-xl">
              <div className="size-9 rounded-lg bg-[#ededfb] flex items-center justify-center shrink-0">
                <Mail size={16} className="text-[#003ec7]" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[12px] text-[#737688] mb-0.5">Contact Email</div>
                <div className="text-[13px] font-medium text-[#191b25]">licensing@bauwerk-intl.com</div>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-3">ACCOUNT MANAGER</div>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-[#f59e0b] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                  SD
                </div>
                <span className="text-[14px] font-medium text-[#191b25]">Sarah Dietrich</span>
              </div>
            </div>
          </div>

          {/* Right – Subscription Details */}
          <div className="flex-1 bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
            <div className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-5">SUBSCRIPTION DETAILS</div>

            {/* Plan comparison boxes */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 rounded-xl border border-[rgba(195,197,217,0.4)] p-4">
                <div className="text-[12px] text-[#737688] mb-2">Current Plan</div>
                <div className="flex items-center gap-2">
                  <Diamond size={16} className="text-[#737688]" strokeWidth={1.8} />
                  <span className="text-[17px] font-bold text-[#191b25]">Professional</span>
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-[#003ec7] bg-[#ededfb] p-4">
                <div className="text-[12px] text-[#003ec7] font-medium mb-2">Requested Plan</div>
                <div className="flex items-center gap-2">
                  <Diamond size={16} className="text-[#003ec7]" strokeWidth={2} />
                  <span className="text-[17px] font-bold text-[#003ec7]">Elite</span>
                </div>
              </div>
            </div>

            {/* Detail rows */}
            <div className="flex flex-col gap-0 divide-y divide-[rgba(195,197,217,0.25)]">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2.5 text-[13px] text-[#737688]">
                  <Calendar size={15} strokeWidth={1.8} />
                  Billing Cycle
                </div>
                <span className="text-[14px] font-semibold text-[#191b25]">Annual</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2.5 text-[13px] text-[#737688]">
                  <Calendar size={15} strokeWidth={1.8} />
                  Requested Date
                </div>
                <span className="text-[14px] font-medium text-[#191b25]">Oct 24, 2023 · 14:32 GMT</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2.5 text-[13px] text-[#737688]">
                  <Tag size={15} strokeWidth={1.8} />
                  Estimated Revenue (YoY)
                </div>
                <span className="text-[16px] font-bold text-[#16a34a]">+$14,200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
