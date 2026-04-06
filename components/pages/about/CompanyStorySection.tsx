'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Shield,
} from 'lucide-react';

// =============================================================================
// DATA
// =============================================================================

const storyHighlights = [
  {
    icon: Sparkles,
    title: 'Innovation First',
    description:
      'We started with a simple belief: technology should empower, not complicate. This philosophy drives every solution we create.',
  },
  {
    icon: Users,
    title: 'People-Centered',
    description:
      'Behind every line of code is a human story. We build technology that connects people and transforms lives.',
  },
  {
    icon: Target,
    title: 'Purpose-Driven',
    description:
      'Every project we take on has a clear mission: to solve real problems and create meaningful impact for businesses and their customers.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'The Spark',
    description:
      'Founded by passionate developers who saw the gap between complex technology and business needs.',
    icon: Zap,
    stats: '5 Founders',
  },
  {
    year: '2020',
    title: 'First Breakthrough',
    description:
      'Delivered our first major e-commerce platform, setting the standard for user-centric design.',
    icon: TrendingUp,
    stats: '50+ Projects',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description:
      'Opened our doors to international clients, bringing our expertise to businesses worldwide.',
    icon: Globe,
    stats: '5 Countries',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description:
      'Received multiple awards for innovation and excellence in software development.',
    icon: Award,
    stats: '10+ Awards',
  },
  {
    year: '2023',
    title: 'Community Impact',
    description:
      'Launched our mentorship program, giving back to the next generation of developers.',
    icon: Heart,
    stats: '100+ Mentees',
  },
  {
    year: '2024',
    title: 'Future Forward',
    description:
      'Leading the charge in AI integration and sustainable technology solutions.',
    icon: Shield,
    stats: '150+ Clients',
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

const CompanyStorySection = () => {
  return (
    <section className="relative py-12 sm:py-14 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />

      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ----------------------------------------------------------------- */}
        {/* Section Header                                                     */}
        {/* ----------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Our Story
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Crafting Digital{' '}
            <span className="gradient-text">Excellence</span> Since Day One
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto">
            What started as a vision to bridge the gap between complex
            technology and human needs has evolved into a mission to transform
            businesses through innovative digital solutions.
          </p>
        </motion.div>

        {/* ----------------------------------------------------------------- */}
        {/* Story Highlights                                                   */}
        {/* ----------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {storyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8"
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-4 sm:mb-5"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                }}
              >
                <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {highlight.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Timeline Header                                                    */}
        {/* ----------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Our Journey of <span className="gradient-text">Innovation</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto">
            Every milestone tells a story of growth, learning, and our
            unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* ----------------------------------------------------------------- */}
        {/* Timeline                                                           */}
        {/* ----------------------------------------------------------------- */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400/30 via-white/[0.06] to-transparent hidden lg:block" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-0 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-2rem)] ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="group bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                          {milestone.year}
                        </div>

                        <span className="text-xs sm:text-sm font-medium text-slate-400">
                          {milestone.stats}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 text-left">
                        {milestone.title}
                      </h4>

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-left">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 hidden lg:flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#030712] border border-white/[0.06]">
                    <div
                      className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                      }}
                    >
                      <milestone.icon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-400" />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="w-full lg:w-[calc(50%-2rem)] hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
