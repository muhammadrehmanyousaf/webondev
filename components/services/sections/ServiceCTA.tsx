'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  CheckCircle,
  Sparkles,
  Rocket
} from 'lucide-react';

interface ServiceCTAProps {
  data?: import('./index').ServiceData;
  // Main content
  headline?: string;
  subheadline?: string;
  description?: string;

  // Primary CTA
  primaryCtaText?: string;
  primaryCtaLink?: string;

  // Secondary CTA
  secondaryCtaText?: string;
  secondaryCtaLink?: string;

  // Trust points
  trustPoints?: string[];

  // Contact info
  phone?: string;
  email?: string;

  // Style variants
  variant?: 'gradient' | 'glass' | 'simple' | 'split';

  // Location context
  city?: string;
  serviceName?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = (props) => {
  const {
    data,
    headline: propHeadline = "Ready to Transform Your Business?",
    subheadline = "Let's build something amazing together",
    description = "Get a free consultation and project estimate. No commitment required.",
    primaryCtaText = "Start Your Project",
    primaryCtaLink = "/contact",
    secondaryCtaText = "Schedule a Call",
    secondaryCtaLink = "/schedule",
    trustPoints = [
      "Free consultation",
      "No hidden fees",
      "24-hour response",
      "100% satisfaction guarantee"
    ],
    phone = "+92-310-6803687",
    email = "webondev786@gmail.com",
    variant = 'gradient',
    city,
    serviceName: propServiceName,
  } = props;

  // Use data from ServiceData object if provided
  const headline = propHeadline;
  const serviceName = data?.name || propServiceName;
  const locationHeadline = city && serviceName
    ? `Ready for ${serviceName} in ${city}?`
    : headline;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background based on variant */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>
        </div>
      )}

      {variant === 'glass' && (
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>
      )}

      {variant === 'simple' && (
        <div className="absolute inset-0 bg-slate-950" />
      )}

      {variant === 'split' && (
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-950" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-emerald-600 to-teal-500" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient & Glass Variants */}
        {(variant === 'gradient' || variant === 'glass') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                variant === 'gradient'
                  ? 'bg-white/20 text-white'
                  : 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
              }`}
            >
              <Rocket className="w-4 h-4" />
              Let's Get Started
            </motion.span>

            {/* Headline */}
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              variant === 'gradient' ? 'text-white' : 'text-white'
            }`}>
              {locationHeadline}
            </h2>

            {/* Subheadline */}
            <p className={`text-xl md:text-2xl mb-4 ${
              variant === 'gradient' ? 'text-white/90' : 'text-emerald-400'
            }`}>
              {subheadline}
            </p>

            {/* Description */}
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${
              variant === 'gradient' ? 'text-white/80' : 'text-gray-400'
            }`}>
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href={primaryCtaLink}
                className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                  variant === 'gradient'
                    ? 'bg-white text-emerald-600 hover:bg-white/90 shadow-xl shadow-black/20'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl'
                }`}
              >
                {primaryCtaText}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={secondaryCtaLink}
                className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                  variant === 'gradient'
                    ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <Calendar className="w-5 h-5" />
                {secondaryCtaText}
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm ${
                    variant === 'gradient' ? 'text-white/90' : 'text-gray-400'
                  }`}
                >
                  <CheckCircle className={`w-5 h-5 ${
                    variant === 'gradient' ? 'text-white' : 'text-emerald-500'
                  }`} />
                  {point}
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className={`mt-12 pt-10 border-t flex flex-wrap items-center justify-center gap-8 ${
              variant === 'gradient' ? 'border-white/20' : 'border-slate-800'
            }`}>
              <a
                href={`tel:${phone}`}
                className={`flex items-center gap-3 hover:scale-105 transition-transform ${
                  variant === 'gradient' ? 'text-white' : 'text-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  variant === 'gradient' ? 'bg-white/20' : 'bg-emerald-500/20'
                }`}>
                  <Phone className={`w-5 h-5 ${
                    variant === 'gradient' ? 'text-white' : 'text-emerald-500'
                  }`} />
                </div>
                <div className="text-left">
                  <p className={`text-xs ${variant === 'gradient' ? 'text-white/70' : 'text-gray-500'}`}>
                    Call us
                  </p>
                  <p className="font-semibold">{phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className={`flex items-center gap-3 hover:scale-105 transition-transform ${
                  variant === 'gradient' ? 'text-white' : 'text-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  variant === 'gradient' ? 'bg-white/20' : 'bg-emerald-500/20'
                }`}>
                  <Mail className={`w-5 h-5 ${
                    variant === 'gradient' ? 'text-white' : 'text-emerald-500'
                  }`} />
                </div>
                <div className="text-left">
                  <p className={`text-xs ${variant === 'gradient' ? 'text-white/70' : 'text-gray-500'}`}>
                    Email us
                  </p>
                  <p className="font-semibold">{email}</p>
                </div>
              </a>

              <a
                href="https://wa.me/923106803687"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 hover:scale-105 transition-transform ${
                  variant === 'gradient' ? 'text-white' : 'text-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  variant === 'gradient' ? 'bg-white/20' : 'bg-emerald-500/20'
                }`}>
                  <MessageSquare className={`w-5 h-5 ${
                    variant === 'gradient' ? 'text-white' : 'text-emerald-500'
                  }`} />
                </div>
                <div className="text-left">
                  <p className={`text-xs ${variant === 'gradient' ? 'text-white/70' : 'text-gray-500'}`}>
                    WhatsApp
                  </p>
                  <p className="font-semibold">Chat Now</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}

        {/* Simple Variant */}
        {variant === 'simple' && (
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {locationHeadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-400 mb-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href={primaryCtaLink} className="btn-primary flex items-center gap-2">
                {primaryCtaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={secondaryCtaLink} className="btn-secondary flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {secondaryCtaText}
              </Link>
            </motion.div>
          </div>
        )}

        {/* Split Variant */}
        {variant === 'split' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Get Started Today
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {locationHeadline}
              </h2>

              <p className="text-lg text-gray-400 mb-8">
                {description}
              </p>

              {/* Trust points */}
              <ul className="space-y-3 mb-8">
                {trustPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
              <div className="relative p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {subheadline}
                </h3>

                <div className="space-y-4">
                  <Link
                    href={primaryCtaLink}
                    className="w-full py-4 px-6 rounded-xl bg-white text-emerald-600 font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-lg"
                  >
                    {primaryCtaText}
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href={secondaryCtaLink}
                    className="w-full py-4 px-6 rounded-xl bg-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/30 transition-all border border-white/30"
                  >
                    <Calendar className="w-5 h-5" />
                    {secondaryCtaText}
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 flex justify-center gap-6">
                  <a href={`tel:${phone}`} className="text-white/80 hover:text-white flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                  <a href={`mailto:${email}`} className="text-white/80 hover:text-white flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a href="https://wa.me/923106803687" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceCTA;
