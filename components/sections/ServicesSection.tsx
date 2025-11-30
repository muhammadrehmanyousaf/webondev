'use client';

import React from 'react';
import Link from 'next/link';
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

  return (
    <section className="py-20 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Software Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From web development to mobile apps, from design to marketing - we provide end-to-end digital solutions for your business success.
          </p>
        </div>

        {/* Services Grid - Show only 8 services (2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {displayedServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
            
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:scale-105 hover:-translate-y-2 block cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Services Count */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">
                    {service.clusters.length} Services
                  </span>
                  <div className="flex -space-x-1">
                    {service.clusters.slice(0, 3).map((cluster, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center"
                        title={cluster.title}
                      >
                        <span className="text-xs text-white font-bold">
                          {cluster.title.charAt(0)}
                        </span>
                      </div>
                    ))}
                    {service.clusters.length > 3 && (
                      <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-gray-600 font-bold">
                          +{service.clusters.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;