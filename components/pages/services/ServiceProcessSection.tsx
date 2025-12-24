'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, FileText, Code, TestTube, Rocket, Headphones, Sparkles, Check, ArrowRight } from 'lucide-react';

const ServiceProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, requirements, and challenges through detailed consultation.',
      gradient: 'from-brand-500 to-teal-500',
      duration: '1-2 Days',
      deliverables: ['Requirements Document', 'Project Brief', 'Initial Proposal']
    },
    {
      icon: FileText,
      title: 'Planning & Strategy',
      description: 'Our team creates a comprehensive project plan with timelines, milestones, and technical specifications.',
      gradient: 'from-teal-500 to-cyan-500',
      duration: '3-5 Days',
      deliverables: ['Project Roadmap', 'Technical Specs', 'Resource Allocation']
    },
    {
      icon: Code,
      title: 'Development & Design',
      description: 'We bring your vision to life using cutting-edge technologies and best practices in development.',
      gradient: 'from-cyan-500 to-blue-500',
      duration: '2-12 Weeks',
      deliverables: ['Working Prototype', 'UI/UX Designs', 'Core Features']
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.',
      gradient: 'from-blue-500 to-purple-500',
      duration: '1-2 Weeks',
      deliverables: ['QA Reports', 'Performance Metrics', 'Security Audit']
    },
    {
      icon: Rocket,
      title: 'Launch & Deployment',
      description: 'We handle the complete deployment process and ensure a smooth launch of your solution.',
      gradient: 'from-purple-500 to-pink-500',
      duration: '1-3 Days',
      deliverables: ['Live Deployment', 'Documentation', 'Training Session']
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your solution running smoothly and up-to-date.',
      gradient: 'from-pink-500 to-brand-500',
      duration: 'Ongoing',
      deliverables: ['24/7 Support', 'Regular Updates', 'Performance Monitoring']
    }
  ];

  const stats = [
    { value: '98%', label: 'On-Time Delivery', description: 'Projects delivered within agreed timelines' },
    { value: '100%', label: 'Client Satisfaction', description: 'Clients satisfied with our process and results' },
    { value: '24/7', label: 'Communication', description: 'Round-the-clock project updates and support' },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"
          animate={{
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Development Process</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">How We Build</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology that ensures successful project delivery,
            from initial consultation to ongoing support.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-teal-500 to-cyan-500 opacity-30" />

          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                      <motion.div
                        className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Mobile Step Number */}
                        <div className="lg:hidden absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                            {index + 1}
                          </div>
                        </div>

                        {/* Header */}
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <motion.div
                            className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg shadow-brand-500/20`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <step.icon className="w-7 h-7 text-white" />
                          </motion.div>
                          <div className={isEven ? 'lg:text-right' : ''}>
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-10 text-xs font-semibold text-white/80 mb-2`}>
                              {step.duration}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-slate-400 mb-6 leading-relaxed ${isEven ? 'lg:text-right' : ''}`}>
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className={`space-y-2 ${isEven ? 'lg:items-end' : ''}`}>
                          <p className={`text-sm font-semibold text-slate-500 mb-2 ${isEven ? 'lg:text-right' : ''}`}>Deliverables:</p>
                          <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                            {step.deliverables.map((deliverable, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
                              >
                                <Check className="w-3 h-3 text-brand-400" />
                                {deliverable}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-xl`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
                    >
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <span className="text-xl font-bold text-white">{index + 1}</span>
                      </div>
                    </motion.div>

                    {/* Connector Arrow */}
                    {index < processSteps.length - 1 && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 text-brand-500/50"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ArrowRight className="w-6 h-6 rotate-90" />
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Why Our <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Process Works</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                    <p className="text-slate-400 text-sm">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
