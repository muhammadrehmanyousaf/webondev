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
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      description: 'Local expertise worldwide',
       color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      description: 'Consistent quality delivery',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      number: '< 2h',
      label: 'Response Time',
      description: 'Quick support worldwide',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Excellent service quality',
      color: 'from-orange-600 to-orange-700'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Global</span>
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent"> Impact</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Our commitment to excellence has created a global impact, serving clients across multiple countries 
            with consistent quality and local expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 opacity-0 transform translate-y-10"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stats */}
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
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
              <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium mb-2">Global Support</div>
              <div className="text-gray-600 text-sm">Round-the-clock assistance across all time zones</div>
            </div>
            <div>
               <div className="text-2xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-2">Local Expertise</div>
              <div className="text-gray-600 text-sm">Cultural understanding and local market knowledge</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">Fast</div>
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

