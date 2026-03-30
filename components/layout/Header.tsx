'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Search,
  ArrowRight,
  Code2,
  Phone,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Cpu,
  Clock,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toSlug } from '@/lib/slug';

// =============================================================================
// SERVICE ICONS MAP
// =============================================================================

const serviceIcons: Record<string, React.ElementType> = {
  'web-development': Code2,
  'mobile-development': Smartphone,
  'ui-ux-design': Palette,
  'digital-marketing': BarChart3,
  'cloud-devops': Cloud,
  'consulting-strategy': Cpu,
};

// =============================================================================
// MEGA MENU
// =============================================================================

const MegaMenu = ({ isOpen, services, onClose }: { isOpen: boolean; services: any[]; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="absolute top-full left-0 right-0 z-50 mt-3"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-slate-900/98 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Top gradient line */}
              <div className="h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
              <div className="p-8">
                <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-8">
                    <div className="flex items-center gap-2 mb-5">
                      <Sparkles className="w-4 h-4 text-brand-400" />
                      <h3 className="text-xs font-semibold text-brand-400 uppercase tracking-[0.2em]">Our Services</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {services.map((service) => {
                        const Icon = serviceIcons[service.slug] || Code2;
                        return (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={onClose}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-brand-500/[0.06] border border-transparent hover:border-brand-500/10 transition-all duration-200"
                          >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-500/5 border border-brand-500/10 flex items-center justify-center shrink-0 group-hover:from-brand-500/25 group-hover:to-brand-500/10 group-hover:border-brand-500/20 transition-all duration-200">
                              <Icon className="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                                  {service.title}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-brand-500/0 group-hover:text-brand-400 translate-x-0 group-hover:translate-x-0.5 transition-all duration-200" />
                              </div>
                              <p className="text-sm text-slate-500 mt-1 line-clamp-1 group-hover:text-slate-400 transition-colors">
                                {service.description?.slice(0, 80)}...
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-5 pt-5 border-t border-white/[0.06]">
                      <Link href="/services" onClick={onClose} className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-semibold transition-colors group">
                        View all services <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full rounded-2xl bg-gradient-to-b from-brand-500/[0.06] to-transparent border border-brand-500/10 p-6 flex flex-col">
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Available Now</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Ready to Start?</h4>
                      <p className="text-sm text-slate-400 mb-6 flex-1 leading-relaxed">Get a free consultation with our experts and bring your vision to life.</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Clock className="w-4 h-4 text-brand-500/60" /><span>24/7 Support</span></div>
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Users className="w-4 h-4 text-brand-500/60" /><span>Expert Team</span></div>
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Award className="w-4 h-4 text-brand-500/60" /><span>500+ Projects Delivered</span></div>
                      </div>
                      <Link href="/contact" onClick={onClose} className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-200 active:scale-[0.98]">
                        <Phone className="w-4 h-4" /><span>Schedule a Call</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// =============================================================================
// SEARCH MODAL
// =============================================================================

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const suggestions = [
    { icon: Code2, label: 'Web Development', href: '/web-development' },
    { icon: Smartphone, label: 'Mobile Apps', href: '/mobile-development' },
    { icon: Palette, label: 'UI/UX Design', href: '/ui-ux-design' },
    { icon: Globe, label: 'Where We Serve', href: '/where-we-serve' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4" initial={{ opacity: 0, y: -20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.96 }} transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="bg-slate-900/98 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
              <div className="flex items-center gap-3 p-5 border-b border-white/[0.06]">
                <Search className="w-5 h-5 text-brand-400" />
                <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services, locations..." className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-base" />
                <kbd className="px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-slate-500 font-mono">ESC</kbd>
              </div>
              <div className="p-3">
                <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.15em] px-3 mb-2">Quick Links</div>
                {suggestions.map((item) => (
                  <Link key={item.href} href={item.href} onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-brand-500/[0.06] transition-all duration-150 group">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/15 group-hover:border-brand-500/20 transition-all">
                      <item.icon className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                    </div>
                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors font-medium">{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-700 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// =============================================================================
// NAV ITEM WITH ACTIVE INDICATOR
// =============================================================================

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-brand-400 transition-all duration-200 rounded-lg group hover:bg-brand-500/[0.08]"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-300 rounded-full group-hover:w-4/5 transition-all duration-300 ease-out" />
  </Link>
);

// =============================================================================
// MAIN HEADER
// =============================================================================

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (toggleButtonRef.current?.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setIsSearchOpen(true); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/locations/countries');
        const json = await res.json();
        if (mounted && json?.data) setCountries(json.data);
      } catch {}
    })();
    return () => { mounted = false; };
  }, []);

  const services = siteStructure.slice(0, 6);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];
  const popularCountries = countries.slice(0, 8);

  return (
    <>
      <header className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      )}>
        {/* Top gradient accent line */}
        <div className={cn(
          'h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent transition-opacity duration-300',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-all duration-300 group-hover:scale-105">
                  <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-brand-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight leading-none">
                  <span className="text-brand-400">Web</span>
                  <span className="text-brand-300">On</span>
                  <span className="text-brand-400">Dev</span>
                </span>
                <span className="text-[10px] font-semibold text-brand-500/60 tracking-[0.2em] uppercase leading-none mt-1">
                  Digital Agency
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}

              {/* Services Dropdown */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={cn(
                  'relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group',
                  isMegaMenuOpen ? 'text-brand-400 bg-brand-500/[0.08]' : 'text-slate-400 hover:text-brand-400 hover:bg-brand-500/[0.08]'
                )}
              >
                Services
                <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isMegaMenuOpen && 'rotate-180')} />
                <span className={cn(
                  'absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-brand-400 to-brand-500 rounded-full transition-all duration-300 ease-out',
                  isMegaMenuOpen ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                )} />
              </button>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-400 hover:text-brand-400 hover:bg-brand-500/[0.08] rounded-lg transition-all duration-200">
                  Locations
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-brand-400 to-brand-500 rounded-full group-hover:w-4/5 transition-all duration-300 ease-out" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-slate-900/98 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
                    <div className="p-4">
                      <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.15em] px-2 mb-3">Popular Locations</div>
                      <div className="grid grid-cols-2 gap-0.5">
                        {popularCountries.map((country) => (
                          <Link key={country.code} href={`/where-we-serve/${toSlug(country.name)}`} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-brand-500/[0.06] transition-all duration-150 group/item">
                            <span className="text-base">{country.flag}</span>
                            <span className="text-sm text-slate-400 group-hover/item:text-white transition-colors truncate font-medium">{country.name}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/[0.06]">
                        <Link href="/where-we-serve" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-brand-400 hover:bg-brand-500/[0.06] font-semibold transition-all group/all">
                          <Globe className="w-3.5 h-3.5" /> View All Locations <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-slate-300 hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-200 text-sm group"
              >
                <Search className="w-3.5 h-3.5 group-hover:text-brand-400 transition-colors" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="ml-0.5 px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-slate-600">⌘K</kbd>
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                className="relative group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:from-brand-400 hover:to-brand-500 transition-all duration-300 active:scale-[0.97]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              ref={toggleButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-slate-400" />}
            </button>
          </div>
        </div>

        <MegaMenu isOpen={isMegaMenuOpen} services={services} onClose={() => setIsMegaMenuOpen(false)} />

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-slate-950/98 backdrop-blur-xl"
            >
              <div className="p-5 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-brand-500/[0.06] transition-all duration-150 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-brand-500/[0.06] transition-all duration-150 font-medium"
                  >
                    Services <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', activeDropdown === 'services' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 mt-1 space-y-0.5">
                          {services.map((service) => {
                            const Icon = serviceIcons[service.slug] || Code2;
                            return (
                              <Link key={service.slug} href={`/${service.slug}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-500 hover:text-white hover:bg-brand-500/[0.06] transition-all duration-150">
                                <Icon className="w-4 h-4 text-brand-500/50" /> {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/where-we-serve" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-brand-500/[0.06] transition-all duration-150 font-medium">
                  <Globe className="w-4 h-4 text-brand-500/50" /> Where We Serve
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-brand-500/[0.06] transition-all duration-150 font-medium">Contact</Link>

                <div className="pt-4 mt-2 border-t border-white/[0.06] space-y-3">
                  <button
                    onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-400 text-sm font-medium hover:bg-white/[0.06] transition-all"
                  >
                    <Search className="w-4 h-4" /> Search
                  </button>
                  <button
                    onClick={() => { setIsMenuOpen(false); window.dispatchEvent(new CustomEvent('openBookingModal')); }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 active:scale-[0.98] transition-all"
                  >
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
