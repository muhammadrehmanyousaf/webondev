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
      gradient: 'from-brand-400 to-teal-400'
    },
    {
      year: '2019',
      quarter: 'Q4',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
      icon: TrendingUp,
      stats: '10 Projects Completed',
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'Team Expansion',
      description: 'Grew to 15 team members and established our design and marketing divisions.',
      icon: Users,
      stats: '15 Team Members',
      gradient: 'from-cyan-400 to-brand-400'
    },
    {
      year: '2021',
      quarter: 'Q1',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across North America and Europe.',
      icon: Globe,
      stats: '10 Countries',
      gradient: 'from-brand-400 to-emerald-400'
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: '150 Clients Milestone',
      description: 'Reached 150 satisfied clients and launched our enterprise solutions division.',
      icon: Award,
      stats: '150+ Clients',
      gradient: 'from-emerald-400 to-teal-400'
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and recognition for innovation and quality.',
      icon: Calendar,
      stats: '5 Awards Won',
      gradient: 'from-teal-400 to-brand-400'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Growth
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Timeline</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From a small startup to a global software development agency, here's how we've grown and evolved over the years.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden lg:block">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-500 via-teal-500 to-cyan-500 rounded-full"
              style={{ top: '95px', bottom: '95px' }}
            ></div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-6`}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-center lg:text-inherit`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                      <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                        <span className="text-sm font-bold text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                          {item.year}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {item.quarter}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.gradient} bg-opacity-10 px-4 py-2 rounded-full`}>
                        <item.icon className="w-4 h-4 text-brand-400" />
                        <span className="text-sm font-semibold text-brand-400">
                          {item.stats}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 rounded-full border-4 border-white/10 shadow-xl">
                  <div className={`flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r ${item.gradient} rounded-full`}>
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="w-full lg:w-1/2 lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Progress Dots */}
        <div className="mt-12 lg:hidden">
          <div className="flex items-center justify-center space-x-2">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                {index < timeline.length - 1 && (
                  <div className="w-6 h-0.5 bg-gradient-to-r from-brand-500 to-teal-500 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking Ahead to 2025 & Beyond
              </h3>
              <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
                We're committed to continued growth, innovation, and excellence. Our goals include expanding our AI/ML capabilities, reaching 200+ clients, and establishing offices in new markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['AI/ML Integration', '200+ Clients', 'Global Expansion'].map((goal, index) => (
                  <div key={index} className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <span className="text-sm font-semibold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
