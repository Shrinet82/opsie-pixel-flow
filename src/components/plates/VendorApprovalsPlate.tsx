import { useState } from "react";
import { CheckCircle2, Clock, AlertTriangle, Shield, User, FileText, ArrowRight } from "lucide-react";

export const VendorApprovalsPlate = () => {
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [decisionNotes, setDecisionNotes] = useState("");
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = () => {
    setIsApproved(true);
    setTimeout(() => {
      setCurrentStep(3);
      setIsApproved(false);
    }, 1200);
  };

  return (
    <div className="w-full h-full bg-[#0E0F12] text-[#F5F2EA] flex flex-col font-sans select-none text-[13px]">
      {/* Vendor Record Header */}
      <div className="px-5 py-4 border-b border-[#2A2F36] bg-[#14171B] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-[#8FB3C7] text-[#0E0F12] font-bold text-[15px] flex items-center justify-center shrink-0">
            ND
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-[15px] tracking-tight">
                Northwind Data Systems
              </span>
              <span className="font-mono text-[10px] bg-[#8FB3C7]/20 text-[#8FB3C7] px-2 py-0.5 rounded font-medium">
                TIER 1 · HIGH RISK
              </span>
            </div>
            <div className="text-[11.5px] text-[#7D858D] mt-0.5 flex items-center gap-3">
              <span>Intake ID: #VR-8492</span>
              <span>•</span>
              <span>Owner: sec-ops@acme.corp</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2.5 py-1 rounded bg-[#1A1D22] border border-[#2A2F36] text-[#C3CAD1]">
            STATUS: IN APPROVAL
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 px-5 border-b border-[#2A2F36] bg-[#111317] text-[12px] overflow-x-auto">
        <button className="py-2.5 text-[#7D858D] hover:text-white cursor-pointer">
          Overview
        </button>
        <button className="py-2.5 text-[#7D858D] hover:text-white cursor-pointer">
          Evidence (5)
        </button>
        <button className="py-2.5 text-[#7D858D] hover:text-white cursor-pointer">
          Questionnaires (1)
        </button>
        <button className="py-2.5 text-[#8FB3C7] font-semibold border-b-2 border-[#8FB3C7] cursor-pointer flex items-center gap-1.5">
          <span>Approvals Workflow</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8FB3C7] animate-pulse" />
        </button>
        <button className="py-2.5 text-[#7D858D] hover:text-white cursor-pointer">
          Contracts
        </button>
      </div>

      {/* Workflow Step Sequence Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col md:flex-row gap-6 overflow-auto">
        {/* Left: Sequential Timeline */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#7D858D] uppercase tracking-wider">
              Sequence: Tier 1 Security & Compliance (Strict)
            </span>
            <span className="text-[11px] font-mono text-[#8FB3C7]">
              Step {currentStep} of 3
            </span>
          </div>

          <div className="flex flex-col gap-3 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-px before:bg-[#2A2F36]">
            {/* Step 1 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="w-9 h-9 rounded-full bg-[#1A1D22] border border-[#8FB3C7] text-[#8FB3C7] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1 p-3 bg-[#14171B] border border-[#2A2F36] rounded">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-[13px]">
                    01. Security & Infrastructure Review
                  </span>
                  <span className="font-mono text-[10px] text-[#8FB3C7] bg-[#8FB3C7]/15 px-2 py-0.5 rounded font-medium">
                    PASSED
                  </span>
                </div>
                <p className="m-0 mt-1 text-[11.5px] text-[#9AA3AB]">
                  Completed by Sarah Chen (CISO) · SOC 2 Type II report validated
                  with no material exceptions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 relative z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  currentStep === 2
                    ? "bg-[#8FB3C7] text-[#0E0F12] ring-4 ring-[#8FB3C7]/20 font-bold"
                    : "bg-[#1A1D22] border border-[#8FB3C7] text-[#8FB3C7]"
                }`}
              >
                {currentStep > 2 ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Clock className="w-4 h-4 animate-spin-slow" />
                )}
              </div>
              <div
                className={`flex-1 p-3 rounded transition-all duration-300 ${
                  currentStep === 2
                    ? "bg-[#1A1D22] border-2 border-[#8FB3C7]"
                    : "bg-[#14171B] border border-[#2A2F36]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-[13px]">
                      02. Legal & Data Protection Agreement (DPA)
                    </span>
                    {currentStep === 2 && (
                      <span className="font-mono text-[9.5px] bg-[#8FB3C7] text-[#0E0F12] font-bold px-1.5 py-0.5 rounded">
                        IN TURN
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-[#8FB3C7]">
                    SLA: 18h left
                  </span>
                </div>
                <p className="m-0 mt-1 text-[11.5px] text-[#C3CAD1]">
                  Assigned role: <strong className="text-white">Legal Counsel</strong>.
                  Sub-processor list verification in progress.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 relative z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  currentStep === 3
                    ? "bg-[#8FB3C7] text-[#0E0F12] ring-4 ring-[#8FB3C7]/20 font-bold"
                    : "bg-[#14171B] border border-[#2A2F36] text-[#7D858D]"
                }`}
              >
                <span className="font-mono text-[11px]">03</span>
              </div>
              <div
                className={`flex-1 p-3 rounded ${
                  currentStep === 3
                    ? "bg-[#1A1D22] border-2 border-[#8FB3C7]"
                    : "bg-[#14171B]/50 border border-[#2A2F36]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#9AA3AB] text-[13px]">
                    03. Finance & Vendor Conversion
                  </span>
                  <span className="font-mono text-[10px] text-[#7D858D]">
                    {currentStep === 3 ? "ACTIVE" : "QUEUED"}
                  </span>
                </div>
                <p className="m-0 mt-1 text-[11.5px] text-[#7D858D]">
                  Restricted to Intake Creator upon full sequence approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Active Role Decision Simulator */}
        <div className="w-full md:w-[260px] p-4 bg-[#14171B] border border-[#2A2F36] rounded flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-[#8FB3C7] font-mono text-[10.5px] tracking-wider uppercase font-bold">
              <Shield className="w-3.5 h-3.5" />
              Role Check: Legal Counsel
            </div>
            <p className="mt-2 text-[12px] text-[#C3CAD1] leading-[1.5]">
              You hold the signing key for Step {currentStep}. Decisions are
              recorded to the immutable audit log.
            </p>

            <div className="mt-4">
              <label className="block text-[10.5px] font-mono text-[#7D858D] mb-1">
                DECISION NOTES (OPTIONAL)
              </label>
              <input
                type="text"
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder="e.g. EU standard clauses confirmed"
                className="w-full px-2.5 py-1.5 text-[11.5px] bg-[#1A1D22] border border-[#2A2F36] rounded text-white placeholder-[#5A6068] outline-none focus:border-[#8FB3C7]"
              />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#2A2F36] flex flex-col gap-2">
            <button
              onClick={handleApprove}
              disabled={isApproved || currentStep > 2}
              className="w-full py-2 bg-[#8FB3C7] hover:bg-white text-[#0E0F12] font-bold text-[12.5px] rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {isApproved ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0F12]" />
                  <span>Recording Approval...</span>
                </>
              ) : currentStep > 2 ? (
                <span>Step 2 Approved</span>
              ) : (
                <>
                  <span>Approve & Advance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <button className="w-full py-1.5 bg-[#1A1D22] hover:bg-[#23272D] text-[#9AA3AB] text-[11px] rounded transition-colors border border-[#2A2F36] cursor-pointer">
              Request Replacement Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
