'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Zap, Shield, Clock, Users, Award, Globe, HeartHandshake, ArrowRight, Star } from 'lucide-react';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

interface ServiceFeaturesSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServiceFeaturesSection = ({ pillar, cluster }: ServiceFeaturesSectionProps) => {
  const currentService = cluster || pillar;
  
  const defaultFeatures = [
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid development cycles with agile methodology for quick time-to-market.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability built into every solution.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent project delivery within agreed timelines and budgets.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in modern technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure excellence.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and handle increasing demands.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: '24/7 support and maintenance to keep your solutions running smoothly.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: CheckCircle,
      title: 'Best Practices',
      description: 'Following industry standards and best practices for optimal results.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent"> {currentService.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional {currentService.title.toLowerCase()} with a focus on quality, innovation, and client success.
          </p>
        </div>

        {/* Service-Specific Features */}
        {cluster && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {cluster.title} Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cluster.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{feature}</h4>
                  <p className="text-gray-600 text-sm">
                    Professional {feature.toLowerCase()} implementation with industry best practices.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* General Features */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Service Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {defaultFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services (for pillar pages) */}
        {!cluster && pillar.clusters.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Specialized {pillar.title}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of specialized services within {pillar.title.toLowerCase()}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.clusters.slice(0, 9).map((service, index) => (
                <Link
                  key={index}
                  href={`/${pillar.slug}/${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-orange-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack (for cluster pages) */}
        {cluster && (
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h3>
              <p className="text-gray-600">
                We leverage the latest technologies and frameworks for {cluster.title.toLowerCase()}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Technology examples based on service type */}
              {cluster.slug.includes('react') && ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest'].map((tech, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
              
              {cluster.slug.includes('mobile') && ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'].map((tech, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
              
              {!cluster.slug.includes('react') && !cluster.slug.includes('mobile') && ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
