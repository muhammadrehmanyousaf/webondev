'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Rocket, Users, CheckCircle2, Apple, Sparkles, Gauge, Bell } from 'lucide-react';

// =============================================================================
// MOBILE APPS SECTION - Premium Emerald Green Design
// =============================================================================

const MobileAppsSection = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Native & Cross-Platform Excellence',
      description: 'We develop both native iOS/Android applications and cross-platform solutions using React Native and Flutter. Our approach ensures optimal performance, native feel, and consistent user experience across all platforms.',
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Every app is designed with the user journey in mind. We implement intuitive navigation, smooth animations, and accessibility features that make your app enjoyable and easy to use for all users.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'We optimize for speed, battery life, and network efficiency. Our apps load quickly, use minimal resources, and provide smooth interactions even on older devices or slow network connections.',
      gradient: 'from-cyan-500 to-blue-500'
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

  const platforms = [
    { name: 'iOS', icon: Apple, gradient: 'from-slate-600 to-slate-700' },
    { name: 'Android', icon: Smartphone, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Cross-Platform', icon: Cpu, gradient: 'from-brand-500 to-teal-500' }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-brand-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
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
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-brand-500 to-cyan-500 rounded-2xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop"
                  alt="Mobile apps engineered for growth"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-brand-500 rounded-xl p-4 shadow-lg shadow-teal-500/25"
                whileHover={{ scale: 1.1, rotate: -5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white text-sm">Mobile-First</div>
                    <div className="text-white/70 text-xs">Growth-Driven</div>
                  </div>
                </div>
              </motion.div>
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile Development</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Mobile apps engineered for </span>
              <span className="bg-gradient-to-r from-teal-400 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
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
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-brand-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
