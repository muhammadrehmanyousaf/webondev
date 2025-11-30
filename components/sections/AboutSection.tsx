'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Target, Users, Award, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    'Expert Development Team',
    'Agile Development Process',
    'Quality Assurance & Testing',
    '24/7 Support & Maintenance',
    'Scalable & Secure Solutions',
    'On-Time Project Delivery'
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Delivering exceptional software solutions that transform businesses and drive growth.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build long-term partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in code quality, design, and project delivery.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technologies to create innovative digital solutions.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Digital Excellence
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Since 2019</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a full-service software development agency specializing in creating powerful digital solutions 
              that help businesses thrive in the modern digital landscape. Our team of expert developers, designers, 
              and strategists work together to deliver exceptional results.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Development Team"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Development Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and help us deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;