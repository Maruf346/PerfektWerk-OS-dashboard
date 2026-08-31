import { useState, type ReactNode } from "react";
import {
  Globe,
  Shield,
  Settings,
  Pencil,
  RotateCcw,
  Save,
  Plus,
  ChevronRight,
  ChevronLeft,
  Pencil as PencilIcon,
  MoreVertical,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

// ─── Shared segmented tab (same style as Platform / Analytics) ────────────────
function AdminSegmentedTabs({
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
      className="flex items-center p-[4px] rounded-[12px] shrink-0"
      style={{ background: "#e7e7f5" }}
    >
      {tabs.map((tab, i) => {
        const isActive = activeTab === i;
        const lines = tab.split(" ");
        return (
          <button
            key={tab}
            onClick={() => onChange(i)}
            className="flex flex-col items-center justify-center px-[22px] py-[6px] rounded-[8px] transition-colors"
            style={{
              background: isActive ? "#fff" : "transparent",
              boxShadow: isActive ? "0px 1px 1px rgba(0,0,0,0.05)" : "none",
              color: isActive ? "#003ec7" : "#505f76",
            }}
          >
            {lines.map((line, j) => (
              <span key={j} className="text-[12px] font-semibold tracking-[0.6px] leading-[16px] whitespace-nowrap">
                {line}
              </span>
            ))}
          </button>
        );
      })}
    </div>
  );
}

// ─── Field display (read-only) ────────────────────────────────────────────────
function ReadOnlyField({ value, placeholder = "—" }: { value: string; placeholder?: string }) {
  return (
    <div className="w-full border border-[rgba(195,197,217,0.5)] rounded-lg px-4 py-[10px] text-[14px] text-[#191b25] bg-[#fafafa] min-h-[42px]">
      {value || <span className="text-[#a0a3b1]">{placeholder}</span>}
    </div>
  );
}

function ReadOnlyTextarea({ value }: { value: string }) {
  return (
    <div className="w-full border border-[rgba(195,197,217,0.5)] rounded-lg px-4 py-[10px] text-[14px] text-[#191b25] bg-[#fafafa] min-h-[80px] whitespace-pre-wrap">
      {value}
    </div>
  );
}

function ReadOnlySelect({ value }: { value: string }) {
  return (
    <div className="w-full border border-[rgba(195,197,217,0.5)] rounded-lg px-4 py-[10px] pr-10 text-[14px] text-[#191b25] bg-[#fafafa] relative">
      <span>{value}</span>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a3b1]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

// ─── Shared input styles ──────────────────────────────────────────────────────
const inputClass =
  "w-full border border-[rgba(195,197,217,0.5)] rounded-lg px-4 py-[10px] text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/10 transition-all placeholder-[#a0a3b1]";

const selectClass =
  "w-full border border-[rgba(195,197,217,0.5)] rounded-lg px-4 py-[10px] text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] appearance-none cursor-pointer";

// ─── Section card ─────────────────────────────────────────────────────────────
function SectionCard({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.35)] shadow-[0px_1px_3px_rgba(0,0,0,0.06)] p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="size-11 rounded-xl flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-[22px] font-semibold text-[#191b25] tracking-[-0.22px]">{title}</div>
          <div className="text-[13px] text-[#737688] mt-0.5">{description}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function FormLabel({ children }: { children: ReactNode }) {
  return (
    <label className="text-[13px] font-medium text-[#505f76] mb-1.5 block">{children}</label>
  );
}

// ─── System Settings default values ──────────────────────────────────────────
const defaults = {
  systemName: "PerfektWerk OS Enterprise",
  globalDomain: "os.perfektwerk.com",
  description:
    "Core infrastructure management and automated project oversight for multi-site construction operations.",
  adminEmail: "ops@perfektwerk.com",
  supportUrl: "https://support.perfektwerk.com",
  language: "English (United States)",
  timezone: "(UTC+01:00) Central European Time",
  currency: "EUR (€) - Euro",
  passwordComplexity: "Strict (12+ chars, Special, Case)",
  mfaEnforcement: "Required for all users",
  sessionTimeout: "30",
  ipWhitelist: "192.168.1.1, 10.0.0.1...",
};

// ─── System Settings page ─────────────────────────────────────────────────────
function SystemSettingsPage() {
  const [editing, setEditing] = useState(false);

  // Live values (what's shown in edit mode)
  const [systemName, setSystemName] = useState(defaults.systemName);
  const [globalDomain, setGlobalDomain] = useState(defaults.globalDomain);
  const [description, setDescription] = useState(defaults.description);
  const [adminEmail, setAdminEmail] = useState(defaults.adminEmail);
  const [supportUrl, setSupportUrl] = useState(defaults.supportUrl);
  const [language, setLanguage] = useState(defaults.language);
  const [timezone, setTimezone] = useState(defaults.timezone);
  const [currency, setCurrency] = useState(defaults.currency);
  const [passwordComplexity, setPasswordComplexity] = useState(defaults.passwordComplexity);
  const [mfaEnforcement, setMfaEnforcement] = useState(defaults.mfaEnforcement);
  const [sessionTimeout, setSessionTimeout] = useState(defaults.sessionTimeout);
  const [ipWhitelist, setIpWhitelist] = useState(defaults.ipWhitelist);

  // Snapshot when entering edit mode (for reset)
  const [snapshot, setSnapshot] = useState({ ...defaults });

  function handleEdit() {
    setSnapshot({
      systemName, globalDomain, description, adminEmail, supportUrl,
      language, timezone, currency, passwordComplexity, mfaEnforcement,
      sessionTimeout, ipWhitelist,
    });
    setEditing(true);
  }

  function handleReset() {
    setSystemName(snapshot.systemName);
    setGlobalDomain(snapshot.globalDomain);
    setDescription(snapshot.description);
    setAdminEmail(snapshot.adminEmail);
    setSupportUrl(snapshot.supportUrl);
    setLanguage(snapshot.language);
    setTimezone(snapshot.timezone);
    setCurrency(snapshot.currency);
    setPasswordComplexity(snapshot.passwordComplexity);
    setMfaEnforcement(snapshot.mfaEnforcement);
    setSessionTimeout(snapshot.sessionTimeout);
    setIpWhitelist(snapshot.ipWhitelist);
    setEditing(false);
  }

  function handleSave() {
    setEditing(false);
    toast.success("Changes saved successfully", {
      description: "Global configuration has been updated.",
      duration: 3000,
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Action bar */}
      <div className="flex items-center justify-end">
        {editing ? (
          <div className="flex items-center gap-3">
            {/* Reset Changes */}
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-5 py-[9px] rounded-[8px] text-[13px] font-semibold text-[#434656] bg-white border border-[rgba(195,197,217,0.6)] hover:bg-[#f7f8fc] shadow-[0px_1px_1px_rgba(0,0,0,0.04)] transition-colors"
            >
              <RotateCcw size={14} strokeWidth={2} />
              Reset Changes
            </button>
            {/* Save Changes */}
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 px-5 py-[9px] rounded-[8px] text-[13px] font-semibold text-white bg-[#003ec7] hover:bg-[#0033a8] shadow-[0px_1px_1px_rgba(0,0,0,0.08)] transition-colors"
            >
              <Save size={14} strokeWidth={2} />
              Save Changes
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-[9px] rounded-[8px] text-[13px] font-medium text-[#434656] bg-white border border-[rgba(195,197,217,0.6)] hover:bg-[#f7f8fc] shadow-[0px_1px_1px_rgba(0,0,0,0.04)] transition-colors"
          >
            <Pencil size={14} strokeWidth={1.8} />
            Edit Settings
          </button>
        )}
      </div>

      {/* General Settings */}
      <SectionCard
        icon={
          <div className="size-11 bg-[#ededfb] rounded-xl flex items-center justify-center">
            <Settings size={22} className="text-[#003ec7]" strokeWidth={1.8} />
          </div>
        }
        title="General Settings"
        description="Basic platform identifiers and branding."
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          <div>
            <FormLabel>System Name</FormLabel>
            {editing ? (
              <input type="text" value={systemName} onChange={(e) => setSystemName(e.target.value)} className={inputClass} />
            ) : (
              <ReadOnlyField value={systemName} />
            )}
          </div>
          <div>
            <FormLabel>Global Domain</FormLabel>
            {editing ? (
              <input type="text" value={globalDomain} onChange={(e) => setGlobalDomain(e.target.value)} className={inputClass} />
            ) : (
              <ReadOnlyField value={globalDomain} />
            )}
          </div>
          <div className="col-span-2">
            <FormLabel>Platform Description</FormLabel>
            {editing ? (
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className={`${inputClass} resize-none`} />
            ) : (
              <ReadOnlyTextarea value={description} />
            )}
          </div>
          <div>
            <FormLabel>Admin Contact Email</FormLabel>
            {editing ? (
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className={inputClass} />
            ) : (
              <ReadOnlyField value={adminEmail} />
            )}
          </div>
          <div>
            <FormLabel>Support URL</FormLabel>
            {editing ? (
              <input type="text" value={supportUrl} onChange={(e) => setSupportUrl(e.target.value)} className={inputClass} />
            ) : (
              <ReadOnlyField value={supportUrl} />
            )}
          </div>
        </div>
      </SectionCard>

      {/* Regional Settings */}
      <SectionCard
        icon={
          <div className="size-11 bg-[#fee2e2] rounded-xl flex items-center justify-center">
            <Globe size={22} className="text-[#dc2626]" strokeWidth={1.8} />
          </div>
        }
        title="Regional Settings"
        description="Localization and regional formatting."
      >
        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          <div>
            <FormLabel>Primary Language</FormLabel>
            {editing ? (
              <div className="relative">
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className={selectClass}>
                  <option>English (United States)</option>
                  <option>Deutsch (Germany)</option>
                  <option>Français (France)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <ReadOnlySelect value={language} />
            )}
          </div>
          <div>
            <FormLabel>System Timezone</FormLabel>
            {editing ? (
              <div className="relative">
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className={selectClass}>
                  <option>(UTC+01:00) Central European Time</option>
                  <option>UTC</option>
                  <option>(UTC-05:00) Eastern Standard Time</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <ReadOnlySelect value={timezone} />
            )}
          </div>
          <div>
            <FormLabel>Currency Format</FormLabel>
            {editing ? (
              <div className="relative">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={selectClass}>
                  <option>EUR (€) - Euro</option>
                  <option>USD ($) - US Dollar</option>
                  <option>GBP (£) - British Pound</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <ReadOnlySelect value={currency} />
            )}
          </div>
        </div>
      </SectionCard>

      {/* Security Settings */}
      <SectionCard
        icon={
          <div className="size-11 bg-[#fee2e2] rounded-xl flex items-center justify-center">
            <Shield size={22} className="text-[#dc2626]" strokeWidth={1.8} />
          </div>
        }
        title="Security Settings"
        description="Authentication and encryption policies."
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          <div>
            <FormLabel>Password Complexity</FormLabel>
            {editing ? (
              <div className="relative">
                <select value={passwordComplexity} onChange={(e) => setPasswordComplexity(e.target.value)} className={selectClass}>
                  <option>Strict (12+ chars, Special, Case)</option>
                  <option>Moderate (8+ chars, Alphanumeric)</option>
                  <option>Basic (6+ chars)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <ReadOnlySelect value={passwordComplexity} />
            )}
          </div>
          <div>
            <FormLabel>MFA Enforcement</FormLabel>
            {editing ? (
              <div className="relative">
                <select value={mfaEnforcement} onChange={(e) => setMfaEnforcement(e.target.value)} className={selectClass}>
                  <option>Required for all users</option>
                  <option>Admins only</option>
                  <option>Optional</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ) : (
              <ReadOnlySelect value={mfaEnforcement} />
            )}
          </div>
          <div>
            <FormLabel>Session Timeout (Minutes)</FormLabel>
            {editing ? (
              <input type="number" value={sessionTimeout} onChange={(e) => setSessionTimeout(e.target.value)} className={inputClass} />
            ) : (
              <ReadOnlyField value={sessionTimeout} />
            )}
          </div>
          <div>
            <FormLabel>IP Whitelisting</FormLabel>
            {editing ? (
              <input type="text" value={ipWhitelist} onChange={(e) => setIpWhitelist(e.target.value)} placeholder="192.168.1.1, 10.0.0.1..." className={inputClass} />
            ) : (
              <ReadOnlyField value={ipWhitelist} placeholder="192.168.1.1, 10.0.0.1..." />
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

// ─── Create User modal ────────────────────────────────────────────────────────
function CreateUserModal({ onClose }: { onClose: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setIsActive] = useState(true);

  function handleCreate() {
    onClose();
    toast.success("User created successfully", {
      description: `${fullName || "New user"} has been added to the system.`,
      duration: 3000,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-[0px_24px_64px_rgba(0,0,0,0.15)] w-[560px] mx-4 z-10">
        <div className="flex items-start justify-between p-6 pb-5">
          <div>
            <h2 className="text-[20px] font-semibold text-[#191b25] tracking-[-0.2px]">
              Create New Staff Account
            </h2>
            <p className="text-[13px] text-[#505f76] mt-1 max-w-[420px]">
              Configure administrative access and personal information for a new internal member.
            </p>
          </div>
          <button onClick={onClose} className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f3f2ff] transition-colors text-[#737688] hover:text-[#191b25] shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="px-6 pb-6 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="#003ec7" strokeWidth="1.8" />
              </svg>
              <span className="text-[14px] font-semibold text-[#191b25]">Personal Information</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">FULL NAME</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Alexander Pierce" className="border border-[rgba(195,197,217,0.6)] rounded-lg px-4 py-2.5 text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/10 transition-all placeholder-[#a0a3b1]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">EMAIL ADDRESS (WORK)</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.pierce@perfektwerk.com" className="border border-[rgba(195,197,217,0.6)] rounded-lg px-4 py-2.5 text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/10 transition-all placeholder-[#a0a3b1]" />
              </div>
            </div>
          </div>
          <div className="h-px bg-[rgba(195,197,217,0.4)]" />
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#003ec7" strokeWidth="1.8" />
                <path d="M12 8v4l3 3" stroke="#003ec7" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="text-[14px] font-semibold text-[#191b25]">Account Configuration</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">ACCESS ROLE</label>
                <div className="relative">
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-[rgba(195,197,217,0.6)] rounded-lg px-4 py-2.5 text-[14px] bg-white focus:outline-none focus:border-[#003ec7] appearance-none cursor-pointer" style={{ color: role ? "#191b25" : "#a0a3b1" }}>
                    <option value="" disabled>Assign a permission tier...</option>
                    <option value="super-admin">Super Admin</option>
                    <option value="system-engineer">System Engineer</option>
                    <option value="support-analyst">Support Analyst</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#737688]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#505f76] uppercase tracking-[0.6px]">INITIAL PASSWORD</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password..." className="w-full border border-[rgba(195,197,217,0.6)] rounded-lg px-4 py-2.5 pr-11 text-[14px] text-[#191b25] bg-white focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/10 transition-all placeholder-[#a0a3b1]" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737688] hover:text-[#191b25] transition-colors">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="11" rx="2.5" stroke="#737688" />
                    <path d="M4 6h8M8 3v6" stroke="#737688" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <div className="text-[14px] font-semibold text-[#191b25]">Account Status</div>
                    <div className="text-[12px] text-[#737688]">Determine if the account should be activated immediately.</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[13px] font-medium text-[#737688]">Inactive</span>
                  <button type="button" onClick={() => setIsActive(!isActive)} className="relative w-11 h-6 rounded-full transition-colors" style={{ background: isActive ? "#003ec7" : "#c3c5d9" }}>
                    <div className="absolute top-0.5 size-5 bg-white rounded-full shadow transition-transform duration-200" style={{ transform: isActive ? "translateX(22px)" : "translateX(2px)" }} />
                  </button>
                  <span className="text-[13px] font-medium" style={{ color: isActive ? "#003ec7" : "#737688" }}>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[rgba(195,197,217,0.4)]">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg border border-[rgba(195,197,217,0.5)] text-[14px] font-medium text-[#505f76] hover:bg-[#f7f8fc] transition-colors">Cancel</button>
          <button onClick={handleCreate} className="px-5 py-2.5 bg-[#003ec7] text-white rounded-lg text-[14px] font-medium hover:bg-[#0033a8] transition-colors">Create User</button>
        </div>
      </div>
    </div>
  );
}

// ─── System Users page ────────────────────────────────────────────────────────
const allUsers = [
  { initials: "HK", color: "#003ec7", bg: "rgba(0,62,199,0.12)", name: "Hans Kerner", email: "h.kerner@perfektwerk.io", role: "Super Admin", dept: "Infrastructure", lastActivity: "2 mins ago", created: "Jan 12, 2024", highlight: false },
  { initials: "EM", color: "#6366f1", bg: "rgba(99,102,241,0.12)", name: "Elena Meyer", email: "e.meyer@perfektwerk.io", role: "System Engineer", dept: "Platform", lastActivity: "Never", created: "Mar 05, 2024", highlight: false },
  { initials: "SB", color: "#dc2626", bg: "rgba(220,38,38,0.12)", name: "Stefan Bauer", email: "s.bauer@perfektwerk.io", role: "Support Analyst", dept: "Support", lastActivity: "18 hours ago", created: "Oct 21, 2023", highlight: true },
  { initials: "LR", color: "#737688", bg: "rgba(115,118,136,0.12)", name: "Lukas Richter", email: "l.richter@perfektwerk.io", role: "Support Analyst", dept: "Support", lastActivity: "6 months ago", created: "May 14, 2022", highlight: false },
  { initials: "AW", color: "#16a34a", bg: "rgba(22,163,74,0.12)", name: "Anna Weber", email: "a.weber@perfektwerk.io", role: "DevOps Engineer", dept: "Infrastructure", lastActivity: "3 hours ago", created: "Aug 08, 2023", highlight: false },
  { initials: "FK", color: "#9333ea", bg: "rgba(147,51,234,0.12)", name: "Felix Klink", email: "f.klink@perfektwerk.io", role: "Data Analyst", dept: "Analytics", lastActivity: "Yesterday", created: "Feb 28, 2024", highlight: false },
  { initials: "MS", color: "#003ec7", bg: "rgba(0,62,199,0.12)", name: "Marcus Sterling", email: "m.sterling@perfektwerk.io", role: "Global Admin", dept: "Executive", lastActivity: "Just now", created: "Jan 01, 2022", highlight: false },
  { initials: "IR", color: "#0891b2", bg: "rgba(8,145,178,0.12)", name: "Ingrid Roth", email: "i.roth@perfektwerk.io", role: "System Engineer", dept: "Platform", lastActivity: "4 hours ago", created: "Sep 15, 2023", highlight: false },
  { initials: "PV", color: "#b45309", bg: "rgba(180,83,9,0.12)", name: "Peter Vogel", email: "p.vogel@perfektwerk.io", role: "Security Analyst", dept: "Compliance", lastActivity: "2 days ago", created: "Nov 20, 2022", highlight: false },
  { initials: "TS", color: "#be185d", bg: "rgba(190,24,93,0.12)", name: "Tanja Schulz", email: "t.schulz@perfektwerk.io", role: "Support Analyst", dept: "Support", lastActivity: "5 hours ago", created: "Jul 10, 2023", highlight: false },
  { initials: "JB", color: "#737688", bg: "rgba(115,118,136,0.12)", name: "Jonas Braun", email: "j.braun@perfektwerk.io", role: "System Engineer", dept: "Infrastructure", lastActivity: "1 week ago", created: "Apr 04, 2023", highlight: false },
];

const USERS_PER_PAGE = 4;

function SystemUsersPage({ onCreateUser }: { onCreateUser: () => void }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allUsers.length / USERS_PER_PAGE);
  const users = allUsers.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[12px] font-medium text-[#737688] tracking-[0.6px]">Administration</span>
            <ChevronRight size={12} className="text-[#737688]" />
            <span className="text-[12px] font-bold text-[#003ec7] tracking-[0.6px]">System Users</span>
          </div>
          <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">System Users</h1>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(195,197,217,0.5)] rounded-lg text-[13px] font-medium text-[#434656] hover:bg-[#f7f8fc] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors bg-white">
            <Lock size={13} strokeWidth={2} />
            Go to Access Management
          </button>
          <button onClick={onCreateUser} className="flex items-center gap-2 px-4 py-2.5 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors">
            <Plus size={13} strokeWidth={2.5} />
            Create User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(195,197,217,0.4)]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#737688] tracking-[0.8px] uppercase">INTERNAL DIRECTORY</span>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-[#16a34a]" />
              <span className="text-[12px] text-[#505f76]">Real-time status tracking enabled</span>
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(195,197,217,0.3)]">
              {[
                { label: "FULL NAME", w: "w-[28%]" },
                { label: "ROLE / DEPT", w: "w-[18%]" },
                { label: "STATUS", w: "w-[12%]" },
                { label: "LAST ACTIVITY", w: "w-[16%]" },
                { label: "CREATED", w: "w-[14%]" },
                { label: "ACTIONS", w: "w-[12%] text-right" },
              ].map((col) => (
                <th key={col.label} className={`px-6 py-3 text-left text-[11px] font-bold text-[#737688] uppercase tracking-[0.8px] ${col.w}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b border-[rgba(195,197,217,0.2)] transition-colors" style={{ background: user.highlight ? "rgba(220,38,38,0.03)" : "transparent" }}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0" style={{ background: user.bg, color: user.color }}>{user.initials}</div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#191b25]">{user.name}</div>
                      <div className="text-[12px] text-[#737688]">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-[14px] font-bold text-[#191b25]">{user.role}</div>
                  <div className="text-[13px] text-[#505f76]">{user.dept}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#dcfce7] text-[#166534] tracking-[0.4px]">ACTIVE</span>
                </td>
                <td className="px-6 py-4 text-[13px] text-[#505f76]">{user.lastActivity}</td>
                <td className="px-6 py-4 text-[13px] text-[#505f76]">{user.created}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f3f2ff] transition-colors text-[#737688]"><PencilIcon size={14} strokeWidth={1.8} /></button>
                    <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f3f2ff] transition-colors text-[#737688]"><MoreVertical size={14} strokeWidth={1.8} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-[13px] text-[#505f76]">
            Showing {(page - 1) * USERS_PER_PAGE + 1}–{Math.min(page * USERS_PER_PAGE, allUsers.length)} of {allUsers.length} system users
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors">
              <ChevronLeft size={13} className="text-[#505f76]" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)} className="size-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors" style={{ background: page === p ? "#003ec7" : "transparent", color: page === p ? "#fff" : "#505f76" }}>{p}</button>
            ))}
            <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="size-8 flex items-center justify-center rounded-lg border border-[rgba(195,197,217,0.5)] disabled:opacity-40 hover:bg-[#f3f2ff] transition-colors">
              <ChevronRight size={13} className="text-[#505f76]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Administration page ─────────────────────────────────────────────────
export function AdministrationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Page header */}
      <div className="flex items-start justify-between gap-6">
        <div className="shrink-0">
          <h1 className="text-[32px] font-semibold text-[#191b25] tracking-[-0.32px]">
            Global Configuration
          </h1>
          <p className="text-[14px] text-[#505f76] mt-1 max-w-[400px]">
            Manage the core architecture, security, and regional parameters of the platform.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 mt-1">
          <AdminSegmentedTabs
            tabs={["System Settings", "System Users"]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {/* Page content */}
      {activeTab === 0 ? (
        <SystemSettingsPage />
      ) : (
        <SystemUsersPage onCreateUser={() => setShowCreateModal(true)} />
      )}

      {showCreateModal && <CreateUserModal onClose={() => setShowCreateModal(false)} />}
    </div>
  );
}
