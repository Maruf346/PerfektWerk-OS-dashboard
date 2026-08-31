import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Ban, CalendarX, Users, Filter } from "lucide-react";

const statCards = [
  { label: "TOTAL COMPANIES", value: "1,248", sub: "+12%", subColor: "#16a34a", icon: Users, iconBg: "#ededfb", iconColor: "#003ec7" },
  { label: "ACTIVE", value: "1,102", icon: CheckCircle, iconBg: "#dcfce7", iconColor: "#16a34a" },
  { label: "PENDING PAYMENT", value: "43", icon: Clock, iconBg: "#fef9c3", iconColor: "#ca8a04" },
  { label: "SUSPENDED", value: "18", icon: Ban, iconBg: "#fee2e2", iconColor: "#dc2626" },
  { label: "EXPIRED", value: "85", icon: CalendarX, iconBg: "#f1f5f9", iconColor: "#64748b" },
];

const allCompanies = [
  {
    initials: "HS",
    bg: "#003ec7",
    name: "Hochbau Solutions GmbH",
    email: "office@hochbau-solutions.de",
    vat: "DE987654321",
    reg: "HRB 123456",
    tax: "12/345/67890",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 92,
    healthColor: "#16a34a",
    plan: "Enterprise Pro",
    renewal: "Dec 12, 2024",
    projects: 24,
    users: 156,
  },
  {
    initials: "AC",
    bg: "#f59e0b",
    name: "Alpha Construction Ltd",
    email: "billing@alphaconst.co.uk",
    vat: "GB12233445",
    reg: "088776655",
    tax: "98/765/43210",
    statusLabel: "Pending Payment",
    statusColor: "#ca8a04",
    healthPct: 45,
    healthColor: "#f59e0b",
    plan: "Business Plus",
    planSub: "Overdue: 4 days",
    planSubColor: "#dc2626",
    projects: 2,
    users: 12,
  },
  {
    initials: "MT",
    bg: "#dc2626",
    name: "Meta-Tunneling Corp",
    email: "admin@metatunnel.com",
    vat: "US4455667788",
    reg: "DEL-990011",
    tax: "55/444/33322",
    statusLabel: "Suspended",
    statusColor: "#dc2626",
    healthPct: 12,
    healthColor: "#dc2626",
    plan: "Standard",
    planSub: "Suspended: Oct 10",
    planSubColor: "#737688",
    projects: 0,
    users: 5,
  },
  {
    initials: "NB",
    bg: "#059669",
    name: "Nordic Bridge Holdings",
    email: "contact@nordicbridge.no",
    vat: "NO123456789",
    reg: "NOR-445522",
    tax: "88/222/11100",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 78,
    healthColor: "#16a34a",
    plan: "Pro Annual",
    renewal: "Mar 01, 2025",
    projects: 11,
    users: 63,
  },
  {
    initials: "BG",
    bg: "#7c3aed",
    name: "BauWerk Global AG",
    email: "admin@bauwerk-global.de",
    vat: "DE554433221",
    reg: "HRB 998877",
    tax: "33/211/99988",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 88,
    healthColor: "#16a34a",
    plan: "Elite",
    renewal: "Jan 15, 2025",
    projects: 38,
    users: 210,
  },
  {
    initials: "PL",
    bg: "#0891b2",
    name: "Prestige Logistics BV",
    email: "finance@prestige-log.nl",
    vat: "NL332211009B01",
    reg: "KvK-88992211",
    tax: "44/321/55566",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 65,
    healthColor: "#f59e0b",
    plan: "Business Plus",
    renewal: "Feb 28, 2025",
    projects: 6,
    users: 41,
  },
  {
    initials: "GG",
    bg: "#be185d",
    name: "GreenGrid Systems",
    email: "ops@greengrid.io",
    vat: "GB99887766",
    reg: "GBR-334455",
    tax: "77/654/22211",
    statusLabel: "Pending Payment",
    statusColor: "#ca8a04",
    healthPct: 30,
    healthColor: "#f59e0b",
    plan: "Starter",
    planSub: "Overdue: 12 days",
    planSubColor: "#dc2626",
    projects: 1,
    users: 8,
  },
  {
    initials: "UI",
    bg: "#b45309",
    name: "Urban Infra Solutions",
    email: "hello@urbaninfra.pl",
    vat: "PL9988776655",
    reg: "KRS-0001122",
    tax: "11/222/33344",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 55,
    healthColor: "#f59e0b",
    plan: "Pro Annual",
    renewal: "Nov 30, 2024",
    projects: 9,
    users: 34,
  },
  {
    initials: "SW",
    bg: "#1d4ed8",
    name: "Stahl-Works AG",
    email: "billing@stahlworks.de",
    vat: "DE223344556",
    reg: "HRB 667788",
    tax: "22/456/78901",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 81,
    healthColor: "#16a34a",
    plan: "Enterprise Pro",
    renewal: "Jun 01, 2025",
    projects: 17,
    users: 98,
  },
  {
    initials: "EB",
    bg: "#dc2626",
    name: "EuroBuild Dynamics",
    email: "admin@eurobuild.fr",
    vat: "FR44556677881",
    reg: "SIREN-445566",
    tax: "55/789/12300",
    statusLabel: "Suspended",
    statusColor: "#dc2626",
    healthPct: 5,
    healthColor: "#dc2626",
    plan: "Standard",
    planSub: "Suspended: Oct 01",
    planSubColor: "#737688",
    projects: 0,
    users: 2,
  },
  {
    initials: "SS",
    bg: "#6366f1",
    name: "Stahl & Söhne AG",
    email: "info@stahl-soehne.at",
    vat: "AT456123789",
    reg: "FN 334455a",
    tax: "66/321/11200",
    statusLabel: "Active",
    statusColor: "#16a34a",
    healthPct: 71,
    healthColor: "#f59e0b",
    plan: "Pro Annual",
    renewal: "Oct 27, 2024",
    projects: 14,
    users: 77,
  },
  {
    initials: "RB",
    bg: "#0369a1",
    name: "RedStone Builders Ltd",
    email: "ops@redstone.ie",
    vat: "IE8833445W",
    reg: "CRO-556677",
    tax: "99/123/45678",
    statusLabel: "Pending Payment",
    statusColor: "#ca8a04",
    healthPct: 40,
    healthColor: "#f59e0b",
    plan: "Starter",
    planSub: "Overdue: 2 days",
    planSubColor: "#dc2626",
    projects: 3,
    users: 18,
  },
];

const ITEMS_PER_PAGE = 5;
const TOTAL = 128;

export function CompaniesPage() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const totalPages = Math.ceil(allCompanies.length / ITEMS_PER_PAGE);
  const companies = allCompanies.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold text-[#191b25]">Companies</h1>
        <p className="text-[14px] text-[#434656] mt-1">
          Manage enterprise clients, subscription lifecycles, and tenant health across the PerfektWerk OS ecosystem.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-4">
        {statCards.map((s, i) => (
          <div
            key={i}
            className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className="size-10 rounded-lg flex items-center justify-center"
                style={{ background: s.iconBg }}
              >
                <s.icon size={18} style={{ color: s.iconColor }} strokeWidth={1.8} />
              </div>
              {s.sub && (
                <span className="text-[12px] font-semibold text-[#16a34a]">{s.sub}</span>
              )}
            </div>
            <div className="text-[11px] font-medium text-[#505f76] uppercase tracking-[0.6px] mb-1">
              {s.label}
            </div>
            <div className="text-[28px] font-semibold text-[#191b25]">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-4">
        <div className="flex items-center gap-4 flex-wrap">
          {[
            { label: "Subscription Status", placeholder: "All Statuses" },
            { label: "Subscription Plan", placeholder: "All Plans" },
            { label: "Customer Health", placeholder: "Any Score" },
            { label: "Renewal Date", placeholder: "Next 30 Days" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col gap-1 min-w-[140px]">
              <label className="text-[11px] text-[#505f76] font-medium">{f.label}</label>
              <select className="text-[13px] border border-[rgba(195,197,217,0.5)] rounded-lg px-3 py-2 text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] appearance-none cursor-pointer">
                <option>{f.placeholder}</option>
              </select>
            </div>
          ))}
          <div className="ml-auto flex items-end gap-2">
            <button className="p-2 border border-[rgba(195,197,217,0.4)] rounded-lg hover:bg-[#f7f8fc] transition-colors">
              <Filter size={16} className="text-[#505f76]" />
            </button>
            <button className="bg-[#191b25] text-white text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-[#2d3048] transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(195,197,217,0.3)]">
          <h2 className="text-[18px] font-semibold text-[#191b25]">Active Portfolio</h2>
          <span className="text-[12px] font-semibold text-[#003ec7] bg-[#ededfb] px-2.5 py-0.5 rounded-full">
            {TOTAL} Total Found
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f7f8fc]">
                {["COMPANY DETAILS", "IDENTIFIERS", "STATUS & HEALTH", "SUBSCRIPTION", "ENGAGEMENT"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {companies.map((c, i) => (
                <tr
                  key={i}
                  onClick={() => navigate(`/companies/${i + 1}`)}
                  className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-9 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                        style={{ background: c.bg }}
                      >
                        {c.initials}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#191b25]">{c.name}</div>
                        <div className="text-[12px] text-[#505f76]">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[12px] text-[#434656] leading-relaxed">
                      <div>VAT: {c.vat}</div>
                      <div>Reg: {c.reg}</div>
                      <div>Tax ID: {c.tax}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="text-[14px] font-semibold mb-1"
                      style={{ color: c.statusColor }}
                    >
                      {c.statusLabel}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-[rgba(195,197,217,0.3)] rounded-full overflow-hidden w-24">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${c.healthPct}%`, background: c.healthColor }}
                        />
                      </div>
                      <span className="text-[12px] font-semibold" style={{ color: c.healthColor }}>
                        {c.healthPct}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[14px] font-semibold text-[#191b25]">{c.plan}</div>
                    {c.planSub && (
                      <div className="text-[12px]" style={{ color: c.planSubColor }}>
                        {c.planSub}
                      </div>
                    )}
                    {!c.planSub && (
                      <div className="text-[12px] text-[#505f76]">Renews: {c.renewal}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-[16px] font-semibold text-[#191b25]">{c.projects}</div>
                        <div className="text-[10px] text-[#505f76] uppercase">PROJECTS</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[16px] font-semibold text-[#191b25]">{c.users}</div>
                        <div className="text-[10px] text-[#505f76] uppercase">USERS</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <span className="text-[13px] text-[#505f76]">
            Showing {(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, allCompanies.length)} of {TOTAL} companies
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} className="text-[#505f76]" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`size-8 rounded-lg text-[13px] font-medium transition-colors ${
                  page === p
                    ? "bg-[#003ec7] text-white"
                    : "text-[#505f76] hover:bg-[#f0f0f8]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} className="text-[#505f76]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
