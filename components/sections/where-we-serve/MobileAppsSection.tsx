'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Rocket, Users, CheckCircle2 } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// MOBILE APPS SECTION - Content Variation Engine
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface MobileAppsSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const MobileAppsSection = ({ cityName, stateName, countryName }: MobileAppsSectionProps = {}) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 43) % 3 : 0;

  const featureDescriptions = [
    [
      'We develop both native iOS/Android applications and cross-platform solutions using React Native and Flutter. Our approach ensures optimal performance, native feel, and consistent user experience across all platforms.',
      'Every app is designed with the user journey in mind. We implement intuitive navigation, smooth animations, and accessibility features that make your app enjoyable and easy to use for all users.',
      'We optimize for speed, battery life, and network efficiency. Our apps load quickly, use minimal resources, and provide smooth interactions even on older devices or slow network connections.',
    ],
    [
      'We select the right architecture for your use case—SwiftUI for iOS-first experiences, Kotlin Multiplatform for shared business logic, or Flutter for pixel-perfect cross-platform UIs—so you get native performance without duplicate codebases.',
      'Our UX process starts with user research, not wireframes. We conduct task analysis, build interactive prototypes, and validate with real users before writing a single line of production code—reducing churn and boosting app store ratings.',
      'App size, startup time, and frame rate are tracked in CI. We lazy-load screens, prefetch data intelligently, and cache assets locally so your app feels instant—even on 3G networks or budget devices.',
    ],
    [
      'From push notifications and in-app messaging to biometric auth and offline sync, we build feature-rich mobile experiences that keep users engaged. Our modular architecture lets you iterate rapidly without full app store resubmissions.',
      'We design for the hand, not the screen. Thumb-zone mapping, gesture shortcuts, and haptic feedback create tactile experiences that feel intuitive from the first launch. Our usability testing catches friction before it reaches your users.',
      'Our performance tooling monitors cold start time, memory allocation, and battery drain in production. We set budgets, alert on regressions, and ship optimizations automatically—so your app stays fast as your codebase grows.',
    ],
  ];

  const narrativeCards = [
    {
      p1: 'Mobile is where your users are. We build apps that deliver exceptional experiences across iOS, Android, and hybrid platforms.',
      p2: 'Our apps are optimized for speed, battery efficiency, and offline capabilities—ensuring users stay engaged wherever they are.',
    },
    {
      p1: 'Your app is your brand in your users\' pockets. We craft mobile experiences that feel native, load instantly, and drive daily engagement.',
      p2: 'From onboarding flows to retention hooks, every screen is informed by behavioral data and designed to reduce friction.',
    },
    {
      p1: '80% of digital time is spent in mobile apps. We build the ones users keep on their home screen—fast, reliable, and genuinely useful.',
      p2: 'Post-launch, we monitor crash rates, session length, and funnel drop-offs, shipping improvements every two-week sprint cycle.',
    },
  ];

  const introParagraphs = [
    {
      p1: `${locationLabel ? `For ${locationLabel} businesses, we` : 'We'} build native and cross-platform apps optimized for latency, accessibility, and adoption. From onboarding to retention, we rely on data to improve engagement, not guesswork.`,
      p2: `Our teams integrate analytics, experimentation, and privacy-friendly measurement to fuel continuous improvement${locationLabel ? ` for your ${locationLabel} users` : ''}.`,
    },
    {
      p1: `${locationLabel ? `${locationLabel} startups and enterprises choose us to` : 'We'} deliver mobile apps that compete with the best in the App Store and Google Play. Our development process covers everything from concept validation to App Store Optimization${locationLabel ? ` for the ${locationLabel} market` : ''}.`,
      p2: `We combine native platform expertise with cross-platform efficiency, so you launch faster without sacrificing the experience ${locationLabel ? `${locationLabel} ` : ''}users expect.`,
    },
    {
      p1: `${locationLabel ? `Mobile users in ${locationLabel} demand` : 'Users demand'} apps that open in under a second, work offline, and never crash. We engineer for all three—plus deep linking, push notifications, and seamless payment flows.`,
      p2: `Our QA process includes automated UI testing, real-device farms, and staged rollouts to catch issues before they reach ${locationLabel ? `your ${locationLabel} ` : ''}users.`,
    },
  ];

  const techFeatureSets = [
    ['React Native Development', 'iOS & Android Native', 'Flutter Cross-Platform', 'Push Notification Systems', 'In-App Analytics', 'App Store Optimization'],
    ['Swift & SwiftUI', 'Kotlin & Jetpack Compose', 'Offline-First Architecture', 'Biometric Authentication', 'CI/CD for Mobile', 'Crash Reporting & Monitoring'],
    ['Expo & React Native', 'Firebase Integration', 'Deep Linking & Universal Links', 'In-App Purchases & Subscriptions', 'Real-Device QA Testing', 'Staged Rollout Deployment'],
  ];

  const features = [
    { icon: Cpu, title: 'Native & Cross-Platform Excellence', description: featureDescriptions[v][0] },
    { icon: Users, title: 'User-Centric Design', description: featureDescriptions[v][1] },
    { icon: Rocket, title: 'Performance Optimization', description: featureDescriptions[v][2] },
  ];

  const narrative = narrativeCards[v];
  const intro = introParagraphs[v];
  const techFeatures = techFeatureSets[v];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.06), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div className="relative mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">{narrative.p1}</p>
                <p className="text-slate-400 leading-relaxed">{narrative.p2}</p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="relative bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06]">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop" alt={locationLabel ? `Mobile app development for ${locationLabel} businesses` : 'Mobile apps engineered for growth'} className="w-full h-72 object-cover rounded-xl" loading="lazy" />
              </div>
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

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span>Mobile Development</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">{locationLabel ? `${locationLabel} mobile apps` : 'Mobile apps'} engineered for </span>
              <span className="gradient-text">growth</span>
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
              {techFeatures.map((feature, index) => (
                <motion.div key={index} className="flex items-center gap-3 group" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + index * 0.05 }}>
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <InlineCTA
          title={locationLabel ? `Ready to Launch Your ${locationLabel} App?` : 'Ready to Launch Your App?'}
          description={locationLabel ? `Let's build a mobile experience ${locationLabel} users will love.` : "Let's build a mobile experience your users will love."}
          buttonText="Start Building"
          variant="compact"
        />
      </div>
    </section>
  );
};

export default MobileAppsSection;
