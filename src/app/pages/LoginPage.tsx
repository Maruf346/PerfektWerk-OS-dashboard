import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../../imports/SuperAdminLogin/645391541c530d989d9ffe11f876965aa5d2f9e1.png";

const PW_LOGO_PATH =
  "M0.25 18L0 15.8L2.85 7.95C3.1 8.18333 3.37083 8.37917 3.6625 8.5375C3.95417 8.69583 4.26667 8.81667 4.6 8.9L1.85 16.45L0.25 18V18M10.75 18L9.15 16.45L6.4 8.9C6.73333 8.81667 7.04583 8.69583 7.3375 8.5375C7.62917 8.37917 7.9 8.18333 8.15 7.95L11 15.8L10.75 18V18M5.5 8C4.66667 8 3.95833 7.70833 3.375 7.125C2.79167 6.54167 2.5 5.83333 2.5 5C2.5 4.35 2.6875 3.77083 3.0625 3.2625C3.4375 2.75417 3.91667 2.4 4.5 2.2V0H6.5V2.2C7.08333 2.4 7.5625 2.75417 7.9375 3.2625C8.3125 3.77083 8.5 4.35 8.5 5C8.5 5.83333 8.20833 6.54167 7.625 7.125C7.04167 7.70833 6.33333 8 5.5 8V8M5.5 6C5.78333 6 6.02083 5.90417 6.2125 5.7125C6.40417 5.52083 6.5 5.28333 6.5 5C6.5 4.71667 6.40417 4.47917 6.2125 4.2875C6.02083 4.09583 5.78333 4 5.5 4C5.21667 4 4.97917 4.09583 4.7875 4.2875C4.59583 4.47917 4.5 4.71667 4.5 5C4.5 5.28333 4.59583 5.52083 4.7875 5.7125C4.97917 5.90417 5.21667 6 5.5 6V6";

const EMAIL_ICON_PATH =
  "M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2V16M10 9L2 4V14V14V14H18V14V14V4L10 9V9M10 7L18 2H2L10 7V7M2 4V2V2V4V14V14V14V14V14V14V4V4";

const LOCK_ICON_PATH =
  "M2 21C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V19C16 19.55 15.8042 20.0208 15.4125 20.4125C15.0208 20.8042 14.55 21 14 21H2V21M2 19H14V19V19V9V9V9H2V9V9V19V19V19V19M8 16C8.55 16 9.02083 15.8042 9.4125 15.4125C9.80417 15.0208 10 14.55 10 14C10 13.45 9.80417 12.9792 9.4125 12.5875C9.02083 12.1958 8.55 12 8 12C7.45 12 6.97917 12.1958 6.5875 12.5875C6.19583 12.9792 6 13.45 6 14C6 14.55 6.19583 15.0208 6.5875 15.4125C6.97917 15.8042 7.45 16 8 16V16M5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7V7M2 19V19V19V9V9V9V9V9V9V19V19V19V19V19";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@perfektwerk.de");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("pw_logged_in", "true");
    navigate("/");
  };

  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left Panel – Form */}
      <div className="flex flex-col w-full max-w-[533px] shrink-0 bg-white px-8 py-8 justify-between z-10 shadow-lg">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="size-10 bg-[#003ec7] rounded-lg flex items-center justify-center shadow-sm">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
              <path d={PW_LOGO_PATH} fill="white" />
            </svg>
          </div>
          <span
            className="text-[#003ec7] font-black text-[20px] tracking-[-0.5px]"
          >
            PerfektWerk OS
          </span>
        </div>

        {/* Form Content */}
        <div className="max-w-[448px] w-full mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] font-semibold text-[#191b25] tracking-[-0.24px] leading-[32px]">
              Super Admin Login
            </h1>
            <p className="text-[14px] text-[#434656] leading-[20px]">
              Access the centralized construction management hub.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#505f76] tracking-[0.6px] uppercase">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@perfektwerk.de"
                  className="w-full bg-[#fbf8ff] border border-[#c3c5d9] rounded-xl pl-12 pr-4 py-[14px] text-[14px] text-[#191b25] placeholder-[#6b7280] focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/20 transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d={EMAIL_ICON_PATH} fill="#737688" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#505f76] tracking-[0.6px] uppercase">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-[#fbf8ff] border border-[#c3c5d9] rounded-xl pl-12 pr-12 py-[14px] text-[14px] text-[#191b25] placeholder-[#6b7280] focus:outline-none focus:border-[#003ec7] focus:ring-2 focus:ring-[#003ec7]/20 transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
                    <path d={LOCK_ICON_PATH} fill="#737688" />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#737688] hover:text-[#505f76]"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="size-4 rounded border border-[#c3c5d9] accent-[#003ec7]"
                />
                <span className="text-[13px] text-[#434656]">Remember Me</span>
              </label>
              <button
                type="button"
                className="text-[12px] font-semibold text-[#003ec7] tracking-[0.6px] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#003ec7] text-white py-4 rounded-xl font-semibold text-[20px] tracking-[-0.2px] hover:bg-[#0033a8] transition-colors shadow-md"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Footer Badges */}
        <div className="border-t border-[rgba(195,197,217,0.3)] pt-4 flex items-center gap-4 justify-center flex-wrap">
          {[
            { label: "GERMANY\nREADY" },
            { label: "MULTI\nTENANT" },
            { label: "SECURE\nINFRA" },
            { label: "AI POWERED" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-1.5">
              <div className="size-4 bg-[rgba(0,62,199,0.15)] rounded-full" />
              <span className="text-[11px] font-medium text-[#434656] tracking-[0.55px] uppercase whitespace-pre-line leading-[14px]">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel – Illustration */}
      <div className="flex-1 bg-[#ededfb] relative overflow-hidden">
        <img
          src={loginBg}
          alt="PerfektWerk OS Platform Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(255,255,255,0.1)]" />

        {/* Floating Stats Card 1 */}
        <div className="absolute bottom-[120px] right-12 backdrop-blur-xl bg-[rgba(255,255,255,0.75)] rounded-2xl p-6 w-64 border border-[rgba(255,255,255,0.5)] shadow-xl">
          <div className="flex items-start justify-between mb-3">
            <div className="size-[34px] bg-[rgba(0,62,199,0.1)] rounded-lg flex items-center justify-center">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path
                  d="M8 12a2 2 0 100-4 2 2 0 000 4zM7 0v2.2A6 6 0 002 8v10h12V8A6 6 0 009 2.2V0H7z"
                  fill="#003ec7"
                />
              </svg>
            </div>
            <span className="text-[12px] font-bold text-[#003ec7] bg-[rgba(0,62,199,0.1)] px-2 py-0.5 rounded-full">
              +12.4%
            </span>
          </div>
          <div className="text-[11px] font-bold text-[#505f76] tracking-[1.2px] uppercase mb-1">
            OPERATIONAL EFFICIENCY
          </div>
          <div className="text-[24px] font-bold text-[#191b25] mb-3">89.4%</div>
          <div className="h-1 bg-[rgba(195,197,217,0.3)] rounded-full overflow-hidden">
            <div className="h-full w-[89%] bg-[#003ec7] rounded-full" />
          </div>
        </div>

        {/* Floating Stats Card 2 */}
        <div className="absolute bottom-12 right-12 backdrop-blur-xl bg-[rgba(255,255,255,0.75)] rounded-2xl p-6 w-64 border border-[rgba(255,255,255,0.5)] shadow-xl">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-[#d0e1fb] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#54647a]">
              MS
            </div>
            <div className="size-8 rounded-full bg-[#003ec7] border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white">
              AU
            </div>
            <div className="ml-1">
              <div className="text-[10px] font-bold text-[#505f76] tracking-[1px] uppercase">
                ACTIVE ADMINS
              </div>
              <div className="text-[14px] font-bold text-[#191b25]">
                1,248 Connected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
