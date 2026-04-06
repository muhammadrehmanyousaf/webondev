'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// =============================================================================
// ROTATING TEXT
// =============================================================================

const RotatingText = () => {
  const words = ['Digital Vision', 'Business Growth', 'Online Success', 'Web Presence'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[160px] sm:min-w-[220px] md:min-w-[300px] lg:min-w-[420px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="gradient-text"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// =============================================================================
// HERO SECTION
// =============================================================================

const HeroSectionBeams = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-16 pb-12 md:pt-20 md:pb-20">
      {/* === LAYERED BACKGROUND === */}

      {/* Base radial gradient - ambient light */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.15), transparent 70%)',
        }}
      />

      {/* Secondary glow - lower */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 60%, rgba(6,182,212,0.06), transparent 70%)',
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
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full gradient-border-subtle hover:opacity-90 transition-opacity mb-6 sm:mb-8"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/20">
                <Sparkles className="w-3 h-3 text-brand-400" />
              </span>
              <span className="text-sm text-slate-300">
                See our latest work — <span className="text-brand-400 font-semibold group-hover:text-brand-300 transition-colors">View Portfolio</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 lg:mb-8 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We Build Software
            <br />
            <span className="text-slate-400">That Moves Your</span>
            <br />
            <RotatingText />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Enterprise-grade web development, mobile apps, and digital solutions.
            <span className="text-slate-300"> Built for scale. Designed for impact.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button asChild size="xl" className="w-full sm:w-auto rounded-full px-8 sm:px-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <Link href="/contact" className="flex items-center justify-center gap-2.5">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="w-full sm:w-auto rounded-full px-8 sm:px-10 border-white/10 hover:border-white/20 hover:bg-white/[0.03]">
              <Link href="/portfolio" className="flex items-center justify-center gap-2.5">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Trust Metrics - Redesigned as cards */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Client Count */}
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
                <div className="text-white font-semibold text-xs sm:text-sm">200+ Clients</div>
                <div className="text-slate-500 text-[10px] sm:text-xs">Worldwide</div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-xs sm:text-sm">4.9/5 Rating</div>
                <div className="text-slate-500 text-[10px] sm:text-xs">on Clutch</div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <div className="text-left">
                <div className="text-white font-semibold text-xs sm:text-sm">10+ Years</div>
                <div className="text-slate-500 text-[10px] sm:text-xs">Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default HeroSectionBeams;
