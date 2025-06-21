import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const serviceHighlights = [
    {
      title: "Team Operations",
      description: "Onboarding, leave management, and workflow automation for growing teams",
      icon: Users,
      color: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600",
      example: "Cut onboarding time from 2.5 hours to 10 minutes"
    },
    {
      title: "Business Processes",
      description: "Application reviews, lead scoring, and customer journey automation",
      icon: Target,
      color: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
      example: "90% reduction in manual review time"
    },
    {
      title: "Data & Sync",
      description: "Real-time syncing between tools, payroll automation, and reporting",
      icon: TrendingUp,
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600",
      example: "75% faster payroll processing"
    },
    {
      title: "WhatsApp Automation",
      description: "AI-powered appointment booking, reminders, and patient communication systems",
      icon: MessageSquare,
      color: "from-orange-100 to-red-100",
      iconColor: "text-orange-600",
      example: "95% reduction in missed appointments"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-midnight-900 mb-4 sm:mb-6">
            See What We <span className="text-primary-500">Automate</span>
          </h2>
          <p className="text-lg sm:text-xl text-midnight-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            From team onboarding to payroll sync - we automate the boring stuff so you can focus on growth
          </p>
          <Button 
            onClick={() => navigate('/case-studies')}
            variant="outline"
            size="lg"
            className="group font-sora font-semibold"
          >
            View Detailed Case Studies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Service Highlights Grid - Mobile First */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {serviceHighlights.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-purple-50/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${service.iconColor}`} />
                  </div>
                  
                  <h3 className="font-sora font-bold text-xl sm:text-2xl text-midnight-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-midnight-600 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  
                  <div className="bg-white rounded-lg p-3 sm:p-4 pixel-shadow">
                    <div className="flex items-center text-xs sm:text-sm text-primary-600 font-medium">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span>{service.example}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 pixel-shadow">
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-midnight-900 mb-3 sm:mb-4">
              Ready to See Real Results?
            </h3>
            <p className="text-base sm:text-lg text-midnight-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Explore our detailed case studies to see exactly how we've helped companies like yours save time and reduce errors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/case-studies')}
                size="lg" 
                className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-sora font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-primary-300 text-primary-700 hover:bg-primary-50 font-sora font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group"
              >
                Get Free Audit
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
