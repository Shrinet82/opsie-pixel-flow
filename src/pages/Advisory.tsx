import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal, Rule } from "@/components/site/Reveal";

const services = [
  { t: "SOC 2 readiness", b: "Map your controls to the Trust Services Criteria and close the gaps before the auditor arrives." },
  { t: "ISO 27001 readiness", b: "Build the management system, the risk treatment and the Statement of Applicability." },
  { t: "Gap assessment", b: "A plain-spoken read on where you stand today, and what is missing." },
  { t: "Policies & procedures", b: "Policies written for how your team actually works, not copied from a template." },
  {
    t: "Penetration testing",
    id: "pen-testing",
    b: "Web application, API and cloud configuration testing, with a clear report and retest.",
  },
  { t: "Vendor risk programme", b: "Set up your third-party risk process, with Vendorroll if it fits." },
  { t: "Audit support", b: "We sit beside you through auditor requests and evidence." },
];

const steps = ["Intro call", "Gap assessment", "Plan and fixed-scope proposal", "Implementation", "Audit support"];

export default function Advisory() {
  return (
    <Layout path="/advisory">
      <PageHero
        label="Advisory"
        title="Get audit-ready without hiring a compliance team."
        sub="Hands-on SOC 2 and ISO 27001 readiness, security testing and policy work, delivered by a senior team at a fraction of the usual cost."
      >
        <Link to="/contact?topic=advisory" className="btn btn-primary">Talk to us</Link>
      </PageHero>

      <Section ground="light" label="01 · Services">
        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 70}>
              <article id={s.id} className="hair-t h-full scroll-mt-24 py-8 pb-12">
                <p className="label !text-ink/55">0{i + 1}</p>
                <h2 className="h-card mt-5">{s.t}</h2>
                <p className="muted mt-3 text-[15px] leading-relaxed">{s.b}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ground="dark" label="02 · How an engagement runs" grain>
        <ol className="relative m-0 grid list-none gap-10 p-0 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 80}>
              <Rule className="!opacity-30 !bg-gold" delay={i * 80} />
              <p className="label mt-5 text-gold">0{i + 1}</p>
              <p className="h-card mt-3 !text-[1.35rem]">{s}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section ground="light" label="03 · Good to know">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="h-card max-w-[28ch]">
              SOC 2 reports are issued by independent CPA firms. We get you ready and support you through the audit.
            </p>
          </Reveal>
          <Reveal delay={70}>
            <p className="h-card max-w-[28ch]">If you don't need a full programme yet, we'll tell you.</p>
          </Reveal>
        </div>
        <Reveal delay={140} className="mt-16">
          <Rule className="mb-10" />
          <h2 className="h-section">Tell us where you are.</h2>
          <Link to="/contact?topic=advisory" className="btn btn-primary mt-8">Talk to us</Link>
        </Reveal>
      </Section>
    </Layout>
  );
}
