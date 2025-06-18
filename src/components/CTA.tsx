
import { Button } from "@/components/ui/button";
import { Zap, Clock } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pixel-pattern opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 bg-white/20 rounded-lg animate-float" />
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-white/10 rounded-lg animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-white/15 rounded-lg animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Clock className="w-16 h-16 text-white/80 animate-pulse" />
          </div>
          
          <h2 className="font-sora font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Still doing the same task for the{" "}
            <span className="text-accent animate-pulse">5th time</span>{" "}
            this week?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let Opsie automate it and give you your life back
          </p>

          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-white text-primary-600 hover:bg-gray-50 font-sora font-bold text-xl px-12 py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
          >
            Get Free Automation Audit
            <Zap className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Button>

          <div className="mt-8 text-white/80 font-medium">
            ⚡ Response within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
