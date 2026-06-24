
import { Check, Zap, Users, DollarSign, Clock } from "lucide-react";

const WhyOopsie = () => {
  const benefits = [
    {
      icon: Zap,
      title: "No-code / AI powered",
      description: "We build smart, not hard"
    },
    {
      icon: Users,
      title: "Works with your existing tools",
      description: "No need to change your entire workflow"
    },
    {
      icon: Clock,
      title: "Simple setup",
      description: "From pain point to automation in days, not months"
    },
    {
      icon: DollarSign,
      title: "No retainers",
      description: "Pay per automation, not per hour"
    }
  ];

  const comparison = [
    {
      traditional: "6-month contracts",
      oopsie: "Pay per automation"
    },
    {
      traditional: "Generic solutions",
      oopsie: "Custom-built for you"
    },
    {
      traditional: "Weeks to get started",
      oopsie: "Days to go live"
    },
    {
      traditional: "Complex integrations",
      oopsie: "Works with what you have"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            Why <span className="text-primary-500">Oopsie?</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            Because your time is worth more than copying and pasting data
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-sora font-semibold text-lg text-midnight-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-midnight-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-sora font-bold text-2xl text-center text-midnight-900 mb-8">
            Traditional Agency vs Oopsie
          </h3>
          
          <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-3xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-sora font-semibold text-lg text-midnight-700 border-b border-slate-300 pb-2">
                  Traditional Agency
                </h4>
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-midnight-600">{item.traditional}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-sora font-semibold text-lg text-primary-600 border-b border-primary-200 pb-2">
                  Oopsie
                </h4>
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-midnight-900 font-medium">{item.oopsie}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOopsie;
