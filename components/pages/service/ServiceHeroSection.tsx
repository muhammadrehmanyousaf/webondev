'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Award,
  Shield,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

interface ServiceHeroSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

// Service-specific images mapping
const serviceImages: Record<string, string> = {
  'web-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'mobile-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  'software-development': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  'ui-ux-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
  'ecommerce-solutions': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  'cloud-devops': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  'consulting-strategy': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
  'outsourcing-services': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  'maintenance-support': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
};

const ServiceHeroSection = ({ pillar, cluster }: ServiceHeroSectionProps) => {
  const currentService = cluster || pillar;
  const features = cluster?.features || ['Expert Development', 'Quality Assurance', 'Timely Delivery', 'Ongoing Support'];
  const serviceImage = serviceImages[pillar.slug] || serviceImages.default;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] pt-24 pb-16">
      {/* Grain Texture */}

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static Radial Gradients */}
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(16,185,129,0.12), transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.08), transparent 70%)' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${pillar.slug}`} className="hover:text-brand-400 transition-colors">{pillar.title}</Link>
              {cluster && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-brand-400 font-medium">{cluster.title}</span>
                </>
              )}
            </nav>

            {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {cluster ? 'Specialized Service' : 'Service Category'}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Professional </span>
              <span className="gradient-text">
                {currentService.title}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl"
            >
              {currentService.description}. Our expert team delivers high-quality solutions that drive business growth and digital transformation.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                variant="default"
                size="lg"
                className="rounded-full px-8"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10">
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Star, label: '4.9/5 Rating', color: 'text-yellow-400' },
                { icon: Users, label: '150+ Clients', color: 'text-brand-400' },
                { icon: Award, label: 'Award Winning', color: 'text-teal-400' },
                { icon: Shield, label: '100% Secure', color: 'text-cyan-400' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.2))' }}
            />

            {/* Main Card */}
            <div className="relative bg-white/[0.02] rounded-3xl p-3 border border-white/[0.06] overflow-hidden">
              {/* Image */}
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={serviceImage}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 -left-4 lg:-left-8"
              >
                <div className="bg-[#0a0f1a] rounded-2xl p-4 border border-white/[0.06] shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Quality Guaranteed</div>
                      <div className="text-sm text-slate-400">100% Satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-8 -right-4 lg:-right-8"
              >
                <div className="bg-[#0a0f1a] rounded-2xl p-4 border border-white/[0.06] shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(16,185,129,0.08))' }}
                    >
                      <Zap className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Fast Delivery</div>
                      <div className="text-sm text-slate-400">On-time Results</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Related Services Preview (for pillar pages) */}
        {!cluster && pillar.clusters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="gradient-text">{pillar.title}</span> Specializations
              </h2>
              <p className="text-slate-300 text-lg">
                Explore our specialized services in {pillar.title.toLowerCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.clusters.slice(0, 6).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <Link
                    href={`/${pillar.slug}/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                          >
                            <TrendingUp className="w-6 h-6 text-brand-400" />
                          </div>
                          <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceHeroSection;
