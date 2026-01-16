'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Crown,
  HelpCircle
} from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
  tooltip?: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  billingPeriod?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  icon?: 'star' | 'zap' | 'crown';
}

interface ServicePricingProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  plans?: PricingPlan[];
  showComparison?: boolean;
  customNote?: string;
}

const iconComponents = {
  star: Star,
  zap: Zap,
  crown: Crown,
};

const ServicePricing: React.FC<ServicePricingProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Transparent Pricing',
    sectionSubtitle: propSubtitle = 'Choose the plan that fits your needs. No hidden fees, no surprises.',
    plans: propPlans,
    showComparison = false,
    customNote: propCustomNote = 'All plans include free consultation, project management, and 30-day support after delivery.',
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const plans = data?.pricing?.plans || propPlans || [];
  const customNote = data?.pricing?.customNote || propCustomNote;

  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Pricing Plans
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className={`grid gap-6 md:gap-8 ${plans.length === 3 ? 'lg:grid-cols-3' : plans.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-4'}`}>
          {plans.map((plan, index) => {
            const planIcon = (plan as any).icon as keyof typeof iconComponents | undefined;
            const IconComponent = planIcon ? iconComponents[planIcon] : Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Highlighted glow */}
                {plan.highlighted && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-3xl blur-xl" />
                )}

                {/* Card */}
                <div className={`relative h-full flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-slate-900 border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                    : 'bg-slate-900/50 border-slate-700/50 hover:border-emerald-500/30'
                }`}>
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6 pt-2">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      plan.highlighted
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-800 border border-slate-700'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-emerald-400'}`} />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 pb-6 border-b border-slate-700/50">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.billingPeriod && (
                        <span className="text-gray-500 text-sm">
                          /{plan.billingPeriod}
                        </span>
                      )}
                    </div>
                    {plan.priceNote && (
                      <p className="text-sm text-gray-500 mt-2">
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature.name}
                          </span>
                          {feature.tooltip && (
                            <div className="relative">
                              <button
                                type="button"
                                title="More information"
                                aria-label="More information about this feature"
                                onMouseEnter={() => setHoveredTooltip(`${index}-${fIndex}`)}
                                onMouseLeave={() => setHoveredTooltip(null)}
                                className="text-gray-500 hover:text-gray-400"
                              >
                                <HelpCircle className="w-4 h-4" />
                              </button>
                              {hoveredTooltip === `${index}-${fIndex}` && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 rounded-lg text-xs text-gray-300 w-48 shadow-xl z-10">
                                  {feature.tooltip}
                                </div>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={(plan as any).ctaLink || '#contact'}
                    className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {plan.ctaText || 'Get Started'}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Note */}
        {customNote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto"
          >
            {customNote}
          </motion.p>
        )}

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">
                Need a custom solution?
              </h4>
              <p className="text-sm text-gray-400">
                Let's discuss your specific requirements
              </p>
            </div>
            <a
              href="#contact"
              className="btn-secondary whitespace-nowrap"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;
