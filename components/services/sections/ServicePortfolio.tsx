'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ExternalLink,
  ChevronRight,
  Star,
  TrendingUp,
  Briefcase,
  X
} from 'lucide-react';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge?: string;
  solution?: string;
  results: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  logo?: string;
  tags: string[];
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface ServicePortfolioProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  caseStudies?: CaseStudy[];
  layout?: 'grid' | 'featured' | 'slider';
  showFilters?: boolean;
}

const ServicePortfolio: React.FC<ServicePortfolioProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Success Stories',
    sectionSubtitle: propSubtitle = 'Real projects, real results. See how we help businesses like yours succeed.',
    caseStudies: propCaseStudies,
    layout = 'featured',
    showFilters = true,
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const caseStudies = data?.portfolio || propCaseStudies || [];

  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Extract unique industries for filtering
  const industries = ['all', ...Array.from(new Set(caseStudies.map(c => c.industry)))];

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.industry === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            Our Work
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Industry Filters */}
        {showFilters && industries.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === industry
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {industry === 'all' ? 'All Projects' : industry}
              </button>
            ))}
          </motion.div>
        )}

        {/* Featured Layout */}
        {layout === 'featured' && (
          <div className="space-y-8">
            {filteredCases.slice(0, 1).map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

                <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-slate-700/50">
                  {/* Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800">
                    {caseStudy.image ? (
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Briefcase className="w-16 h-16 text-emerald-500/30" />
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <p className="text-sm text-emerald-400 font-medium mb-2">
                        {caseStudy.industry}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    {caseStudy.metrics && (
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="text-center p-4 rounded-xl bg-slate-800/50">
                            <div className="text-2xl font-bold text-emerald-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedCase(caseStudy)}
                      className="btn-primary flex items-center gap-2"
                    >
                      View Case Study
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Grid of other cases - Adaptive based on count */}
            <div className={`grid gap-6 ${
              filteredCases.length - 1 === 3
                ? 'md:grid-cols-3'
                : filteredCases.length - 1 === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : filteredCases.length - 1 === 1
                ? 'md:grid-cols-1 max-w-2xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {filteredCases.slice(1).map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCase(caseStudy)}
                  className="group cursor-pointer"
                >
                  <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4">
                      {caseStudy.image ? (
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Briefcase className="w-10 h-10 text-emerald-500/30" />
                        </div>
                      )}
                      {/* Industry badge on image */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-emerald-400 text-xs font-medium">
                          {caseStudy.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                      {caseStudy.description}
                    </p>

                    {/* Metrics inline */}
                    {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                      <div className="flex gap-4 mb-4 pt-4 border-t border-slate-700/50">
                        {caseStudy.metrics.slice(0, 3).map((metric, mIndex) => (
                          <div key={mIndex} className="text-center flex-1">
                            <div className="text-lg font-bold text-emerald-400">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {caseStudy.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 rounded-full bg-slate-800 text-gray-400 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Grid Layout - Adaptive based on count */}
        {layout === 'grid' && (
          <div className={`grid gap-6 ${
            filteredCases.length === 4
              ? 'md:grid-cols-2 lg:grid-cols-4'
              : filteredCases.length === 3
              ? 'md:grid-cols-3'
              : filteredCases.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCase(caseStudy)}
                className="group cursor-pointer"
              >
                <div className="h-full p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4">
                    {caseStudy.image ? (
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Briefcase className="w-10 h-10 text-emerald-500/30" />
                      </div>
                    )}
                    {/* Industry badge on image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-emerald-400 text-xs font-medium">
                        {caseStudy.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {caseStudy.description}
                  </p>

                  {/* Metrics inline */}
                  {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                    <div className="flex gap-4 mb-4 pt-4 border-t border-slate-700/50">
                      {caseStudy.metrics.slice(0, 3).map((metric, mIndex) => (
                        <div key={mIndex} className="text-center flex-1">
                          <div className="text-lg font-bold text-emerald-400">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded-full bg-slate-800 text-gray-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700"
            >
              {/* Close button */}
              <button
              title='Close'
              type='button'
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal content */}
              <div className="p-6 md:p-8">
                {/* Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-6">
                  {selectedCase.image ? (
                    <Image
                      src={selectedCase.image}
                      alt={selectedCase.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-emerald-500/30" />
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <p className="text-sm text-emerald-400 font-medium mb-2">
                  {selectedCase.industry} • {selectedCase.client}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {selectedCase.description}
                </p>

                {/* Challenge & Solution */}
                {selectedCase.challenge && (
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">The Challenge</h4>
                      <p className="text-sm text-gray-300">{selectedCase.challenge}</p>
                    </div>
                    {selectedCase.solution && (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Our Solution</h4>
                        <p className="text-sm text-gray-300">{selectedCase.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Results */}
                {selectedCase.results && selectedCase.results.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {selectedCase.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-2 text-gray-300">
                          <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics */}
                {selectedCase.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {selectedCase.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="text-center p-4 rounded-xl bg-slate-800">
                        <div className="text-2xl font-bold text-emerald-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Testimonial */}
                {selectedCase.testimonial && (
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-4">
                      "{selectedCase.testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-white">
                        {selectedCase.testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedCase.testimonial.role}
                      </p>
                    </div>
                  </div>
                )}

                {/* External link */}
                {selectedCase.link && (
                  <a
                    href={selectedCase.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Visit Live Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicePortfolio;
