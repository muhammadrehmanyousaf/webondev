'use client';

import React from 'react';

const WebDevelopmentSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Web development built to <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">rank</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                We deliver SEO-first websites that load fast, scale globally, and meet Core Web Vitals. Clean information architecture, structured data, and intent-led content ensure your pages are discoverable and conversion-focused from day one.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Every build includes technical SEO, internationalization, and analytics for decision-making—no bolt-ons required.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO-First Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  We design websites with search engines in mind from the ground up. Our development process incorporates semantic HTML, structured data markup, and clean URL structures that help search engines understand and rank your content effectively.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Speed is crucial for both user experience and search rankings. We optimize for Core Web Vitals, implement lazy loading, compress assets, and use modern build tools to ensure your website loads lightning-fast across all devices and networks.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion-Focused Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every design element is crafted to guide users toward conversion. We implement clear call-to-actions, intuitive navigation, and persuasive content layouts that turn visitors into customers while maintaining excellent user experience.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Semantic HTML Structure',
                'Structured Data Markup',
                'Core Web Vitals Optimization',
                'Mobile-First Responsive Design',
                'Internationalization (i18n)',
                'Analytics Integration'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="High-performance web development"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">SEO-Optimized</div>
                    <div className="text-sm text-gray-600">Performance-First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
