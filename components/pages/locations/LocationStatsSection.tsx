'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, Clock, MapPin, Star, TrendingUp, Sparkles } from 'lucide-react';

// =============================================================================
// LOCATION STATS SECTION - Premium Dark Design
// =============================================================================

interface LocationStatsSectionProps {
  country?: any;
  locationName?: string;
}

const LocationStatsSection = ({ country, locationName }: LocationStatsSectionProps) => {
  const stats = [
    {
      icon: Globe,
      number: '5+',
      label: 'Countries Served',
      description: 'Global presence across continents',
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      description: 'Local expertise worldwide',
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Consistent quality delivery',
    },
    {
      icon: Clock,
      number: '< 2h',
      label: 'Response Time',
      description: 'Quick support worldwide',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Excellent service quality',
    }
  ];

  const additionalStats = [
    { value: '24/7', label: 'Global Support', description: 'Round-the-clock assistance across all time zones' },
    { value: '100%', label: 'Local Expertise', description: 'Cultural understanding and local market knowledge' },
    { value: 'Fast', label: 'Deployment', description: 'Quick project delivery with quality assurance' },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Our Impact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">Global </span>
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence has created a global impact, serving clients across multiple countries
            with consistent quality and local expertise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-brand-500/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
              </div>

              {/* Stats */}
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-slate-500 text-xs sm:text-sm">
                {stat.description}
              </div>

              {/* Progress Bar */}
              <div className="mt-5 w-full bg-white/[0.05] rounded-full h-1 overflow-hidden">
                <motion.div
                  className="h-1 bg-gradient-to-r from-brand-500 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
              <span className="text-brand-400 font-semibold text-sm sm:text-base">Why Choose Us</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {additionalStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {item.value}
                  </div>
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">
                    {item.label}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationStatsSection;
