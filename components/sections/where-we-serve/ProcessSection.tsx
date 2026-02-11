'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket, HeadphonesIcon, CheckCircle2 } from 'lucide-react';

// =============================================================================
// PROCESS SECTION - Content Variation Engine (seed: 73)
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface ProcessSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const ProcessSection = ({ cityName, stateName, countryName }: ProcessSectionProps = {}) => {
  const locationLabel = cityName || stateName || countryName || '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 73) % 3 : 0;

  const stepSets = [
    [
      { icon: Search, title: 'Discovery & Strategy', duration: 'Week 1–2', desc: 'We audit your market, competitors, and user personas. A clear project brief, sitemap, and technical specification document are delivered before any code is written.' },
      { icon: Palette, title: 'UX/UI Design', duration: 'Week 2–4', desc: 'Wireframes, interactive prototypes, and a full design system built in Figma. Every screen is validated against your brand, accessibility standards, and conversion goals.' },
      { icon: Code2, title: 'Agile Development', duration: 'Week 4–10', desc: 'Two-week sprints with demos at the end of each cycle. Automated tests, code reviews, and CI/CD pipelines ensure quality at every commit. You approve each milestone.' },
      { icon: Rocket, title: 'QA & Launch', duration: 'Week 10–12', desc: 'Cross-browser testing, performance audits, security scans, and SEO validation. We handle staging, DNS cutover, and launch-day monitoring so nothing slips through.' },
      { icon: HeadphonesIcon, title: 'Support & Growth', duration: 'Ongoing', desc: '30-day warranty included. Then monthly retainers for bug fixes, feature sprints, analytics reviews, and conversion optimization to keep your product growing.' },
    ],
    [
      { icon: Search, title: 'Research & Scoping', duration: 'Week 1–2', desc: 'Stakeholder interviews, competitive analysis, and user journey mapping. We produce a scope document with feature priorities, tech recommendations, and a fixed project estimate.' },
      { icon: Palette, title: 'Design & Prototype', duration: 'Week 3–5', desc: 'Mobile-first wireframes evolve into pixel-perfect mockups. We test prototypes with real users, iterate based on feedback, and deliver a complete design system before development.' },
      { icon: Code2, title: 'Build & Iterate', duration: 'Week 5–11', desc: 'Feature branches, pull-request reviews, and automated test suites keep quality high. Bi-weekly demos give you full visibility and the ability to reprioritize mid-sprint.' },
      { icon: Rocket, title: 'Test & Deploy', duration: 'Week 11–13', desc: 'End-to-end testing on real devices, load testing at 10x expected traffic, and accessibility audits. We deploy to production with zero-downtime rollouts and instant rollback capability.' },
      { icon: HeadphonesIcon, title: 'Optimize & Scale', duration: 'Ongoing', desc: 'Post-launch analytics setup, A/B testing, and performance monitoring. We ship improvements every two weeks and provide quarterly strategy reviews to align tech with business goals.' },
    ],
    [
      { icon: Search, title: 'Define & Plan', duration: 'Week 1–2', desc: 'We run a structured discovery workshop to align on goals, constraints, and success metrics. Deliverables include a product roadmap, wireframe sketches, and a detailed technical architecture document.' },
      { icon: Palette, title: 'Design System', duration: 'Week 2–4', desc: 'Component-driven design in Figma with a shared token system for colors, typography, and spacing. Every component is accessibility-tested and optimized for responsive breakpoints before handoff.' },
      { icon: Code2, title: 'Sprint Delivery', duration: 'Week 4–10', desc: 'Continuous integration with automated linting, unit tests, and end-to-end tests. You review deployable increments every two weeks—nothing ships without your explicit approval.' },
      { icon: Rocket, title: 'Launch & Monitor', duration: 'Week 10–12', desc: 'Staged rollout with feature flags, real-user monitoring, and error tracking from day one. We run a 48-hour war-room watch post-launch to catch and resolve any issues instantly.' },
      { icon: HeadphonesIcon, title: 'Maintain & Improve', duration: 'Ongoing', desc: 'Proactive dependency updates, security patching, and performance tuning. Monthly reports cover uptime, Core Web Vitals, and user analytics so you always know how your product is performing.' },
    ],
  ];

  const headerVariants = [
    {
      badge: 'Our Process',
      h2White: locationLabel ? `How we deliver projects in ${locationLabel}` : 'How we deliver projects',
      desc: `A proven five-phase methodology that turns your idea into a production-ready product${locationLabel ? ` for the ${locationLabel} market` : ''}—on time and on budget.`,
    },
    {
      badge: 'How We Work',
      h2White: locationLabel ? `${locationLabel} project delivery` : 'Project delivery',
      desc: `Transparent, agile, and results-driven. Every phase has clear deliverables, approval gates, and measurable outcomes${locationLabel ? ` tailored for ${locationLabel} businesses` : ''}.`,
    },
    {
      badge: 'Development Process',
      h2White: locationLabel ? `From brief to launch in ${locationLabel}` : 'From brief to launch',
      desc: `Five structured phases with full visibility at every step${locationLabel ? `. Built for ${locationLabel} companies` : ''}. No surprises, no scope creep, just reliable delivery.`,
    },
  ];

  const steps = stepSets[v];
  const header = headerVariants[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(16,185,129,0.04), transparent 70%)' }} />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>{header.badge}</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{header.h2White} </span>
            <span className="gradient-text">step by step</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{header.desc}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-teal-500/20 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  className={`relative lg:flex lg:items-center lg:gap-8 ${isLeft ? '' : 'lg:flex-row-reverse'} lg:mb-12`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Content card */}
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                      <div className={`flex items-start gap-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}>
                          <step.icon className="w-7 h-7 text-brand-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">{step.title}</h3>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">{step.duration}</span>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center number */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 items-center justify-center z-10 shadow-lg shadow-brand-500/20">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
