import { useState } from "react";
import { X, Bold, Italic, AlignLeft, Link, List } from "lucide-react";

interface CreateAnnouncementModalProps {
  onClose: () => void;
}

const STATUS_OPTIONS = ["Draft", "Scheduled", "Published"];
const AUDIENCE_OPTIONS = ["All Companies", "Enterprise Only", "Pro & Above", "Internal Only"];

export function CreateAnnouncementModal({ onClose }: CreateAnnouncementModalProps) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [messageBody, setMessageBody] = useState("");
  const [audience, setAudience] = useState("Enterprise");
  const [publishDate, setPublishDate] = useState("");
  const [publishTime, setPublishTime] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryTime, setExpiryTime] = useState("");

  const handleCreate = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-[4px] bg-[rgba(25,27,37,0.4)] flex items-center justify-center p-6 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[672px] max-w-full max-h-[921px] flex flex-col overflow-hidden border border-[rgba(195,197,217,0.3)]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Modal Header */}
        <div className="bg-white flex items-center justify-between px-8 pb-[25px] pt-6 border-b border-[rgba(195,197,217,0.2)]">
          <div>
            <div className="text-[24px] font-bold text-[#191b25] tracking-[-0.24px]">
              Create Announcement
            </div>
            <div className="text-[13px] text-[#434656] mt-1">
              Configure a system-wide message for specific tenant groups.
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-10 flex items-center justify-center hover:bg-[#f0f0f8] rounded-full transition-colors shrink-0"
          >
            <X size={14} className="text-[#434656]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-6 px-8 pt-8 pb-6 overflow-y-auto">
          {/* Title + Status row */}
          <div className="grid grid-cols-3 gap-6">
            {/* Announcement Title (spans 2 cols) */}
            <div className="col-span-2 flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                ANNOUNCEMENT TITLE
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Q4 System Maintenance Window"
                className="w-full px-4 py-[15px] border border-[#c3c5d9] rounded-[8px] text-[16px] text-[#191b25] placeholder-[#6b7280] outline-none focus:border-[#003ec7] bg-[#fbf8ff] transition-colors"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                STATUS
              </label>
              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[16px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] appearance-none transition-colors cursor-pointer"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="flex flex-col gap-2">
            <div className="flex items-end justify-between">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                MESSAGE BODY
              </label>
              <span className="text-[12px] text-[#434656]">Supports Markdown &amp; HTML</span>
            </div>
            <div className="bg-[#fbf8ff] rounded-[8px] border border-[#c3c5d9] h-[256px] flex flex-col overflow-hidden">
              {/* Toolbar */}
              <div className="bg-white flex items-center gap-1 px-2 py-2 border-b border-[rgba(195,197,217,0.2)]">
                <button className="p-1.5 hover:bg-[#f0f0f8] rounded transition-colors">
                  <Bold size={11} className="text-[#434656]" />
                </button>
                <button className="p-1.5 hover:bg-[#f0f0f8] rounded transition-colors">
                  <Italic size={11} className="text-[#434656]" />
                </button>
                <button className="p-1.5 hover:bg-[#f0f0f8] rounded transition-colors">
                  <AlignLeft size={11} className="text-[#434656]" />
                </button>
                <div className="w-px h-4 bg-[rgba(195,197,217,0.3)] mx-1" />
                <button className="p-1.5 hover:bg-[#f0f0f8] rounded transition-colors">
                  <List size={11} className="text-[#434656]" />
                </button>
                <button className="p-1.5 hover:bg-[#f0f0f8] rounded transition-colors">
                  <Link size={11} className="text-[#434656]" />
                </button>
              </div>
              <textarea
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                placeholder="Write your announcement content here..."
                className="flex-1 p-4 bg-transparent text-[16px] text-[rgba(115,118,136,0.8)] placeholder-[rgba(115,118,136,0.5)] outline-none resize-none leading-[26px]"
              />
            </div>
          </div>

          {/* Target Audience */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
              TARGET AUDIENCE
            </label>
            <div className="relative">
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[16px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] appearance-none transition-colors cursor-pointer"
              >
                {AUDIENCE_OPTIONS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                PUBLISH DATE &amp; TIME
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="flex-1 px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] transition-colors cursor-pointer"
                />
                <input
                  type="time"
                  value={publishTime}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-[90px] px-3 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] transition-colors cursor-pointer"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                EXPIRY DATE &amp; TIME
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="flex-1 px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] transition-colors cursor-pointer"
                />
                <input
                  type="time"
                  value={expiryTime}
                  onChange={(e) => setExpiryTime(e.target.value)}
                  className="w-[90px] px-3 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-[#fbf8ff] outline-none focus:border-[#003ec7] transition-colors cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white flex justify-end gap-4 px-8 pb-6 pt-[25px] border-t border-[rgba(195,197,217,0.2)]">
          <button
            onClick={onClose}
            className="px-[25px] py-[11px] rounded-[8px] text-[12px] font-semibold text-[#434656] tracking-[0.6px] border border-[rgba(195,197,217,0.3)] hover:bg-[#f0f0f8] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-8 py-[11px] bg-[#003ec7] rounded-[8px] text-[12px] font-semibold text-white tracking-[0.6px] hover:bg-[#0033a8] transition-colors"
          >
            Create Announcement
          </button>
        </div>
      </div>
    </div>
  );
}
