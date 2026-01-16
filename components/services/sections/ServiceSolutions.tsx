'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Code,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Lock,
  BarChart,
  Sparkles,
  Code2,
  RefreshCw,
  Cpu,
  Search,
  Layout,
  Component,
  FileCode,
  Eye,
  ShoppingBag,
  Layers,
  Building2,
  CreditCard,
  Package,
  TrendingUp,
  GitBranch,
  Container,
  Activity,
  Compass,
  Target,
  Users,
  GraduationCap,
  UserPlus,
  MapPin,
  Bug,
  Upload,
  HeadphonesIcon,
  Mail,
  Share2,
  FileText
} from 'lucide-react';
import { ServiceData } from './index';

interface Feature {
  icon: string;
  title: string;
  description: string;
  highlights?: string[];
}

interface ServiceSolutionsProps {
  data?: ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  features?: Feature[];
  layout?: 'grid' | 'alternating' | 'bento';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Code,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Lock,
  BarChart,
  Sparkles,
  Code2,
  RefreshCw,
  Cpu,
  Search,
  Layout,
  Component,
  FileCode,
  Eye,
  ShoppingBag,
  Layers,
  Building2,
  CreditCard,
  Package,
  TrendingUp,
  GitBranch,
  Container,
  Activity,
  Compass,
  Target,
  Users,
  GraduationCap,
  UserPlus,
  MapPin,
  Bug,
  Upload,
  HeadphonesIcon,
  HeadPhones: HeadphonesIcon,
  Mail,
  Share2,
  FileText,
  Settings: Cpu,
  Wrench: Cpu,
  GitMerge: GitBranch,
  Server: Database,
  HardDrive: Database,
  Briefcase: Building2,
  Award: GraduationCap,
};

const ServiceSolutions: React.FC<ServiceSolutionsProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Powerful Solutions for Your Business',
    sectionSubtitle: propSubtitle = "Everything you need to succeed, delivered by experts who've done it hundreds of times",
    features: propFeatures,
    layout = 'grid',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const features = data?.solutions || propFeatures || [];
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Sparkles;
    return IconComponent;
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Solutions
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Features Grid - Adaptive based on count */}
        {layout === 'grid' && (
          <div className={`grid gap-8 ${
            features.length === 4
              ? 'md:grid-cols-2 lg:grid-cols-4'
              : features.length === 3
              ? 'md:grid-cols-3'
              : features.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : features.length === 6
              ? 'md:grid-cols-2 lg:grid-cols-3'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Card */}
                  <div className="relative h-full p-8 rounded-2xl bg-slate-900/80 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                    {/* Icon with gradient background */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    {feature.highlights && feature.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-tr-2xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bento Layout */}
        {layout === 'bento' && (
          <div className="bento-grid">
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              const isLarge = index === 0 || index === 3;
              const isMedium = index === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bento-item ${isLarge ? 'bento-item-lg' : isMedium ? 'bento-item-md' : ''}`}
                >
                  <div className="h-full p-8 rounded-2xl bg-slate-900/80 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-white mb-4 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlights for large cards */}
                    {isLarge && feature.highlights && (
                      <ul className="mt-6 space-y-2">
                        {feature.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Alternating Layout */}
        {layout === 'alternating' && (
          <div className="space-y-16">
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {feature.highlights && (
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {feature.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Visual placeholder */}
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                      <div className="text-center p-8">
                        <IconComponent className="w-16 h-16 text-emerald-500/50 mx-auto mb-4" />
                        <p className="text-gray-500">Visual representation</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSolutions;
