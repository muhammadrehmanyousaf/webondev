'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  ArrowRight,
  ArrowUp,
  Send,
  Code2,
  Heart,
  CheckCircle,
  Globe,
  Shield,
  Award,
  Star,
  Clock,
  Zap,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

// =============================================================================
// DATA
// =============================================================================

const companyInfo = {
  name: 'Web On Dev',
  tagline: 'Transforming Ideas Into Digital Reality',
  description: 'Award-winning software development company delivering cutting-edge web applications, mobile apps, and digital transformation solutions. Trusted by 500+ clients across 50+ countries.',
};

const services = [
  { name: 'Web Development', href: '/web-development' },
  { name: 'Mobile Apps', href: '/mobile-development' },
  { name: 'UI/UX Design', href: '/ui-ux-design' },
  { name: 'Digital Marketing', href: '/digital-marketing' },
  { name: 'Cloud & DevOps', href: '/cloud-devops' },
  { name: 'E-commerce', href: '/ecommerce-solutions' },
  { name: 'AI Solutions', href: '/consulting-strategy' },
  { name: 'React Apps', href: '/react-development/react-applications' },
  { name: 'GraphQL APIs', href: '/api-development/graphql-apis' },
  { name: 'PWA Development', href: '/progressive-web-apps/pwa-development' },
  { name: 'Custom Apps', href: '/custom-software-development/custom-applications' },
  { name: 'Brand Strategy', href: '/digital-marketing/brand-strategy-positioning' },
  { name: 'Web Applications', href: '/custom-web-development/web-applications' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Sitemap', href: '/sitemap' },
];

const locations = [
  { name: 'United States', href: '/where-we-serve/united-states' },
  { name: 'Germany', href: '/where-we-serve/germany' },
  { name: 'China', href: '/where-we-serve/china' },
  { name: 'Indonesia', href: '/where-we-serve/indonesia' },
  { name: 'Slovenia', href: '/where-we-serve/slovenia' },
  { name: 'Lebanon', href: '/where-we-serve/lebanon' },
  { name: 'Cameroon', href: '/where-we-serve/cameroon' },
  { name: 'Honduras', href: '/where-we-serve/honduras' },
  { name: 'Madagascar', href: '/where-we-serve/madagascar' },
  { name: 'All Locations', href: '/where-we-serve' },
];

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@webondev', label: 'YouTube' },
  { icon: Twitter, href: 'https://x.com/webon_dev', label: 'X' },
  { icon: Facebook, href: 'https://www.facebook.com/people/Web-On-Dev/61584774954945/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/webondev/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/webondev', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/webondev', label: 'GitHub' },
];

// =============================================================================
// BACK TO TOP
// =============================================================================

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 transition-colors duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// =============================================================================
// MAIN FOOTER
// =============================================================================

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({ title: 'Invalid Email', description: 'Please enter a valid email.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Newsletter', email, formType: 'newsletter', message: `Newsletter: ${email}` }),
      });
      if (response.ok) {
        toast({ title: 'Welcome Aboard!', description: 'You\'re now part of our community!' });
        setEmail('');
      }
    } catch {
      toast({ title: 'Oops!', description: 'Something went wrong. Try again!', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.webondev.com/#organization',
    name: 'Web On Dev',
    url: 'https://www.webondev.com',
    logo: 'https://www.webondev.com/images/branding/logo.png',
    description: companyInfo.description,
    foundingDate: '2020',
    address: { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+92-310-6803687', contactType: 'sales' },
      { '@type': 'ContactPoint', email: 'webondev786@gmail.com', contactType: 'customer service' },
    ],
    sameAs: socialLinks.map(s => s.href),
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '250', bestRating: '5' },
  };

  return (
    <>
      <footer
        className="relative bg-[#030712] text-white overflow-hidden"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

        {/* ================================================================= */}
        {/* CTA BANNER */}
        {/* ================================================================= */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20 blur-[100px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.2), transparent 70%)' }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient bg */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(16,185,129,0.04) 100%)',
              }} />
              <div className="absolute inset-0 border border-white/[0.08] rounded-2xl" />

              <div className="relative p-5 sm:p-6 lg:p-10">
                <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-center">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                      Stay ahead of the curve
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Get weekly insights on web development, AI, and digital innovation delivered to your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full pl-11 pr-4 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-200 text-sm"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-xl px-6 h-auto py-3.5 whitespace-nowrap shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-3">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-500/60" />
                      <span>Free forever. No spam. Unsubscribe anytime.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MAIN FOOTER GRID */}
        {/* ================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6">

            {/* Company Info - Takes more space */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 group mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand-500"
                >
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white" itemProp="name">{companyInfo.name}</h3>
                </div>
              </Link>

              <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed max-w-xs" itemProp="description">
                Award-winning software development company delivering custom web applications, mobile apps, UI/UX design, digital marketing, cloud solutions, and digital transformation services. Trusted by 500+ clients across 50+ countries with a 4.9 out of 5 star rating. We specialize in React, Next.js, TypeScript, React Native, Flutter, Node.js, Python, AWS, and modern web technologies. From startups to enterprises, we build scalable, secure, and performant digital products that drive business growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 sm:mb-5">
                <a href="mailto:webondev786@gmail.com" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  webondev786@gmail.com
                </a>
                <a href="tel:+923106803687" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                  +92 310 6803687
                </a>
                <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                  Pakistan &bull; UAE &bull; USA &bull; UK
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.1] hover:border-brand-500/30 transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Services</h4>
              <nav aria-label="Services">
                <ul className="space-y-2.5">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-slate-500 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Company */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Company</h4>
              <nav aria-label="Company">
                <ul className="space-y-2.5">
                  {company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-500 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Locations */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Locations</h4>
              <nav aria-label="Locations">
                <ul className="space-y-2.5">
                  {locations.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-500 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Trust & Highlights */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Why Us</h4>
              <div className="space-y-3">
                {[
                  { icon: Shield, text: 'SSL Secured', color: 'text-green-400' },
                  { icon: Award, text: 'ISO Certified', color: 'text-amber-400' },
                  { icon: Star, text: '4.9/5 Rating', color: 'text-yellow-400' },
                  { icon: Globe, text: '50+ Countries', color: 'text-cyan-400' },
                  { icon: Clock, text: '24/7 Support', color: 'text-brand-400' },
                  { icon: Zap, text: 'Fast Delivery', color: 'text-teal-400' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <item.icon className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
                    <span className="text-slate-500 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BOTTOM BAR */}
        {/* ================================================================= */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span>&copy; {currentYear} {companyInfo.name}.</span>
                <span>All rights reserved.</span>
                <span className="hidden sm:inline-flex items-center gap-1 ml-2">
                  Made with
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                  in Pakistan
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600">
                <a href="mailto:webondev786@gmail.com" className="hover:text-brand-400 transition-colors duration-200 flex items-center gap-1.5">
                  <Send className="w-3 h-3" />
                  webondev786@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
};

export default Footer;
