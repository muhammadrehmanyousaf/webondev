'use client';

import React from 'react';
import { TrendingUp, Users, Award, Clock, Globe, Code, Smartphone, Zap } from 'lucide-react';

const PortfolioStatsSection = () => {
  const stats = [
    {
      icon: Award,
      number: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered across all categories',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      number: '5+',
      label: 'Countries Served',
      description: 'Global reach and impact',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: 'Success Rate',
      description: 'Projects delivered on time and budget',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      number: '98%',
      label: 'On-Time Delivery',
      description: 'Consistent project timeline adherence',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Code,
      number: '50+',
      label: 'Technologies',
      description: 'Diverse tech stack expertise',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: Smartphone,
      number: '50+',
      label: 'Mobile Apps',
      description: 'iOS and Android applications',
      color: 'from-orange-300 to-orange-400'
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const testimonials = [
    {
      quote: "SoftwareAgency delivered our e-commerce platform ahead of schedule. The results exceeded our expectations with a 300% increase in sales.",
      author: "Sarah Johnson",
      position: "CEO, RetailCorp",
      avatar: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "The mobile app they developed for our healthcare platform has been a game-changer. User engagement increased by 250%.",
      author: "Dr. Michael Chen",
      position: "CTO, HealthTech Solutions",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "Their analytics dashboard transformed how we make business decisions. The insights are invaluable and the interface is beautiful.",
      author: "Emily Rodriguez",
      position: "VP Analytics, DataInsights Inc",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our portfolio speaks for itself. Here are the numbers that showcase our commitment to excellence and client success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                What Our Clients Say
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-gray-300 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Industry Recognition
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStatsSection;