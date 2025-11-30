'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const ContactHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      .fromTo(cardsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      action: 'Start Chat',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
              action: '+92 310 6803687',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      action: 'muhammadrehmanyousaf786 \n      @gmail.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
      action: 'Get Support',
      color: 'from-orange-500 to-red-500'
    }
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
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Amazing </span>
            Together
          </h1>

          {/* Hero Subtitle */}
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software solutions? Get in touch with our experts for a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        {/* Contact Methods */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {method.description}
              </p>
              
              <div className="text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                {method.action}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{'< 24h'}</div>
            <div className="text-gray-600 text-sm">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">Free</div>
            <div className="text-gray-600 text-sm">Consultation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">150+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;