'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business goals, requirements, and challenges through detailed consultation.',
    duration: '1-2 Days',
  },
  {
    icon: FileText,
    title: 'Planning & Strategy',
    description: 'Our team creates a comprehensive project plan with timelines, milestones, and technical specifications.',
    duration: '3-5 Days',
  },
  {
    icon: Code,
    title: 'Development & Design',
    description: 'We bring your vision to life using cutting-edge technologies and best practices in development.',
    duration: '2-12 Weeks',
  },
  {
    icon: TestTube,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.',
    duration: '1-2 Weeks',
  },
  {
    icon: Rocket,
    title: 'Launch & Deployment',
    description: 'We handle the complete deployment process and ensure a smooth launch of your solution.',
    duration: '1-3 Days',
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your solution running smoothly and up-to-date.',
    duration: 'Ongoing',
  },
];

const processStats = [
  { value: '98%', label: 'On-Time Delivery', sublabel: 'Projects delivered within agreed timelines' },
  { value: '100%', label: 'Client Satisfaction', sublabel: 'Clients satisfied with our process and results' },
  { value: '24/7', label: 'Communication', sublabel: 'Round-the-clock project updates and support' },
];

const ServiceProcessSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 40% 30% at 30% 50%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            How We Work
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Our Development <span className="gradient-text">Process</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We follow a proven methodology that ensures successful project delivery, from initial consultation to ongoing support.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-12 sm:mb-16">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/20 via-teal-500/20 to-brand-500/20" />

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/20 via-teal-500/20 to-brand-500/20" />

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row lg:gap-0 gap-4 sm:gap-5`}
              >
                {/* Mobile Timeline Node */}
                <div className="lg:hidden relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#030712] border-2 border-white/[0.08]">
                  <div
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <step.icon className="w-4 h-4 text-brand-400" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-10 xl:pr-14 lg:text-right' : 'lg:pl-10 xl:pl-14 lg:text-left'} text-left`}
                >
                  <div className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6">
                    <div className={`flex items-center gap-2.5 mb-2.5 sm:mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <span className="text-xs sm:text-sm font-mono font-bold text-brand-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Timeline Node */}
                <div className="hidden lg:flex relative z-10 flex-shrink-0 items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#030712] border-2 border-white/[0.08]">
                  <div
                    className="flex items-center justify-center w-8 h-8 xl:w-9 xl:h-9 rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <step.icon className="w-4 h-4 xl:w-5 xl:h-5 text-brand-400" />
                  </div>
                </div>

                {/* Empty Spacer (Desktop) */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {processStats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center py-5 sm:py-6 px-4 ${index < 2 ? 'sm:border-r sm:border-white/[0.06]' : ''} ${index > 0 ? 'border-t sm:border-t-0 border-white/[0.06]' : ''}`}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-400 mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <InlineCTA
          title="Ready to Start Your Project?"
          description="Let's follow this proven process for your solution."
          buttonText="Kick Off Your Project"
        />
      </div>
    </section>
  );
};

export default ServiceProcessSection;
