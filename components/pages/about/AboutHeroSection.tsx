'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Users, number: '200+', label: 'Happy Clients' },
  { icon: Award, number: '150+', label: 'Projects Completed' },
  { icon: Globe, number: '50+', label: 'Countries Served' },
  { icon: Zap, number: '10+', label: 'Years Experience' },
];

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-16 pb-12 md:pt-20 md:pb-20">
      {/* Layered background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 60%, rgba(6,182,212,0.05), transparent 70%)',
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              About Web On Dev
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 lg:mb-8 leading-[1.05] tracking-tight"
          >
            Building the{' '}
            <span className="gradient-text">Future</span>
            <br />
            <span className="text-slate-400">of Software</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We are a passionate team of developers, designers, and strategists dedicated to transforming businesses through innovative software solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">{stat.number}</div>
                <div className="text-slate-500 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
};

export default AboutHeroSection;
