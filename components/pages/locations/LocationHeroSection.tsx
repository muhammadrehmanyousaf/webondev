'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users, Award, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// LOCATION HERO SECTION - Premium Dark Design
// =============================================================================

interface LocationHeroSectionProps {
  title?: string;
  subtitle?: string;
  flag?: string;
  currency?: string;
  timezone?: string;
  locationName?: string;
}

const LocationHeroSection = ({
  title = "Where We Serve",
  subtitle = "Discover our global presence with local expertise. We deliver cutting-edge software solutions across multiple countries, bringing world-class technology to your doorstep.",
  flag,
  currency,
  timezone,
  locationName
}: LocationHeroSectionProps) => {

  const stats = [
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Served',
    },
    {
      icon: MapPin,
      number: '500+',
      label: 'Projects Delivered',
    },
    {
      icon: Users,
      number: '250+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Client Rating',
    }
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 lg:pt-40 pb-20 overflow-hidden bg-[#030712]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto -mt-28">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Global Presence, Local Excellence</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">{title.split(' ').slice(0, -1).join(' ')} </span>
            <span className="gradient-text">
              {title.split(' ').slice(-1)[0]}
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Location Info */}
          {flag && currency && timezone && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.02] rounded-xl border border-white/[0.06]">
                <span className="text-3xl sm:text-4xl">{flag}</span>
                <div>
                  <span className="font-bold text-white block text-sm sm:text-base">{locationName}</span>
                  <span className="text-slate-500 text-xs sm:text-sm">{currency}</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-white/[0.02] rounded-xl border border-white/[0.06]">
                <span className="text-slate-500 text-xs sm:text-sm block">Timezone</span>
                <span className="font-bold text-white text-sm sm:text-base">{timezone}</span>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-semibold"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Meeting
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              variant="outline"
              className="border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 px-8 py-3 rounded-xl font-semibold"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Talk
              </span>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-brand-500/20 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
};

export default LocationHeroSection;
