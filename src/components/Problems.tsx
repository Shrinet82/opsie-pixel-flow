
import { AlertCircle, Clock, FileX } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: FileX,
      title: "Messy onboarding systems",
      description: "New hires lost in scattered docs, manual account creation, endless email chains"
    },
    {
      icon: Clock,
      title: "Manual resume screening", 
      description: "Hours spent reading CVs, copying data to spreadsheets, scheduling interviews manually"
    },
    {
      icon: AlertCircle,
      title: "Clunky leave approvals",
      description: "Paper forms, lost requests, manual calendar updates, confused managers"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            What Opsie <span className="text-primary-500">Fixes</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks that should have been automated yesterday
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 border border-slate-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 neo-card"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="font-sora font-semibold text-xl text-midnight-900 mb-4">
                {problem.title}
              </h3>
              
              <p className="text-midnight-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
