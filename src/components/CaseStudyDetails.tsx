
import { ChevronRight, MapPin, Clock, Zap, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  const IconComponent = caseStudy.icon;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 pixel-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - Challenge & Solution */}
        <div className="space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${caseStudy.color} rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4`}>
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${caseStudy.iconColor}`} />
              </div>
              <div>
                <h2 className="font-sora font-bold text-xl sm:text-2xl text-midnight-900 mb-1 sm:mb-2">
                  {caseStudy.title}
                </h2>
                <p className="text-sm sm:text-base text-midnight-600 flex items-center">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-2">{caseStudy.client}</span>
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
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h3 className="font-sora font-semibold text-base sm:text-lg text-blue-600 mb-3 flex items-center">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Opsie Solution
            </h3>
            <p className="text-sm sm:text-base text-midnight-700 leading-relaxed mb-4">
              {caseStudy.solution}
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, index) => (
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
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-midnight-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 pixel-shadow">
            <blockquote className="text-sm sm:text-base lg:text-lg text-midnight-700 italic leading-relaxed mb-4">
              "{caseStudy.quote}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mr-3">
                <span className="font-sora font-bold text-sm sm:text-base text-primary-700">
                  {caseStudy.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-sora font-semibold text-sm sm:text-base text-midnight-900">
                  {caseStudy.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
