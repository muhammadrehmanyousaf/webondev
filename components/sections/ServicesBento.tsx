'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Megaphone,
  Palette,
  Cloud,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// SERVICES DATA
// =============================================================================

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Enterprise-grade web applications with Next.js, React, and Node.js. Lightning-fast performance meets pixel-perfect design.',
    icon: Code2,
    href: '/web-development',
    features: ['Next.js 15', 'React', 'Node.js', 'TypeScript'],
    stats: { projects: '150+', satisfaction: '99%' },
    accent: 'from-brand-400 to-teal-400',
    size: 'large',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native & cross-platform apps for iOS and Android that users love and businesses trust.',
    icon: Smartphone,
    href: '/mobile-development',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    stats: { apps: '80+', downloads: '5M+' },
    accent: 'from-teal-400 to-cyan-400',
    size: 'large',
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    description: 'Data-driven strategies that dominate search rankings and drive exponential organic growth.',
    icon: Search,
    href: '/digital-marketing/search-engine-optimization',
    features: ['Technical SEO', 'Content Strategy', 'Analytics'],
    stats: { growth: '300%', keywords: '500+' },
    accent: 'from-cyan-400 to-brand-400',
    size: 'large',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'High-converting online stores that scale with your business.',
    icon: ShoppingCart,
    href: '/ecommerce-solutions',
    features: ['Shopify', 'WooCommerce', 'Custom'],
    accent: 'from-brand-400 to-teal-400',
    size: 'small',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel strategies that turn visitors into loyal customers.',
    icon: Megaphone,
    href: '/digital-marketing',
    features: ['PPC', 'Social Media', 'Email'],
    accent: 'from-teal-400 to-cyan-400',
    size: 'small',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Award-winning designs that elevate user experience.',
    icon: Palette,
    href: '/ui-ux-design',
    features: ['UI Design', 'UX Research', 'Prototyping'],
    accent: 'from-cyan-400 to-brand-400',
    size: 'small',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure that grows with your needs.',
    icon: Cloud,
    href: '/cloud-devops',
    features: ['AWS', 'Azure', 'CI/CD'],
    accent: 'from-brand-400 to-teal-400',
    size: 'small',
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    description: '24/7 monitoring and maintenance for peace of mind.',
    icon: Shield,
    href: '/maintenance-support',
    features: ['24/7 Support', 'Security', 'Updates'],
    accent: 'from-teal-400 to-cyan-400',
    size: 'small',
  },
];

// =============================================================================
// LARGE SERVICE CARD - Featured
// =============================================================================

const LargeServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link href={service.href} className="block group">
      <motion.div
        className="relative h-full gradient-border rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#060B18] overflow-hidden">
          {/* Background number */}
          <span className="absolute -right-4 -top-6 text-[80px] sm:text-[100px] lg:text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
            {num}
          </span>

          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,129,0.06), transparent)`,
            }}
          />

          {/* Icon */}
          <div className="relative mb-4 sm:mb-5">
            <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.accent} bg-opacity-10`}
              style={{ background: `linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1))` }}
            >
              <Icon className="w-6 h-6 text-brand-400" />
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-400 transition-colors duration-200">
              {service.title}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-4 sm:mb-5 text-xs sm:text-sm lg:text-[15px]">
              {service.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-slate-400"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats */}
            {service.stats && (
              <div className="flex gap-6 sm:gap-8 mb-4 sm:mb-5 pt-4 sm:pt-5 border-t border-white/[0.06]">
                {Object.entries(service.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-0.5 sm:mt-1">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="inline-flex items-center gap-2 text-brand-400 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
              Explore Service
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// =============================================================================
// SMALL SERVICE CARD - Compact
// =============================================================================

const SmallServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="block group">
      <motion.div
        className="relative h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      >
        <div className="relative h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 hover:bg-white/[0.04] transition-all duration-300">
          {/* Icon row */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 group-hover:text-brand-400 transition-colors duration-200" />
          </div>

          <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors duration-200">
            {service.title}
          </h3>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-medium text-slate-500"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const ServicesBento = () => {
  const featuredServices = services.filter(s => s.size === 'large');
  const otherServices = services.filter(s => s.size === 'small');

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Services
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Everything you need to{' '}
            <span className="gradient-text">ship great products</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            From concept to deployment, we deliver end-to-end digital solutions that transform businesses and drive measurable growth.
          </p>
        </motion.div>

        {/* Featured Services - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-3 sm:mb-4 lg:mb-5">
          {featuredServices.map((service, idx) => (
            <LargeServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          {otherServices.map((service, idx) => (
            <SmallServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(6,182,212,0.1) 50%, rgba(16,185,129,0.05) 100%)',
          }} />
          <div className="absolute inset-0 border border-white/[0.06] rounded-2xl" />

          <div className="relative z-10 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 lg:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Ready to build something great?
                </h3>
                <p className="text-slate-400 max-w-lg text-sm sm:text-base">
                  Let&apos;s discuss your project and see how we can help you achieve your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                >
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
