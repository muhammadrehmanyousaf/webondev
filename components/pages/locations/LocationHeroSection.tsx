'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users, Award, Calendar, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// =============================================================================
// LOCATION HERO SECTION - Premium Emerald Green Design
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
      number: '5+',
      label: 'Countries Served',
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      gradient: 'from-brand-500 to-lime-500'
    }
  ];

  return (
    <section className="relative min-h-[90vh] pt-32 lg:pt-40 pb-20 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-brand-500/20 rounded-full blur-[150px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-[150px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center min-h-[70vh]">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Global Presence, Local Excellence</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">{title.split(' ').slice(0, -1).join(' ')} </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {title.split(' ').slice(-1)[0]}
            </span>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Location Info */}
          {flag && currency && timezone && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <span className="text-4xl">{flag}</span>
                <div>
                  <span className="font-bold text-white block">{locationName}</span>
                  <span className="text-slate-400 text-sm">{currency}</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <span className="text-slate-400 text-sm block">Timezone</span>
                <span className="font-bold text-white">{timezone}</span>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="glow" size="xl" className="rounded-full px-10 group">
                <Link href="#book-meeting" className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Book Meeting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="xl" className="rounded-full px-10 border-white/20 text-white hover:bg-white/10">
                <Link href="#book-meeting" className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Let&apos;s Talk
                </Link>
              </Button>
            </motion.div>
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
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500">
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-brand-500/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-brand-500 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LocationHeroSection;
