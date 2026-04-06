'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, CheckCircle2 } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// VALUE PROPS SECTION - Updated Design Language
// =============================================================================

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: Globe,
      title: 'Local + Global',
      description: 'We pair local market fluency with repeatable delivery systems. Expect content, UX, and analytics that reflect your customers\' language, devices, and expectations while maintaining world-class engineering standards.',
      features: [
        'Regional market expertise',
        'Global delivery standards',
        'Cultural adaptation'
      ]
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Core Web Vitals, schema.org structured data, and clean IA that drives discoverability and intent matching across search engines. We optimize for both user experience and search visibility.',
      features: [
        'Core Web Vitals optimization',
        'Structured data implementation',
        'Search intent optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Proactive security reviews, threat modeling, and hardened CI/CD pipelines with environment-specific controls. We build security into every layer of your application.',
      features: [
        'Threat modeling & assessment',
        'Secure CI/CD pipelines',
        'Environment-specific controls'
      ]
    }
  ];

  const stats = [
    { value: '100%', label: 'Code Review' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="gradient-text">
              Us
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We combine global expertise with local market understanding to deliver exceptional results
            that drive your business forward.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative bg-white/[0.02] rounded-2xl p-8 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-500 h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                >
                  <prop.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {prop.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {prop.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-400 rounded-full" />
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/[0.06]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-brand-400" />
              <span className="text-brand-400 font-semibold">Quality Guarantee</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">
              Comprehensive Quality Assurance
            </h3>
            <p className="text-slate-300 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
              Every project undergoes rigorous testing, code reviews, and quality checks to ensure your digital solution
              meets the highest standards of performance, security, and user experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <InlineCTA
          title="Experience the Difference"
          description="See why 200+ businesses trust us with their digital solutions."
          buttonText="Talk to Our Team"
        />
      </div>
    </section>
  );
};

export default ValuePropsSection;
