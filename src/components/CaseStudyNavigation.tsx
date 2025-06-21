
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyNavigationProps {
  caseStudies: CaseStudy[];
  activeCase: number;
  onCaseSelect: (index: number) => void;
}

const CaseStudyNavigation = ({ caseStudies, activeCase, onCaseSelect }: CaseStudyNavigationProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
      {caseStudies.map((study, index) => {
        const IconComponent = study.icon;
        const isActive = activeCase === index;
        return (
          <button
            key={index}
            onClick={() => onCaseSelect(index)}
            className={`group p-4 sm:p-6 rounded-2xl border-2 transition-all duration-500 text-left transform hover:scale-105 ${
              isActive
                ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 pixel-shadow-hover shadow-xl'
                : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-gradient-to-br hover:from-gray-50 hover:to-purple-50/30 hover:shadow-lg'
            }`}
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 ${
              isActive ? 'scale-110' : 'group-hover:scale-105'
            }`}>
              <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${study.iconColor} transition-transform duration-300 ${
                isActive ? 'rotate-3' : 'group-hover:rotate-6'
              }`} />
            </div>
            <h3 className={`font-sora font-bold text-lg sm:text-xl text-midnight-900 mb-2 leading-tight transition-colors duration-300 ${
              isActive ? 'text-primary-700' : 'group-hover:text-primary-600'
            }`}>
              {study.title.split(' ').slice(0, 3).join(' ')}
            </h3>
            <p className={`text-sm sm:text-base text-midnight-600 line-clamp-2 transition-colors duration-300 ${
              isActive ? 'text-midnight-700' : 'group-hover:text-midnight-700'
            }`}>
              {study.client}
            </p>
            <div className={`mt-3 h-1 rounded-full transition-all duration-500 ${
              isActive ? 'bg-gradient-to-r from-primary-400 to-primary-600 opacity-100' : 'bg-gray-200 opacity-0 group-hover:opacity-60'
            }`} />
          </button>
        );
      })}
    </div>
  );
};

export default CaseStudyNavigation;
