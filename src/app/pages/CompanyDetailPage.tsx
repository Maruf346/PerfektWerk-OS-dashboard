import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  RotateCcw,
  Megaphone,
  Flag,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  Database,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Activity,
} from "lucide-react";

// ─── OVERVIEW TAB ─────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="p-6 flex flex-col gap-5">
      {/* Quick Action Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: RotateCcw, label: "Reset Password", sub: "Secure user access", iconColor: "#003ec7", iconBg: "#ededfb" },
          { icon: Megaphone, label: "Send Announcement", sub: "Global broadcast", iconColor: "#dc2626", iconBg: "#fee2e2" },
          { icon: Flag, label: "Feature Flags", sub: "Manage rollouts", iconColor: "#ca8a04", iconBg: "#fef9c3" },
          { icon: BookOpen, label: "Audit Logs", sub: "Compliance history", iconColor: "#16a34a", iconBg: "#dcfce7" },
        ].map((a) => (
          <button
            key={a.label}
            className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5 flex items-center gap-4 hover:bg-[#f9f9fc] transition-colors text-left"
          >
            <div
              className="size-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: a.iconBg }}
            >
              <a.icon size={18} style={{ color: a.iconColor }} strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[#191b25]">{a.label}</div>
              <div className="text-[12px] text-[#737688] mt-0.5">{a.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Middle row */}
      <div className="flex gap-5">
        {/* Company Vitality */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-[22px] font-semibold text-[#191b25]">Company Vitality</h2>
              <p className="text-[13px] text-[#737688] mt-0.5">Real-time health and operational metrics</p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#ededfb] text-[#003ec7] text-[12px] font-semibold px-3 py-1.5 rounded-full">
              <ShieldCheck size={13} strokeWidth={2} />
              94 / 100 Health
            </div>
          </div>

          <div className="flex gap-10 mt-5">
            <div>
              <div className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">ACTIVE PROJECTS</div>
              <div className="text-[42px] font-semibold text-[#191b25] leading-none mt-1">142</div>
              <div className="flex items-center gap-1 mt-1.5 text-[12px] text-[#16a34a] font-medium">
                <TrendingUp size={13} strokeWidth={2} /> +12.4%
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">TOTAL USERS</div>
              <div className="text-[42px] font-semibold text-[#191b25] leading-none mt-1">1,840</div>
              <div className="flex items-center gap-1 mt-1.5 text-[12px] text-[#16a34a] font-medium">
                <TrendingUp size={13} strokeWidth={2} /> +5.2%
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[rgba(195,197,217,0.2)]">
            <div className="flex items-center">
              {["#003ec7", "#16a34a", "#dc2626"].map((c, i) => (
                <div
                  key={i}
                  className="size-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: c, marginLeft: i === 0 ? 0 : -8 }}
                >
                  {["JW", "MS", "LK"][i]}
                </div>
              ))}
              <div
                className="size-8 rounded-full border-2 border-white bg-[#ededfb] flex items-center justify-center text-[10px] font-semibold text-[#003ec7]"
                style={{ marginLeft: -8 }}
              >
                +12
              </div>
            </div>
            <button className="text-[13px] text-[#003ec7] font-medium hover:underline">
              Manage all users &rsaquo;
            </button>
          </div>
        </div>

        {/* Subscription */}
        <div className="w-[300px] bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-[#003ec7] rounded-lg flex items-center justify-center">
                <ShieldCheck size={16} className="text-white" strokeWidth={2} />
              </div>
              <span className="text-[16px] font-semibold text-[#191b25]">Subscription</span>
            </div>
            <div className="bg-[#ededfb] rounded-xl p-4">
              <div className="text-[10px] font-bold text-[#003ec7] tracking-[0.6px] uppercase mb-1">CURRENT PLAN</div>
              <div className="text-[20px] font-semibold text-[#191b25]">Global Enterprise</div>
              <div className="text-[12px] text-[#737688] mt-1">Next billing cycle: Oct 24, 2024</div>
            </div>
          </div>
          <button className="mt-4 w-full py-2.5 rounded-lg border border-[rgba(195,197,217,0.5)] text-[13px] font-medium text-[#191b25] hover:bg-[#f7f8fc] transition-colors">
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex gap-5">
        {/* Recent Activity */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-semibold text-[#191b25]">Recent Activity</h3>
            <button className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors">
              <Activity size={16} className="text-[#737688]" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Building2,
                iconBg: "#ededfb",
                iconColor: "#003ec7",
                title: "New Admin Invited",
                desc: "Sarah Jenkins (Project Lead) was added to the organization.",
                time: "2 HOURS AGO",
              },
              {
                icon: AlertCircle,
                iconBg: "#fee2e2",
                iconColor: "#dc2626",
                title: "API Limit Warning",
                desc: "System-wide API calls reached 95% of threshold for Cluster-04.",
                time: "5 HOURS AGO",
              },
              {
                icon: Database,
                iconBg: "#f0fdf4",
                iconColor: "#16a34a",
                title: "Database Optimization",
                desc: "Automated maintenance routine successfully completed.",
                time: "YESTERDAY",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="size-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: item.iconBg }}
                >
                  <item.icon size={14} style={{ color: item.iconColor }} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#191b25]">{item.title}</div>
                  <div className="text-[12px] text-[#737688] leading-relaxed mt-0.5">{item.desc}</div>
                  <div className="text-[10px] text-[#b0b3c6] font-medium mt-1 tracking-[0.4px]">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Profile */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 bg-[#f7f8fc] rounded-lg flex items-center justify-center">
              <Building2 size={20} className="text-[#505f76]" strokeWidth={1.6} />
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#191b25]">Company Profile</div>
              <div className="text-[12px] text-[#737688]">Corporate Identity &amp; Details</div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Company ID", value: "BWG-8829-DE-01", link: false },
              { label: "Website", value: "bauwerk-global.com", link: true },
              { label: "Industry", value: "Construction Technology", link: false },
              { label: "Tax Number", value: "DE-294-881-003", link: false },
              { label: "Registration Number", value: "HRB 102941-B", link: false },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-1 border-b border-[rgba(195,197,217,0.15)] last:border-0">
                <span className="text-[13px] text-[#737688]">{row.label}</span>
                {row.link ? (
                  <a href="#" className="text-[13px] font-medium text-[#003ec7] hover:underline">{row.value}</a>
                ) : (
                  <span className="text-[13px] font-medium text-[#191b25]">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Contacts */}
        <div className="w-[220px] bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px] mb-4">KEY CONTACTS</div>
          <div className="flex flex-col gap-4">
            {[
              { name: "Karl-Heinz Weber", phone: "+49 89 123 4567", initials: "KW", color: "#003ec7" },
              { name: "Eva Müller", phone: "+49 89 987 6543", initials: "EM", color: "#16a34a" },
            ].map((contact) => (
              <div key={contact.name} className="flex items-center gap-3">
                <div
                  className="size-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                  style={{ background: contact.color }}
                >
                  {contact.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#191b25]">{contact.name}</div>
                  <div className="text-[12px] text-[#737688]">{contact.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CRM & CUSTOMER TAB ────────────────────────────────────────────────────────

function CrmTab() {
  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold text-[#191b25]">CRM &amp; Customer Lifecycle</h1>
        <p className="text-[13px] text-[#737688] mt-1">Managing 1,248 global entities and their communication streams.</p>
      </div>

      {/* Pipeline metrics */}
      <div className="flex gap-3">
        {[
          { label: "LEAD", value: "342", sub: "+$1.2M pipeline", subColor: "#003ec7" },
          { label: "DEMO SCH.", value: "118", sub: "42 this week", subColor: "#737688" },
          { label: "DEMO CMP.", value: "94", sub: "78% conversion", subColor: "#737688" },
          { label: "ONBOARDING", value: "26", sub: "Avg. 14 days", subColor: "#737688" },
          { label: "ACTIVE", value: "624", sub: "94.2% NPS", subColor: "#737688" },
          { label: "RENEWAL DUE", value: "42", sub: "Critical status", subColor: "#dc2626", valueColor: "#dc2626", highlight: true },
          { label: "CHURNED", value: "2", sub: "LTM 0.4%", subColor: "#737688", dim: true },
        ].map((m) => (
          <div
            key={m.label}
            className={`flex-1 rounded-xl border p-4 ${
              m.highlight
                ? "border-[#fee2e2] bg-[#fff5f5]"
                : m.dim
                ? "border-[rgba(195,197,217,0.3)] bg-[#f7f8fc]"
                : "border-[rgba(195,197,217,0.3)] bg-white shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.04)]"
            }`}
          >
            <div className="text-[10px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">{m.label}</div>
            <div
              className="text-[28px] font-semibold leading-none"
              style={{ color: m.valueColor || "#191b25" }}
            >
              {m.value}
            </div>
            <div className="text-[11px] mt-1.5 font-medium" style={{ color: m.subColor }}>
              {m.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Customer Communication */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-semibold text-[#191b25]">Customer Communication</h3>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-[#003ec7] bg-[#ededfb] px-2.5 py-1 rounded-full">12 UNREAD</span>
            <button className="text-[11px] font-semibold text-[#505f76] border border-[rgba(195,197,217,0.5)] px-3 py-1 rounded-full hover:bg-[#f7f8fc] transition-colors">ARCHIVE</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {[
            {
              icon: Mail,
              iconBg: "#ededfb",
              iconColor: "#003ec7",
              company: "Atlas Engineering Group",
              time: "14:20 PM",
              preview: '"We\'ve reviewed the Q3 renewal proposal. There are some…',
              tags: [
                { label: "RENEWAL", bg: "#fee2e2", color: "#dc2626" },
                { label: "HIGH PRIORITY", bg: "#fee2e2", color: "#dc2626" },
              ],
            },
            {
              icon: Phone,
              iconBg: "#ededfb",
              iconColor: "#003ec7",
              company: "Nordic Infra Solutions",
              time: "10:45 AM",
              preview: "Incoming call summary: Discussing the onboarding of their new…",
              tags: [
                { label: "ONBOARDING", bg: "#ededfb", color: "#003ec7" },
              ],
            },
          ].map((msg, i) => (
            <div key={i} className="flex items-start gap-4 py-4 border-b border-[rgba(195,197,217,0.2)] last:border-0">
              <div
                className="size-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: msg.iconBg }}
              >
                <msg.icon size={18} style={{ color: msg.iconColor }} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#191b25]">{msg.company}</span>
                  <span className="text-[12px] text-[#737688]">{msg.time}</span>
                </div>
                <div className="text-[13px] text-[#737688] mt-0.5 truncate">{msg.preview}</div>
                <div className="flex gap-2 mt-2">
                  {msg.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded"
                      style={{ background: tag.bg, color: tag.color }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Renewal Tracker */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[rgba(195,197,217,0.2)]">
          <h3 className="text-[16px] font-semibold text-[#191b25]">Company Renewal Tracker</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#f7f8fc]">
              {["COMPANY", "STATUS", "RENEWAL DATE", "VALUE", "HEALTH"].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { initials: "A", color: "#003ec7", name: "Apex Construction", status: "ACTIVE", statusBg: "#dcfce7", statusColor: "#166534", date: "Oct 24, 2024", dateColor: "#191b25", value: "$84,000", health: "Stable", healthColor: "#16a34a" },
              { initials: "S", color: "#e879a0", name: "Steinberg AG", status: "RENEWAL DUE", statusBg: "#fee2e2", statusColor: "#dc2626", date: "Sep 12, 2024", dateColor: "#dc2626", value: "$124,500", health: "At Risk", healthColor: "#dc2626" },
              { initials: "V", color: "#003ec7", name: "Vortex Logistics", status: "ONBOARDING", statusBg: "#ededfb", statusColor: "#003ec7", date: "Jan 05, 2025", dateColor: "#191b25", value: "$45,000", health: "Growing", healthColor: "#003ec7" },
            ].map((row, i) => (
              <tr key={i} className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                      style={{ background: row.color }}
                    >
                      {row.initials}
                    </div>
                    <span className="text-[13px] font-medium text-[#191b25]">{row.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: row.statusBg, color: row.statusColor }}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-[13px] font-medium" style={{ color: row.dateColor }}>
                  {row.date}
                </td>
                <td className="px-6 py-4 text-[13px] font-semibold text-[#191b25]">{row.value}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium" style={{ color: row.healthColor }}>
                    <div className="size-2 rounded-full" style={{ background: row.healthColor }} />
                    {row.health}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── CUSTOMER HEALTH TAB ───────────────────────────────────────────────────────

function CustomerHealthTab() {
  const [period, setPeriod] = useState<"daily" | "monthly">("monthly");

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold text-[#191b25]">Customer Health Monitoring</h1>
        <p className="text-[13px] text-[#737688] mt-1">Global portfolio analysis across 1,240 active contracts.</p>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            label: "HEALTHY STATUS",
            value: "1,041",
            pct: "84%",
            icon: CheckCircle2,
            iconColor: "#16a34a",
            iconBg: "#dcfce7",
            pctColor: "#16a34a",
          },
          {
            label: "NEEDS ATTENTION",
            value: "149",
            pct: "12%",
            icon: AlertTriangle,
            iconColor: "#f59e0b",
            iconBg: "#fef9c3",
            pctColor: "#f59e0b",
          },
          {
            label: "AT RISK",
            value: "50",
            pct: "4%",
            icon: AlertTriangle,
            iconColor: "#dc2626",
            iconBg: "#fee2e2",
            pctColor: "#dc2626",
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="size-10 rounded-xl flex items-center justify-center"
                style={{ background: card.iconBg }}
              >
                <card.icon size={20} style={{ color: card.iconColor }} strokeWidth={2} />
              </div>
              <span className="text-[13px] font-semibold" style={{ color: card.pctColor }}>
                {card.pct}
              </span>
            </div>
            <div className="text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-1">{card.label}</div>
            <div className="text-[36px] font-semibold text-[#191b25] leading-none">{card.value}</div>
          </div>
        ))}
      </div>

      {/* Health Indicator Performance */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[16px] font-semibold text-[#191b25]">Health Indicator Performance</h3>
          <div className="flex rounded-lg border border-[rgba(195,197,217,0.4)] overflow-hidden">
            <button
              onClick={() => setPeriod("daily")}
              className={`px-4 py-1.5 text-[12px] font-medium transition-colors ${
                period === "daily" ? "bg-[#003ec7] text-white" : "text-[#505f76] hover:bg-[#f7f8fc]"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-1.5 text-[12px] font-medium transition-colors ${
                period === "monthly" ? "bg-[#003ec7] text-white" : "text-[#505f76] hover:bg-[#f7f8fc]"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Ticket Volume */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="16.667" height="13.333" viewBox="0 0 16.6667 13.3333" fill="none">
                <path d="M8.33333 10.8333C8.56944 10.8333 8.76736 10.7535 8.92708 10.5938C9.08681 10.434 9.16667 10.2361 9.16667 10C9.16667 9.76389 9.08681 9.56597 8.92708 9.40625C8.76736 9.24653 8.56944 9.16667 8.33333 9.16667C8.09722 9.16667 7.89931 9.24653 7.73958 9.40625C7.57986 9.56597 7.5 9.76389 7.5 10C7.5 10.2361 7.57986 10.434 7.73958 10.5938C7.89931 10.7535 8.09722 10.8333 8.33333 10.8333V10.8333M8.33333 7.5C8.56944 7.5 8.76736 7.42014 8.92708 7.26042C9.08681 7.10069 9.16667 6.90278 9.16667 6.66667C9.16667 6.43056 9.08681 6.23264 8.92708 6.07292C8.76736 5.91319 8.56944 5.83333 8.33333 5.83333C8.09722 5.83333 7.89931 5.91319 7.73958 6.07292C7.57986 6.23264 7.5 6.43056 7.5 6.66667C7.5 6.90278 7.57986 7.10069 7.73958 7.26042C7.89931 7.42014 8.09722 7.5 8.33333 7.5V7.5M8.33333 4.16667C8.56944 4.16667 8.76736 4.08681 8.92708 3.92708C9.08681 3.76736 9.16667 3.56944 9.16667 3.33333C9.16667 3.09722 9.08681 2.89931 8.92708 2.73958C8.76736 2.57986 8.56944 2.5 8.33333 2.5C8.09722 2.5 7.89931 2.57986 7.73958 2.73958C7.57986 2.89931 7.5 3.09722 7.5 3.33333C7.5 3.56944 7.57986 3.76736 7.73958 3.92708C7.89931 4.08681 8.09722 4.16667 8.33333 4.16667V4.16667M15 13.3333H1.66667C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V8.33333C0.458333 8.33333 0.850694 8.17014 1.17708 7.84375C1.50347 7.51736 1.66667 7.125 1.66667 6.66667C1.66667 6.20833 1.50347 5.81597 1.17708 5.48958C0.850694 5.16319 0.458333 5 0 5V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V5C16.2083 5 15.816 5.16319 15.4896 5.48958C15.1632 5.81597 15 6.20833 15 6.66667C15 7.125 15.1632 7.51736 15.4896 7.84375C15.816 8.17014 16.2083 8.33333 16.6667 8.33333V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333V13.3333M15 11.6667V9.54167C14.4861 9.23611 14.0799 8.82986 13.7812 8.32292C13.4826 7.81597 13.3333 7.26389 13.3333 6.66667C13.3333 6.06944 13.4826 5.51736 13.7812 5.01042C14.0799 4.50347 14.4861 4.09722 15 3.79167V1.66667H1.66667V3.79167C2.18056 4.09722 2.58681 4.50347 2.88542 5.01042C3.18403 5.51736 3.33333 6.06944 3.33333 6.66667C3.33333 7.26389 3.18403 7.81597 2.88542 8.32292C2.58681 8.82986 2.18056 9.23611 1.66667 9.54167V11.6667H15V11.6667" fill="#003EC7" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Ticket Volume</span>
            </div>
            <div className="text-[20px] font-semibold text-[#191b25]">Normal</div>
          </div>
          {/* Login Frequency */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 15V13.3333H13.3333V1.66667H7.5V0H13.3333C13.7917 0 14.184 0.163194 14.5104 0.489583C14.8368 0.815972 15 1.20833 15 1.66667V13.3333C15 13.7917 14.8368 14.184 14.5104 14.5104C14.184 14.8368 13.7917 15 13.3333 15H7.5V15M5.83333 11.6667L4.6875 10.4583L6.8125 8.33333H0V6.66667H6.8125L4.6875 4.54167L5.83333 3.33333L10 7.5L5.83333 11.6667V11.6667" fill="#003EC7" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Login Frequency</span>
            </div>
            <div className="text-[20px] font-semibold text-[#16a34a]">+18%</div>
          </div>
          {/* Usage Statistics */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="13.333" height="13.333" viewBox="0 0 13.3333 13.3333" fill="none">
                <path d="M0 13.3333V6.66667H3.33333V13.3333H0V13.3333M5 13.3333V0H8.33333V13.3333H5V13.3333M10 13.3333V4.16667H13.3333V13.3333H10V13.3333" fill="#D97706" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Usage Statistics</span>
            </div>
            <div className="text-[20px] font-semibold text-[#dc2626]">-5%</div>
          </div>
          {/* Expiring Subs */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="17.5" height="18.333" viewBox="0 0 17.5 18.3333" fill="none">
                <path d="M1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V3.33333C0 2.875 0.163194 2.48264 0.489583 2.15625C0.815972 1.82986 1.20833 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C13.7917 1.66667 14.184 1.82986 14.5104 2.15625C14.8368 2.48264 15 2.875 15 3.33333V8.33333H13.3333V6.66667H1.66667V15H7.5V16.6667H1.66667V16.6667M13.3333 18.3333C12.3194 18.3333 11.434 18.0174 10.6771 17.3854C9.92014 16.7535 9.44444 15.9583 9.25 15H10.5417C10.7222 15.6111 11.066 16.1111 11.5729 16.5C12.0799 16.8889 12.6667 17.0833 13.3333 17.0833C14.1389 17.0833 14.8264 16.7986 15.3958 16.2292C15.9653 15.6597 16.25 14.9722 16.25 14.1667C16.25 13.3611 15.9653 12.6736 15.3958 12.1042C14.8264 11.5347 14.1389 11.25 13.3333 11.25C12.9306 11.25 12.5556 11.3229 12.2083 11.4688C11.8611 11.6146 11.5556 11.8194 11.2917 12.0833H12.5V13.3333H9.16667V10H10.4167V11.1875C10.7917 10.8264 11.2292 10.5382 11.7292 10.3229C12.2292 10.1076 12.7639 10 13.3333 10C14.4861 10 15.4688 10.4062 16.2812 11.2188C17.0938 12.0312 17.5 13.0139 17.5 14.1667C17.5 15.3194 17.0938 16.3021 16.2812 17.1146C15.4688 17.9271 14.4861 18.3333 13.3333 18.3333V18.3333M1.66667 5H13.3333V3.33333H1.66667V5V5" fill="#BA1A1A" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Expiring Subs</span>
            </div>
            <div className="text-[20px] font-semibold text-[#191b25]">12</div>
            <div className="text-[11px] text-[#737688] mt-0.5">High</div>
          </div>
          {/* Payment Issues */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="17.792" height="17.688" viewBox="0 0 17.7917 17.6875" fill="none">
                <path d="M17.6042 14.0417L16.125 12.5625V8.27083H11.8333L8.5 4.9375H16.125V3.27083H6.83333L5.16667 1.60417H16.125C16.5833 1.60417 16.9757 1.76736 17.3021 2.09375C17.6285 2.42014 17.7917 2.8125 17.7917 3.27083V13.2708C17.7917 13.4097 17.7778 13.5451 17.75 13.6771C17.7222 13.809 17.6736 13.9306 17.6042 14.0417V14.0417M7.08333 8.27083H2.79167V13.2708H12.0833L7.08333 8.27083V8.27083M16.5 17.6875L13.75 14.9375H2.79167C2.33333 14.9375 1.94097 14.7743 1.61458 14.4479C1.28819 14.1215 1.125 13.7292 1.125 13.2708V3.27083C1.125 2.8125 1.28819 2.42014 1.61458 2.09375C1.94097 1.76736 2.33333 1.60417 2.79167 1.60417V1.60417L4.45833 3.27083H2.79167V4.9375H3.75L0 1.1875L1.1875 0L17.6875 16.5L16.5 17.6875V17.6875" fill="#BA1A1A" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Payment Issues</span>
            </div>
            <div className="text-[20px] font-semibold text-[#191b25]">3</div>
            <div className="text-[11px] text-[#737688] mt-0.5">Flagged</div>
          </div>
          {/* Low Adoption */}
          <div className="rounded-[8px] border border-[rgba(195,197,217,0.3)] bg-[#f3f2ff] p-[17px]">
            <div className="flex items-center gap-3 mb-2">
              <svg width="16.667" height="10" viewBox="0 0 16.6667 10" fill="none">
                <path d="M11.6667 10V8.33333H13.8333L9.5 4.04167L6.16667 7.375L0 1.16667L1.16667 0L6.16667 5L9.5 1.66667L15 7.16667V5H16.6667V10H11.6667V10" fill="#D97706" />
              </svg>
              <span className="text-[12px] font-semibold text-[#191b25] tracking-[0.6px]">Low Adoption</span>
            </div>
            <div className="text-[20px] font-semibold text-[#191b25]">42%</div>
            <div className="text-[11px] text-[#737688] mt-0.5">Vol</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ONBOARDING TAB ────────────────────────────────────────────────────────────

function OnboardingTab() {
  const steps = [
    {
      id: 1,
      title: "Company Created",
      desc: "Legal entities, tax profiles, and brand assets configured.",
      date: "Sep 12",
      status: "done",
    },
    {
      id: 2,
      title: "Subscription Activated",
      desc: "Annual Enterprise Plan billed and seat allocation confirmed.",
      date: "Sep 14",
      status: "done",
    },
    {
      id: 3,
      title: "Users Invited",
      desc: "12 project managers and 4 executives onboarded with SSO.",
      date: "Sep 15",
      status: "done",
    },
    {
      id: 4,
      title: "Training Scheduled",
      desc: "Live workshop for the 'Engineering Excellence' module.",
      date: "",
      status: "in_progress",
    },
    {
      id: 5,
      title: "Training Completed",
      desc: "Post-training certification for all primary users.",
      date: "",
      status: "pending",
    },
    {
      id: 6,
      title: "First Project Created",
      desc: "Initial workload migration from legacy systems.",
      date: "",
      status: "pending",
    },
    {
      id: 7,
      title: "Go Live Completed",
      desc: "Full environment handoff to Customer Success Team.",
      date: "",
      status: "pending",
      isRocket: true,
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-[28px] font-semibold text-[#191b25]">Customer Onboarding</h1>
        <p className="text-[13px] text-[#737688] mt-1">
          Projected Go-Live: Oct 24, 2023 &bull; Managed by Sarah Miller
        </p>
      </div>

      {/* Stepper */}
      <div className="bg-white rounded-2xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const isDone = step.status === "done";
            const isInProgress = step.status === "in_progress";
            const isPending = step.status === "pending";

            return (
              <div key={step.id} className="flex items-stretch gap-4">
                {/* Circle + line */}
                <div className="flex flex-col items-center">
                  {isDone ? (
                    <div className="size-10 rounded-full bg-[#003ec7] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className="text-white" strokeWidth={2.5} />
                    </div>
                  ) : isInProgress ? (
                    <div className="size-10 rounded-full border-2 border-[#003ec7] flex items-center justify-center shrink-0 bg-white">
                      <span className="text-[13px] font-bold text-[#003ec7]">0{step.id}</span>
                    </div>
                  ) : (
                    <div className="size-10 rounded-full bg-[#f0f0f8] flex items-center justify-center shrink-0">
                      {step.isRocket ? (
                        <span className="text-base">🚀</span>
                      ) : (
                        <span className="text-[13px] font-semibold text-[#b0b3c6]">0{step.id}</span>
                      )}
                    </div>
                  )}
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 my-1 min-h-[20px]"
                      style={{ background: isDone ? "#003ec7" : "rgba(195,197,217,0.4)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 mb-4 rounded-xl p-4 ${
                    isInProgress
                      ? "border border-[#003ec7] bg-white shadow-[0px_2px_12px_0px_rgba(0,62,199,0.08)]"
                      : "border border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div
                        className={`text-[14px] font-semibold ${
                          isPending ? "text-[#b0b3c6]" : "text-[#191b25]"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div
                        className={`text-[12px] mt-0.5 leading-relaxed ${
                          isPending ? "text-[#c3c5d9]" : "text-[#737688]"
                        }`}
                      >
                        {step.desc}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      {step.date && (
                        <span className="text-[12px] text-[#737688]">{step.date}</span>
                      )}
                      {isInProgress && (
                        <span className="text-[11px] font-bold text-[#003ec7] tracking-[0.4px]">IN PROGRESS</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPANY DETAIL PAGE ──────────────────────────────────────────────────

const TABS = ["Overview", "CRM & Customer", "Customer Health", "Onboarding"];

export function CompanyDetailPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const renderTab = () => {
    switch (activeTab) {
      case 0: return <OverviewTab />;
      case 1: return <CrmTab />;
      case 2: return <CustomerHealthTab />;
      case 3: return <OnboardingTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Tab bar — just below top navbar */}
      <div className="bg-white border-b border-[rgba(195,197,217,0.35)] px-6 flex items-center justify-between shrink-0">
        <div className="flex">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-4 text-[14px] font-medium border-b-2 transition-colors ${
                activeTab === i
                  ? "border-[#191b25] text-[#191b25]"
                  : "border-transparent text-[#737688] hover:text-[#191b25]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={() => navigate("/companies")}
          className="flex items-center gap-1.5 text-[13px] text-[#737688] hover:text-[#191b25] transition-colors py-2"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Back to Companies
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto bg-[#f7f8fc]">
        {renderTab()}
      </div>
    </div>
  );
}
