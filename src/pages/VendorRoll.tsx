import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";

const lifecycle = [
  {
    number: "01",
    title: "Intake",
    body: "Someone requests a vendor. The request captures what the vendor will do, what data they will touch, and which part of the business owns the relationship — the three things that decide how much scrutiny follows.",
  },
  {
    number: "02",
    title: "Approval",
    body: "The request enters a workflow you designed: a sequence of steps, each assigned to a role. Approvers act in turn and only in turn. Supervisors can watch a pending request without being able to quietly resolve it.",
  },
  {
    number: "03",
    title: "Conversion",
    body: "Once approved, the request becomes a vendor record. Conversion is restricted to the person who raised the intake, so an approval cannot be turned into a live vendor by someone who was never accountable for it.",
  },
  {
    number: "04",
    title: "Evidence",
    body: "The vendor receives a secure link and submits what their tier requires — certifications, reports, insurance, questionnaire answers. Each document is analysed on arrival and filed against the requirement it satisfies.",
  },
  {
    number: "05",
    title: "Review",
    body: "Your team approves, rejects, or asks for a replacement. Rejections say why. Risk is recalculated from what is actually on file rather than from what was promised at onboarding.",
  },
  {
    number: "06",
    title: "Renewal",
    body: "Contract dates and document expiry are tracked from the documents themselves. Renewal tasks and expiry reminders surface before the date, not after it.",
  },
];

const Section = ({
  heading,
  children,
  dark = false,
}: {
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section
    className={`px-6 sm:px-12 py-16 sm:py-24 ${dark ? "bg-black text-white" : "border-t border-black"}`}
  >
    <div className="grid md:grid-cols-2 gap-10 md:gap-20">
      <h2
        className="display-sm font-semibold"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", maxWidth: "15ch" }}
      >
        {heading}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  </section>
);

const P = ({
  children,
  muted,
  dark,
}: {
  children: React.ReactNode;
  muted?: boolean;
  dark?: boolean;
}) => (
  <p
    className={`text-[17px] leading-[1.65] tracking-[-0.01em] ${
      muted ? (dark ? "text-white/60" : "text-ink-muted") : ""
    }`}
    style={{ maxWidth: "58ch" }}
  >
    {children}
  </p>
);

const VendorRoll = () => {
  const navigate = useNavigate();
  const { open: openDemo } = useDemo();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 sm:pt-40 px-6 sm:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-[30px] h-[3px] bg-signal" />
          <span className="text-[15px] font-bold tracking-[-0.025em]">
            VendorRoll
          </span>
        </div>

        <h1
          className="display font-bold animate-rise"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", maxWidth: "16ch" }}
        >
          Your vendor register, current by default.
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 pt-10 sm:pt-14 pb-14 sm:pb-20 md:items-end">
          <button
            onClick={openDemo}
            className="bg-signal hover:bg-signal-hover text-white text-base font-semibold tracking-[-0.01em] px-[34px] py-[18px] w-fit transition-colors"
          >
            Book a demo
          </button>
          <p
            className="text-[17px] sm:text-[19px] tracking-[-0.015em] leading-[1.5]"
            style={{ maxWidth: "42ch" }}
          >
            Third-party risk is a register that decays the moment you stop
            looking at it. VendorRoll is the system that keeps it honest —
            collecting, reading, scoring, and reminding, so the answer is ready
            before anyone asks.
          </p>
        </div>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <h2
          className="display-sm font-semibold mb-14 sm:mb-16"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.75rem)", maxWidth: "18ch" }}
        >
          One lifecycle, end to end.
        </h2>

        <div className="border-t border-rule-light">
          {lifecycle.map((stage) => (
            <div
              key={stage.number}
              className="grid md:grid-cols-[auto_1fr_1.5fr] gap-4 md:gap-10 py-8 border-b border-rule-light items-start"
            >
              <span className="display-sm text-[32px] font-semibold text-signal leading-none tabular-nums">
                {stage.number}
              </span>
              <h3 className="text-[19px] font-semibold tracking-[-0.02em] pt-1">
                {stage.title}
              </h3>
              <p
                className="text-[16px] leading-[1.65] tracking-[-0.005em] text-ink-muted"
                style={{ maxWidth: "62ch" }}
              >
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section heading="Approvals that cannot be quietly skipped.">
        <P>
          Most vendor processes fail in the same place: the approval step. Not
          because people ignore it, but because an email chain has no state. Two
          approvers act at once, someone forwards to the wrong person, and the
          record of why a vendor was accepted lives in a thread nobody can find
          eighteen months later.
        </P>
        <P muted>
          VendorRoll models the workflow properly. You define the sequence and
          the role responsible for each step. The system tracks which step a
          request is actually on, and an approver can only act when it is their
          turn. Supervisors and admins keep visibility over pending requests
          without gaining the ability to resolve one on someone else's behalf.
        </P>
        <P muted>
          When a step exceeds its window, an alert goes to the roles who own it
          rather than sitting silently in a queue. The decision trail — who
          approved, when, on what evidence, and what was overridden — is written
          as it happens.
        </P>
      </Section>

      <Section heading="Documents that tell you what they are.">
        <P>
          A compliance folder full of PDFs is not evidence. It is a filing
          problem that becomes an evidence problem at the worst possible moment.
          The useful facts — who issued this, what kind of document it is, and
          when it stops being valid — are locked inside the file.
        </P>
        <P muted>
          Every upload is queued for analysis and comes back with its issuer,
          document type, expiry date, and a confidence score against each. Those
          insights attach to the vendor, which is what lets the register know a
          certificate is about to lapse without a human opening it.
        </P>
        <P muted>
          Contracts get their own extraction pass for value, key dates, and
          renewal terms. Where confidence is high enough, fields are filled in
          for you to confirm rather than transcribe. The processing runs as a
          proper job queue — locked, retried on failure, and recovered if a
          worker dies mid-document — because the alternative is silent gaps in
          the register.
        </P>
      </Section>

      <Section heading="A portal your vendors will actually complete.">
        <P>
          Every account you ask a vendor to create is a reason for them not to
          respond. VendorRoll sends a secure, expiring link instead. No
          password, no onboarding, no support request three weeks later from
          someone who cannot log in.
        </P>
        <P muted>
          Behind that link, access tokens are stored hashed rather than in plain
          text, so a database copy does not hand over working vendor access.
          Vendors see what is being asked of them and how far through they are.
          Partial questionnaire answers are saved, and prefill means they are
          not retyping what they already gave you last quarter.
        </P>
        <P muted>
          Submissions are logged as audit events on arrival — so the record of
          what a vendor sent, and when, exists independently of anyone
          remembering to note it.
        </P>
      </Section>

      <Section heading="Scoped to your organisation, enforced in the database." dark>
        <P>
          Seven roles ship as presets — Admin, Operations, Compliance, Security,
          Finance, Legal, and Member — and you can define your own on top when
          your structure does not match ours. Invitations carry an expiry, and
          pending invites are tracked rather than left as dangling links.
        </P>
        <P muted dark>
          Every record is scoped by organisation, and that boundary is enforced
          with row-level security in the database rather than by the interface
          alone. A query that should not return another tenant's vendors does
          not return them, regardless of what the calling code asks for.
        </P>
        <P muted dark>
          The security decisions in here — hashed portal tokens,
          database-enforced tenancy, an append-only record of who did what — are
          the ones we would want to see if we were the ones reviewing us.
        </P>
      </Section>

      <Section heading="Reporting that matches how you are asked.">
        <P>
          Vendor records, questionnaire responses, and compliance summaries
          export as PDF and CSV. The activity log covers lifecycle events and
          vendor submissions across the organisation, which is usually the
          evidence an auditor actually wants — not a screenshot of a dashboard,
          but a record of decisions with dates attached.
        </P>
        <P muted>
          A global search across vendors, contracts, compliance templates, and
          questionnaires sits behind a keyboard shortcut, because during an
          audit the question is rarely "show me everything" and almost always
          "find me this one thing, now".
        </P>
      </Section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", maxWidth: "16ch" }}
          >
            Facing an audit as well as a register?
          </h2>
          <div className="flex flex-col gap-5">
            <P muted>
              The platform handles third-party risk. If the wider programme is
              the problem — controls to map, policies to write, an auditor
              already booked — our advisory practice does that work alongside
              it.
            </P>
            <button
              onClick={() => navigate("/consulting")}
              className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors w-fit"
            >
              Explore advisory
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VendorRoll;
