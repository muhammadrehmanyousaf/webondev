'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Globe, Search, Star, Briefcase, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

// =============================================================================
// LOCATION COUNTRIES SECTION - Premium Dark Design
// =============================================================================

interface LocationCountriesSectionProps {
  countries: Country[];
}

const LocationCountriesSection = ({ countries }: LocationCountriesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Order: popular countries first, then the rest A–Z
  const popularOrder = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Pakistan',
    'India',
    'Germany',
    'France',
    'United Arab Emirates',
    'Saudi Arabia',
    'Singapore',
  ];

  const popularityIndex = (name: string) => {
    const idx = popularOrder.findIndex((n) => n.toLowerCase() === name.toLowerCase());
    return idx === -1 ? Number.POSITIVE_INFINITY : idx;
  };

  const sortedCountries = [...countries].sort((a, b) => {
    const aPop = popularityIndex(a.name);
    const bPop = popularityIndex(b.name);
    if (aPop !== bPop) return aPop - bPop;
    return a.name.localeCompare(b.name);
  });

  const filteredCountries = sortedCountries.filter((c) =>
    (c.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCountries = showAll ? filteredCountries : filteredCountries.slice(0, 6);

  return (
    <section id="countries" className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.08), transparent 70%)',
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
            <span>Global Coverage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">Our Global </span>
            <span className="gradient-text">Presence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            We serve clients across multiple countries with local expertise and global standards.
            Choose your location to explore our services.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-11 sm:pl-12 pr-11 sm:pr-12 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500/30 transition-all duration-300 text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          <AnimatePresence mode="popLayout">
            {visibleCountries.map((country, index) => (
              <motion.div
                key={toSlug(country.name) || country.code}
                className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-brand-500/20 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                layout
              >
                {/* Country Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <span className="text-4xl sm:text-5xl">{country.flag || '🌐'}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {country.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      {country.currencies?.[0] || ''} {country.timezones?.[0] ? `• ${country.timezones[0]}` : ''}
                    </p>
                  </div>
                </div>

                {/* Country Description */}
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Professional software development services in {country.name} with local expertise and global standards.
                </p>

                {/* Country Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5 pt-4 border-t border-white/[0.06]">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Briefcase className="w-3.5 h-3.5 text-brand-400" />
                      <span className="text-xl sm:text-2xl font-bold gradient-text">50+</span>
                    </div>
                    <div className="text-xs text-slate-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-xl sm:text-2xl font-bold gradient-text">4.9/5</span>
                    </div>
                    <div className="text-xs text-slate-500">Rating</div>
                  </div>
                </div>

                {/* CTA */}
                <Button asChild className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white rounded-xl font-semibold text-sm">
                  <Link href={`/where-we-serve/${toSlug(country.name)}`} className="flex items-center justify-center gap-2">
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {filteredCountries.length > 6 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-white/[0.1] text-white hover:bg-white/[0.05] hover:border-brand-500/30 px-6 py-2.5 rounded-xl font-semibold text-sm"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCountries.length} Countries`}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LocationCountriesSection;
