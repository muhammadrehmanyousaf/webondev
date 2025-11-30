'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LocationDropdown from '@/components/ui/LocationDropdown';
import { toSlug } from '@/lib/slug';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [statesByCountry, setStatesByCountry] = useState<Record<string, any[]>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch countries for mobile dropdown
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/locations/countries');
        const json = await res.json();
        if (mounted && json?.data) setCountries(json.data);
      } catch {}
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleDropdownToggle = (slug: string) => {
    setActiveDropdown(activeDropdown === slug ? null : slug);
  };

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
      const res = await fetch(`/api/locations/states?country=${encodeURIComponent(countryName)}`);
      const json = await res.json();
      if (json?.data) {
        setStatesByCountry((m) => ({ ...m, [countryName]: json.data }));
      } else {
        setStatesByCountry((m) => ({ ...m, [countryName]: [] }));
      }
    } catch {
      setStatesByCountry((m) => ({ ...m, [countryName]: [] }));
    } finally {
      setLoadingStates((s) => ({ ...s, [countryName]: false }));
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Solutions Indicator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <LocationDropdown />
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setActiveDropdown('services')}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={cn(
                  "absolute top-full left-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-6 transition-all duration-200",
                  activeDropdown === 'services' ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                )}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="grid grid-cols-2 gap-4">
                  {siteStructure.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {service.description.split(' ').slice(0, 6).join(' ')}...
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md",
          isMenuOpen ? "max-h-screen opacity-100 border-t border-gray-200" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {/* Mobile Where We Serve Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => handleDropdownToggle('mobile-locations')}
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Where We Serve</span>
                </div>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'mobile-locations' ? "rotate-180" : "rotate-0"
                )} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg mt-2",
                activeDropdown === 'mobile-locations' ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="p-4">
                  {/* Search Bar */}
                  <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
                    />
                  </div>
                  
                  {/* Countries List */}
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {filteredCountries.slice(0, 10).map((country) => (
                      <div key={country.code || country.name}>
                        {/* Country Link */}
                        <Link
                          href={`/where-we-serve/${toSlug(country.name || '')}`}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white transition-colors group"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          <div className="text-lg">
                            {country.flag}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                              {country.name}
                            </div>
                          </div>
                          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </Link>
                        
                        {/* Expand States Button */}
                        <button
                          onClick={async () => {
                            const cSlug = toSlug(country.name || '');
                            handleCountryClick(cSlug);
                            await ensureStatesLoaded(country.name);
                          }}
                          className="w-full flex items-center justify-between p-2 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <span>View states</span>
                          <ChevronDown className={cn(
                            "w-3 h-3 transition-transform duration-200",
                            selectedCountry === toSlug(country.name || '') ? "rotate-180" : "rotate-0"
                          )} />
                        </button>
                        
                        {/* States List */}
                        {selectedCountry === toSlug(country.name || '') && (
                          <div className="ml-4 mt-2 space-y-1 bg-white rounded-lg p-2 border border-gray-100">
                            {loadingStates[country.name] && (
                              <div className="flex items-center justify-center py-2">
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-600"></div>
                                <span className="ml-2 text-xs text-gray-500">Loading...</span>
                              </div>
                            )}
                            {!loadingStates[country.name] && getLoadedStates(country.name).slice(0, 3).map((state) => (
                  <Link
                                key={state.name}
                                href={`/where-we-serve/${toSlug(country.name || '')}/${toSlug(state.name || '')}`}
                                className="block py-1 px-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {state.name}
                  </Link>
                ))}
                            {getLoadedStates(country.name).length > 3 && (
                              <Link
                                href={`/where-we-serve/${toSlug(country.name || '')}`}
                                className="block py-1 px-2 text-xs text-blue-600 font-medium hover:bg-gray-50 rounded transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                View all states →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* View All Countries Link */}
                    {filteredCountries.length > 10 && (
                      <div className="pt-2 border-t border-gray-200">
                        <Link
                          href="/where-we-serve"
                          className="block text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          View all {filteredCountries.length} countries →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Services */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => handleDropdownToggle('mobile-services')}
              >
                <span>Services</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'mobile-services' ? "rotate-180" : "rotate-0"
                )} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg mt-2",
                activeDropdown === 'mobile-services' ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="p-4 space-y-2">
                  {siteStructure.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block py-2 px-3 text-sm text-blue-600 font-medium hover:bg-white rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;