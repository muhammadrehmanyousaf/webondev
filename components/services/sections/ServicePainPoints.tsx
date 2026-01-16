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
    sectionTitle: propTitle = 'Are You Facing These Challenges?',
    sectionSubtitle: propSubtitle = 'Common problems businesses encounter without professional help',
    painPoints: propPainPoints,
    conclusionTitle = "You're Not Alone",
    conclusionText = 'These challenges affect thousands of businesses. The good news? We have proven solutions for each one.',
    ctaText = 'See How We Solve These',
    ctaLink = '#solutions',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const painPoints = data?.painPoints || propPainPoints || [];
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || AlertCircle;
    return IconComponent;
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Warning gradient pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            Common Challenges
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
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
                <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-red-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4">
                    {point.description}
                  </p>

                  {/* Stat if available */}
                  {point.stat && (
                    <div className="pt-4 border-t border-slate-700/50">
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
                <p className="text-lg text-gray-300 max-w-2xl">
                  {conclusionText}
                </p>
              </div>

              {/* CTA */}
              <a
                href={ctaLink}
                className="flex-shrink-0 btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePainPoints;
