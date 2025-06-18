
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import WhyOpsie from "@/components/WhyOpsie";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
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
