'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TrendingUp, Clock, DollarSign, Shield, Zap, Award, Users, Target,
  BarChart, Heart, Lock, GitMerge, RefreshCcw, Repeat, Smartphone,
  Globe, Activity, Code, HeadphonesIcon, BookOpen, BarChart2, ArrowUpRight,
} from 'lucide-react';
import { ServiceData } from './index';

// =============================================================================
// SERVICE BENEFITS - World-class bento grid with animated counters
// =============================================================================

interface Benefit {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statSuffix?: string;
  statLabel?: string;
}

interface ServiceBenefitsProps {
  data?: ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  benefits?: Benefit[];
  layout?: 'stats' | 'cards' | 'mixed';
  city?: string;
  state?: string;
  country?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Clock, DollarSign, Shield, Zap, Award, Users, Target,
  BarChart, Heart, Lock, GitMerge, RefreshCcw, Repeat, Smartphone,
  Globe, Activity, Code, HeadphonesIcon,
  HeadPhones: HeadphonesIcon, BookOpen, BarChart2,
  CheckCircle: Award, FileText: BookOpen, Settings: Activity,
  Wrench: Activity, Database: BarChart, Cloud: Globe,
  Briefcase: Users, Building2: Users, GraduationCap: Award,
};

// Gradient palette for benefit cards
const cardGradients = [
  { from: 'from-emerald-500/10', to: 'to-teal-500/10', border: 'hover:border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/15', glow: 'shadow-emerald-500/20' },
  { from: 'from-blue-500/10', to: 'to-cyan-500/10', border: 'hover:border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/15', glow: 'shadow-blue-500/20' },
  { from: 'from-violet-500/10', to: 'to-purple-500/10', border: 'hover:border-violet-500/30', text: 'text-violet-400', bg: 'bg-violet-500/15', glow: 'shadow-violet-500/20' },
  { from: 'from-amber-500/10', to: 'to-orange-500/10', border: 'hover:border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/15', glow: 'shadow-amber-500/20' },
  { from: 'from-rose-500/10', to: 'to-pink-500/10', border: 'hover:border-rose-500/30', text: 'text-rose-400', bg: 'bg-rose-500/15', glow: 'shadow-rose-500/20' },
  { from: 'from-cyan-500/10', to: 'to-sky-500/10', border: 'hover:border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/15', glow: 'shadow-cyan-500/20' },
];

const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end, suffix = '', duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ServiceBenefits: React.FC<ServiceBenefitsProps> = (props) => {
  const {
    data, sectionTitle: propTitle, sectionSubtitle: propSubtitle,
    benefits: propBenefits, city, state, country,
  } = props;

  const locationLabel = city || state || country || '';
  const sectionTitle = propTitle || (locationLabel ? `Real Results for ${locationLabel} Businesses` : 'Real Results That Matter');
  const sectionSubtitle = propSubtitle || (locationLabel ? `Measurable outcomes ${locationLabel} clients experience when working with us` : 'Measurable outcomes our clients experience when working with us');
  const benefits = data?.benefits || propBenefits || [];

  const getIcon = (iconName: string) => iconMap[iconName] || Award;
  const parseStatNumber = (stat: string): number => parseInt(stat.replace(/[^0-9]/g, ''), 10) || 0;

  // Split benefits: those with valid stats vs text-only
  const withStats = benefits.filter(b => b.stat && parseStatNumber(b.stat) > 0);
  const withoutStats = benefits.filter(b => !b.stat || parseStatNumber(b.stat) === 0);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 40% at 80% 80%, rgba(6,182,212,0.04), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            <span>Proven Results</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold mb-6 leading-[1.15] tracking-tight">
            <span className="text-white">{sectionTitle.split(' ').slice(0, -1).join(' ')} </span>
            <span className="gradient-text">{sectionTitle.split(' ').slice(-1)}</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Stats Banner - Horizontal strip with animated numbers */}
        {withStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-brand-500/20 to-cyan-500/20 p-px">
                <div className="absolute inset-px rounded-[15px] bg-[#060d1b]" />
              </div>

              <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
                {withStats.slice(0, 4).map((benefit, index) => {
                  const IconComponent = getIcon(benefit.icon);
                  const statNumber = parseStatNumber(benefit.stat || '0');

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative p-6 sm:p-8 text-center group"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className={`w-10 h-10 rounded-xl ${cardGradients[index % cardGradients.length].bg} flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`w-5 h-5 ${cardGradients[index % cardGradients.length].text}`} />
                        </div>

                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tabular-nums">
                          <AnimatedCounter end={statNumber} suffix={benefit.statSuffix || ''} />
                        </div>

                        <p className="text-sm text-slate-500 font-medium">
                          {benefit.statLabel || benefit.title}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Bento Grid - Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {(withoutStats.length > 0 ? withoutStats : benefits.slice(withStats.length > 0 ? 4 : 0)).map((benefit, index) => {
            const IconComponent = getIcon(benefit.icon);
            const gradient = cardGradients[index % cardGradients.length];
            const isFeatured = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Gradient border on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                <div className={`relative h-full rounded-2xl bg-white/[0.02] border border-white/[0.06] ${gradient.border} backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg ${gradient.glow} overflow-hidden`}>
                  {/* Subtle top glow */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent ${gradient.text.replace('text-', 'via-').replace('400', '500/40')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`p-6 sm:p-8 ${isFeatured ? 'flex flex-col sm:flex-row items-start gap-6' : ''}`}>
                    {/* Icon */}
                    <div className={`${gradient.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mb-5 ${isFeatured ? 'sm:mb-0' : ''}`}>
                      <IconComponent className={`w-6 h-6 ${gradient.text}`} />
                    </div>

                    <div className="flex-1">
                      {/* Title with arrow */}
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                          {benefit.title}
                        </h3>
                        <ArrowUpRight className={`w-4 h-4 ${gradient.text} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300`} />
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>

                      {/* Stat badge if available */}
                      {benefit.stat && (
                        <div className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]`}>
                          <span className={`text-sm font-bold ${gradient.text}`}>{benefit.stat}</span>
                          {benefit.statLabel && (
                            <span className="text-xs text-slate-500">{benefit.statLabel}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
