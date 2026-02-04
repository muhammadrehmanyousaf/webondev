'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Rocket, Users, CheckCircle2 } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// MOBILE APPS SECTION - Updated Design Language
// =============================================================================

const MobileAppsSection = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Native & Cross-Platform Excellence',
      description: 'We develop both native iOS/Android applications and cross-platform solutions using React Native and Flutter. Our approach ensures optimal performance, native feel, and consistent user experience across all platforms.',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Every app is designed with the user journey in mind. We implement intuitive navigation, smooth animations, and accessibility features that make your app enjoyable and easy to use for all users.',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'We optimize for speed, battery life, and network efficiency. Our apps load quickly, use minimal resources, and provide smooth interactions even on older devices or slow network connections.',
    }
  ];

  const techFeatures = [
    'React Native Development',
    'iOS & Android Native',
    'Flutter Cross-Platform',
    'Push Notification Systems',
    'In-App Analytics',
    'App Store Optimization'
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
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
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
                  Mobile is where your users are. We build apps that deliver exceptional experiences across iOS, Android, and hybrid platforms.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our apps are optimized for speed, battery efficiency, and offline capabilities—ensuring users stay engaged wherever they are.
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop"
                  alt="Mobile apps engineered for growth"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Static Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-brand-500 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Mobile-First</div>
                    <div className="text-white/70 text-xs">Growth-Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
              <span>Mobile Development</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Mobile apps engineered for </span>
              <span className="gradient-text">
                growth
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              We build native and cross-platform apps optimized for latency, accessibility, and adoption. From onboarding to retention, we rely on data to improve engagement, not guesswork.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our teams integrate analytics, experimentation, and privacy-friendly measurement to fuel continuous improvement.
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
        </div>

        <InlineCTA
          title="Ready to Launch Your App?"
          description="Let's build a mobile experience your users will love."
          buttonText="Start Building"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default MobileAppsSection;
