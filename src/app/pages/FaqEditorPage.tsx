import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Bold, Italic, AlignLeft, Code } from "lucide-react";
import svgPaths from "../../imports/FaqEditor-1/svg-m5efiyl1pb";

// ─── SVG ICONS FROM FIGMA ────────────────────────────────────────────────────

function EditIcon({ color = "#003EC7" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.pad10a80} fill={color} />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
      <path d={svgPaths.p3e801e80} fill="#434656" />
    </svg>
  );
}

function EyeHiddenIcon() {
  return (
    <svg width="22" height="19.8" viewBox="0 0 22 19.8" fill="none" style={{ opacity: 0.4 }}>
      <path d={svgPaths.p20809060} fill="#434656" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d={svgPaths.p2780bd80} fill="#BA1A1A" />
    </svg>
  );
}

function ClockIconSvg() {
  return (
    <svg width="10.5" height="10.5" viewBox="0 0 10.5 10.5" fill="none">
      <path d={svgPaths.p1c1607c0} fill="#434656" />
    </svg>
  );
}

function PlusIconSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p2d8e4cc0} fill="white" />
    </svg>
  );
}

// ─── ADD NEW QUESTION MODAL ────────────────────────────────────────────────────

function AddNewQuestionModal({ onClose }: { onClose: () => void }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[500px] mx-4">
        <div className="flex items-start justify-between px-7 pt-7 pb-4">
          <div>
            <h2 className="text-[20px] font-semibold text-[#191b25]">Add New FAQ Question</h2>
            <p className="text-[13px] text-[#737688] mt-0.5">
              Populate the fields below to add a new question to the global knowledge repository.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors ml-4 mt-0.5 shrink-0"
          >
            <X size={18} className="text-[#737688]" strokeWidth={2} />
          </button>
        </div>
        <div className="px-7 pb-6 flex flex-col gap-5">
          <div>
            <label className="block text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">
              Question Text
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., How do I reset my organization's API credentials?"
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] placeholder:text-[#c3c5d9] focus:outline-none focus:border-[#003ec7] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">
              Answer Editor
            </label>
            <div className="border border-[rgba(195,197,217,0.5)] rounded-xl overflow-hidden focus-within:border-[#003ec7] transition-colors">
              <div className="flex items-center gap-1 px-3 py-2 border-b border-[rgba(195,197,217,0.3)] bg-[#f9f9fc]">
                {[
                  { icon: Bold, title: "Bold" },
                  { icon: Italic, title: "Italic" },
                  { icon: AlignLeft, title: "List" },
                  { icon: Code, title: "Code" },
                ].map(({ icon: Icon, title }) => (
                  <button key={title} title={title} className="p-1.5 rounded hover:bg-[#e8e9f0] transition-colors">
                    <Icon size={14} className="text-[#505f76]" strokeWidth={2} />
                  </button>
                ))}
              </div>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Provide a clear, concise answer..."
                rows={6}
                className="w-full px-4 py-3 text-[13px] text-[#191b25] placeholder:text-[#c3c5d9] resize-none focus:outline-none bg-white"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 px-7 py-5 border-t border-[rgba(195,197,217,0.25)]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-[13px] font-medium text-[#505f76] hover:text-[#191b25] transition-colors"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-[#003ec7] text-white rounded-xl text-[13px] font-medium hover:bg-[#0033a8] transition-colors">
            Save Question
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ DATA ──────────────────────────────────────────────────────────────────

type FaqItem = {
  question: string;
  answer: string;
  visible: boolean;
  lastEdited: string;
};

type FaqSection = {
  category: string;
  items: FaqItem[];
};

const initialSections: FaqSection[] = [
  {
    category: "Billing",
    items: [
      {
        question: "How do I change my enterprise payment method?",
        answer: "To update your payment credentials, navigate to Settings > Billing and select 'Edit Payment Method'. All major…",
        visible: true,
        lastEdited: "2 days ago",
      },
      {
        question: "Where can I download my annual tax invoices?",
        answer: "Annual tax invoices are generated automatically on January 1st and can be found in the Documents tab of the…",
        visible: true,
        lastEdited: "2 days ago",
      },
    ],
  },
  {
    category: "AI Capabilities",
    items: [
      {
        question: "How does the Smart Tagging system work?",
        answer: "Our neural engine analyzes the content of your FAQ and automatically applies taxonomy tags to improve search…",
        visible: true,
        lastEdited: "2 days ago",
      },
    ],
  },
  {
    category: "API & Connectivity",
    items: [
      {
        question: "What are the rate limits for the Public API?",
        answer: "Standard enterprise accounts are limited to 10,000 requests per minute. For higher throughput, please contact…",
        visible: false,
        lastEdited: "2 days ago",
      },
    ],
  },
];

// ─── FAQ EDITOR PAGE ───────────────────────────────────────────────────────────

export function FaqEditorPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sections, setSections] = useState(initialSections);

  const toggleVisibility = (sectionIdx: number, itemIdx: number) => {
    setSections((prev) =>
      prev.map((sec, si) =>
        si !== sectionIdx
          ? sec
          : {
              ...sec,
              items: sec.items.map((item, ii) =>
                ii !== itemIdx ? item : { ...item, visible: !item.visible }
              ),
            }
      )
    );
  };

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{ background: "#fbf8ff", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="px-8 py-10 flex flex-col gap-10 max-w-[1000px] w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.6px]">
          <button
            onClick={() => navigate("/support/knowledge-hub")}
            className="text-[#434656] hover:text-[#003ec7] transition-colors"
          >
            Admin
          </button>
          <svg width="3.7" height="6" viewBox="0 0 3.7 6" fill="none">
            <path d={svgPaths.p2dcc20c0} fill="#434656" />
          </svg>
          <span className="text-[#003ec7]">Enterprise FAQ Editor</span>
        </div>

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.8px] leading-[40px]">
              Enterprise FAQ Editor
            </h1>
            <p className="text-[16px] text-[#434656] leading-[24px]">
              Manage your global knowledge repository. Updates are reflected across all customer
              <br />
              touchpoints in real-time.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#003ec7] text-white rounded-xl shrink-0 hover:bg-[#0033a8] transition-colors"
            style={{ boxShadow: "0px 4px 6px -1px rgba(0,62,199,0.1), 0px 2px 4px -2px rgba(0,62,199,0.1)" }}
          >
            <PlusIconSvg />
            <span className="text-[12px] font-semibold tracking-[0.6px]">Add New Question</span>
          </button>
        </div>

        {/* FAQ Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((section, si) => (
            <div key={si} className="flex flex-col gap-6">
              {/* Category heading */}
              {section.category && (
                <div className="text-[11px] font-semibold text-[#737688] uppercase tracking-[1px]">
                  {section.category}
                </div>
              )}

              {/* White card */}
              <div
                className="bg-white rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(195,197,217,0.3)", boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}
              >
                {section.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex gap-6 items-start p-6"
                    style={
                      ii > 0
                        ? { borderTop: "1px solid rgba(195,197,217,0.2)" }
                        : undefined
                    }
                  >
                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col gap-2">
                      <h3 className="text-[20px] font-semibold text-[#191b25] tracking-[-0.2px] leading-[28px]">
                        {item.question}
                      </h3>
                      <p className="text-[14px] text-[#434656] leading-[20px]">
                        {item.answer}
                      </p>
                      <div className="flex items-center gap-1 pt-2">
                        <ClockIconSvg />
                        <span className="text-[12px] font-semibold text-[#434656] tracking-[0.6px]">
                          Last Edited: {item.lastEdited}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        className="p-2 rounded-lg hover:bg-[#ededfb] transition-colors"
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => toggleVisibility(si, ii)}
                        className="p-2 rounded-lg hover:bg-[#f0f0f8] transition-colors"
                        title={item.visible ? "Hide" : "Show"}
                      >
                        {item.visible ? <EyeIcon /> : <EyeHiddenIcon />}
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-[#fee2e2] transition-colors"
                        title="Delete"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <AddNewQuestionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
