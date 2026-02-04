'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import { PillarPage, ClusterPage } from '@/lib/site-structure';
import InlineCTA from '@/components/ui/inline-cta';

interface ServiceProcessSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServiceProcessSection = ({ pillar, cluster }: ServiceProcessSectionProps) => {
  const currentService = cluster || pillar;

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Discovery & Planning',
      description: `We start by understanding your ${currentService.title.toLowerCase()} requirements and business objectives.`,
      duration: '1-2 Days'
    },
    {
      icon: FileText,
      title: 'Strategy & Design',
      description: `Create detailed project specifications and design architecture for your ${currentService.title.toLowerCase()}.`,
      duration: '3-5 Days'
    },
    {
      icon: Code,
      title: 'Development',
      description: `Expert development using cutting-edge technologies and best practices for ${currentService.title.toLowerCase()}.`,
      duration: '2-12 Weeks'
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: `Comprehensive testing to ensure your ${currentService.title.toLowerCase()} meets quality standards.`,
      duration: '1-2 Weeks'
    },
    {
      icon: Rocket,
      title: 'Launch & Deploy',
      description: `Smooth deployment and launch of your ${currentService.title.toLowerCase()} solution.`,
      duration: '1-3 Days'
    },
    {
      icon: Headphones,
      title: 'Support & Maintain',
      description: `Ongoing support and maintenance to keep your ${currentService.title.toLowerCase()} running optimally.`,
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
      {/* Grain Texture */}
      <div className="grain absolute inset-0" />

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our {currentService.title} </span>
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional {currentService.title.toLowerCase()} that exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-brand-500/50 via-teal-500/50 to-cyan-500/50 hidden lg:block" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}
              >
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} text-center lg:text-inherit`}>
                  <div className="bg-white/[0.02] rounded-xl sm:rounded-2xl p-8 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 group">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                    >
                      <step.icon className="w-8 h-8 text-brand-400" />
                    </div>

                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-sm font-semibold text-brand-400 gradient-border-subtle px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-[#0a0f1a] rounded-full border border-white/[0.06] shadow-lg lg:block hidden">
                  <div className="text-xl font-bold text-brand-400">
                    {index + 1}
                  </div>
                </div>

                {/* Mobile Number */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full lg:hidden mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}
                >
                  <span className="text-xl font-bold text-brand-400">{index + 1}</span>
                </div>

                <div className="w-full lg:w-1/2 lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/[0.02] rounded-xl sm:rounded-2xl p-8 border border-white/[0.06]"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Process <span className="gradient-text">Benefits</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'On-Time Delivery', desc: 'Projects delivered on schedule' },
              { value: '100%', label: 'Quality Assured', desc: 'Rigorous testing and QA' },
              { value: '24/7', label: 'Communication', desc: 'Constant project updates' },
              { value: '99%', label: 'Client Satisfaction', desc: 'Happy clients worldwide' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <InlineCTA
          title="Let's Start Building"
          description="Follow this proven process for your next project."
          buttonText="Start Your Project"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default ServiceProcessSection;
