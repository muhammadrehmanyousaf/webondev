'use client';

import React, { useState } from 'react';
import { MapPin, ArrowRight, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Country } from '@/lib/location-api';
import { toSlug } from '@/lib/slug';

interface LocationCountriesSectionProps {
  countries: Country[];
}

const LocationCountriesSection = ({ countries }: LocationCountriesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  // API-backed countries do not include states here; show meta info instead

  // Order: popular countries first (in this order), then the rest A–Z
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
    return idx === -1 ? Number.POSITIVE_INFINITY : idx; // non-popular go to bottom
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

  const visibleCountries = showAll ? filteredCountries : filteredCountries.slice(0, 6); // two rows (3 cols)

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Presence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We serve clients across multiple countries with local expertise and global standards. 
            Choose your location to explore our services.
          </p>
          {/* Search */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="relative">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleCountries.map((country) => (
            <div
              key={toSlug(country.name) || country.code}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Country Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{country.flag || '🌐'}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-sm text-gray-500">{country.currencies?.[0] || ''} {country.timezones?.[0] ? `• ${country.timezones[0]}` : ''}</p>
                  </div>
                </div>
              </div>

              {/* Country Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional software development services in {country.name} with local expertise and global standards.
              </p>

              {/* Country Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* CTA */}
              <Link href={`/where-we-serve/${toSlug(country.name)}`}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg group-hover:scale-105 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCountries.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-full px-8 py-3 transition-all duration-300"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCountries.length} Countries`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationCountriesSection;
