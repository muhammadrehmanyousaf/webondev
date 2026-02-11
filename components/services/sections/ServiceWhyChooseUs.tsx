'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Award, TrendingUp, Code2, HeadphonesIcon } from 'lucide-react';

// =============================================================================
// SERVICE WHY CHOOSE US - Differentiators + risk reversal
// Content Variation Engine (seed: 91)
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface ServiceWhyChooseUsProps {
  serviceName?: string;
  city?: string;
  state?: string;
  country?: string;
}

const ServiceWhyChooseUs = ({ serviceName, city, state, country }: ServiceWhyChooseUsProps) => {
  const locationLabel = city || state || country || '';
  const fullLocation = [city, state, country, serviceName].filter(Boolean).join(', ');
  const v = fullLocation ? strHash(fullLocation, 91) % 3 : 0;

  const reasonSets = [
    [
      { icon: Award, title: '500+ Projects Delivered', desc: 'From MVPs to enterprise platforms, we have shipped production-grade software across 50+ countries since 2016.' },
      { icon: Code2, title: 'Full-Stack Expertise', desc: 'React, Next.js, Flutter, Node.js, Python—our engineers hold senior-level proficiency across the entire stack.' },
      { icon: Shield, title: '30-Day Money-Back Guarantee', desc: 'Not satisfied with milestone one? Get a full refund. Zero risk, zero commitment until you see value.' },
      { icon: Clock, title: '24-Hour Response SLA', desc: 'Your messages never wait. Dedicated project managers respond within 24 hours—usually within 2.' },
      { icon: TrendingUp, title: '3x Average ROI', desc: 'Our clients see 3x return on their software investment within 12 months, tracked with real analytics.' },
      { icon: HeadphonesIcon, title: 'Post-Launch Support Included', desc: 'Every project includes 30-day warranty support. Need ongoing help? Flexible retainer plans available.' },
    ],
    [
      { icon: Users, title: '250+ Happy Clients', desc: 'Rated 4.9/5 across Clutch, Google, and Trustpilot. Real reviews from real businesses we have helped grow.' },
      { icon: Zap, title: 'Ship 2x Faster', desc: 'Our proven sprint methodology and reusable component library cuts delivery time in half without cutting corners.' },
      { icon: Shield, title: 'Code Ownership from Day 1', desc: 'You own 100% of the source code, designs, and IP from the first commit. No lock-in, no surprises.' },
      { icon: Code2, title: 'Battle-Tested Architecture', desc: 'Every project follows our production-grade architecture patterns: CI/CD, automated testing, security scanning.' },
      { icon: Clock, title: 'Transparent Milestone Billing', desc: 'Pay per milestone, not per hour. You approve each phase before we move forward. Complete budget control.' },
      { icon: Award, title: '98% On-Time Delivery', desc: 'Backed by structured sprints, real-time dashboards, and a dedicated PM who keeps every deadline.' },
    ],
    [
      { icon: TrendingUp, title: 'Revenue-Focused Development', desc: 'We build software that makes money. Conversion optimization, SEO, and analytics are built-in from sprint one.' },
      { icon: Shield, title: 'Enterprise-Grade Security', desc: 'OWASP Top 10 compliance, penetration testing, encrypted data at rest and in transit. Your users are safe.' },
      { icon: Zap, title: 'Core Web Vitals Optimized', desc: 'Every product we ship scores 90+ on Lighthouse. Fast load times, smooth interactions, zero layout shifts.' },
      { icon: Users, title: 'Dedicated Cross-Functional Team', desc: 'PM, designer, frontend, backend, QA—your own embedded team that understands your business inside and out.' },
      { icon: Clock, title: 'Agile with Full Visibility', desc: 'Bi-weekly demos, shared Jira board, Slack channel, and weekly reports. You always know exactly where we stand.' },
      { icon: HeadphonesIcon, title: 'Lifetime Architecture Support', desc: 'Even after handoff, our architects are available for consultations. We stand behind our work indefinitely.' },
    ],
  ];

  const headerVariants = [
    {
      badge: 'Why Web On Dev',
      h2: locationLabel ? `Why ${locationLabel} Businesses Choose Us` : 'Why 250+ Businesses Choose Us',
      h2Gradient: 'over the rest',
      desc: locationLabel
        ? `${locationLabel} teams partner with us because we deliver measurable results—not promises. Here is what sets us apart.`
        : 'We deliver measurable results—not promises. Here is what makes us different from every other agency.',
    },
    {
      badge: 'Our Edge',
      h2: locationLabel ? `The Web On Dev Advantage for ${locationLabel}` : 'The Web On Dev Advantage',
      h2Gradient: 'in numbers',
      desc: locationLabel
        ? `Businesses in ${locationLabel} trust us because every claim is backed by data, every project by a guarantee.`
        : 'Every claim is backed by data, every project by a guarantee. That is why our clients stay with us for years.',
    },
    {
      badge: 'Our Promise',
      h2: locationLabel ? `Built for ${locationLabel} businesses` : 'Built for businesses',
      h2Gradient: 'that demand results',
      desc: locationLabel
        ? `From startups to enterprise—here is why ${locationLabel} teams trust Web On Dev with their most critical software.`
        : 'From startups to enterprise—here is why 250+ teams trust us with their most critical software.',
    },
  ];

  const reasons = reasonSets[v];
  const header = headerVariants[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 35% at 50% 40%, rgba(16,185,129,0.05), transparent 70%)' }} />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>{header.badge}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{header.h2} </span>
            <span className="gradient-text">{header.h2Gradient}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{header.desc}</p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}>
                  <reason.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{reason.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          className="mt-12 relative rounded-2xl p-6 sm:p-8 border border-brand-500/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-brand-500/20 to-teal-500/20 flex-shrink-0">
                <Shield className="w-7 h-7 text-brand-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">30-Day Money-Back Guarantee</h4>
                <p className="text-sm text-slate-400">Not satisfied after the first milestone? Full refund—no questions asked.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.15)] whitespace-nowrap"
            >
              Start Risk-Free
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;
