'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'compact';
}

const InlineCTA = ({
  title = 'Ready to Get Started?',
  description = "Let's discuss your project and bring your vision to life.",
  buttonText = 'Start Your Project',
  variant = 'default',
}: InlineCTAProps) => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  if (variant === 'compact') {
    return (
      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-sm sm:text-base">
              {title}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">{description}</p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] whitespace-nowrap cursor-pointer"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mt-12 sm:mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div
        className="relative rounded-2xl p-6 sm:p-8 border border-white/[0.06] overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)',
        }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              {title}
            </h4>
            <p className="text-slate-400 text-sm sm:text-base">
              {description}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.15)] whitespace-nowrap cursor-pointer"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default InlineCTA;
