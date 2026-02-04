'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  Sparkles,
  MessageSquare
} from 'lucide-react';
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
          popular: false
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
          popular: true
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
          popular: false
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
          popular: false
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
          popular: true
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
          popular: false
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
        popular: false
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
        popular: true
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
        popular: false
      }
    ];
  };

  const pricingTiers = getPricingTiers();

  return (
    <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
      {/* Grain Texture */}
      <div className="grain absolute inset-0" />

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 10% 30%, rgba(16,185,129,0.08), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 90% 70%, rgba(6,182,212,0.06), transparent 70%)' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Transparent Pricing
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{currentService.title} </span>
            <span className="gradient-text">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your {currentService.title.toLowerCase()} needs. All plans include our quality guarantee and ongoing support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative group ${tier.popular ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              <div className={`relative h-full bg-white/[0.02] rounded-xl sm:rounded-2xl p-8 border ${tier.popular ? 'border-brand-500/30' : 'border-white/[0.06]'} hover:border-brand-500/20 transition-all duration-300`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div
                      className="text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.9), rgba(6,182,212,0.9))' }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                    {tier.price}
                  </div>
                  <p className="text-slate-400 leading-relaxed">{tier.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  type="button"
                  className={`w-full ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] text-white border border-white/[0.06] hover:border-brand-500/20'
                  } font-bold py-6 rounded-xl transition-all duration-300`}
                  onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality' },
            { icon: Shield, title: 'Quality Assured', desc: '100% satisfaction guarantee with rigorous testing' },
            { icon: Zap, title: 'Ongoing Support', desc: 'Continuous support and maintenance included' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="text-center p-6 bg-white/[0.02] rounded-xl sm:rounded-2xl border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
              >
                <item.icon className="w-7 h-7 text-brand-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}
        >
          {/* Top Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Decorative */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)' }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)' }}
          />

          <div className="relative z-10 p-8 lg:p-12">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-4"
              >
                <MessageSquare className="w-4 h-4" />
                Custom Solutions
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Every business is unique. If our standard packages don't fit your needs, we'll create a custom solution tailored specifically for your requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { value: 'Free', label: 'Consultation', desc: 'Detailed project analysis' },
                { value: '24h', label: 'Response Time', desc: 'Quick project quotes' },
                { value: '100%', label: 'Satisfaction', desc: 'Quality guarantee' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                type="button"
                size="lg"
                className="bg-white text-brand-600 hover:bg-white/90 rounded-full px-8 font-bold shadow-xl"
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricingSection;
