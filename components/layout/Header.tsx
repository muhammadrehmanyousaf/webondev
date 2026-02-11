'use client';

import React, { useState, useEffect, useRef } from 'react';
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
          className="fixed inset-0 bg-black/20 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="absolute top-full left-0 right-0 z-50 mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-strong overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Our Services</h3>
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => {
                        const Icon = serviceIcons[service.slug] || Code2;
                        return (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={onClose}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-150"
                          >
                            <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-brand-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-white group-hover:text-brand-400 transition-colors truncate">
                                  {service.title}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">
                                {service.description?.slice(0, 80)}...
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <Link href="/services" onClick={onClose} className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors">
                        View all services <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full rounded-xl bg-white/[0.02] border border-white/5 p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-brand-500" />
                        <span className="text-xs font-medium text-brand-400">Available Now</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Ready to Start?</h4>
                      <p className="text-sm text-slate-400 mb-6 flex-1">Get a free consultation with our experts.</p>
                      <div className="space-y-2.5 mb-6">
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Clock className="w-4 h-4 text-brand-500/70" /><span>24/7 Support</span></div>
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Users className="w-4 h-4 text-brand-500/70" /><span>Expert Team</span></div>
                        <div className="flex items-center gap-3 text-sm text-slate-400"><Award className="w-4 h-4 text-brand-500/70" /><span>500+ Projects</span></div>
                      </div>
                      <Link href="/contact" onClick={onClose} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
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
          <motion.div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.15 }}>
            <div className="bg-slate-900 rounded-2xl border border-white/10 shadow-strong overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-white/5">
                <Search className="w-5 h-5 text-slate-500" />
                <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services, locations..." className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none" />
                <kbd className="px-2 py-0.5 rounded bg-white/5 text-xs text-slate-500 font-mono">ESC</kbd>
              </div>
              <div className="p-3">
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wider px-3 mb-2">Quick Links</div>
                {suggestions.map((item) => (
                  <Link key={item.href} href={item.href} onClick={onClose} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group">
                    <item.icon className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                    <span className="text-sm text-slate-400 group-hover:text-white transition-colors">{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-700 group-hover:text-brand-400 transition-colors" />
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
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="px-2.5 py-2 bg-brand-500/10 rounded-lg border border-brand-500/20 transition-colors duration-150 group-hover:bg-brand-500/15">
                <Code2 className="w-5 h-5 text-brand-400" />
              </div>
              <span className="text-lg font-bold text-white">Web On Dev</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150 rounded-lg">
                  {item.label}
                </Link>
              ))}
              <button onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)} className={cn('flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150', isMegaMenuOpen ? 'text-brand-400' : 'text-slate-400 hover:text-white')}>
                Services <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-150', isMegaMenuOpen && 'rotate-180')} />
              </button>
              <div className="relative group">
                <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-colors duration-150">
                  Locations <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-150" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-slate-900 rounded-xl border border-white/10 shadow-strong p-3">
                    <div className="grid grid-cols-2 gap-0.5">
                      {popularCountries.map((country) => (
                        <Link key={country.code} href={`/where-we-serve/${toSlug(country.name)}`} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group/item">
                          <span className="text-base">{country.flag}</span>
                          <span className="text-sm text-slate-400 group-hover/item:text-white transition-colors truncate">{country.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <Link href="/where-we-serve" className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-brand-400 hover:bg-brand-500/5 font-medium transition-colors">
                        <Globe className="w-3.5 h-3.5" /> View All Locations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150 rounded-lg">Contact</Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10 transition-colors text-sm">
                <Search className="w-3.5 h-3.5" /> Search <kbd className="ml-1 px-1 py-0.5 rounded bg-white/5 text-[10px] font-mono">⌘K</kbd>
              </button>
              <Button className="rounded-full" onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
                Get Started <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button ref={toggleButtonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <MegaMenu isOpen={isMegaMenuOpen} services={services} onClose={() => setIsMegaMenuOpen(false)} />

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div ref={menuRef} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.15 }} className="lg:hidden overflow-hidden border-t border-white/5 bg-slate-950">
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">{item.label}</Link>
                ))}
                <div>
                  <button onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')} className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                    Services <ChevronDown className={cn('w-4 h-4 transition-transform duration-150', activeDropdown === 'services' && 'rotate-180')} />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="pl-4 mt-1 space-y-0.5">
                      {services.map((service) => (
                        <Link key={service.slug} href={`/${service.slug}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-white hover:bg-white/5 transition-colors">
                          <ChevronRight className="w-3 h-3" /> {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/where-we-serve" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                  <Globe className="w-4 h-4" /> Where We Serve
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">Contact</Link>
                <div className="pt-3 border-t border-white/5">
                  <Button className="w-full rounded-full" onClick={() => { setIsMenuOpen(false); window.dispatchEvent(new CustomEvent('openBookingModal')); }}>
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
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
