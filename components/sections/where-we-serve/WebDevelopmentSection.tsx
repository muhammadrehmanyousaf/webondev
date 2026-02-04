'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target, CheckCircle2, Search } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// WEB DEVELOPMENT SECTION - Updated Design Language
// =============================================================================

const WebDevelopmentSection = () => {
  const features = [
    {
      icon: Search,
      title: 'SEO-First Architecture',
      description: 'We design websites with search engines in mind from the ground up. Our development process incorporates semantic HTML, structured data markup, and clean URL structures that help search engines understand and rank your content effectively.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed is crucial for both user experience and search rankings. We optimize for Core Web Vitals, implement lazy loading, compress assets, and use modern build tools to ensure your website loads lightning-fast.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      description: 'Every design element is crafted to guide users toward conversion. We implement clear call-to-actions, intuitive navigation, and persuasive content layouts that turn visitors into customers.',
    }
  ];

  const techFeatures = [
    'Semantic HTML Structure',
    'Structured Data Markup',
    'Core Web Vitals Optimization',
    'Mobile-First Responsive Design',
    'Internationalization (i18n)',
    'Analytics Integration'
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
              <span>Web Development</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Web development built to </span>
              <span className="gradient-text">
                rank
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              We deliver SEO-first websites that load fast, scale globally, and meet Core Web Vitals. Clean information architecture, structured data, and intent-led content ensure your pages are discoverable and conversion-focused from day one.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Every build includes technical SEO, internationalization, and analytics for decision-making—no bolt-ons required.
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

            {/* Tech Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {techFeatures.map((feature, index) => (
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
                  Your website is your most important digital asset. We build sites that not only look stunning but also rank high and convert visitors into customers.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Every project includes Core Web Vitals optimization, semantic HTML, and structured data markup for maximum search visibility.
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
                  alt="High-performance web development"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Static Badge */}
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
          title="Need a High-Performance Website?"
          description="Let's build a site that ranks, converts, and scales with your business."
          buttonText="Discuss Your Project"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
