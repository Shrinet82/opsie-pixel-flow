import { useState, useEffect } from "react";
import { Search, ShieldAlert, CheckCircle2, Clock, ArrowUpRight, Activity } from "lucide-react";

interface ExpiringItem {
  id: string;
  vendor: string;
  docType: string;
  daysRemaining: number;
  status: "critical" | "warning" | "valid";
  sla: string;
}

const initialItems: ExpiringItem[] = [
  {
    id: "1",
    vendor: "Northwind Data",
    docType: "SOC 2 Type II Report",
    daysRemaining: 3,
    status: "critical",
    sla: "Review overdue by 12h",
  },
  {
    id: "2",
    vendor: "Twilio Inc.",
    docType: "Cyber Liability Insurance",
    daysRemaining: 18,
    status: "warning",
    sla: "Renewal notice sent",
  },
  {
    id: "3",
    vendor: "Datadog",
    docType: "Penetration Test Summary",
    daysRemaining: 44,
    status: "warning",
    sla: "Awaiting vendor upload",
  },
  {
    id: "4",
    vendor: "Stripe",
    docType: "PCI-DSS Attestation (AoC)",
    daysRemaining: 195,
    status: "valid",
    sla: "Compliance verified",
  },
];

export const DashboardPlate = () => {
  const [items, setItems] = useState(initialItems);
  const [activeTab, setActiveTab] = useState<"overdue" | "all">("overdue");
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((p) => (p + 1) % 100);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#0E0F12] text-[#F5F2EA] flex flex-col font-sans select-none text-[13px]">
      {/* Mock Header / Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#2A2F36] bg-[#14171B]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#8FB3C7] inline-block" />
            <span className="font-semibold tracking-[-0.01em] text-white text-[13.5px]">
              Vendorroll
            </span>
          </div>
          <span className="hidden sm:inline-block text-[#7D858D] text-[11px] font-mono border-l border-[#2A2F36] pl-3">
            ACME CORP · PROD
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#1A1D22] border border-[#2A2F36] text-[11px] text-[#9AA3AB]">
            <Search className="w-3 h-3 text-[#7D858D]" />
            <span className="hidden sm:inline">Quick search...</span>
            <kbd className="font-mono text-[9px] bg-[#23272D] px-1 py-0.5 rounded text-[#C3CAD1]">
              ⌘K
            </kbd>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#8FB3C7]/10 border border-[#8FB3C7]/25 text-[#8FB3C7] text-[11px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FB3C7] animate-pulse" />
            <span className="hidden sm:inline">MONITORING</span>
          </div>
        </div>
      </div>

      {/* KPI Metric Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2A2F36] border-b border-[#2A2F36]">
        <div className="p-3 sm:p-4 bg-[#14171B] flex flex-col">
          <span className="text-[10.5px] font-mono text-[#7D858D] uppercase tracking-wider">
            Active Vendors
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[20px] font-bold tracking-tight text-white">
              38
            </span>
            <span className="text-[10px] font-mono text-[#8FB3C7]">↑ 4 new</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 bg-[#14171B] flex flex-col">
          <span className="text-[10.5px] font-mono text-[#7D858D] uppercase tracking-wider">
            Evidence Tracked
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[20px] font-bold tracking-tight text-white">
              142
            </span>
            <span className="text-[10px] font-mono text-[#9AA3AB]">96% current</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 bg-[#14171B] flex flex-col">
          <span className="text-[10.5px] font-mono text-[#8FB3C7] uppercase tracking-wider flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-[#8FB3C7]" /> Overdue Watch
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[20px] font-bold tracking-tight text-[#8FB3C7]">
              03
            </span>
            <span className="text-[10px] font-mono text-[#8FB3C7] font-semibold">
              Action raised
            </span>
          </div>
        </div>

        <div className="p-3 sm:p-4 bg-[#14171B] flex flex-col">
          <span className="text-[10.5px] font-mono text-[#7D858D] uppercase tracking-wider">
            Workflow SLAs
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[20px] font-bold tracking-tight text-white">
              98.4%
            </span>
            <span className="text-[10px] font-mono text-[#9AA3AB]">0 breach</span>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="flex-1 flex flex-col p-4 sm:p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("overdue")}
              className={`px-3 py-1 rounded text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === "overdue"
                  ? "bg-[#8FB3C7] text-[#0E0F12] font-semibold"
                  : "text-[#9AA3AB] hover:text-white"
              }`}
            >
              Expiring Evidence (3)
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded text-[12px] font-medium transition-colors cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#8FB3C7] text-[#0E0F12] font-semibold"
                  : "text-[#9AA3AB] hover:text-white"
              }`}
            >
              All Register (38)
            </button>
          </div>

          <span className="text-[10.5px] font-mono text-[#7D858D] flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#8FB3C7] animate-pulse" />
            Live sync active
          </span>
        </div>

        {/* Table Shell */}
        <div className="flex-1 overflow-auto border border-[#2A2F36] bg-[#14171B]/60 rounded">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2A2F36] bg-[#1A1D22]/80 font-mono text-[10px] text-[#7D858D] tracking-wider uppercase">
                <th className="py-2.5 px-3.5 font-normal">Vendor</th>
                <th className="py-2.5 px-3 font-normal hidden sm:table-cell">
                  Document Type
                </th>
                <th className="py-2.5 px-3 font-normal">Expiry Status</th>
                <th className="py-2.5 px-3 text-right font-normal">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#23272D] text-[12.5px]">
              {items.map((item, idx) => {
                const isTopAlert = item.status === "critical";
                return (
                  <tr
                    key={item.id}
                    className={`transition-colors duration-150 hover:bg-[#1A1D22] ${
                      isTopAlert ? "bg-[#8FB3C7]/[0.06]" : ""
                    }`}
                  >
                    <td className="py-2.5 px-3.5 font-medium text-white">
                      <div className="flex items-center gap-2">
                        {isTopAlert && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8FB3C7] shrink-0" />
                        )}
                        <span>{item.vendor}</span>
                      </div>
                      <span className="sm:hidden block font-mono text-[10px] text-[#7D858D] mt-0.5">
                        {item.docType}
                      </span>
                    </td>

                    <td className="py-2.5 px-3 text-[#C3CAD1] hidden sm:table-cell">
                      {item.docType}
                    </td>

                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[11px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                            item.status === "critical"
                              ? "bg-[#8FB3C7] text-[#0E0F12]"
                              : item.status === "warning"
                              ? "bg-[#2A2F36] text-[#C3CAD1]"
                              : "bg-[#1A1D22] text-[#7D858D]"
                          }`}
                        >
                          {item.daysRemaining}d left
                        </span>
                        <span className="hidden md:inline text-[11px] text-[#7D858D] truncate">
                          {item.sla}
                        </span>
                      </div>
                    </td>

                    <td className="py-2.5 px-3 text-right">
                      <button className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-1 rounded bg-[#23272D] hover:bg-[#8FB3C7] hover:text-[#0E0F12] text-[#C3CAD1] transition-colors cursor-pointer">
                        <span>Review</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer info strip */}
        <div className="mt-2.5 flex items-center justify-between text-[10.5px] font-mono text-[#7D858D] px-1">
          <span>AUTO-JOB: Evidence analyzer active</span>
          <span>Last audit snapshot: 2m ago</span>
        </div>
      </div>
    </div>
  );
};
