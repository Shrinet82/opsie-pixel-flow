const capabilities = [
  {
    title: "Approval routing that holds its order",
    body: "Workflows move a request through your approvers step by step, by role. An approver can only act when it is genuinely their turn, and the decision — including who overrode what — is written down. If a step sits too long, the people responsible get told.",
  },
  {
    title: "Documents that read themselves",
    body: "Every uploaded document is queued for analysis and comes back with its issuer, document type, expiry date, and a confidence score. Contracts get the same treatment for value, key dates, and renewal terms, with high-confidence results filled in for you to confirm.",
  },
  {
    title: "A vendor portal with no account to create",
    body: "Vendors open a secure, expiring link — the token is stored hashed, never in plain text — and upload evidence or answer questionnaires. Partial answers are saved, so nothing is lost when they come back to finish.",
  },
  {
    title: "Questionnaires you build once",
    body: "Assemble security questionnaires from reusable templates and assign them by vendor or risk tier. Responses export as CSV or PDF, and prefill means a vendor is not retyping what they already told you.",
  },
  {
    title: "Risk categories you define",
    body: "Risk assessment categories are set per organisation rather than imposed. Scores recalculate when evidence lands, lapses, or a vendor's position changes, so the tier on the register reflects today rather than onboarding day.",
  },
  {
    title: "Monitors that run without you",
    body: "Scheduled jobs watch compliance expiry, approval SLAs, contract renewals, and vendor engagement. They raise the thing that needs a human before it becomes the thing that needed a human last week.",
  },
  {
    title: "Roles that match how teams actually split",
    body: "Admin, Operations, Compliance, Security, Finance, Legal, and Member ship as presets, and you can define your own on top. Everything is scoped to your organisation and enforced in the database, not just in the interface.",
  },
  {
    title: "An audit trail you did not have to assemble",
    body: "Vendor submissions, approvals, rejections, and lifecycle events are logged as they happen. When someone asks how a vendor was cleared in March, the answer is a record rather than a recollection.",
  },
];

const Capabilities = () => (
  <section className="bg-black text-white px-6 sm:px-12 py-16 sm:py-24">
    <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-14 sm:mb-16">
      <h2
        className="display-sm font-semibold"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", maxWidth: "14ch" }}
      >
        What the platform actually does.
      </h2>
      <p
        className="text-[17px] leading-[1.65] tracking-[-0.01em] text-white/60 self-end"
        style={{ maxWidth: "52ch" }}
      >
        Not a dashboard bolted onto a spreadsheet. The parts below are the
        working machinery of a vendor programme, and they run whether or not
        anyone remembers to open the tool.
      </p>
    </div>

    <div className="border-t border-white/20">
      {capabilities.map((capability, index) => (
        <div
          key={capability.title}
          className="group grid md:grid-cols-[auto_1fr_1.4fr] gap-4 md:gap-10 py-7 border-b border-white/20 items-start transition-colors duration-200 hover:bg-signal md:px-4 md:-mx-4"
        >
          <span className="text-sm font-medium text-signal tabular-nums pt-1 transition-colors duration-200 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[17px] font-semibold tracking-[-0.02em] leading-[1.35]">
            {capability.title}
          </h3>
          <p
            className="text-[16px] leading-[1.6] tracking-[-0.005em] text-white/60 transition-colors duration-200 group-hover:text-white/90"
            style={{ maxWidth: "62ch" }}
          >
            {capability.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Capabilities;
