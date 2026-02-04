'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Scale, CheckCircle2, BadgeCheck } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// INDUSTRY FIT SECTION - Updated Design Language
// =============================================================================

const IndustryFitSection = () => {
  const features = [
    {
      icon: Building2,
      title: 'Sector-Specific Expertise',
      description: 'We understand the unique challenges and opportunities within your industry. From healthcare compliance and fintech security to e-commerce optimization, we tailor our solutions to meet industry-specific requirements.',
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'We build with compliance in mind from day one. Whether it\'s HIPAA for healthcare, PCI DSS for payments, or GDPR for data privacy, we ensure your digital solution meets all necessary requirements.',
    },
    {
      icon: Scale,
      title: 'Scalable Architecture',
      description: 'Our solutions are designed to grow with your business. We implement scalable architectures, microservices, and cloud-native approaches that can handle increasing loads without compromising performance.',
    }
  ];

  const complianceFeatures = [
    'Healthcare Compliance (HIPAA)',
    'Financial Security (PCI DSS)',
    'Data Privacy (GDPR)',
    'E-commerce Optimization',
    'Educational Technology',
    'Enterprise Integration'
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            className="order-2 lg:order-1"
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
              <span>Industry Solutions</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Industry-fit </span>
              <span className="gradient-text">
                delivery
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              We tune architecture, data, and UX to your industry&apos;s realities—whether you&apos;re in SaaS, fintech, healthcare, retail, or education. Expect compliance-aware data flows, localization, and payments that scale globally.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our cross-functional teams prioritize maintainability and clear ownership so outcomes are reliable, repeatable, and measurable.
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

            {/* Compliance Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {complianceFeatures.map((feature, index) => (
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
            className="order-1 lg:order-2 relative"
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
                  Every industry has unique challenges. We bring deep domain expertise to healthcare, fintech, e-commerce, and education sectors.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our solutions are built with compliance in mind—HIPAA, PCI DSS, GDPR, and FERPA requirements are integrated from day one.
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Industry-fit delivery"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Static Badge */}
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
          title="Need Industry-Specific Solutions?"
          description="Let's discuss your sector's unique requirements and compliance needs."
          buttonText="Get Expert Advice"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default IndustryFitSection;
