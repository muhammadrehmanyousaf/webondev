'use client';

import React from 'react';
import Link from 'next/link';
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
          popular: false,
          gradient: 'from-slate-600 to-slate-700',
          borderGradient: 'from-slate-500 to-slate-600'
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
          gradient: 'from-brand-500 to-teal-500',
          borderGradient: 'from-brand-500 to-teal-500'
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
          gradient: 'from-purple-500 to-pink-500',
          borderGradient: 'from-purple-500 to-pink-500'
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
          gradient: 'from-slate-600 to-slate-700',
          borderGradient: 'from-slate-500 to-slate-600'
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
          gradient: 'from-brand-500 to-teal-500',
          borderGradient: 'from-brand-500 to-teal-500'
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
          gradient: 'from-purple-500 to-pink-500',
          borderGradient: 'from-purple-500 to-pink-500'
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
        gradient: 'from-slate-600 to-slate-700',
        borderGradient: 'from-slate-500 to-slate-600'
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
        gradient: 'from-brand-500 to-teal-500',
        borderGradient: 'from-brand-500 to-teal-500'
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
        gradient: 'from-purple-500 to-pink-500',
        borderGradient: 'from-purple-500 to-pink-500'
      }
    ];
  };

  const pricingTiers = getPricingTiers();

  return (
    <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.08, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Transparent Pricing
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{currentService.title} </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
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
              whileHover={{ y: tier.popular ? 0 : -8 }}
              className={`relative group ${tier.popular ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tier.borderGradient} rounded-3xl blur ${tier.popular ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'} transition-all duration-500`} />

              <div className={`relative h-full bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border ${tier.popular ? 'border-brand-500/50' : 'border-white/10'} transition-all duration-500`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-brand-500/25">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-4`}>
                    {tier.price}
                  </div>
                  <p className="text-slate-400 leading-relaxed">{tier.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.gradient} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white shadow-lg shadow-brand-500/25'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  } font-bold py-6 rounded-xl transition-all duration-300`}
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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
            { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising quality', gradient: 'from-brand-500 to-teal-500' },
            { icon: Shield, title: 'Quality Assured', desc: '100% satisfaction guarantee with rigorous testing', gradient: 'from-teal-500 to-cyan-500' },
            { icon: Zap, title: 'Ongoing Support', desc: 'Continuous support and maintenance included', gradient: 'from-cyan-500 to-blue-500' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
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
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/90 via-teal-600/90 to-cyan-600/90" />
          <div className="absolute inset-0 bg-slate-900/30" />

          {/* Decorative */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 lg:p-12">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4"
              >
                <MessageSquare className="w-4 h-4" />
                Custom Solutions
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
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
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-white/90 rounded-full px-8 font-bold shadow-xl">
                <Link href="/contact" className="flex items-center gap-2">
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricingSection;
