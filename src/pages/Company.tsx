import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Section, PlateHead, Body } from "@/components/plates";

const principles = [
  {
    title: "The boring thing, done properly",
    body: "Vendor compliance is not glamorous work, and the software built for it often shows that. We would rather make the unglamorous part reliable than add another chart to a dashboard nobody opens.",
  },
  {
    title: "Evidence over assertion",
    body: "A control that cannot be evidenced next year is not a control. We build and advise the same way: if you cannot show how you know something, you do not really know it.",
  },
  {
    title: "Automate the chase, not the judgement",
    body: "Software should do the remembering, the collecting, and the reminding. Whether a vendor is acceptable is a decision a person should make, with the facts in front of them.",
  },
  {
    title: "Say when you are not needed",
    body: "Some teams asking about SOC 2 do not need a programme yet — they need two policies and a calendar reminder. Telling them so costs us an engagement and earns the next one.",
  },
];

const Company = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navigation />

      {/* Hero */}
      <section className="bg-ink text-cream gutter pt-[120px] sm:pt-[150px] pb-10 sm:pb-16">
        <h1 className="t-display m-0 animate-wipe-up max-w-[15ch]">
          For everything you do{" "}
          <em className="italic text-signal font-light">twice</em>.
        </h1>

        <p className="m-0 mt-8 sm:mt-12 text-[16px] sm:text-[18.5px] leading-[1.55] text-ink-body max-w-[46ch] animate-rise">
          Oopsie is a product company. We build VendorRoll, and we advise teams
          working towards SOC 2 and ISO 27001.
        </p>
      </section>

      {/* Section 01: How we ended up in compliance (Cream ground) */}
      <Section ground="cream">
        <PlateHead
          numeral="01"
          heading="How we ended up in compliance."
          ground="cream"
        >
          <div className="flex flex-col gap-5 mt-2">
            <p className="m-0 text-[15.5px] sm:text-[17px] leading-[1.65] text-ink max-w-[56ch]">
              Oopsie started out building automations for small businesses and
              operations teams — the repetitive, manual work that quietly eats a
              week nobody has to spare. Invoice chasing, onboarding steps,
              report assembly. That work was useful, and it taught us something
              more useful still: where the worst of it lives.
            </p>
            <p className="m-0 text-[15.5px] sm:text-[17px] leading-[1.65] text-ink max-w-[56ch]">
              Vendor risk and compliance kept coming back as the sharpest
              version of the problem. It is repetitive, it is unavoidable, and
              unlike most busywork it is genuinely expensive to get wrong.
              Chasing a supplier for a certificate that expired last month is
              not work anyone should be doing by hand — and yet almost everyone
              is, in a spreadsheet, until an auditor asks.
            </p>
            <p className="m-0 text-[15.5px] sm:text-[17px] leading-[1.65] text-ink max-w-[56ch]">
              So we stopped taking general automation work and built VendorRoll
              instead. Building it meant learning the frameworks properly, which
              is how the advisory side started: teams kept asking us the
              questions we had already had to answer for ourselves.
            </p>
            <p className="m-0 text-[15.5px] sm:text-[17px] leading-[1.65] text-cream-body max-w-[56ch]">
              Same belief behind both: the things you do twice are the things
              worth building properly. And compliance is the one you cannot
              afford to get wrong even once.
            </p>
          </div>
        </PlateHead>
      </Section>

      {/* Section 02: How we work (Ink ground) */}
      <Section ground="ink">
        <PlateHead numeral="02" heading="How we work." ground="ink">
          <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-0 mt-8 sm:mt-10 border-t border-ink-rule">
            {principles.map((p) => (
              <div
                key={p.title}
                className="py-7 sm:py-8 border-b border-ink-rule flex flex-col gap-3"
              >
                <h3 className="t-subhead m-0">{p.title}</h3>
                <p className="m-0 text-[15.5px] sm:text-[16px] leading-[1.6] text-ink-muted max-w-[50ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </PlateHead>
      </Section>

      {/* Dual Platform & Advisory Cards */}
      <section className="bg-ink text-cream border-t border-ink-rule">
        <div className="grid md:grid-cols-2">
          <div
            onClick={() => navigate("/vendorroll")}
            className="p-8 sm:p-12 md:border-r border-b md:border-b-0 border-ink-rule transition-colors duration-150 hover:bg-signal hover:text-ink cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="w-[30px] h-[3px] bg-current inline-block" />
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                VendorRoll
              </span>
            </div>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.55] max-w-[42ch]">
              The platform. Vendor intake, evidence, questionnaires, renewals,
              and an audit trail behind all of it.
            </p>
            <span className="inline-block mt-5 text-[15px] font-medium border-b border-current pb-0.5">
              Explore VendorRoll
            </span>
          </div>

          <div
            onClick={() => navigate("/consulting")}
            className="p-8 sm:p-12 transition-colors duration-150 hover:bg-signal hover:text-ink cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="w-[30px] h-[3px] bg-current inline-block" />
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                Advisory
              </span>
            </div>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.55] max-w-[42ch]">
              The people. SOC 2 and ISO 27001 readiness, from gap assessment
              through to the audit itself.
            </p>
            <span className="inline-block mt-5 text-[15px] font-medium border-b border-current pb-0.5">
              Explore advisory
            </span>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Company;
