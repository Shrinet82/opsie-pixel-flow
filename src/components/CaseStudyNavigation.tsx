
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyNavigationProps {
  caseStudies: CaseStudy[];
  activeCase: number;
  onCaseSelect: (index: number) => void;
}

const CaseStudyNavigation = ({ caseStudies, activeCase, onCaseSelect }: CaseStudyNavigationProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
      {caseStudies.map((study, index) => {
        const IconComponent = study.icon;
        return (
          <button
            key={index}
            onClick={() => onCaseSelect(index)}
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
  );
};

export default CaseStudyNavigation;
