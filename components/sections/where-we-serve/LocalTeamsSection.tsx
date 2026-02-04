'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, MapPin, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// LOCAL TEAMS SECTION - Updated Design Language
// =============================================================================

const LocalTeamsSection = () => {
  const features = [
    {
      icon: Globe,
      title: 'Regional Expertise',
      description: 'Our teams possess deep understanding of local market dynamics, cultural nuances, and regional business practices. We don\'t just translate—we adapt your digital presence to resonate with local audiences.',
    },
    {
      icon: Clock,
      title: 'Time Zone Optimization',
      description: 'We structure our delivery teams to ensure optimal overlap with your working hours. Whether you\'re in New York, London, Tokyo, or Sydney, we maintain responsive communication throughout.',
    },
    {
      icon: MapPin,
      title: 'Localized Delivery',
      description: 'Every project incorporates region-specific considerations: local payment gateways, compliance requirements, language preferences, and cultural design elements.',
    }
  ];

  const capabilities = [
    'Multi-language Content Strategy',
    'Regional SEO Optimization',
    'Local Compliance & Regulations',
    'Cultural UX Adaptation',
    'Regional Analytics & Insights',
    'Local Payment Integration'
  ];

  const stats = [
    { value: '250+', label: 'Projects' },
    { value: '120ms', label: 'Avg INP' },
    { value: '4.9/5', label: 'Rating' }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Trusted locally, delivered globally</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Local teams, </span>
              <span className="gradient-text">
                global standards
              </span>
            </h2>

            {/* Feature Cards */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative bg-white/[0.02] rounded-xl p-5 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                      >
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Capabilities Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/[0.02] rounded-xl p-4 border border-white/[0.06]"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-10 group"
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Narrative Card */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Work with engineers and designers who understand your market&apos;s language, devices, and expectations. We bake localization, technical SEO, and accessibility into the foundation.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  From country to state to city pages, you&apos;ll find detailed coverage and service options that match your growth goals. We align to your time zone and collaborate transparently.
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                  alt="Local teams with global delivery standards"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Static Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Global Network</div>
                    <div className="text-white/70 text-xs">Local Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalTeamsSection;
