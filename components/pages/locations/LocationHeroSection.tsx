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
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: MapPin,
      number: '20+',
      label: 'Cities Covered',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Satisfaction Rate',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={heroRef} className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-orange-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-float-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[70vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight opacity-0 transition-all duration-1000">
            {title.includes('Where We') ? (
              <>
                Where We
                <span className=""> Serve</span>
              </>
            ) : (
              <>
                {title.split(' ').slice(0, -1).join(' ')}
                <span className=""> {title.split(' ').slice(-1)[0]}</span>
              </>
            )}
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto opacity-0 transition-all duration-1000 delay-300 font-medium">
            {subtitle}
          </p>

          {/* Location Info */}
          {flag && currency && timezone && (
            <div className="flex items-center justify-center gap-8 mb-12 opacity-0 transition-all duration-1000 delay-400">
              <div className="flex items-center gap-3 text-lg">
                <span className="text-4xl">{flag}</span>
                <span className="font-bold text-gray-900">{currency}</span>
              </div>
              <div className="w-px h-8 bg-orange-300"></div>
              <div className="text-lg">
                <span className="font-bold text-gray-900">{timezone}</span>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 transition-all duration-1000 delay-500">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-2xl hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300 font-bold">
              <Link href="#book-meeting" className="flex items-center gap-3">
                Book Meeting
                <Calendar className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 text-lg px-10 py-5 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
              <Link href="#book-meeting" className="flex items-center gap-3">
                Let's Talk
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-0 transition-all duration-1000 delay-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-orange-500/50`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:from-orange-700 group-hover:to-orange-600 transition-all">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroSection;

