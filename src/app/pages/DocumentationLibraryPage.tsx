import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  Pencil,
  Trash2,
  X,
  Bold,
  Italic,
  Link,
  Code,
  List,
  Image,
  FileText,
  ShieldCheck,
  Network,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

// ─── CREATE NEW ARTICLE MODAL ──────────────────────────────────────────────────

function CreateNewArticleModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[520px] mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-4">
          <div>
            <h2 className="text-[20px] font-semibold text-[#191b25]">Create New Article</h2>
            <p className="text-[13px] text-[#737688] mt-0.5">
              Populate the fields below to publish a new technical document.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#f0f0f8] transition-colors ml-4 mt-0.5"
          >
            <X size={18} className="text-[#737688]" strokeWidth={2} />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 pb-6 flex flex-col gap-5">
          {/* Article Title */}
          <div>
            <label className="block text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">
              Article Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Enterprise SSO Configuration Guide"
              className="w-full px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] placeholder:text-[#c3c5d9] focus:outline-none focus:border-[#003ec7] transition-colors"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-[rgba(195,197,217,0.5)] rounded-xl text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] transition-colors pr-10 cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="api">API</option>
                <option value="security">Security</option>
                <option value="architecture">Architecture</option>
                <option value="user-guides">User Guides</option>
                <option value="setup">Setup Guides</option>
                <option value="faqs">FAQs</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737688] pointer-events-none" />
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.5px] mb-2">
              Content Editor
            </label>
            <div className="border border-[rgba(195,197,217,0.5)] rounded-xl overflow-hidden focus-within:border-[#003ec7] transition-colors">
              {/* Toolbar */}
              <div className="flex items-center gap-1 px-3 py-2 border-b border-[rgba(195,197,217,0.3)] bg-[#f9f9fc]">
                {[
                  { icon: Bold, title: "Bold" },
                  { icon: Italic, title: "Italic" },
                  { icon: Link, title: "Link" },
                  { icon: Code, title: "Code" },
                  { icon: List, title: "List" },
                  { icon: Image, title: "Image" },
                ].map(({ icon: Icon, title }) => (
                  <button
                    key={title}
                    title={title}
                    className="p-1.5 rounded hover:bg-[#e8e9f0] transition-colors"
                  >
                    <Icon size={14} className="text-[#505f76]" strokeWidth={2} />
                  </button>
                ))}
              </div>
              {/* Textarea */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your documentation here... Use Markdown or the toolbar for formatting."
                rows={7}
                className="w-full px-4 py-3 text-[13px] text-[#191b25] placeholder:text-[#c3c5d9] resize-none focus:outline-none bg-white"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-7 py-5 border-t border-[rgba(195,197,217,0.25)]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-[13px] font-medium text-[#505f76] hover:text-[#191b25] transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#003ec7] text-white rounded-xl text-[13px] font-medium hover:bg-[#0033a8] transition-colors">
            <Plus size={14} strokeWidth={2.5} />
            Create Article
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CATEGORY BADGE ───────────────────────────────────────────────────────────

const categoryStyles: Record<string, { bg: string; color: string; icon: React.ElementType }> = {
  API: { bg: "#ededfb", color: "#003ec7", icon: FileText },
  SECURITY: { bg: "#fee2e2", color: "#dc2626", icon: ShieldCheck },
  ARCHITECTURE: { bg: "#e0f2fe", color: "#0369a1", icon: Network },
  "USER GUIDES": { bg: "#dcfce7", color: "#166534", icon: HelpCircle },
};

function CategoryBadge({ label }: { label: string }) {
  const style = categoryStyles[label] || { bg: "#f1f5f9", color: "#64748b", icon: FileText };
  return (
    <span
      className="text-[10px] font-bold px-2.5 py-1 rounded-md tracking-[0.3px]"
      style={{ background: style.bg, color: style.color }}
    >
      {label}
    </span>
  );
}

// ─── DOCUMENTATION LIBRARY PAGE ───────────────────────────────────────────────

const allArticles = [
  { id: 1, title: "REST API Integration Guide", category: "API", updated: "Oct 24, 2023", icon: FileText, iconColor: "#003ec7", iconBg: "#ededfb" },
  { id: 2, title: "Compliance & Security Protocols", category: "SECURITY", updated: "Nov 02, 2023", icon: ShieldCheck, iconColor: "#dc2626", iconBg: "#fee2e2" },
  { id: 3, title: "Distributed Systems Map", category: "ARCHITECTURE", updated: "Oct 12, 2023", icon: Network, iconColor: "#0369a1", iconBg: "#e0f2fe" },
  { id: 4, title: "End-User Troubleshooting v4", category: "USER GUIDES", updated: "Nov 15, 2023", icon: HelpCircle, iconColor: "#166534", iconBg: "#dcfce7" },
  { id: 5, title: "Multi-Tenant Onboarding Guide", category: "USER GUIDES", updated: "Oct 30, 2023", icon: CheckCircle2, iconColor: "#16a34a", iconBg: "#dcfce7" },
  { id: 6, title: "API Rate Limiting & Throttling", category: "API", updated: "Oct 28, 2023", icon: FileText, iconColor: "#003ec7", iconBg: "#ededfb" },
  { id: 7, title: "GDPR Data Compliance Handbook", category: "SECURITY", updated: "Oct 20, 2023", icon: ShieldCheck, iconColor: "#dc2626", iconBg: "#fee2e2" },
  { id: 8, title: "Edge Node Architecture v2", category: "ARCHITECTURE", updated: "Oct 16, 2023", icon: Network, iconColor: "#0369a1", iconBg: "#e0f2fe" },
  { id: 9, title: "Webhook Integration Patterns", category: "API", updated: "Oct 12, 2023", icon: FileText, iconColor: "#003ec7", iconBg: "#ededfb" },
  { id: 10, title: "Device Firmware Upgrade Manual", category: "USER GUIDES", updated: "Oct 10, 2023", icon: HelpCircle, iconColor: "#166534", iconBg: "#dcfce7" },
  { id: 11, title: "OAuth 2.0 SSO Configuration", category: "SECURITY", updated: "Oct 08, 2023", icon: ShieldCheck, iconColor: "#dc2626", iconBg: "#fee2e2" },
  { id: 12, title: "Microservices Communication Guide", category: "ARCHITECTURE", updated: "Oct 05, 2023", icon: Network, iconColor: "#0369a1", iconBg: "#e0f2fe" },
];

const ARTICLES_PER_PAGE = 4;
const TOTAL_ENTRIES = 1284;

export function DocumentationLibraryPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const articles = allArticles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f7f8fc]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="p-6 flex flex-col gap-6 max-w-4xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] text-[#737688]">
          <button
            onClick={() => navigate("/support/knowledge-hub")}
            className="hover:text-[#003ec7] transition-colors"
          >
            Admin
          </button>
          <ChevronRight size={13} className="text-[#c3c5d9]" />
          <span className="text-[#003ec7] font-medium">Documentation Library</span>
        </div>

        {/* Page header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[28px] font-semibold text-[#191b25]">Documentation Library</h1>
            <p className="text-[13px] text-[#737688] mt-1.5 max-w-xl leading-relaxed">
              Manage your enterprise knowledge base, update technical specifications, and oversee
              the architectural governance of the KnowledgeEngine platform.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-3 bg-[#003ec7] text-white rounded-xl text-[13px] font-medium hover:bg-[#0033a8] transition-colors shrink-0 ml-6"
          >
            <Plus size={16} strokeWidth={2.5} />
            Create New Article
          </button>
        </div>

        {/* Articles table */}
        <div className="bg-white rounded-2xl border border-[rgba(195,197,217,0.35)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(195,197,217,0.25)]" style={{ background: "#f3f2ff" }}>
                {["TITLE", "CATEGORY", "LAST UPDATED", "ACTIONS"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-left text-[11px] font-semibold text-[#737688] uppercase tracking-[0.5px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {articles.map((article, i) => (
                <tr
                  key={article.id}
                  className="border-b border-[rgba(195,197,217,0.15)] last:border-0 hover:bg-[#f9f9fc] transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: article.iconBg }}
                      >
                        <article.icon size={16} style={{ color: article.iconColor }} strokeWidth={1.8} />
                      </div>
                      <span className="text-[14px] font-semibold text-[#191b25]">{article.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <CategoryBadge label={article.category} />
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[13px] text-[#737688]">{article.updated}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-[#f0f0f8] transition-colors" title="View">
                        <Eye size={15} className="text-[#737688]" strokeWidth={1.8} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#f0f0f8] transition-colors" title="Edit">
                        <Pencil size={15} className="text-[#737688]" strokeWidth={1.8} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#fee2e2] transition-colors" title="Delete">
                        <Trash2 size={15} className="text-[#dc2626]" strokeWidth={1.8} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.2)]" style={{ background: "#f3f2ff" }}>
            <span className="text-[13px] text-[#737688]">
              Showing {(page - 1) * ARTICLES_PER_PAGE + 1}–{Math.min(page * ARTICLES_PER_PAGE, allArticles.length)} of {TOTAL_ENTRIES.toLocaleString()} entries
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={15} className="text-[#505f76]" />
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
                className="p-1.5 rounded-lg hover:bg-[#f0f0f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={15} className="text-[#505f76]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-[#191b25] text-white rounded-xl px-5 py-3.5 shadow-xl z-40">
          <CheckCircle2 size={18} className="text-[#16a34a]" strokeWidth={2} />
          <span className="text-[13px] font-medium">Document Library successfully synchronized</span>
          <button onClick={() => setShowToast(false)} className="ml-2 opacity-60 hover:opacity-100 transition-opacity">
            <X size={14} strokeWidth={2} />
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && <CreateNewArticleModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
