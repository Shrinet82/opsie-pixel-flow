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
  <section>
    <div className="grid sm:grid-cols-2 md:grid-cols-4">
      {steps.map((step, i) => (
        <div
          key={step.number}
          className="group flex flex-col gap-3 px-6 sm:px-8 py-7 sm:py-8 border-b border-rule-light last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 transition-colors duration-200 hover:bg-black hover:text-white"
        >
          <span
            className={`display-sm text-[42px] font-semibold leading-none transition-colors duration-200 group-hover:text-signal ${
              i === steps.length - 1 ? "text-signal" : "text-black"
            }`}
          >
            {step.number}
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.015em]">
            {step.title}
          </span>
          <span className="text-sm leading-[1.55] text-ink-muted tracking-[-0.005em] transition-colors duration-200 group-hover:text-white/70">
            {step.body}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
