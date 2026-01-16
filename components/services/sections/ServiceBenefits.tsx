'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Award,
  Users,
  Target,
  BarChart,
  Heart,
  Lock,
  GitMerge,
  RefreshCcw,
  Repeat,
  Smartphone,
  Globe,
  Activity,
  Code,
  HeadphonesIcon,
  BookOpen,
  BarChart2
} from 'lucide-react';
import { ServiceData } from './index';

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
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Award,
  Users,
  Target,
  BarChart,
  Heart,
  Lock,
  GitMerge,
  RefreshCcw,
  Repeat,
  Smartphone,
  Globe,
  Activity,
  Code,
  HeadphonesIcon,
  HeadPhones: HeadphonesIcon,
  BookOpen,
  BarChart2,
  CheckCircle: Award,
  FileText: BookOpen,
  Settings: Activity,
  Wrench: Activity,
  Database: BarChart,
  Cloud: Globe,
  Briefcase: Users,
  Building2: Users,
  GraduationCap: Award,
};

// Animated counter component
const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end,
  suffix = '',
  duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const ServiceBenefits: React.FC<ServiceBenefitsProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Real Results That Matter',
    sectionSubtitle: propSubtitle = 'Measurable outcomes our clients experience when working with us',
    benefits: propBenefits,
    layout = 'mixed',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const benefits = data?.benefits || propBenefits || [];

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Award;
    return IconComponent;
  };

  const parseStatNumber = (stat: string): number => {
    return parseInt(stat.replace(/[^0-9]/g, ''), 10) || 0;
  };

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Proven Results
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Stats Layout */}
        {layout === 'stats' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icon);
              const statNumber = parseStatNumber(benefit.stat || '0');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    <AnimatedCounter end={statNumber} suffix={benefit.statSuffix || ''} />
                  </div>

                  <p className="text-sm text-gray-400">
                    {benefit.statLabel || benefit.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Cards Layout - Adaptive based on count */}
        {layout === 'cards' && (
          <div className={`grid gap-6 md:gap-8 ${
            benefits.length === 4
              ? 'md:grid-cols-2 lg:grid-cols-4'
              : benefits.length === 3
              ? 'md:grid-cols-3'
              : benefits.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {benefits.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Mixed Layout - Stats on top, Benefits below */}
        {layout === 'mixed' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {benefits.slice(0, 4).map((benefit, index) => {
                const IconComponent = getIcon(benefit.icon);
                const statNumber = parseStatNumber(benefit.stat || '0');

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Glow on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 text-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-5 h-5 text-emerald-400" />
                      </div>

                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        <AnimatedCounter end={statNumber} suffix={benefit.statSuffix || ''} />
                      </div>

                      <p className="text-xs md:text-sm text-gray-400">
                        {benefit.statLabel || benefit.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.slice(4).map((benefit, index) => {
                const IconComponent = getIcon(benefit.icon);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/30 border border-slate-800/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ServiceBenefits;
