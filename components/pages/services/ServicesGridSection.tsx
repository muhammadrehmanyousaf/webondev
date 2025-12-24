'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Globe, Smartphone, Code, Palette, TrendingUp, ShoppingCart, Cloud, Users, Building, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const gradients = [
  'from-brand-500 to-teal-500',
  'from-teal-500 to-cyan-500',
  'from-cyan-500 to-blue-500',
  'from-blue-500 to-purple-500',
  'from-purple-500 to-pink-500',
  'from-pink-500 to-rose-500',
  'from-rose-500 to-orange-500',
  'from-orange-500 to-amber-500',
  'from-amber-500 to-brand-500',
  'from-brand-500 to-teal-500',
];

// Service Card Component
const ServiceCard = ({
  service,
  index,
  gradient
}: {
  service: typeof siteStructure[0];
  index: number;
  gradient: string;
}) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/${service.slug}`}
        className="group relative block h-full"
      >
        {/* Glow Effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

        <motion.div
          className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-brand-500/50 transition-all duration-500 overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Animated Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          {/* Floating Orb */}
          <motion.div
            className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl mb-6 shadow-lg shadow-brand-500/20`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 mb-6 leading-relaxed line-clamp-2">
              {service.description}
            </p>

            {/* Services Count & Preview */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold">
                  <Sparkles className="w-3 h-3" />
                  {service.clusters.length} Services
                </span>
                <motion.div
                  className="text-brand-400 group-hover:translate-x-2 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Service Preview List */}
              <div className="space-y-2">
                {service.clusters.slice(0, 3).map((cluster, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-sm text-slate-500 flex items-center gap-2 group-hover:text-slate-400 transition-colors"
                  >
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full`} />
                    <span className="truncate">{cluster.title}</span>
                  </motion.div>
                ))}
                {service.clusters.length > 3 && (
                  <div className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                    +{service.clusters.length - 3} more services
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center text-brand-400 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const ServicesGridSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
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
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Service Categories</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Service Categories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions tailored to meet your business needs
            and drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteStructure.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Custom Solution Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-brand-500/50 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Need a <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">Custom Solution</span>?
                  </h3>
                  <p className="text-slate-400 max-w-xl leading-relaxed">
                    Can&apos;t find exactly what you&apos;re looking for? We specialize in creating custom software
                    solutions tailored to your unique business requirements.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    variant="glow"
                    size="lg"
                    className="rounded-full px-8 group"
                  >
                    <Link href="/contact">
                      <Sparkles className="w-5 h-5" />
                      Get Custom Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
                  >
                    <Link href="/contact">
                      Book a Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
