import { useIsLive } from "@/hooks/use-in-view";

const live = (on: boolean) => `vig on-dark ${on ? "is-live" : ""}`;
const v = (o: Record<string, string | number>) => o as React.CSSProperties;

/** Vendorroll: one vendor request travelling from sent to verified. */
export function RequestTimeline() {
  const [ref, on] = useIsLive<HTMLDivElement>();
  const steps = ["Request sent", "Link opened", "Report uploaded", "Verified"];
  return (
    <div ref={ref} className={`${live(on)} relative pl-5`}>
      <p className="label mb-3 !text-[10px] text-bone/55">Northwind Analytics · SOC 2 report</p>
      <span aria-hidden className="absolute bottom-2 left-[3px] top-8 w-px bg-bone/15" />
      <span
        aria-hidden
        data-anim="line"
        className="absolute bottom-2 left-[3px] top-8 w-px bg-vendorroll-dark"
      />
      <ol className="m-0 list-none space-y-2.5 p-0">
        {steps.map((s, i) => (
          <li
            key={s}
            data-anim="step"
            style={v({ "--td": `${0.4 + i * 1.5}s` })}
            className="relative flex items-center justify-between text-[13px]"
          >
            <span
              aria-hidden
              className={`absolute -left-5 h-[7px] w-[7px] rounded-full ${
                i === steps.length - 1 ? "bg-vendorroll-dark" : "border border-vendorroll-dark bg-ink-2"
              }`}
            />
            <span>{s}</span>
            <span className="label !text-[10px] text-bone/45">0{i + 1}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Advisory: readiness filling across the SOC 2 criteria. No scores, only progress. */
export function ReadinessBars() {
  const [ref, on] = useIsLive<HTMLDivElement>();
  const rows: [string, number][] = [
    ["Security", 0.92],
    ["Availability", 0.7],
    ["Confidentiality", 0.82],
    ["Privacy", 0.55],
  ];
  return (
    <div ref={ref} className={live(on)}>
      <p className="label mb-3 !text-[10px] text-bone/55">Readiness · Trust Services Criteria</p>
      <div className="space-y-3.5">
        {rows.map(([name, w], i) => (
          <div key={name}>
            <p className="mb-1.5 text-[12px] text-bone/80">{name}</p>
            <div className="h-[3px] w-full bg-bone/10">
              <div
                data-anim="bar"
                className="h-full w-full bg-gold"
                style={v({ "--w": w, "--td": `${0.3 + i * 0.5}s` })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Ledgerline: usage events accumulating, then the rule that turns them into a line. */
export function UsageChart() {
  const [ref, on] = useIsLive<HTMLDivElement>();
  const cols = [0.25, 0.4, 0.3, 0.55, 0.45, 0.7, 0.6, 0.85, 0.75, 1];
  return (
    <div ref={ref} className={live(on)}>
      <p className="label mb-3 !text-[10px] text-bone/55">Usage events</p>
      <div className="flex h-[70px] items-end gap-1.5 border-b border-bone/20">
        {cols.map((h, i) => (
          <div
            key={i}
            data-anim="col"
            className="h-full flex-1 bg-copper"
            style={v({ "--h": h, "--td": `${0.2 + i * 0.18}s` })}
          />
        ))}
      </div>
      <p className="mt-3 font-mono text-[12px] text-bone/75">Usage = events × rate</p>
    </div>
  );
}
