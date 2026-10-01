import { useIsLive } from "@/hooks/use-in-view";

const LINES = ["Base plan", "Usage", "Seats"];

/**
 * Usage events drift in from the left and settle into a ruled ledger. Three
 * line items type in, then the total resolves to words. No amounts anywhere.
 */
export function LedgerVignette({ large = false }: { large?: boolean }) {
  const [ref, live] = useIsLive<HTMLDivElement>();
  return (
    <div
      ref={ref}
      role="img"
      aria-label="An illustrated ledger. Usage events settle into three line items: base plan, usage and seats. The total reads coming soon."
      className={`vig on-dark overflow-hidden border border-bone/10 bg-ink-2 text-bone ${live ? "is-live" : ""} ${
        large ? "p-6 sm:p-9" : "p-4"
      }`}
    >
      <div className={`label mb-3 flex justify-between text-bone/55 ${large ? "sm:mb-5" : ""}`}>
        <span>Ledger</span>
        <span>Events</span>
      </div>
      {LINES.map((line, i) => (
        <div
          key={line}
          className={`relative flex items-center border-t border-bone/10 ${large ? "py-5" : "py-3.5"}`}
        >
          <span className="relative mr-3 inline-block h-2 w-2 shrink-0 rounded-full border border-copper" aria-hidden>
            <span
              data-anim="dot"
              className="absolute left-0 top-0 h-2 w-2 rounded-full bg-copper"
              style={{ ["--dd" as string]: `${i * 0.7}s` }}
            />
          </span>
          <span
            className={`font-mono ${large ? "text-[15px]" : "text-[13px]"}`}
            data-anim="type"
            style={{ ["--n" as string]: line.length, ["--td" as string]: `${0.9 + i * 0.9}s` }}
          >
            {line}
          </span>
          <span className="ml-auto h-px w-1/4 bg-bone/20" aria-hidden />
        </div>
      ))}
      <div className={`flex items-baseline justify-between border-t border-copper/60 ${large ? "pt-5" : "pt-3.5"}`}>
        <span className="label text-bone/55">Total</span>
        <span
          data-anim="total"
          className={`font-serif italic text-copper ${large ? "text-3xl" : "text-xl"}`}
        >
          Coming soon
        </span>
      </div>
    </div>
  );
}
