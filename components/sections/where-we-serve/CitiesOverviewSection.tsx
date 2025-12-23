'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// =============================================================================
// CITIES OVERVIEW SECTION - Premium Emerald Green Design
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

  const gradients = [
    'from-brand-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-brand-500',
    'from-brand-500 to-lime-500',
    'from-amber-500 to-brand-500',
    'from-rose-500 to-brand-500'
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
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
          >
            <Building2 className="w-4 h-4" />
            <span>Cities We Serve</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Cities in </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl blur opacity-20 group-focus-within:opacity-40 transition-opacity" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder:text-slate-400 transition-all duration-300"
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
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <motion.div
                    className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* City Icon */}
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>

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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="glow"
                size="lg"
                className="rounded-full px-10"
              >
                {showAll ? 'Show Less' : `Show All ${filteredCities.length} Cities`}
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredCities.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-10 h-10 text-slate-400" />
            </motion.div>
            <p className="text-slate-300 text-lg mb-2">No cities found matching &quot;{searchTerm}&quot;</p>
            <p className="text-slate-400 text-sm">Try a different search term</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CitiesOverviewSection;
