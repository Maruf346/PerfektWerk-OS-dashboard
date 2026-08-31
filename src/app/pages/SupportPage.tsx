import { useState } from "react";
import { useNavigate } from "react-router";
import { Ticket, AlertCircle, Clock, CheckCircle2, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

const priorityConfig: Record<string, { color: string; dot: string }> = {
  CRITICAL: { color: "#dc2626", dot: "#dc2626" },
  HIGH: { color: "#f59e0b", dot: "#f59e0b" },
  MEDIUM: { color: "#3b82f6", dot: "#3b82f6" },
  LOW: { color: "#737688", dot: "#737688" },
};

const statusConfig: Record<string, { bg: string; color: string }> = {
  OPEN: { bg: "#fee2e2", color: "#dc2626" },
  "IN PROGRESS": { bg: "#dbeafe", color: "#1d4ed8" },
  "WAITING CUSTOMER": { bg: "#fef9c3", color: "#92400e" },
  RESOLVED: { bg: "#dcfce7", color: "#166534" },
};

const categoryConfig: Record<string, { bg: string; color: string }> = {
  "Device Issue": { bg: "#ededfb", color: "#003ec7" },
  "Technical Issue": { bg: "#fce7f3", color: "#9d174d" },
  "General Question": { bg: "#f0fdf4", color: "#166534" },
  "Measurement Issue": { bg: "#fff7ed", color: "#c2410c" },
  "Bug Report": { bg: "#fef9c3", color: "#92400e" },
};

const allTickets = [
  {
    id: "#TK-8821",
    company: "BuildMaster GmbH",
    companyInitials: "BM",
    subject: "Critical failure on sensor module B-12",
    created: "Oct 24, 08:32 AM",
    category: "Device Issue",
    priority: "CRITICAL",
    agent: "J. Weber",
    status: "OPEN",
  },
  {
    id: "#TK-8794",
    company: "Stahl-Works AG",
    companyInitials: "SW",
    subject: "API Authentication Timeout",
    created: "Oct 23, 11:45 PM",
    category: "Technical Issue",
    priority: "HIGH",
    agent: "M. Schmidt",
    status: "IN PROGRESS",
  },
  {
    id: "#TK-8788",
    company: "Prestige Logistics",
    companyInitials: "PL",
    subject: "Inquiry: Q4 Compliance Export",
    created: "Oct 22, 02:12 PM",
    category: "General Question",
    priority: "MEDIUM",
    agent: "Unassigned",
    status: "WAITING CUSTOMER",
  },
  {
    id: "#TK-8742",
    company: "Urban Infra Solutions",
    companyInitials: "UI",
    subject: "Measurement offset on Site 44",
    created: "Oct 20, 09:00 AM",
    category: "Measurement Issue",
    priority: "LOW",
    agent: "L. Klein",
    status: "RESOLVED",
  },
  {
    id: "#TK-8830",
    company: "GreenGrid Systems",
    companyInitials: "GG",
    subject: "Dashboard export CSV formatting bug",
    created: "Just now",
    category: "Bug Report",
    priority: "MEDIUM",
    agent: "J. Weber",
    status: "OPEN",
  },
  {
    id: "#TK-8715",
    company: "Nordic Bridge Holdings",
    companyInitials: "NB",
    subject: "LiDAR sync failure on EU-West cluster",
    created: "Oct 21, 04:15 PM",
    category: "Device Issue",
    priority: "CRITICAL",
    agent: "M. Schmidt",
    status: "IN PROGRESS",
  },
  {
    id: "#TK-8698",
    company: "BauWerk Global",
    companyInitials: "BG",
    subject: "Webhook not firing on status change",
    created: "Oct 19, 10:00 AM",
    category: "Technical Issue",
    priority: "HIGH",
    agent: "J. Weber",
    status: "OPEN",
  },
  {
    id: "#TK-8667",
    company: "Hochbau Solutions GmbH",
    companyInitials: "HS",
    subject: "Enterprise SSO token expiry issue",
    created: "Oct 18, 09:45 AM",
    category: "Technical Issue",
    priority: "HIGH",
    agent: "L. Klein",
    status: "RESOLVED",
  },
  {
    id: "#TK-8644",
    company: "Alpha Construction Ltd",
    companyInitials: "AC",
    subject: "Q3 invoice discrepancy found",
    created: "Oct 17, 03:30 PM",
    category: "General Question",
    priority: "MEDIUM",
    agent: "Unassigned",
    status: "WAITING CUSTOMER",
  },
  {
    id: "#TK-8601",
    company: "EuroBuild Dynamics",
    companyInitials: "EB",
    subject: "Temperature sensor reading offset on Unit 7",
    created: "Oct 16, 11:15 AM",
    category: "Measurement Issue",
    priority: "LOW",
    agent: "M. Schmidt",
    status: "RESOLVED",
  },
];

const TICKETS_PER_PAGE = 5;
const TOTAL_TICKETS_DISPLAY = 248;

const tabs = ["All Tickets (248)", "Active (42)", "Pending Customer (18)", "Archived"];

export function SupportPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const totalPages = Math.ceil(allTickets.length / TICKETS_PER_PAGE);
  const tickets = allTickets.slice((page - 1) * TICKETS_PER_PAGE, page * TICKETS_PER_PAGE);

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-semibold text-[#191b25]">Support Management</h1>
          <p className="text-[14px] text-[#434656] mt-1 max-w-xl">
            Monitoring global requests across enterprise infrastructure. 24 active tickets require immediate attention.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="flex items-center p-[4px] rounded-[8px]"
            style={{ background: "#f3f2ff", border: "1px solid rgba(195,197,217,0.3)" }}
          >
            <button
              className="px-4 py-[6px] rounded-[6px] text-[12px] font-semibold tracking-[0.5px] transition-colors"
              style={{ background: "#003ec7", color: "#fff", boxShadow: "0px 1px 1px rgba(0,0,0,0.05)" }}
            >
              Support Management
            </button>
            <button
              onClick={() => navigate("/support/knowledge-hub")}
              className="px-4 py-[6px] rounded-[6px] text-[12px] font-semibold tracking-[0.5px] transition-colors"
              style={{ background: "transparent", color: "#434656" }}
            >
              Knowledge Hub
            </button>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[11px] font-medium text-[#505f76] uppercase">OPEN TICKETS</span>
            <div className="size-9 bg-[#ededfb] rounded-lg flex items-center justify-center">
              <Ticket size={16} className="text-[#003ec7]" strokeWidth={1.8} />
            </div>
          </div>
          <div className="text-[36px] font-semibold text-[#191b25]">142</div>
          <div className="text-[12px] text-[#16a34a] mt-1">+12% from last week</div>
        </div>
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[11px] font-medium text-[#505f76] uppercase">URGENT CRITICAL</span>
            <div className="size-9 bg-[#fee2e2] rounded-lg flex items-center justify-center">
              <AlertCircle size={16} className="text-[#dc2626]" strokeWidth={1.8} />
            </div>
          </div>
          <div className="text-[36px] font-semibold text-[#191b25]">08</div>
          <div className="text-[12px] text-[#505f76] mt-1">Active escalations</div>
        </div>
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[11px] font-medium text-[#505f76] uppercase">AVG RESPONSE</span>
            <div className="size-9 bg-[#f0fdf4] rounded-lg flex items-center justify-center">
              <Clock size={16} className="text-[#16a34a]" strokeWidth={1.8} />
            </div>
          </div>
          <div className="text-[36px] font-semibold text-[#191b25]">1.4h</div>
          <div className="text-[12px] mt-1">
            <span className="text-[#16a34a] font-semibold">Excellent</span>
            <span className="text-[#505f76]"> status</span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[11px] font-medium text-[#505f76] uppercase">RESOLVED</span>
            <div className="size-9 bg-[#dcfce7] rounded-lg flex items-center justify-center">
              <CheckCircle2 size={16} className="text-[#16a34a]" strokeWidth={1.8} />
            </div>
          </div>
          <div className="text-[36px] font-semibold text-[#191b25]">94%</div>
          <div className="text-[12px] text-[#505f76] mt-1">CSAT score: 4.8/5.0</div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Tabs + Row count selector */}
        <div className="flex items-center justify-between px-6 border-b border-[rgba(195,197,217,0.3)]">
          <div className="flex">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-4 text-[13px] font-medium border-b-2 transition-colors ${
                  activeTab === i
                    ? "border-[#003ec7] text-[#003ec7]"
                    : "border-transparent text-[#505f76] hover:text-[#191b25]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#505f76]">Show:</span>
            <select className="text-[13px] border border-[rgba(195,197,217,0.4)] rounded-lg px-2 py-1 text-[#191b25] focus:outline-none">
              <option>25 Rows</option>
              <option>50 Rows</option>
              <option>100 Rows</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f7f8fc]">
                {["TICKET ID", "COMPANY", "SUBJECT", "CATEGORY", "PRIORITY", "AGENT", "STATUS", "ACTIONS"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, i) => {
                const priority = priorityConfig[ticket.priority] || priorityConfig.MEDIUM;
                const status = statusConfig[ticket.status] || statusConfig.OPEN;
                const category = categoryConfig[ticket.category] || { bg: "#f1f5f9", color: "#64748b" };
                return (
                  <tr
                    key={i}
                    onClick={() => navigate(`/support/ticket/${i + 1}`)}
                    className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4 text-[13px] font-semibold text-[#191b25] whitespace-nowrap">
                      {ticket.id}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded bg-[#ededfb] flex items-center justify-center text-[10px] font-bold text-[#003ec7] shrink-0">
                          {ticket.companyInitials}
                        </div>
                        <span className="text-[13px] text-[#191b25]">{ticket.company}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 max-w-[220px]">
                      <div className="text-[13px] font-medium text-[#191b25]">{ticket.subject}</div>
                      <div className="text-[11px] text-[#737688] mt-0.5">Created: {ticket.created}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className="px-2 py-1 rounded-md text-[11px] font-medium"
                        style={{ background: category.bg, color: category.color }}
                      >
                        {ticket.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="size-2 rounded-full shrink-0"
                          style={{ background: priority.dot }}
                        />
                        <span
                          className="text-[12px] font-semibold"
                          style={{ color: priority.color }}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      {ticket.agent === "Unassigned" ? (
                        <span className="text-[12px] text-[#737688]">Unassigned</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-full bg-[#d0e1fb] flex items-center justify-center text-[10px] font-bold text-[#54647a] shrink-0">
                            {ticket.agent.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <span className="text-[12px] text-[#434656]">{ticket.agent}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
                        style={{ background: status.bg, color: status.color }}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="p-1.5 hover:bg-[#f0f0f8] rounded-lg transition-colors">
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
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <span className="text-[13px] text-[#505f76]">
            Showing {(page - 1) * TICKETS_PER_PAGE + 1}–{Math.min(page * TICKETS_PER_PAGE, allTickets.length)} of {TOTAL_TICKETS_DISPLAY} tickets
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 transition-colors"
              disabled={page === 1}
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
