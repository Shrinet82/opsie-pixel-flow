
import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudiesData";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import CaseStudyDetails from "@/components/CaseStudyDetails";
import CaseStudyCTA from "@/components/CaseStudyCTA";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const navigate = useNavigate();

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
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Button 
          onClick={() => navigate('/')}
          variant="outline" 
          className="mb-8 sm:mb-12 group hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3 text-base font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Button>

        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-8 flex justify-center">
            <div className="relative pixel-shadow-hover hover:scale-105 transition-all duration-500 bg-gradient-to-br from-white to-purple-50/50 rounded-2xl p-4 sm:p-6 border border-purple-200/30">
              <div className="font-sora font-black text-3xl sm:text-5xl bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                OPSIE
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="font-sora font-bold text-4xl sm:text-5xl md:text-6xl text-midnight-900 mb-6 sm:mb-8 leading-tight">
            Case Studies: See What We{" "}
            <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-primary-700 bg-clip-text text-transparent">
              Automate
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-midnight-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Real transformations from companies that automated their operations with Opsie
          </p>
          
          <div className="flex justify-center">
            <div className="px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 rounded-full border border-primary-200">
              <span className="text-primary-700 font-semibold text-sm sm:text-base">
                ✨ Proven results • Real clients • Measurable impact
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <CaseStudyNavigation 
            caseStudies={caseStudies}
            activeCase={activeCase}
            onCaseSelect={setActiveCase}
          />
          
          <CaseStudyDetails caseStudy={caseStudies[activeCase]} />
          
          <CaseStudyCTA onContactClick={scrollToContact} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
