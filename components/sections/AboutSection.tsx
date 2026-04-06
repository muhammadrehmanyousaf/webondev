'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Users,
  Award,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// DATA
// =============================================================================

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Delivering exceptional software solutions that transform businesses and drive measurable growth.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build long-term partnerships, not just products.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in code quality, design, and project delivery.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies to create solutions that stay ahead of the curve.',
  },
];

const capabilities = [
  'Custom Web Applications',
  'Mobile App Development',
  'Cloud Infrastructure & DevOps',
  'UI/UX Design & Branding',
  'SEO & Growth Marketing',
  'Ongoing Support & Maintenance',
];

// =============================================================================
// COMPONENT
// =============================================================================

const AboutSection = () => {
  return (
    <section className="relative py-12 sm:py-14 lg:py-20 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start mb-8 sm:mb-10 lg:mb-14">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              About Us
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
              Building digital
              <br />
              excellence{' '}
              <span className="gradient-text">since 2019</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6 max-w-lg">
              We are a full-service software development company specializing in creating powerful
              digital solutions that help businesses thrive. Our team of expert developers, designers,
              and strategists work together to deliver exceptional results.
            </p>

            {/* Capabilities as a clean list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-2.5 mb-4 sm:mb-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                  <span className="text-sm text-slate-300 font-medium">{cap}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Abstract visual / Stats card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative gradient-border rounded-2xl">
              <div className="relative rounded-2xl bg-[#060B18] p-5 sm:p-6 lg:p-10 overflow-hidden">
                {/* Background decorative number */}
                <span className="absolute -right-6 -top-8 text-[120px] sm:text-[150px] lg:text-[180px] font-black text-white/[0.015] leading-none select-none pointer-events-none">
                  5+
                </span>

                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20 blur-[80px]"
                  style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)' }}
                />

                {/* Years badge */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">5+</div>
                  <div className="text-brand-400 font-semibold text-sm sm:text-base lg:text-lg">Years of Experience</div>
                  <div className="text-slate-500 text-sm mt-1">Delivering world-class software solutions</div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-transparent mb-4 sm:mb-6" />

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { value: '150+', label: 'Projects' },
                    { value: '50+', label: 'Team Members' },
                    { value: '200+', label: 'Clients' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.1] to-transparent my-4 sm:my-6" />

                {/* Quote */}
                <blockquote className="text-slate-400 text-sm leading-relaxed italic">
                  &ldquo;We don&apos;t just build software — we engineer digital experiences that
                  drive real business outcomes.&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                Our core <span className="gradient-text">values</span>
              </h3>
              <p className="text-slate-400 max-w-lg text-sm sm:text-base">
                The principles that guide everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-[64px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <value.icon className="w-5 h-5 text-brand-400" />
                  </div>

                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2">
                    {value.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
