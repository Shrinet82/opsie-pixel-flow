
import { Button } from "@/components/ui/button";
import { Zap, Clock, Sparkles } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-700 dark:from-primary-700 dark:via-purple-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pixel-pattern opacity-10 dark:opacity-5" />
      
      {/* Floating Elements - Psychology: Movement creates urgency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-8 h-8 bg-yellow-400/30 dark:bg-yellow-300/20 rounded-lg animate-float" />
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-emerald-400/20 dark:bg-emerald-300/15 rounded-lg animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-orange-400/25 dark:bg-orange-300/15 rounded-lg animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-white/90 dark:text-white/80 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 rounded-full animate-bounce">
                <Sparkles className="w-3 h-3 text-white m-1.5" />
              </div>
            </div>
          </div>
          
          {/* Psychology: Red creates urgency, "5th time" emphasizes pain */}
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white dark:text-gray-100 mb-6 sm:mb-8 leading-tight">
            Still doing the same task for the{" "}
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 dark:from-red-300 dark:via-orange-300 dark:to-yellow-300 bg-clip-text text-transparent animate-pulse font-black">
              5th time
            </span>{" "}
            this week?
          </h2>
          
          {/* Psychology: Green suggests growth and positive outcome */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 dark:text-gray-200/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let Oopsie automate it and give you your{" "}
            <span className="text-emerald-300 dark:text-emerald-200 font-semibold">life back</span>
          </p>

          {/* Improved mobile responsiveness */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="w-full sm:w-auto bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-gray-50 dark:hover:bg-white font-sora font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group rounded-2xl"
            >
              <span className="flex items-center justify-center">
                Get Free Automation Audit
                <Zap className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform text-emerald-600 dark:text-emerald-700" />
              </span>
            </Button>

            {/* Trust indicators - Psychology: Social proof reduces anxiety */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white/90 dark:text-gray-200/80 text-sm sm:text-base">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 dark:bg-emerald-300 rounded-full mr-2 animate-pulse" />
                <span className="font-medium">Response within 24 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full mr-2 animate-pulse" />
                <span className="font-medium">No commitment required</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 dark:bg-yellow-300 rounded-full mr-2 animate-pulse" />
                <span className="font-medium">30-minute call</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
