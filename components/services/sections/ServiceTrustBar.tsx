'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Globe, Award, Shield, Clock, TrendingUp, CheckCircle } from 'lucide-react';

// =============================================================================
// SERVICE TRUST BAR - Immediate social proof after hero
// =============================================================================

const strHash = (str: string, seed: number): number => {
  let hash = seed;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

interface ServiceTrustBarProps {
  serviceName?: string;
  city?: string;
  state?: string;
  country?: string;
}

const AnimatedNumber: React.FC<{ end: number; suffix?: string; prefix?: string; duration?: number }> = ({
  end, suffix = '', prefix = '', duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const ServiceTrustBar = ({ serviceName, city, state, country }: ServiceTrustBarProps) => {
  const locationLabel = city || state || country || '';
  const fullLocation = [city, state, country, serviceName].filter(Boolean).join(', ');
  const v = fullLocation ? strHash(fullLocation, 89) % 3 : 0;

  const statSets = [
    [
      { icon: Award, value: 500, suffix: '+', label: 'Projects Delivered', color: 'text-brand-400' },
      { icon: Star, value: 49, suffix: '/5', label: 'Client Rating', color: 'text-yellow-400', prefix: '', decimal: true },
      { icon: Users, value: 250, suffix: '+', label: 'Happy Clients', color: 'text-cyan-400' },
      { icon: Globe, value: 50, suffix: '+', label: 'Countries Served', color: 'text-purple-400' },
      { icon: Clock, value: 24, suffix: 'hr', label: 'Response Time', color: 'text-brand-400' },
    ],
    [
      { icon: CheckCircle, value: 99, suffix: '%', label: 'Client Satisfaction', color: 'text-brand-400' },
      { icon: TrendingUp, value: 3, suffix: 'x', label: 'Avg ROI Increase', color: 'text-cyan-400' },
      { icon: Award, value: 500, suffix: '+', label: 'Projects Shipped', color: 'text-yellow-400' },
      { icon: Shield, value: 30, suffix: '-day', label: 'Money-Back Guarantee', color: 'text-purple-400' },
      { icon: Users, value: 250, suffix: '+', label: 'Businesses Served', color: 'text-brand-400' },
    ],
    [
      { icon: Star, value: 49, suffix: '★', label: 'Average Rating', color: 'text-yellow-400', decimal: true },
      { icon: Globe, value: 50, suffix: '+', label: 'Countries', color: 'text-cyan-400' },
      { icon: Clock, value: 98, suffix: '%', label: 'On-Time Delivery', color: 'text-brand-400' },
      { icon: Award, value: 8, suffix: '+', label: 'Years Experience', color: 'text-purple-400' },
      { icon: TrendingUp, value: 500, suffix: '+', label: 'Products Launched', color: 'text-brand-400' },
    ],
  ];

  const stats = statSets[v];

  return (
    <section className="relative py-8 sm:py-10 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {locationLabel && (
          <motion.p
            className="text-center text-slate-500 text-xs uppercase tracking-widest mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by businesses in {locationLabel} and worldwide
          </motion.p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-2 ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-0.5`}>
                {(stat as any).decimal ? (
                  <span>{(stat as any).prefix || ''}{Math.floor(stat.value / 10)}.{stat.value % 10}{stat.suffix}</span>
                ) : (
                  <AnimatedNumber end={stat.value} suffix={stat.suffix} prefix={(stat as any).prefix || ''} />
                )}
              </div>
              <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTrustBar;
