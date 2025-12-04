'use client';

import React from 'react';

const OutcomesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                A software house built for <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">outcomes</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                We design and build fast, accessible, and search-optimized products. From information architecture and Core Web Vitals to localized content and analytics, our delivery is engineered to win traffic and convert it into revenue.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Every engagement includes technical SEO, schema markup, and measurement. We validate performance with field data and iterate based on what your users actually do.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance-Driven Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just build features—we engineer for measurable business outcomes. Every line of code, every design decision, and every optimization is aligned with your growth objectives. Our development process prioritizes performance, scalability, and user experience that drives conversions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Informed Decisions</h3>
                <p className="text-gray-700 leading-relaxed">
                  We leverage advanced analytics, A/B testing, and user behavior data to make informed decisions about your digital product. Our iterative approach ensures continuous improvement based on real user feedback and performance metrics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ROI-Focused Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every project is structured to deliver measurable return on investment. We track key performance indicators, conversion rates, and business metrics to ensure your digital solution contributes directly to your bottom line.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Conversion Rate Optimization',
                'User Experience Design',
                'Technical SEO Implementation',
                'Analytics & Measurement',
                'Performance Optimization',
                'Continuous Improvement'
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

            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Global software development team"
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
                    <div className="font-bold text-gray-900">Outcome-Driven</div>
                    <div className="text-sm text-gray-600">Results-Focused</div>
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

export default OutcomesSection;
