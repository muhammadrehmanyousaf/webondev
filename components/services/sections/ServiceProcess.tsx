'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  FileSearch,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Search,
  PenTool,
  Settings,
  Upload,
  Play,
  RefreshCcw,
  Compass,
  Map,
  Presentation,
  Lightbulb,
  BookOpen,
  TrendingUp,
  FileText,
  HeadphonesIcon
} from 'lucide-react';
import { ServiceData } from './index';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
}

interface ServiceProcessProps {
  data?: ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  steps?: ProcessStep[];
  totalDuration?: string;
  layout?: 'timeline' | 'cards' | 'horizontal';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  FileSearch,
  Palette,
  Code,
  TestTube,
  Rocket,
  HeartHandshake,
  CheckCircle,
  Search,
  PenTool,
  Settings,
  Upload,
  Play,
  RefreshCcw,
  Compass,
  Map,
  Presentation,
  Lightbulb,
  BookOpen,
  TrendingUp,
  FileText,
  HeadphonesIcon,
};

const ServiceProcess: React.FC<ServiceProcessProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Our Proven Process',
    sectionSubtitle: propSubtitle = 'A transparent, battle-tested workflow that delivers results every time',
    steps: propSteps,
    totalDuration: propDuration = '4-8 weeks',
    layout = 'timeline',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const steps = data?.process?.steps || propSteps || [];
  const totalDuration = data?.process?.totalDuration || propDuration;
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || CheckCircle;
    return IconComponent;
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/50 to-transparent" />
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
            <Rocket className="w-4 h-4" />
            How We Work
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-4">
            {sectionSubtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-300">
            <span className="text-sm">Average project timeline:</span>
            <span className="font-semibold text-emerald-400">{totalDuration}</span>
          </div>
        </motion.div>

        {/* Timeline Layout */}
        {layout === 'timeline' && (
          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => {
                const IconComponent = getIcon(step.icon);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`relative lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:mb-16`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <div className={`p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 ${isEven ? 'lg:ml-auto' : ''} max-w-xl`}>
                        {/* Step number badge */}
                        <div className={`inline-flex items-center gap-2 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                            Step {index + 1}
                          </span>
                          {step.duration && (
                            <span className="text-sm text-gray-500">
                              {step.duration}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        {step.deliverables && step.deliverables.length > 0 && (
                          <div className={`pt-4 border-t border-slate-700/50 ${isEven ? 'lg:text-left' : ''}`}>
                            <p className="text-sm text-gray-500 mb-2">Deliverables:</p>
                            <ul className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                              {step.deliverables.map((item, dIndex) => (
                                <li key={dIndex} className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-gray-300">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Center icon (desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 items-center justify-center shadow-lg shadow-emerald-500/25 z-10">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Mobile icon */}
                    <div className="lg:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    </div>

                    {/* Spacer for opposite side (desktop) */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Cards Layout */}
        {layout === 'cards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const IconComponent = getIcon(step.icon);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-emerald-500/50" />
                    </div>
                  )}

                  <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-slate-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    {step.duration && (
                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <span className="text-sm text-emerald-400">{step.duration}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Horizontal Layout */}
        {layout === 'horizontal' && (
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {steps.map((step, index) => {
                const IconComponent = getIcon(step.icon);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    {/* Icon */}
                    <div className="relative inline-flex">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 mx-auto mb-4">
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-white text-sm md:text-base">
                      {step.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceProcess;
