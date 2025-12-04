'use client';

import React from 'react';

const LocalTeamsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-orange-200 text-orange-700 bg-orange-50 shadow-sm">Trusted locally, delivered globally</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Local teams,</span>
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">global standards</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regional Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our teams possess deep understanding of local market dynamics, cultural nuances, and regional business practices. We don't just translate—we adapt your digital presence to resonate with local audiences while maintaining global quality standards.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Zone Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  We structure our delivery teams to ensure optimal overlap with your working hours. Whether you're in New York, London, Tokyo, or Sydney, we maintain responsive communication and real-time collaboration throughout your project lifecycle.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Localized Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every project incorporates region-specific considerations: local payment gateways, compliance requirements, language preferences, and cultural design elements. We ensure your digital solution feels native to your target market.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Multi-language Content Strategy',
                'Regional SEO Optimization',
                'Local Compliance & Regulations',
                'Cultural UX Adaptation',
                'Regional Analytics & Insights',
                'Local Payment Integration'
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

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{label:'Projects', value:'250+'},{label:'Avg INP', value:'120ms'},{label:'Rating', value:'4.9/5'}].map((s) => (
                <div key={s.label} className="text-center bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl">Start a project</a>
            </div>
          </div>

          {/* Full-width narrative box spanning to the image edge */}
          <div className="lg:col-span-2 order-last lg:order-none">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Work with engineers and designers who understand your market's language, devices, and expectations. We bake localization, technical SEO, and accessibility into the foundation—so your product is discoverable, fast, and delightful for users in your region.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From country to state to city pages, you'll find detailed coverage and service options that match your growth goals. We align to your time zone and collaborate transparently with measurable milestones.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
                alt="Local teams with global delivery standards"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Global Network</div>
                    <div className="text-sm text-gray-600">Local Expertise</div>
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

export default LocalTeamsSection;
