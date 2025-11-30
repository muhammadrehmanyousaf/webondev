'use client';

import React from 'react';

const IndustryFitSection = () => {
  return (
    <section className="py-20 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Industry-fit <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">delivery</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We tune architecture, data, and UX to your industry's realities—whether you're in SaaS, fintech, healthcare, retail, or education. Expect compliance-aware data flows, localization, and payments that scale globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our cross-functional teams prioritize maintainability and clear ownership so outcomes are reliable, repeatable, and measurable.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sector-Specific Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand the unique challenges and opportunities within your industry. From healthcare compliance and fintech security to e-commerce optimization and educational technology, we tailor our solutions to meet industry-specific requirements and best practices.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We build with compliance in mind from day one. Whether it's HIPAA for healthcare, PCI DSS for payments, GDPR for data privacy, or industry-specific regulations, we ensure your digital solution meets all necessary compliance requirements.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our solutions are designed to grow with your business. We implement scalable architectures, microservices, and cloud-native approaches that can handle increasing loads, new features, and expanding user bases without compromising performance.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Healthcare Compliance (HIPAA)',
                'Financial Security (PCI DSS)',
                'Data Privacy (GDPR)',
                'E-commerce Optimization',
                'Educational Technology',
                'Enterprise Integration'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
                alt="Industry-fit delivery"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Industry-Tailored</div>
                    <div className="text-sm text-gray-600">Compliance-Ready</div>
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

export default IndustryFitSection;
