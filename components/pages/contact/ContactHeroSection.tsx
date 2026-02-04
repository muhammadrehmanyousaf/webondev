'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Clock, Sparkles, CheckCircle } from 'lucide-react';

// =============================================================================
// CONTACT METHODS
// =============================================================================

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant answers',
    action: 'Start Chat',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with experts',
    action: '+92-310-6803687',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send requirements',
    action: 'webondev786@gmail.com',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock',
    action: 'Get Support',
  },
];

const stats = [
  { value: '< 24h', label: 'Response Time' },
  { value: 'Free', label: 'Consultation' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support' },
];

// =============================================================================
// CONTACT HERO SECTION
// =============================================================================

const ContactHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-16 pb-12 md:pt-20 md:pb-20">
      {/* === LAYERED BACKGROUND === */}

      {/* Base radial gradient - ambient light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.15), transparent 70%)',
        }}
      />

      {/* Secondary glow - lower */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 60%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Central glow behind heading */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            'linear-gradient(135deg, rgba(16,185,129,0.4) 0%, rgba(6,182,212,0.2) 50%, rgba(16,185,129,0.1) 100%)',
        }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Let&apos;s Connect
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 lg:mb-8 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Amazing</span>
            <br />
            <span className="text-slate-400">Together</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Ready to transform your business? Get in touch with our experts
            <span className="text-slate-300"> for a free consultation.</span>
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="group bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <method.icon className="w-5 h-5 sm:w-5 sm:h-5 text-brand-400" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-brand-400 transition-colors duration-200">
                  {method.title}
                </h3>

                <p className="text-slate-500 mb-2 text-xs sm:text-sm hidden sm:block">
                  {method.description}
                </p>

                <div className="text-brand-400 font-semibold text-xs sm:text-sm truncate">
                  {method.action}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg sm:text-2xl md:text-3xl font-bold text-brand-400 mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-[10px] sm:text-xs lg:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Guarantees */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {['Free Consultation', 'Quick Response', 'No Obligation'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
};

export default ContactHeroSection;
