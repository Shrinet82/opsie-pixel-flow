const symptoms = [
  {
    title: "The register is a spreadsheet",
    body: "It was accurate the week someone built it. Since then vendors have been added in three other places — a procurement thread, a signed order form, somebody's inbox — and none of them write back to the sheet.",
  },
  {
    title: "Evidence has a shelf life nobody watches",
    body: "A SOC 2 report covers a fixed window. Insurance certificates lapse. Pen tests age. The document sitting in your folder was valid when it was filed, and nothing tells you the day that stopped being true.",
  },
  {
    title: "Chasing is manual, so it slips",
    body: "Someone has to notice, find the right contact, send the email, and remember to follow up. That job has no deadline attached to it, which is exactly why it loses to work that does.",
  },
  {
    title: "The audit turns into an excavation",
    body: "When the request finally lands, the work is not assessment — it is archaeology. Reconstructing who approved which vendor, on what basis, from threads and memory.",
  },
];

const Problem = () => (
  <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
    <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-14 sm:mb-16">
      <h2
        className="display-sm font-semibold"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", maxWidth: "16ch" }}
      >
        Vendor registers decay quietly.
      </h2>

      <div className="flex flex-col gap-5">
        <p
          className="text-[17px] leading-[1.65] tracking-[-0.01em]"
          style={{ maxWidth: "56ch" }}
        >
          Nobody decides to let third-party risk drift. It happens because the
          register is a snapshot of a moving thing, and keeping it accurate is
          somebody's fourth priority on a good week.
        </p>
        <p
          className="text-[17px] leading-[1.65] tracking-[-0.01em] text-ink-muted"
          style={{ maxWidth: "56ch" }}
        >
          The cost only shows up later — during an audit, a security review, or
          the week a supplier has an incident and you need to know what they
          held and what they had agreed to.
        </p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0 border-t border-rule-light">
      {symptoms.map((symptom) => (
        <div
          key={symptom.title}
          className="py-8 border-b border-rule-light flex flex-col gap-3"
        >
          <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
            {symptom.title}
          </h3>
          <p
            className="text-[16px] leading-[1.6] tracking-[-0.005em] text-ink-muted"
            style={{ maxWidth: "50ch" }}
          >
            {symptom.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Problem;
