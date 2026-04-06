'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Scale, CheckCircle2, BadgeCheck } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// INDUSTRY FIT SECTION - Content Variation Engine
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface IndustryFitSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const IndustryFitSection = ({ cityName, stateName, countryName }: IndustryFitSectionProps = {}) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 53) % 3 : 0;

  const featureDescriptions = [
    [
      'We understand the unique challenges and opportunities within your industry. From healthcare compliance and fintech security to e-commerce optimization, we tailor our solutions to meet industry-specific requirements.',
      'We build with compliance in mind from day one. Whether it\'s HIPAA for healthcare, PCI DSS for payments, or GDPR for data privacy, we ensure your digital solution meets all necessary requirements.',
      'Our solutions are designed to grow with your business. We implement scalable architectures, microservices, and cloud-native approaches that can handle increasing loads without compromising performance.',
    ],
    [
      'We pair engineers with domain analysts who speak your industry\'s language—whether that\'s HL7/FHIR for healthcare, FIX protocol for trading, or EDI for supply chain. The result is software that fits your workflows, not the other way around.',
      'Our security-first architecture includes encryption at rest and in transit, role-based access control, automated vulnerability scanning, and SOC 2 Type II readiness. We don\'t bolt on compliance—it\'s baked into the CI pipeline.',
      'We design for 10x your current traffic from day one. Horizontal auto-scaling, database sharding, and event-driven architectures mean your platform handles Black Friday surges and viral growth without breaking a sweat.',
    ],
    [
      'We\'ve shipped production software for hospitals, banks, logistics firms, and SaaS companies. Each engagement starts with a domain deep-dive so our engineers understand your regulatory landscape, data models, and user personas before writing code.',
      'From SOC 2 and ISO 27001 to PCI DSS Level 1 and HIPAA BAAs, we maintain a compliance playbook for every major standard. Audits become routine, not emergencies, because controls are documented and automated from the start.',
      'Our platform blueprints use battle-tested patterns: CQRS for complex domains, saga orchestration for distributed transactions, and blue-green deployments for zero-downtime releases. Your system stays reliable as requirements evolve.',
    ],
  ];

  const narrativeCards = [
    {
      p1: 'Every industry has unique challenges. We bring deep domain expertise to healthcare, fintech, e-commerce, and education sectors.',
      p2: 'Our solutions are built with compliance in mind—HIPAA, PCI DSS, GDPR, and FERPA requirements are integrated from day one.',
    },
    {
      p1: 'We don\'t build generic software and hope it fits your sector. We start by mapping your regulatory, operational, and competitive landscape before writing a single specification.',
      p2: 'The result: purpose-built platforms that pass audits, delight users, and give you a defensible technology advantage.',
    },
    {
      p1: 'Industry expertise isn\'t optional—it\'s the difference between a product that launches and one that actually gets adopted. We invest the time to learn your domain deeply.',
      p2: 'From integration with legacy EHR systems to real-time fraud detection engines, we build what your industry demands—no shortcuts.',
    },
  ];

  const introParagraphs = [
    {
      p1: `${locationLabel ? `For ${locationLabel} businesses, we` : 'We'} tune architecture, data, and UX to your industry's realities—whether you're in SaaS, fintech, healthcare, retail, or education. Expect compliance-aware data flows, localization, and payments that scale globally.`,
      p2: `Our cross-functional teams prioritize maintainability and clear ownership so outcomes${locationLabel ? ` for ${locationLabel} clients` : ''} are reliable, repeatable, and measurable.`,
    },
    {
      p1: `${locationLabel ? `Across ${locationLabel}, industries from healthcare to fintech need` : 'Industries need'} software that doesn't just work—it complies, integrates, and scales. We deliver platforms that pass regulatory audits and outperform competitors${locationLabel ? ` in the ${locationLabel} market` : ''}.`,
      p2: `Every project includes a compliance matrix, integration roadmap, and scalability plan tailored to your sector's requirements${locationLabel ? ` and ${locationLabel}'s regulatory environment` : ''}.`,
    },
    {
      p1: `${locationLabel ? `${locationLabel} enterprises and startups trust us to` : 'We'} build software that respects industry boundaries—data residency for fintech, audit trails for healthcare, and real-time inventory for retail. No generic templates, just purpose-built platforms.`,
      p2: `We assign industry-specialized engineers to your project so domain knowledge accelerates delivery${locationLabel ? ` for your ${locationLabel} team` : ''}, not slows it down.`,
    },
  ];

  const techFeatureSets = [
    ['Healthcare Compliance (HIPAA)', 'Financial Security (PCI DSS)', 'Data Privacy (GDPR)', 'E-commerce Optimization', 'Educational Technology', 'Enterprise Integration'],
    ['SOC 2 Type II Readiness', 'ISO 27001 Controls', 'HL7/FHIR Integration', 'Real-Time Fraud Detection', 'Supply Chain (EDI)', 'Multi-Tenant SaaS Architecture'],
    ['FERPA & COPPA Compliance', 'Payment Gateway Abstraction', 'EHR/EMR Integration', 'Warehouse Management Systems', 'Identity & Access Management', 'Event-Driven Microservices'],
  ];

  const features = [
    { icon: Building2, title: 'Sector-Specific Expertise', description: featureDescriptions[v][0] },
    { icon: Shield, title: 'Compliance & Security', description: featureDescriptions[v][1] },
    { icon: Scale, title: 'Scalable Architecture', description: featureDescriptions[v][2] },
  ];

  const narrative = narrativeCards[v];
  const intro = introParagraphs[v];
  const complianceFeatures = techFeatureSets[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.06), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Industry Solutions</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">{locationLabel ? `${locationLabel} industry-fit` : 'Industry-fit'} </span>
              <span className="gradient-text">delivery</span>
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
              {complianceFeatures.map((feature, index) => (
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" alt={locationLabel ? `Industry-tailored software solutions for ${locationLabel}` : 'Industry-fit delivery'} className="w-full h-72 object-cover rounded-xl" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Industry-Tailored</div>
                    <div className="text-white/70 text-xs">Compliance-Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <InlineCTA
          title={locationLabel ? `Need Industry-Specific Solutions in ${locationLabel}?` : 'Need Industry-Specific Solutions?'}
          description={locationLabel ? `Let's discuss your ${locationLabel} sector's unique requirements and compliance needs.` : "Let's discuss your sector's unique requirements and compliance needs."}
          buttonText="Get Expert Advice"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default IndustryFitSection;
