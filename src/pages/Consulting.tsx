import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useDemo } from "@/components/DemoDialog";
import { Section, PlateHead, Body } from "@/components/plates";

const stages = [
  {
    n: "01",
    title: "Gap assessment",
    body: "We map what you have against the SOC 2 Trust Services Criteria or ISO 27001 Annex A, and tell you plainly what is missing.",
    color: "text-cream",
  },
  {
    n: "02",
    title: "Policies and evidence",
    body: "We draft what isn't written down and organise what is, so the evidence exists before the auditor asks for it.",
    color: "text-cream",
  },
  {
    n: "03",
    title: "Through the audit",
    body: "We stay alongside your team, translating auditor requests into work someone can actually action.",
    color: "text-cream",
  },
  {
    n: "04",
    title: "After the certificate",
    body: "Controls get owners and a cadence, so next year's audit is a review rather than a rebuild.",
    color: "text-signal",
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

const controls = [
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

const outcomes = [
  "Controls mapped to the exact criteria your auditor will test",
  "Policies written in language your team will actually follow",
  "Evidence collected continuously, not assembled the week before",
  "A named owner and a review cadence for every control",
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

const Consulting = () => {
  const navigate = useNavigate();
  const { open: openDemo } = useDemo();

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navigation />

      {/* Hero */}
      <section className="bg-ink text-cream gutter pt-[120px] sm:pt-[150px] pb-10 sm:pb-14">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-[30px] h-px bg-cream origin-left animate-draw-x" />
          <span className="text-[14px] font-bold tracking-[-0.02em]">
            Advisory
          </span>
        </div>

        <h1 className="t-display m-0 animate-wipe-up max-w-[15ch]">
          Get through SOC 2 and ISO 27001 with your{" "}
          <em className="italic text-signal font-light">team intact</em>.
        </h1>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 sm:gap-14 items-end mt-8 sm:mt-12 animate-rise">
          <button
            onClick={openDemo}
            className="bg-signal text-ink hover:bg-cream text-[14.5px] font-bold tracking-[-0.01em] px-7 py-4 transition-colors cursor-pointer w-fit"
          >
            Book a readiness call
          </button>
          <p className="m-0 text-[16px] sm:text-[18.5px] leading-[1.55] text-ink-body max-w-[42ch]">
            Gap assessment, policy drafting, evidence preparation, and someone in
            the room with you when the auditor starts asking questions.
          </p>
        </div>
      </section>

      {/* 4 Stages Grid */}
      <section className="bg-ink text-cream border-t border-ink-rule">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-3 px-[var(--gutter)] py-8 sm:py-9 border-b lg:border-b-0 lg:border-r border-ink-rule last:border-r-0 hover:bg-ink-well transition-colors duration-150"
            >
              <span
                className={`font-display text-[44px] sm:text-[58px] leading-none ${s.color}`}
              >
                {s.n}
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.015em]">
                {s.title}
              </span>
              <span className="text-[14px] leading-[1.6] text-ink-muted">
                {s.body}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02: SOC 2 or ISO 27001? (Cream ground) */}
      <Section ground="cream">
        <PlateHead
          numeral="02"
          heading="SOC 2 or ISO 27001?"
          ground="cream"
        >
          <Body ground="cream">
            Most teams are pushed towards one by a customer, a tender, or a deal
            that has stalled. It is worth understanding what you are actually
            signing up for, because the two are not interchangeable and the
            effort lands in different places.
          </Body>
          <Body ground="cream" dim>
            If both are on the horizon, the work overlaps more than it looks —
            the controls largely coincide, and the difference is in how the
            evidence is packaged and judged.
          </Body>

          {/* Wrapping rows for 390px responsiveness */}
          <div className="mt-10 sm:mt-14 border-t border-cream-rule-strong">
            {comparison.map((c) => (
              <div
                key={c.label}
                className="flex flex-wrap gap-4 sm:gap-8 items-start py-6 border-b border-cream-rule"
              >
                <span className="flex-1 basis-[140px] text-[14px] font-semibold tracking-[-0.01em] min-w-0">
                  {c.label}
                </span>
                <div className="flex-2 basis-[240px] min-w-0">
                  <p className="m-0 mb-1.5 font-mono text-[10px] tracking-[0.12em] text-signal-cream font-bold">
                    SOC 2
                  </p>
                  <p className="m-0 text-[15px] leading-[1.6] text-cream-body">
                    {c.soc2}
                  </p>
                </div>
                <div className="flex-2 basis-[240px] min-w-0">
                  <p className="m-0 mb-1.5 font-mono text-[10px] tracking-[0.12em] text-signal-cream font-bold">
                    ISO 27001
                  </p>
                  <p className="m-0 text-[15px] leading-[1.6] text-cream-body">
                    {c.iso}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PlateHead>
      </Section>

      {/* Section 03: Third-Party Risk Clauses (Ink ground) */}
      <Section ground="ink">
        <PlateHead
          numeral="03"
          heading="Where third-party risk shows up."
          ground="ink"
        >
          <Body ground="ink" dim>
            Both frameworks require you to manage the risk your suppliers carry
            into your business — and both are explicit that it is an ongoing
            obligation, not a one-off review at onboarding. These are the clauses
            that tend to generate the most findings.
          </Body>

          <div className="mt-8 sm:mt-12 border-t border-ink-rule">
            {controls.map((k) => (
              <div
                key={k.ref}
                className="group flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2 items-start py-5 sm:py-6 px-4 -mx-4 border-b border-ink-rule transition-colors duration-150 hover:bg-signal hover:text-ink cursor-default"
              >
                <span className="font-mono text-[13.5px] font-bold text-signal group-hover:text-ink pt-0.5 shrink-0 transition-colors">
                  {k.ref}
                </span>
                <span className="text-[14px] font-medium opacity-70 group-hover:opacity-100 pt-0.5 shrink-0 w-24 transition-opacity">
                  {k.framework}
                </span>
                <p className="m-0 text-[15.5px] sm:text-[16px] leading-[1.65] text-ink-muted group-hover:text-ink flex-2 basis-[320px] min-w-0 transition-colors">
                  {k.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-[14.5px] leading-[1.6] text-ink-faint max-w-[62ch]">
            Control references follow the ISO/IEC 27001:2022 revision and the
            AICPA Trust Services Criteria. Your auditor's scope is what governs
            in the end — we work from theirs, not from a template.
          </p>
        </PlateHead>
      </Section>

      {/* Section 04: What audit-ready actually looks like (Cream ground) */}
      <Section ground="cream">
        <PlateHead
          numeral="04"
          heading="What audit-ready actually looks like."
          ground="cream"
        >
          <div className="mt-8 sm:mt-10 border-t border-cream-rule-strong">
            {outcomes.map((text) => (
              <div
                key={text}
                className="flex items-baseline gap-4 py-5 border-b border-cream-rule"
              >
                <span className="w-[18px] h-[3px] bg-signal-cream shrink-0 self-center" />
                <span className="text-[16.5px] sm:text-[17px] leading-[1.5] text-ink max-w-[48ch]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </PlateHead>
      </Section>

      {/* Section 05: How engagements are shaped (Ink ground) */}
      <Section ground="ink">
        <PlateHead
          numeral="05"
          heading="How engagements are shaped."
          ground="ink"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 sm:mt-12 border-t border-ink-rule">
            {engagements.map((e, index) => (
              <div
                key={e.title}
                className={`py-6 sm:py-8 md:pr-8 flex flex-col gap-3 ${
                  index < engagements.length - 1
                    ? "border-b md:border-b-0 md:border-r border-ink-rule"
                    : ""
                }`}
              >
                <h3 className="t-subhead m-0">{e.title}</h3>
                <p className="m-0 text-[15.5px] leading-[1.65] text-ink-muted">
                  {e.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-[14.5px] leading-[1.6] text-ink-faint max-w-[60ch]">
            Scope and cost depend on your size, the framework, and how much is
            already in place. We will tell you which of the three you need on the
            first call, including when the answer is that you do not need us yet.
          </p>
        </PlateHead>
      </Section>

      {/* Section 06: Why bring us in (Cream ground) */}
      <Section ground="cream">
        <PlateHead numeral="06" heading="Why bring us in." ground="cream">
          <Body ground="cream">
            We are not consultants who arrive for a project and leave with the
            knowledge. We are the team building VendorRoll, which means we deal
            with vendor evidence, control mapping, and audit trails every working
            day — from both sides of the problem, as the people who gather the
            evidence and the people who build the software that organises it.
          </Body>
          <Body ground="cream" dim>
            That has a practical consequence. We are unusually opinionated about
            evidence you can actually reproduce next year, and unusually
            resistant to policies written to satisfy a checklist that nobody in
            the business will ever follow.
          </Body>
          <button
            onClick={() => navigate("/vendorroll")}
            className="mt-4 text-[15px] font-medium text-signal-cream hover:text-ink border-b border-signal-cream/40 hover:border-ink pb-0.5 transition-colors cursor-pointer w-fit"
          >
            See the platform
          </button>
        </PlateHead>
      </Section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Consulting;
