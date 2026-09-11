import { useState, useEffect } from "react";
import { Activity, ShieldCheck, FileText, CheckCircle, Key } from "lucide-react";

interface AuditEvent {
  id: string;
  time: string;
  category: "Evidence" | "Approvals" | "Access" | "Questionnaire";
  vendor: string;
  actor: string;
  summary: string;
}

const eventStream: AuditEvent[] = [
  {
    id: "1",
    time: "14:28:11",
    category: "Evidence",
    vendor: "Northwind Data",
    actor: "AI Extractor",
    summary: "SOC 2 Type II parsed · Confidence 0.96",
  },
  {
    id: "2",
    time: "14:10:05",
    category: "Approvals",
    vendor: "Northwind Data",
    actor: "sarah.chen (CISO)",
    summary: "Step 01 Security Review approved",
  },
  {
    id: "3",
    time: "12:45:20",
    category: "Access",
    vendor: "Twilio Inc.",
    actor: "System",
    summary: "Hashed token generated (7d expiry)",
  },
  {
    id: "4",
    time: "09:30:14",
    category: "Questionnaire",
    vendor: "Cloudflare",
    actor: "External Vendor",
    summary: "Completed 24/24 questionnaire items",
  },
];

export const AuditTrailPlate = () => {
  const [events, setEvents] = useState(eventStream);

  return (
    <div className="w-full h-full bg-[#0E0F12] text-[#F5F2EA] flex flex-col font-sans select-none overflow-hidden text-[12px]">
      {/* Audit Top Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 border-b border-[#2A2F36] bg-[#14171B]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#8FB3C7]" />
          <span className="font-semibold text-white tracking-tight text-[12px]">
            Audit Trail & Event Log
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#8FB3C7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FB3C7] animate-pulse" />
          <span>IMMUTABLE</span>
        </div>
      </div>

      {/* Events Stream List */}
      <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between gap-2 bg-[#111317] overflow-auto">
        <div className="flex flex-col gap-2">
          {events.map((evt, idx) => {
            const isTop = idx === 0;
            return (
              <div
                key={evt.id}
                className={`p-2 sm:p-2.5 rounded border transition-colors ${
                  isTop
                    ? "bg-[#1A1D22] border-[#8FB3C7]/40"
                    : "bg-[#14171B] border-[#2A2F36]"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-1.5 py-0.2 rounded font-semibold ${
                        evt.category === "Evidence"
                          ? "bg-[#8FB3C7]/20 text-[#8FB3C7]"
                          : evt.category === "Approvals"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : evt.category === "Access"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      {evt.category.toUpperCase()}
                    </span>
                    <span className="text-white font-medium">{evt.vendor}</span>
                  </div>
                  <span className="text-[#7D858D]">{evt.time}</span>
                </div>

                <p className="m-0 text-[11.5px] text-[#C3CAD1] leading-[1.35] truncate">
                  {evt.summary}
                </p>
                <span className="text-[10px] text-[#7D858D] font-mono block mt-0.5">
                  Actor: {evt.actor}
                </span>
              </div>
            );
          })}
        </div>

        {/* Audit footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#7D858D] pt-1 border-t border-[#2A2F36]">
          <span>Enforced via PostgreSQL RLS</span>
          <span className="text-[#8FB3C7]">Full CSV export</span>
        </div>
      </div>
    </div>
  );
};
