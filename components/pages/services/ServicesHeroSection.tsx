'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket, CheckCircle, Headphones, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// TRUST METRIC CARDS
// =============================================================================

const trustMetrics = [
  {
    icon: Layers,
    value: '10+',
    label: 'Service Categories',
    sub: 'Full Spectrum',
  },
  {
    icon: Rocket,
    value: '150+',
    label: 'Projects Delivered',
    sub: 'On Time',
  },
  {
    icon: CheckCircle,
    value: '100+',
    label: 'Specialized Services',
    sub: 'End-to-End',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Support Available',
    sub: 'Always On',
  },
];

// =============================================================================
// SERVICES HERO SECTION
// =============================================================================

const ServicesHeroSection = () => {
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
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Our Services
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
            Complete Software
            <br />
            <span className="gradient-text">Solutions</span>
            <br />
            <span className="text-slate-400">for Your Business</span>
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
            From web development to mobile apps, from design to marketing
            &mdash; we provide end-to-end digital solutions that drive growth
            <span className="text-slate-300">
              {' '}
              and innovation for businesses of all sizes.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Button
              size="lg"
              className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)] group"
              onClick={() =>
                window.dispatchEvent(new CustomEvent('openBookingModal'))
              }
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 group"
              onClick={() =>
                window.dispatchEvent(new CustomEvent('openBookingModal'))
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Talk to an Expert
            </Button>
          </motion.div>

          {/* Trust Metric Cards */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl lg:max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-500/10 shrink-0">
                  <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-white font-semibold text-xs sm:text-sm">
                    {metric.value}
                  </div>
                  <div className="text-slate-500 text-[10px] sm:text-xs truncate">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Clients */}
            <div className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#030712] bg-gradient-to-br from-brand-500/30 to-teal-500/30 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-brand-300"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-xs sm:text-sm">
                  200+ Clients
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">
                  Worldwide
                </div>
              </div>
            </div>

            {/* Satisfaction */}
            <div className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <div className="text-left">
                <div className="text-white font-semibold text-xs sm:text-sm">
                  99% Satisfaction
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">
                  Client Retention
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <div className="text-left">
                <div className="text-white font-semibold text-xs sm:text-sm">
                  10+ Years
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs">
                  Industry Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
};

export default ServicesHeroSection;
