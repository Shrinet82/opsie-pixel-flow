import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal, Rule } from "@/components/site/Reveal";
import { LedgerVignette } from "@/components/vignettes/LedgerVignette";

const lines = ["Track usage as it happens.", "Price it the way you sell.", "Invoice with every line explained."];

export default function Ledgerline() {
  return (
    <Layout path="/ledgerline">
      <PageHero
        label="Ledgerline · Coming soon"
        labelClass="text-copper"
        title="Billing that explains itself."
        sub="Ledgerline will handle billing for subscription and usage-based pricing, so every invoice shows exactly why a customer is paying what they pay."
        aside={<LedgerVignette large />}
      />
      <Section ground="light" label="01 · What it will do">
        <ul className="m-0 list-none p-0">
          {lines.map((l, i) => (
            <Reveal as="li" key={l} delay={i * 70}>
              <Rule />
              <p className="h-section flex items-baseline gap-6 py-6 sm:gap-10 sm:py-8">
                <span className="label !text-copper-ink shrink-0">0{i + 1}</span>
                {l}
              </p>
            </Reveal>
          ))}
          <li aria-hidden><Rule /></li>
        </ul>
        <Reveal delay={120} className="mt-14">
          <p className="lede muted">Want an early look?</p>
          <Link to="/contact?topic=ledgerline" className="btn btn-primary mt-5">Talk to us</Link>
        </Reveal>
      </Section>
    </Layout>
  );
}
