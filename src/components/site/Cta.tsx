import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { VENDORROLL_URL } from "@/data/links";

export function FinalCta() {
  return (
    <Section ground="light">
      <Reveal>
        <h2 className="h-section max-w-[18ch]">Tell us what you're working on.</h2>
      </Reveal>
      <Reveal delay={70}>
        <p className="lede muted mt-5">A 30-minute call. We'll tell you honestly whether we can help.</p>
      </Reveal>
      <Reveal delay={140} className="mt-9 flex flex-wrap gap-3">
        <Link to="/contact" className="btn btn-primary">Talk to us</Link>
        <a href={VENDORROLL_URL} className="btn btn-secondary">
          Visit Vendorroll <ArrowUpRight size={16} aria-hidden />
        </a>
      </Reveal>
    </Section>
  );
}
