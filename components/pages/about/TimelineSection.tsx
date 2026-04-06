'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Globe, Award, Users, Rocket, Sparkles } from 'lucide-react';

const TimelineSection = () => {
  const timeline = [
    {
      year: '2019',
      quarter: 'Q1',
      title: 'Company Founded',
      description: 'Web On Dev was established with a team of 5 passionate developers.',
      icon: Rocket,
      stats: '5 Team Members',
    },
    {
      year: '2019',
      quarter: 'Q4',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
      icon: TrendingUp,
      stats: '10 Projects Completed',
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'Team Expansion',
      description: 'Grew to 15 team members and established our design and marketing divisions.',
      icon: Users,
      stats: '15 Team Members',
    },
    {
      year: '2021',
      quarter: 'Q1',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across North America and Europe.',
      icon: Globe,
      stats: '10 Countries',
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: '150 Clients Milestone',
      description: 'Reached 150 satisfied clients and launched our enterprise solutions division.',
      icon: Award,
      stats: '150+ Clients',
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and recognition for innovation and quality.',
      icon: Calendar,
      stats: '5 Awards Won',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#030712] overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />

      {/* Grain texture */}

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Our Journey
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Our Growth <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto">
            From a small startup to a global software development agency, here&apos;s how we&apos;ve grown and evolved over the years.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden lg:block">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-500/30 via-teal-500/30 to-brand-500/30 rounded-full"
              style={{ top: '60px', bottom: '60px' }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/30 via-teal-500/30 to-brand-500/30" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-row lg:gap-0 gap-4 sm:gap-5`}
              >
                {/* Mobile Timeline Node */}
                <div className="lg:hidden relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#030712] border-2 border-white/[0.08]">
                  <div
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                    }}
                  >
                    <item.icon className="w-4 h-4 text-brand-400" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-1/2 ${
                    index % 2 === 0
                      ? 'lg:pr-12 xl:pr-16 lg:text-right'
                      : 'lg:pl-12 xl:pl-16 lg:text-left'
                  } text-left lg:text-inherit`}
                >
                  <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                    <div
                      className={`flex items-center gap-2 mb-3 sm:mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start`}
                    >
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold">
                        {item.quarter}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
                      {item.description}
                    </p>

                    <div
                      className={`flex items-center gap-2 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start`}
                    >
                      <span className="px-2.5 py-0.5 rounded bg-white/[0.04] text-xs text-slate-400">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Timeline Node */}
                <div className="hidden lg:flex relative z-10 flex-shrink-0 items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#030712] border-2 border-white/[0.08]">
                  <div
                    className="flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                    }}
                  >
                    <item.icon className="w-4 h-4 xl:w-5 xl:h-5 text-brand-400" />
                  </div>
                </div>

                {/* Empty Spacer (Desktop) */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              What&apos;s Next
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
              Looking Ahead to <span className="gradient-text">2025 &amp; Beyond</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mb-5 sm:mb-6 max-w-2xl mx-auto">
              We&apos;re committed to continued growth, innovation, and excellence. Our goals include expanding our AI/ML capabilities, reaching 200+ clients, and establishing offices in new markets.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['AI/ML Integration', '200+ Clients', 'Global Expansion'].map(
                (goal, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs sm:text-sm font-medium text-brand-400"
                  >
                    {goal}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default TimelineSection;
