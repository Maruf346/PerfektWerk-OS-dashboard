import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Plus,
  Trash2,
  Pencil,
  AlignLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ChevronDown,
  Rocket,
  Server,
  Shield,
  Globe,
} from "lucide-react";

// ─── CREATE NEW GUIDE MODAL ────────────────────────────────────────────────────

function CreateNewGuideModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([
    { label: "Initial Environment Configuration", detail: "", expanded: true },
    { label: "", detail: "", expanded: false },
  ]);

  const addStep = () => {
    setSteps((prev) => [...prev, { label: "", detail: "", expanded: false }]);
  };

  const toggleStep = (i: number) => {
    setSteps((prev) => prev.map((s, idx) => idx === i ? { ...s, expanded: !s.expanded } : s));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[540px] mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-4 shrink-0">
          <h2 className="text-[20px] font-semibold text-[#191b25]">Create New Setup Guide</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors">
            <X size={18} className="text-[#737688]" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 pb-4 flex flex-col gap-5">
          {/* Guide Title */}
          <div>
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">Guide Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Kubernetes Cluster Deployment via Terraform"
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] placeholder:text-[#c3c5d9] focus:outline-none focus:border-[#003ec7] transition-colors"
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">Difficulty Level</label>
            <div className="relative">
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors pr-10 cursor-pointer"
              >
                <option value="">Select difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737688] pointer-events-none" />
            </div>
          </div>

          {/* Brief Description */}
          <div>
            <label className="block text-[12px] font-medium text-[#505f76] mb-2">Brief Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the purpose and expected outcome of this guide..."
              rows={3}
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[13px] text-[#191b25] placeholder:text-[#c3c5d9] resize-none focus:outline-none focus:border-[#003ec7] transition-colors"
            />
          </div>

          {/* Guide Steps */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] font-semibold text-[#191b25]">Guide Steps</h3>
              <button
                onClick={addStep}
                className="flex items-center gap-1.5 text-[12px] font-medium text-[#003ec7] border border-[#003ec7] px-3 py-1.5 rounded-lg hover:bg-[#ededfb] transition-colors"
              >
                <Plus size={13} strokeWidth={2.5} />
                Add New Step
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <div key={i}>
                  {step.expanded || i === 0 ? (
                    /* Expanded step */
                    <div className="border border-[rgba(195,197,217,0.4)] rounded-xl overflow-hidden">
                      <div
                        onClick={() => toggleStep(i)}
                        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#f9f9fc] transition-colors"
                      >
                        <div className="size-7 rounded-full bg-[#003ec7] flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                          {i + 1}
                        </div>
                        <input
                          type="text"
                          value={step.label}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSteps((prev) => prev.map((s, idx) => idx === i ? { ...s, label: val } : s));
                          }}
                          onClick={(e) => e.stopPropagation()}
                          placeholder="Step title..."
                          className="flex-1 text-[14px] font-semibold text-[#191b25] placeholder:text-[#c3c5d9] focus:outline-none bg-transparent"
                        />
                      </div>
                      <div className="px-4 pb-3">
                        <textarea
                          value={step.detail}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSteps((prev) => prev.map((s, idx) => idx === i ? { ...s, detail: val } : s));
                          }}
                          placeholder="Enter detailed step instructions, code blocks, or requirements..."
                          rows={3}
                          className="w-full px-3 py-2.5 border border-[rgba(195,197,217,0.4)] rounded-lg text-[12px] text-[#505f76] placeholder:text-[#c3c5d9] resize-none focus:outline-none bg-[#f9f9fc]"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Collapsed step */
                    <div
                      onClick={() => toggleStep(i)}
                      className="flex items-center gap-3 px-4 py-3 border border-[rgba(195,197,217,0.3)] rounded-xl cursor-pointer hover:bg-[#f9f9fc] transition-colors"
                    >
                      <div className="size-7 rounded-full bg-[#f0f0f8] flex items-center justify-center text-[#b0b3c6] text-[12px] font-semibold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-[13px] text-[#b0b3c6]">
                        {step.label || "Click to define step details"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-7 py-5 border-t border-[rgba(195,197,217,0.25)] shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-[13px] font-medium text-[#505f76] border border-[rgba(195,197,217,0.5)] rounded-xl hover:bg-[#f7f8fc] transition-colors"
          >
            Save Draft
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#003ec7] text-white rounded-xl text-[13px] font-medium hover:bg-[#0033a8] transition-colors">
            <Rocket size={14} strokeWidth={2} />
            Publish Guide
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── GUIDE DATA ────────────────────────────────────────────────────────────────

const difficultyConfig: Record<string, { label: string; bg: string; color: string }> = {
  High: { label: "High Difficulty", bg: "#fee2e2", color: "#dc2626" },
  Medium: { label: "Medium Difficulty", bg: "#dbeafe", color: "#1d4ed8" },
  Easy: { label: "Easy Difficulty", bg: "#f1f5f9", color: "#64748b" },
};

const guideIcons = [Server, Shield, Globe];
const iconColors = ["#003ec7", "#1d4ed8", "#475569"];
const iconBgs = ["#ededfb", "#dbeafe", "#f1f5f9"];

const guides = [
  { title: "Kubernetes Cluster Config", desc: "Standard operating procedure for deploying multi-region EKS clusters...", steps: 24, difficulty: "High", iconIdx: 0 },
  { title: "IAM Role Provisioning", desc: "Security protocols for defining granular permissions and cross-...", steps: 12, difficulty: "Medium", iconIdx: 1 },
  { title: "Edge CDN Deployment", desc: "Quick setup for globally distributed caching layers and SSL termination...", steps: 8, difficulty: "Easy", iconIdx: 2 },
  { title: "Kubernetes Cluster Config", desc: "Standard operating procedure for deploying multi-region EKS clusters...", steps: 24, difficulty: "High", iconIdx: 0 },
  { title: "IAM Role Provisioning", desc: "Security protocols for defining granular permissions and cross-...", steps: 12, difficulty: "Medium", iconIdx: 1 },
  { title: "Edge CDN Deployment", desc: "Quick setup for globally distributed caching layers and SSL termination...", steps: 8, difficulty: "Easy", iconIdx: 2 },
];

const TOTAL_GUIDES = 28;
const PAGE_SIZE = guides.length;

// ─── SETUP GUIDES PAGE ─────────────────────────────────────────────────────────

export function SetupGuidesPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_GUIDES / PAGE_SIZE);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f7f8fc]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="p-6 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#737688]">
          <button onClick={() => navigate("/support/knowledge-hub")} className="hover:text-[#003ec7] transition-colors">
            Admin
          </button>
          <span className="text-[#c3c5d9]">›</span>
          <span className="text-[#003ec7] font-medium">Environment Setup Guides</span>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[28px] font-semibold text-[#191b25]">Environment Setup Guides</h1>
            <p className="text-[13px] text-[#737688] mt-1.5 max-w-xl leading-relaxed">
              Create and manage standardized infrastructure configuration walkthroughs for your engineering teams.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-3 bg-[#003ec7] text-white rounded-xl text-[13px] font-medium hover:bg-[#0033a8] transition-colors shrink-0 ml-6"
          >
            <Plus size={16} strokeWidth={2.5} />
            Create New Guide
          </button>
        </div>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-3 gap-5">
          {guides.map((guide, i) => {
            const diff = difficultyConfig[guide.difficulty];
            const IconComp = guideIcons[guide.iconIdx];
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] p-5 flex flex-col"
              >
                {/* Top row: icon + difficulty badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="size-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: iconBgs[guide.iconIdx] }}
                  >
                    <IconComp size={20} style={{ color: iconColors[guide.iconIdx] }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: diff.bg, color: diff.color }}
                  >
                    {diff.label}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-[16px] font-bold text-[#191b25] mb-2">{guide.title}</h3>
                <p className="text-[12px] text-[#737688] leading-relaxed flex-1 mb-4">{guide.desc}</p>

                {/* Steps count */}
                <div className="flex items-center gap-1.5 text-[12px] text-[#737688] mb-4">
                  <AlignLeft size={13} strokeWidth={1.8} />
                  {guide.steps} Steps
                </div>

                {/* Divider + actions */}
                <div className="border-t border-[rgba(195,197,217,0.25)] pt-4 flex items-center gap-3">
                  <button className="p-1.5 rounded-lg hover:bg-[#fee2e2] transition-colors" title="Delete">
                    <Trash2 size={15} className="text-[#dc2626]" strokeWidth={1.8} />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors" title="Edit">
                    <Pencil size={15} className="text-[#737688]" strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[13px] text-[#737688]">
            Showing {guides.length} of {TOTAL_GUIDES} environment guides
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} className="text-[#505f76]" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`size-9 rounded-lg text-[13px] font-medium transition-colors ${
                  page === p ? "bg-[#003ec7] text-white" : "text-[#505f76] hover:bg-[#f0f0f8]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} className="text-[#505f76]" />
            </button>
          </div>
        </div>
      </div>

      {showModal && <CreateNewGuideModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
