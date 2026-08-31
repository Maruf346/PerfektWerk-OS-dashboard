import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle, Circle, ChevronLeft, ChevronRight } from "lucide-react";

function StarterIcon({ highlighted }: { highlighted?: boolean }) {
  const color = highlighted ? "#fff" : "#003ec7";
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.8" />
      <path d="M8 12h8M12 8v8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ProIcon({ highlighted }: { highlighted?: boolean }) {
  const color = highlighted ? "#fff" : "#003ec7";
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9H21.5L16 13.5L18.5 20.5L12 16.5L5.5 20.5L8 13.5L2.5 9H9.5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function EliteIcon({ highlighted }: { highlighted?: boolean }) {
  const color = highlighted ? "#fff" : "#003ec7";
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 21L12 18L6.5 21L7.5 14L3 9.5L9.5 8.5L12 3Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

const plans = [
  {
    name: "Starter",
    price: "49",
    desc: "Ideal for small teams and single-tenant environments.",
    features: [
      { label: "5 Administrator Seats", included: true },
      { label: "Core Module Access", included: true },
      { label: "Standard AI Processing", included: true },
      { label: "Advanced Security Suite", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "199",
    desc: "Optimized for growing enterprises with multi-region needs.",
    features: [
      { label: "25 Administrator Seats", included: true },
      { label: "Full Module Ecosystem", included: true },
      { label: "Enhanced AI (LLM Integration)", included: true },
      { label: "Priority Support", included: true },
    ],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Elite",
    price: "599",
    desc: "Unlimited scale for global conglomerates and critical infra.",
    features: [
      { label: "Unlimited Seats", included: true },
      { label: "Private Cloud Deployment", included: true },
      { label: "Custom AI Training", included: true },
      { label: "24/7 Dedicated Architect", included: true },
    ],
    highlighted: false,
  },
];

const allSubscriptionRequests = [
  {
    initials: "AV",
    bg: "#003ec7",
    company: "Acme Venture",
    id: "ID: #RQ-9012",
    currentPlan: "Starter",
    requestedPlan: "Enterprise Plus",
    billing: "Annual",
    date: "Oct 24, 2023",
    status: "Pending Review",
    statusBg: "#ededfb",
    statusColor: "#003ec7",
  },
  {
    initials: "GL",
    bg: "#16a34a",
    company: "Global Logistics",
    id: "ID: #RQ-8842",
    currentPlan: "Pro Monthly",
    requestedPlan: "Pro Annual",
    billing: "Annual",
    date: "Oct 22, 2023",
    status: "Invoice Sent",
    statusBg: "#fef9c3",
    statusColor: "#ca8a04",
  },
  {
    initials: "TX",
    bg: "#6366f1",
    company: "TechX Corp",
    id: "ID: #RQ-8711",
    currentPlan: "Free",
    requestedPlan: "Professional",
    billing: "Monthly",
    date: "Oct 20, 2023",
    status: "Paid",
    statusBg: "#dcfce7",
    statusColor: "#16a34a",
  },
  {
    initials: "ND",
    bg: "#dc2626",
    company: "Nebula Dynamics",
    id: "ID: #RQ-8690",
    currentPlan: "Enterprise",
    requestedPlan: "Custom Tier",
    billing: "Annual",
    date: "Oct 19, 2023",
    status: "Rejected",
    statusBg: "#fee2e2",
    statusColor: "#dc2626",
  },
  {
    initials: "SY",
    bg: "#f59e0b",
    company: "Synergy Hub",
    id: "ID: #RQ-8555",
    currentPlan: "Pro Annual",
    requestedPlan: "Enterprise",
    billing: "Annual",
    date: "Oct 18, 2023",
    status: "Pending Review",
    statusBg: "#ededfb",
    statusColor: "#003ec7",
  },
  {
    initials: "BF",
    bg: "#7c3aed",
    company: "BlueFin Analytics",
    id: "ID: #RQ-8501",
    currentPlan: "Starter",
    requestedPlan: "Pro Monthly",
    billing: "Monthly",
    date: "Oct 16, 2023",
    status: "Invoice Sent",
    statusBg: "#fef9c3",
    statusColor: "#ca8a04",
  },
  {
    initials: "OG",
    bg: "#0891b2",
    company: "OmegaGrid Corp",
    id: "ID: #RQ-8488",
    currentPlan: "Pro Annual",
    requestedPlan: "Elite",
    billing: "Annual",
    date: "Oct 15, 2023",
    status: "Paid",
    statusBg: "#dcfce7",
    statusColor: "#16a34a",
  },
  {
    initials: "IH",
    bg: "#be185d",
    company: "IronHaven Industries",
    id: "ID: #RQ-8421",
    currentPlan: "Starter",
    requestedPlan: "Pro Annual",
    billing: "Annual",
    date: "Oct 14, 2023",
    status: "Rejected",
    statusBg: "#fee2e2",
    statusColor: "#dc2626",
  },
  {
    initials: "NB",
    bg: "#059669",
    company: "Nordic Bridge Holdings",
    id: "ID: #RQ-8399",
    currentPlan: "Free",
    requestedPlan: "Starter",
    billing: "Monthly",
    date: "Oct 13, 2023",
    status: "Invoice Sent",
    statusBg: "#fef9c3",
    statusColor: "#ca8a04",
  },
  {
    initials: "VT",
    bg: "#b45309",
    company: "VoltaTech GmbH",
    id: "ID: #RQ-8344",
    currentPlan: "Pro Monthly",
    requestedPlan: "Elite",
    billing: "Annual",
    date: "Oct 11, 2023",
    status: "Pending Review",
    statusBg: "#ededfb",
    statusColor: "#003ec7",
  },
];

const SUBSCRIPTION_PAGE_SIZE = 5;

export function SubscriptionPage() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const totalPages = Math.ceil(allSubscriptionRequests.length / SUBSCRIPTION_PAGE_SIZE);
  const subscriptionRequests = allSubscriptionRequests.slice(
    (page - 1) * SUBSCRIPTION_PAGE_SIZE,
    page * SUBSCRIPTION_PAGE_SIZE
  );

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-semibold text-[#003ec7] tracking-[-0.28px]">
            Subscription Plans Management
          </h1>
          <p className="text-[14px] text-[#434656] mt-1">
            Manage commercial tiers, enterprise custom requests, and pricing structures.
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="flex gap-6 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 rounded-2xl flex flex-col ${
              plan.highlighted
                ? "bg-[#003ec7] text-white border-2 border-[#003ec7] shadow-xl relative"
                : "bg-white border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#003ec7] border-2 border-white text-white text-[11px] font-bold tracking-[0.5px] px-3 py-1 rounded-full">
                {plan.badge}
              </div>
            )}
            <div className="p-8 flex flex-col gap-5 flex-1">
              <div>
                {plan.name === "Starter" && <StarterIcon highlighted={plan.highlighted} />}
                {plan.name === "Pro" && <ProIcon highlighted={plan.highlighted} />}
                {plan.name === "Elite" && <EliteIcon highlighted={plan.highlighted} />}
              </div>
              <div>
                <div
                  className={`text-[24px] font-semibold ${plan.highlighted ? "text-white" : "text-[#191b25]"}`}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span
                    className={`text-[40px] font-semibold ${plan.highlighted ? "text-white" : "text-[#191b25]"}`}
                  >
                    €{plan.price}
                  </span>
                  <span className={`text-[14px] ${plan.highlighted ? "text-[rgba(255,255,255,0.7)]" : "text-[#737688]"}`}>
                    /mo
                  </span>
                </div>
              </div>
              <p
                className={`text-[13px] leading-relaxed ${plan.highlighted ? "text-[rgba(255,255,255,0.8)]" : "text-[#434656]"}`}
              >
                {plan.desc}
              </p>
              <div className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    {f.included ? (
                      <CheckCircle
                        size={16}
                        className={plan.highlighted ? "text-[rgba(255,255,255,0.9)]" : "text-[#003ec7]"}
                        strokeWidth={2}
                      />
                    ) : (
                      <Circle
                        size={16}
                        className={plan.highlighted ? "text-[rgba(255,255,255,0.4)]" : "text-[rgba(195,197,217,0.8)]"}
                        strokeWidth={2}
                      />
                    )}
                    <span
                      className={`text-[13px] ${
                        !f.included
                          ? plan.highlighted
                            ? "text-[rgba(255,255,255,0.4)]"
                            : "text-[rgba(195,197,217,0.8)]"
                          : plan.highlighted
                          ? "text-white"
                          : "text-[#434656]"
                      }`}
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-8">
              <button
                className={`w-full py-3 rounded-xl text-[14px] font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#003ec7] hover:bg-[#f0f0f8]"
                    : "border border-[rgba(195,197,217,0.5)] text-[#191b25] hover:bg-[#f7f8fc]"
                }`}
              >
                Edit Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Requests */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="px-6 py-5 border-b border-[rgba(195,197,217,0.3)]">
          <h2 className="text-[20px] font-semibold text-[#191b25]">Subscription Requests</h2>
          <p className="text-[13px] text-[#505f76] mt-0.5">
            Review and manage incoming enterprise subscription changes.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f3f2ff]">
                {["COMPANY NAME", "CURRENT PLAN", "REQUESTED PLAN", "BILLING", "DATE", "STATUS", "ACTIONS"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {subscriptionRequests.map((req, i) => (
                <tr
                  key={i}
                  onClick={() => navigate(`/subscription/request/${i + 1}`)}
                  className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                        style={{ background: req.bg }}
                      >
                        {req.initials}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#191b25]">{req.company}</div>
                        <div className="text-[11px] text-[#737688]">{req.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-[#434656]">{req.currentPlan}</td>
                  <td className="px-6 py-4 text-[13px] font-semibold text-[#003ec7]">
                    {req.requestedPlan}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-[#434656]">{req.billing}</td>
                  <td className="px-6 py-4 text-[13px] text-[#434656]">{req.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{ background: req.statusBg, color: req.statusColor }}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {req.status === "Invoice Sent" ? (
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#16a34a] text-white rounded-lg text-[12px] font-medium hover:bg-[#15803d] transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Mark as Paid
                      </button>
                    ) : (
                      <span className="text-[12px] text-[#a0a3b1]">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <span className="text-[13px] text-[#505f76]">
            Showing {(page - 1) * SUBSCRIPTION_PAGE_SIZE + 1}–{Math.min(page * SUBSCRIPTION_PAGE_SIZE, allSubscriptionRequests.length)} of {allSubscriptionRequests.length} requests
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 transition-colors"
            >
              <ChevronLeft size={16} className="text-[#505f76]" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`size-8 rounded-lg text-[13px] font-medium transition-colors ${
                  page === p ? "bg-[#003ec7] text-white" : "text-[#505f76] hover:bg-[#f0f0f8]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 transition-colors"
            >
              <ChevronRight size={16} className="text-[#505f76]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
