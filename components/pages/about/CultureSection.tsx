'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Gamepad2, Plane, GraduationCap, Heart, Trophy, Sparkles, ArrowRight, Users, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CultureSection = () => {
  const benefits = [
    {
      icon: Coffee,
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible hours and work-life balance',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Annual learning budget, conferences, and skill development programs',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
    },
    {
      icon: Plane,
      title: 'Travel Opportunities',
      description: 'Client visits, team retreats, and international conferences',
    },
    {
      icon: Trophy,
      title: 'Recognition Programs',
      description: 'Performance bonuses, employee of the month, and achievement awards',
    },
    {
      icon: Gamepad2,
      title: 'Fun Activities',
      description: 'Team building events, game nights, and social gatherings',
    }
  ];

  const values = [
    'Innovation & Creativity',
    'Work-Life Balance',
    'Diversity & Inclusion',
    'Continuous Growth',
    'Team Collaboration',
    'Client Success Focus'
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: TrendingUp, value: '98%', label: 'Employee Satisfaction' },
    { icon: Globe, value: '12+', label: 'Countries Represented' },
    { icon: Trophy, value: '4.9', label: 'Glassdoor Rating' },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#030712] overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 30% at 70% 50%, rgba(6,182,212,0.04), transparent 70%)',
        }}
      />

      {/* Grain texture */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="gradient-border-subtle inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-slate-300 text-sm font-medium">Life at Web On Dev</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Our{' '}
            <span className="gradient-text">Culture</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We believe that great work comes from great people in a great environment. Our culture is built on trust, innovation, and mutual respect.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Where Talent Thrives
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              <p>
                At Web On Dev, we've created an environment where creativity flourishes and innovation is encouraged. Our team members are not just employees – they're partners in our mission to deliver exceptional software solutions.
              </p>
              <p>
                We foster a culture of continuous learning, open communication, and mutual support. Whether you're working remotely or in our offices, you'll find a collaborative environment that values your contributions and supports your growth.
              </p>
            </div>

            {/* Culture Values */}
            <div className="mt-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">What We Value</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    <span className="text-slate-300 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Card (replacing image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg font-semibold text-white mb-6">Our Team at a Glance</h4>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 sm:p-5"
                  >
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                      }}
                    >
                      <stat.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits & Perks */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-white text-center mb-10 sm:mb-12"
          >
            Benefits & Perks
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 rounded-xl sm:rounded-2xl p-5 sm:p-6"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))',
                  }}
                >
                  <benefit.icon className="w-5 h-5 text-brand-400" />
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h4>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 sm:mt-20"
        >
          <div
            className="border border-white/[0.06] rounded-2xl p-8 sm:p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)',
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready to Join Our Team?
            </h3>
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence. Reach out to us and become part of our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              >
                <Link href="/contact">
                  Join Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/about">
                  Our Company Culture
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
