import { useState } from "react";
import { X } from "lucide-react";

interface CreateTaskModalProps {
  onClose: () => void;
}

const PRIORITY_OPTIONS = [
  { label: "Low", dot: "#d3e4fe" },
  { label: "Medium", dot: "#b7c4ff" },
  { label: "High", dot: "#003ec7" },
  { label: "Critical", dot: "#ba1a1a" },
];

const TEAM_MEMBERS = [
  { value: "me", label: "Me (Admin)" },
  { value: "markus", label: "Markus Weber" },
  { value: "elena", label: "Elena Rossi" },
  { value: "lucas", label: "Lucas Meyer" },
  { value: "sarah", label: "Sarah Johnson" },
];

export function CreateTaskModal({ onClose }: CreateTaskModalProps) {
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleCreate = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-[4px] bg-[rgba(25,27,37,0.4)] flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[672px] max-w-full flex flex-col overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-8 pb-[25px] pt-6 border-b border-[rgba(195,197,217,0.2)]">
          <span className="text-[24px] font-semibold text-[#191b25] tracking-[-0.24px]">
            Create New Task
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f0f0f8] rounded-full transition-colors"
          >
            <X size={14} className="text-[#434656]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-8 overflow-y-auto max-h-[600px]">
          {/* Task Description */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
              TASK DESCRIPTION
            </label>
            <input
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="e.g., Upgrade Kubernetes clusters to v1.28"
              className="w-full px-4 py-[15px] border border-[#c3c5d9] rounded-[8px] text-[16px] text-[#191b25] placeholder-[#6b7280] outline-none focus:border-[#003ec7] bg-white transition-colors"
            />
          </div>

          {/* Assigned To + Due Date */}
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                ASSIGNED TO
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 size-7 rounded-full bg-[#dde1ff] flex items-center justify-center text-[10px] font-bold text-[#001452] z-10">
                  ME
                </div>
                <select
                  value={assignee}
                  onChange={(e) => setAssignee(e.target.value)}
                  className="w-full pl-12 pr-8 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-white outline-none focus:border-[#003ec7] appearance-none transition-colors cursor-pointer"
                >
                  <option value="">Select a member...</option>
                  {TEAM_MEMBERS.map((m) => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="#6B7280" strokeWidth="1.575" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
                DUE DATE
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] bg-white outline-none focus:border-[#003ec7] transition-colors cursor-pointer"
              />
            </div>
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-3.5">
            <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
              PRIORITY LEVEL
            </label>
            <div className="flex gap-2">
              {PRIORITY_OPTIONS.map((p) => {
                const isSelected = selectedPriority === p.label;
                return (
                  <button
                    key={p.label}
                    onClick={() => setSelectedPriority(p.label)}
                    className={`flex-1 flex flex-col items-center gap-1 py-[13px] rounded-[8px] border transition-colors ${
                      isSelected
                        ? "bg-[rgba(0,82,255,0.1)] border-[#003ec7]"
                        : "border-[#c3c5d9] hover:bg-[#f7f8fc]"
                    }`}
                  >
                    <div className="size-2 rounded-full" style={{ background: p.dot }} />
                    <span className="text-[14px] text-[#191b25]">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Notes */}
          <div className="flex flex-col gap-2.5 pb-1.5">
            <label className="text-[12px] font-semibold text-[#434656] uppercase tracking-[0.6px]">
              DETAILED OPERATIONAL NOTES
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe scope, dependencies, and expected outcomes..."
              rows={4}
              className="w-full px-4 py-[13px] border border-[#c3c5d9] rounded-[8px] text-[14px] text-[#191b25] placeholder-[#6b7280] outline-none focus:border-[#003ec7] resize-none transition-colors bg-white"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white flex justify-end gap-4 px-8 pb-6 pt-[25px] border-t border-[rgba(195,197,217,0.2)]">
          <button
            onClick={onClose}
            className="px-6 py-[10px] rounded-[8px] text-[14px] font-semibold text-[#505f76] hover:bg-[#f0f0f8] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-8 py-[10px] bg-[#003ec7] rounded-[8px] text-[14px] font-semibold text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#0033a8] transition-colors"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
