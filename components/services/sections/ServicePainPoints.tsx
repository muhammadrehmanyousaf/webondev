'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  TrendingDown,
  Clock,
  DollarSign,
  Users,
  ShieldX,
  Frown,
  Target,
  ArrowRight,
  Package,
  Layers,
  Smartphone,
  RefreshCw,
  Code,
  Shield,
  BarChart2,
  Scale,
  Globe,
  Compass,
  HardDrive,
  Server,
  MousePointer,
  Eye,
  AlertTriangle,
  Zap,
  Activity,
  Lock,
  FileText,
  Search,
  Settings,
  Database,
  Cloud,
  Wifi,
  Bug,
  HeadphonesIcon,
  TrendingUp,
  Wrench,
  GitMerge,
  CheckCircle,
  XCircle,
  Timer,
  Gauge,
  ShoppingCart,
  CreditCard,
  Building2,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { ServiceData } from './index';

interface PainPoint {
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

interface ServicePainPointsProps {
  data?: ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  painPoints?: PainPoint[];
  conclusionTitle?: string;
  conclusionText?: string;
  ctaText?: string;
  ctaLink?: string;
  city?: string;
  state?: string;
  country?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertCircle,
  TrendingDown,
  Clock,
  DollarSign,
  Users,
  ShieldX,
  Frown,
  Target,
  Package,
  Layers,
  Smartphone,
  RefreshCw,
  Code,
  Shield,
  BarChart2,
  Scale,
  Globe,
  Compass,
  HardDrive,
  Server,
  MousePointer,
  Accessibility: Eye,
  Eye,
  AlertTriangle,
  Zap,
  Activity,
  Lock,
  FileText,
  Search,
  Settings,
  Database,
  Cloud,
  Wifi,
  Bug,
  HeadphonesIcon,
  HeadPhones: HeadphonesIcon,
  TrendingUp,
  Wrench,
  GitMerge,
  CheckCircle,
  XCircle,
  Timer,
  Gauge,
  ShoppingCart,
  CreditCard,
  Building2,
  Briefcase,
  GraduationCap,
  Award,
};

const ServicePainPoints: React.FC<ServicePainPointsProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle,
    sectionSubtitle: propSubtitle,
    painPoints: propPainPoints,
    conclusionTitle: propConclusionTitle,
    conclusionText: propConclusionText,
    ctaText = 'See How We Solve These',
    ctaLink = '#solutions',
    city,
    state,
    country,
  } = props;

  const locationLabel = city || state || country || '';
  const fullLocation = [city, state, country].filter(Boolean).join(', ');

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle || (locationLabel ? `Are Businesses in ${locationLabel} Facing These Challenges?` : 'Are You Facing These Challenges?');
  const sectionSubtitle = propSubtitle || (locationLabel ? `Common problems ${locationLabel} businesses encounter without professional help` : 'Common problems businesses encounter without professional help');
  const conclusionTitle = propConclusionTitle || (locationLabel ? `${locationLabel} Businesses Deserve Better` : "You're Not Alone");
  const conclusionText = propConclusionText || (locationLabel ? `These challenges affect businesses across ${fullLocation || locationLabel}. The good news? We have proven solutions for each one—backed by 500+ delivered projects.` : 'These challenges affect thousands of businesses. The good news? We have proven solutions for each one.');
  const painPoints = data?.painPoints || propPainPoints || [];
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || AlertCircle;
    return IconComponent;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(239,68,68,0.04), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-red-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span>Common Challenges</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{sectionTitle} </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Pain Points Grid - Adaptive based on count */}
        <div className={`grid gap-6 mb-16 ${
          painPoints.length === 4
            ? 'md:grid-cols-2 lg:grid-cols-4'
            : painPoints.length === 3
            ? 'md:grid-cols-3'
            : painPoints.length === 2
            ? 'md:grid-cols-2 max-w-4xl mx-auto'
            : painPoints.length === 6
            ? 'md:grid-cols-2 lg:grid-cols-3'
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {painPoints.map((point, index) => {
            const IconComponent = getIcon(point.icon);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="h-full p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-red-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-4">
                    {point.description}
                  </p>

                  {/* Stat if available */}
                  {point.stat && (
                    <div className="pt-4 border-t border-white/[0.06]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-red-400">
                          {point.stat}
                        </span>
                        <span className="text-sm text-gray-500">
                          {point.statLabel}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

          {/* Card */}
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-2xl border border-emerald-500/30 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {conclusionTitle}
                </h3>
                <p className="text-lg text-slate-300 max-w-2xl">
                  {conclusionText}
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('solutions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-shrink-0 btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePainPoints;
