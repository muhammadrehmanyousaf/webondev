'use client';

import React from 'react';
import { toSlug } from '@/lib/slug';
import Link from 'next/link';

interface AllServicesSectionProps {
  cityName: string;
  countryName: string;
  stateName: string;
}

const AllServicesSection = ({ cityName, countryName, stateName }: AllServicesSectionProps) => {
  const services = [
    {
      category: 'Web Development',
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
    <section className="py-20 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            All Services in <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{cityName}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software development and digital services tailored for businesses in {cityName}. From web development to digital marketing, we have the expertise to help your business grow.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((category) => (
            <div key={category.category} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div key={service.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{service.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <Link 
                      href={`/where-we-serve/${toSlug(countryName)}/${toSlug(stateName)}/${toSlug(cityName)}/${toSlug(service.name)}`}
                      className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and how we can help your business succeed in {cityName}.
            </p>
            <Link 
              href="#contact-form"
              className="inline-flex items-center bg-white text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Get Free Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
