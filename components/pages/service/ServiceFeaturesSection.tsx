'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  Globe,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Code2,
  TrendingUp
} from 'lucide-react';
import { PillarPage, ClusterPage } from '@/lib/site-structure';
import InlineCTA from '@/components/ui/inline-cta';

interface ServiceFeaturesSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServiceFeaturesSection = ({ pillar, cluster }: ServiceFeaturesSectionProps) => {
  const currentService = cluster || pillar;

  const defaultFeatures = [
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid development cycles with agile methodology for quick time-to-market.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability built into every solution.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent project delivery within agreed timelines and budgets.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in modern technologies.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure excellence.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and handle increasing demands.'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: '24/7 support and maintenance to keep your solutions running smoothly.'
    },
    {
      icon: CheckCircle2,
      title: 'Best Practices',
      description: 'Following industry standards and best practices for optimal results.'
    }
  ];

  const technologies: Record<string, string[]> = {
    'react': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest'],
    'mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    'web': ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL'],
    'cloud': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    'default': ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker']
  };

  const getTechnologies = () => {
    if (cluster?.slug.includes('react')) return technologies.react;
    if (cluster?.slug.includes('mobile') || pillar.slug.includes('mobile')) return technologies.mobile;
    if (pillar.slug.includes('cloud')) return technologies.cloud;
    if (pillar.slug.includes('web')) return technologies.web;
    return technologies.default;
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
      {/* Grain Texture */}

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 90% 30%, rgba(16,185,129,0.08), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 10% 70%, rgba(6,182,212,0.06), transparent 70%)' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose Our </span>
            <span className="gradient-text">
              {currentService.title}
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We deliver exceptional {currentService.title.toLowerCase()} with a focus on quality, innovation, and client success.
          </p>
        </motion.div>

        {/* Service-Specific Features (for cluster pages) */}
        {cluster && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
              <span className="gradient-text">{cluster.title}</span> Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cluster.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 text-center transition-all duration-300">
                    <div
                      className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                    >
                      <CheckCircle2 className="w-7 h-7 text-brand-400" />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-brand-400 transition-colors">
                      {feature}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Professional {feature.toLowerCase()} implementation with industry best practices.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* General Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Our Service <span className="gradient-text">Advantages</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                  >
                    <feature.icon className="w-7 h-7 text-brand-400" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Services (for pillar pages) */}
        {!cluster && pillar.clusters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Specialized <span className="gradient-text">{pillar.title}</span>
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Explore our comprehensive range of specialized services within {pillar.title.toLowerCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.clusters.slice(0, 9).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${pillar.slug}/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-white/[0.02] rounded-xl sm:rounded-2xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                          >
                            <TrendingUp className="w-6 h-6 text-brand-400" />
                          </div>
                          <h4 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 gradient-border-subtle text-brand-400 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 2 && (
                            <span className="px-3 py-1 bg-white/[0.02] text-slate-400 text-xs rounded-full border border-white/[0.06]">
                              +{service.features.length - 2} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          {service.title} Details
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

        {/* Technology Stack (for cluster pages) */}
        {cluster && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}
            >
              {/* Top Divider */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

              <div className="relative p-8 lg:p-12">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-4"
                  >
                    <Code2 className="w-4 h-4" />
                    Tech Stack
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Technologies We Use
                  </h3>
                  <p className="text-slate-300">
                    We leverage the latest technologies and frameworks for {cluster.title.toLowerCase()}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {getTechnologies().map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/[0.02] rounded-xl p-4 text-center border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-white">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <InlineCTA
          title="Ready to Get Started?"
          description="Let's discuss your project requirements and build something great."
          buttonText="Book a Free Consultation"
        />
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
