import type { ReactNode } from "react";
import { Layout } from "@/components/site/Layout";
import { CONTACT_EMAIL } from "@/data/links";

function Doc({ path, title, children }: { path: string; title: string; children: ReactNode }) {
  return (
    <Layout path={path}>
      <section className="on-light min-h-screen bg-bone pb-24 pt-32 text-ink sm:pt-40">
        <div className="wrap max-w-[760px]">
          <p className="label muted mb-6">Legal</p>
          <h1 className="h-section">{title}</h1>
          <div className="mt-10 space-y-5 text-[16px] leading-[1.7] [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl">
            {children}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Privacy() {
  return (
    <Doc path="/privacy" title="Privacy notice">
      {/* TODO(owner): add the legal entity name and registered address. */}
      <p>This notice covers the contact form on oopsie.tech. It does not cover Vendorroll, which has its own notice on vendorroll.oopsie.tech.</p>
      <h2>What we collect</h2>
      <p>Your name, work email, company, the product you are interested in, and your message. We also record the page you submitted from.</p>
      <h2>Why</h2>
      <p>To reply to you and to understand what you are looking for. We do not sell this information or use it for advertising.</p>
      <h2>How long we keep it</h2>
      <p>Enquiries that lead nowhere are deleted after 12 months. If we work together, the details are kept for the length of the engagement and the period the law requires.</p>
      <h2>Your choices</h2>
      <p>Ask us at any time to see, correct or delete what we hold about you.</p>
      <h2>Contact</h2>
      <p><a className="link-u" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </Doc>
  );
}

export function Terms() {
  return (
    <Doc path="/terms" title="Terms">
      {/* TODO(owner): add the legal entity name, address and governing law. */}
      <p>These terms cover your use of the oopsie.tech website. Vendorroll and advisory engagements are governed by their own agreements.</p>
      <h2>Use of the site</h2>
      <p>The site is provided for information. Content describes our services in general terms and is not an offer or professional advice.</p>
      <h2>No guarantees</h2>
      <p>We work to keep the site accurate and available but provide it as is. Compliance outcomes depend on your own controls and on independent auditors.</p>
      <h2>Contact</h2>
      <p><a className="link-u" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </Doc>
  );
}
