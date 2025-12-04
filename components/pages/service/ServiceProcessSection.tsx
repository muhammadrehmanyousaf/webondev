'use client';

import React from 'react';
import { MessageCircle, FileText, Code, TestTube, Rocket, Headphones } from 'lucide-react';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

interface ServiceProcessSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServiceProcessSection = ({ pillar, cluster }: ServiceProcessSectionProps) => {
  const currentService = cluster || pillar;

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Discovery & Planning',
      description: `We start by understanding your ${currentService.title.toLowerCase()} requirements and business objectives.`,
      color: 'from-orange-500 to-orange-600',
      duration: '1-2 Days'
    },
    {
      icon: FileText,
      title: 'Strategy & Design',
      description: `Create detailed project specifications and design architecture for your ${currentService.title.toLowerCase()}.`,
      color: 'from-orange-400 to-orange-500',
      duration: '3-5 Days'
    },
    {
      icon: Code,
      title: 'Development',
      description: `Expert development using cutting-edge technologies and best practices for ${currentService.title.toLowerCase()}.`,
      color: 'from-orange-600 to-orange-700',
      duration: '2-12 Weeks'
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: `Comprehensive testing to ensure your ${currentService.title.toLowerCase()} meets quality standards.`,
      color: 'from-orange-500 to-orange-600',
      duration: '1-2 Weeks'
    },
    {
      icon: Rocket,
      title: 'Launch & Deploy',
      description: `Smooth deployment and launch of your ${currentService.title.toLowerCase()} solution.`,
      color: 'from-orange-400 to-orange-500',
      duration: '1-3 Days'
    },
    {
      icon: Headphones,
      title: 'Support & Maintain',
      description: `Ongoing support and maintenance to keep your ${currentService.title.toLowerCase()} running optimally.`,
      color: 'from-orange-600 to-orange-700',
      duration: 'Ongoing'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our {currentService.title}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional {currentService.title.toLowerCase()} that exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}>
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} text-center lg:text-inherit`}>
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
                
                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-gray-100 shadow-lg lg:block hidden">
                  <div className="text-xl font-bold text-orange-600">
                    {index + 1}
                  </div>
                </div>
                
                {/* Mobile Number */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-full lg:hidden mb-4`}>
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                
                <div className="w-full lg:w-1/2 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Process Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium mb-2">On-Time Delivery</div>
              <div className="text-gray-600 text-sm">Projects delivered on schedule</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-2">Quality Assured</div>
              <div className="text-gray-600 text-sm">Rigorous testing and QA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-700 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Communication</div>
              <div className="text-gray-600 text-sm">Constant project updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-700 font-medium mb-2">Client Satisfaction</div>
              <div className="text-gray-600 text-sm">Happy clients worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;