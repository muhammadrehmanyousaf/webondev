'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, MapPin, Globe, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import { cn } from '@/lib/utils';

const DEFAULT_COUNTRIES = [
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  { name: 'India', code: 'IN', flag: '🇮🇳' }
];

const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [statesByCountry, setStatesByCountry] = useState<Record<string, any[]>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return; // ensure client
    let mounted = true;
    (async () => {
      try {
        const apiBase = window.location.origin;
        const res = await fetch(`${apiBase}/api/locations/countries`, { cache: 'no-store' });
        if (!mounted) return;
        if (!res.ok) {
          setCountries(DEFAULT_COUNTRIES);
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('Countries API not OK:', res.status);
          }
          return;
        }
        const json = await res.json();
        const data = Array.isArray(json?.data) ? json.data : [];
        setCountries(data.length ? data : DEFAULT_COUNTRIES);
      } catch (err) {
        if (mounted) setCountries(DEFAULT_COUNTRIES);
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.error('Failed to load countries, using fallback:', err);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedCountry(null);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    const idx = popularOrder.findIndex((n) => n.toLowerCase() === (name || '').toLowerCase());
    return idx === -1 ? Number.POSITIVE_INFINITY : idx;
  };

  const sortedCountries = [...countries].sort((a, b) => {
    const aPop = popularityIndex(a.name);
    const bPop = popularityIndex(b.name);
    if (aPop !== bPop) return aPop - bPop;
    return a.name.localeCompare(b.name);
  });

  const filteredCountries = sortedCountries.filter((country) =>
    (country.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLoadedStates = (countryName: string): any[] => statesByCountry[countryName] || [];

  const handleCountryClick = (countrySlug: string) => {
    setSelectedCountry(selectedCountry === countrySlug ? null : countrySlug);
  };

  const ensureStatesLoaded = async (countryName: string) => {
    if (statesByCountry[countryName] || loadingStates[countryName]) return;
    setLoadingStates((s) => ({ ...s, [countryName]: true }));
    try {
      const apiBase = typeof window !== 'undefined' ? window.location.origin : '';
      const res = await fetch(`${apiBase}/api/locations/states?country=${encodeURIComponent(countryName)}`, { cache: 'no-store' });
      if (!res.ok) {
        setStatesByCountry((m) => ({ ...m, [countryName]: [] }));
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('States API not OK:', res.status);
        }
        return;
      }
      const json = await res.json();
      if (json?.data) {
        setStatesByCountry((m) => ({ ...m, [countryName]: json.data }));
      } else {
        setStatesByCountry((m) => ({ ...m, [countryName]: [] }));
      }
    } catch (err) {
      setStatesByCountry((m) => ({ ...m, [countryName]: [] }));
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error('Failed to load states:', err);
      }
    } finally {
      setLoadingStates((s) => ({ ...s, [countryName]: false }));
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center space-x-2 text-slate-700 hover:text-orange-500 transition-all duration-200 group relative"
      >
        <div className="relative">
          <Globe className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <span className="font-medium">Where We Serve</span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen ? "rotate-180" : "rotate-0"
        )} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-[500px] bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50 animate-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="px-6 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Global Locations</h3>
                <p className="text-sm text-gray-600">Explore our worldwide presence</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-orange-500">{countries.length}</div>
                <div className="text-xs text-gray-500">Countries</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-200 text-sm"
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
            {filteredCountries.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-sm font-medium mb-1">No countries found</p>
                <p className="text-xs">Try a different search term</p>
              </div>
            ) : (
              <div className="px-6">
                {filteredCountries.slice(0, 8).map((country) => (
                  <div key={country.code || country.name} className="mb-3">
                    {/* Country Header */}
                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group">
                      {/* Country Info - Clickable for navigation */}
                      <Link
                        href={`/where-we-serve/${toSlug(country.name || '')}`}
                        className="flex items-center space-x-3 flex-1 group/country"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="text-2xl group-hover/country:scale-110 transition-transform duration-200">
                          {country.flag}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900 group-hover/country:text-orange-500 transition-colors">
                            {country.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            View country & states
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover/country:text-orange-500 transition-colors" />
                      </Link>

                      {/* Expand Button */}
                      <button
                        onClick={async () => {
                          const cSlug = toSlug(country.name || '');
                          handleCountryClick(cSlug);
                          await ensureStatesLoaded(country.name);
                        }}
                        title="Toggle states"
                        className="ml-2 p-1.5 rounded-md hover:bg-orange-50 transition-colors group/expand"
                      >
                        <ChevronDown className={cn(
                          "w-4 h-4 text-gray-400 transition-transform duration-200 group-hover/expand:text-orange-500",
                          selectedCountry === toSlug(country.name || '') ? "rotate-180" : "rotate-0"
                        )} />
                      </button>
                    </div>

                    {/* States and Cities */}
                    {selectedCountry === toSlug(country.name || '') && (
                      <div className="ml-12 mt-2 space-y-2 bg-gray-50 rounded-lg p-3">
                        {loadingStates[country.name] && (
                          <div className="flex items-center justify-center py-4">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
                            <span className="ml-2 text-xs text-gray-500">Loading...</span>
                          </div>
                        )}
                        {!loadingStates[country.name] && getLoadedStates(country.name).length === 0 && (
                          <div className="text-center py-4 text-gray-500">
                            <MapPin className="w-6 h-6 mx-auto mb-1 text-gray-300" />
                            <p className="text-xs">No states available</p>
                          </div>
                        )}
                        {getLoadedStates(country.name).slice(0, 4).map((state) => (
                          <div key={state.name} className="bg-white rounded-md border border-gray-100 overflow-hidden hover:shadow-sm transition-all duration-200">
                            <Link
                              href={`/where-we-serve/${toSlug(country.name || '')}/${toSlug(state.name || '')}`}
                              className="block p-3 hover:bg-orange-50 transition-colors group/state"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="font-medium text-slate-900 group-hover/state:text-orange-500 transition-colors text-sm">
                                    {state.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    View cities
                                  </div>
                                </div>
                                <ArrowRight className="w-3 h-3 text-gray-400 group-hover/state:text-orange-500 transition-colors" />
                              </div>
                            </Link>
                          </div>
                        ))}
                        {getLoadedStates(country.name).length > 4 && (
                          <div className="text-center pt-2">
                            <Link
                              href={`/where-we-serve/${toSlug(country.name || '')}`}
                              className="text-xs text-orange-500 hover:text-orange-600 font-medium"
                              onClick={() => setIsOpen(false)}
                            >
                              View all {getLoadedStates(country.name).length} states →
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Show more link if there are more countries */}
                {filteredCountries.length > 8 && (
                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      href="/where-we-serve"
                      className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      View all {filteredCountries.length} countries →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 pt-4 border-t border-gray-100">
            <Link
              href="/where-we-serve"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Globe className="w-4 h-4" />
              <span>View All Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default LocationDropdown;


