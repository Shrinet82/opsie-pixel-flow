import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RegisterWidget from "@/components/RegisterWidget";
import Ticker from "@/components/Ticker";
import Process from "@/components/Process";
import Problem from "@/components/Problem";
import Capabilities from "@/components/Capabilities";
import Offerings from "@/components/Offerings";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useRouteSectionScroll } from "@/hooks/use-route-section-scroll";

const siteUrl = "https://www.oopsie.tech";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oopsie",
  description:
    "Oopsie builds VendorRoll, a vendor risk and compliance platform, and provides SOC 2 and ISO 27001 audit-readiness advisory.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "VendorRoll",
        applicationCategory: "BusinessApplication",
        description:
          "Vendor risk and compliance platform covering intake, approvals, evidence collection, security questionnaires, and contract renewals.",
        url: `${siteUrl}/vendorroll`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Compliance advisory",
        description:
          "SOC 2 and ISO 27001 audit-readiness consulting: gap assessment, policy and evidence preparation, and audit support.",
        url: `${siteUrl}/consulting`,
      },
    },
  ],
};

const Index = () => {
  useRouteSectionScroll();

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />
      <Hero />
      <RegisterWidget />
      <Ticker />
      <Process />
      <Problem />
      <Capabilities />
      <Offerings />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
