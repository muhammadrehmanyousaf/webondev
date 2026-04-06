'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Globe, Users, Award } from 'lucide-react';
import InlineCTA from '@/components/ui/inline-cta';

// =============================================================================
// TESTIMONIALS SECTION - Content Variation Engine
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface TestimonialsSectionProps {
  cityName?: string;
  stateName?: string;
  countryName?: string;
}

const TestimonialsSection = ({ cityName, stateName, countryName }: TestimonialsSectionProps = {}) => {
  const locationLabel = cityName ? `${cityName}` : stateName ? `${stateName}` : countryName ? `${countryName}` : '';
  const fullLocation = [cityName, stateName, countryName].filter(Boolean).join(', ');
  const v = locationLabel ? strHash(fullLocation, 67) % 3 : 0;

  const testimonialSets = [
    [
      { name: 'Sarah Johnson', position: 'CEO, TechStart Inc.', location: 'New York, USA', text: 'Web On Dev transformed our business with their exceptional web development. Their team delivered a scalable, modern platform that exceeded expectations and helped us expand into three new markets within the first year.' },
      { name: 'Michael Chen', position: 'Founder, E-Shop Solutions', location: 'London, UK', text: 'Outstanding mobile app development! They created a beautiful, user-friendly app that our customers love. Completed on time and within budget, with excellent local market adaptation for both iOS and Android.' },
      { name: 'Emily Rodriguez', position: 'Marketing Director, Growth Co.', location: 'Toronto, Canada', text: 'Their digital marketing expertise helped us increase our online presence by 300%. The team is professional, creative, and results-driven with deep understanding of local markets and global trends.' },
      { name: 'David Park', position: 'CTO, InnovateLab', location: 'Sydney, Australia', text: 'Excellent cloud infrastructure setup and DevOps implementation. Our deployment process is now 10x faster and more reliable. Their global expertise with local delivery is unmatched in the industry.' },
      { name: 'Lisa Thompson', position: 'Product Manager, FinTech Pro', location: 'Berlin, Germany', text: 'The UI/UX design for our fintech platform is simply amazing. User engagement increased by 250% after the redesign. Their compliance expertise across European regulations was invaluable.' },
      { name: 'Robert Wilson', position: 'Operations Head, LogiFlow', location: 'Singapore', text: 'Their custom software solution streamlined our operations perfectly. The team understood our needs and delivered exactly what we needed with excellent regional adaptation and ongoing support.' },
    ],
    [
      { name: 'Ananya Patel', position: 'Founder, EduVerse', location: 'Mumbai, India', text: 'Web On Dev built our ed-tech platform from scratch. Handling 50K concurrent users with zero downtime in the first semester was nothing short of remarkable. They truly understand scalable architecture.' },
      { name: 'James Mitchell', position: 'VP Engineering, Apex Retail', location: 'Chicago, USA', text: 'Their e-commerce migration cut our page load time from 4s to 0.8s. Conversion rates jumped 40% in the first quarter after launch. Best technology investment we have ever made as a company.' },
      { name: 'Fatima Al-Hassan', position: 'CEO, MedConnect', location: 'Dubai, UAE', text: 'HIPAA-compliant telemedicine platform delivered in 14 weeks. The team navigated complex healthcare regulations across three jurisdictions seamlessly. Patient satisfaction scores are through the roof.' },
      { name: 'Carlos Mendes', position: 'Co-Founder, GreenLogix', location: 'São Paulo, Brazil', text: 'Our fleet management dashboard now processes real-time GPS data from 2,000 vehicles. Web On Dev\'s architecture scaled effortlessly as we expanded operations to five new regions across Latin America.' },
      { name: 'Sophie Berger', position: 'Digital Director, LuxeHaus', location: 'Paris, France', text: 'They redesigned our luxury brand site with a focus on storytelling and performance. Organic traffic doubled and our bounce rate dropped by 35% within three months of the relaunch.' },
      { name: 'Kenji Tanaka', position: 'CTO, PayBridge', location: 'Tokyo, Japan', text: 'Multi-currency payment integration across 12 Asian markets, on time and on budget. Their understanding of local payment ecosystems gave us a genuine competitive edge over larger competitors.' },
    ],
    [
      { name: 'Rachel Kim', position: 'CEO, StyleSync', location: 'Seoul, South Korea', text: 'Our fashion marketplace went from concept to 100K downloads in four months. Web On Dev\'s cross-platform expertise in React Native saved us six months of parallel native development effort.' },
      { name: 'Henrik Johansson', position: 'Product Lead, ScaleOps', location: 'Stockholm, Sweden', text: 'The observability platform they built processes 2M events per minute. Our mean time to resolution dropped 60% after deploying their real-time alerting and incident management system.' },
      { name: 'Priya Sharma', position: 'Founder, TravelNest', location: 'Bangalore, India', text: 'Web On Dev delivered a booking engine that handles peak traffic 5x our projections. The multi-language support and localized pricing were game-changers for our international expansion strategy.' },
      { name: 'Oliver Grant', position: 'Director, HealthTrack UK', location: 'Manchester, UK', text: 'Their patient portal integrates with four NHS systems and passed rigorous security audits on the first attempt. The team\'s healthcare domain knowledge is genuinely outstanding and rare to find.' },
      { name: 'Maria Gonzalez', position: 'COO, FreshCart', location: 'Mexico City, Mexico', text: 'Same-day delivery app with live tracking, built in 10 weeks. Our customer satisfaction scores jumped from 3.8 to 4.7 stars after launch. Exceptional mobile engineering and UX design throughout.' },
      { name: 'Daniel Novak', position: 'CTO, InsureFlow', location: 'Prague, Czech Republic', text: 'Complex policy management system with automated underwriting, delivered ahead of schedule. Their event-driven architecture handles our peak enrollment periods flawlessly without any performance degradation.' },
    ],
  ];

  const headerVariants = [
    {
      badge: 'Global Testimonials',
      h2White: locationLabel ? `What ${locationLabel} & global clients ` : 'What our global clients ',
      h2Gradient: 'say about us',
      desc: `Don't just take our word for it. Here's what our satisfied clients${locationLabel ? `, including businesses near ${locationLabel},` : ' from around the world'} have to say about our services and results.`,
    },
    {
      badge: 'Client Success',
      h2White: locationLabel ? `${locationLabel} clients love ` : 'Clients love ',
      h2Gradient: 'working with us',
      desc: `From startups to enterprise—hear directly from teams${locationLabel ? ` in ${locationLabel} and across the globe` : ' worldwide'} who chose Web On Dev and saw measurable results.`,
    },
    {
      badge: 'Proven Results',
      h2White: locationLabel ? `Trusted by businesses in ${locationLabel} & ` : 'Trusted by businesses ',
      h2Gradient: 'worldwide',
      desc: `Real feedback from real clients${locationLabel ? ` near ${locationLabel}` : ''}. Every project starts with understanding your goals and ends with exceeding them.`,
    },
  ];

  const testimonials = testimonialSets[v];
  const header = headerVariants[v];

  const stats = [
    { value: '99%', label: 'Client Satisfaction', icon: Award },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '50+', label: 'Countries Served', icon: Globe },
    { value: '250+', label: 'Happy Clients', icon: Users },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(6,182,212,0.06), transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>{header.badge}</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{header.h2White}</span>
            <span className="gradient-text">{header.h2Gradient}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{header.desc}</p>
        </motion.div>
      </div>

      <div className="relative z-10 mb-16 overflow-hidden">
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-[400px] mx-3 group">
              <div className="relative bg-white/[0.02] rounded-2xl p-8 border border-white/[0.06] hover:border-brand-500/20 transition-colors duration-200 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}>
                    <Quote className="w-5 h-5 text-brand-400" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs">{testimonial.position}</div>
                    <div className="text-brand-400 text-xs font-medium">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-colors duration-200">
              <div className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}>
                <stat.icon className="w-5 h-5 text-brand-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <InlineCTA
          title={locationLabel ? `Join 250+ Happy Clients From ${locationLabel} & Beyond` : 'Join 250+ Happy Clients Worldwide'}
          description={locationLabel ? `Start your ${locationLabel} success story with us today.` : 'Start your success story with us today.'}
          buttonText="Get Started"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
