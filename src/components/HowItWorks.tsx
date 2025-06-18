
import { MessageSquare, Settings, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "You share your pain",
      description: "Tell us about your Google Forms chaos, messy spreadsheets, or clunky hiring flow",
      color: "from-red-100 to-orange-100",
      iconColor: "text-red-600"
    },
    {
      number: "02", 
      icon: Settings,
      title: "We build the automation",
      description: "Our team uses n8n, Retool, Airtable, and AI to create your custom workflow",
      color: "from-blue-100 to-purple-100",
      iconColor: "text-blue-600"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "You save time and scale easily",
      description: "Watch your manual tasks disappear while your team focuses on what matters",
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            How Opsie <span className="text-primary-500">Works</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            From pain point to automation in three simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white font-sora font-bold text-xl rounded-2xl mb-6 pixel-shadow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-sora font-semibold text-xl text-midnight-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-midnight-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
