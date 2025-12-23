'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-data';

// =============================================================================
// LOCATION STATES SECTION - Premium Emerald Green Design
// =============================================================================

interface LocationStatesSectionProps {
  country: Country;
}

const LocationStatesSection = ({ country }: LocationStatesSectionProps) => {
  const getTotalCities = (state: any) => {
    return state.cities.length;
  };

  const gradients = [
    'from-brand-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-brand-500 to-lime-500',
    'from-purple-500 to-brand-500',
    'from-amber-500 to-brand-500',
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
            <Building2 className="w-4 h-4" />
            <span>Regional Coverage</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Explore </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {country.name}
            </span>
            <span className="text-white"> States</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover our services across different states in {country.name}. Each state offers unique
            local expertise and specialized solutions for your business needs.
          </p>
        </motion.div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {country.states.map((state, index) => (
            <motion.div
              key={state.slug}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full flex flex-col">
                {/* State Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{getTotalCities(state)} Cities</p>
                  </div>
                </div>

                {/* State Description */}
                <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                  {state.description}
                </p>

                {/* Cities Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Major Cities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {state.cities.slice(0, 3).map((city, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs rounded-full font-medium"
                      >
                        {city.name}
                      </span>
                    ))}
                    {state.cities.length > 3 && (
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-400 text-xs rounded-full font-medium">
                        +{state.cities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Services Preview */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Available Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs rounded-full font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="glow" className="w-full rounded-xl group">
                    <Link href={`/where-we-serve/${country.slug}/${state.slug}`} className="flex items-center justify-center gap-2">
                      Explore {state.name}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />

          <div className="relative bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-brand-500/30 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 mb-6 shadow-lg shadow-brand-500/25"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Services in a Specific State?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can provide specialized software development services
              tailored to your state&apos;s unique business environment and requirements.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="glow" size="lg" className="rounded-full px-10 group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get State-Specific Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationStatesSection;
