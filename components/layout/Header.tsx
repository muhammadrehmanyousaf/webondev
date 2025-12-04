'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Search, 
  ExternalLink,
  Zap,
  ArrowRight,
  Code2,
  Sparkles
} from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toSlug } from '@/lib/slug';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [statesByCountry, setStatesByCountry] = useState<Record<string, any[]>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  const services = siteStructure.slice(0, 6);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500 ease-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
          : 'bg-white'
      )}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo with modern design */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:scale-110" />
              <div className="relative px-4 py-2 bg-black rounded-lg">
                <Code2 className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                WebOnDev
              </span>
              <span className="text-xs text-slate-500 font-medium">Tech Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden lg:flex">
            <NavigationMenu.List className="flex items-center space-x-1">
              {/* Main Navigation */}
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg transition-all duration-200 hover:text-orange-600 hover:bg-orange-50 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all group-hover:w-full duration-300" />
                  </Link>
                </NavigationMenu.Item>
              ))}

              {/* Services Dropdown */}
              <NavigationMenu.Item>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg transition-all duration-200 hover:text-orange-600 hover:bg-orange-50 flex items-center space-x-1 group">
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content className="w-56 rounded-xl border border-slate-200 bg-white shadow-xl p-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="space-y-1">
                      {services.map((service, idx) => (
                        <DropdownMenu.Item key={service.slug} asChild>
                          <Link
                            href={`/${service.slug}`}
                            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-orange-50 group cursor-pointer"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-150 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-slate-900 group-hover:text-orange-600">
                                {service.title}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                      <DropdownMenu.Separator className="my-2" />
                      <DropdownMenu.Item asChild>
                        <Link
                          href="/services"
                          className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200/50 transition-all duration-200 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-orange-600">
                            All Services
                          </span>
                        </Link>
                      </DropdownMenu.Item>
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </NavigationMenu.Item>

              {/* Locations Dropdown */}
              <NavigationMenu.Item>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg transition-all duration-200 hover:text-orange-600 hover:bg-orange-50 flex items-center space-x-1 group">
                      <Globe className="w-4 h-4" />
                      <span>Locations</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content className="w-72 rounded-xl border border-slate-200 bg-white shadow-xl p-3 animate-in fade-in zoom-in-95 duration-200">
                    {/* Search */}
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search countries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    
                    {/* Countries List */}
                    <div className="max-h-80 overflow-y-auto space-y-0.5">
                      {filteredCountries.slice(0, 12).map((country) => (
                        <Link
                          key={country.code}
                          href={`/where-we-serve/${toSlug(country.name)}`}
                          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-orange-50 transition-all group"
                        >
                          <div className="flex items-center space-x-3 flex-1">
                            <span className="text-lg">{country.flag}</span>
                            <span className="text-sm font-medium text-slate-900 group-hover:text-orange-600 transition-colors">
                              {country.name}
                            </span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-orange-600 transition-all opacity-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>

                    <DropdownMenu.Separator className="my-2" />
                    <DropdownMenu.Item asChild>
                      <Link
                        href="/where-we-serve"
                        className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all cursor-pointer"
                      >
                        <span className="text-sm font-medium text-white">
                          Explore All Locations
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold text-slate-700 rounded-lg transition-all duration-300 hover:text-orange-600 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 relative group"
            >
              Contact
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all" />
            </Link>

            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Link href="/contact">
                <Zap className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </Button> 
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            variant="ghost"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  'w-6 h-6 text-slate-700 absolute transition-all duration-300',
                  isMenuOpen ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
                )}
              />
              <X
                className={cn(
                  'w-6 h-6 text-orange-600 absolute transition-all duration-300',
                  isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
                )}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-out origin-top',
            isMenuOpen ? 'max-h-[600px] opacity-100 pb-4 border-t border-slate-200' : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-2 pt-4">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-all font-medium group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-150 transition-transform" />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle('mobile-services')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-700 hover:bg-orange-50 transition-all font-medium"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                  <span>Services</span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-300',
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  )}
                />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="bg-slate-50 rounded-lg mt-2 p-2 space-y-1 ml-4 border-l-2 border-orange-500">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-orange-600 hover:bg-white transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      <span className="group-hover:font-medium transition-all">{service.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm font-medium text-orange-600 hover:bg-orange-100 transition-all mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>View All</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div>
              <button
                onClick={() => handleDropdownToggle('mobile-locations')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-700 hover:bg-orange-50 transition-all font-medium"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Locations</span>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-300',
                    activeDropdown === 'mobile-locations' ? 'rotate-180' : ''
                  )}
                />
              </button>
              {activeDropdown === 'mobile-locations' && (
                <div className="bg-slate-50 rounded-lg mt-2 p-3 space-y-1 ml-4 border-l-2 border-orange-500">
                  {/* Search */}
                  <div className="relative mb-2 pb-2 border-b border-slate-200">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs"
                    />
                  </div>
                  {filteredCountries.slice(0, 6).map((country) => (
                    <Link
                      key={country.code}
                      href={`/where-we-serve/${toSlug(country.name)}`}
                      className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-orange-600 hover:bg-white transition-all group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="font-medium group-hover:text-orange-600">{country.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/where-we-serve"
                    className="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium hover:from-orange-600 hover:to-orange-700 transition-all mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Explore All</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all font-medium border border-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Contact Us</span>
              </Link>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg flex items-center justify-center space-x-2"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Zap className="w-4 h-4" />
                  <span>Get Started</span>
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
