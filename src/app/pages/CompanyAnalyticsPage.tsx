import { useNavigate, useParams } from "react-router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ChevronRight, CheckCircle } from "lucide-react";

const activityData = [
  { day: "May 01", logins: 320, interactions: 280 },
  { day: "May 03", logins: 350, interactions: 300 },
  { day: "May 05", logins: 420, interactions: 310 },
  { day: "May 08", logins: 480, interactions: 350 },
  { day: "May 10", logins: 510, interactions: 370 },
  { day: "May 12", logins: 490, interactions: 360 },
  { day: "May 15", logins: 842, interactions: 500 },
  { day: "May 17", logins: 750, interactions: 620 },
  { day: "May 19", logins: 820, interactions: 680 },
  { day: "May 22", logins: 900, interactions: 720 },
  { day: "May 24", logins: 950, interactions: 740 },
  { day: "May 26", logins: 1020, interactions: 780 },
  { day: "May 29", logins: 1100, interactions: 830 },
];

const companies: Record<string, {
  name: string;
  subtitle: string;
  activeUsers: number;
  userChange: number;
  activeProjects: number;
  projectChange: number;
  healthScore: number;
  teamCount: number;
}> = {
  "nexus-labs": {
    name: "Nexus Labs Inc.",
    subtitle: "Operational performance and engagement audit for the last 30 days.",
    activeUsers: 1248,
    userChange: 12,
    activeProjects: 42,
    projectChange: 4,
    healthScore: 94,
    teamCount: 12,
  },
  "aether-media": {
    name: "Aether Media",
    subtitle: "Operational performance and engagement audit for the last 30 days.",
    activeUsers: 840,
    userChange: -2,
    activeProjects: 18,
    projectChange: 2,
    healthScore: 72,
    teamCount: 8,
  },
  "skyline-kinematics": {
    name: "Skyline Kinematics",
    subtitle: "Operational performance and engagement audit for the last 30 days.",
    activeUsers: 5200,
    userChange: 18,
    activeProjects: 64,
    projectChange: 7,
    healthScore: 98,
    teamCount: 24,
  },
};

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (payload.day === "May 15") {
    return <circle cx={cx} cy={cy} r={6} fill="#003ec7" stroke="#fff" strokeWidth={2} />;
  }
  return null;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length && label === "May 15") {
    return (
      <div className="bg-[#191b25] text-white text-[12px] px-3 py-2 rounded-lg shadow-lg">
        May 19: 842 Logins
      </div>
    );
  }
  return null;
};

export function CompanyAnalyticsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const company = (id && companies[id]) || companies["nexus-labs"];

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[13px]">
        <span
          className="text-[#505f76] hover:text-[#191b25] cursor-pointer transition-colors"
          onClick={() => navigate("/analytics")}
        >
          Analytics
        </span>
        <ChevronRight size={14} className="text-[#737688]" />
        <span className="text-[#003ec7] font-medium">Company Analytics</span>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-[32px] font-bold text-[#191b25] tracking-[-0.8px]">{company.name}</h1>
        <p className="text-[14px] text-[#505f76] mt-1">{company.subtitle}</p>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-4">
        {/* Active Users */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div
              className="size-10 rounded-xl flex items-center justify-center"
              style={{ background: "#ededfb" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="#003ec7" strokeWidth="1.8" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[13px] font-medium text-[#16a34a]">
              ↑{Math.abs(company.userChange)}%
            </span>
          </div>
          <div className="text-[11px] font-semibold text-[#737688] uppercase tracking-[0.6px]">
            ACTIVE USERS
          </div>
          <div className="text-[32px] font-bold text-[#191b25] tracking-[-0.8px]">
            {company.activeUsers.toLocaleString()}
          </div>
          <div className="h-0.5 w-full bg-[#003ec7] rounded-full" />
        </div>

        {/* Active Projects */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div
              className="size-10 rounded-xl flex items-center justify-center"
              style={{ background: "#fff7ed" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17l10 5 10-5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[13px] font-medium text-[#16a34a]">
              ↑{company.projectChange}
            </span>
          </div>
          <div className="text-[11px] font-semibold text-[#737688] uppercase tracking-[0.6px]">
            ACTIVE PROJECTS
          </div>
          <div className="text-[32px] font-bold text-[#191b25] tracking-[-0.8px]">
            {company.activeProjects}
          </div>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-4 bg-[#c3c5d9] rounded-full relative transition-colors">
              <div className="absolute right-0.5 top-0.5 size-3 bg-white rounded-full shadow" />
            </button>
            <span className="text-[11px] text-[#737688]">+{company.projectChange + 8}</span>
          </div>
        </div>

        {/* Health Score */}
        <div className="flex-1 bg-[#003ec7] rounded-xl p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div
              className="size-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
                <path d="M12 8v4l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="text-[11px] font-semibold text-[rgba(255,255,255,0.7)] uppercase tracking-[0.6px]">
            HEALTH SCORE
          </div>
          <div className="text-[32px] font-bold text-white tracking-[-0.8px]">
            {company.healthScore}/100
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-white" />
            <span className="text-[12px] text-white">Excellent Stability</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="flex gap-6">
        {/* Activity Trends */}
        <div className="flex-[3] bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[18px] font-semibold text-[#191b25]">Activity Trends</div>
              <div className="text-[13px] text-[#737688] mt-0.5">Daily active logins vs system interactions</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-[#003ec7]" />
                <span className="text-[12px] text-[#737688]">Logins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 rounded-full bg-[#c3c5d9]" />
                <span className="text-[12px] text-[#737688]">Interactions</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={activityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradLogin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#003ec7" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#003ec7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(195,197,217,0.3)" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "#737688" }}
                axisLine={false}
                tickLine={false}
                interval={2}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="interactions"
                stroke="#c3c5d9"
                strokeWidth={1.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="logins"
                stroke="#003ec7"
                strokeWidth={2}
                dot={<CustomDot />}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Org Health Score */}
        <div className="flex-1 bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6">
          <div className="text-[11px] font-semibold text-[#737688] uppercase tracking-[0.8px] mb-6">
            ORG HEALTH SCORE
          </div>
          <div className="flex items-center justify-center">
            <div className="relative size-36">
              <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e7e7f5" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#003ec7"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(company.healthScore / 100) * 251.2} 251.2`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[36px] font-bold text-[#003ec7]">{company.healthScore}</div>
                <div className="text-[11px] font-semibold text-[#737688] uppercase tracking-[0.8px]">
                  PERCENTILE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
