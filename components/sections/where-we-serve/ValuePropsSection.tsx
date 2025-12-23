'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, CheckCircle2, Sparkles } from 'lucide-react';

// =============================================================================
// VALUE PROPS SECTION - Premium Emerald Green Design
// =============================================================================

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: Globe,
      title: 'Local + Global',
      description: 'We pair local market fluency with repeatable delivery systems. Expect content, UX, and analytics that reflect your customers\' language, devices, and expectations while maintaining world-class engineering standards.',
      gradient: 'from-brand-500 to-teal-500',
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
      gradient: 'from-teal-500 to-cyan-500',
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
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'Threat modeling & assessment',
        'Secure CI/CD pipelines',
        'Environment-specific controls'
      ]
    }
  ];

  const stats = [
    { value: '100%', label: 'Code Review', gradient: 'from-brand-400 to-teal-400' },
    { value: '99.9%', label: 'Uptime Guarantee', gradient: 'from-teal-400 to-cyan-400' },
    { value: '24/7', label: 'Support Available', gradient: 'from-cyan-400 to-brand-400' }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${prop.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${prop.gradient} rounded-xl mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <prop.icon className="w-8 h-8 text-white" />
                </motion.div>

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
                      <div className={`w-2 h-2 bg-gradient-to-r ${prop.gradient} rounded-full`} />
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
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-10" />

          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-white/10">
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
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
