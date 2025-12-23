'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, Sparkles } from 'lucide-react';
import Script from 'next/script';

// =============================================================================
// TESTIMONIALS DATA
// =============================================================================

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Web On Dev transformed our business with their exceptional web development services. Their team delivered a scalable, modern platform that exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-brand-500 to-teal-500',
    date: '2024-11-15',
    service: 'Web Development',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, E-Shop Solutions',
    company: 'E-Shop Solutions',
    rating: 5,
    text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget.',
    avatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-teal-500 to-cyan-500',
    date: '2024-10-28',
    service: 'Mobile App Development',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, Growth Co.',
    company: 'Growth Co.',
    rating: 5,
    text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven.',
    avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-cyan-500 to-blue-500',
    date: '2024-12-01',
    service: 'Digital Marketing',
  },
  {
    id: 4,
    name: 'David Park',
    position: 'CTO, InnovateLab',
    company: 'InnovateLab',
    rating: 5,
    text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-purple-500 to-brand-500',
    date: '2024-09-20',
    service: 'Cloud & DevOps',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Product Manager, FinTech Pro',
    company: 'FinTech Pro',
    rating: 5,
    text: 'The UI/UX design they created for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Fantastic work!',
    avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-pink-500 to-brand-500',
    date: '2024-08-15',
    service: 'UI/UX Design',
  },
  {
    id: 6,
    name: 'Robert Wilson',
    position: 'Operations Head, LogiFlow',
    company: 'LogiFlow',
    rating: 5,
    text: 'Their custom software solution streamlined our operations perfectly. The team understood our needs and delivered exactly what we needed.',
    avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    gradient: 'from-amber-500 to-brand-500',
    date: '2024-10-10',
    service: 'Custom Software',
  },
];

// Review Schema for SEO
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.webondev.com/#organization',
  name: 'Web On Dev',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '250',
    reviewCount: '250',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name,
      jobTitle: t.position.split(',')[0],
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
    datePublished: t.date,
  })),
};

const stats = [
  { emoji: '😊', value: '99%', label: 'Client Satisfaction', gradient: 'from-brand-400 to-teal-400' },
  { emoji: '⭐', value: '4.9/5', label: 'Average Rating', gradient: 'from-teal-400 to-cyan-400' },
  { emoji: '🎯', value: '150+', label: 'Happy Clients', gradient: 'from-cyan-400 to-brand-400' },
];

// =============================================================================
// TESTIMONIAL CARD COMPONENT
// =============================================================================

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

      <motion.div
        whileHover={{ y: -5 }}
        className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
      >
        {/* Quote Icon & Stars */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg shadow-brand-500/20`}
          >
            <Quote className="w-6 h-6 text-white" />
          </motion.div>
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-slate-300 leading-relaxed mb-6 text-base">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-sm`} />
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20"
            />
          </motion.div>
          <div>
            <div className="font-bold text-white group-hover:text-brand-400 transition-colors text-lg">
              {testimonial.name}
            </div>
            <div className="text-slate-400 text-sm">{testimonial.position}</div>
            <div className="text-brand-400 text-sm font-medium">{testimonial.company}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-slate-950"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Review Schema for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Testimonials</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">What Our Clients</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say
            about our services and results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  {stat.emoji}
                </motion.div>
                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
