import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useDemo } from "@/components/DemoDialog";
import { Section, PlateHead, Body, PlateFrame, Label } from "@/components/plates";
import { VendorApprovalsPlate } from "@/components/plates/VendorApprovalsPlate";
import { DocumentViewerPlate } from "@/components/plates/DocumentViewerPlate";
import { VendorPortalPlate } from "@/components/plates/VendorPortalPlate";
import { QuestionnaireBuilderPlate } from "@/components/plates/QuestionnaireBuilderPlate";

const lifecycle = [
  {
    n: "01",
    title: "Intake",
    body: "Someone requests a vendor. The request captures what the vendor will do, what data they will touch, and which part of the business owns the relationship — the three things that decide how much scrutiny follows.",
  },
  {
    n: "02",
    title: "Approval",
    body: "The request enters a workflow you designed: a sequence of steps, each assigned to a role. Approvers act in turn and only in turn. Supervisors can watch a pending request without being able to quietly resolve it.",
  },
  {
    n: "03",
    title: "Conversion",
    body: "Once approved, the request becomes a vendor record. Conversion is restricted to the person who raised the intake, so an approval cannot be turned into a live vendor by someone who was never accountable for it.",
  },
  {
    n: "04",
    title: "Evidence",
    body: "The vendor receives a secure link and submits what their tier requires — certifications, reports, insurance, questionnaire answers. Each document is analysed on arrival and filed against the requirement it satisfies.",
  },
  {
    n: "05",
    title: "Review",
    body: "Your team approves, rejects, or asks for a replacement. Rejections say why. Risk is recalculated from what is actually on file rather than from what was promised at onboarding.",
  },
  {
    n: "06",
    title: "Renewal",
    body: "Contract dates and document expiry are tracked from the documents themselves. Renewal tasks and expiry reminders surface before the date, not after it.",
  },
];

const rawFields = [
  { k: "Issuer", v: "Northwind Assurance LLP" },
  { k: "Document type", v: "SOC 2 Type II" },
  { k: "Valid from", v: "2026-02-01" },
  { k: "Expiry date", v: "2027-01-31" },
  { k: "Confidence", v: "0.96" },
];

const VendorRoll = () => {
  const navigate = useNavigate();
  const { open: openDemo } = useDemo();
  const [fieldsCount, setFieldsCount] = useState(5);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFieldsCount(5);
      return;
    }
    const id = setInterval(() => {
      setFieldsCount((c) => (c % 8) + 1);
    }, 850);
    return () => clearInterval(id);
  }, []);

  const activeCount = Math.min(fieldsCount, 5);

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navigation />

      {/* Hero */}
      <section className="bg-ink text-cream gutter pt-[120px] sm:pt-[150px] pb-10 sm:pb-14">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-[30px] h-px bg-signal origin-left animate-draw-x" />
          <span className="text-[14px] font-bold tracking-[-0.02em]">
            VendorRoll
          </span>
        </div>

        <h1 className="t-display m-0 animate-wipe-up max-w-[16ch]">
          Your vendor register,{" "}
          <em className="italic text-signal font-light">current</em> by default.
        </h1>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 sm:gap-14 items-end mt-8 sm:mt-12 animate-rise">
          <button
            onClick={openDemo}
            className="bg-signal text-ink hover:bg-cream text-[14.5px] font-bold tracking-[-0.01em] px-7 py-4 transition-colors cursor-pointer w-fit"
          >
            Book a demo
          </button>
          <p className="m-0 text-[16px] sm:text-[18.5px] leading-[1.55] text-ink-body max-w-[44ch]">
            Third-party risk is a register that decays the moment you stop
            looking at it. VendorRoll is the system that keeps it honest —
            collecting, reading, scoring, and reminding, so the answer is ready
            before anyone asks.
          </p>
        </div>

        {/* Plate 01 */}
        <div className="mt-12 sm:mt-16">
          <PlateFrame
            label="PLATE 01"
            state="VENDOR DETAIL · APPROVALS TAB"
            minHeight={380}
          >
            <VendorApprovalsPlate />
          </PlateFrame>
        </div>
      </section>

      {/* Section 01: Lifecycle (Cream ground) */}
      <Section ground="cream">
        <PlateHead
          numeral="01"
          heading="One lifecycle, end to end."
          ground="cream"
        >
          <div className="mt-8 sm:mt-12 border-t border-cream-rule-strong">
            {lifecycle.map((s) => (
              <div
                key={s.n}
                className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2 items-start py-6 sm:py-7 border-b border-cream-rule"
              >
                <span className="font-display text-[32px] sm:text-[44px] leading-none text-signal-cream shrink-0 w-12">
                  {s.n}
                </span>
                <h3 className="t-subhead m-0 flex-1 basis-[160px] min-w-0 pt-1">
                  {s.title}
                </h3>
                <p className="m-0 text-[15.5px] sm:text-[16px] leading-[1.65] text-cream-body flex-2 basis-[340px] min-w-0">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </PlateHead>
      </Section>

      {/* Section 02: Approvals (Ink ground) */}
      <Section ground="ink">
        <PlateHead
          numeral="02"
          heading="Approvals that cannot be quietly skipped."
          ground="ink"
        >
          <Body ground="ink">
            Most vendor processes fail in the same place: the approval step.
            Not because people ignore it, but because an email chain has no state.
            Two approvers act at once, someone forwards to the wrong person, and
            the record of why a vendor was accepted lives in a thread nobody can
            find eighteen months later.
          </Body>
          <Body ground="ink" dim>
            VendorRoll models the workflow properly. You define the sequence and
            the role responsible for each step. The system tracks which step a
            request is actually on, and an approver can only act when it is their
            turn. Supervisors and admins keep visibility over pending requests
            without gaining the ability to resolve one on someone else's behalf.
          </Body>
          <Body ground="ink" dim>
            When a step exceeds its window, an alert goes to the roles who own it
            rather than sitting silently in a queue. The decision trail — who
            approved, when, on what evidence, and what was overridden — is
            written as it happens.
          </Body>
        </PlateHead>
      </Section>

      {/* Section 03: Documents that read themselves (Cream ground with interactive extraction) */}
      <Section ground="cream">
        <PlateHead
          numeral="03"
          heading="Documents that tell you what they are."
          ground="cream"
        >
          <Body ground="cream">
            A compliance folder full of PDFs is not evidence. It is a filing
            problem that becomes an evidence problem at the worst possible
            moment. The useful facts — who issued this, what kind of document it
            is, and when it stops being valid — are locked inside the file.
          </Body>
          <Body ground="cream" dim>
            Every upload is queued for analysis and comes back with its issuer,
            document type, expiry date, and a confidence score against each.
            Those insights attach to the vendor, which is what lets the register
            know a certificate is about to lapse without a human opening it.
          </Body>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mt-10 sm:mt-12 border-t border-cream-rule-strong pt-7 sm:pt-8">
            {/* Left: Document Frame */}
            <div className="md:pr-8 md:border-r border-cream-rule">
              <PlateFrame
                ground="cream"
                label="PLATE 02 · SOURCE"
                state="soc2-typeii.pdf"
                minHeight={290}
              >
                <DocumentViewerPlate />
              </PlateFrame>
            </div>

            {/* Right: Extracted fields */}
            <div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <Label ground="cream">EXTRACTED</Label>
                <Label ground="cream">{activeCount}/5 FIELDS</Label>
              </div>

              <div className="border-t border-cream-rule">
                {rawFields.map((f, i) => {
                  const visible = i < activeCount;
                  return (
                    <div
                      key={f.k}
                      className="flex items-baseline justify-between gap-4 py-3 border-b border-cream-rule transition-all duration-200"
                      style={{
                        opacity: visible ? 1 : 0.2,
                        transform: visible ? "translateY(0)" : "translateY(4px)",
                      }}
                    >
                      <span className="font-mono text-[11px] text-cream-body">
                        {f.k}
                      </span>
                      <span className="text-[15px] font-medium text-ink">
                        {visible ? f.v : "—"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 h-[3px] bg-[rgba(14,15,18,0.12)]">
                <div
                  className="h-full bg-ink transition-all duration-250"
                  style={{ width: `${(activeCount / 5) * 100}%` }}
                />
              </div>

              <p className="mt-4 text-[15px] leading-[1.6] text-cream-body max-w-[50ch]">
                Where confidence is high enough, fields are filled in for you to
                confirm rather than transcribe.
              </p>
            </div>
          </div>
        </PlateHead>
      </Section>

      {/* Section 04: Vendor portal (Ink ground) */}
      <Section ground="ink">
        <PlateHead
          numeral="04"
          heading="A portal your vendors will actually complete."
          ground="ink"
        >
          <Body ground="ink">
            Every account you ask a vendor to create is a reason for them not to
            respond. VendorRoll sends a secure, expiring link instead. No
            password, no onboarding, no support request three weeks later from
            someone who cannot log in.
          </Body>
          <Body ground="ink" dim>
            Behind that link, access tokens are stored hashed rather than in
            plain text, so a database copy does not hand over working vendor
            access. Vendors see what is being asked of them and how far through
            they are. Partial questionnaire answers are saved, and prefill means
            they are not retyping what they already gave you last quarter.
          </Body>

          <div className="grid sm:grid-cols-2 border border-ink-rule mt-8 sm:mt-12">
            <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-ink-rule">
              <PlateFrame
                label="PLATE 03"
                state="Vendor portal — evidence upload"
                minHeight={250}
              >
                <VendorPortalPlate />
              </PlateFrame>
            </div>
            <div className="p-4 sm:p-5">
              <PlateFrame
                label="PLATE 04"
                state="Questionnaire builder"
                minHeight={250}
              >
                <QuestionnaireBuilderPlate />
              </PlateFrame>
            </div>
          </div>
        </PlateHead>
      </Section>

      {/* Section 05: Scoped & Enforced (Cream ground) */}
      <Section ground="cream">
        <PlateHead
          numeral="05"
          heading="Scoped to your organisation, enforced in the database."
          ground="cream"
        >
          <Body ground="cream">
            Seven roles ship as presets — Admin, Operations, Compliance,
            Security, Finance, Legal, and Member — and you can define your own
            on top when your structure does not match ours. Invitations carry an
            expiry, and pending invites are tracked rather than left as dangling
            links.
          </Body>
          <Body ground="cream" dim>
            Every record is scoped by organisation, and that boundary is enforced
            with row-level security in the database rather than by the interface
            alone. A query that should not return another tenant's vendors does
            not return them, regardless of what the calling code asks for.
          </Body>
          <Body ground="cream" dim>
            The security decisions in here — hashed portal tokens,
            database-enforced tenancy, an append-only record of who did what —
            are the ones we would want to see if we were the ones reviewing us.
          </Body>
        </PlateHead>
      </Section>

      {/* Section 06: Reporting & Search (Ink ground) */}
      <Section ground="ink">
        <PlateHead
          numeral="06"
          heading="Reporting that matches how you are asked."
          ground="ink"
        >
          <Body ground="ink">
            Vendor records, questionnaire responses, and compliance summaries
            export as PDF and CSV. The activity log covers lifecycle events and
            vendor submissions across the organisation, which is usually the
            evidence an auditor actually wants — not a screenshot of a dashboard,
            but a record of decisions with dates attached.
          </Body>
          <Body ground="ink" dim>
            A global search across vendors, contracts, compliance templates, and
            questionnaires sits behind a keyboard shortcut, because during an
            audit the question is rarely "show me everything" and almost always
            "find me this one thing, now".
          </Body>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-ink-rule flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-10">
            <h3 className="font-display font-normal text-[clamp(1.6rem,2.7vw,2.1rem)] leading-[1.15] tracking-[-0.02em] max-w-[16ch] m-0">
              Facing an audit as well as a register?
            </h3>
            <div className="flex-1 basis-[300px]">
              <p className="m-0 text-[15.5px] leading-[1.65] text-ink-muted max-w-[58ch]">
                The platform handles third-party risk. If the wider programme is
                the problem — controls to map, policies to write, an auditor
                already booked — our advisory practice does that work alongside
                it.
              </p>
              <button
                onClick={() => navigate("/consulting")}
                className="mt-4 text-[15px] font-medium text-signal hover:text-cream border-b border-signal/40 hover:border-cream pb-0.5 transition-colors cursor-pointer"
              >
                Explore advisory
              </button>
            </div>
          </div>
        </PlateHead>
      </Section>

      <CTA />
      <Footer />
    </div>
  );
};

export default VendorRoll;
