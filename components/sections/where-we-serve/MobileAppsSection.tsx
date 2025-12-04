'use client';

import React from 'react';

const MobileAppsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-orange-100 to-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35f6?q=80&w=1600&auto=format&fit=crop"
                alt="Mobile apps engineered for growth"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Mobile-First</div>
                    <div className="text-sm text-gray-600">Growth-Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Mobile apps engineered for</span>
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent font-black">growth</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                We build native and cross-platform apps optimized for latency, accessibility, and adoption. From onboarding to retention, we rely on data to improve engagement, not guesswork.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our teams integrate analytics, experimentation, and privacy-friendly measurement to fuel continuous improvement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Native & Cross-Platform Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  We develop both native iOS/Android applications and cross-platform solutions using React Native and Flutter. Our approach ensures optimal performance, native feel, and consistent user experience across all platforms while maximizing code reusability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centric Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every app is designed with the user journey in mind. We implement intuitive navigation, smooth animations, and accessibility features that make your app enjoyable and easy to use for all users, regardless of their abilities or device preferences.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  We optimize for speed, battery life, and network efficiency. Our apps load quickly, use minimal resources, and provide smooth interactions even on older devices or slow network connections.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'React Native Development',
                'iOS & Android Native',
                'Flutter Cross-Platform',
                'Push Notification Systems',
                'In-App Analytics',
                'App Store Optimization'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
