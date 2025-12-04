'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Code, Palette, TrendingUp, ShoppingCart, Cloud, Users, Building, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteStructure } from '@/lib/site-structure';

const iconMap = {
  Globe,
  Smartphone,
  Code,
  Palette,
  TrendingUp,
  ShoppingCart,
  Cloud,
  Users,
  Building,
  Settings
};

const ServicesSection = () => {
  // Show only first 8 services (2 rows of 4)
  const displayedServices = siteStructure.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-400">Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Comprehensive Tech Solutions</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              for Modern Business
            </motion.span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            From concept to deployment, we deliver innovative technology solutions that transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
        >
          {displayedServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
            
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/${service.slug}`}>
                  <motion.div
                    className="group relative h-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
                    whileHover={{ borderColor: 'rgba(249, 115, 22, 0.5)' }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent)',
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="inline-flex p-3 bg-orange-500/20 rounded-lg mb-4 group-hover:bg-orange-500/30 transition-colors"
                      >
                        <IconComponent className="w-6 h-6 text-orange-500" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Services Count */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs text-orange-400 font-semibold">
                          {service.clusters.length} Services
                        </span>
                        <div className="flex -space-x-1">
                          {service.clusters.slice(0, 2).map((cluster, idx) => (
                            <div
                              key={idx}
                              className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full border border-white flex items-center justify-center"
                              title={cluster.title}
                            >
                              <span className="text-xs text-white font-bold">
                                {cluster.title.charAt(0)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm gap-2 group-hover:gap-3 transition-all"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;