import { Section, PlateHead, Body } from "@/components/plates";

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
  <Section ground="cream">
    <PlateHead numeral="05" heading="Vendor registers decay quietly." ground="cream">
      <Body ground="cream">
        Nobody decides to let third-party risk drift. It happens because the
        register is a snapshot of a moving thing, and keeping it accurate is
        somebody's fourth priority on a good week.
      </Body>
      <Body ground="cream" dim>
        The cost only shows up later — during an audit, a security review, or
        the week a supplier has an incident and you need to know what they held
        and what they had agreed to.
      </Body>
    </PlateHead>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-0 mt-14 border-t border-cream-rule">
      {symptoms.map((symptom) => (
        <div
          key={symptom.title}
          className="py-8 border-b border-cream-rule flex flex-col gap-3"
        >
          <h3 className="t-subhead m-0">{symptom.title}</h3>
          <p className="text-[15px] leading-[1.65] text-cream-body m-0">
            {symptom.body}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Problem;
