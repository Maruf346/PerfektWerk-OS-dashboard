import { useState } from "react";
import { useNavigate } from "react-router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Building2, Users, TrendingUp, BarChart2 } from "lucide-react";
import { RevenueAnalyticsPage } from "./RevenueAnalyticsPage";

const growthData = [
  { month: "JAN", companies: 950,  users: 28000 },
  { month: "FEB", companies: 972,  users: 29400 },
  { month: "MAR", companies: 1020, users: 31800 },
  { month: "APR", companies: 1048, users: 33500 },
  { month: "MAY", companies: 1080, users: 35200 },
  { month: "JUN", companies: 1100, users: 36400 },
  { month: "JUL", companies: 1120, users: 37800 },
  { month: "AUG", companies: 1145, users: 38900 },
  { month: "SEP", companies: 1180, users: 40100 },
  { month: "OCT", companies: 1200, users: 41000 },
  { month: "NOV", companies: 1220, users: 41800 },
  { month: "DEC", companies: 1248, users: 42500 },
];

const regionData = [
  { region: "EU-Central (Frankfurt)", pct: 42, color: "#003ec7" },
  { region: "US-East (N. Virginia)", pct: 31, color: "#003ec7" },
  { region: "US-West (Oregon)", pct: 15, color: "#003ec7" },
  { region: "AP-Southeast (Singapore)", pct: 8, color: "#003ec7" },
];

const entities = [
  {
    id: "nexus-labs",
    name: "Nexus Labs Inc.",
    plan: "Enterprise Plan",
    bg: "#003ec7",
    initials: "NL",
    projects: 124,
    mrr: "$12,450",
    arr: "$149.4k",
    revenue: "$42k",
    revChange: "+1.4%",
    revUp: true,
    users: "2.4k",
    churn: "0.8%",
    churnColor: "#16a34a",
  },
  {
    id: "aether-media",
    name: "Aether Media",
    plan: "Growth Pro",
    bg: "#6366f1",
    initials: "AM",
    projects: 42,
    mrr: "$4,200",
    arr: "$50.4k",
    revenue: "$18k",
    revChange: "-2%",
    revUp: false,
    users: "840",
    churn: "4.2%",
    churnColor: "#dc2626",
  },
  {
    id: "skyline-kinematics",
    name: "Skyline Kinematics",
    plan: "Custom Cluster",
    bg: "#f59e0b",
    initials: "SK",
    projects: 18,
    mrr: "$28,900",
    arr: "$346.8k",
    revenue: "$89k",
    revChange: "+12%",
    revUp: true,
    users: "5.2k",
    churn: "0.2%",
    churnColor: "#16a34a",
  },
];

const statCards = [
  {
    label: "TOTAL COMPANIES",
    value: "1,248",
    change: "+12.4%",
    up: true,
    sub: "Active enterprise accounts",
    icon: Building2,
    iconBg: "#ededfb",
    iconColor: "#003ec7",
  },
  {
    label: "TOTAL USERS",
    value: "42.5k",
    change: "+8.2%",
    up: true,
    sub: "Monthly active users (MAU)",
    icon: Users,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    label: "TOTAL MRR",
    value: "$842.5k",
    change: "+15.1%",
    up: true,
    sub: "Monthly Recurring Revenue",
    icon: TrendingUp,
    iconBg: "#fff7ed",
    iconColor: "#c2410c",
  },
  {
    label: "GROWTH RATE",
    value: "24.8%",
    change: "+2.4%",
    up: true,
    sub: "Platform expansion index",
    icon: BarChart2,
    iconBg: "#fce7f3",
    iconColor: "#9333ea",
  },
];

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
      className="flex items-center p-[5px] rounded-[8px] shrink-0"
      style={{
        background: "#f3f2ff",
        border: "1px solid #c3c5d9",
      }}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className="relative rounded-[6px] px-4 py-[6px] text-[12px] tracking-[0.6px] transition-colors"
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

export function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  if (activeTab === 1) {
    return (
      <div className="flex flex-col gap-0" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="px-6 pt-6">
          <SegmentedControl
            tabs={["Platform", "Revenue"]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
        <RevenueAnalyticsPage />
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Segmented tabs */}
      <SegmentedControl tabs={["Platform", "Revenue"]} activeTab={activeTab} onChange={setActiveTab} />

      {/* Title */}
      <div>
        <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
          Platform Analytics
        </h1>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-[11px] font-medium text-[#505f76] uppercase tracking-[0.6px]">
                {card.label}
              </span>
              <div
                className="size-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: card.iconBg }}
              >
                <card.icon size={16} style={{ color: card.iconColor }} strokeWidth={1.8} />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] font-semibold text-[#191b25]">{card.value}</span>
              <span
                className="text-[12px] font-semibold"
                style={{ color: card.up ? "#16a34a" : "#dc2626" }}
              >
                {card.change}
              </span>
            </div>
            <div className="text-[12px] text-[#737688] mt-1">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="flex gap-6">
        {/* Growth Over Time */}
        <div className="flex-[2] bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="mb-1">
            <div className="text-[16px] font-semibold text-[#191b25]">Growth Over Time</div>
            <div className="text-[12px] text-[#737688]">
              Company and User acquisition (Last 12 Months)
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={growthData} margin={{ top: 20, right: 50, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#003ec7" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#003ec7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grayGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(195,197,217,0.3)" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#737688" }}
                axisLine={false}
                tickLine={false}
              />
              {/* Left Y-axis for Companies */}
              <YAxis
                yAxisId="companies"
                orientation="left"
                tick={{ fontSize: 11, fill: "#003ec7" }}
                axisLine={false}
                tickLine={false}
                width={48}
                domain={[880, 1300]}
                tickFormatter={(v) => `${v}`}
              />
              {/* Right Y-axis for Users */}
              <YAxis
                yAxisId="users"
                orientation="right"
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={48}
                domain={[25000, 45000]}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  border: "1px solid rgba(195,197,217,0.4)",
                  borderRadius: 8,
                  fontSize: 12,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                formatter={(value: number, name: string) =>
                  name === "Companies" ? [value, "Companies"] : [`${(value / 1000).toFixed(1)}k`, "Users"]
                }
              />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, color: "#737688" }} />
              <Line
                yAxisId="companies"
                type="monotone"
                dataKey="companies"
                stroke="#003ec7"
                strokeWidth={2.5}
                dot={false}
                name="Companies"
                animationDuration={1200}
                animationEasing="ease-out"
              />
              <Line
                yAxisId="users"
                type="monotone"
                dataKey="users"
                stroke="#94a3b8"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 4"
                name="Users"
                animationDuration={1400}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Usage by Region */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[16px] font-semibold text-[#191b25] mb-5">Usage by Region</div>
          <div className="flex flex-col gap-5">
            {regionData.map((r) => (
              <div key={r.region}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] text-[#434656]">{r.region}</span>
                  <span className="text-[13px] font-semibold text-[#191b25]">{r.pct}%</span>
                </div>
                <div className="h-1.5 bg-[rgba(195,197,217,0.3)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${r.pct}%`, background: r.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Entity Performance Matrix */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="px-6 py-5 border-b border-[rgba(195,197,217,0.3)]">
          <div className="text-[18px] font-semibold text-[#191b25]">Entity Performance Matrix</div>
          <div className="text-[13px] text-[#737688] mt-0.5">
            Detailed cross-metric analysis per organization
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f7f8fc]">
                {["COMPANY", "PROJECTS", "MRR", "ARR", "REVENUE", "USERS", "CHURN"].map((h) => (
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
              {entities.map((e, i) => (
                <tr
                  key={i}
                  className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors cursor-pointer"
                  onClick={() => navigate(`/analytics/company/${e.id}`)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-9 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                        style={{ background: e.bg }}
                      >
                        {e.initials}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-[#191b25]">{e.name}</div>
                        <div className="text-[12px] text-[#737688]">{e.plan}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#434656]">{e.projects}</td>
                  <td className="px-6 py-4 text-[14px] font-semibold text-[#191b25]">{e.mrr}</td>
                  <td className="px-6 py-4 text-[14px] text-[#434656]">{e.arr}</td>
                  <td className="px-6 py-4">
                    <span className="text-[14px] font-semibold text-[#191b25]">{e.revenue}</span>
                    <span
                      className="ml-1.5 text-[11px] font-semibold"
                      style={{ color: e.revUp ? "#16a34a" : "#dc2626" }}
                    >
                      {e.revChange}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#434656]">{e.users}</td>
                  <td className="px-6 py-4">
                    <span
                      className="text-[13px] font-semibold px-2 py-0.5 rounded"
                      style={{ color: e.churnColor, background: e.churnColor + "1a" }}
                    >
                      {e.churn}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <span className="text-[13px] text-[#505f76]">Showing 3 of 42 entities</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-[rgba(195,197,217,0.4)] rounded-lg text-[13px] font-medium text-[#505f76] hover:bg-[#f0f0f8] transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
