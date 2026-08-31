import { useState } from "react";
import { ChevronLeft, ChevronRight, Wifi, Radio, Thermometer, Router } from "lucide-react";
import { AuditLogsPage } from "./AuditLogsPage";

const statusConfig: Record<string, { bg: string; color: string; dot: string }> = {
  Online: { bg: "#dcfce7", color: "#166534", dot: "#16a34a" },
  Maintenance: { bg: "#fff7ed", color: "#c2410c", dot: "#f59e0b" },
  Error: { bg: "#fee2e2", color: "#dc2626", dot: "#dc2626" },
  Offline: { bg: "#f1f5f9", color: "#64748b", dot: "#94a3b8" },
};

const firmwareColors: Record<string, string> = {
  "v4.2.1": "#166534",
  "v3.9.0": "#c2410c",
  "v4.1.2": "#dc2626",
  "v2.4.5": "#737688",
};

const allDevices = [
  {
    name: "LiDAR Scanner Pro",
    category: "Industrial/Scanning",
    serial: "PW-8829-XQ",
    company: "BauWerk Global",
    status: "Online",
    firmware: "v4.2.1",
    lastSync: "2 mins ago",
    icon: Radio,
    iconBg: "#ededfb",
    iconColor: "#003ec7",
  },
  {
    name: "Crane Sensor v2",
    category: "Heavy Machinery",
    serial: "PW-2210-CR",
    company: "Stahl & Co.",
    status: "Maintenance",
    firmware: "v3.9.0",
    lastSync: "45 mins ago",
    icon: Wifi,
    iconBg: "#fff7ed",
    iconColor: "#c2410c",
  },
  {
    name: "Thermal Monitor 5",
    category: "Environment",
    serial: "PW-5501-TM",
    company: "BauWerk Global",
    status: "Error",
    firmware: "v4.1.2",
    lastSync: "14 Oct 2023",
    icon: Thermometer,
    iconBg: "#fee2e2",
    iconColor: "#dc2626",
  },
  {
    name: "Edge Gateway X",
    category: "Connectivity",
    serial: "PW-0021-GW",
    company: "Nordic Infra",
    status: "Offline",
    firmware: "v2.4.5",
    lastSync: "2 hours ago",
    icon: Router,
    iconBg: "#f1f5f9",
    iconColor: "#64748b",
  },
  {
    name: "Pressure Sensor R4",
    category: "Industrial/Pressure",
    serial: "PW-3312-PS",
    company: "Prestige Logistics",
    status: "Online",
    firmware: "v4.2.1",
    lastSync: "5 mins ago",
    icon: Radio,
    iconBg: "#ededfb",
    iconColor: "#003ec7",
  },
  {
    name: "Vibration Analyzer V3",
    category: "Heavy Machinery",
    serial: "PW-7701-VA",
    company: "Stahl & Co.",
    status: "Online",
    firmware: "v4.2.1",
    lastSync: "12 mins ago",
    icon: Wifi,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    name: "Air Quality Module",
    category: "Environment",
    serial: "PW-9912-AQ",
    company: "Nordic Infra",
    status: "Maintenance",
    firmware: "v3.9.0",
    lastSync: "1 hour ago",
    icon: Thermometer,
    iconBg: "#fff7ed",
    iconColor: "#c2410c",
  },
  {
    name: "5G IoT Hub B2",
    category: "Connectivity",
    serial: "PW-4455-HB",
    company: "BauWerk Global",
    status: "Online",
    firmware: "v4.2.1",
    lastSync: "3 mins ago",
    icon: Router,
    iconBg: "#ededfb",
    iconColor: "#003ec7",
  },
];

const DEVICES_PER_PAGE = 4;
const TOTAL_DEVICES = 1284;

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

export function PlatformPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allDevices.length / DEVICES_PER_PAGE);
  const devices = allDevices.slice((page - 1) * DEVICES_PER_PAGE, page * DEVICES_PER_PAGE);

  if (activeTab === 1) {
    return (
      <div className="flex flex-col gap-0" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="px-8 pt-8">
          <SegmentedControl
            tabs={["Device Management", "Audit Logs"]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
        <AuditLogsPage />
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Segmented tabs */}
      <SegmentedControl
        tabs={["Device Management", "Audit Logs"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Header */}
      <div>
        <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
          Hardware Asset Registry
        </h1>
        <p className="text-[14px] text-[#434656] mt-1">
          Monitor and manage high-precision sensor arrays, scanners, and industrial IoT hardware deployed across global operations.
        </p>
      </div>

      {/* Devices Table */}
      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f7f8fc]">
                {["DEVICE NAME", "SERIAL NUMBER", "COMPANY", "STATUS", "FIRMWARE", "LAST SYNC"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {devices.map((device, i) => {
                const status = statusConfig[device.status] || statusConfig.Offline;
                const fwColor = firmwareColors[device.firmware] || "#737688";
                return (
                  <tr
                    key={i}
                    className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: device.iconBg }}
                        >
                          <device.icon
                            size={18}
                            style={{ color: device.iconColor }}
                            strokeWidth={1.8}
                          />
                        </div>
                        <div>
                          <div className="text-[14px] font-semibold text-[#191b25]">
                            {device.name}
                          </div>
                          <div className="text-[12px] text-[#737688]">{device.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[13px] font-mono text-[#434656] bg-[#f7f8fc] px-2 py-0.5 rounded">
                        {device.serial}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-[13px] text-[#434656]">{device.company}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="size-2 rounded-full shrink-0"
                          style={{ background: status.dot }}
                        />
                        <span
                          className="px-2.5 py-1 rounded-full text-[12px] font-medium"
                          style={{ background: status.bg, color: status.color }}
                        >
                          {device.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className="text-[13px] font-mono font-semibold"
                        style={{ color: fwColor }}
                      >
                        {device.firmware}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-[13px] text-[#505f76]">{device.lastSync}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
          <span className="text-[13px] text-[#505f76]">
            Showing {(page - 1) * DEVICES_PER_PAGE + 1}–{Math.min(page * DEVICES_PER_PAGE, allDevices.length)} of <strong>{TOTAL_DEVICES.toLocaleString()}</strong> devices
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg border border-[rgba(195,197,217,0.4)] hover:bg-[#f0f0f8] disabled:opacity-40 transition-colors"
            >
              <ChevronLeft size={14} className="text-[#505f76]" />
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
              className="p-1.5 rounded-lg border border-[rgba(195,197,217,0.4)] hover:bg-[#f0f0f8] disabled:opacity-40 transition-colors"
            >
              <ChevronRight size={14} className="text-[#505f76]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
