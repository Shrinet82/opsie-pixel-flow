
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface CaseStudyCTAProps {
  onContactClick: () => void;
}

const CaseStudyCTA = ({ onContactClick }: CaseStudyCTAProps) => {
  return (
    <div className="text-center mt-12 sm:mt-16">
      <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 pixel-shadow relative overflow-hidden">
        <div className="absolute inset-0 bg-pixel-pattern opacity-10" />
        <div className="relative z-10">
          <h2 className="font-sora font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how Opsie can transform your repetitive tasks into automated workflows
          </p>
          <Button 
            onClick={onContactClick}
            size="lg" 
            className="bg-white text-primary-600 hover:bg-gray-50 font-sora font-bold text-lg sm:text-xl px-6 sm:px-12 py-3 sm:py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
          >
            Get Free Automation Audit
            <Zap className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCTA;
