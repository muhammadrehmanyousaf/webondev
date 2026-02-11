'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target, CheckCircle2, Search } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// WEB DEVELOPMENT SECTION - Content Variation Engine
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface WebDevelopmentSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const WebDevelopmentSection = ({ cityName, stateName, countryName }: WebDevelopmentSectionProps = {}) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 37) % 3 : 0;

  const featureDescriptions = [
    [
      'We design websites with search engines in mind from the ground up. Our development process incorporates semantic HTML, structured data markup, and clean URL structures that help search engines understand and rank your content effectively.',
      'Speed is crucial for both user experience and search rankings. We optimize for Core Web Vitals, implement lazy loading, compress assets, and use modern build tools to ensure your website loads lightning-fast.',
      'Every design element is crafted to guide users toward conversion. We implement clear call-to-actions, intuitive navigation, and persuasive content layouts that turn visitors into customers.',
    ],
    [
      'Our crawl-first methodology ensures every page is indexable, internally linked, and enriched with structured data. We architect sitemaps, canonical tags, and hreflang attributes so search engines surface the right page to the right audience.',
      'We ship sub-second Time to First Byte by combining ISR, edge functions, and streaming SSR. Image pipelines auto-generate responsive srcsets and modern formats like AVIF, keeping Largest Contentful Paint under 2.5 seconds.',
      'We map every user journey to a measurable funnel. Scroll-depth tracking, micro-conversion events, and exit-intent analytics let us continuously refine CTAs, forms, and page layouts to maximize sign-ups and sales.',
    ],
    [
      'We treat SEO as an engineering discipline, not an afterthought. Automated Lighthouse CI checks, structured data validation, and render-budget analysis run on every pull request to prevent ranking regressions before they reach production.',
      'Performance budgets are enforced in CI. We tree-shake unused JavaScript, code-split by route, and defer non-critical CSS so your pages score 90+ on PageSpeed Insights—on mobile, every time.',
      'Our conversion playbook includes social proof placement, urgency cues, and progressive disclosure patterns tested across hundreds of projects. The result: landing pages that consistently outperform industry benchmarks.',
    ],
  ];

  const narrativeCards = [
    {
      p1: 'Your website is your most important digital asset. We build sites that not only look stunning but also rank high and convert visitors into customers.',
      p2: 'Every project includes Core Web Vitals optimization, semantic HTML, and structured data markup for maximum search visibility.',
    },
    {
      p1: 'A fast, accessible website is the foundation of digital growth. We engineer sites that load in under a second, meet WCAG standards, and earn featured snippets.',
      p2: 'Our build pipeline includes automated accessibility tests, SEO audits, and performance monitoring—so quality never degrades after launch.',
    },
    {
      p1: 'We believe great web development is invisible—users find what they need instantly, pages load before they blink, and every interaction feels effortless.',
      p2: 'Under the hood, server-side rendering, edge caching, and real-time analytics work together to deliver experiences that rank and convert.',
    },
  ];

  const introParagraphs = [
    {
      p1: `${locationLabel ? `For ${locationLabel} businesses, we` : 'We'} deliver SEO-first websites that load fast, scale globally, and meet Core Web Vitals. Clean information architecture, structured data, and intent-led content ensure your pages are discoverable and conversion-focused from day one.`,
      p2: `Every build includes technical SEO, internationalization, and analytics for decision-making—no bolt-ons required.${locationLabel ? ` Whether you're a startup or enterprise in ${locationLabel}, we tailor our approach to your market.` : ''}`,
    },
    {
      p1: `${locationLabel ? `${locationLabel} companies rely on us for` : 'We build'} websites where architecture decisions are driven by search intent, not just aesthetics. Server-rendered React, incremental static regeneration, and edge-deployed APIs give your ${locationLabel ? `${locationLabel} ` : ''}audience sub-second experiences.`,
      p2: `From keyword-mapped URL structures to schema-enriched product pages, we engineer every layer for discoverability${locationLabel ? ` in the ${locationLabel} market and beyond` : ''}.`,
    },
    {
      p1: `${locationLabel ? `Businesses across ${locationLabel} choose us because we` : 'We'} treat web development as a growth channel, not a cost center. Every site we ship is instrumented with event tracking, conversion funnels, and real-time dashboards so you can measure ROI from day one.`,
      p2: `Our technology choices—Next.js, React, TypeScript, Tailwind—are selected for developer velocity and long-term maintainability${locationLabel ? `, giving ${locationLabel} teams a competitive edge` : ''}.`,
    },
  ];

  const techFeatureSets = [
    ['Semantic HTML Structure', 'Structured Data Markup', 'Core Web Vitals Optimization', 'Mobile-First Responsive Design', 'Internationalization (i18n)', 'Analytics Integration'],
    ['Server-Side Rendering (SSR)', 'Incremental Static Regeneration', 'Automated Lighthouse CI', 'Progressive Enhancement', 'Edge Function Deployment', 'A/B Testing Infrastructure'],
    ['Next.js App Router', 'TypeScript Strict Mode', 'Tailwind CSS Design System', 'REST & GraphQL APIs', 'Image Optimization Pipeline', 'Content Delivery Network'],
  ];

  const features = [
    { icon: Search, title: 'SEO-First Architecture', description: featureDescriptions[v][0] },
    { icon: Zap, title: 'Performance Optimization', description: featureDescriptions[v][1] },
    { icon: Target, title: 'Conversion-Focused Design', description: featureDescriptions[v][2] },
  ];

  const narrative = narrativeCards[v];
  const intro = introParagraphs[v];
  const techFeatures = techFeatureSets[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.06), transparent 70%)' }} />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Web Development</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">{locationLabel ? `${locationLabel} web development` : 'Web development'} built to </span>
              <span className="gradient-text">rank</span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-4">{intro.p1}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{intro.p2}</p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div key={feature.title} className="group relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <div className="relative bg-white/[0.02] rounded-xl p-5 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}>
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{feature.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
              {techFeatures.map((feature, index) => (
                <motion.div key={index} className="flex items-center gap-3 group" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + index * 0.05 }}>
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="order-1 lg:order-2 relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div className="relative mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">{narrative.p1}</p>
                <p className="text-slate-400 leading-relaxed">{narrative.p2}</p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop" alt={locationLabel ? `High-performance web development for ${locationLabel} businesses` : 'High-performance web development'} className="w-full h-72 object-cover rounded-xl" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">SEO-Optimized</div>
                    <div className="text-white/70 text-xs">Performance-First</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <InlineCTA
          title={locationLabel ? `Need a High-Performance Website in ${locationLabel}?` : 'Need a High-Performance Website?'}
          description={locationLabel ? `Let's build a site that ranks in ${locationLabel}, converts visitors, and scales with your business.` : "Let's build a site that ranks, converts, and scales with your business."}
          buttonText="Discuss Your Project"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
