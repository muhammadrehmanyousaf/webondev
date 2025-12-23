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
  Star,
  Sparkles,
  Code2,
  Layers,
  TrendingUp
} from 'lucide-react';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

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
      description: 'Rapid development cycles with agile methodology for quick time-to-market.',
      gradient: 'from-brand-500 to-teal-500',
      glow: 'shadow-brand-500/25'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability built into every solution.',
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'shadow-teal-500/25'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent project delivery within agreed timelines and budgets.',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in modern technologies.',
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'shadow-blue-500/25'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure excellence.',
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and handle increasing demands.',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: '24/7 support and maintenance to keep your solutions running smoothly.',
      gradient: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/25'
    },
    {
      icon: CheckCircle2,
      title: 'Best Practices',
      description: 'Following industry standards and best practices for optimal results.',
      gradient: 'from-rose-500 to-brand-500',
      glow: 'shadow-rose-500/25'
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
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose Our </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
              <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">{cluster.title}</span> Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cluster.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500" />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 text-center transition-all duration-500">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-white" />
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
            Our Service <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Advantages</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl mb-5 shadow-lg ${feature.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
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
                Specialized <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">{pillar.title}</span>
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
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={`/${pillar.slug}/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-500">
                      {/* Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-6 h-6 text-white" />
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
                              className="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs rounded-full border border-brand-500/20"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 2 && (
                            <span className="px-3 py-1 bg-white/5 text-slate-400 text-xs rounded-full border border-white/10">
                              +{service.features.length - 2} more
                            </span>
                          )}
                        </div>

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

        {/* Technology Stack (for cluster pages) */}
        {cluster && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 via-teal-600/20 to-cyan-600/20" />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />

              <div className="relative p-8 lg:p-12">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-4"
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
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="bg-white/10 backdrop-blur-xl rounded-xl p-4 text-center border border-white/10 hover:border-brand-500/50 transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-white">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
