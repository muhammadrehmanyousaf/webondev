'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Globe, Smartphone, Code, Palette, TrendingUp, ShoppingCart, Cloud, Users, Building, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap = {
  Globe,
  Smartphone,
  Code,
  Palette,
  TrendingUp,
  ShoppingCart,
  Cloud,
  Users,
  Building,
  Settings
};

const ServicesGridSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            What We Offer
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Our Service <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-12">
          {siteStructure.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/${service.slug}`}
                  className="group block h-full bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Services Count & Preview */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-brand-400 text-xs font-semibold">
                        {service.clusters.length} Services Available
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>

                    {/* Service Preview */}
                    <div className="space-y-1.5">
                      {service.clusters.slice(0, 3).map((cluster, idx) => (
                        <div key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-400/60 rounded-full" />
                          {cluster.title}
                        </div>
                      ))}
                      {service.clusters.length > 3 && (
                        <div className="text-xs text-slate-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                          +{service.clusters.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-brand-400 text-sm font-semibold">
                    Explore Services
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div
            className="border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)',
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-5 sm:mb-6 max-w-2xl mx-auto">
              Can&apos;t find exactly what you&apos;re looking for? We specialize in creating custom software solutions tailored to your unique business requirements.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
            >
              Get Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
