'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Grid3X3,
  Code,
  Smartphone,
  Palette,
  Globe,
  Cloud,
  ShoppingCart,
  BarChart,
  Settings,
  Shield,
  Database,
  Lock,
  Zap,
  Activity,
  Users,
  Target,
  HeadphonesIcon,
  FileText,
  TrendingUp,
  Award,
  Bug,
  Layers,
  Building2,
  Briefcase,
  AlertTriangle
} from 'lucide-react';

interface RelatedService {
  name: string;
  slug: string;
  description: string;
  icon?: string;
  category?: string;
}

interface ServiceRelatedProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  services?: RelatedService[];
  currentService?: string;
  baseUrl?: string;
  layout?: 'grid' | 'list' | 'compact';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Smartphone,
  Palette,
  Globe,
  Cloud,
  ShoppingCart,
  BarChart,
  Settings,
  Grid3X3,
  Lightbulb: Settings,
  Wrench: Settings,
  Users,
  TrendingUp,
  Layout: Palette,
  Shield,
  Database,
  Lock,
  Zap,
  Activity,
  Target,
  HeadphonesIcon,
  HeadPhones: HeadphonesIcon,
  FileText,
  Award,
  Bug,
  Layers,
  Building2,
  Briefcase,
  AlertTriangle,
};

const ServiceRelated: React.FC<ServiceRelatedProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Related Services',
    sectionSubtitle: propSubtitle = 'Explore more ways we can help your business grow',
    services: propServices,
    currentService,
    baseUrl = '/services',
    layout = 'grid',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const services = data?.relatedServices || propServices || [];
  const getIcon = (iconName?: string) => {
    const IconComponent = iconName ? iconMap[iconName] : Grid3X3;
    return IconComponent || Grid3X3;
  };

  // Filter out current service if provided
  const filteredServices = currentService
    ? services.filter(s => s.slug !== currentService)
    : services;

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Grid3X3 className="w-4 h-4" />
            More Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid Layout - Adaptive based on count */}
        {layout === 'grid' && (
          <div className={`grid gap-6 ${
            filteredServices.length === 4
              ? 'md:grid-cols-2 lg:grid-cols-4'
              : filteredServices.length === 3
              ? 'md:grid-cols-3'
              : filteredServices.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredServices.slice(0, 6).map((service, index) => {
              const IconComponent = getIcon(service.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`${baseUrl}/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-emerald-500" />
                      </div>

                      {/* Category tag */}
                      {(service as any).category && (
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs text-gray-400 mb-3">
                          {(service as any).category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-emerald-500 font-medium text-sm group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* List Layout */}
        {layout === 'list' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`${baseUrl}/${service.slug}`}
                    className="group flex items-center gap-6 p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                      <IconComponent className="w-6 h-6 text-emerald-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Compact Layout */}
        {layout === 'compact' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`${baseUrl}/${service.slug}`}
                    className="group flex flex-col items-center p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-all">
                      <IconComponent className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium hover:border-emerald-500/50 hover:bg-slate-700/50 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceRelated;
