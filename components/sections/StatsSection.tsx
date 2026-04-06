'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// =============================================================================
// STATS DATA
// =============================================================================

const stats = [
  {
    number: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successfully shipped across web, mobile, and cloud',
    accent: 'text-brand-400',
  },
  {
    number: 200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses trusting us with their digital products',
    accent: 'text-teal-400',
  },
  {
    number: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistent positive feedback and referrals',
    accent: 'text-cyan-400',
  },
  {
    number: 50,
    suffix: '+',
    label: 'Technologies Mastered',
    description: 'From React to AWS, we speak every stack',
    accent: 'text-brand-400',
  },
];

// =============================================================================
// ANIMATED COUNTER
// =============================================================================

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const StatsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Layered background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />

      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            The numbers behind{' '}
            <span className="gradient-text">our work</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Our track record speaks for itself — consistent delivery, satisfied clients, and measurable impact.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative text-center py-6 px-4 sm:py-8 sm:px-5 lg:py-12 lg:px-6 ${
                index < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''
              } ${index < 2 ? 'sm:border-b lg:border-b-0 border-white/[0.06]' : ''} ${
                index === 0 ? 'sm:border-r border-white/[0.06] lg:border-r' : ''
              } ${index === 2 ? 'sm:border-r border-white/[0.06] lg:border-r' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Large number */}
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${stat.accent} mb-1 sm:mb-2`}>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>

              <div className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                {stat.label}
              </div>

              <p className="text-slate-500 text-sm max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['ISO Certified', 'GDPR Compliant', 'SOC 2 Type II', 'AWS Partner'].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-400"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
