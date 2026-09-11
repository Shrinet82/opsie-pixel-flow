import { Section, PlateHead, Body, PlateFrame } from "@/components/plates";
import { VendorPortalPlate } from "@/components/plates/VendorPortalPlate";
import { QuestionnaireBuilderPlate } from "@/components/plates/QuestionnaireBuilderPlate";
import { AuditTrailPlate } from "@/components/plates/AuditTrailPlate";

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
  <Section ground="ink" className="pb-0">
    <PlateHead
      numeral="06"
      heading="What the platform actually does."
      ground="ink"
    >
      <Body ground="ink" dim>
        Not a dashboard bolted onto a spreadsheet. The parts below are the
        working machinery of a vendor programme, and they run whether or not
        anyone remembers to open the tool.
      </Body>
    </PlateHead>

    <div className="mt-10 sm:mt-14 border-t border-ink-rule">
      {capabilities.map((capability, index) => (
        <div
          key={capability.title}
          className="group flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2 items-start py-5 sm:py-6 px-4 -mx-4 border-b border-ink-rule transition-colors duration-150 hover:bg-signal hover:text-ink cursor-default"
        >
          <span className="font-mono text-[12.5px] text-signal group-hover:text-ink pt-0.5 shrink-0 transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="t-subhead m-0 flex-1 basis-[210px] min-w-0">
            {capability.title}
          </h3>
          <p className="m-0 text-[15.5px] sm:text-[16px] leading-[1.6] text-ink-muted group-hover:text-ink flex-2 basis-[320px] min-w-0 transition-colors">
            {capability.body}
          </p>
        </div>
      ))}
    </div>

    {/* Plates 02, 03, 04 preview strip */}
    <div className="grid grid-cols-1 md:grid-cols-3 border border-ink-rule mt-14 sm:mt-20 mb-10 sm:mb-16">
      <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-ink-rule">
        <PlateFrame
          label="PLATE 02"
          state="External vendor portal"
          minHeight={260}
        >
          <VendorPortalPlate />
        </PlateFrame>
      </div>
      <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-ink-rule">
        <PlateFrame
          label="PLATE 03"
          state="Questionnaire builder"
          minHeight={260}
        >
          <QuestionnaireBuilderPlate />
        </PlateFrame>
      </div>
      <div className="p-4 sm:p-5">
        <PlateFrame
          label="PLATE 04"
          state="Audit trail"
          minHeight={260}
        >
          <AuditTrailPlate />
        </PlateFrame>
      </div>
    </div>
  </Section>
);

export default Capabilities;
