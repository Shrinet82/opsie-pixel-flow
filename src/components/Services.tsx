
import { Users, UserPlus, Calendar, Database, MessageCircle, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Hiring Automation",
      description: "Resume screening + Google Forms + Email workflows that actually work",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: UserPlus,
      title: "Onboarding Magic",
      description: "Auto Slack invites, document access, and welcome email sequences",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Leave Workflow",
      description: "Form → Sheet → Email → Calendar. No more lost vacation requests",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Form to CRM",
      description: "Lead capture that actually captures leads (and puts them somewhere useful)",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Airtable + WhatsApp",
      description: "Customer data synced with instant messaging workflows",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "Notion Dashboards",
      description: "Real-time reports that update themselves (like magic, but better)",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            Our Use Cases & <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            Pick your poison. We'll automate it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glow-border hover:border-primary-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-sora font-semibold text-lg text-midnight-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-midnight-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
