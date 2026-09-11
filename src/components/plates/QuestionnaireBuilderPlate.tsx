import { useState } from "react";
import { CheckSquare, ListPlus, Sliders, CheckCircle2, ChevronDown } from "lucide-react";

export const QuestionnaireBuilderPlate = () => {
  const [selectedOption, setSelectedOption] = useState<string>("yes");

  return (
    <div className="w-full h-full bg-[#111317] text-[#F5F2EA] flex flex-col font-sans select-none overflow-hidden text-[12px]">
      {/* Template Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 border-b border-[#2A2F36] bg-[#0E0F12]">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-3.5 h-3.5 text-[#8FB3C7]" />
          <span className="font-semibold text-white tracking-tight text-[12px]">
            Questionnaire Builder
          </span>
        </div>
        <span className="font-mono text-[9.5px] bg-[#1A1D22] border border-[#2A2F36] text-[#C3CAD1] px-2 py-0.5 rounded">
          TEMPLATE: SOC2-VENDOR-v2
        </span>
      </div>

      {/* Builder Workspace */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-2.5 bg-[#14171B]">
        {/* Question Card */}
        <div className="p-3 rounded bg-[#1A1D22] border border-[#2A2F36] flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#7D858D]">
            <span>SECTION 2 · ACCESS GOVERNANCE</span>
            <span className="text-[#8FB3C7] font-semibold">Q4 of 24</span>
          </div>

          <p className="m-0 text-[12.5px] font-medium text-white leading-[1.4]">
            Do you enforce Multi-Factor Authentication (MFA) for all staff
            accessing production environments?
          </p>

          {/* Answer Options Radio Simulation */}
          <div className="grid grid-cols-3 gap-2 mt-1">
            <button
              onClick={() => setSelectedOption("yes")}
              className={`py-1.5 px-2 rounded text-[11px] font-medium border text-center transition-colors cursor-pointer ${
                selectedOption === "yes"
                  ? "bg-[#8FB3C7]/20 border-[#8FB3C7] text-white"
                  : "bg-[#14171B] border-[#2A2F36] text-[#7D858D]"
              }`}
            >
              Yes, strictly
            </button>
            <button
              onClick={() => setSelectedOption("partial")}
              className={`py-1.5 px-2 rounded text-[11px] font-medium border text-center transition-colors cursor-pointer ${
                selectedOption === "partial"
                  ? "bg-[#8FB3C7]/20 border-[#8FB3C7] text-white"
                  : "bg-[#14171B] border-[#2A2F36] text-[#7D858D]"
              }`}
            >
              Partial / SSO
            </button>
            <button
              onClick={() => setSelectedOption("no")}
              className={`py-1.5 px-2 rounded text-[11px] font-medium border text-center transition-colors cursor-pointer ${
                selectedOption === "no"
                  ? "bg-[#8FB3C7]/20 border-[#8FB3C7] text-white"
                  : "bg-[#14171B] border-[#2A2F36] text-[#7D858D]"
              }`}
            >
              No (Flag)
            </button>
          </div>
        </div>

        {/* Rule / Logic Strip */}
        <div className="flex items-center justify-between p-2.5 rounded bg-[#1A1D22] border border-[#2A2F36] font-mono text-[10.5px]">
          <div className="flex items-center gap-2">
            <Sliders className="w-3 h-3 text-[#8FB3C7]" />
            <span className="text-[#C3CAD1]">Score weight: 10 pts</span>
          </div>
          <span className="text-[#8FB3C7] bg-[#8FB3C7]/15 px-2 py-0.5 rounded font-bold">
            REQUIRED
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#7D858D] pt-0.5">
          <span>Exports as CSV & PDF</span>
          <span className="text-[#8FB3C7]">Auto-prefills previous year</span>
        </div>
      </div>
    </div>
  );
};
