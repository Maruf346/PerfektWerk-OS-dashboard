import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Paperclip, CornerDownLeft, X, TrendingUp, Clock, ExternalLink } from "lucide-react";

import userPhoto from "../../imports/TicketingWorkspace/03e09a6b0d878b3ab657b8eaa67bb75849b5d382.png";
import mapPhoto from "../../imports/TicketingWorkspace/ed323b4aed1b822eb2ba0f7cb2ec53850ffa0886.png";

export function TicketingWorkspacePage() {
  const navigate = useNavigate();
  const [reply, setReply] = useState("");

  return (
    <div className="flex h-full overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Left sidebar panel ── */}
      <div className="w-[200px] shrink-0 bg-[#f7f8fc] border-r border-[rgba(195,197,217,0.35)] flex flex-col p-5 gap-5">
        <button
          onClick={() => navigate("/support")}
          className="flex items-center gap-2 text-[13px] font-medium text-[#505f76] hover:text-[#191b25] transition-colors"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          Back to Management
        </button>

        <div className="flex flex-col gap-1">
          <div className="text-[13px] text-[#737688]">Ticket:</div>
          <div className="text-[18px] font-bold text-[#191b25]">#TK-8821</div>
        </div>

        <div className="text-[10px] font-semibold text-[#505f76] uppercase tracking-[0.8px]">
          Enterprise Support
        </div>
      </div>

      {/* ── Center chat area ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white border-r border-[rgba(195,197,217,0.35)]">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(195,197,217,0.2)] shrink-0">
          <img
            src={userPhoto}
            alt="Lukas Müller"
            className="size-10 rounded-full object-cover shrink-0"
          />
          <div>
            <div className="text-[15px] font-semibold text-[#191b25]">Lukas Müller</div>
            <div className="text-[12px] text-[#737688]">BauWerk Global &bull; Site Manager</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
          {/* Date separator */}
          <div className="flex items-center justify-center">
            <div className="bg-[#f0f0f8] text-[11px] text-[#737688] font-medium px-4 py-1.5 rounded-full">
              Wednesday, October 24
            </div>
          </div>

          {/* Customer message */}
          <div className="flex flex-col items-start gap-1.5 max-w-[460px]">
            <div className="bg-[#f0f0f8] rounded-2xl rounded-tl-sm px-5 py-4 text-[14px] text-[#191b25] leading-relaxed">
              Hello, we're experiencing a delay in the material delivery at the Berlin site.
              Can we track the current GPS location of the logistics truck?
            </div>
            <div className="text-[11px] text-[#b0b3c6] ml-2">10:15 AM</div>
          </div>

          {/* Agent reply */}
          <div className="flex flex-col items-end gap-1.5 ml-auto max-w-[480px]">
            <div className="bg-[#003ec7] rounded-2xl rounded-tr-sm px-5 py-4 text-[14px] text-white leading-relaxed">
              Hi Lukas, I'm looking into that right now. The logistics dashboard indicates the
              truck is currently near Magdeburg. I'll send you a screenshot of the tracker.
            </div>
            <div className="text-[11px] text-[#b0b3c6] mr-2">10:18 AM</div>
          </div>

          {/* Map attachment */}
          <div className="flex flex-col items-end gap-1 ml-auto">
            <div className="rounded-xl overflow-hidden border border-[rgba(195,197,217,0.3)] shadow-sm">
              <img
                src={mapPhoto}
                alt="Logistics tracker map"
                className="w-[280px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Reply box */}
        <div className="shrink-0 border-t border-[rgba(195,197,217,0.35)] p-4">
          <div className="border border-[rgba(195,197,217,0.5)] rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* Toolbar */}
            <div className="flex items-center gap-4 px-4 py-3 border-b border-[rgba(195,197,217,0.25)]">
              <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#505f76] hover:text-[#191b25] transition-colors">
                <CornerDownLeft size={14} strokeWidth={2} />
                Reply
              </button>
              <div className="w-px h-4 bg-[rgba(195,197,217,0.5)]" />
              <button className="p-1 rounded hover:bg-[#f0f0f8] transition-colors">
                <Paperclip size={15} className="text-[#737688]" strokeWidth={1.8} />
              </button>
            </div>
            {/* Textarea */}
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-3 text-[14px] text-[#191b25] placeholder:text-[#c3c5d9] resize-none focus:outline-none"
            />
            {/* Send button */}
            <div className="flex justify-end px-4 py-3 border-t border-[rgba(195,197,217,0.2)]">
              <button className="px-5 py-2 bg-[#003ec7] text-white rounded-lg text-[13px] font-medium hover:bg-[#0033a8] transition-colors">
                Send Reply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right info panel ── */}
      <div className="w-[260px] shrink-0 flex flex-col overflow-y-auto bg-white">
        {/* Profile */}
        <div className="flex flex-col items-center py-6 px-5 border-b border-[rgba(195,197,217,0.25)]">
          <img
            src={userPhoto}
            alt="Lukas Müller"
            className="size-16 rounded-2xl object-cover mb-3"
          />
          <div className="text-[15px] font-semibold text-[#191b25]">Lukas Müller</div>
          <div className="text-[12px] text-[#737688] mt-0.5">Site Manager, BauWerk Global</div>
        </div>

        {/* Company Status */}
        <div className="px-5 py-5 border-b border-[rgba(195,197,217,0.25)]">
          <div className="text-[10px] font-semibold text-[#737688] uppercase tracking-[0.6px] mb-3">
            Company Status
          </div>
          <div className="bg-[#f7f8fc] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-medium text-[#191b25]">Client Health</span>
              <span className="text-[13px] font-bold text-[#16a34a]">94%</span>
            </div>
            <div className="h-2 bg-[rgba(195,197,217,0.3)] rounded-full overflow-hidden">
              <div className="h-full bg-[#16a34a] rounded-full" style={{ width: "94%" }} />
            </div>
            <div className="text-[11px] text-[#737688] mt-2 italic">
              "Platinum account. High priority."
            </div>
          </div>
        </div>

        {/* Conversation Info */}
        <div className="px-5 py-5 border-b border-[rgba(195,197,217,0.25)]">
          <div className="text-[10px] font-semibold text-[#737688] uppercase tracking-[0.6px] mb-3">
            Conversation Info
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#737688]">Ticket ID</span>
              <span className="text-[12px] font-semibold text-[#191b25]">#BW-9821-L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[#737688]">Duration</span>
              <div className="flex items-center gap-1 text-[12px] font-semibold text-[#191b25]">
                <Clock size={12} strokeWidth={2} className="text-[#737688]" />
                2h 14m
              </div>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-[12px] text-[#737688]">Project</span>
              <a href="#" className="text-[12px] font-medium text-[#003ec7] hover:underline text-right max-w-[120px]">
                Berlin-Brandenburg Hub
              </a>
            </div>
          </div>
        </div>

        {/* Close Ticket */}
        <div className="px-5 py-5">
          <button className="flex items-center gap-2 text-[13px] font-semibold text-[#dc2626] hover:text-[#b91c1c] transition-colors">
            <X size={14} strokeWidth={2.5} />
            Close Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
