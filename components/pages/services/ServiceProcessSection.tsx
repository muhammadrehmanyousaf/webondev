'use client';

import React from 'react';
import { MessageCircle, FileText, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const ServiceProcessSection = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business goals, requirements, and challenges through detailed consultation.',
      color: 'from-orange-500 to-orange-600',
      duration: '1-2 Days'
    },
    {
      icon: FileText,
      title: 'Planning & Strategy',
      description: 'Our team creates a comprehensive project plan with timelines, milestones, and technical specifications.',
      color: 'from-orange-500 to-orange-600',
      duration: '3-5 Days'
    },
    {
      icon: Code,
      title: 'Development & Design',
      description: 'We bring your vision to life using cutting-edge technologies and best practices in development.',
      color: 'from-orange-500 to-orange-600',
      duration: '2-12 Weeks'
    },
    {
      icon: TestTube,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.',
      color: 'from-orange-500 to-red-500',
      duration: '1-2 Weeks'
    },
    {
      icon: Rocket,
      title: 'Launch & Deployment',
      description: 'We handle the complete deployment process and ensure a smooth launch of your solution.',
      color: 'from-orange-500 to-orange-600',
      duration: '1-3 Days'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your solution running smoothly and up-to-date.',
      color: 'from-orange-500 to-orange-600',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Development
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology that ensures successful project delivery, from initial consultation to ongoing support.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Container */}
          <div className="hidden lg:block">
            {/* Connecting Line - precisely positioned between circles */}
            <div 
              className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600"
              style={{
                top: '120px', // Start after first circle (80px circle height + 40px margin)
                height: 'calc(100% - 240px)' // Total height minus first and last circle spaces
              }}
            ></div>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}>
                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-center lg:text-inherit`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Circle - Desktop */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-orange-100 shadow-lg lg:flex hidden">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                </div>
                
                {/* Timeline Circle - Mobile */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-full lg:hidden mb-4`}>
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                
                {/* Spacer for layout balance */}
                <div className="w-full lg:w-1/2 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="mt-12 lg:hidden">
          <div className="flex items-center justify-center space-x-2">
                {processSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`}></div>
                {index < processSteps.length - 1 && (
                  <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Our Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium mb-2">On-Time Delivery</div>
              <div className="text-gray-600 text-sm">Projects delivered within agreed timelines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-2">Client Satisfaction</div>
              <div className="text-gray-600 text-sm">Clients satisfied with our process and results</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Communication</div>
              <div className="text-gray-600 text-small">Round-the-clock project updates and support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;