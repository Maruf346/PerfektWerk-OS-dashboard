import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  ExternalLink,
  Users,
  Mail,
} from "lucide-react";

// ─── Shared segmented control (matches Platform / Analytics style) ─────────────
function SegmentedControl({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: string[];
  activeTab: number;
  onChange: (i: number) => void;
}) {
  return (
    <div
      className="inline-flex items-center p-[5px] rounded-[8px] shrink-0 w-fit"
      style={{ background: "#f3f2ff", border: "1px solid #c3c5d9" }}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className="rounded-[6px] px-4 py-[6px] text-[12px] tracking-[0.6px] transition-colors whitespace-nowrap"
          style={{
            background: activeTab === i ? "#003ec7" : "transparent",
            color: activeTab === i ? "#fff" : "#434656",
            fontWeight: activeTab === i ? 600 : 500,
            boxShadow: activeTab === i ? "0px 1px 1px rgba(0,0,0,0.05)" : "none",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// ─── Leads page ───────────────────────────────────────────────────────────────
const stageColors: Record<string, { bg: string; color: string }> = {
  New: { bg: "#ededfb", color: "#003ec7" },
  Contacted: { bg: "#e0f2fe", color: "#0284c7" },
  "Demo Scheduled": { bg: "#fef9c3", color: "#92400e" },
  "Proposal Sent": { bg: "#dcfce7", color: "#166534" },
  Negotiation: { bg: "#fce7f3", color: "#9d174d" },
  Won: { bg: "#dcfce7", color: "#166534" },
  Lost: { bg: "#f1f5f9", color: "#64748b" },
};

const sourceColors: Record<string, { bg: string; color: string }> = {
  WEBSITE: { bg: "#ededfb", color: "#003ec7" },
  REFERRAL: { bg: "#dcfce7", color: "#166534" },
  "COLD OUTREACH": { bg: "#f1f5f9", color: "#64748b" },
};

const PAGE_SIZE = 5;

const leads = [
  {
    company: "CloudScale Dynamics",
    contact: "Jameson Blake",
    email: "j.blake@cloudscale.com",
    source: "WEBSITE",
    stage: "New",
    assignee: "SM",
    assigneeName: "Sarah M.",
    assigneeColor: "#003ec7",
  },
  {
    company: "IronForge Global",
    contact: "Elena Rodriguez",
    email: "elena.r@ironforge.io",
    source: "REFERRAL",
    stage: "Contacted",
    assignee: "DK",
    assigneeName: "David K.",
    assigneeColor: "#16a34a",
  },
  {
    company: "Apex Ventures",
    contact: "Marcus Thorne",
    email: "m.thorne@apex.com",
    source: "REFERRAL",
    stage: "Demo Scheduled",
    assignee: "LC",
    assigneeName: "Lisa C.",
    assigneeColor: "#dc2626",
  },
  {
    company: "Nova Retail Systems",
    contact: "Sarah Jenkins",
    email: "s.jenkins@novaretail.com",
    source: "WEBSITE",
    stage: "Proposal Sent",
    assignee: "SM",
    assigneeName: "Sarah M.",
    assigneeColor: "#003ec7",
  },
  {
    company: "Titan Logistics",
    contact: "Robert Vance",
    email: "rv@titanlogistics.com",
    source: "REFERRAL",
    stage: "Negotiation",
    assignee: "DK",
    assigneeName: "David K.",
    assigneeColor: "#16a34a",
  },
  {
    company: "Zenith Architecture",
    contact: "Catherine Wu",
    email: "cwu@zenitharch.com",
    source: "WEBSITE",
    stage: "Won",
    assignee: "LC",
    assigneeName: "Lisa C.",
    assigneeColor: "#dc2626",
  },
  {
    company: "Standard Steel Co.",
    contact: "Tom Wilson",
    email: "twilson@standardsteel.com",
    source: "COLD OUTREACH",
    stage: "Lost",
    assignee: "SM",
    assigneeName: "Sarah M.",
    assigneeColor: "#003ec7",
  },
];

const TOTAL_LEADS = 1284;
const NEW_THIS_WEEK = 48;

function LeadsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(leads.length / PAGE_SIZE);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">Leads</h1>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-6">
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[13px] text-[#505f76] mb-2">Total Leads</div>
              <div className="text-[40px] font-semibold text-[#191b25] tracking-[-0.4px]">
                {TOTAL_LEADS.toLocaleString()}
              </div>
            </div>
            <div className="size-10 bg-[#ededfb] rounded-lg flex items-center justify-center">
              <Users size={20} className="text-[#003ec7]" strokeWidth={1.8} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[13px] text-[#505f76] mb-2">New Leads (This Week)</div>
              <div className="text-[40px] font-semibold text-[#191b25] tracking-[-0.4px]">
                {NEW_THIS_WEEK}
              </div>
            </div>
            <div className="size-10 bg-[#fef9c3] rounded-lg flex items-center justify-center">
              <Mail size={20} className="text-[#ca8a04]" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[rgba(195,197,217,0.3)]">
          <div className="text-[13px] text-[#505f76]">
            Showing {leads.length} of {TOTAL_LEADS.toLocaleString()} leads
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f7f8fc]">
                {["COMPANY NAME", "CONTACT PERSON", "SOURCE", "STAGE", "ASSIGNED", "ACTIONS"].map(
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
              {leads.map((lead, i) => {
                const stage = stageColors[lead.stage] || { bg: "#f1f5f9", color: "#64748b" };
                const source = sourceColors[lead.source] || { bg: "#f1f5f9", color: "#64748b" };
                return (
                  <tr
                    key={i}
                    className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="text-[14px] font-semibold text-[#191b25]">{lead.company}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="size-8 rounded-full bg-[#d0e1fb] flex items-center justify-center text-[11px] font-bold text-[#54647a] shrink-0">
                          {lead.contact.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-[#191b25]">{lead.contact}</div>
                          <div className="text-[12px] text-[#505f76]">{lead.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
                        style={{ background: source.bg, color: source.color }}
                      >
                        {lead.source}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[12px] font-medium"
                        style={{ background: stage.bg, color: stage.color }}
                      >
                        {lead.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                          style={{ background: lead.assigneeColor }}
                        >
                          {lead.assignee}
                        </div>
                        <span className="text-[13px] text-[#434656]">{lead.assigneeName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(195,197,217,0.5)] text-[12px] font-medium text-[#003ec7] hover:bg-[#ededfb] transition-colors">
                          <ExternalLink size={13} />
                          Open
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors">
                          <MoreVertical size={16} className="text-[#737688]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-[#505f76] hover:bg-[#f0f0f8] rounded-lg disabled:opacity-40 transition-colors"
          >
            <ChevronLeft size={14} /> Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="size-8 rounded-lg text-[13px] font-medium transition-colors"
                style={{
                  background: page === p ? "#003ec7" : "transparent",
                  color: page === p ? "#fff" : "#505f76",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 text-[13px] text-[#505f76] hover:bg-[#f0f0f8] rounded-lg disabled:opacity-40 transition-colors"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Demo Requests & Opportunities page ──────────────────────────────────────
const demoStatusConfig: Record<string, { bg: string; color: string; border: string }> = {
  Pending:   { bg: "#fef9c3", color: "#854d0e", border: "#fde68a" },
  Scheduled: { bg: "#dbeafe", color: "#1e40af", border: "#bfdbfe" },
  Completed: { bg: "#dcfce7", color: "#166534", border: "#bbf7d0" },
  Cancelled: { bg: "#fee2e2", color: "#991b1b", border: "#fecaca" },
};

const demoRequests = [
  {
    company: "Zenith Systems",
    industry: "Industrial Infrastructure",
    date: "Oct 24, 2023",
    time: "08:41 AM",
    assignee: null,
    assigneeInitials: null,
    assigneeColor: null,
    status: "Pending",
  },
  {
    company: "BuildRight Construction",
    industry: "General Contracting",
    date: "Oct 22, 2023",
    time: "02:15 PM",
    assignee: "Sara Chen",
    assigneeInitials: "SC",
    assigneeColor: "#003ec7",
    status: "Scheduled",
  },
  {
    company: "Nova Logistics",
    industry: "Supply Chain Management",
    date: "Oct 18, 2023",
    time: "11:00 AM",
    assignee: "Marcus Aurelius",
    assigneeInitials: "MA",
    assigneeColor: "#16a34a",
    status: "Completed",
  },
  {
    company: "Apex Dev",
    industry: "Software Development",
    date: "Oct 18, 2023",
    time: "04:32 PM",
    assignee: "Tobias Schmidt",
    assigneeInitials: "TS",
    assigneeColor: "#9333ea",
    status: "Cancelled",
  },
  {
    company: "SkyBridge Technologies",
    industry: "Cloud Services",
    date: "Oct 15, 2023",
    time: "10:00 AM",
    assignee: null,
    assigneeInitials: null,
    assigneeColor: null,
    status: "Pending",
  },
  {
    company: "PinPoint Analytics",
    industry: "Business Intelligence",
    date: "Oct 12, 2023",
    time: "03:30 PM",
    assignee: "Sara Chen",
    assigneeInitials: "SC",
    assigneeColor: "#003ec7",
    status: "Scheduled",
  },
  {
    company: "RedRock Manufacturing",
    industry: "Heavy Industry",
    date: "Oct 10, 2023",
    time: "09:15 AM",
    assignee: "Marcus Aurelius",
    assigneeInitials: "MA",
    assigneeColor: "#16a34a",
    status: "Completed",
  },
];

const opportunityStageConfig: Record<string, { bg: string; color: string }> = {
  Negotiation: { bg: "#fce7f3", color: "#9d174d" },
  Discovery:   { bg: "#e0f2fe", color: "#0284c7" },
  Proposal:    { bg: "#ededfb", color: "#003ec7" },
  Closing:     { bg: "#dcfce7", color: "#166534" },
  Initiation:  { bg: "#fff7ed", color: "#c2410c" },
};

const opportunities = [
  {
    company: "Nova Dynamics Corp",
    description: "Cloud Migration Phase II",
    initial: "N",
    bg: "#003ec7",
    value: "$240,000",
    stage: "Negotiation",
    probability: 85,
    closeDate: "Oct 24, 2024",
  },
  {
    company: "BlueStar Logistics",
    description: "Global Fleet Update",
    initial: "B",
    bg: "#dc2626",
    value: "$120,000",
    stage: "Discovery",
    probability: 35,
    closeDate: "Jan 12, 2025",
  },
  {
    company: "Ethereal Softworks",
    description: "Infra Overhaul License",
    initial: "E",
    bg: "#003ec7",
    value: "$85,000",
    stage: "Proposal",
    probability: 60,
    closeDate: "Nov 08, 2024",
  },
  {
    company: "Titan Foundries",
    description: "Asset Management Pro",
    initial: "T",
    bg: "#737688",
    value: "$550,000",
    stage: "Closing",
    probability: 95,
    closeDate: "Oct 15, 2024",
  },
  {
    company: "Omnia Health",
    description: "Compliance Module",
    initial: "O",
    bg: "#f59e0b",
    value: "$88,500",
    stage: "Initiation",
    probability: 40,
    closeDate: "Feb 20, 2025",
  },
  {
    company: "GreenPath Energy",
    description: "Sustainability Platform",
    initial: "G",
    bg: "#16a34a",
    value: "$175,000",
    stage: "Discovery",
    probability: 50,
    closeDate: "Mar 05, 2025",
  },
  {
    company: "Ironclad Security",
    description: "Enterprise Security Suite",
    initial: "I",
    bg: "#7c3aed",
    value: "$310,000",
    stage: "Proposal",
    probability: 70,
    closeDate: "Dec 01, 2024",
  },
];

function DemoRequestsPage() {
  const [demoPage, setDemoPage] = useState(1);
  const [oppPage, setOppPage] = useState(1);
  const demoTotalPages = Math.ceil(demoRequests.length / PAGE_SIZE);
  const oppTotalPages = Math.ceil(opportunities.length / PAGE_SIZE);

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.6px]">
        <span className="text-[#737688] font-normal">SALES</span>
        <ChevronRight size={10} className="text-[#737688]" />
        <span className="text-[#191b25] font-normal">DEMO REQUEST AND OPPORTUNITIES</span>
      </div>

      {/* ── Demo Requests ─────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
            Demo Requests
          </h1>
          <p className="text-[14px] text-[#434656] mt-1">
            Manage and track incoming sales demonstration pipeline.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(195,197,217,0.3)]" style={{ background: "#f3f2ff" }}>
                  {[
                    { label: "COMPANY", w: "w-[30%]" },
                    { label: "REQUESTED DATE", w: "w-[18%]" },
                    { label: "ASSIGNED EMPLOYEE", w: "w-[22%]" },
                    { label: "STATUS", w: "w-[16%]" },
                    { label: "ACTIONS", w: "w-[14%] text-right" },
                  ].map((col) => (
                    <th
                      key={col.label}
                      className={`px-6 py-3 text-left text-[12px] font-semibold text-[#737688] uppercase tracking-[0.6px] ${col.w}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {demoRequests.map((req, i) => {
                  const status = demoStatusConfig[req.status];
                  return (
                    <tr
                      key={i}
                      className="border-b border-[rgba(195,197,217,0.15)] hover:bg-[#f9f9fc] transition-colors"
                    >
                      {/* Company */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-9 rounded-lg flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                            style={{
                              background: req.status === "Cancelled"
                                ? "#fee2e2"
                                : req.status === "Pending"
                                ? "#fef9c3"
                                : "#ededfb",
                              color: req.status === "Cancelled"
                                ? "#991b1b"
                                : req.status === "Pending"
                                ? "#854d0e"
                                : "#003ec7",
                            }}
                          >
                            {req.company[0]}
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-[#191b25]">
                              {req.company}
                            </div>
                            <div className="text-[12px] text-[#737688]">{req.industry}</div>
                          </div>
                        </div>
                      </td>

                      {/* Requested Date */}
                      <td className="px-6 py-4">
                        <div className="text-[13px] font-medium text-[#191b25]">{req.date}</div>
                        <div className="text-[12px] text-[#737688]">{req.time}</div>
                      </td>

                      {/* Assigned Employee */}
                      <td className="px-6 py-4">
                        {req.assignee ? (
                          <div className="flex items-center gap-2">
                            <div
                              className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                              style={{ background: req.assigneeColor! }}
                            >
                              {req.assigneeInitials}
                            </div>
                            <span className="text-[13px] text-[#191b25]">{req.assignee}</span>
                          </div>
                        ) : (
                          <span className="text-[13px] text-[#737688] italic">Unassigned</span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className="px-3 py-1 rounded-full text-[12px] font-semibold"
                          style={{
                            background: status.bg,
                            color: status.color,
                            border: `1px solid ${status.border}`,
                          }}
                        >
                          {req.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors">
                          <MoreVertical size={16} className="text-[#737688]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]" style={{ background: "#f3f2ff" }}>
            <span className="text-[13px] text-[#505f76]">Showing 1-10 of 124 requests</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setDemoPage(Math.max(1, demoPage - 1))}
                disabled={demoPage === 1}
                className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors"
              >
                <ChevronLeft size={13} className="text-[#505f76]" />
              </button>
              {Array.from({ length: demoTotalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setDemoPage(p)}
                  className="size-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors"
                  style={{
                    background: demoPage === p ? "#003ec7" : "transparent",
                    color: demoPage === p ? "#fff" : "#505f76",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setDemoPage(Math.min(demoTotalPages, demoPage + 1))}
                disabled={demoPage === demoTotalPages}
                className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors"
              >
                <ChevronRight size={13} className="text-[#505f76]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Opportunities ─────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[28px] font-semibold text-[#191b25] tracking-[-0.28px]">
          Opportunities
        </h2>

        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(195,197,217,0.3)]" style={{ background: "#f3f2ff" }}>
                  {[
                    { label: "COMPANY", w: "w-[24%]" },
                    { label: "ESTIMATED VALUE", w: "w-[16%]" },
                    { label: "STAGE", w: "w-[14%]" },
                    { label: "PROBABILITY", w: "w-[18%]" },
                    { label: "EXPECTED CLOSE DATE", w: "w-[18%]" },
                    { label: "ACTIONS", w: "w-[10%] text-right" },
                  ].map((col) => (
                    <th
                      key={col.label}
                      className={`px-6 py-3 text-left text-[12px] font-semibold text-[#737688] uppercase tracking-[0.6px] ${col.w}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opp, i) => {
                  const stage = opportunityStageConfig[opp.stage] || {
                    bg: "#f1f5f9",
                    color: "#64748b",
                  };
                  const probColor =
                    opp.probability >= 80
                      ? "#003ec7"
                      : opp.probability >= 50
                      ? "#16a34a"
                      : "#737688";
                  return (
                    <tr
                      key={i}
                      className="border-b border-[rgba(195,197,217,0.15)] hover:bg-[#f9f9fc] transition-colors"
                    >
                      {/* Company */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-9 rounded-lg flex items-center justify-center text-[14px] font-bold text-white shrink-0"
                            style={{ background: opp.bg }}
                          >
                            {opp.initial}
                          </div>
                          <div>
                            <div className="text-[14px] font-semibold text-[#191b25]">
                              {opp.company}
                            </div>
                            <div className="text-[12px] text-[#737688]">{opp.description}</div>
                          </div>
                        </div>
                      </td>

                      {/* Estimated Value */}
                      <td className="px-6 py-4">
                        <span className="text-[14px] font-semibold text-[#191b25]">
                          {opp.value}
                        </span>
                      </td>

                      {/* Stage */}
                      <td className="px-6 py-4">
                        <span
                          className="px-2.5 py-1 rounded-full text-[12px] font-medium"
                          style={{ background: stage.bg, color: stage.color }}
                        >
                          {opp.stage}
                        </span>
                      </td>

                      {/* Probability */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex-1 h-1.5 bg-[rgba(195,197,217,0.4)] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${opp.probability}%`,
                                background: probColor,
                              }}
                            />
                          </div>
                          <span
                            className="text-[13px] font-semibold shrink-0 w-8 text-right"
                            style={{ color: probColor }}
                          >
                            {opp.probability}%
                          </span>
                        </div>
                      </td>

                      {/* Expected Close Date */}
                      <td className="px-6 py-4 text-[13px] text-[#505f76]">{opp.closeDate}</td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors">
                          <MoreVertical size={16} className="text-[#737688]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]" style={{ background: "#f3f2ff" }}>
            <span className="text-[13px] text-[#505f76]">Showing 1-5 of 42 opportunities</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setOppPage(Math.max(1, oppPage - 1))}
                disabled={oppPage === 1}
                className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors"
              >
                <ChevronLeft size={13} className="text-[#505f76]" />
              </button>
              {Array.from({ length: oppTotalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setOppPage(p)}
                  className="size-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors"
                  style={{
                    background: oppPage === p ? "#003ec7" : "transparent",
                    color: oppPage === p ? "#fff" : "#505f76",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setOppPage(Math.min(oppTotalPages, oppPage + 1))}
                disabled={oppPage === oppTotalPages}
                className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors"
              >
                <ChevronRight size={13} className="text-[#505f76]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
export function SalesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SegmentedControl
        tabs={["Leads", "Demo Request and Opportunities"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === 0 ? <LeadsPage /> : <DemoRequestsPage />}
    </div>
  );
}
