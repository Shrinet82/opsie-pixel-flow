
import { useState } from "react";
import { ChevronRight, Users, Target, TrendingUp, MapPin, Clock, Zap } from "lucide-react";

const Services = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "Ops Layer for a Design Consultancy Scaling Globally",
      client: "UX/UI Consultancy scaling from 6 to 18 team members across 3 time zones",
      icon: Users,
      challenge: "As the team grew, onboarding freelancers, designers, and project managers became chaotic. Each hire involved custom Slack invites, region-specific documents, adding to 3+ Notion workspaces, Asana templates, and manual NDA + project briefs.",
      solution: "Multi-branch onboarding system using form-based triggers and conditional logic. Based on location & role, the flow branches into Slack invites, correct regional documents, Notion access, Asana templates, and manager introductions.",
      tools: ["n8n", "Notion API", "Slack API", "Asana", "Google Workspace"],
      results: [
        "Cut onboarding time from 2.5 hours per hire to 10 minutes",
        "100% reduction in errors in access or document delivery",
        "Manager onboarding score went up by 40%"
      ],
      quote: "Opsie gave us the ability to scale our people without scaling the chaos. It's like having an invisible team member who never forgets a step.",
      author: "Rina S., Partner @Axiom Design Lab",
      color: "from-blue-100 to-cyan-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Automated Talent Funnel for a Startup Accelerator",
      client: "Early-stage accelerator reviewing 300+ founder applications/month",
      icon: Target,
      challenge: "Manually managing intake forms, evaluating pitch decks, and scheduling calls with shortlisted founders was overwhelming. They used Google Forms + Sheets, internal Slack threads, and individual Calendly links.",
      solution: "Founder Evaluation Pipeline with auto-evaluation + CRM syncing. Deck + pitch answers auto-scored using Gemini Pro, summary generated, shortlist gets auto Calendly link, and final statuses tracked in Airtable.",
      tools: ["n8n", "Gemini", "Notion API", "Google Calendar", "Airtable", "Slack"],
      results: [
        "90% reduction in manual shortlist & scheduling time",
        "Consistent scoring across teams",
        "3 new founders discovered who were missed in manual review"
      ],
      quote: "Opsie turned our application chaos into a system. The clarity and speed it brought is now baked into how we operate.",
      author: "Kartik M., Program Director @Fundraze Accelerator",
      color: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Real-Time Leave + Payroll Sync for a Global Remote Team",
      client: "35-member remote SaaS company working across 5 countries",
      icon: TrendingUp,
      challenge: "Leave requests came via email, Notion, and Slack DMs. HR had to update local payroll and benefits in country-specific formats. Errors led to payroll delays and employee dissatisfaction.",
      solution: "Leave-to-Payroll Sync Engine integrated with Notion + Remote.com. Validates against role, holiday region, and balance, updates Notion calendar, sends formatted summaries to HR, and confirms via Slack.",
      tools: ["n8n", "Notion API", "Remote API", "Slack", "Google Sheets"],
      results: [
        "Reduced payroll reporting time by 75%",
        "0 missed leave payouts since automation",
        "HR NPS improved by 24 points in 1 quarter"
      ],
      quote: "Before Opsie, leave tracking was a blind spot. Now it's so seamless, we're thinking of expanding to reimbursements and asset management.",
      author: "Ananya T., Head of People @SaaSyBits",
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            See What We <span className="text-primary-500">Automate</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-3xl mx-auto">
            Real case studies from companies that transformed their operations with Opsie's automation systems
          </p>
        </div>

        {/* Interactive Case Study Selector */}
        <div className="max-w-6xl mx-auto">
          {/* Case Study Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeCase === index
                    ? 'border-primary-500 bg-primary-50 pixel-shadow'
                    : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center mb-3`}>
                  <study.icon className={`w-6 h-6 ${study.iconColor}`} />
                </div>
                <h3 className="font-sora font-semibold text-lg text-midnight-900 mb-2">
                  {study.title.split(' ').slice(0, 4).join(' ')}...
                </h3>
                <p className="text-sm text-midnight-600">{study.client}</p>
              </button>
            ))}
          </div>

          {/* Active Case Study Details */}
          <div className="bg-gradient-to-br from-slate-50 to-purple-50/20 rounded-2xl p-8 pixel-shadow">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Challenge & Solution */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${caseStudies[activeCase].color} rounded-xl flex items-center justify-center mr-4`}>
                      <caseStudies[activeCase].icon className={`w-8 h-8 ${caseStudies[activeCase].iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-2xl text-midnight-900">
                        {caseStudies[activeCase].title}
                      </h3>
                      <p className="text-midnight-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {caseStudies[activeCase].client}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-sora font-semibold text-lg text-red-600 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-midnight-700 leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-sora font-semibold text-lg text-blue-600 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Opsie Solution
                  </h4>
                  <p className="text-midnight-700 leading-relaxed mb-4">
                    {caseStudies[activeCase].solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Results & Quote */}
              <div>
                <div className="mb-6">
                  <h4 className="font-sora font-semibold text-lg text-green-600 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Results
                  </h4>
                  <div className="space-y-3">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-midnight-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 pixel-shadow">
                  <blockquote className="text-midnight-700 italic text-lg leading-relaxed mb-4">
                    "{caseStudies[activeCase].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mr-3">
                      <span className="font-sora font-bold text-primary-700">
                        {caseStudies[activeCase].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sora font-semibold text-midnight-900">
                        {caseStudies[activeCase].author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
