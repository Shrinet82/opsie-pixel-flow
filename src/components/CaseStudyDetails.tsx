
import { ChevronRight, MapPin, Clock, Zap, TrendingUp, Sparkles } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  const IconComponent = caseStudy.icon;

  return (
    <div className="bg-gradient-to-br from-white via-slate-50/50 to-purple-50/30 rounded-3xl p-6 sm:p-8 lg:p-10 pixel-shadow-hover border border-gray-100/50 backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Challenge & Solution */}
        <div className="space-y-8">
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
              <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${caseStudy.color} rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 pixel-shadow`}>
                <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 ${caseStudy.iconColor}`} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h2 className="font-sora font-bold text-2xl sm:text-3xl text-midnight-900 mb-2 bg-gradient-to-r from-midnight-900 to-midnight-700 bg-clip-text">
                  {caseStudy.title}
                </h2>
                <p className="text-base sm:text-lg text-midnight-600 flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="line-clamp-2">{caseStudy.client}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50">
            <h3 className="font-sora font-bold text-lg sm:text-xl text-red-700 mb-4 flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              Challenge
            </h3>
            <p className="text-base sm:text-lg text-midnight-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50">
            <h3 className="font-sora font-bold text-lg sm:text-xl text-blue-700 mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              Oopsie Solution
            </h3>
            <p className="text-base sm:text-lg text-midnight-700 leading-relaxed mb-5">
              {caseStudy.solution}
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Results & Quote */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-2xl p-6 border border-green-200/50">
            <h3 className="font-sora font-bold text-lg sm:text-xl text-green-700 mb-5 flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              Results
            </h3>
            <div className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-midnight-700 font-medium leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50/30 rounded-2xl p-6 sm:p-8 pixel-shadow border border-purple-200/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-midnight-700 italic leading-relaxed mb-6 font-medium">
                "{caseStudy.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-sora font-bold text-lg sm:text-xl text-white">
                    {caseStudy.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sora font-bold text-lg sm:text-xl text-midnight-900">
                    {caseStudy.author}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
