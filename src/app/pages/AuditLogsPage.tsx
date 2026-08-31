import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Refresh icon (circular arrows) matching Figma
function RefreshIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M10.5 2.5A5.5 5.5 0 1 0 11 6M10.5 2.5V1M10.5 2.5H9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Check-circle icon from Figma (success)
function CheckIcon() {
  return (
    <svg width="13.33" height="13.33" viewBox="0 0 13.3333 13.3333" fill="none">
      <path
        d="M6.6667 1.3333C3.7167 1.3333 1.3333 3.7167 1.3333 6.6667C1.3333 9.6167 3.7167 12 6.6667 12C9.6167 12 12 9.6167 12 6.6667C12 3.7167 9.6167 1.3333 6.6667 1.3333ZM5.3333 9.3333L2.6667 6.6667L3.6067 5.7267L5.3333 7.4467L9.7267 3.0533L10.6667 4L5.3333 9.3333Z"
        fill="#16A34A"
      />
    </svg>
  );
}

// X-circle icon (failure)
function FailureIcon() {
  return (
    <svg width="13.33" height="13.33" viewBox="0 0 13.3333 13.3333" fill="none">
      <path
        d="M6.6667 1.3333C3.7167 1.3333 1.3333 3.7167 1.3333 6.6667C1.3333 9.6167 3.7167 12 6.6667 12C9.6167 12 12 9.6167 12 6.6667C12 3.7167 9.6167 1.3333 6.6667 1.3333ZM9.3333 8.3933L8.3933 9.3333L6.6667 7.6067L4.94 9.3333L4 8.3933L5.7267 6.6667L4 4.94L4.94 4L6.6667 5.7267L8.3933 4L9.3333 4.94L7.6067 6.6667L9.3333 8.3933Z"
        fill="#BA1A1A"
      />
    </svg>
  );
}

// Chevron-down for Details column
function ChevronDownIcon() {
  return (
    <svg width="16.667" height="10" viewBox="0 0 16.6667 10" fill="none">
      <path d="M1 1L8.3333 9L15.6667 1" stroke="#191B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const auditLogsAll = [
  {
    date: "Oct 19, 2023",
    time: "14:22:15 UTC",
    user: "Marcus Aurelius",
    email: "m.aurelius@perfekt.io",
    initials: "MA",
    initialsColor: "#003ec7",
    initialsBg: "rgba(0,82,255,0.2)",
    automated: false,
    company: "System Admin",
    category: "AUTHENTICATION",
    categoryBg: "#eff6ff",
    categoryBorder: "#dbeafe",
    categoryColor: "#1d4ed8",
    action: "Login",
    statusOk: true,
  },
  {
    date: "Oct 19, 2023",
    time: "13:05:42 UTC",
    user: "Elena Fisher",
    email: "e.fisher@perfekt.io",
    initials: "EF",
    initialsColor: "#505f76",
    initialsBg: "rgba(208,225,251,0.2)",
    automated: false,
    company: "Bauwerk Group",
    category: "COMPANY ACTIONS",
    categoryBg: "#faf5ff",
    categoryBorder: "#f3e8ff",
    categoryColor: "#7e22ce",
    action: "Activated",
    statusOk: true,
  },
  {
    date: "Oct 19, 2023",
    time: "11:45:00 UTC",
    user: null,
    email: "System Process (Automated)",
    initials: null,
    initialsColor: null,
    initialsBg: null,
    automated: true,
    company: "Stark Industries",
    category: "BILLING",
    categoryBg: "#f0fdf4",
    categoryBorder: "#dcfce7",
    categoryColor: "#15803d",
    action: "Invoice Generated",
    statusOk: true,
  },
  {
    date: "Oct 19, 2023",
    time: "09:12:33 UTC",
    user: "Nathan Smith",
    email: "n.smith@perfekt.io",
    initials: "NS",
    initialsColor: "#ba1a1a",
    initialsBg: "rgba(255,218,214,0.2)",
    automated: false,
    company: "System Config",
    category: "CONFIGURATION",
    categoryBg: "#fffbeb",
    categoryBorder: "#fef3c7",
    categoryColor: "#b45309",
    action: "Feature Enabled (AI-Assist)",
    statusOk: false,
  },
  {
    date: "Oct 19, 2023",
    time: "08:00:12 UTC",
    user: "Elena Fisher",
    email: "e.fisher@perfekt.io",
    initials: "EF",
    initialsColor: "#505f76",
    initialsBg: "rgba(208,225,251,0.2)",
    automated: false,
    company: "Global Support",
    category: "SUPPORT",
    categoryBg: "#f0fdfa",
    categoryBorder: "#ccfbf1",
    categoryColor: "#0f766e",
    action: "Ticket Created",
    statusOk: true,
  },
  {
    date: "Oct 18, 2023",
    time: "22:14:08 UTC",
    user: "Anna Bergmann",
    email: "a.bergmann@perfekt.io",
    initials: "AB",
    initialsColor: "#7e22ce",
    initialsBg: "rgba(233,213,255,0.3)",
    automated: false,
    company: "Nordic Infra",
    category: "COMPANY ACTIONS",
    categoryBg: "#faf5ff",
    categoryBorder: "#f3e8ff",
    categoryColor: "#7e22ce",
    action: "User Invited",
    statusOk: true,
  },
  {
    date: "Oct 18, 2023",
    time: "20:33:01 UTC",
    user: null,
    email: "System Process (Automated)",
    initials: null,
    initialsColor: null,
    initialsBg: null,
    automated: true,
    company: "Global",
    category: "BILLING",
    categoryBg: "#f0fdf4",
    categoryBorder: "#dcfce7",
    categoryColor: "#15803d",
    action: "Subscription Renewed",
    statusOk: true,
  },
  {
    date: "Oct 18, 2023",
    time: "17:41:22 UTC",
    user: "Nathan Smith",
    email: "n.smith@perfekt.io",
    initials: "NS",
    initialsColor: "#ba1a1a",
    initialsBg: "rgba(255,218,214,0.2)",
    automated: false,
    company: "System Config",
    category: "CONFIGURATION",
    categoryBg: "#fffbeb",
    categoryBorder: "#fef3c7",
    categoryColor: "#b45309",
    action: "Permission Changed",
    statusOk: false,
  },
  {
    date: "Oct 18, 2023",
    time: "15:09:44 UTC",
    user: "Marcus Aurelius",
    email: "m.aurelius@perfekt.io",
    initials: "MA",
    initialsColor: "#003ec7",
    initialsBg: "rgba(0,82,255,0.2)",
    automated: false,
    company: "BauWerk Global",
    category: "COMPANY ACTIONS",
    categoryBg: "#faf5ff",
    categoryBorder: "#f3e8ff",
    categoryColor: "#7e22ce",
    action: "Plan Upgraded",
    statusOk: true,
  },
  {
    date: "Oct 18, 2023",
    time: "12:00:00 UTC",
    user: null,
    email: "System Process (Automated)",
    initials: null,
    initialsColor: null,
    initialsBg: null,
    automated: true,
    company: "Global",
    category: "AUTHENTICATION",
    categoryBg: "#eff6ff",
    categoryBorder: "#dbeafe",
    categoryColor: "#1d4ed8",
    action: "Session Expired (Batch)",
    statusOk: true,
  },
  {
    date: "Oct 17, 2023",
    time: "23:55:10 UTC",
    user: "Elena Fisher",
    email: "e.fisher@perfekt.io",
    initials: "EF",
    initialsColor: "#505f76",
    initialsBg: "rgba(208,225,251,0.2)",
    automated: false,
    company: "Stahl & Co.",
    category: "SUPPORT",
    categoryBg: "#f0fdfa",
    categoryBorder: "#ccfbf1",
    categoryColor: "#0f766e",
    action: "Ticket Resolved",
    statusOk: true,
  },
  {
    date: "Oct 17, 2023",
    time: "18:30:05 UTC",
    user: "Anna Bergmann",
    email: "a.bergmann@perfekt.io",
    initials: "AB",
    initialsColor: "#7e22ce",
    initialsBg: "rgba(233,213,255,0.3)",
    automated: false,
    company: "Nordic Infra",
    category: "AUTHENTICATION",
    categoryBg: "#eff6ff",
    categoryBorder: "#dbeafe",
    categoryColor: "#1d4ed8",
    action: "Password Reset",
    statusOk: true,
  },
  {
    date: "Oct 17, 2023",
    time: "14:12:55 UTC",
    user: null,
    email: "System Process (Automated)",
    initials: null,
    initialsColor: null,
    initialsBg: null,
    automated: true,
    company: "Global",
    category: "BILLING",
    categoryBg: "#f0fdf4",
    categoryBorder: "#dcfce7",
    categoryColor: "#15803d",
    action: "Payment Processed",
    statusOk: true,
  },
  {
    date: "Oct 17, 2023",
    time: "10:45:30 UTC",
    user: "Marcus Aurelius",
    email: "m.aurelius@perfekt.io",
    initials: "MA",
    initialsColor: "#003ec7",
    initialsBg: "rgba(0,82,255,0.2)",
    automated: false,
    company: "System Admin",
    category: "CONFIGURATION",
    categoryBg: "#fffbeb",
    categoryBorder: "#fef3c7",
    categoryColor: "#b45309",
    action: "API Key Rotated",
    statusOk: true,
  },
  {
    date: "Oct 17, 2023",
    time: "07:22:18 UTC",
    user: "Nathan Smith",
    email: "n.smith@perfekt.io",
    initials: "NS",
    initialsColor: "#ba1a1a",
    initialsBg: "rgba(255,218,214,0.2)",
    automated: false,
    company: "EuroBuild",
    category: "AUTHENTICATION",
    categoryBg: "#eff6ff",
    categoryBorder: "#dbeafe",
    categoryColor: "#1d4ed8",
    action: "Login Failed",
    statusOk: false,
  },
];

const PAGE_SIZE = 5;

export function AuditLogsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(auditLogsAll.length / PAGE_SIZE);
  const auditLogs = auditLogsAll.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="p-8 flex flex-col gap-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page Header */}
      <div className="flex items-end justify-between gap-8">
        <div className="flex flex-col gap-1">
          <h1
            className="tracking-[-0.32px]"
            style={{ fontSize: 32, fontWeight: 600, color: "#191b25", lineHeight: "40px" }}
          >
            Audit Logs
          </h1>
          <p style={{ fontSize: 16, fontWeight: 400, color: "#505f76", lineHeight: "24px", maxWidth: 672 }}>
            An immutable ledger recording every administrative and transactional event across the
            PerfektWerk ecosystem. Records are cryptographically hashed and cannot be altered or
            deleted.
          </p>
        </div>
        <button
          className="flex items-center gap-2 shrink-0 transition-colors hover:bg-[#0033a8]"
          style={{
            background: "#003ec7",
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "24px",
            padding: "9px 16px",
            borderRadius: 8,
            boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
          }}
        >
          <RefreshIcon />
          Refresh Ledger
        </button>
      </div>

      {/* Table card */}
      <div
        className="bg-white overflow-hidden"
        style={{
          borderRadius: 12,
          border: "1px solid #c3c5d9",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f3f2ff", borderBottom: "1px solid #c3c5d9" }}>
                {[
                  { label: "TIMESTAMP", align: "left" },
                  { label: "USER",      align: "left" },
                  { label: "COMPANY",   align: "left" },
                  { label: "CATEGORY",  align: "left" },
                  { label: "ACTION",    align: "left" },
                  { label: "STATUS",    align: "left" },
                ].map((col) => (
                  <th
                    key={col.label}
                    style={{
                      textAlign: col.align as "left" | "right",
                      padding: "16px 24px",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#505f76",
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log, i) => (
                <tr key={i} style={{ borderTop: "1px solid #c3c5d9" }}>
                  {/* TIMESTAMP */}
                  <td style={{ padding: "16.5px 24px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#191b25", lineHeight: "24px" }}>
                      {log.date}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 400, color: "#505f76", lineHeight: "24px" }}>
                      {log.time}
                    </div>
                  </td>

                  {/* USER */}
                  <td style={{ padding: "0 24px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                    {log.user ? (
                      <div className="flex items-center" style={{ gap: 12 }}>
                        <div
                          className="flex items-center justify-center shrink-0 rounded-full"
                          style={{
                            width: 32,
                            height: 32,
                            background: log.initialsBg!,
                            color: log.initialsColor!,
                            fontSize: 12,
                            fontWeight: 700,
                            lineHeight: "18px",
                          }}
                        >
                          {log.initials}
                        </div>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 500, color: "#191b25", lineHeight: "24px" }}>
                            {log.user}
                          </div>
                          <div style={{ fontSize: 16, fontWeight: 400, color: "#505f76", lineHeight: "24px" }}>
                            {log.email}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: 16, fontWeight: 400, fontStyle: "italic", color: "#505f76", lineHeight: "24px", padding: "28.5px 0" }}>
                        {log.email}
                      </div>
                    )}
                  </td>

                  {/* COMPANY */}
                  <td style={{ padding: "28.5px 24px 28.5px 48px", fontSize: 16, fontWeight: 400, color: "#505f76", lineHeight: "24px", whiteSpace: "nowrap", verticalAlign: "middle" }}>
                    {log.company}
                  </td>

                  {/* CATEGORY */}
                  <td style={{ padding: "30.5px 24px 26.5px", verticalAlign: "middle" }}>
                    <span
                      style={{
                        background: log.categoryBg,
                        border: `1px solid ${log.categoryBorder}`,
                        color: log.categoryColor,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "-0.275px",
                        textTransform: "uppercase",
                        padding: "3.5px 9px",
                        borderRadius: 4,
                        whiteSpace: "nowrap",
                        lineHeight: "16.5px",
                        display: "inline-block",
                      }}
                    >
                      {log.category}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td style={{ padding: "28.5px 24px", fontSize: 16, fontWeight: 500, color: "#191b25", lineHeight: "24px", whiteSpace: "nowrap", verticalAlign: "middle" }}>
                    {log.action}
                  </td>

                  {/* STATUS */}
                  <td style={{ padding: "0 0 0 24px", verticalAlign: "middle" }}>
                    <div className="flex items-center" style={{ gap: 6 }}>
                      {log.statusOk ? <CheckIcon /> : <FailureIcon />}
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: log.statusOk ? "#16a34a" : "#ba1a1a",
                          textTransform: "uppercase",
                          lineHeight: "24px",
                        }}
                      >
                        {log.statusOk ? "SUCCESS" : "FAILURE"}
                      </span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: "1px solid #c3c5d9",
            padding: "16px 24px",
            background: "#fff",
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 400, color: "#505f76" }}>
            Showing{" "}
            <strong style={{ color: "#191b25", fontWeight: 700 }}>
              {(page - 1) * PAGE_SIZE + 1} - {Math.min(page * PAGE_SIZE, auditLogsAll.length)}
            </strong>
            {" "}of {auditLogsAll.length} logs
          </span>
          <div className="flex items-center" style={{ gap: 4 }}>
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="flex items-center justify-center transition-colors hover:bg-[#f3f2ff] disabled:opacity-40"
              style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #c3c5d9" }}
            >
              <ChevronLeft size={9} color="#191b25" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="flex items-center justify-center transition-colors"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  background: page === p ? "#003ec7" : "transparent",
                  color: page === p ? "#fff" : "#191b25",
                }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="flex items-center justify-center transition-colors hover:bg-[#f3f2ff] disabled:opacity-40"
              style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #c3c5d9" }}
            >
              <ChevronRight size={9} color="#191b25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
