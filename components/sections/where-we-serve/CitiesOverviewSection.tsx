'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ArrowRight, Building2 } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// =============================================================================
// CITIES OVERVIEW SECTION - Updated Design Language
// =============================================================================

interface City {
  name: string;
}

interface CitiesOverviewSectionProps {
  cities: City[];
  countryName: string;
  stateName: string;
}

const CitiesOverviewSection = ({ cities, countryName, stateName }: CitiesOverviewSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCities = cities.filter((city) =>
    (city.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCities = showAll ? filteredCities : filteredCities.slice(0, 8);

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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Cities We Serve</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Cities in </span>
            <span className="gradient-text">
              {stateName}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover our presence across major cities and regional hubs in {stateName}. Each location offers tailored services with local market understanding and global delivery standards.
          </p>

          {/* Search Bar */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/[0.02] border border-white/[0.06] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cities Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchTerm}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visibleCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
              >
                <Link
                  href={`/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(city.name)}`}
                  className="group relative block"
                >
                  <motion.div
                    className="relative bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-500"
                    whileHover={{ y: -5 }}
                  >
                    {/* City Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                    >
                      <MapPin className="w-5 h-5 text-brand-400" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Explore services in {city.name}
                    </p>

                    <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:gap-2 transition-all">
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More/Less Button */}
        {filteredCities.length > 8 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="default"
              size="lg"
              className="rounded-full px-10"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCities.length} Cities`}
            </Button>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredCities.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(6,182,212,0.02))' }}
            >
              <MapPin className="w-10 h-10 text-slate-400" />
            </div>
            <p className="text-slate-300 text-lg mb-2">No cities found matching &quot;{searchTerm}&quot;</p>
            <p className="text-slate-400 text-sm">Try a different search term</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CitiesOverviewSection;
