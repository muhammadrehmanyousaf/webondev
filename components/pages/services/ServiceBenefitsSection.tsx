'use client';

import React from 'react';
import { Shield, Clock, DollarSign, Users, Award, Zap, Globe, HeartHandshake } from 'lucide-react';

const ServiceBenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a 100% satisfaction guarantee and comprehensive quality assurance.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Strict adherence to deadlines with transparent project tracking and regular milestone updates.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing with no hidden costs. Get maximum value for your investment.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced professionals who are experts in their respective fields.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions that meet industry standards and best practices.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick project initiation and efficient development cycles to get you to market faster.',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and multi-timezone coverage.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: HeartHandshake,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with ongoing support and continuous improvement.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const testimonialStats = [
    { number: '150+', label: 'Happy Clients', color: 'text-orange-600' },
    { number: '150+', label: 'Projects Completed', color: 'text-orange-600' },
    { number: '99%', label: 'Client Retention', color: 'text-orange-600' },
    { number: '24/7', label: 'Support Available', color: 'text-orange-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> SoftwareAgency</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality, innovation, and client success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-gray-900 to-orange-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Trusted by Businesses Worldwide
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-100 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
              "Web On Dev transformed our business with their comprehensive digital solutions. Their expertise, professionalism, and commitment to quality are unmatched."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600 text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefitsSection;
