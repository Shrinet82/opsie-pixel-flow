
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

interface CaseStudyCTAProps {
  onContactClick: () => void;
}

const CaseStudyCTA = ({ onContactClick }: CaseStudyCTAProps) => {
  return (
    <div className="text-center mt-16 sm:mt-20">
      <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-purple-700 rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 lg:p-16 pixel-shadow-hover overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-pixel-pattern opacity-10" />
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" />
            </div>
          </div>
          
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 leading-tight">
            Ready to <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Automate</span> Your Operations?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/95 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Opsie can transform your repetitive tasks into automated workflows that save time and reduce errors
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onContactClick}
              size="lg" 
              className="group bg-white text-primary-600 hover:bg-gray-50 font-sora font-bold text-xl px-8 sm:px-16 py-4 sm:py-8 h-auto rounded-2xl pixel-shadow hover:pixel-shadow-hover transition-all duration-500 hover:scale-105"
            >
              Get Free Automation Audit
              <div className="flex items-center ml-3">
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
            
            <div className="text-white/80 text-sm sm:text-base">
              <span className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Free • No commitment • 30-min call
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCTA;
