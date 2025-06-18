
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 bg-pixel-pattern">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-12 h-12 bg-primary/20 rounded-lg animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-8 h-8 bg-accent/30 rounded-lg animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-primary/10 rounded-lg animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-accent/20 rounded-lg animate-float" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="pixel-shadow hover:pixel-shadow-hover transition-all duration-300 bg-white rounded-lg p-4">
              <div className="font-sora font-black text-4xl text-primary-600 tracking-tight">
                OPSIE
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-sora font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-midnight-900 leading-tight animate-slide-in">
            For everything you do{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent relative">
              twice
              <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-primary-400 animate-pulse" />
            </span>
          </h1>

          <div className="font-sora font-medium text-2xl md:text-3xl mb-8 text-primary-600 animate-slide-in" style={{animationDelay: '0.2s'}}>
            —Opsie does it for you.
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-midnight-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in" style={{animationDelay: '0.4s'}}>
            No-code automation for SMBs, agencies, and ops teams. 
            <br />
            <span className="font-medium text-accent">Let AI and smart tools do the boring stuff.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-primary-500 hover:bg-primary-600 text-white font-sora font-semibold text-lg px-8 py-4 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
            >
              Get Free Automation Audit
              <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-300 text-primary-700 hover:bg-primary-50 font-sora font-medium text-lg px-8 py-4 h-auto group"
            >
              See What We Automate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-slide-in" style={{animationDelay: '0.8s'}}>
            <p className="text-midnight-500 mb-6 font-medium">Trusted by teams at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="font-sora font-bold text-lg text-midnight-400">StartupCo</div>
              <div className="font-sora font-bold text-lg text-midnight-400">AgencyPro</div>
              <div className="font-sora font-bold text-lg text-midnight-400">ScaleUp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
