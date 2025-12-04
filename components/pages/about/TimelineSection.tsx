'use client';
//this is the way
import React from 'react';
import { Calendar, TrendingUp, Globe, Award, Users, Rocket } from 'lucide-react';

const TimelineSection = () => {
  const timeline = [
    {
      year: '2019',
      quarter: 'Q1',
      title: 'Company Founded',
      description: 'SoftwareAgency was established with a team of 5 passionate developers.',
      icon: Rocket,
      stats: '5 Team Members',
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2019',
      quarter: 'Q4',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
      icon: TrendingUp,
      stats: '10 Projects Completed',
       color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'Team Expansion',
      description: 'Grew to 15 team members and established our design and marketing divisions.',
      icon: Users,
      stats: '15 Team Members',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2021',
      quarter: 'Q1',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across North America and Europe.',
      icon: Globe,
      stats: '10 Countries',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2022',
      quarter: 'Q3',
      title: '500 Clients Milestone',
      description: 'Reached 500 satisfied clients and launched our enterprise solutions division.',
      icon: Award,
      stats: '150+ Clients',
       color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and recognition for innovation and quality.',
      icon: Calendar,
      stats: '5 Awards Won',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Growth
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent"> Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small startup to a global software development agency, here&apos;s how we&apos;ve grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden lg:block">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500"
              style={{ top: '95px', bottom: '95px' }}
            ></div>
          </div>

          <div className="space-y-2">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-8`}>
                
                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'} text-center lg:text-inherit`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105">
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      <span className="text-sm font-bold text-orange-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {item.quarter}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
                      <item.icon className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-600">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Circle - All Screen Sizes */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full border-4 border-orange-200 shadow-lg mb-4 lg:mb-0">
                  <div className={`flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-r ${item.color} rounded-full`}>
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="w-full lg:w-1/2 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Progress Dots */}
        <div className="mt-12 lg:hidden">
          <div className="flex items-center justify-center space-x-2">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                {index < timeline.length - 1 && (
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Looking Ahead to 2025 & Beyond
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re committed to continued growth, innovation, and excellence. Our goals include expanding our AI/ML capabilities, reaching 150+ clients, and establishing offices in new markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-orange-600">AI/ML Integration</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-orange-600">150+ Clients</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-indigo-600">Global Expansion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
