'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Users, Zap, Globe, Award, TrendingUp, Heart, Shield } from 'lucide-react';

const CompanyStorySection = () => {
  const storyHighlights = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We started with a simple belief: technology should empower, not complicate. This philosophy drives every solution we create.",
      gradient: "from-brand-400 to-teal-400"
    },
    {
      icon: Users,
      title: "People-Centered",
      description: "Behind every line of code is a human story. We build technology that connects people and transforms lives.",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every project we take on has a clear mission: to solve real problems and create meaningful impact for businesses and their customers.",
      gradient: "from-cyan-400 to-brand-400"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Spark",
      description: "Founded by passionate developers who saw the gap between complex technology and business needs.",
      icon: Zap,
      stats: "5 Founders",
      gradient: "from-brand-400 to-teal-400"
    },
    {
      year: "2020",
      title: "First Breakthrough",
      description: "Delivered our first major e-commerce platform, setting the standard for user-centric design.",
      icon: TrendingUp,
      stats: "50+ Projects",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened our doors to international clients, bringing our expertise to businesses worldwide.",
      icon: Globe,
      stats: "5 Countries",
      gradient: "from-cyan-400 to-brand-400"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation and excellence in software development.",
      icon: Award,
      stats: "10+ Awards",
      gradient: "from-brand-400 to-emerald-400"
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Launched our mentorship program, giving back to the next generation of developers.",
      icon: Heart,
      stats: "100+ Mentees",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the charge in AI integration and sustainable technology solutions.",
      icon: Shield,
      stats: "150+ Clients",
      gradient: "from-teal-400 to-brand-400"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Crafting Digital
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Excellence </span>
            Since Day One
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            What started as a vision to bridge the gap between complex technology and human needs
            has evolved into a mission to transform businesses through innovative digital solutions.
          </p>
        </motion.div>

        {/* Story Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {storyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/30 transition-all duration-500 h-full">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${highlight.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Journey of
              <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Innovation</span>
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Every milestone tells a story of growth, learning, and our unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="relative py-10 lg:py-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 top-[100px] bottom-[100px] bg-gradient-to-b from-brand-500 via-teal-500 to-cyan-500 rounded-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-center lg:text-inherit`}>
                    <div className="group relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${milestone.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                        <div className="flex items-center justify-between mb-6">
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.gradient} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                            <span>{milestone.year}</span>
                          </div>
                          <div className="text-sm font-semibold text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                            {milestone.stats}
                          </div>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                          {milestone.title}
                        </h4>

                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 rounded-full border-4 border-white/10 shadow-xl">
                    <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${milestone.gradient} rounded-full`}>
                      <milestone.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600 rounded-3xl p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Write Your Success Story?
                </h3>
                <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses who have transformed their digital presence with our innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
