'use client';

import React from 'react';
import { motion } from 'framer-motion';

// =============================================================================
// CLIENT LOGOS - CSS MARQUEE
// =============================================================================

const clientLogos = [
  'TechCorp', 'Innovate Inc', 'StartupXYZ', 'Global Solutions',
  'NextGen', 'DigiWave', 'CloudFirst', 'DataDriven',
  'ScaleUp', 'TechFlow', 'Innovators', 'FutureLab',
];

const LogoMarquee = () => (
  <div className="relative overflow-hidden">
    {/* Edge fades */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />

    <div className="flex animate-marquee">
      {[...clientLogos, ...clientLogos].map((name, i) => (
        <div
          key={i}
          className="flex items-center shrink-0 mx-8 sm:mx-12"
        >
          <span className="text-[15px] font-semibold tracking-wide text-white/20 whitespace-nowrap uppercase">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const TrustSignalsBar = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.15), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top text */}
        <motion.p
          className="text-center text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/30 mb-6 sm:mb-8 lg:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders worldwide
        </motion.p>

        {/* Logo Carousel */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <LogoMarquee />
        </div>

        {/* Metrics - Horizontal strip with dividers */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { value: '200+', label: 'Projects delivered', accent: 'text-brand-400' },
            { value: '50+', label: 'Countries served', accent: 'text-teal-400' },
            { value: '99.9%', label: 'Uptime guarantee', accent: 'text-cyan-400' },
            { value: '4.9/5', label: 'Client satisfaction', accent: 'text-brand-400' },
          ].map((metric, i) => (
            <div
              key={metric.label}
              className={`relative text-center py-5 sm:py-6 lg:py-0 ${
                i < 3 ? 'lg:border-r lg:border-white/[0.06]' : ''
              } ${i < 2 ? 'border-b lg:border-b-0 border-white/[0.06]' : ''} ${
                i === 0 || i === 2 ? 'border-r border-white/[0.06] lg:border-r' : ''
              }`}
            >
              <div className={`text-2xl sm:text-3xl lg:text-5xl font-bold ${metric.accent} mb-1 sm:mb-2`}>
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications row */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {['Google Partner', 'AWS Certified', 'ISO 27001', 'Shopify Plus', 'Meta Partner'].map((cert) => (
            <div
              key={cert}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-400"
            >
              {cert}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default TrustSignalsBar;
