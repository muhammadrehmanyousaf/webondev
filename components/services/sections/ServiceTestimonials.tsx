'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  MessageSquare
} from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  companyLogo?: string;
  rating: number;
  videoUrl?: string;
  location?: string;
  industry?: string;
  projectType?: string;
}

interface ServiceTestimonialsProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  testimonials?: Testimonial[];
  layout?: 'slider' | 'grid' | 'featured';
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'What Our Clients Say',
    sectionSubtitle: propSubtitle = 'Real feedback from real businesses we have helped succeed',
    testimonials: propTestimonials,
    layout = 'slider',
    autoPlay = true,
    autoPlayInterval = 5000,
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const testimonials = data?.testimonials || propTestimonials || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || layout !== 'slider') return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, testimonials.length, layout]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Slider Layout */}
        {layout === 'slider' && (
          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial */}
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />

                  {/* Card */}
                  <div className="relative p-8 md:p-12 rounded-2xl bg-slate-900/80 border border-slate-700/50">
                    {/* Quote icon */}
                    <Quote className="w-12 h-12 text-emerald-500/30 mb-6" />

                    {/* Rating */}
                    <div className="mb-6">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-800">
                        {testimonials[activeIndex].avatar ? (
                          <Image
                            src={testimonials[activeIndex].avatar}
                            alt={testimonials[activeIndex].author}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-emerald-400 text-xl font-bold">
                            {testimonials[activeIndex].author.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-grow">
                        <p className="font-semibold text-white">
                          {testimonials[activeIndex].author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                        </p>
                        {testimonials[activeIndex].location && (
                          <p className="text-xs text-gray-500 mt-1">
                            {testimonials[activeIndex].location}
                          </p>
                        )}
                      </div>

                      {/* Company logo */}
                      {(testimonials[activeIndex] as any).companyLogo && (
                        <div className="hidden md:block w-24 h-12 relative">
                          <Image
                            src={(testimonials[activeIndex] as any).companyLogo}
                            alt={testimonials[activeIndex].company}
                            fill
                            className="object-contain opacity-50"
                          />
                        </div>
                      )}
                    </div>

                    {/* Video button if available */}
                    {(testimonials[activeIndex] as any).videoUrl && (
                      <button className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Prev button */}
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-emerald-500 w-8'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Grid Layout */}
        {layout === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 flex-shrink-0">
                      {testimonial.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-emerald-400 font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Featured Layout - One big, rest small */}
        {layout === 'featured' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Featured testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:row-span-2"
            >
              <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <Quote className="w-10 h-10 text-emerald-500/50 mb-6" />

                <div className="mb-6">
                  {renderStars(testimonials[0]?.rating || 5)}
                </div>

                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  "{testimonials[0]?.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-800">
                    {testimonials[0]?.avatar ? (
                      <Image
                        src={testimonials[0].avatar}
                        alt={testimonials[0].author}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald-400 text-xl font-bold">
                        {testimonials[0]?.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[0]?.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[0]?.role} at {testimonials[0]?.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other testimonials */}
            <div className="space-y-6">
              {testimonials.slice(1, 3).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50">
                    <div className="mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-300 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-emerald-400 font-bold">
                            {testimonial.author.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-slate-800"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">500+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">4.9</div>
            <div className="text-sm text-gray-500">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">98%</div>
            <div className="text-sm text-gray-500">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">50+</div>
            <div className="text-sm text-gray-500">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
