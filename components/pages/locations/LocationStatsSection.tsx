'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Globe, Users, Award, Clock, MapPin, Star } from 'lucide-react';

interface LocationStatsSectionProps {
  country?: any;
}

const LocationStatsSection = ({ country }: LocationStatsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const stats = document.querySelectorAll('.stat-item');
      stats.forEach((stat, index) => {
        setTimeout(() => {
          stat.classList.add('animate-fade-in-up');
        }, index * 200);
      });
    }
  }, [isInView]);

  const stats = [
    {
      icon: Globe,
      number: '5+',
      label: 'Countries Served',
      description: 'Global presence across continents',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      description: 'Local expertise worldwide',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Consistent quality delivery',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      number: '< 2h',
      label: 'Response Time',
      description: 'Quick support worldwide',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Excellent service quality',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence has created a global impact, serving clients across multiple countries 
            with consistent quality and local expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 opacity-0 transform translate-y-10"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: '0%' }}
                  onLoad={(e) => {
                    if (isInView) {
                      setTimeout(() => {
                        e.currentTarget.style.width = '100%';
                      }, index * 200);
                    }
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Global Support</div>
              <div className="text-gray-600 text-sm">Round-the-clock assistance across all time zones</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-2">Local Expertise</div>
              <div className="text-gray-600 text-sm">Cultural understanding and local market knowledge</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">Fast</div>
              <div className="text-gray-700 font-medium mb-2">Deployment</div>
              <div className="text-gray-600 text-sm">Quick project delivery with quality assurance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationStatsSection;
