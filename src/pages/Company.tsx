import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 sm:pt-40 px-6 sm:px-12">
        <h1
          className="display font-bold animate-rise"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", maxWidth: "15ch" }}
        >
          For everything you do twice.
        </h1>

        <p
          className="text-[17px] sm:text-[19px] tracking-[-0.015em] leading-[1.5] pt-10 sm:pt-14 pb-14 sm:pb-20"
          style={{ maxWidth: "46ch" }}
        >
          Oopsie is a product company. We build VendorRoll, and we advise teams
          working towards SOC 2 and ISO 27001.
        </p>
      </section>

      <section className="border-t border-black px-6 sm:px-12 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <h2
            className="display-sm font-semibold"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "16ch" }}
          >
            How we ended up in compliance.
          </h2>

          <div className="flex flex-col gap-6">
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em]"
              style={{ maxWidth: "56ch" }}
            >
              Oopsie started out building automations for small businesses and
              operations teams — the repetitive, manual work that quietly eats a
              week nobody has to spare. Invoice chasing, onboarding steps,
              report assembly. That work was useful, and it taught us something
              more useful still: where the worst of it lives.
            </p>
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em]"
              style={{ maxWidth: "56ch" }}
            >
              Vendor risk and compliance kept coming back as the sharpest
              version of the problem. It is repetitive, it is unavoidable, and
              unlike most busywork it is genuinely expensive to get wrong.
              Chasing a supplier for a certificate that expired last month is
              not work anyone should be doing by hand — and yet almost everyone
              is, in a spreadsheet, until an auditor asks.
            </p>
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em]"
              style={{ maxWidth: "56ch" }}
            >
              So we stopped taking general automation work and built VendorRoll
              instead. Building it meant learning the frameworks properly, which
              is how the advisory side started: teams kept asking us the
              questions we had already had to answer for ourselves.
            </p>
            <p
              className="text-[17px] leading-[1.65] tracking-[-0.01em] text-ink-muted"
              style={{ maxWidth: "56ch" }}
            >
              Same belief behind both: the things you do twice are the things
              worth building properly. And compliance is the one you cannot
              afford to get wrong even once.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 sm:px-12 py-16 sm:py-24">
        <h2
          className="display-sm font-semibold mb-12 sm:mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "18ch" }}
        >
          How we work.
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 border-t border-white/20">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="py-8 border-b border-white/20 flex flex-col gap-3"
            >
              <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                {principle.title}
              </h3>
              <p
                className="text-[16px] leading-[1.6] tracking-[-0.005em] text-white/60"
                style={{ maxWidth: "50ch" }}
              >
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black">
        <div className="grid md:grid-cols-2">
          <button
            onClick={() => navigate("/vendorroll")}
            className="text-left px-6 sm:px-12 py-12 sm:py-16 md:border-r border-rule-light hover:bg-signal hover:text-white transition-colors group"
          >
            <span className="block text-[15px] font-bold tracking-[-0.025em] mb-4">
              VendorRoll
            </span>
            <span
              className="block text-[17px] leading-[1.55] tracking-[-0.01em] mb-6"
              style={{ maxWidth: "42ch" }}
            >
              The platform. Vendor intake, evidence, questionnaires, renewals,
              and an audit trail behind all of it.
            </span>
            <span className="text-[15px] font-medium tracking-[-0.01em] text-signal group-hover:text-white transition-colors">
              Explore VendorRoll
            </span>
          </button>

          <button
            onClick={() => navigate("/consulting")}
            className="text-left px-6 sm:px-12 py-12 sm:py-16 hover:bg-signal hover:text-white transition-colors group border-t md:border-t-0 border-rule-light"
          >
            <span className="block text-[15px] font-bold tracking-[-0.025em] mb-4">
              Advisory
            </span>
            <span
              className="block text-[17px] leading-[1.55] tracking-[-0.01em] mb-6"
              style={{ maxWidth: "42ch" }}
            >
              The people. SOC 2 and ISO 27001 readiness, from gap assessment
              through to the audit itself.
            </span>
            <span className="text-[15px] font-medium tracking-[-0.01em] text-signal group-hover:text-white transition-colors">
              Explore advisory
            </span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
