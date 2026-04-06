'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// PRICING OVERVIEW SECTION - Content Variation Engine (seed: 83)
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface PricingOverviewSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const PricingOverviewSection = ({ cityName, stateName, countryName }: PricingOverviewSectionProps = {}) => {
  const locationLabel = cityName || stateName || countryName || '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 83) % 3 : 0;

  const tierSets = [
    [
      {
        name: 'Starter',
        icon: Zap,
        price: '$3,000',
        period: 'from',
        tagline: 'Perfect for MVPs & landing pages',
        features: ['Single-page or multi-page website', 'Mobile-responsive design', 'Basic SEO setup & analytics', 'Contact form integration', '2 rounds of design revisions', '30-day post-launch support'],
        cta: 'Get Started',
        highlighted: false,
      },
      {
        name: 'Growth',
        icon: Sparkles,
        price: '$8,000',
        period: 'from',
        tagline: 'For scaling startups & SMBs',
        features: ['Custom web or mobile application', 'UI/UX design with user research', 'API integrations & database', 'Advanced SEO & Core Web Vitals', 'CI/CD pipeline setup', '60-day support + monthly retainer option'],
        cta: 'Most Popular',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        icon: Crown,
        price: 'Custom',
        period: 'quote',
        tagline: 'For complex platforms & teams',
        features: ['Full-stack platform development', 'Dedicated engineering team', 'Architecture & security review', 'Compliance (HIPAA, SOC 2, GDPR)', 'Load testing & performance tuning', 'Ongoing SLA-backed support'],
        cta: 'Contact Us',
        highlighted: false,
      },
    ],
    [
      {
        name: 'Launch',
        icon: Zap,
        price: '$3,500',
        period: 'from',
        tagline: 'Ship your first product fast',
        features: ['Responsive marketing site or MVP', 'Figma design + handoff', 'SEO-optimized structure', 'Analytics & conversion tracking', 'CMS integration', '30-day warranty support'],
        cta: 'Start Building',
        highlighted: false,
      },
      {
        name: 'Scale',
        icon: Sparkles,
        price: '$12,000',
        period: 'from',
        tagline: 'For products ready to grow',
        features: ['Full web or mobile application', 'User research & UX strategy', 'Third-party integrations & APIs', 'Automated testing & CI/CD', 'Performance optimization', '90-day support + retainer options'],
        cta: 'Best Value',
        highlighted: true,
      },
      {
        name: 'Partner',
        icon: Crown,
        price: 'Custom',
        period: 'quote',
        tagline: 'Embedded team, ongoing delivery',
        features: ['Dedicated cross-functional team', 'Product strategy & roadmapping', 'Enterprise security & compliance', 'Quarterly architecture reviews', 'Priority SLA & on-call support', 'Flexible sprint-based billing'],
        cta: 'Let\'s Talk',
        highlighted: false,
      },
    ],
    [
      {
        name: 'Foundation',
        icon: Zap,
        price: '$4,000',
        period: 'from',
        tagline: 'Professional web presence',
        features: ['Up to 10-page responsive site', 'Custom design system', 'Technical SEO & structured data', 'Form + email integration', 'Performance-optimized build', '30-day post-launch support'],
        cta: 'Get Quote',
        highlighted: false,
      },
      {
        name: 'Accelerate',
        icon: Sparkles,
        price: '$15,000',
        period: 'from',
        tagline: 'Custom apps that drive revenue',
        features: ['Custom web or native app', 'End-to-end UX/UI design', 'Database + API architecture', 'Payment & auth integration', 'Automated QA pipeline', '90-day warranty + growth retainer'],
        cta: 'Recommended',
        highlighted: true,
      },
      {
        name: 'Transform',
        icon: Crown,
        price: 'Custom',
        period: 'quote',
        tagline: 'Enterprise-grade digital platforms',
        features: ['Multi-service platform build', 'Dedicated pod (PM, design, dev, QA)', 'Compliance & penetration testing', 'Microservices architecture', 'White-glove onboarding', '24/7 SLA-backed maintenance'],
        cta: 'Schedule Call',
        highlighted: false,
      },
    ],
  ];

  const headerVariants = [
    {
      badge: 'Transparent Pricing',
      h2White: locationLabel ? `${locationLabel} project pricing` : 'Project pricing',
      h2Gradient: 'that scales with you',
      desc: `No hidden fees, no surprises. Choose a plan that fits your scope${locationLabel ? ` and ${locationLabel} market goals` : ''}, or request a custom quote for complex builds.`,
    },
    {
      badge: 'Investment Options',
      h2White: locationLabel ? `Flexible plans for ${locationLabel}` : 'Flexible plans for',
      h2Gradient: 'every stage',
      desc: `From startup MVPs to enterprise platforms—pick the engagement model that matches your budget and timeline${locationLabel ? ` in ${locationLabel}` : ''}. All plans include 30-day warranty.`,
    },
    {
      badge: 'Plans & Pricing',
      h2White: locationLabel ? `Start building in ${locationLabel}` : 'Start building',
      h2Gradient: 'today',
      desc: `Transparent pricing with milestone-based billing. Every plan includes dedicated project management, code ownership, and post-launch support${locationLabel ? ` for ${locationLabel} businesses` : ''}.`,
    },
  ];

  const tiers = tierSets[v];
  const header = headerVariants[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(16,185,129,0.05), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>{header.badge}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{header.h2White} </span>
            <span className="gradient-text">{header.h2Gradient}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{header.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative group rounded-2xl p-[1px] ${tier.highlighted ? 'bg-gradient-to-b from-brand-500 via-teal-500 to-brand-500/50' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-teal-500 text-white shadow-lg shadow-brand-500/30">
                    {tier.cta}
                  </span>
                </div>
              )}

              <div className={`relative rounded-2xl p-8 h-full flex flex-col ${tier.highlighted ? 'bg-[#030712]' : 'bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20'} transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.highlighted ? 'bg-gradient-to-br from-brand-500/20 to-teal-500/20' : 'bg-white/[0.04]'}`}>
                    <tier.icon className={`w-5 h-5 ${tier.highlighted ? 'text-brand-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-500">{tier.tagline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${tier.highlighted ? 'gradient-text' : 'text-white'}`}>{tier.price}</span>
                    {tier.period !== 'quote' && <span className="text-slate-500 text-sm">({tier.period})</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-brand-400' : 'text-slate-500'}`} />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlighted ? 'default' : 'outline'}
                  size="lg"
                  className={`w-full rounded-xl group/btn ${tier.highlighted ? '' : 'border-white/[0.1] text-white hover:bg-white/[0.05]'}`}
                  onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                >
                  {tier.highlighted ? 'Start a Project' : tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-slate-500 text-sm mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          All plans include code ownership, project management, and post-launch warranty. Milestone-based billing—pay as value is delivered.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingOverviewSection;
