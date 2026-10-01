import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Reveal, Rule } from "@/components/site/Reveal";
import { Words } from "@/components/site/Words";
import { FinalCta } from "@/components/site/Cta";
import { HeroSheets } from "@/components/vignettes/HeroSheets";
import { VendorrollVignette } from "@/components/vignettes/VendorrollVignette";
import { LedgerVignette } from "@/components/vignettes/LedgerVignette";
import { AdvisoryVignette } from "@/components/vignettes/AdvisoryVignette";
import { VENDORROLL_URL } from "@/data/links";

const H1 = "Enterprise-quality software and compliance, for the businesses in between.";

const why = [
  {
    t: "Enterprise quality, fair price.",
    b: "Our team is based in India, so you get enterprise-grade work at a fraction of what large vendors charge.",
  },
  {
    t: "Software and people, one roof.",
    b: "The tools and the expertise come from the same team, so nothing gets lost between them.",
  },
  {
    t: "We'll say when you don't need us.",
    b: "Some teams need two policies and a calendar reminder, not a programme. We'll tell you.",
  },
];

const principles = [
  "The boring thing, done properly.",
  "Automate the chase, not the judgement.",
  "Evidence over assertion.",
  "Say when you're not needed.",
];

const card = "on-dark flex h-full flex-col border border-ink/10 bg-ink p-6 text-bone sm:p-7";

export default function Home() {
  return (
    <Layout path="/">
      {/* Hero */}
      <section className="on-dark grain relative overflow-hidden bg-ink pb-20 pt-32 text-bone sm:pb-28 sm:pt-44">
        <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label muted hero-fade mb-8" style={{ ["--d" as string]: "0ms" }}>
              Oopsie
            </p>
            <h1 className="h-display">
              <Words text={H1} />
            </h1>
            <p className="lede muted hero-fade mt-8" style={{ ["--d" as string]: "900ms" }}>
              We build focused software and run hands-on compliance work for growing B2B companies. Big-company
              quality, without the big-company bill.
            </p>
            <div className="hero-fade mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "1050ms" }}>
              <Link to="/contact" className="btn btn-primary">Talk to us</Link>
              <a href="#what-we-do" className="btn btn-secondary">See what we build</a>
            </div>
          </div>
          <div className="hero-fade lg:col-span-5" style={{ ["--d" as string]: "400ms" }}>
            <HeroSheets />
          </div>
        </div>
        <div className="wrap relative z-10 mt-20">
          <div className="hero-fade" style={{ ["--d" as string]: "1250ms" }}>
            <Rule />
          </div>
        </div>
      </section>

      {/* 01 What we do */}
      <Section ground="light" label="01 · What we do" id="what-we-do">
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className={card}>
              <p className="label text-vendorroll-dark">Live · Free trial</p>
              <h2 className="h-card mt-4">Vendorroll</h2>
              <p className="muted mt-3 text-[15px] leading-relaxed">
                Collect SOC 2 reports, insurance certificates and security questionnaires from every vendor through
                one link. No vendor logins. Reminders run themselves.
              </p>
              <div className="my-7"><VendorrollVignette /></div>
              <a href={VENDORROLL_URL} className="btn btn-secondary mt-auto self-start">
                Visit Vendorroll <ArrowUpRight size={16} aria-hidden />
              </a>
            </article>
          </Reveal>
          <Reveal delay={70}>
            <article className={`${card} !border-gold/40`}>
              <p className="label text-gold">Taking engagements</p>
              <h2 className="h-card mt-4">Advisory</h2>
              <p className="muted mt-3 text-[15px] leading-relaxed">
                SOC 2 and ISO 27001 readiness, policies, penetration testing, and support through the audit.
              </p>
              <div className="my-7"><AdvisoryVignette /></div>
              <Link to="/advisory" className="link-u mt-auto self-start text-[15px]">Explore advisory</Link>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className={card}>
              <p className="label text-copper">Coming soon</p>
              <h2 className="h-card mt-4">Ledgerline</h2>
              <p className="muted mt-3 text-[15px] leading-relaxed">
                Billing for businesses with subscription and usage-based pricing.
              </p>
              <div className="my-7"><LedgerVignette /></div>
              <Link to="/ledgerline" className="link-u mt-auto self-start text-[15px]">Learn more</Link>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* 02 Why Oopsie */}
      <Section ground="dark" label="02 · Why Oopsie" grain>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {why.map((w, i) => (
            <Reveal key={w.t} delay={i * 70}>
              <p className="font-serif text-6xl leading-none text-bone/25">0{i + 1}</p>
              <h3 className="h-card mt-6">{w.t}</h3>
              <p className="muted mt-3 max-w-[38ch] text-[15px] leading-relaxed">{w.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 How we work */}
      <Section ground="light" label="03 · How we work">
        <ul className="m-0 list-none p-0">
          {principles.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 70}>
              <Rule />
              <p className="h-section flex items-baseline gap-6 py-6 sm:gap-10 sm:py-8">
                <span className="label muted shrink-0">0{i + 1}</span>
                {p}
              </p>
            </Reveal>
          ))}
          <li aria-hidden><Rule /></li>
        </ul>
      </Section>

      {/* 04 Story */}
      <Section ground="dark" label="04 · Where we came from" grain>
        <Reveal>
          <p className="font-serif text-[clamp(1.4rem,2.6vw,2.15rem)] leading-[1.28] tracking-[-0.01em] max-w-[34ch] sm:max-w-[40ch]">
            We started out automating the repetitive work that eats a small team's week. Compliance kept coming up as
            the sharpest version of that problem, so we built software for it and learned the frameworks properly.
            Same belief behind everything we do: the things you do twice deserve to be built well.
          </p>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <Link to="/company" className="link-u text-[15px]">More about Oopsie</Link>
        </Reveal>
      </Section>

      <FinalCta />
    </Layout>
  );
}
