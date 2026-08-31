import type { ReactNode } from "react";
import { TrendingUp, Plus, ExternalLink, AlertTriangle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

function StatCard({
  label,
  value,
  sub,
  subColor = "#16a34a",
  accent = false,
}: {
  label: string;
  value: string;
  sub: ReactNode;
  subColor?: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between min-h-[222px] flex-1">
      <div className="flex flex-col gap-2">
        <div className="text-[12px] font-semibold text-[#505f76] tracking-[0.6px] uppercase leading-[16px]">
          {label}
        </div>
        <div
          className={`text-[32px] font-semibold tracking-[-0.32px] leading-[40px] ${accent ? "text-[#003ec7]" : "text-[#191b25]"}`}
        >
          {value}
        </div>
      </div>
      <div className="pt-4">{sub}</div>
    </div>
  );
}

function QuickMetric({
  label,
  value,
  valueColor = "#191b25",
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-[17px] flex flex-col gap-1 flex-1">
      <div className="text-[11px] font-medium text-[#505f76] uppercase">{label}</div>
      <div className="text-[16px] font-normal" style={{ color: valueColor }}>
        {value}
      </div>
    </div>
  );
}

const expiringSubscriptions = [
  { name: "Bauhaus Infrastructure Gmbh", plan: "Enterprise Plan", date: "Jun 12" },
  { name: "Stahl & Söhne Logistics", plan: "Advanced Plan", date: "Jun 15" },
  { name: "Nordic Wind Energy", plan: "Custom Tier", date: "Jun 21" },
];

const demoRequests = [
  { initials: "RH", bg: "#d0e1fb", textColor: "#54647a", company: "Rheinland Construction", time: "Today, 09:12 AM" },
  { initials: "EM", bg: "rgba(191,48,3,0.1)", textColor: "#952200", company: "EuroModul Prefab", time: "Yesterday, 04:30 PM" },
  { initials: "TL", bg: "#ededfb", textColor: "#434656", company: "TerraLink Systems", time: "May 28, 11:15 AM" },
];

const attentionCompanies = [
  { name: "Urban Sky Scrapers Ltd.", status: "OVERDUE", statusBg: "#ffdad6", statusColor: "#93000a", issue: "Payment failed (3 attempts)" },
  { name: "Mainland Bridge Consortium", status: "INACTIVE", statusBg: "rgba(191,48,3,0.1)", statusColor: "#952200", issue: "Zero user activity (14 days)" },
  { name: "Stahl & Söhne AG", status: "AT RISK", statusBg: "#fef9c3", statusColor: "#92400e", issue: "Subscription expires in 3 days" },
  { name: "Nordic Bridge Holdings", status: "OVERDUE", statusBg: "#ffdad6", statusColor: "#93000a", issue: "Invoice unpaid (Oct 01, 2023)" },
  { name: "EuroBuild Dynamics", status: "INACTIVE", statusBg: "rgba(191,48,3,0.1)", statusColor: "#952200", issue: "No logins in 21 days" },
];

const quickActions = [
  { label: "Create Company", icon: Plus },
  { label: "Create Announcement", icon: Plus },
  { label: "Open Support", icon: ExternalLink },
  { label: "Create Internal Task", icon: Plus },
];

const alerts = [
  { title: "API Latency Peak", desc: "Europe-West1 region experiencing 450ms+ response times.", time: "12 mins ago" },
  { title: "Backup Service Interruption", desc: "Hourly snapshot failed for node DW-04. Retrying...", time: "45 mins ago" },
];

const activities = [
  { dot: "#003ec7", text: "Admin User (Sarah J.) updated subscription for Global Build Corp.", time: "Just now" },
  { dot: "#737688", text: "System generated 1,240 monthly invoices for May 2024 billing cycle.", time: "2 hours ago" },
  { dot: "#737688", text: "DevOps Automator successfully migrated 14 databases to v2 cluster.", time: "5 hours ago" },
  { dot: "#952200", text: "Alert: Unauthorized access attempt blocked from IP 192.168.1.1.", time: "8 hours ago" },
];

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-0 min-h-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Main Content */}
      <div className="flex-1 min-w-0 p-6 flex flex-col gap-6">
        {/* Top 4 Stat Cards */}
        <div className="flex gap-6 items-stretch">
          <StatCard
            label={"MONTHLY RECURRING\nREVENUE"}
            value="$412,850.00"
            accent
            sub={
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#16a34a] shrink-0" />
                <span className="text-[13px] font-medium text-[#16a34a]">+12.4% from last month</span>
              </div>
            }
          />
          <StatCard
            label={"ANNUAL RECURRING\nREVENUE"}
            value="$4.95M"
            sub={
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#16a34a] shrink-0" />
                <span className="text-[13px] font-medium text-[#16a34a]">+8.2% projected growth</span>
              </div>
            }
          />
          <StatCard
            label="TOTAL COMPANIES"
            value="1,248"
            sub={
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold text-[#003ec7]">24</span>
                <span className="text-[13px] text-[#434656]">new this month</span>
              </div>
            }
          />
          <StatCard
            label="ACTIVE USERS"
            value="42.1K"
            sub={
              <div className="flex items-center gap-2">
                <div className="size-2 bg-[#22c55e] rounded-full shrink-0" />
                <span className="text-[13px] text-[#434656]">8.4K currently online</span>
              </div>
            }
          />
        </div>

        {/* Quick Metric Grid */}
        <div className="flex gap-4">
          <QuickMetric label="ACTIVE PROJECTS" value="8,520" />
          <QuickMetric label="OPEN TICKETS" value="42" valueColor="#952200" />
          <QuickMetric label="ACTIVE COMPANIES" value="1,192" />
        </div>

        {/* Expiring Subscriptions + Demo Requests */}
        <div className="flex gap-6">
          {/* Expiring Subscriptions */}
          <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(195,197,217,0.3)]">
              <div className="text-[16px] text-[#191b25]">Expiring Subscriptions</div>
              <div className="bg-[#ededfb] rounded-md px-2 py-1">
                <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Next 30 Days</span>
              </div>
            </div>
            {expiringSubscriptions.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4 border-b border-[rgba(195,197,217,0.15)] last:border-0"
              >
                <div>
                  <div className="text-[16px] font-semibold text-[#191b25] leading-tight">{s.name}</div>
                  <div className="text-[13px] text-[#505f76]">
                    {s.plan} • {s.date}
                  </div>
                </div>
                <button className="p-2 hover:bg-[#ededfb] rounded-lg transition-colors">
                  <ArrowRight size={16} className="text-[#003ec7]" />
                </button>
              </div>
            ))}
            <button
              onClick={() => navigate("/subscription")}
              className="w-full py-3 text-[13px] font-medium text-[#003ec7] border-t border-[rgba(195,197,217,0.3)] hover:bg-[#f5f5ff] transition-colors"
            >
              View All Subscriptions
            </button>
          </div>

          {/* New Demo Requests */}
          <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(195,197,217,0.3)]">
              <div className="text-[16px] text-[#191b25]">New Demo Requests</div>
              <div className="size-6 bg-[#003ec7] rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">5</span>
              </div>
            </div>
            {demoRequests.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 border-b border-[rgba(195,197,217,0.15)] last:border-0"
              >
                <div
                  className="size-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: r.bg }}
                >
                  <span className="text-[14px] font-bold" style={{ color: r.textColor }}>
                    {r.initials}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] font-semibold text-[#191b25] leading-tight">{r.company}</div>
                  <div className="text-[13px] text-[#505f76]">{r.time}</div>
                </div>
                <ArrowRight size={14} className="text-[#737688] shrink-0" />
              </div>
            ))}
            <button
              onClick={() => navigate("/sales")}
              className="w-full py-3 text-[13px] font-medium text-[#003ec7] border-t border-[rgba(195,197,217,0.3)] hover:bg-[#f5f5ff] transition-colors"
            >
              Review All Requests
            </button>
          </div>
        </div>

        {/* Companies Requiring Attention */}
        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[rgba(195,197,217,0.3)]">
            <div className="text-[16px] text-[#191b25]">Companies Requiring Attention</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fbf8ff]">
                <tr>
                  {["COMPANY NAME", "STATUS", "LAST ISSUE"].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-[16px] font-bold text-[#505f76] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attentionCompanies.map((c, i) => (
                  <tr
                    key={i}
                    className="border-t border-[rgba(195,197,217,0.2)]"
                  >
                    <td className="px-6 py-4 text-[16px] font-medium text-[#191b25]">{c.name}</td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2 py-[2.5px] rounded-full text-[11px] font-bold"
                        style={{ background: c.statusBg, color: c.statusColor }}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[13px] text-[#434656]">{c.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar Widgets */}
      <div className="w-[310px] shrink-0 p-6 flex flex-col gap-6 border-l border-[rgba(195,197,217,0.3)] bg-white/50">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[16px] text-[#191b25] mb-5">Quick Actions</div>
          <div className="flex flex-col gap-3">
            {quickActions.map((a, i) => (
              <button
                key={i}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-[rgba(195,197,217,0.4)] hover:bg-[#f7f8fc] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <a.icon size={18} className="text-[#003ec7]" strokeWidth={1.8} />
                  <span className="text-[16px] font-medium text-[#191b25]">{a.label}</span>
                </div>
                <Plus size={14} className="text-[#191b25]" />
              </button>
            ))}
          </div>
        </div>

        {/* Critical System Alerts */}
        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-[#ba1a1a]" />
            <span className="text-[16px] font-semibold text-[#ba1a1a]">Critical System Alerts</span>
          </div>
          <div className="flex flex-col gap-3">
            {alerts.map((a, i) => (
              <div key={i} className="border-l-2 border-[#ba1a1a] pl-3">
                <div className="text-[13px] font-semibold text-[#191b25]">{a.title}</div>
                <div className="text-[12px] text-[#505f76] mt-0.5">{a.desc}</div>
                <div className="text-[11px] text-[#737688] mt-1">{a.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[16px] text-[#191b25] mb-4">Recent Activities</div>
          <div className="flex flex-col gap-4">
            {activities.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="size-2 rounded-full mt-1.5 shrink-0"
                  style={{ background: a.dot }}
                />
                <div>
                  <div className="text-[13px] text-[#434656] leading-tight">{a.text}</div>
                  <div className="text-[11px] text-[#737688] mt-1">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 pt-4 text-center text-[13px] font-medium text-[#003ec7] border-t border-[rgba(195,197,217,0.3)] hover:underline">
            View Audit Log
          </button>
        </div>
      </div>
    </div>
  );
}
