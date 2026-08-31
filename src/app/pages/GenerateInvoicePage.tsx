import { useState } from "react";
import { useNavigate } from "react-router";
import { FileText, Building2, Send, ChevronDown, ChevronRight } from "lucide-react";

export function GenerateInvoicePage() {
  const navigate = useNavigate();
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2024-001");
  const [dueDate, setDueDate] = useState("11/15/26");
  const [company, setCompany] = useState("Aetheria Tech Solutions Ltd.");
  const [plan, setPlan] = useState("Enterprise Annual - Tier 3");
  const [amount, setAmount] = useState("11,988.00");
  const [bankDetails, setBankDetails] = useState(
    "Bank: International Merchant Trust\nIBAN: US89 1029 3847 5612 0098\nSwift: IMTRUS33\nReference: [INV-NUMBER]"
  );
  const [notes, setNotes] = useState("");

  const companies = [
    "Aetheria Tech Solutions Ltd.",
    "BauWerk Global",
    "Hochbau Solutions GmbH",
    "Alpha Construction Ltd",
    "Meta-Tunneling Corp",
    "Nordic Infra Solutions",
    "Apex Construction",
  ];

  const subscriptionPlans = [
    "Enterprise Annual - Tier 3",
    "Enterprise Annual - Tier 2",
    "Enterprise Annual - Tier 1",
    "Pro Annual",
    "Pro Monthly",
    "Starter Monthly",
    "Elite Annual",
  ];

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="flex-1 overflow-y-auto bg-[#f7f8fc] p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#737688] mb-4">
          <button
            onClick={() => navigate("/subscription")}
            className="hover:text-[#003ec7] transition-colors"
          >
            subscription Plans
          </button>
          <ChevronRight size={13} className="text-[#c3c5d9]" />
          <span className="text-[#003ec7] font-medium">Generate Invoice</span>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[28px] font-semibold text-[#191b25]">Generate New Invoice</h1>
            <p className="text-[13px] text-[#737688] mt-1">
              Create and dispatch billing documents for enterprise subscriptions.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] transition-colors shrink-0">
            <Send size={14} strokeWidth={2} />
            Send Email
          </button>
        </div>

        {/* Invoice Configuration section */}
        <div className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6 mb-5">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={18} className="text-[#003ec7]" strokeWidth={2} />
            <h2 className="text-[16px] font-semibold text-[#003ec7]">Invoice Configuration</h2>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            {/* Invoice Number */}
            <div>
              <label className="block text-[12px] font-medium text-[#505f76] mb-2">Invoice Number</label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors"
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-[12px] font-medium text-[#505f76] mb-2">Due Date</label>
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors"
              />
            </div>

            {/* Company */}
            <div className="relative">
              <label className="block text-[12px] font-medium text-[#505f76] mb-2">Company</label>
              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors pr-10 cursor-pointer"
              >
                {companies.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-[42px] text-[#737688] pointer-events-none" />
            </div>

            {/* Subscription Plan */}
            <div className="relative">
              <label className="block text-[12px] font-medium text-[#505f76] mb-2">Subscription Plan</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors pr-10 cursor-pointer"
              >
                {subscriptionPlans.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-[42px] text-[#737688] pointer-events-none" />
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">Amount (USD)</label>
            <div className="flex items-center border border-[rgba(195,197,217,0.5)] rounded-xl overflow-hidden focus-within:border-[#003ec7] transition-colors bg-white">
              <span className="px-4 text-[14px] font-medium text-[#505f76] border-r border-[rgba(195,197,217,0.4)] py-3">$</span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-3 text-[15px] font-semibold text-[#191b25] bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Payment Instructions section */}
        <div className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-center gap-2 mb-6">
            <Building2 size={18} className="text-[#003ec7]" strokeWidth={2} />
            <h2 className="text-[16px] font-semibold text-[#003ec7]">Payment Instructions</h2>
          </div>

          {/* Bank details */}
          <div className="mb-5">
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">
              Offline Bank Transfer Details
            </label>
            <textarea
              value={bankDetails}
              onChange={(e) => setBankDetails(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[13px] font-mono text-[#434656] bg-white focus:outline-none focus:border-[#003ec7] transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Internal notes */}
          <div>
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">
              Internal Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes for internal records..."
              rows={4}
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[13px] text-[#434656] bg-white focus:outline-none focus:border-[#003ec7] transition-colors resize-none placeholder:text-[#c3c5d9]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
