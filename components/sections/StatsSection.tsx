'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Award,
  Clock,
  Globe,
  Code,
  Smartphone,
  Zap,
  Sparkles,
} from 'lucide-react';

// =============================================================================
// STATS DATA
// =============================================================================

const stats = [
  {
    icon: Award,
    number: 150,
    suffix: '+',
    label: 'Projects Completed',
    gradient: 'from-brand-500 to-teal-500',
    description: 'Successful deliveries',
  },
  {
    icon: Users,
    number: 150,
    suffix: '+',
    label: 'Happy Clients',
    gradient: 'from-teal-500 to-cyan-500',
    description: 'Worldwide satisfaction',
  },
  {
    icon: Clock,
    number: 5,
    suffix: '+',
    label: 'Years Experience',
    gradient: 'from-cyan-500 to-blue-500',
    description: 'Industry expertise',
  },
  {
    icon: TrendingUp,
    number: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    gradient: 'from-brand-500 to-lime-500',
    description: 'Positive feedback',
  },
  {
    icon: Globe,
    number: 5,
    suffix: '+',
    label: 'Countries Served',
    gradient: 'from-purple-500 to-brand-500',
    description: 'Global presence',
  },
  {
    icon: Code,
    number: 50,
    suffix: '+',
    label: 'Technologies',
    gradient: 'from-blue-500 to-purple-500',
    description: 'Tech stack mastery',
  },
  {
    icon: Smartphone,
    number: 50,
    suffix: '+',
    label: 'Mobile Apps',
    gradient: 'from-pink-500 to-brand-500',
    description: 'iOS & Android apps',
  },
  {
    icon: Zap,
    number: 24,
    suffix: '/7',
    label: 'Support Available',
    gradient: 'from-amber-500 to-brand-500',
    description: 'Always available',
  },
];

// =============================================================================
// ANIMATED COUNTER COMPONENT
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
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(16, 185, 129, 0.5) 100px,
              rgba(16, 185, 129, 0.5) 101px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We&apos;ve helped businesses across the globe
            achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <motion.div
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg shadow-brand-500/20 mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-white font-semibold text-lg mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-slate-400 text-sm">
                  {stat.description}
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our
            comprehensive software solutions. From startups to enterprise companies, we deliver
            results that matter.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {['ISO Certified', 'GDPR Compliant', 'SOC 2 Type II', 'AWS Partner'].map((badge, index) => (
              <motion.div
                key={badge}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-brand-500/30 hover:text-brand-400 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
