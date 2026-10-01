import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal, Rule } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/Cta";
import { VENDORROLL_URL } from "@/data/links";

const beliefs = [
  { t: "The boring thing, done properly.", b: "Compliance is not glamorous work. We would rather make the unglamorous part reliable than add another chart nobody opens." },
  { t: "Automate the chase, not the judgement.", b: "Software should do the remembering, collecting and reminding. Whether a vendor is acceptable is a call for a person with the facts in front of them." },
  { t: "Evidence over assertion.", b: "A control you cannot evidence next year is not a control. If you cannot show how you know something, you do not really know it." },
  { t: "Say when you're not needed.", b: "Some teams need two policies and a calendar reminder. Saying so costs us an engagement and earns the next one." },
];

export default function Company() {
  return (
    <Layout path="/company">
      <PageHero
        label="Company"
        title="For everything you do twice."
        sub="Oopsie is a B2B company building focused software and running hands-on compliance work for growing businesses."
      />

      <Section ground="light" label="01 · Our story">
        <div className="max-w-[62ch] space-y-6 text-[1.0625rem] leading-[1.7] sm:text-[1.1875rem]">
          <Reveal>
            <p>
              Oopsie started out automating the repetitive work that quietly eats a small team's week: invoice chasing,
              onboarding steps, report assembly. It taught us where the worst of that work lives.
            </p>
          </Reveal>
          <Reveal delay={70}>
            <p>
              Compliance kept coming back as the sharpest version of the problem. It is repetitive, unavoidable and
              expensive to get wrong. So we built Vendorroll to take the chasing out of vendor compliance, and learned
              the frameworks properly while doing it.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              That is how advisory began: teams kept asking us questions we had already answered for ourselves.
              Ledgerline is next, for billing that explains itself.
            </p>
          </Reveal>
        </div>
        {/* TODO(owner): optional founder line or photo. Do not invent team members. */}
      </Section>

      <Section ground="dark" label="02 · What we believe" grain>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {beliefs.map((b, i) => (
            <Reveal key={b.t} delay={(i % 2) * 70}>
              <Rule className="mb-6" />
              <h3 className="h-card">{b.t}</h3>
              <p className="muted mt-3 max-w-[44ch] text-[15px] leading-relaxed">{b.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ground="light" label="03 · Where we work">
        <Reveal>
          <p className="h-section max-w-[24ch]">
            Our team is based in India and works with companies everywhere.
          </p>
          <p className="lede muted mt-6">That's how we keep quality high and prices fair.</p>
        </Reveal>
      </Section>

      <Section ground="dark" label="04 · What we offer" grain>
        <ul className="m-0 list-none p-0">
          {[
            { n: "Vendorroll", href: VENDORROLL_URL, ext: true, tag: "Live", tone: "text-vendorroll-dark" },
            { n: "Ledgerline", href: "/ledgerline", tag: "Soon", tone: "text-copper" },
            { n: "Advisory", href: "/advisory", tag: "Live", tone: "text-gold" },
          ].map((o, i) => (
            <Reveal as="li" key={o.n} delay={i * 70}>
              <Rule />
              {o.ext ? (
                <a href={o.href} className="group flex items-baseline justify-between py-6 sm:py-8">
                  <span className="h-section">{o.n} <ArrowUpRight className="inline" size={26} aria-hidden /></span>
                  <span className={`label ${o.tone}`}>{o.tag}</span>
                </a>
              ) : (
                <Link to={o.href} className="group flex items-baseline justify-between py-6 sm:py-8">
                  <span className="h-section">{o.n}</span>
                  <span className={`label ${o.tone}`}>{o.tag}</span>
                </Link>
              )}
            </Reveal>
          ))}
          <li aria-hidden><Rule /></li>
        </ul>
      </Section>

      <FinalCta />
    </Layout>
  );
}
