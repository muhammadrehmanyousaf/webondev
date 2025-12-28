'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Search,
  ExternalLink,
  Zap,
  ArrowRight,
  Code2,
  Sparkles,
  Sun,
  Moon,
  Phone,
  Mail,
  MessageCircle,
  Rocket,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Cpu,
  Command,
  Star,
  Users,
  Award,
  Clock,
  MapPin,
  Play,
  Bell,
  Gift,
} from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toSlug } from '@/lib/slug';
import { useTheme } from '@/components/providers/ThemeProvider';

// =============================================================================
// MAGNETIC ELEMENT
// =============================================================================

const MagneticElement = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// =============================================================================
// ANIMATED LOGO
// =============================================================================

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl blur-lg"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Rotating Ring */}
        <motion.div
          className="absolute -inset-1 rounded-xl border-2 border-brand-500/30"
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        {/* Logo Container */}
        <div className="relative px-3 py-2.5 bg-slate-900 rounded-xl border border-white/10">
          <motion.div animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }} transition={{ duration: 0.5 }}>
            <Code2 className="w-7 h-7 text-brand-400" />
          </motion.div>
        </div>
        {/* Sparkle Effects */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-brand-400 rounded-full"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (i - 1) * 20],
                    y: [0, -20 - i * 5],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ left: '50%', top: '50%' }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="flex flex-col">
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
          animate={{ backgroundPosition: isHovered ? '100% 50%' : '0% 50%' }}
          style={{ backgroundSize: '200% 100%' }}
          transition={{ duration: 0.5 }}
        >
          WebOnDev
        </motion.span>
        <motion.span
          className="text-xs text-slate-400 font-medium"
          animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          Tech Agency
        </motion.span>
      </div>
    </Link>
  );
};

// =============================================================================
// NAV ITEM WITH SPOTLIGHT
// =============================================================================

const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-4 py-2 text-sm font-medium text-slate-300 rounded-xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-teal-500/20 rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      />
      {/* Glow */}
      <motion.div
        className="absolute inset-0 bg-brand-500/10 rounded-xl blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      {/* Text */}
      <span className="relative z-10 group-hover:text-white transition-colors">{children}</span>
      {/* Underline */}
      <motion.div
        className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-brand-400 to-teal-400 rounded-full"
        initial={{ width: 0, x: '-50%' }}
        animate={{ width: isHovered ? '60%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

// =============================================================================
// MEGA MENU DROPDOWN
// =============================================================================

const serviceIcons: Record<string, any> = {
  'web-development': Code2,
  'mobile-development': Smartphone,
  'ui-ux-design': Palette,
  'digital-marketing': BarChart3,
  'cloud-devops': Cloud,
  'consulting-strategy': Cpu,
};

const serviceColors: Record<string, string> = {
  'web-development': 'from-brand-500 to-teal-500',
  'mobile-development': 'from-teal-500 to-cyan-500',
  'ui-ux-design': 'from-cyan-500 to-blue-500',
  'digital-marketing': 'from-purple-500 to-pink-500',
  'cloud-devops': 'from-blue-500 to-indigo-500',
  'consulting-strategy': 'from-pink-500 to-rose-500',
};

const MegaMenu = ({ isOpen, services, onClose }: { isOpen: boolean; services: any[]; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="absolute top-full left-0 right-0 z-50 mt-2"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-brand-500/50 via-teal-500/50 to-cyan-500/50 pointer-events-none" />

                <div className="relative p-6">
                  <div className="grid grid-cols-12 gap-8">
                    {/* Services Grid */}
                    <div className="col-span-8">
                      <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-brand-400" />
                        <h3 className="text-lg font-bold text-white">Our Services</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, index) => {
                          const Icon = serviceIcons[service.slug] || Code2;
                          const colorClass = serviceColors[service.slug] || 'from-brand-500 to-teal-500';

                          return (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={`/${service.slug}`}
                                onClick={onClose}
                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                              >
                                <motion.div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClass} p-[1px] shrink-0`}
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                  </div>
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-white group-hover:text-brand-400 transition-colors truncate">
                                      {service.title}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                                  </div>
                                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                                    {service.description?.slice(0, 80)}...
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* View All */}
                      <motion.div
                        className="mt-6 pt-6 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href="/services"
                          onClick={onClose}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold hover:from-brand-600 hover:to-teal-600 transition-all shadow-lg shadow-brand-500/25 group"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Explore All Services</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>

                    {/* Featured Card */}
                    <div className="col-span-4">
                      <motion.div
                        className="relative h-full rounded-xl overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-teal-500/20 to-cyan-500/20" />
                        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

                        <div className="relative p-6 h-full flex flex-col">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-medium text-green-400">We&apos;re Available</span>
                          </div>

                          <h4 className="text-xl font-bold text-white mb-2">
                            Ready to Start Your Project?
                          </h4>
                          <p className="text-sm text-slate-400 mb-6 flex-1">
                            Get a free consultation with our experts and turn your ideas into reality.
                          </p>

                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                              <Clock className="w-4 h-4 text-brand-400" />
                              <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                              <Users className="w-4 h-4 text-teal-400" />
                              <span>Expert Team</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                              <Award className="w-4 h-4 text-cyan-400" />
                              <span>500+ Projects</span>
                            </div>
                          </div>

                          <Link
                            href="/contact"
                            onClick={onClose}
                            className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all group"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Schedule a Call</span>
                          </Link>
                        </div>
                      </motion.div>
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
};

// =============================================================================
// SEARCH MODAL (CMD+K)
// =============================================================================

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const suggestions = [
    { icon: Code2, label: 'Web Development', href: '/web-development' },
    { icon: Smartphone, label: 'Mobile Apps', href: '/mobile-development' },
    { icon: Palette, label: 'UI/UX Design', href: '/ui-ux-design' },
    { icon: Globe, label: 'Where We Serve', href: '/where-we-serve' },
    { icon: MessageCircle, label: 'Contact Us', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, locations, blog posts..."
                  className="flex-1 bg-transparent text-white placeholder-slate-500 text-lg focus:outline-none"
                />
                <kbd className="px-2 py-1 rounded-lg bg-white/10 text-xs text-slate-400 font-mono">ESC</kbd>
              </div>

              {/* Suggestions */}
              <div className="p-4">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                  Quick Links
                </div>
                <div className="space-y-1">
                  {suggestions.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-400 transition-colors" />
                        <span className="text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// =============================================================================
// SCROLL PROGRESS BAR
// =============================================================================

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 origin-left"
      style={{ scaleX }}
    />
  );
};

// =============================================================================
// MAIN HEADER COMPONENT
// =============================================================================

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close if clicking the toggle button or inside the menu
      if (toggleButtonRef.current?.contains(target)) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch countries
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
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-brand-600 via-teal-600 to-cyan-600 text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 text-sm">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">
                🎉 <span className="hidden sm:inline">Special Offer:</span> Get 20% off on all services this month!
              </span>
              <Link href="/contact" className="underline hover:no-underline font-semibold">
                Claim Now →
              </Link>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-2xl shadow-lg shadow-black/10 border-b border-white/5'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

        {/* Scroll Progress */}
        <ScrollProgress />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <AnimatedLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group',
                    isMegaMenuOpen ? 'text-brand-400 bg-brand-500/10' : 'text-slate-300 hover:text-white'
                  )}
                >
                  <span>Services</span>
                  <motion.div animate={{ rotate: isMegaMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>

              {/* Locations */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl transition-all duration-300">
                  <Globe className="w-4 h-4" />
                  <span>Locations</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Locations Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {popularCountries.map((country) => (
                        <Link
                          key={country.code}
                          href={`/where-we-serve/${toSlug(country.name)}`}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                            {country.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        href="/where-we-serve"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-teal-500 text-white text-sm font-semibold hover:from-brand-600 hover:to-teal-600 transition-all"
                      >
                        <Globe className="w-4 h-4" />
                        <span>View All Locations</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
                <kbd className="ml-2 px-1.5 py-0.5 rounded bg-white/10 text-xs font-mono">⌘K</kbd>
              </motion.button>

              {/* Theme Toggle */}
              {/* <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button> */}

              {/* CTA Button */}
              <MagneticElement>
                <Button
                  variant="glow"
                  className="rounded-xl group flex items-center gap-2"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openBookingModal'));
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-4 h-4" />
                  </motion.div>
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticElement>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <motion.button
                ref={toggleButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl hover:bg-white/10 transition-colors relative w-10 h-10 flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-6 flex flex-col justify-center items-center gap-1.5"
                  animate={isMenuOpen ? 'open' : 'closed'}
                >
                  <motion.span
                    className="w-full h-0.5 bg-current block origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: isMenuOpen ? '#10b981' : 'currentColor' }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-current block"
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: 20 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-current block origin-center"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: isMenuOpen ? '#10b981' : 'currentColor' }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          services={services}
          onClose={() => setIsMegaMenuOpen(false)}
        />

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl"
            >
              <div className="p-4 space-y-2">
                {/* Nav Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-500 to-teal-500" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-500 to-teal-500" />
                      <span>Services</span>
                    </div>
                    <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'services' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 mt-2 space-y-1"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Locations */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/where-we-serve"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <Globe className="w-4 h-4 text-brand-400" />
                    <span>Where We Serve</span>
                  </Link>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Button
                    variant="glow"
                    className="w-full rounded-xl flex items-center justify-center gap-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('openBookingModal'));
                    }}
                  >
                    <Zap className="w-4 h-4" />
                    <span>Get Started</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
