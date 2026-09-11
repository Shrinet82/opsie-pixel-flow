import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";

const stages = [
  {
    number: "01",
    title: "Gap assessment",
    body: "We map what you have against the SOC 2 Trust Services Criteria or ISO 27001 Annex A, and tell you plainly what is missing.",
  },
  {
    number: "02",
    title: "Policies and evidence",
    body: "We draft what isn't written down and organise what is, so the evidence exists before the auditor asks for it.",
  },
  {
    number: "03",
    title: "Through the audit",
    body: "We stay alongside your team, translating auditor requests into work someone can actually action.",
  },
  {
    number: "04",
    title: "After the certificate",
    body: "Controls get owners and a cadence, so next year's audit is a review rather than a rebuild.",
  },
];

const comparison = [
  {
    label: "What you end up with",
    soc2: "An attestation report from a licensed CPA firm, shared under NDA",
    iso: "A certificate from an accredited certification body, publicly shareable",
  },
  {
    label: "What is being judged",
    soc2: "Your controls against the Trust Services Criteria. Security is mandatory; Availability, Confidentiality, Processing Integrity and Privacy are opted into",
    iso: "Whether you run a working information security management system, with a Statement of Applicability justifying each control",
  },
  {
    label: "How time works",
    soc2: "Type I is a point in time. Type II covers an observation window, commonly three to twelve months",
    iso: "A three-year certification cycle with surveillance audits in between",
  },
  {
    label: "Who usually asks for it",
    soc2: "North American customers and their procurement teams",
    iso: "International and enterprise procurement, and tenders",
  },
  {
    label: "Where teams underestimate it",
    soc2: "Evidence must exist across the whole window. You cannot assemble a Type II retroactively",
    iso: "The management system itself — risk treatment, internal audit, management review — is as heavily examined as the controls",
  },
];

const supplierControls = [
  {
    ref: "CC9.2",
    framework: "SOC 2",
    body: "Requires that you assess and manage the risks associated with vendors and business partners. In practice: a register, a basis for tiering, evidence you actually reviewed them, and proof it happens on a cadence.",
  },
  {
    ref: "A.5.19",
    framework: "ISO 27001",
    body: "Information security in supplier relationships — the policy and process governing how you handle risk from suppliers in the first place.",
  },
  {
    ref: "A.5.20",
    framework: "ISO 27001",
    body: "Security requirements written into supplier agreements, rather than assumed and discovered later to be absent.",
  },
  {
    ref: "A.5.21",
    framework: "ISO 27001",
    body: "Managing security through the ICT supply chain, including the suppliers your suppliers depend on.",
  },
  {
    ref: "A.5.22",
    framework: "ISO 27001",
    body: "Ongoing monitoring, review and change management of supplier services. This is the control that a static spreadsheet cannot satisfy.",
  },
];

const engagements = [
  {
    title: "Readiness assessment",
    body: "A fixed-scope review: where you stand against the framework, what is missing, and what it will realistically take to close. You get the findings whether or not you continue with us.",
  },
  {
    title: "Readiness programme",
    body: "The full path to audit. Gap closure, policy drafting, evidence collection, and working alongside your team until the auditor is satisfied.",
  },
  {
    title: "Ongoing compliance operations",
    body: "Retained support after certification: keeping evidence current, running the internal review cadence, and preparing for surveillance audits and renewals.",
  },
];

const outcomes = [
  "Controls mapped to the exact criteria your auditor will test",
  "Policies written in language your team will actually follow",
  "Evidence collected continuously, not assembled the week before",
  "A named owner and a review cadence for every control",
];

const Consulting = () => {
  const navigate = useNavigate();
  const { open: openDemo } = useDemo();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 sm:pt-40 px-6 sm:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-[30px] h-[3px] bg-black" />
          <span className="text-[15px] font-bold tracking-[-0.025em]">
            Advisory
          </span>
        </div>

        <h1
          className="display font-bold animate-rise"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", maxWidth: "15ch" }}
        >
          Get through SOC 2 and ISO 27001 with your team intact.
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 pt-10 sm:pt-14 pb-14 sm:pb-20 md:items-end">
          <button
            onClick={openDemo}
            className="bg-signal hover:bg-signal-hover text-white text-base font-semibold tracking-[-0.01em] px-[34px] py-[18px] w-fit transition-colors"
          >
            Book a readiness call
          </button>
          <p
            className="text-[17px] sm:text-[19px] tracking-[-0.015em] leading-[1.5]"
            style={{ maxWidth: "42ch" }}
          >
            Gap assessment, policy drafting, evidence preparation, and someone
            in the room with you when the auditor starts asking questions.
          </p>
        </div>
      </section>

      <section className="border-t border-black">
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className="flex flex-col gap-3 px-6 sm:px-8 py-8 sm:py-10 border-b border-rule-light last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span
                className={`display-sm text-[42px] font-semibold leading-none ${
                  i === stages.length - 1 ? "text-signal" : "text-black"
                }`}
              >
                {stage.number}
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.015em]">
                {stage.title}
              </span>
              <span className="text-sm leading-[1.55] text-ink-muted tracking-[-0.005em]">
                {stage.body}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-12 sm:mb-14">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", maxWidth: "16ch" }}
          >
            SOC 2 or ISO 27001?
          </h2>
          <div className="flex flex-col gap-5">
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em]"
              style={{ maxWidth: "56ch" }}
            >
              Most teams are pushed towards one by a customer, a tender, or a
              deal that has stalled. It is worth understanding what you are
              actually signing up for, because the two are not
              interchangeable and the effort lands in different places.
            </p>
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em] text-ink-muted"
              style={{ maxWidth: "56ch" }}
            >
              If both are on the horizon, the work overlaps more than it looks —
              the controls largely coincide, and the difference is in how the
              evidence is packaged and judged.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6 sm:mx-0 px-6 sm:px-0">
          <table className="w-full border-collapse min-w-[720px]">
            <thead>
              <tr className="border-y border-black">
                <th className="text-left text-[14px] font-semibold tracking-[-0.01em] py-4 pr-6 w-[20%] align-bottom">
                  &nbsp;
                </th>
                <th className="text-left text-[17px] font-semibold tracking-[-0.02em] py-4 pr-6 w-[40%] align-bottom">
                  SOC 2
                </th>
                <th className="text-left text-[17px] font-semibold tracking-[-0.02em] py-4 w-[40%] align-bottom">
                  ISO 27001
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-rule-light">
                  <td className="text-[14px] font-medium tracking-[-0.01em] py-6 pr-6 align-top">
                    {row.label}
                  </td>
                  <td className="text-[15px] leading-[1.6] text-ink-muted py-6 pr-6 align-top">
                    {row.soc2}
                  </td>
                  <td className="text-[15px] leading-[1.6] text-ink-muted py-6 align-top">
                    {row.iso}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-black text-white px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-12 sm:mb-14">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", maxWidth: "16ch" }}
          >
            Where third-party risk shows up.
          </h2>
          <p
            className="text-[17px] leading-[1.65] tracking-[-0.01em] text-white/60 self-end"
            style={{ maxWidth: "56ch" }}
          >
            Both frameworks require you to manage the risk your suppliers carry
            into your business — and both are explicit that it is an ongoing
            obligation, not a one-off review at onboarding. These are the
            clauses that tend to generate the most findings.
          </p>
        </div>

        <div className="border-t border-white/20">
          {supplierControls.map((control) => (
            <div
              key={control.ref}
              className="group grid md:grid-cols-[auto_1fr_1.6fr] gap-3 md:gap-10 py-7 border-b border-white/20 items-start transition-colors duration-200 hover:bg-signal md:px-4 md:-mx-4"
            >
              <span className="text-[15px] font-semibold text-signal tabular-nums whitespace-nowrap pt-[2px] transition-colors duration-200 group-hover:text-white">
                {control.ref}
              </span>
              <span className="text-[15px] font-medium text-white/60 pt-[2px] transition-colors duration-200 group-hover:text-white/90">
                {control.framework}
              </span>
              <p
                className="text-[16px] leading-[1.65] tracking-[-0.005em]"
                style={{ maxWidth: "62ch" }}
              >
                {control.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-[15px] leading-[1.6] text-white/50 mt-8"
          style={{ maxWidth: "62ch" }}
        >
          Control references follow the ISO/IEC 27001:2022 revision and the
          AICPA Trust Services Criteria. Your auditor's scope is what governs in
          the end — we work from theirs, not from a template.
        </p>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "18ch" }}
          >
            What audit-ready actually looks like.
          </h2>

          <div className="flex flex-col">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-4 py-5 border-b border-rule-light first:border-t first:border-rule-light"
              >
                <span className="w-[18px] h-[3px] bg-signal mt-[10px] shrink-0" />
                <span
                  className="text-[17px] leading-[1.5] tracking-[-0.01em]"
                  style={{ maxWidth: "44ch" }}
                >
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <h2
          className="display-sm font-semibold mb-12 sm:mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "18ch" }}
        >
          How engagements are shaped.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
          {engagements.map((engagement, i) => (
            <div
              key={engagement.title}
              className={`flex flex-col gap-4 md:px-8 ${i === 0 ? "md:pl-0" : ""} ${
                i === engagements.length - 1 ? "md:pr-0" : "md:border-r border-rule-light"
              }`}
            >
              <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
                {engagement.title}
              </h3>
              <p className="text-[16px] leading-[1.65] tracking-[-0.005em] text-ink-muted">
                {engagement.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-[15px] leading-[1.6] text-ink-muted mt-10"
          style={{ maxWidth: "60ch" }}
        >
          Scope and cost depend on your size, the framework, and how much is
          already in place. We will tell you which of the three you need on the
          first call, including when the answer is that you do not need us yet.
        </p>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", maxWidth: "14ch" }}
          >
            Why bring us in.
          </h2>

          <div className="flex flex-col gap-5">
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em]"
              style={{ maxWidth: "56ch" }}
            >
              We are not consultants who arrive for a project and leave with the
              knowledge. We are the team building VendorRoll, which means we
              deal with vendor evidence, control mapping, and audit trails every
              working day — from both sides of the problem, as the people who
              gather the evidence and the people who build the software that
              organises it.
            </p>
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em] text-ink-muted"
              style={{ maxWidth: "56ch" }}
            >
              That has a practical consequence. We are unusually opinionated
              about evidence you can actually reproduce next year, and
              unusually resistant to policies written to satisfy a checklist
              that nobody in the business will ever follow.
            </p>
            <button
              onClick={() => navigate("/vendorroll")}
              className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors w-fit"
            >
              See the platform
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
