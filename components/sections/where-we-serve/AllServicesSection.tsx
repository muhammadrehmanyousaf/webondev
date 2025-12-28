'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Palette, Megaphone, Database, ShoppingCart, Sparkles } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// =============================================================================
// ALL SERVICES SECTION - Premium Emerald Green Design
// =============================================================================

interface AllServicesSectionProps {
  cityName: string;
  countryName: string;
  stateName: string;
}

const AllServicesSection = ({ cityName, countryName, stateName }: AllServicesSectionProps) => {
  const services = [
    {
      category: 'Web Development',
      icon: Code2,
      gradient: 'from-brand-500 to-teal-500',
      services: [
        { name: 'Custom Web Development', description: 'Tailored websites built for your business needs' },
        { name: 'E-commerce Development', description: 'Online stores that convert visitors into customers' },
        { name: 'React Development', description: 'Modern, scalable React applications' },
        { name: 'Next.js Development', description: 'SEO-optimized, fast Next.js applications' },
        { name: 'WordPress Development', description: 'Custom WordPress themes and plugins' },
        { name: 'Progressive Web Apps', description: 'Fast, reliable, and engaging web apps' }
      ]
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      gradient: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'iOS App Development', description: 'Native iOS applications for iPhone and iPad' },
        { name: 'Android App Development', description: 'Native Android applications' },
        { name: 'React Native Development', description: 'Cross-platform mobile apps' },
        { name: 'Flutter Development', description: 'Beautiful, fast cross-platform apps' },
        { name: 'Mobile App Maintenance', description: 'Ongoing support and updates' }
      ]
    },
    {
      category: 'Design & UX',
      icon: Palette,
      gradient: 'from-purple-500 to-brand-500',
      services: [
        { name: 'UI/UX Design', description: 'User-centered design that converts' },
        { name: 'Web Design', description: 'Beautiful, functional website designs' },
        { name: 'Mobile App Design', description: 'Intuitive mobile app interfaces' },
        { name: 'Brand Identity Design', description: 'Complete brand identity packages' },
        { name: 'Prototyping', description: 'Interactive prototypes for user testing' }
      ]
    },
    {
      category: 'Digital Marketing',
      icon: Megaphone,
      gradient: 'from-cyan-500 to-blue-500',
      services: [
        { name: 'Search Engine Optimization', description: 'Improve your search rankings' },
        { name: 'Local SEO', description: 'Dominate local search results' },
        { name: 'Pay-Per-Click Advertising', description: 'Targeted PPC campaigns' },
        { name: 'Social Media Marketing', description: 'Engage your audience on social platforms' },
        { name: 'Content Marketing', description: 'Valuable content that drives traffic' },
        { name: 'Email Marketing', description: 'Convert leads with email campaigns' }
      ]
    },
    {
      category: 'Business Solutions',
      icon: Database,
      gradient: 'from-brand-500 to-lime-500',
      services: [
        { name: 'Custom Software Development', description: 'Tailored software solutions' },
        { name: 'API Development', description: 'Robust APIs for your applications' },
        { name: 'Database Design', description: 'Optimized database architecture' },
        { name: 'Cloud Solutions', description: 'Scalable cloud infrastructure' },
        { name: 'DevOps Services', description: 'Streamlined development operations' },
        { name: 'IT Consulting', description: 'Strategic technology guidance' }
      ]
    },
    {
      category: 'E-commerce',
      icon: ShoppingCart,
      gradient: 'from-amber-500 to-brand-500',
      services: [
        { name: 'Shopify Development', description: 'Custom Shopify stores' },
        { name: 'WooCommerce Development', description: 'WordPress e-commerce solutions' },
        { name: 'Custom E-commerce Platforms', description: 'Bespoke online stores' },
        { name: 'Payment Gateway Integration', description: 'Secure payment processing' },
        { name: 'Inventory Management', description: 'Efficient inventory systems' }
      ]
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-teal-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Comprehensive Services</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
            <span className="text-white">All Services in </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {cityName}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive software development and digital services tailored for businesses in {cityName}.
          </p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-10`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      className="group relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.05 }}
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                        <Link
                          href={`/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(cityName)}/${toSlug(service.name)}`}
                          className="inline-flex items-center text-brand-400 font-semibold text-sm hover:text-brand-300 transition-colors group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />

          <div className="relative bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-brand-500/30 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 mb-6 shadow-lg shadow-brand-500/25"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and how we can help your business succeed in {cityName}.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="glow" size="lg" className="rounded-full px-10 group">
                <Link href="#contact-form" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesSection;
