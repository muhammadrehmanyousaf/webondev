'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Palette, Megaphone, Database, ShoppingCart } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// =============================================================================
// ALL SERVICES SECTION - Updated Design Language
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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 100%, rgba(6,182,212,0.06), transparent 70%)',
        }}
      />
      <div className="grain absolute inset-0" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span>Comprehensive Services</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight">
            <span className="text-white">All Services in </span>
            <span className="gradient-text">
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
              <div className="relative bg-white/[0.02] rounded-2xl p-8 border border-white/[0.06]">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
                  >
                    <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
                  </div>
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
                      <div className="bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300 h-full">
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
          <div className="relative bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/[0.06] text-center">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.05))' }}
            >
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and how we can help your business succeed in {cityName}.
            </p>
            <Button asChild variant="default" size="lg" className="rounded-full px-10 group">
              <Link href="#contact-form" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesSection;
