import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Megaphone, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { CreateTaskModal } from "../components/CreateTaskModal";

const priorityConfig: Record<string, { bg: string; color: string; dot: string }> = {
  CRITICAL: { bg: "#fee2e2", color: "#dc2626", dot: "#dc2626" },
  HIGH: { bg: "#fff7ed", color: "#c2410c", dot: "#f59e0b" },
  MEDIUM: { bg: "#ededfb", color: "#003ec7", dot: "#003ec7" },
  LOW: { bg: "#f0fdf4", color: "#166534", dot: "#16a34a" },
};

const statusConfig: Record<string, { bg: string; color: string; icon: string }> = {
  "In Progress": { bg: "#ededfb", color: "#003ec7", icon: "⟳" },
  Open: { bg: "#f1f5f9", color: "#505f76", icon: "○" },
  Completed: { bg: "#dcfce7", color: "#166534", icon: "✓" },
};

const allTasks = [
  {
    title: "Update Node.js clusters to v20.x",
    category: "Platform Infrastructure",
    ref: "Infra-902",
    assignee: "Markus Weber",
    assigneeInitials: "MW",
    assigneeColor: "#003ec7",
    priority: "CRITICAL",
    dueDate: "Oct 24, 2023",
    status: "In Progress",
  },
  {
    title: "Audit security logs for Q3",
    category: "Compliance & Security",
    ref: "Sec-112",
    assignee: "Elena Rossi",
    assigneeInitials: "ER",
    assigneeColor: "#9333ea",
    priority: "HIGH",
    dueDate: "Oct 28, 2023",
    status: "Open",
  },
  {
    title: "Refresh API documentation",
    category: "Developer Experience",
    ref: "DX-44",
    assignee: "Lucas Meyer",
    assigneeInitials: "LM",
    assigneeColor: "#16a34a",
    priority: "MEDIUM",
    dueDate: "Nov 02, 2023",
    status: "Completed",
  },
  {
    title: "Migrate database shards to new cluster",
    category: "Database Operations",
    ref: "DB-221",
    assignee: "Anna Bergmann",
    assigneeInitials: "AB",
    assigneeColor: "#dc2626",
    priority: "CRITICAL",
    dueDate: "Oct 26, 2023",
    status: "In Progress",
  },
  {
    title: "Configure SAML SSO for enterprise clients",
    category: "Identity & Access",
    ref: "IAM-88",
    assignee: "Markus Weber",
    assigneeInitials: "MW",
    assigneeColor: "#003ec7",
    priority: "HIGH",
    dueDate: "Nov 05, 2023",
    status: "Open",
  },
  {
    title: "Review firewall rules for EU region",
    category: "Network Security",
    ref: "Sec-119",
    assignee: "Elena Rossi",
    assigneeInitials: "ER",
    assigneeColor: "#9333ea",
    priority: "HIGH",
    dueDate: "Oct 30, 2023",
    status: "Open",
  },
  {
    title: "Deploy monitoring dashboards v3.2",
    category: "Observability",
    ref: "OBS-37",
    assignee: "Lucas Meyer",
    assigneeInitials: "LM",
    assigneeColor: "#16a34a",
    priority: "MEDIUM",
    dueDate: "Nov 08, 2023",
    status: "In Progress",
  },
  {
    title: "Optimize CI/CD pipeline build times",
    category: "Developer Experience",
    ref: "DX-51",
    assignee: "Anna Bergmann",
    assigneeInitials: "AB",
    assigneeColor: "#dc2626",
    priority: "LOW",
    dueDate: "Nov 15, 2023",
    status: "Open",
  },
  {
    title: "Conduct penetration testing on API gateway",
    category: "Compliance & Security",
    ref: "Sec-123",
    assignee: "Markus Weber",
    assigneeInitials: "MW",
    assigneeColor: "#003ec7",
    priority: "CRITICAL",
    dueDate: "Nov 01, 2023",
    status: "Open",
  },
];

const TASKS_PER_PAGE = 3;
const TOTAL_TASKS = allTasks.length;

export function OperationsPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const totalPages = Math.ceil(TOTAL_TASKS / TASKS_PER_PAGE);
  const tasks = allTasks.slice((page - 1) * TASKS_PER_PAGE, page * TASKS_PER_PAGE);

  return (
    <>
      <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
              Work Operations
            </h1>
            <p className="text-[14px] text-[#434656] mt-1 max-w-lg">
              Manage and track internal high-priority infrastructure and platform tasks.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/operations/announcements")}
              className="flex items-center gap-2 px-4 py-2 border border-[rgba(195,197,217,0.5)] rounded-lg text-[13px] font-medium text-[#191b25] hover:bg-[#f7f8fc] transition-colors"
            >
              <Megaphone size={14} />
              Go to Announcement
            </button>
            <button
              onClick={() => setShowCreateTask(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] transition-colors"
            >
              <Plus size={14} />
              Create Task
            </button>
          </div>
        </div>

        {/* Task Queue */}
        <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.3)] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-6 py-5 border-b border-[rgba(195,197,217,0.3)]">
            <h2 className="text-[18px] font-semibold text-[#191b25]">Active Task Queue</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f7f8fc]">
                  {["TASK DESCRIPTION", "ASSIGNED TO", "PRIORITY", "DUE DATE", "STATUS", "ACTIONS"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-[11px] font-semibold text-[#505f76] uppercase tracking-[0.6px]"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, i) => {
                  const priority = priorityConfig[task.priority] || priorityConfig.MEDIUM;
                  const status = statusConfig[task.status] || statusConfig.Open;
                  return (
                    <tr
                      key={i}
                      className="border-t border-[rgba(195,197,217,0.2)] hover:bg-[#f9f9fc] transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="text-[14px] font-semibold text-[#191b25]">{task.title}</div>
                        <div className="text-[12px] text-[#737688] mt-0.5">
                          {task.category} • {task.ref}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="size-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                            style={{ background: task.assigneeColor }}
                          >
                            {task.assigneeInitials}
                          </div>
                          <span className="text-[13px] text-[#191b25] font-medium">
                            {task.assignee}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-1.5">
                          <div
                            className="size-2 rounded-full shrink-0"
                            style={{ background: priority.dot }}
                          />
                          <span
                            className="px-2 py-0.5 rounded-full text-[11px] font-bold"
                            style={{ background: priority.bg, color: priority.color }}
                          >
                            {task.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[13px] text-[#434656]">{task.dueDate}</td>
                      <td className="px-6 py-5">
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full w-fit text-[12px] font-medium"
                          style={{ background: status.bg, color: status.color }}
                        >
                          <span>{status.icon}</span>
                          <span>{task.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <button className="p-1.5 hover:bg-[#f0f0f8] rounded-lg transition-colors">
                          <MoreVertical size={16} className="text-[#737688]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(195,197,217,0.3)]">
            <span className="text-[13px] text-[#505f76]">
              Showing {(page - 1) * TASKS_PER_PAGE + 1}-{Math.min(page * TASKS_PER_PAGE, TOTAL_TASKS)} of {TOTAL_TASKS} tasks
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
                    page === p
                      ? "bg-[#003ec7] text-white"
                      : "text-[#505f76] hover:bg-[#f0f0f8]"
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

      {/* Create Task Modal */}
      {showCreateTask && (
        <CreateTaskModal onClose={() => setShowCreateTask(false)} />
      )}
    </>
  );
}
