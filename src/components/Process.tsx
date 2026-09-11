const steps = [
  {
    number: "01",
    title: "Intake",
    body: "Every new vendor routed to the right approvers, in order.",
  },
  {
    number: "02",
    title: "Evidence",
    body: "Vendors upload through a secure link. Documents read themselves.",
  },
  {
    number: "03",
    title: "Review",
    body: "Approve, reject, or request a replacement. All of it recorded.",
  },
  {
    number: "04",
    title: "Renewal",
    body: "Expiry tracked from the document itself. You get told first.",
  },
];

const Process = () => (
  <section className="bg-ink text-cream">
    <div className="grid sm:grid-cols-2 md:grid-cols-4">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="flex flex-col gap-3 px-[var(--gutter)] py-9 border-b border-ink-rule md:border-b-0 md:border-r md:last:border-r-0"
        >
          <span
            className={`t-numeral ${
              i === steps.length - 1 ? "text-signal" : "text-cream"
            }`}
            style={{ fontSize: "clamp(44px, 4.4vw, 68px)" }}
          >
            {step.number}
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.015em]">
            {step.title}
          </span>
          <span className="text-[14px] leading-[1.6] text-ink-muted">
            {step.body}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
