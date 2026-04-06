'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cloud, Smartphone, BarChart3, Shield } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// TECH STACK SECTION - Content Variation Engine (seed: 79)
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface TechStackSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const TechStackSection = ({ cityName, stateName, countryName }: TechStackSectionProps = {}) => {
  const locationLabel = cityName || stateName || countryName || '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 79) % 3 : 0;

  const categorySets = [
    [
      { icon: Layers, title: 'Frontend', techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { icon: Database, title: 'Backend & Data', techs: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Prisma ORM'] },
      { icon: Cloud, title: 'Cloud & DevOps', techs: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Terraform'] },
      { icon: Smartphone, title: 'Mobile', techs: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin'] },
      { icon: BarChart3, title: 'Analytics & SEO', techs: ['Google Analytics 4', 'Search Console', 'Lighthouse CI', 'Schema.org', 'Hotjar'] },
      { icon: Shield, title: 'Security', techs: ['Auth.js', 'OAuth 2.0', 'JWT', 'OWASP Top 10', 'Snyk'] },
    ],
    [
      { icon: Layers, title: 'Frontend', techs: ['React 19', 'Next.js App Router', 'Vue 3', 'Astro', 'Shadcn UI'] },
      { icon: Database, title: 'Backend & Data', techs: ['Express.js', 'FastAPI', 'MongoDB', 'Elasticsearch', 'GraphQL'] },
      { icon: Cloud, title: 'Cloud & DevOps', techs: ['Google Cloud', 'Cloudflare', 'Kubernetes', 'ArgoCD', 'Pulumi'] },
      { icon: Smartphone, title: 'Mobile', techs: ['Flutter', 'Kotlin Multiplatform', 'SwiftUI', 'Capacitor', 'Firebase'] },
      { icon: BarChart3, title: 'Analytics & SEO', techs: ['Mixpanel', 'Amplitude', 'Ahrefs', 'Chromatic', 'Sentry'] },
      { icon: Shield, title: 'Security', techs: ['Clerk', 'Supabase Auth', 'RBAC', 'SOC 2 Tooling', 'Dependabot'] },
    ],
    [
      { icon: Layers, title: 'Frontend', techs: ['Next.js 15', 'Remix', 'TypeScript', 'Radix UI', 'CSS Modules'] },
      { icon: Database, title: 'Backend & Data', techs: ['Fastify', 'Django', 'PostgreSQL', 'Drizzle ORM', 'RabbitMQ'] },
      { icon: Cloud, title: 'Cloud & DevOps', techs: ['AWS Lambda', 'Azure', 'Docker Compose', 'CircleCI', 'Ansible'] },
      { icon: Smartphone, title: 'Mobile', techs: ['React Native', 'Ionic', 'Jetpack Compose', 'App Clips', 'OneSignal'] },
      { icon: BarChart3, title: 'Analytics & SEO', techs: ['Plausible', 'PostHog', 'Screaming Frog', 'Core Web Vitals', 'BrowserStack'] },
      { icon: Shield, title: 'Security', techs: ['NextAuth', 'Vault', 'CSRF Tokens', 'CSP Headers', 'Pen Testing'] },
    ],
  ];

  const headerVariants = [
    {
      badge: 'Technology Stack',
      h2White: locationLabel ? `Technologies powering ${locationLabel}` : 'Technologies powering',
      h2Gradient: 'your product',
      desc: `We choose tools based on your project's requirements—not hype cycles. Every technology in our stack is battle-tested across 500+ production deployments${locationLabel ? `, including projects in ${locationLabel}` : ''}.`,
    },
    {
      badge: 'Our Stack',
      h2White: locationLabel ? `${locationLabel} projects built with` : 'Projects built with',
      h2Gradient: 'modern tools',
      desc: `Performance, maintainability, and developer experience drive every technology choice. Here is the production-grade stack we use to deliver results${locationLabel ? ` for ${locationLabel} businesses` : ''}.`,
    },
    {
      badge: 'Tech Expertise',
      h2White: locationLabel ? `Engineering excellence for ${locationLabel}` : 'Engineering excellence',
      h2Gradient: 'at every layer',
      desc: `From frontend frameworks to cloud infrastructure, we assemble the right stack for your problem space${locationLabel ? ` and the ${locationLabel} market` : ''}. No one-size-fits-all templates.`,
    },
  ];

  const categories = categorySets[v];
  const header = headerVariants[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 70% 50%, rgba(6,182,212,0.05), transparent 70%)' }} />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.06))' }}>
                  <category.icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-brand-400 transition-colors">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-brand-500/30 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <InlineCTA
          title={locationLabel ? `Need a Specific Tech Stack for Your ${locationLabel} Project?` : 'Need a Specific Tech Stack?'}
          description={locationLabel ? `We tailor our technology choices to your ${locationLabel} project requirements. Let's discuss your stack.` : "We tailor our technology choices to your project requirements. Let's discuss your stack."}
          buttonText="Discuss Your Tech Needs"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
