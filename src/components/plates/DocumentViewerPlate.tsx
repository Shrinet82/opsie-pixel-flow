import { useState, useEffect } from "react";
import { FileText, ShieldCheck, Check, Sparkles } from "lucide-react";

export const DocumentViewerPlate = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full bg-[#fbf9f5] text-[#1c1d20] flex flex-col font-sans select-none overflow-hidden relative border border-[rgba(14,15,18,0.18)]">
      {/* Document Tool Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[rgba(14,15,18,0.12)] bg-[#f3efe6] text-[11px] font-mono text-[#5b6167]">
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-[#2F6D8F]" />
          <span className="font-semibold text-[#0E0F12]">soc2-typeii-2026.pdf</span>
          <span className="text-[10px] bg-[#2F6D8F]/15 text-[#2F6D8F] px-1.5 py-0.2 rounded">
            PDF · 48 pages
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[#2F6D8F] font-bold">
            <Sparkles className="w-3 h-3 animate-spin-slow" />
            AI OCR Active
          </span>
        </div>
      </div>

      {/* Document Content Sheet */}
      <div className="flex-1 p-5 sm:p-6 bg-white relative overflow-hidden flex flex-col justify-between font-serif">
        {/* Animated Laser Scanning Beam */}
        <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-[#2F6D8F]/20 to-transparent pointer-events-none animate-scan-beam" />

        {/* Letterhead */}
        <div>
          <div className="flex items-center justify-between border-b-2 border-[#1c1d20] pb-3 mb-4">
            <div>
              <div
                className={`transition-all duration-300 rounded px-1 -mx-1 inline-block ${
                  highlightIndex === 0
                    ? "bg-[#8FB3C7]/40 ring-2 ring-[#2F6D8F]"
                    : ""
                }`}
              >
                <span className="font-sans font-bold text-[14px] sm:text-[15px] tracking-tight uppercase block text-[#0E0F12]">
                  Northwind Assurance LLP
                </span>
              </div>
              <span className="font-sans text-[10px] text-[#5b6167] tracking-wider uppercase block">
                Certified Public Accountants · Independent Audit Practice
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#2F6D8F]/10 border border-[#2F6D8F]/30 text-[#2F6D8F] text-[10px] font-sans font-bold rounded">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AICPA TSC</span>
            </div>
          </div>

          {/* Report Title */}
          <div className="text-center my-3">
            <h4
              className={`font-sans font-semibold text-[13px] sm:text-[14px] text-[#0E0F12] m-0 transition-all duration-300 rounded px-1 inline-block ${
                highlightIndex === 1
                  ? "bg-[#8FB3C7]/40 ring-2 ring-[#2F6D8F]"
                  : ""
              }`}
            >
              SOC 2® Type II Service Organization Control Report
            </h4>
            <p className="font-sans text-[11px] text-[#5b6167] mt-1 m-0">
              Report on Controls at Northwind Data Systems Relevant to Security
              and Confidentiality
            </p>
          </div>

          {/* Audit Period */}
          <div className="my-3 text-center">
            <span
              className={`font-mono text-[11px] text-[#0E0F12] transition-all duration-300 rounded px-2 py-0.5 inline-block ${
                highlightIndex === 2
                  ? "bg-[#8FB3C7]/40 ring-2 ring-[#2F6D8F] font-bold"
                  : "bg-[#f3efe6]"
              }`}
            >
              Observation Period: February 1, 2026 to January 31, 2027
            </span>
          </div>

          {/* Excerpt Body */}
          <p className="font-sans text-[11.5px] leading-[1.6] text-[#44494e] mt-3">
            In our opinion, management has properly described the system, and the
            controls tested were operating with sufficient effectiveness
            throughout the examination period to provide reasonable assurance...
          </p>
        </div>

        {/* Auditor Signature & Opinion Stamp */}
        <div className="mt-4 pt-3 border-t border-[#e2decfe0] flex items-end justify-between font-sans">
          <div>
            <span className="block text-[11px] font-semibold text-[#0E0F12]">
              Northwind Assurance LLP
            </span>
            <span className="block text-[9.5px] text-[#5b6167]">
              San Francisco, CA · Issue Date: February 18, 2026
            </span>
          </div>

          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-all duration-300 ${
              highlightIndex === 3
                ? "bg-[#2F6D8F] text-white border-[#2F6D8F]"
                : "bg-[#f3efe6] text-[#0E0F12] border-[rgba(14,15,18,0.15)]"
            }`}
          >
            <Check className="w-3.5 h-3.5 text-current" />
            <span className="text-[10.5px] font-bold">Unqualified Opinion</span>
          </div>
        </div>
      </div>
    </div>
  );
};
