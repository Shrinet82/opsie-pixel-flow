import { useState, useEffect } from "react";
import { Lock, CheckCircle2, UploadCloud, FileText, ArrowRight } from "lucide-react";

export const VendorPortalPlate = () => {
  const [uploadProgress, setUploadProgress] = useState(100);
  const [isUploaded, setIsUploaded] = useState(true);

  return (
    <div className="w-full h-full bg-[#141518] text-[#F5F2EA] flex flex-col font-sans select-none overflow-hidden text-[12px]">
      {/* Portal Top Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 border-b border-[#2A2F36] bg-[#0E0F12]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-white text-[#0E0F12] font-extrabold text-[11px] flex items-center justify-center">
            V
          </div>
          <span className="font-semibold text-white tracking-tight text-[12.5px]">
            Vendorroll Portal
          </span>
        </div>

        <div className="flex items-center gap-1 text-[#8FB3C7] bg-[#8FB3C7]/10 border border-[#8FB3C7]/30 px-2 py-0.5 rounded text-[10px] font-medium font-mono">
          <Lock className="w-2.5 h-2.5" />
          <span>SECURE TOKEN</span>
        </div>
      </div>

      {/* Portal Content Area */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-3 bg-[#14171B]">
        {/* Welcome & Progress Ring */}
        <div className="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded bg-[#1A1D22] border border-[#2A2F36]">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#7D858D] tracking-wider block">
              Requested by Acme Corp
            </span>
            <span className="font-semibold text-white text-[13px]">
              Annual Security Review
            </span>
            <span className="text-[10.5px] text-[#9AA3AB] block mt-0.5">
              1 item left before review begins
            </span>
          </div>

          {/* Mini Circular Progress */}
          <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
            <svg className="w-11 h-11 -rotate-90">
              <circle
                cx="22"
                cy="22"
                r="17"
                className="stroke-[#2A2F36]"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r="17"
                className="stroke-[#8FB3C7]"
                strokeWidth="3"
                fill="none"
                strokeDasharray="106.8"
                strokeDashoffset="26.7"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[10.5px] font-bold text-white">
              75%
            </span>
          </div>
        </div>

        {/* Upload Card / Task item */}
        <div className="p-3 rounded bg-[#1A1D22] border border-[#2A2F36] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#8FB3C7]" />
              <span className="font-medium text-white text-[12px]">
                SOC 2 Type II Report
              </span>
            </div>
            <span className="font-mono text-[9.5px] bg-[#8FB3C7]/20 text-[#8FB3C7] px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" />
              VERIFIED
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#7D858D] font-mono">
            <span>soc2-report-2026.pdf (4.2 MB)</span>
            <span className="text-[#8FB3C7]">Confidence 0.96</span>
          </div>
        </div>

        {/* Questionnaire Task item */}
        <div className="p-3 rounded bg-[#1A1D22] border border-[#2A2F36] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-white text-[12px]">
              Security Questionnaire (CAIQ-Lite)
            </span>
            <span className="font-mono text-[9.5px] text-[#8FB3C7]">
              18/24 Answered
            </span>
          </div>

          <div className="w-full h-1.5 bg-[#2A2F36] rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#8FB3C7] rounded-full" />
          </div>
        </div>

        {/* Autosave Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#7D858D] pt-1">
          <span>Drafts save automatically</span>
          <span className="text-[#8FB3C7]">No account needed</span>
        </div>
      </div>
    </div>
  );
};
