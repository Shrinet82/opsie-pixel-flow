import { useEffect, useState } from "react";
import { useIsLive } from "@/hooks/use-in-view";

const STATES = ["Requested", "Received", "Verified"] as const;
const VENDORS = [
  { name: "Northwind Analytics", doc: "SOC 2 report" },
  { name: "Kestrel Logistics", doc: "Insurance certificate" },
  { name: "Perch Payments", doc: "Security questionnaire" },
];

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A tiny vendor register. Each row steps Requested, Received, Verified, staggered. */
export function VendorrollVignette({ bare = false }: { bare?: boolean }) {
  const [ref, live] = useIsLive<HTMLDivElement>();
  const [tick, setTick] = useState(0);
  const still = reduced();

  useEffect(() => {
    if (!live || still) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 2500);
    return () => window.clearInterval(id);
  }, [live, still]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A register of three sample vendors whose status moves from requested to received to verified."
      className={bare ? "on-dark text-bone" : "on-light border border-ink/10 bg-bone p-4 text-ink"}
    >
      <div className={`label mb-2 flex justify-between ${bare ? "text-bone/55" : "text-ink/55"}`}>
        <span>Vendor</span>
        <span>Status</span>
      </div>
      {VENDORS.map((v, i) => {
        // Reduced motion: show the settled state (everything verified).
        const state = still ? 2 : (tick + i) % 3;
        return (
          <div key={v.name} className={`flex items-center justify-between gap-3 border-t py-2.5 ${bare ? "border-bone/10" : "border-ink/10 !py-3"}`}>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium">{v.name}</p>
              <p className={`label !text-[10px] ${bare ? "text-bone/55" : "text-ink/55"}`}>{v.doc}</p>
            </div>
            <span
              className={`label shrink-0 border px-2.5 py-1 !text-[10px] transition-colors duration-500 ${
                state === 2
                  ? "border-vendorroll bg-vendorroll text-white"
                  : state === 1
                    ? bare ? "border-bone/50 bg-bone/10 text-bone" : "border-ink/40 bg-ink/[0.06] text-ink"
                    : bare ? "border-bone/20 text-bone/60" : "border-ink/20 text-ink/60"
              }`}
            >
              {STATES[state]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
