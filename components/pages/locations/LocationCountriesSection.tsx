'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Globe, Search, Star, Briefcase, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

// =============================================================================
// LOCATION COUNTRIES SECTION - Premium Emerald Green Design
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

  const gradients = [
    'from-brand-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-brand-500 to-lime-500',
    'from-purple-500 to-brand-500',
    'from-amber-500 to-brand-500',
  ];

  return (
    <section id="countries" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
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
            <Globe className="w-4 h-4" />
            <span>Global Coverage</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Our Global</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Presence
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We serve clients across multiple countries with local expertise and global standards.
            Choose your location to explore our services.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {visibleCountries.map((country, index) => (
              <motion.div
                key={toSlug(country.name) || country.code}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full flex flex-col">
                  {/* Country Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{country.flag || '🌐'}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {country.currencies?.[0] || ''} {country.timezones?.[0] ? `• ${country.timezones[0]}` : ''}
                      </p>
                    </div>
                  </div>

                  {/* Country Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    Professional software development services in {country.name} with local expertise and global standards.
                  </p>

                  {/* Country Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Briefcase className="w-4 h-4 text-brand-400" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">50+</span>
                      </div>
                      <div className="text-sm text-slate-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">4.9/5</span>
                      </div>
                      <div className="text-sm text-slate-400">Rating</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild variant="glow" className="w-full rounded-xl group">
                      <Link href={`/where-we-serve/${toSlug(country.name)}`} className="flex items-center justify-center gap-2">
                        Explore Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
              >
                {showAll ? 'Show Less' : `Show All ${filteredCountries.length} Countries`}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LocationCountriesSection;
