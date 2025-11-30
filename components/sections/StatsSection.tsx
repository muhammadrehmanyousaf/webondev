'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Users, Award, Clock, Globe, Code, Smartphone, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
    countries: 0,
    technologies: 0,
    apps: 0,
    support: 0
  });

  const stats = [
    {
      icon: Award,
      number: 150,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-purple-500',
      key: 'projects'
    },
    {
      icon: Users,
      number: 150,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-green-500 to-blue-500',
      key: 'clients'
    },
    {
      icon: Clock,
      number: 5,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500',
      key: 'experience'
    },
    {
      icon: TrendingUp,
      number: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-orange-500 to-red-500',
      key: 'satisfaction'
    },
    {
      icon: Globe,
      number: 5,
      suffix: '+',
      label: 'Countries Served',
      color: 'from-teal-500 to-green-500',
      key: 'countries'
    },
    {
      icon: Code,
      number: 50,
      suffix: '+',
      label: 'Technologies',
      color: 'from-indigo-500 to-purple-500',
      key: 'technologies'
    },
    {
      icon: Smartphone,
      number: 50,
      suffix: '+',
      label: 'Mobile Apps',
      color: 'from-pink-500 to-rose-500',
      key: 'apps'
    },
    {
      icon: Zap,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      color: 'from-yellow-500 to-orange-500',
      key: 'support'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          stats.forEach((stat, index) => {
            gsap.to(animatedNumbers, {
              duration: 2,
              delay: index * 0.1,
              [stat.key]: stat.number,
              ease: "power2.out",
              onUpdate: function() {
                setAnimatedNumbers({...this.targets()[0]});
              }
            });
          });
        }
      });

      // Card animations
      gsap.fromTo('.stat-card', 
        { 
          opacity: 0, 
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden animate-on-scroll">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We've helped businesses across the globe achieve their digital transformation goals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/20"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {Math.floor(animatedNumbers[stat.key as keyof typeof animatedNumbers])}{stat.suffix}
              </div>

              {/* Label */}
              <div className="text-gray-300 font-medium text-lg">
                {stat.label}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our comprehensive software solutions. 
            From startups to enterprise companies, we deliver results that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;