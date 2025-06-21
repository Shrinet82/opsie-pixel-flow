
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
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

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
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
