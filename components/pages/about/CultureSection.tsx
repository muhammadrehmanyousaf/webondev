'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Gamepad2, Plane, GraduationCap, Heart, Trophy, Sparkles, ArrowRight } from 'lucide-react';

const CultureSection = () => {
  const benefits = [
    {
      icon: Coffee,
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible hours and work-life balance',
      gradient: 'from-brand-400 to-teal-400'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Annual learning budget, conferences, and skill development programs',
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      gradient: 'from-cyan-400 to-brand-400'
    },
    {
      icon: Plane,
      title: 'Travel Opportunities',
      description: 'Client visits, team retreats, and international conferences',
      gradient: 'from-brand-400 to-emerald-400'
    },
    {
      icon: Trophy,
      title: 'Recognition Programs',
      description: 'Performance bonuses, employee of the month, and achievement awards',
      gradient: 'from-emerald-400 to-teal-400'
    },
    {
      icon: Gamepad2,
      title: 'Fun Activities',
      description: 'Team building events, game nights, and social gatherings',
      gradient: 'from-teal-400 to-brand-400'
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

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Life at Web On Dev</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Culture</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We believe that great work comes from great people in a great environment. Our culture is built on trust, innovation, and mutual respect.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Where Talent Thrives
            </h3>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                At Web On Dev, we've created an environment where creativity flourishes and innovation is encouraged. Our team members are not just employees – they're partners in our mission to deliver exceptional software solutions.
              </p>
              <p>
                We foster a culture of continuous learning, open communication, and mutual support. Whether you're working remotely or in our offices, you'll find a collaborative environment that values your contributions and supports your growth.
              </p>
            </div>

            {/* Culture Values */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">What We Value</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-400 to-teal-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Culture"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 rounded-xl p-4 border border-white/10 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-400">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits & Perks */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">Benefits & Perks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {benefit.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h3>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence. Reach out to us and become part of our growing family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-500/25"
                >
                  Join Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-brand-500/30 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureSection;
