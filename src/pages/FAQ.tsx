import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const FAQPage = () => (
  <div className="min-h-screen bg-ink text-cream">
    <Navigation />

    {/* Hero */}
    <section className="bg-ink text-cream gutter pt-[120px] sm:pt-[150px] pb-10 sm:pb-14">
      <h1 className="t-display m-0 animate-wipe-up max-w-[18ch]">
        Questions we get{" "}
        <em className="italic text-signal font-light">asked</em>.
      </h1>
    </section>

    {/* FAQ list on cream ground */}
    <FAQ />

    <CTA />
    <Footer />
  </div>
);

export default FAQPage;
