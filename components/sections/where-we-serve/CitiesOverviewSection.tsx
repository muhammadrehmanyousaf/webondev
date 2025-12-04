'use client';

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';
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

  const visibleCities = showAll ? filteredCities : filteredCities.slice(0, 8); // Show 8 cities in two rows (4 cols)

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-gray-900">Cities in </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">{stateName}</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our presence across major cities and regional hubs in {stateName}. Each location offers tailored services with local market understanding and global delivery standards.
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {visibleCities.map((city) => (
            <Link
              key={city.name}
              href={`/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(city.name)}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 block"
            >
              <div className="p-6">
                <div className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {city.name}
                </div>
                <div className="text-gray-600 mb-4 text-sm">
                  Explore services in {city.name}
                </div>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  Explore Services
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCities.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              {showAll ? 'Show Less' : `Show All ${filteredCities.length} Cities`}
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 text-lg">No cities found matching "{searchTerm}"</p>
            <p className="text-gray-400 text-sm mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CitiesOverviewSection;
