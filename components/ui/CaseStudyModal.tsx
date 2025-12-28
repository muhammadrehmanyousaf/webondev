'use client';

import React, { useEffect } from 'react';
import { X, Calendar, Users, TrendingUp, Globe, Code, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  teamSize: string;
  results: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  client: string;
  industry: string;
  location: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

const CaseStudyModal = ({ isOpen, onClose, caseStudy }: CaseStudyModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700/50">
          <div className="pr-4 min-w-0">
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white line-clamp-1">{caseStudy.title}</h2>
            <p className="text-slate-400 mt-1 text-xs sm:text-base line-clamp-1">{caseStudy.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            title="Close modal"
            className="flex-shrink-0 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-140px)]">
          {/* Hero Image */}
          <div className="relative h-40 sm:h-56 md:h-72">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
              <div className="bg-emerald-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium inline-block mb-1 sm:mb-2">
                {caseStudy.category}
              </div>
              <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 line-clamp-2">{caseStudy.title}</h3>
              <p className="text-emerald-200 text-xs sm:text-base line-clamp-1">{caseStudy.subtitle}</p>
            </div>
          </div>

          <div className="p-3 sm:p-6">
            {/* Project Overview - Mobile Responsive Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center sm:text-left">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-sm text-slate-400">Duration</div>
                  <div className="font-semibold text-white text-xs sm:text-base truncate">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center sm:text-left">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-sm text-slate-400">Team</div>
                  <div className="font-semibold text-white text-xs sm:text-base truncate">{caseStudy.teamSize}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 p-2 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center sm:text-left">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-sm text-slate-400">Location</div>
                  <div className="font-semibold text-white text-xs sm:text-base truncate">{caseStudy.location}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 sm:mb-8">
              <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-3">Project Overview</h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-base">{caseStudy.description}</p>
            </div>

            {/* Client & Industry */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-8">
              <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <h4 className="font-semibold text-white mb-0.5 sm:mb-2 text-xs sm:text-base">Client</h4>
                <p className="text-slate-300 text-xs sm:text-base truncate">{caseStudy.client}</p>
              </div>
              <div className="p-2 sm:p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <h4 className="font-semibold text-white mb-0.5 sm:mb-2 text-xs sm:text-base">Industry</h4>
                <p className="text-slate-300 text-xs sm:text-base truncate">{caseStudy.industry}</p>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
              <div>
                <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 flex-shrink-0" />
                  Challenges
                </h4>
                <ul className="space-y-1.5 sm:space-y-3">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mt-1 sm:mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-xs sm:text-base">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4 flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                  Solutions
                </h4>
                <ul className="space-y-1.5 sm:space-y-3">
                  {caseStudy.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mt-1 sm:mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-xs sm:text-base">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-4 sm:mb-8">
              <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-800 text-slate-300 rounded-full text-[10px] sm:text-sm font-medium border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-3 sm:p-6 border border-emerald-500/20">
              <h4 className="text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                Key Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200 text-xs sm:text-base">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-6 border-t border-slate-700/50 bg-slate-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              Ready to start your project?
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-colors text-xs sm:text-base"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
