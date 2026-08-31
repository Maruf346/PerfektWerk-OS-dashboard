import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar } from "lucide-react";

const revenueData = [
  { month: "Jan", current: 320000, prev: 280000 },
  { month: "Feb", current: 350000, prev: 300000 },
  { month: "Mar", current: 380000, prev: 310000 },
  { month: "Apr", current: 370000, prev: 320000 },
  { month: "May", current: 400000, prev: 340000 },
  { month: "Jun", current: 420000, prev: 350000 },
  { month: "Jul", current: 430000, prev: 360000 },
  { month: "Aug", current: 450000, prev: 370000 },
  { month: "Sep", current: 460000, prev: 380000 },
  { month: "Oct", current: 480000, prev: 390000 },
  { month: "Nov", current: 490000, prev: 400000 },
];

const planData = [
  { name: "Elite", value: 58, color: "#003ec7" },
  { name: "Pro", value: 22, color: "#94a3b8" },
  { name: "Business", value: 15, color: "#1e40af" },
  { name: "Standard", value: 5, color: "#cbd5e1" },
];

const markets = [
  { country: "Germany", amount: "€2.1M", pct: 43 },
  { country: "USA", amount: "€1.4M", pct: 28 },
  { country: "Netherlands", amount: "€0.8M", pct: 16 },
  { country: "Singapore", amount: "€0.6M", pct: 13 },
];

const statCards = [
  {
    label: "TOTAL REVENUE",
    value: "€4,892,400",
    change: "+12.4%",
    up: true,
    sub: "82% of Target",
    subPct: 82,
    iconBg: "#dde1ff",
    iconColor: "#003ec7",
    icon: "bank",
  },
  {
    label: "REVENUE GROWTH",
    value: "28.5% YoY",
    change: "+4.2%",
    up: true,
    badge: "Excellent",
    badgeSub: "Performance level",
    iconBg: "#d3e4fe",
    iconColor: "#38485d",
    icon: "trending",
  },
  {
    label: "MRR",
    value: "€412,850",
    change: "+€18k",
    up: true,
    badge: "Stable subscription base",
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    icon: "refresh",
  },
  {
    label: "RENEWALS",
    value: "94.2%",
    change: "+2.1%",
    up: true,
    badge: "Positive",
    badgeSub: "from last quarter",
    iconBg: "#dde1ff",
    iconColor: "#003ec7",
    icon: "refresh2",
  },
];

export function RevenueAnalyticsPage() {
  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header row */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.8px]">
            Revenue Operations
          </h1>
          <p className="text-[14px] text-[#505f76]">
            Real-time fiscal monitoring and growth forecasting.
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#c3c5d9] bg-[#fbf8ff] text-[14px] font-medium text-[#191b25] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#f0f0f8] transition-colors">
          <Calendar size={13.5} className="text-[#737688]" strokeWidth={1.8} />
          Last 12 Months
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M1 1L4 4L7 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className="bg-[#fbf8ff] rounded-xl border border-[#c3c5d9] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-1"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className="size-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: card.iconBg }}
              >
                {i === 0 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke={card.iconColor} strokeWidth="1.8" />
                    <path d="M3 10h18M7 14h4" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17L9 11L13 15L21 7" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 7H21V11" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke={card.iconColor} strokeWidth="1.8" />
                    <path d="M12 8v4l3 3" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
                {i === 3 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12A9 9 0 1 1 12 3" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M21 3v9h-9" stroke={card.iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                className="text-[13px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: card.up ? "rgba(221,225,255,0.3)" : "rgba(255,220,220,0.3)",
                  color: card.up ? "#003ec7" : "#dc2626",
                }}
              >
                {card.change}
              </span>
            </div>
            <div className="text-[12px] font-semibold text-[#737688] uppercase tracking-[0.6px]">
              {card.label}
            </div>
            <div className="text-[24px] font-semibold text-[#191b25] tracking-[-0.24px]">
              {card.value}
            </div>
            {i === 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-1 bg-[#e7e7f5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#003ec7] rounded-full" style={{ width: "82%" }} />
                </div>
                <span className="text-[11px] font-medium text-[#737688]">{card.sub}</span>
              </div>
            )}
            {i === 1 && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[12px] font-semibold text-[#16a34a]">{card.badge}</span>
                <span className="text-[12px] text-[#737688]">{card.badgeSub}</span>
              </div>
            )}
            {i === 2 && (
              <div className="flex items-center gap-1.5 mt-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#003ec7" strokeWidth="1.8" />
                  <path d="M9 12l2 2 4-4" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px] text-[#737688]">{card.badge}</span>
              </div>
            )}
            {i === 3 && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[12px] font-semibold text-[#16a34a]">{card.badge}</span>
                <span className="text-[12px] text-[#737688]">{card.badgeSub}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="flex gap-6">
        {/* Revenue Growth Velocity */}
        <div className="flex-[2] bg-[#fbf8ff] rounded-[12px] border border-[#c3c5d9] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] pt-[25px] pb-[44px] px-[25px]">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="text-[20px] font-semibold text-[#191b25] tracking-[-0.2px]">Revenue Growth Velocity</div>
              <div className="text-[13px] text-[#737688] mt-0.5">Monthly trajectory based on billing cycles</div>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#003ec7]" />
                <span className="text-[11px] font-medium text-[#191b25]">Current Year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#c3c5d9]" />
                <span className="text-[11px] font-medium text-[#191b25]">Previous Year</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={256}>
            <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: 8, bottom: 24 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#003ec7" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#003ec7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c3c5d9" stopOpacity={0.05} />
                  <stop offset="100%" stopColor="#c3c5d9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="0" stroke="rgba(195,197,217,0.25)" vertical={false} horizontal={true} />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#737688", fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis hide />
              <Tooltip
                formatter={(val: number) => `€${(val / 1000).toFixed(0)}k`}
                contentStyle={{
                  border: "1px solid rgba(195,197,217,0.4)",
                  borderRadius: 8,
                  fontSize: 12,
                  background: "#ffffff",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                }}
                cursor={{ stroke: "rgba(195,197,217,0.5)", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="prev"
                stroke="#c3c5d9"
                strokeWidth={1.5}
                fill="url(#colorPrev)"
                dot={false}
                activeDot={false}
              />
              <Area
                type="monotone"
                dataKey="current"
                stroke="#003ec7"
                strokeWidth={2}
                fill="url(#colorCurrent)"
                dot={false}
                activeDot={{ r: 4, fill: "#003ec7", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Plan */}
        <div className="flex-1 bg-[#fbf8ff] rounded-xl border border-[#c3c5d9] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[18px] font-semibold text-[#191b25] mb-1">Revenue by Plan</div>
          <div className="text-[13px] text-[#737688] mb-4">Segmented distribution across offerings</div>
          <div className="relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={planData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {planData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-[10px] font-medium text-[#737688] uppercase tracking-[0.8px]">DOMINANT</div>
              <div className="text-[20px] font-bold text-[#191b25]">Elite</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
            {planData.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="size-2 rounded-full shrink-0" style={{ background: d.color }} />
                <span className="text-[12px] text-[#505f76]">
                  {d.name} <span className="font-semibold text-[#191b25]">{d.value}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Markets */}
      <div className="bg-[#fbf8ff] rounded-xl border border-[#c3c5d9] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-6">
        <div className="text-[18px] font-semibold text-[#191b25] mb-1">Global Markets</div>
        <div className="text-[13px] text-[#737688] mb-5">Top revenue-generating regions</div>
        <div className="flex flex-col gap-4">
          {markets.map((m) => (
            <div key={m.country}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[16px]">🏳</span>
                  <span className="text-[14px] font-medium text-[#191b25]">{m.country}</span>
                </div>
                <span className="text-[14px] font-medium text-[#505f76]">
                  {m.amount} ({m.pct}%)
                </span>
              </div>
              <div className="h-1.5 bg-[#e7e7f5] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${m.pct}%`, background: m.pct > 30 ? "#003ec7" : "#94a3b8" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
