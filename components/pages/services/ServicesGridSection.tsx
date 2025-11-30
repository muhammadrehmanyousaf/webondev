'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteStructure } from '@/lib/site-structure';
import { Globe, Smartphone, Code, Palette, TrendingUp, ShoppingCart, Cloud, Users, Building, Settings } from 'lucide-react';

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

const ServicesGridSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
            
            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:scale-105 hover:-translate-y-2 block"
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

                {/* Services Count & Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">
                      {service.clusters.length} Services Available
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  {/* Service Preview */}
                  <div className="space-y-1">
                    {service.clusters.slice(0, 3).map((cluster, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {cluster.title}
                      </div>
                    ))}
                    {service.clusters.length > 3 && (
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                        +{service.clusters.length - 3} more services
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center text-blue-600 hover:text-purple-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? We specialize in creating custom software solutions tailored to your unique business requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;