'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Smartphone, Palette, TrendingUp, Cloud, Users, Building, Settings, Globe, ShoppingCart } from 'lucide-react';

const ServicesHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(iconsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.4"
      );

      // Floating animation for service icons
      gsap.to('.service-icon', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const serviceIcons = [
    { icon: Globe, color: 'from-blue-500 to-purple-500' },
    { icon: Smartphone, color: 'from-green-500 to-blue-500' },
    { icon: Code, color: 'from-purple-500 to-pink-500' },
    { icon: Palette, color: 'from-orange-500 to-red-500' },
    { icon: TrendingUp, color: 'from-teal-500 to-green-500' },
    { icon: ShoppingCart, color: 'from-indigo-500 to-purple-500' },
    { icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { icon: Users, color: 'from-pink-500 to-rose-500' },
    { icon: Building, color: 'from-yellow-500 to-orange-500' },
    { icon: Settings, color: 'from-gray-500 to-gray-700' }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-indigo-100 rounded-full opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Hero Title */}
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Software
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Solutions </span>
            for Your Business
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            From web development to mobile apps, from design to marketing - we provide end-to-end digital solutions that drive growth and innovation for businesses of all sizes.
          </p>
        </div>

        {/* Service Icons Grid */}
        <div ref={iconsRef} className="grid grid-cols-5 md:grid-cols-10 gap-6 max-w-5xl mx-auto">
          {serviceIcons.map((service, index) => (
            <div
              key={index}
              className="service-icon group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${service.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-gray-600 text-sm md:text-base">Service Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">100+</div>
            <div className="text-gray-600 text-sm md:text-base">Specialized Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">150+</div>
            <div className="text-gray-600 text-sm md:text-base">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm md:text-base">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;