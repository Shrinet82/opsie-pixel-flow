
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 dark:from-gray-900 dark:via-purple-950/50 dark:to-blue-950/30 bg-pixel-pattern transition-colors duration-300">
      {/* Floating Elements - Psychology: Subtle movement creates engagement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-12 h-12 bg-primary/20 dark:bg-primary/30 rounded-lg animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-8 h-8 bg-accent/30 dark:bg-accent/40 rounded-lg animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-accent/20 dark:bg-accent/30 rounded-lg animate-float" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="pixel-shadow hover:pixel-shadow-hover transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="font-sora font-black text-4xl text-primary-600 dark:text-primary-400 tracking-tight">
                OPSIE
              </div>
            </div>
          </div>

          {/* Main Headline - Psychology: "Twice" triggers recognition */}
          <h1 className="font-sora font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-midnight-900 dark:text-gray-100 leading-tight animate-slide-in transition-colors duration-300">
            For everything you do{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent relative">
              twice
              <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-primary-400 dark:text-primary-300 animate-pulse" />
            </span>
          </h1>

          <div className="font-sora font-medium text-2xl md:text-3xl mb-8 text-primary-600 dark:text-primary-400 animate-slide-in transition-colors duration-300" style={{animationDelay: '0.2s'}}>
            —Opsie does it for you.
          </div>

          {/* Subtext - Psychology: Green suggests positive outcome */}
          <p className="text-xl md:text-2xl text-midnight-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in transition-colors duration-300" style={{animationDelay: '0.4s'}}>
            No-code automation for SMBs, agencies, and ops teams. 
            <br />
            <span className="font-medium text-accent dark:text-emerald-400">Let AI and smart tools do the boring stuff.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-sora font-semibold text-lg px-8 py-4 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
            >
              Get Free Automation Audit
              <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform text-emerald-400 dark:text-emerald-300" />
            </Button>
            
            <Button 
              onClick={() => navigate('/case-studies')}
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-300 dark:border-primary-500 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/50 font-sora font-medium text-lg px-8 py-4 h-auto group transition-all duration-300"
            >
              See What We Automate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-slide-in" style={{animationDelay: '0.8s'}}>
            <p className="text-midnight-500 dark:text-gray-400 mb-6 font-medium transition-colors duration-300">Trusted by teams at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60 dark:opacity-50">
              <div className="font-sora font-bold text-lg text-midnight-400 dark:text-gray-500">StartupCo</div>
              <div className="font-sora font-bold text-lg text-midnight-400 dark:text-gray-500">AgencyPro</div>
              <div className="font-sora font-bold text-lg text-midnight-400 dark:text-gray-500">ScaleUp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
