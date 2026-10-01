import { useIsLive } from "@/hooks/use-in-view";

const STEPS = ["Gap assessment", "Policies & controls", "Penetration test", "Audit ready"];

/** A four-step checklist that ticks itself, each tick drawn as a stroke. */
export function AdvisoryVignette() {
  const [ref, live] = useIsLive<HTMLDivElement>();
  return (
    <div
      ref={ref}
      role="img"
      aria-label="A checklist that ticks itself: gap assessment, policies and controls, penetration test, audit ready."
      className={`vig on-dark border border-gold/40 bg-ink-2 p-4 text-bone ${live ? "is-live" : ""}`}
    >
      <ol className="m-0 list-none p-0">
        {STEPS.map((s, i) => (
          <li
            key={s}
            data-anim="row"
            style={{ ["--td" as string]: `${0.5 + i * 1.6}s` }}
            className={`flex items-center gap-3 py-3 ${i ? "border-t border-bone/10" : ""}`}
          >
            <span
              data-anim="box"
              style={{ ["--td" as string]: `${0.5 + i * 1.6}s` }}
              className="flex h-5 w-5 shrink-0 items-center justify-center border border-gold"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
                <path
                  data-anim="tick"
                  style={{ ["--td" as string]: `${0.5 + i * 1.6}s` }}
                  d="M3 8.5l3.2 3.2L13 4.8"
                  stroke="#F4F1EA"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <span className="text-[14px]">{s}</span>
            <span className="label ml-auto !text-[10px] text-gold">0{i + 1}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
