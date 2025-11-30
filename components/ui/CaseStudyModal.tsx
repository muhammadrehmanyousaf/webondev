'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Users, TrendingUp, Globe, Code, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{caseStudy.title}</h2>
            <p className="text-gray-600 mt-1">{caseStudy.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                {caseStudy.category}
              </div>
              <h3 className="text-2xl font-bold mb-1">{caseStudy.title}</h3>
              <p className="text-blue-100">{caseStudy.subtitle}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Project Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Team Size</div>
                  <div className="font-semibold text-gray-900">{caseStudy.teamSize}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <Globe className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900">{caseStudy.location}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
              <p className="text-gray-600 leading-relaxed">{caseStudy.description}</p>
            </div>

            {/* Client & Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                <p className="text-gray-600">{caseStudy.client}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
                <p className="text-gray-600">{caseStudy.industry}</p>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code className="w-5 h-5 text-red-500 mr-2" />
                  Challenges
                </h4>
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Solutions
                </h4>
                <ul className="space-y-3">
                  {caseStudy.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                Key Results
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Ready to start your project?
            </div>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
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
