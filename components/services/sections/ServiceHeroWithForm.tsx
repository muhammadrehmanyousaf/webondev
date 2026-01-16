'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Sparkles,
  Play
} from 'lucide-react';
import { ServiceData } from './index';

interface ServiceHeroProps {
  // Accept full service data object
  data?: ServiceData;

  // Or individual props (for flexibility)
  headline?: string;
  subheadline?: string;
  description?: string;

  // Trust signals
  rating?: number;
  reviewCount?: number;
  projectsCompleted?: number;
  yearsExperience?: number;

  // Visual
  accentColor?: string;
  backgroundPattern?: 'dots' | 'grid' | 'mesh' | 'none';

  // Location context (for Geo SEO)
  city?: string;
  state?: string;
  country?: string;

  // CTA
  primaryCTA?: string;
  secondaryCTA?: string;

  // Features list
  keyFeatures?: string[];

  // Badges
  badges?: string[];
}

const ServiceHeroWithForm: React.FC<ServiceHeroProps> = (props) => {
  // Extract from data prop or use individual props
  const {
    data,
    headline: propHeadline,
    subheadline: propSubheadline,
    description: propDescription,
    rating = 4.9,
    reviewCount = 250,
    projectsCompleted = 500,
    yearsExperience = 9,
    accentColor = 'emerald',
    backgroundPattern = 'mesh',
    city,
    state,
    country,
    primaryCTA = 'Get Free Consultation',
    secondaryCTA = 'View Our Work',
    keyFeatures: propKeyFeatures,
    badges: propBadges,
  } = props;

  // Use data from ServiceData object if provided, otherwise use individual props
  const headline = data?.hero?.headline || propHeadline || '';
  const subheadline = data?.hero?.subheadline || propSubheadline || '';
  const description = data?.hero?.description || propDescription || '';
  const keyFeatures = data?.hero?.keyFeatures || propKeyFeatures || [];
  const badges = data?.hero?.badges || propBadges || ['Top Rated', 'Fast Delivery', '24/7 Support'];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            service: data?.name || propHeadline || 'Service Inquiry',
            source: 'Service Hero Form',
          },
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Failed to submit request.');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const locationString = [city, state, country].filter(Boolean).join(', ');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Mesh Gradient */}
        {backgroundPattern === 'mesh' && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>
        )}

        {/* Grid Pattern */}
        {backgroundPattern === 'grid' && (
          <div className="absolute inset-0 grid-pattern opacity-20" />
        )}

        {/* Dot Pattern */}
        {backgroundPattern === 'dots' && (
          <div className="absolute inset-0 dot-pattern opacity-20" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                {headline}
                {locationString && (
                  <span className="block text-emerald-400 mt-2">
                    in {locationString}
                  </span>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-emerald-400 font-medium"
              >
                {subheadline}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>

            {/* Key Features */}
            {keyFeatures.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">{rating}</span>
                <span className="text-gray-400">({reviewCount}+ reviews)</span>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-700" />

              {/* Projects */}
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-emerald-500" />
                <span><strong className="text-white">{projectsCompleted}+</strong> Projects</span>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-700" />

              {/* Experience */}
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span><strong className="text-white">{yearsExperience}+</strong> Years</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 lg:hidden"
            >
              <button className="btn-primary flex items-center gap-2">
                {primaryCTA}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play className="w-5 h-5" />
                {secondaryCTA}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

            {/* Form Card */}
            <div className="relative glass-card bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              {!isSubmitted ? (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Get Your Free Quote
                    </h2>
                    <p className="text-gray-400">
                      No commitment required. Response within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          {primaryCTA}
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    {submitError && (
                      <p className="text-sm text-red-400 text-center mb-4">
                        {submitError}
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span>100% Secure</span>
                      </div>
                      <div className="w-px h-4 bg-gray-600" />
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>24h Response</span>
                      </div>
                      <div className="w-px h-4 bg-gray-600" />
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>No Spam</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We've received your request and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroWithForm;
