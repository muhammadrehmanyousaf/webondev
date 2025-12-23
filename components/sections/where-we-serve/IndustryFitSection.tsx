'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Scale, Briefcase, CheckCircle2, Heart, GraduationCap, ShoppingCart, Sparkles, BadgeCheck } from 'lucide-react';

// =============================================================================
// INDUSTRY FIT SECTION - Premium Emerald Green Design
// =============================================================================

const IndustryFitSection = () => {
  const features = [
    {
      icon: Building2,
      title: 'Sector-Specific Expertise',
      description: 'We understand the unique challenges and opportunities within your industry. From healthcare compliance and fintech security to e-commerce optimization, we tailor our solutions to meet industry-specific requirements.',
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'We build with compliance in mind from day one. Whether it\'s HIPAA for healthcare, PCI DSS for payments, or GDPR for data privacy, we ensure your digital solution meets all necessary requirements.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Scale,
      title: 'Scalable Architecture',
      description: 'Our solutions are designed to grow with your business. We implement scalable architectures, microservices, and cloud-native approaches that can handle increasing loads without compromising performance.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const industries = [
    { icon: Heart, name: 'Healthcare', compliance: 'HIPAA', gradient: 'from-red-500 to-rose-500' },
    { icon: Briefcase, name: 'Fintech', compliance: 'PCI DSS', gradient: 'from-brand-500 to-teal-500' },
    { icon: ShoppingCart, name: 'E-commerce', compliance: 'PCI', gradient: 'from-amber-500 to-orange-500' },
    { icon: GraduationCap, name: 'Education', compliance: 'FERPA', gradient: 'from-blue-500 to-indigo-500' }
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
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-4 h-4" />
              <span>Industry Solutions</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Industry-fit </span>
              <span className="bg-gradient-to-r from-cyan-400 via-brand-400 to-teal-400 bg-clip-text text-transparent">
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
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
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500 to-brand-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-brand-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
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
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-brand-500 to-teal-500 rounded-2xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Industry-fit delivery"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-brand-500 rounded-xl p-4 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Industry-Tailored</div>
                    <div className="text-white/70 text-xs">Compliance-Ready</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFitSection;
