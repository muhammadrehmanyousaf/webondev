'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Award, Users, BadgeCheck, Globe, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// CLIENT LOGOS DATA
// =============================================================================

const clientLogos = [
  { name: 'TechCorp', initial: 'T' },
  { name: 'Innovate Inc', initial: 'I' },
  { name: 'StartupXYZ', initial: 'S' },
  { name: 'Global Solutions', initial: 'G' },
  { name: 'NextGen', initial: 'N' },
  { name: 'DigiWave', initial: 'D' },
  { name: 'CloudFirst', initial: 'C' },
  { name: 'DataDriven', initial: 'D' },
  { name: 'ScaleUp', initial: 'S' },
  { name: 'TechFlow', initial: 'T' },
  { name: 'Innovators', initial: 'I' },
  { name: 'FutureLab', initial: 'F' },
];

// =============================================================================
// CERTIFICATION BADGES
// =============================================================================

const certifications = [
  { name: 'Google Partner', icon: BadgeCheck, color: 'from-blue-500 to-blue-600' },
  { name: 'AWS Certified', icon: Shield, color: 'from-orange-500 to-orange-600' },
  { name: 'ISO 27001', icon: Award, color: 'from-brand-500 to-brand-600' },
  { name: 'Shopify Plus', icon: Zap, color: 'from-green-500 to-green-600' },
];

// =============================================================================
// LOGO CAROUSEL COMPONENT
// =============================================================================

const LogoCarousel = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling logos */}
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: [0, -1440] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shrink-0 glass-card px-5 py-3 rounded-xl hover:shadow-glass-hover transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-600/20 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-lg">
              {logo.initial}
            </div>
            <span className="text-muted-foreground font-medium whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// =============================================================================
// TRUST METRICS
// =============================================================================

const TrustMetric = ({
  icon: Icon,
  value,
  label,
  delay,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex items-center gap-4 p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-2xl font-bold gradient-text">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const TrustSignalsBar = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.fromTo(
        '.trust-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-b from-slate-950 to-background overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="trust-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-4">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their digital presence with our solutions
          </p>
        </motion.div>

        {/* Client Logo Carousel */}
        <div className="mb-12">
          <LogoCarousel />
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <TrustMetric icon={Users} value="200+" label="Happy Clients" delay={0} />
          <TrustMetric icon={Globe} value="50+" label="Countries Served" delay={0.1} />
          <TrustMetric icon={Award} value="15+" label="Industry Awards" delay={0.2} />
          <TrustMetric icon={Shield} value="99.9%" label="Uptime SLA" delay={0.3} />
        </div>

        {/* Certification Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:shadow-glass-hover transition-all duration-300 cursor-default group"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <cert.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-foreground">{cert.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Social Proof Text */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Featured in{' '}
          <span className="text-foreground font-medium">Forbes</span>,{' '}
          <span className="text-foreground font-medium">TechCrunch</span>,{' '}
          <span className="text-foreground font-medium">Product Hunt</span>, and{' '}
          <span className="text-foreground font-medium">Inc. Magazine</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TrustSignalsBar;
