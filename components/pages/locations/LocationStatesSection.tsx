'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-data';

// =============================================================================
// LOCATION STATES SECTION - Premium Dark Design
// =============================================================================

interface LocationStatesSectionProps {
  country: Country;
}

const LocationStatesSection = ({ country }: LocationStatesSectionProps) => {
  const getTotalCities = (state: any) => {
    return state.cities.length;
  };

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
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Regional Coverage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">Explore </span>
            <span className="gradient-text">{country.name}</span>
            <span className="text-white"> States</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover our services across different states in {country.name}. Each state offers unique
            local expertise and specialized solutions for your business needs.
          </p>
        </motion.div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {country.states.map((state, index) => (
            <motion.div
              key={state.slug}
              className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-brand-500/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {/* State Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {state.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{getTotalCities(state)} Cities</p>
                </div>
              </div>

              {/* State Description */}
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                {state.description}
              </p>

              {/* Cities Preview */}
              <div className="mb-5">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2.5">Major Cities:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {state.cities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] sm:text-xs rounded-full font-medium"
                    >
                      {city.name}
                    </span>
                  ))}
                  {state.cities.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] text-slate-500 text-[10px] sm:text-xs rounded-full font-medium">
                      +{state.cities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Services Preview */}
              <div className="mb-5">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2.5">Available Services:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] sm:text-xs rounded-full font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white rounded-xl font-semibold text-sm">
                <Link href={`/where-we-serve/${country.slug}/${state.slug}`} className="flex items-center justify-center gap-2">
                  Explore {state.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
            }}
          >
            <div
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
            >
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-brand-400" />
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              Need Services in a Specific State?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              Contact us to discuss how we can provide specialized software development services
              tailored to your state&apos;s unique business environment and requirements.
            </p>
            <Button asChild className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-semibold">
              <Link href="/contact" className="flex items-center gap-2">
                Get State-Specific Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationStatesSection;
