'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Star, Quote } from 'lucide-react';

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
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, E-Shop Solutions',
      company: 'E-Shop Solutions',
      location: 'London, UK',
      rating: 5,
      text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. The project was completed on time and within budget, with excellent local market adaptation.',
      avatar: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Growth Co.',
      company: 'Growth Co.',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven with deep understanding of local markets.',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Their global expertise with local delivery is unmatched.',
      avatar: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Product Manager, FinTech Pro',
      company: 'FinTech Pro',
      location: 'Berlin, Germany',
      rating: 5,
      text: 'The UI/UX design they created for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Their compliance expertise was invaluable.',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      position: 'Operations Head, LogiFlow',
      company: 'LogiFlow',
      location: 'Singapore',
      rating: 5,
      text: 'Their custom software solution streamlined our operations perfectly. The team understood our needs and delivered exactly what we needed with excellent regional adaptation.',
      avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite scroll animation
      gsap.set('.testimonial-track', { x: 0 });
      
      gsap.to('.testimonial-track', {
        x: '-50%',
        duration: 30,
        ease: 'none',
        repeat: -1
      });

      // Pause on hover
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Global Clients
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients from around the world have to say about our services and results.
          </p>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <div className="testimonial-track flex gap-8" style={{ width: 'calc(400px * 12)' }}>
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-orange-400 opacity-60" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  <div className="text-orange-600 text-sm font-medium">{testimonial.company}</div>
                  <div className="text-gray-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
            <div className="text-gray-700 font-medium">Average Rating</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">30+</div>
            <div className="text-gray-700 font-medium">Countries Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
            <div className="text-gray-700 font-medium">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
