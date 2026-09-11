import { useEffect, useState } from "react";
import { Label } from "@/components/plates";

const baseRows = [
  { vendor: "Stripe", tier: "Low", evidence: "Complete", expires: "412d" },
  { vendor: "Twilio", tier: "Medium", evidence: "Complete", expires: "84d" },
  { vendor: "Okta", tier: "Low", evidence: "Complete", expires: "210d" },
  { vendor: "Cloudflare", tier: "Medium", evidence: "In review", expires: "158d" },
];

// Stepped transitions, so the row reads as a state machine rather than a slide.
const sequence = [
  { expires: "7d", evidence: "Pen test expiring", alert: false },
  { expires: "6d", evidence: "Pen test expiring", alert: false },
  { expires: "5d", evidence: "Pen test expiring", alert: false },
  { expires: "4d", evidence: "Pen test expiring", alert: false },
  { expires: "3d", evidence: "Reminder sent", alert: true },
  { expires: "3d", evidence: "Vendor notified", alert: true },
  { expires: "2d", evidence: "Evidence received", alert: false },
  { expires: "398d", evidence: "Complete", alert: false },
];

const RegisterWidget = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(4);
      return;
    }
    const id = setInterval(() => setStep((s) => (s + 1) % sequence.length), 1100);
    return () => clearInterval(id);
  }, []);

  const current = sequence[step];
  const rows = [
    baseRows[0],
    baseRows[1],
    {
      vendor: "Northwind Data",
      tier: "High",
      evidence: current.evidence,
      expires: current.expires,
      live: true,
      alert: current.alert,
    },
    baseRows[2],
    baseRows[3],
  ];

  return (
    <section className="bg-ink text-cream gutter pb-[var(--rhythm)]">
      <div className="border border-ink-rule">
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-ink-rule">
          <div className="flex items-center gap-3">
            <span className="w-[22px] h-px bg-signal" />
            <span className="text-[14px] font-medium tracking-[-0.01em]">
              Vendor register
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] bg-signal animate-pulse-dot" />
            <Label>Action raised</Label>
          </div>
        </div>

        {rows.map((row) => {
          const live = "live" in row && row.live;
          const alert = "alert" in row && row.alert;
          return (
            <div
              key={row.vendor}
              className={`grid grid-cols-[1.5fr_1fr] sm:grid-cols-[1.8fr_0.9fr_1.4fr_0.7fr] gap-x-4 gap-y-1 px-5 sm:px-7 py-4 border-b border-ink-rule last:border-b-0 items-center ${
                live && alert ? "bg-ink-well" : ""
              }`}
            >
              <span className="text-[15px] tracking-[-0.01em]">{row.vendor}</span>
              <span
                className={`font-mono text-[12px] text-right sm:text-left ${
                  row.tier === "High" ? "text-signal" : "text-ink-faint"
                }`}
              >
                {row.tier}
              </span>
              <span
                className={`font-mono text-[12px] ${
                  live && alert ? "text-signal" : "text-ink-muted"
                }`}
              >
                {row.evidence}
              </span>
              <span
                className={`font-mono text-[12px] text-right ${
                  live ? "text-signal font-bold" : "text-ink-faint"
                }`}
              >
                {row.expires}
              </span>
            </div>
          );
        })}
      </div>

      <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-3">
        Illustrative register. Vendor names and dates are examples.
      </p>
    </section>
  );
};

export default RegisterWidget;
