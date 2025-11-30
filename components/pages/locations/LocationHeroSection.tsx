'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Globe, MapPin, Users, Award, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LocationHeroSectionProps {
  title?: string;
  subtitle?: string;
  flag?: string;
  currency?: string;
  timezone?: string;
}

const LocationHeroSection = ({ 
  title = "Where We Serve",
  subtitle = "Discover our global presence with local expertise. We deliver cutting-edge software solutions across multiple countries, bringing world-class technology to your doorstep.",
  flag,
  currency,
  timezone
}: LocationHeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('animate-fade-in-up');
      subtitleRef.current?.classList.add('animate-fade-in-up');
      ctaRef.current?.classList.add('animate-fade-in-up');
      statsRef.current?.classList.add('animate-fade-in-up');
    }
  }, [isInView]);

  const stats = [
    {
      icon: Globe,
      number: '5+',
      label: 'Countries Served',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-24 sm:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight opacity-0 transition-all duration-1000">
            {title.includes('Where We') ? (
              <>
                Where We
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Serve</span>
              </>
            ) : (
              <>
                {title.split(' ').slice(0, -1).join(' ')}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> {title.split(' ').slice(-1)[0]}</span>
              </>
            )}
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto opacity-0 transition-all duration-1000 delay-300">
            {subtitle}
          </p>

          {/* Location Info */}
          {flag && currency && timezone && (
            <div className="flex items-center justify-center gap-6 mb-8 opacity-0 transition-all duration-1000 delay-400">
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <span className="text-3xl">{flag}</span>
                <span className="font-medium">{currency}</span>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-lg text-gray-600">
                <span className="font-medium">{timezone}</span>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 transition-all duration-1000 delay-500">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="#book-meeting" className="flex items-center gap-2">
                Book Meeting
                <Calendar className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
              <Link href="#book-meeting" className="flex items-center gap-2">
                Let's Talk
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroSection;
