'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

interface ServicePricingSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServicePricingSection = ({ pillar, cluster }: ServicePricingSectionProps) => {
  const currentService = cluster || pillar;

  // Dynamic pricing based on service type
  const getPricingTiers = () => {
    const serviceType = cluster?.slug || pillar.slug;
    
    if (serviceType.includes('mobile') || serviceType.includes('app')) {
      return [
        {
          name: 'Basic App',
          price: 'From $8,999',
          description: `Simple ${currentService.title.toLowerCase()} with essential features.`,
          features: [
            'Single Platform (iOS or Android)',
            'Basic UI/UX Design',
            'Core Functionality',
            '3 Months Support',
            'App Store Submission',
            'Basic Analytics'
          ],
          popular: false,
          color: 'from-blue-500 to-purple-500'
        },
        {
          name: 'Professional App',
          price: 'From $18,999',
          description: `Advanced ${currentService.title.toLowerCase()} with premium features.`,
          features: [
            'Cross-Platform (iOS & Android)',
            'Custom UI/UX Design',
            'Advanced Features',
            '6 Months Support',
            'App Store Optimization',
            'Push Notifications',
            'Analytics Dashboard',
            'API Integration'
          ],
          popular: true,
          color: 'from-green-500 to-blue-500'
        },
        {
          name: 'Enterprise App',
          price: 'Custom Quote',
          description: `Enterprise-grade ${currentService.title.toLowerCase()} solution.`,
          features: [
            'Multi-Platform Development',
            'Enterprise Design System',
            'Complex Integrations',
            '1 Year Support',
            'Advanced Security',
            'Custom Backend',
            'Admin Dashboard',
            'Priority Support',
            'Dedicated Team',
            'Compliance Features'
          ],
          popular: false,
          color: 'from-purple-500 to-pink-500'
        }
      ];
    }

    if (serviceType.includes('ecommerce') || serviceType.includes('shopify') || serviceType.includes('woocommerce')) {
      return [
        {
          name: 'Starter Store',
          price: 'From $4,999',
          description: `Basic ${currentService.title.toLowerCase()} to get you started.`,
          features: [
            'Up to 100 Products',
            'Responsive Design',
            'Payment Gateway',
            '3 Months Support',
            'Basic SEO Setup',
            'SSL Certificate'
          ],
          popular: false,
          color: 'from-blue-500 to-purple-500'
        },
        {
          name: 'Professional Store',
          price: 'From $12,999',
          description: `Complete ${currentService.title.toLowerCase()} with advanced features.`,
          features: [
            'Unlimited Products',
            'Custom Design',
            'Multiple Payment Options',
            '6 Months Support',
            'Advanced SEO',
            'Inventory Management',
            'Analytics Integration',
            'Email Marketing Setup'
          ],
          popular: true,
          color: 'from-green-500 to-blue-500'
        },
        {
          name: 'Enterprise Store',
          price: 'Custom Quote',
          description: `Large-scale ${currentService.title.toLowerCase()} solution.`,
          features: [
            'Multi-store Setup',
            'Enterprise Features',
            'Custom Integrations',
            '1 Year Support',
            'Advanced Analytics',
            'Multi-currency Support',
            'B2B Features',
            'Priority Support',
            'Dedicated Manager',
            'Performance Optimization'
          ],
          popular: false,
          color: 'from-purple-500 to-pink-500'
        }
      ];
    }

    // Default pricing for other services
    return [
      {
        name: 'Starter',
        price: 'From $2,999',
        description: `Perfect for small businesses looking to get started with ${currentService.title.toLowerCase()}.`,
        features: [
          'Basic Implementation',
          'Standard Design',
          'Essential Features',
          '30 Days Support',
          'Documentation',
          'Basic Training'
        ],
        popular: false,
        color: 'from-blue-500 to-purple-500'
      },
      {
        name: 'Professional',
        price: 'From $7,999',
        description: `Comprehensive ${currentService.title.toLowerCase()} solution for growing businesses.`,
        features: [
          'Advanced Implementation',
          'Custom Design',
          'Premium Features',
          '90 Days Support',
          'Complete Documentation',
          'Team Training',
          'Performance Optimization',
          'Security Hardening'
        ],
        popular: true,
        color: 'from-green-500 to-blue-500'
      },
      {
        name: 'Enterprise',
        price: 'Custom Quote',
        description: `Enterprise-grade ${currentService.title.toLowerCase()} with full customization and support.`,
        features: [
          'Full Custom Development',
          'Enterprise Design System',
          'All Premium Features',
          '1 Year Support',
          'Technical Documentation',
          'Dedicated Training Program',
          'Performance Monitoring',
          'Priority Support',
          'Custom Integrations',
          'Dedicated Account Manager'
        ],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      }
    ];
  };

  const pricingTiers = getPricingTiers();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentService.title}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your {currentService.title.toLowerCase()} needs. All plans include our quality guarantee and ongoing support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                tier.popular ? 'scale-105 border-blue-200 shadow-xl ring-2 ring-blue-100' : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{tier.price}</div>
                <p className="text-gray-600 leading-relaxed">{tier.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                } text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Quick turnaround times without compromising quality</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600 text-sm">100% satisfaction guarantee with rigorous testing</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Support</h3>
            <p className="text-gray-600 text-sm">Continuous support and maintenance included</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every business is unique. If our standard packages don't fit your needs, we'll create a custom solution tailored specifically for your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-gray-700 font-medium mb-1">Consultation</div>
              <div className="text-gray-600 text-sm">Detailed project analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-700 font-medium mb-1">Response Time</div>
              <div className="text-gray-600 text-sm">Quick project quotes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium mb-1">Satisfaction</div>
              <div className="text-gray-600 text-sm">Quality guarantee</div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/contact" className="flex items-center gap-2">
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricingSection;