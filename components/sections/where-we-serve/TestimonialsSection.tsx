'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Star, Quote, MessageSquare, Globe, Users, Award, Sparkles } from 'lucide-react';

// =============================================================================
// TESTIMONIALS SECTION - Premium Emerald Green Design (Location Pages)
// =============================================================================

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      location: 'New York, USA',
      rating: 5,
      text: 'Web On Dev transformed our business with their exceptional web development services. Their team delivered a scalable, modern platform that exceeded our expectations and helped us expand globally.',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-brand-500 to-teal-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, E-Shop Solutions',
      company: 'E-Shop Solutions',
      location: 'London, UK',
      rating: 5,
      text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget, with excellent local market adaptation.',
      avatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Growth Co.',
      company: 'Growth Co.',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven with deep understanding of local markets.',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Their global expertise with local delivery is unmatched.',
      avatar: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-purple-500 to-brand-500'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Product Manager, FinTech Pro',
      company: 'FinTech Pro',
      location: 'Berlin, Germany',
      rating: 5,
      text: 'The UI/UX design they created for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Their compliance expertise was invaluable.',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-pink-500 to-brand-500'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      position: 'Operations Head, LogiFlow',
      company: 'LogiFlow',
      location: 'Singapore',
      rating: 5,
      text: 'Their custom software solution streamlined our operations perfectly. The team understood our needs and delivered exactly what we needed with excellent regional adaptation.',
      avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      gradient: 'from-amber-500 to-brand-500'
    }
  ];

  const stats = [
    { value: '99%', label: 'Client Satisfaction', icon: Award, gradient: 'from-brand-400 to-teal-400' },
    { value: '4.9/5', label: 'Average Rating', icon: Star, gradient: 'from-teal-400 to-cyan-400' },
    { value: '30+', label: 'Countries Served', icon: Globe, gradient: 'from-cyan-400 to-blue-400' },
    { value: '150+', label: 'Happy Clients', icon: Users, gradient: 'from-brand-400 to-lime-400' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.testimonial-track', { x: 0 });

      gsap.to('.testimonial-track', {
        x: '-50%',
        duration: 40,
        ease: 'none',
        repeat: -1
      });

      const track = sectionRef.current?.querySelector('.testimonial-track');
      if (track) {
        track.addEventListener('mouseenter', () => {
          gsap.globalTimeline.pause();
        });

        track.addEventListener('mouseleave', () => {
          gsap.globalTimeline.resume();
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          className="text-center"
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
          >
            <MessageSquare className="w-4 h-4" />
            <span>Global Testimonials</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">What Our Global Clients </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients from around the world have to say about our services and results.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative z-10 mb-16">
        <div className="testimonial-track flex gap-6" style={{ width: 'calc(420px * 12)' }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 h-full">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 leading-relaxed mb-6 text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-sm`} />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-brand-400 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">{testimonial.position}</div>
                    <div className="text-brand-400 text-sm font-medium">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <motion.div
                className="relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 font-medium text-sm">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
