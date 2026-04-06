'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart3, CheckCircle2, Award } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// OUTCOMES SECTION - Content Variation Engine
// =============================================================================

// Deterministic hash for content variation
const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface OutcomesSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const OutcomesSection = ({ cityName, stateName, countryName }: OutcomesSectionProps = {}) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 31) % 3 : 0;

  // --- VARIANT FEATURE DESCRIPTIONS ---
  const featureDescriptions = [
    [
      'We don\'t just build features—we engineer for measurable business outcomes. Every line of code, every design decision, and every optimization is aligned with your growth objectives.',
      'We leverage advanced analytics, A/B testing, and user behavior data to make informed decisions about your digital product. Our iterative approach ensures continuous improvement based on real user feedback.',
      'Every project is structured to deliver measurable return on investment. We track key performance indicators, conversion rates, and business metrics to ensure your digital solution contributes directly to your bottom line.',
    ],
    [
      'Our development methodology ties every sprint directly to quantifiable growth metrics. We set clear OKRs at kickoff, instrument telemetry from day one, and review real-time dashboards weekly so nothing ships without a business case.',
      'Real-time dashboards, cohort analysis, and funnel tracking replace gut feelings. We embed analytics at every touchpoint—from first visit to checkout—and run experiments continuously to compound small gains into significant revenue lifts.',
      'We align budgets to measurable impact. Before writing a single line of code, we model expected ROI, define success thresholds, and build dashboards so you can see exactly how your investment translates into pipeline, revenue, and retention.',
    ],
    [
      'From architecture choices to deployment pipelines, we optimize for speed-to-value. Lean sprints, continuous delivery, and automated testing mean features reach your users faster—and start generating results sooner.',
      'We embed measurement into every layer of your stack—event tracking in the UI, structured logs in the backend, and automated anomaly detection in production. Data flows in real time so decisions are never stale.',
      'Revenue impact is the north star of every engagement. We structure contracts around outcome milestones, share transparent dashboards, and iterate until KPIs are met—not just until features are shipped.',
    ],
  ];

  // --- VARIANT NARRATIVE CARDS ---
  const narrativeCards = [
    {
      p1: 'We don\'t just deliver projects—we deliver business outcomes. Our team measures success by your growth metrics, conversion rates, and ROI.',
      p2: 'From initial strategy to post-launch optimization, every decision is data-driven and aligned with your business objectives.',
    },
    {
      p1: 'Our track record speaks in numbers: faster load times, higher conversion rates, and lower bounce rates across every project we deliver.',
      p2: 'We set measurable targets before writing a single line of code, then iterate relentlessly until those targets are exceeded.',
    },
    {
      p1: 'Growth isn\'t luck—it\'s engineered. We combine technical excellence with analytics discipline to turn your digital product into a revenue engine.',
      p2: 'Every engagement includes weekly performance reviews, A/B test results, and actionable insights that keep your product improving month over month.',
    },
  ];

  // --- VARIANT INTRO PARAGRAPHS ---
  const introParagraphs = [
    {
      p1: `${locationLabel ? `For businesses in ${locationLabel}, we` : 'We'} design and build fast, accessible, and search-optimized products. From information architecture and Core Web Vitals to localized content and analytics, our delivery is engineered to win traffic and convert it into revenue${locationLabel ? ` for ${locationLabel} companies` : ''}.`,
      p2: `Every engagement includes technical SEO, schema markup, and measurement. We validate performance with field data and iterate based on what your ${locationLabel ? `${locationLabel} ` : ''}users actually do.`,
    },
    {
      p1: `${locationLabel ? `${locationLabel} businesses trust us to` : 'We'} architect digital products that rank, load fast, and convert. Our full-stack approach covers server-side rendering, edge caching, structured data, and conversion funnels—all wired together from the start${locationLabel ? ` for the ${locationLabel} market` : ''}.`,
      p2: `We don't hand off and disappear. Post-launch, we monitor Core Web Vitals, crawl health, and conversion data${locationLabel ? ` for your ${locationLabel} audience` : ''}, then ship improvements every sprint.`,
    },
    {
      p1: `${locationLabel ? `Serving ${locationLabel}, we` : 'We'} build products where performance, SEO, and UX aren't afterthoughts—they're the foundation. Semantic markup, lazy loading, responsive images, and schema.org integration come standard in every project${locationLabel ? ` we deliver in ${locationLabel}` : ''}.`,
      p2: `Our teams run weekly analytics reviews and share transparent dashboards so you see exactly how ${locationLabel ? `your ${locationLabel} ` : ''}traffic, engagement, and revenue are trending.`,
    },
  ];

  // --- VARIANT TECH FEATURES ---
  const techFeatureSets = [
    ['Conversion Rate Optimization', 'User Experience Design', 'Technical SEO Implementation', 'Analytics & Measurement', 'Performance Optimization', 'Continuous Improvement'],
    ['Revenue Funnel Analysis', 'Heatmap & Session Recording', 'Schema Markup & Rich Results', 'Real-Time Dashboards', 'Core Web Vitals Tuning', 'Sprint-Based Iteration'],
    ['Landing Page Optimization', 'Accessibility Auditing (WCAG)', 'Programmatic SEO', 'Event-Driven Analytics', 'CDN & Edge Caching', 'Post-Launch Monitoring'],
  ];

  const features = [
    { icon: TrendingUp, title: 'Performance-Driven Development', description: featureDescriptions[v][0] },
    { icon: BarChart3, title: 'Data-Informed Decisions', description: featureDescriptions[v][1] },
    { icon: Target, title: 'ROI-Focused Delivery', description: featureDescriptions[v][2] },
  ];

  const narrative = narrativeCards[v];
  const intro = introParagraphs[v];
  const outcomeFeatures = techFeatureSets[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 50%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Outcome-Driven</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">{locationLabel ? `${locationLabel}'s` : 'A'} software partner built for </span>
              <span className="gradient-text">
                outcomes
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              {intro.p1}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {intro.p2}
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative bg-white/[0.02] rounded-xl p-5 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                      >
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Outcome Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {outcomeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Narrative Card */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  {narrative.p1}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {narrative.p2}
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
                  alt={locationLabel ? `Outcome-driven software development team serving ${locationLabel}` : 'Outcome-driven software development team'}
                  className="w-full h-72 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Static Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Outcome-Driven</div>
                    <div className="text-white/70 text-xs">Results-Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <InlineCTA
          title={locationLabel ? `Ready to Drive Results in ${locationLabel}?` : 'Ready to Drive Results?'}
          description={locationLabel ? `Let's build a solution that delivers measurable outcomes for your ${locationLabel} business.` : "Let's build a solution that delivers measurable outcomes for your business."}
          buttonText="Get Started"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default OutcomesSection;
