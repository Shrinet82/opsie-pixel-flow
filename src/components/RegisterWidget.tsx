import { useEffect, useState } from "react";

type Row = {
  vendor: string;
  tier: "Low" | "Medium" | "High";
  evidence: string;
  expires: string;
  state?: "ok" | "warn" | "alert";
};

const baseRows: Row[] = [
  { vendor: "Stripe", tier: "Low", evidence: "Complete", expires: "412d", state: "ok" },
  { vendor: "Twilio", tier: "Medium", evidence: "Complete", expires: "84d", state: "ok" },
  { vendor: "Okta", tier: "Low", evidence: "Complete", expires: "210d", state: "ok" },
  { vendor: "Cloudflare", tier: "Medium", evidence: "In review", expires: "158d", state: "ok" },
];

// The countdown row is the point of the widget: it demonstrates the product
// claim in the headline rather than decorating the page.
const sequence = [
  { expires: "7d", evidence: "Pen test expiring", state: "warn" as const },
  { expires: "6d", evidence: "Pen test expiring", state: "warn" as const },
  { expires: "5d", evidence: "Pen test expiring", state: "warn" as const },
  { expires: "4d", evidence: "Pen test expiring", state: "warn" as const },
  { expires: "3d", evidence: "Reminder sent", state: "alert" as const },
  { expires: "3d", evidence: "Vendor notified", state: "alert" as const },
  { expires: "2d", evidence: "Evidence received", state: "ok" as const },
  { expires: "398d", evidence: "Complete", state: "ok" as const },
];

const tierColor = (tier: Row["tier"]) =>
  tier === "High" ? "text-signal" : "text-ink-muted";

const RegisterWidget = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(sequence.length - 1);
      return;
    }
    const id = setInterval(
      () => setStep((s) => (s + 1) % sequence.length),
      1100,
    );
    return () => clearInterval(id);
  }, []);

  const current = sequence[step];
  const live: Row = {
    vendor: "Northwind Data",
    tier: "High",
    evidence: current.evidence,
    expires: current.expires,
    state: current.state,
  };

  const rows = [baseRows[0], baseRows[1], live, baseRows[2], baseRows[3]];

  return (
    <section className="px-6 sm:px-12 pb-16 sm:pb-20">
      <div className="border border-black">
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-black">
          <div className="flex items-center gap-3">
            <span className="w-[22px] h-[3px] bg-signal" />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              Vendor register
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[7px] h-[7px] bg-signal animate-pulse-dot" />
            <span className="text-[13px] font-medium text-ink-muted tabular-nums">
              monitoring
            </span>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-[1.6fr_0.8fr_1.3fr_0.7fr] gap-4 px-7 py-3 border-b border-rule-light text-[13px] font-medium text-ink-muted">
          <span>Vendor</span>
          <span>Tier</span>
          <span>Evidence</span>
          <span className="text-right">Expires</span>
        </div>

        {rows.map((row) => {
          const isLive = row.vendor === "Northwind Data";
          return (
            <div
              key={row.vendor}
              className={`grid grid-cols-[1.4fr_0.9fr] sm:grid-cols-[1.6fr_0.8fr_1.3fr_0.7fr] gap-x-4 gap-y-1 px-5 sm:px-7 py-4 border-b border-rule-light last:border-b-0 items-center transition-colors duration-300 ${
                isLive && row.state === "alert" ? "bg-signal/[0.07]" : ""
              }`}
            >
              <span className="text-[15px] font-medium tracking-[-0.015em]">
                {row.vendor}
              </span>
              <span
                className={`text-[14px] tabular-nums text-right sm:text-left ${tierColor(row.tier)}`}
              >
                {row.tier}
              </span>
              <span
                className={`text-[14px] tracking-[-0.005em] transition-colors duration-300 ${
                  row.state === "alert"
                    ? "text-signal font-medium"
                    : row.state === "warn"
                      ? "text-black font-medium"
                      : "text-ink-muted"
                }`}
              >
                {row.evidence}
              </span>
              <span
                className={`text-[14px] tabular-nums text-right transition-colors duration-300 ${
                  row.state === "alert" || row.state === "warn"
                    ? "text-signal font-semibold"
                    : "text-ink-muted"
                }`}
              >
                {row.expires}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-[13px] text-ink-faint mt-3">
        Illustrative register. Vendor names and dates are examples.
      </p>
    </section>
  );
};

export default RegisterWidget;
