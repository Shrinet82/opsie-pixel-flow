
import { useState } from "react";
import { ChevronRight, Users, Target, TrendingUp, MapPin, Clock, Zap, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const navigate = useNavigate();

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
    },
    {
      title: "WhatsApp Dental Appointment Automation System",
      client: "Independent dental clinic with 500+ monthly patient appointments",
      icon: MessageSquare,
      challenge: "Manual appointment booking via phone calls was time-consuming. High no-show rates, missed follow-ups, and staff spending 3+ hours daily on scheduling. Patients struggled with clinic hours for rescheduling.",
      solution: "AI-powered WhatsApp chatbot with real-time calendar integration. Automated booking, rescheduling, reminders, and digital consent forms. Multilingual support with HIPAA-compliant patient data handling.",
      tools: ["WhatsApp Business API", "n8n", "Google Calendar", "OpenAI GPT", "Airtable", "Twilio"],
      results: [
        "95% reduction in missed appointments",
        "60% decrease in administrative phone time",
        "40% increase in patient satisfaction scores",
        "24/7 booking availability improved retention by 30%"
      ],
      quote: "Our patients love booking through WhatsApp - it's so convenient. We've practically eliminated no-shows and our staff can focus on patient care instead of endless phone calls.",
      author: "Dr. Maria Gonzalez, DDS @Bright Smile Dental",
      color: "from-orange-100 to-red-100",
      iconColor: "text-orange-600"
    }
  ];

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 bg-pixel-pattern">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Button 
          onClick={() => navigate('/')}
          variant="outline" 
          className="mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>

        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6 flex justify-center">
            <div className="pixel-shadow hover:pixel-shadow-hover transition-all duration-300 bg-white rounded-lg p-3 sm:p-4">
              <div className="font-sora font-black text-2xl sm:text-4xl text-primary-600 tracking-tight">
                OPSIE
              </div>
            </div>
          </div>
          <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-midnight-900 mb-4 sm:mb-6">
            Case Studies: See What We <span className="text-primary-500">Automate</span>
          </h1>
          <p className="text-lg sm:text-xl text-midnight-600 max-w-3xl mx-auto">
            Real transformations from companies that automated their operations with Opsie
          </p>
        </div>

        {/* Mobile-First Case Study Navigation */}
        <div className="max-w-6xl mx-auto">
          {/* Case Study Tabs - Grid layout for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeCase === index
                      ? 'border-primary-500 bg-primary-50 pixel-shadow'
                      : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${study.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3`}>
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${study.iconColor}`} />
                  </div>
                  <h3 className="font-sora font-semibold text-base sm:text-lg text-midnight-900 mb-1 sm:mb-2 leading-tight">
                    {study.title.split(' ').slice(0, 4).join(' ')}...
                  </h3>
                  <p className="text-xs sm:text-sm text-midnight-600 line-clamp-2">{study.client}</p>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Details - Mobile optimized */}
          <div className="bg-gradient-to-br from-slate-50 to-purple-50/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 pixel-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column - Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${caseStudies[activeCase].color} rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4`}>
                      {(() => {
                        const IconComponent = caseStudies[activeCase].icon;
                        return <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${caseStudies[activeCase].iconColor}`} />;
                      })()}
                    </div>
                    <div>
                      <h2 className="font-sora font-bold text-xl sm:text-2xl text-midnight-900 mb-1 sm:mb-2">
                        {caseStudies[activeCase].title}
                      </h2>
                      <p className="text-sm sm:text-base text-midnight-600 flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        <span className="line-clamp-2">{caseStudies[activeCase].client}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-sora font-semibold text-base sm:text-lg text-red-600 mb-3 flex items-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Challenge
                  </h3>
                  <p className="text-sm sm:text-base text-midnight-700 leading-relaxed">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-sora font-semibold text-base sm:text-lg text-blue-600 mb-3 flex items-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Opsie Solution
                  </h3>
                  <p className="text-sm sm:text-base text-midnight-700 leading-relaxed mb-4">
                    {caseStudies[activeCase].solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].tools.map((tool, index) => (
                      <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Results & Quote */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-sora font-semibold text-base sm:text-lg text-green-600 mb-4 flex items-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Results
                  </h3>
                  <div className="space-y-3">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-midnight-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 pixel-shadow">
                  <blockquote className="text-sm sm:text-base lg:text-lg text-midnight-700 italic leading-relaxed mb-4">
                    "{caseStudies[activeCase].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mr-3">
                      <span className="font-sora font-bold text-sm sm:text-base text-primary-700">
                        {caseStudies[activeCase].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sora font-semibold text-sm sm:text-base text-midnight-900">
                        {caseStudies[activeCase].author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 pixel-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-pixel-pattern opacity-10" />
              <div className="relative z-10">
                <h2 className="font-sora font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">
                  Ready to Automate Your Operations?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let's discuss how Opsie can transform your repetitive tasks into automated workflows
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-gray-50 font-sora font-bold text-lg sm:text-xl px-6 sm:px-12 py-3 sm:py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
                >
                  Get Free Automation Audit
                  <Zap className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
