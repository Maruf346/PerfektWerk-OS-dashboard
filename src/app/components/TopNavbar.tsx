import { useState } from "react";
import { Bell, Globe, ChevronDown, Check } from "lucide-react";
import { useNavigate } from "react-router";

const languages = [
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
];

export function TopNavbar() {
  const [language, setLanguage] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="shrink-0 h-[60px] bg-white border-b border-[rgba(195,197,217,0.4)] flex items-center justify-end px-6 gap-4 relative z-10">
      {/* Notification Bell */}
      <button className="relative p-2 text-[#505f76] hover:text-[#003ec7] hover:bg-[#ededfb] rounded-lg transition-colors">
        <Bell size={18} strokeWidth={1.8} />
        <span className="absolute top-1.5 right-1.5 size-2 bg-[#003ec7] rounded-full" />
      </button>

      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={() => { setLangOpen(!langOpen); setUserOpen(false); }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[#434656] hover:bg-[#f0f0f8] rounded-lg transition-colors"
        >
          <Globe size={16} strokeWidth={1.8} className="text-[#505f76]" />
          <span
            className="text-[13px] font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {language}
          </span>
          <ChevronDown size={13} className="text-[#737688]" />
        </button>
        {langOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setLangOpen(false)}
            />
            <div className="absolute right-0 top-full mt-1 w-[140px] bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-lg z-20 py-1 overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2 text-[13px] text-[#434656] hover:bg-[#f0f0f8] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{lang.label}</span>
                  {language === lang.code && (
                    <Check size={13} className="text-[#003ec7]" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* User Avatar */}
      <div className="relative">
        <button
          onClick={() => { setUserOpen(!userOpen); setLangOpen(false); }}
          className="flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-[#f0f0f8] transition-colors"
        >
          <span
            className="text-[13px] font-medium text-[#191b25]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Marcus Sterling
          </span>
          <div className="size-8 rounded-full bg-[#003ec7] flex items-center justify-center text-white text-xs font-bold">
            MS
          </div>
        </button>
        {userOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setUserOpen(false)}
            />
            <div className="absolute right-0 top-full mt-1 w-[160px] bg-white rounded-xl border border-[rgba(195,197,217,0.4)] shadow-lg z-20 py-1 overflow-hidden">
              <div className="px-3 py-2 border-b border-[rgba(195,197,217,0.3)]">
                <div className="text-[12px] font-semibold text-[#191b25]" style={{ fontFamily: "'Inter', sans-serif" }}>Marcus Sterling</div>
                <div className="text-[11px] text-[#737688]" style={{ fontFamily: "'Inter', sans-serif" }}>Global Admin</div>
              </div>
              <button
                onClick={() => { setUserOpen(false); localStorage.removeItem("pw_logged_in"); navigate("/login"); }}
                className="w-full text-left px-3 py-2 text-[13px] text-[#952200] hover:bg-[#fff5f5] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
