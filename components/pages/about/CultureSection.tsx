'use client';

import React from 'react';
import Link from 'next/link';
import { Coffee, Gamepad2, Plane, GraduationCap, Heart, Trophy } from 'lucide-react';

const CultureSection = () => {
  const benefits = [
    {
      icon: Coffee,
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible hours and work-life balance',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Annual learning budget, conferences, and skill development programs',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Plane,
      title: 'Travel Opportunities',
      description: 'Client visits, team retreats, and international conferences',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Trophy,
      title: 'Recognition Programs',
      description: 'Performance bonuses, employee of the month, and achievement awards',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Gamepad2,
      title: 'Fun Activities',
      description: 'Team building events, game nights, and social gatherings',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const values = [
    'Innovation & Creativity',
    'Work-Life Balance',
    'Diversity & Inclusion',
    'Continuous Growth',
    'Team Collaboration',
    'Client Success Focus'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Culture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that great work comes from great people in a great environment. Our culture is built on trust, innovation, and mutual respect.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Where Talent Thrives
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At SoftwareAgency, we&apos;ve created an environment where creativity flourishes and innovation is encouraged. Our team members are not just employees – they&apos;re partners in our mission to deliver exceptional software solutions.
              </p>
              <p>
                We foster a culture of continuous learning, open communication, and mutual support. Whether you&apos;re working remotely or in our offices, you&apos;ll find a collaborative environment that values your contributions and supports your growth.
              </p>
            </div>

            {/* Culture Values */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What We Value</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Culture"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits & Perks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence. Explore our current openings and become part of our growing family.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                 href="/careers"
                 className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
               >
                 View Open Positions
               </Link>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
               >
                 Get in Touch
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;