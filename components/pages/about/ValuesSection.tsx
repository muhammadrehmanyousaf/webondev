'use client';

import React from 'react';
import { Heart, Shield, Zap, Users, Target, Award } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client Success First',
      description: 'Your success is our success. We measure our achievements by the growth and satisfaction of our clients.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build lasting relationships through honest communication, reliable delivery, and transparent processes.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Innovation & Excellence',
      description: 'We stay ahead of technology trends and maintain the highest standards in everything we deliver.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, fostering collaboration and shared ownership of outcomes.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'Every decision we make is guided by measurable outcomes and tangible business value.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay current with emerging technologies and methodologies.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every decision we make and every solution we deliver. They&apos;re not just words on a wall – they&apos;re the foundation of how we work.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
              &ldquo;We don&apos;t just build software – we build
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> partnerships </span>
              that drive lasting success.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="CEO"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600 text-sm">CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;