import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Plus, MoreVertical, Search, Bell } from "lucide-react";
import { CreateAnnouncementModal } from "../components/CreateAnnouncementModal";

const announcements = [
  {
    id: 1,
    title: "Scheduled Database Migration",
    subtitle: "Last edited 2h ago",
    audience: "Enterprise Only",
    audienceStyle: { bg: "rgba(208,225,251,0.3)", color: "#505f76" },
    status: "Scheduled",
    statusDot: "#952200",
    statusColor: "#952200",
    schedule: "Dec 15, 2024 • 03:00 AM",
    altBg: false,
  },
  {
    id: 2,
    title: "New AI Module Beta",
    subtitle: "Published yesterday",
    audience: "All Companies",
    audienceStyle: { bg: "rgba(0,82,255,0.1)", color: "#003ec7" },
    status: "Published",
    statusDot: "#16a34a",
    statusColor: "#16a34a",
    schedule: "Oct 20, 2024 • 09:00 AM",
    altBg: true,
  },
  {
    id: 3,
    title: "Q4 System Maintenance Window",
    subtitle: "Last edited 1d ago",
    audience: "All Companies",
    audienceStyle: { bg: "rgba(0,82,255,0.1)", color: "#003ec7" },
    status: "Draft",
    statusDot: "#616161",
    statusColor: "#616161",
    schedule: "Jan 10, 2025 • 06:00 AM",
    altBg: false,
  },
  {
    id: 4,
    title: "New API Integration: Stripe Connect",
    subtitle: "Last edited 3d ago",
    audience: "Enterprise Only",
    audienceStyle: { bg: "rgba(208,225,251,0.3)", color: "#505f76" },
    status: "Scheduled",
    statusDot: "#952200",
    statusColor: "#952200",
    schedule: "Nov 01, 2024 • 09:00 AM",
    altBg: true,
  },
  {
    id: 5,
    title: "Holiday Support Hours 2024",
    subtitle: "Last edited 1w ago",
    audience: "All Companies",
    audienceStyle: { bg: "rgba(0,82,255,0.1)", color: "#003ec7" },
    status: "Draft",
    statusDot: "#616161",
    statusColor: "#616161",
    schedule: "—",
    altBg: false,
  },
];

export function AnnouncementsPage() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = announcements.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-full" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Content */}
      <div className="flex flex-col gap-6 p-8 relative z-[1]">
        {/* Back link */}
        <button
          onClick={() => navigate("/operations")}
          className="flex items-center gap-3 text-[16px] text-black hover:opacity-70 transition-opacity w-fit"
        >
          <ArrowLeft size={24} />
          Back to Operations
        </button>

        {/* Page header */}
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
              Announcements
            </h1>
            <p className="text-[14px] text-[#434656] mt-1">
              Manage platform-wide updates and corporate notifications.
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#003ec7] text-white rounded-[8px] text-[12px] font-semibold tracking-[0.6px] hover:bg-[#0033a8] transition-colors shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          >
            <Plus size={14} />
            Create Announcement
          </button>
        </div>


        {/* Table card */}
        <div className="bg-white rounded-[12px] border border-[rgba(195,197,217,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Table header */}
          <div className="bg-[#f3f2ff] grid border-b border-[#c3c5d9]" style={{ gridTemplateColumns: "2fr 1.2fr 1fr 1.5fr 0.8fr" }}>
            {["TITLE", "AUDIENCE", "STATUS", "SCHEDULE", "ACTIONS"].map((h) => (
              <div key={h} className="px-6 py-4 text-[12px] font-semibold text-[#434656] tracking-[0.6px]">
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          {filtered.map((row) => (
            <div
              key={row.id}
              className="grid border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors"
              style={{
                gridTemplateColumns: "2fr 1.2fr 1fr 1.5fr 0.8fr",
                backgroundColor: row.altBg ? "#fbf8ff" : undefined,
              }}
            >
              {/* Title */}
              <div className="px-6 py-5">
                <div className="text-[14px] font-semibold text-[#191b25] leading-[20px]">
                  {row.title}
                </div>
                <div className="text-[12px] text-[#434656] mt-0.5 leading-[16px]">
                  {row.subtitle}
                </div>
              </div>

              {/* Audience */}
              <div className="px-6 py-5 flex items-center">
                <span
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: row.audienceStyle.bg, color: row.audienceStyle.color }}
                >
                  {row.audience}
                </span>
              </div>

              {/* Status */}
              <div className="px-6 py-5 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full shrink-0" style={{ background: row.statusDot }} />
                  <span className="text-[12px] font-semibold" style={{ color: row.statusColor }}>
                    {row.status}
                  </span>
                </div>
              </div>

              {/* Schedule */}
              <div className="px-6 py-5 flex items-center pl-12">
                <span className="text-[12px] text-[#434656]">{row.schedule}</span>
              </div>

              {/* Actions */}
              <div className="px-6 py-5 flex items-center">
                <button className="p-2 hover:bg-[#f0f0f8] rounded-full transition-colors">
                  <MoreVertical size={16} className="text-[#434656]" />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-6 py-12 text-center text-[14px] text-[#737688]">
              No announcements found.
            </div>
          )}
        </div>
      </div>

      {/* Create Announcement Modal */}
      {showCreateModal && (
        <CreateAnnouncementModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}
