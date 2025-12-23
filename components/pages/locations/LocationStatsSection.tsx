'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, Clock, MapPin, Star, TrendingUp, Sparkles } from 'lucide-react';

// =============================================================================
// LOCATION STATS SECTION - Premium Emerald Green Design
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
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      description: 'Local expertise worldwide',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Consistent quality delivery',
      gradient: 'from-brand-500 to-lime-500'
    },
    {
      icon: Clock,
      number: '< 2h',
      label: 'Response Time',
      description: 'Quick support worldwide',
      gradient: 'from-purple-500 to-brand-500'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Excellent service quality',
      gradient: 'from-amber-500 to-brand-500'
    }
  ];

  const additionalStats = [
    { value: '24/7', label: 'Global Support', description: 'Round-the-clock assistance across all time zones' },
    { value: '100%', label: 'Local Expertise', description: 'Cultural understanding and local market knowledge' },
    { value: 'Fast', label: 'Deployment', description: 'Quick project delivery with quality assurance' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
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
            <TrendingUp className="w-4 h-4" />
            <span>Our Impact</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Global</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence has created a global impact, serving clients across multiple countries
            with consistent quality and local expertise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg shadow-brand-500/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Stats */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.description}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className={`h-1.5 bg-gradient-to-r ${stat.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
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
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-10" />

          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <span className="text-brand-400 font-semibold">Why Choose Us</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {additionalStats.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent mb-3 group-hover:from-brand-300 group-hover:to-teal-300 transition-all">
                    {item.value}
                  </div>
                  <div className="text-white font-semibold text-lg mb-2">
                    {item.label}
                  </div>
                  <div className="text-slate-400 text-sm">
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
