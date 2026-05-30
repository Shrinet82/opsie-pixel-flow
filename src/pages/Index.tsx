import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import WhyOpsie from "@/components/WhyOpsie";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import { useRouteSectionScroll } from "@/hooks/use-route-section-scroll";

const Index = () => {
  useRouteSectionScroll();

  const siteUrl = "https://www.opsie.tech";

  return (
    <div className="min-h-screen">
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Opsie",
            description:
              "No-code automation for SMBs, agencies, and ops teams. Let AI and smart tools do the boring stuff.",
            url: siteUrl,
            logo: `${siteUrl}/favicon.svg`,
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: "English",
            },
            service: {
              "@type": "Service",
              name: "Business Process Automation",
              description:
                "Automated workflows and business process optimization using no-code tools",
              provider: {
                "@type": "Organization",
                name: "Opsie",
              },
            },
          }),
        }}
      />

      <Navigation />
      <Hero />
      <Problems />
      <HowItWorks />
      <Services />
      <Tools />
      <WhyOpsie />
      <CTA />
      <Contact />
    </div>
  );
};

export default Index;
