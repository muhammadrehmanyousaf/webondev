'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Megaphone,
  Palette,
  Cloud,
  Shield,
  Layers,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// WORLD-CLASS SERVICES SECTION - Professional Image-Centric Design
// =============================================================================

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Dev',
    description: 'Enterprise-grade web applications with Next.js, React, and Node.js. Lightning-fast performance meets pixel-perfect design.',
    longDescription: 'We build scalable, high-performance web applications that drive business growth. From startup MVPs to enterprise platforms.',
    icon: Code2,
    href: '/web-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    features: ['Next.js 15', 'React', 'Node.js', 'TypeScript'],
    stats: { projects: '150+', satisfaction: '99%' },
    featured: true,
    color: 'brand',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description: 'Native & cross-platform apps for iOS and Android that users love and businesses trust.',
    longDescription: 'From concept to App Store, we create mobile experiences that engage users and drive revenue.',
    icon: Smartphone,
    href: '/mobile-development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    stats: { apps: '80+', downloads: '5M+' },
    featured: true,
    color: 'cyan',
  },
  {
    id: 'seo',
    title: 'SEO & Growth Marketing',
    shortTitle: 'SEO',
    description: 'Data-driven strategies that dominate search rankings and drive exponential organic growth.',
    longDescription: 'Technical SEO, content strategy, and link building that delivers measurable results.',
    icon: Search,
    href: '/digital-marketing/search-engine-optimization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: ['Technical SEO', 'Content Strategy', 'Analytics'],
    stats: { growth: '300%', keywords: '500+' },
    featured: true,
    color: 'teal',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    shortTitle: 'E-commerce',
    description: 'High-converting online stores that scale with your business growth.',
    icon: ShoppingCart,
    href: '/ecommerce-solutions',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    features: ['Shopify', 'WooCommerce', 'Custom'],
    color: 'lime',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Marketing',
    description: 'Full-funnel strategies that turn visitors into loyal customers.',
    icon: Megaphone,
    href: '/digital-marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
    features: ['PPC', 'Social Media', 'Email'],
    color: 'purple',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortTitle: 'Design',
    description: 'Award-winning designs that elevate user experience.',
    icon: Palette,
    href: '/ui-ux-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    features: ['UI Design', 'UX Research', 'Prototyping'],
    color: 'pink',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud',
    description: 'Scalable infrastructure that grows with your needs.',
    icon: Cloud,
    href: '/cloud-devops',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    features: ['AWS', 'Azure', 'CI/CD'],
    color: 'blue',
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    shortTitle: 'Support',
    description: '24/7 monitoring and maintenance for peace of mind.',
    icon: Shield,
    href: '/maintenance-support',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    features: ['24/7 Support', 'Security', 'Updates'],
    color: 'amber',
  },
];

const colorMap: Record<string, { gradient: string; glow: string; text: string; bg: string }> = {
  brand: {
    gradient: 'from-brand-500 to-teal-500',
    glow: 'shadow-brand-500/25',
    text: 'text-brand-400',
    bg: 'bg-brand-500/10',
  },
  teal: {
    gradient: 'from-teal-500 to-cyan-500',
    glow: 'shadow-teal-500/25',
    text: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
  cyan: {
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  lime: {
    gradient: 'from-lime-500 to-brand-500',
    glow: 'shadow-lime-500/25',
    text: 'text-lime-400',
    bg: 'bg-lime-500/10',
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  pink: {
    gradient: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/25',
    text: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  blue: {
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'shadow-blue-500/25',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  amber: {
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/25',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
};

// =============================================================================
// FEATURED SERVICE CARD - Large Hero Card with Image
// =============================================================================

const FeaturedServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const colors = colorMap[service.color];
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <Link href={service.href} className="block">
      <motion.div
        className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        onMouseMove={handleMouseMove}
      >
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />

        {/* Card Container */}
        <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
          {/* Image Section */}
          <div className="relative h-64 lg:h-72 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            {/* Spotlight Effect */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 70%)`,
              }}
            />

            {/* Badge */}
            <div className="absolute top-4 left-4">
              <motion.div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold shadow-lg ${colors.glow}`}
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-3 h-3" />
                Popular Service
              </motion.div>
            </div>

            {/* Icon Float */}
            <motion.div
              className={`absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${colors.glow}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8">
            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-5 line-clamp-2">
              {service.longDescription || service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className={`px-3 py-1 ${colors.bg} border border-white/10 rounded-lg text-xs font-medium ${colors.text}`}
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats */}
            {service.stats && (
              <div className="flex gap-6 mb-6 pt-5 border-t border-white/10">
                {Object.entries(service.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-slate-400 text-sm capitalize">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div
              className="inline-flex items-center gap-2 text-brand-400 font-bold group-hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Explore Service
              <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// =============================================================================
// COMPACT SERVICE CARD - Smaller Cards with Image
// =============================================================================

const CompactServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const colors = colorMap[service.color];
  const Icon = service.icon;

  return (
    <Link href={service.href} className="block">
      <motion.div
        className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        whileHover={{ y: -8 }}
      >
        {/* Glow */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`} />

        {/* Card */}
        <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
          {/* Image */}
          <div className="relative h-40 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

            {/* Icon */}
            <motion.div
              className={`absolute bottom-3 right-3 w-10 h-10 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg ${colors.glow}`}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
              {service.shortTitle}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {service.description}
            </p>

            {/* Features Preview */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-slate-400"
                >
                  {feature}
                </span>
              ))}
              {service.features.length > 2 && (
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-slate-500">
                  +{service.features.length - 2}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Learn More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

const ServicesBento = () => {
  const featuredServices = services.filter(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <section className="relative py-24 lg:py-36 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-brand-500/15 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-teal-500/15 rounded-full blur-[150px]"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Layers className="w-4 h-4" />
            <span>What We Offer</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Services that </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end digital solutions that transform businesses and drive measurable growth.
          </p>
        </motion.div>

        {/* Featured Services Grid - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredServices.map((service, idx) => (
            <FeaturedServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Other Services Grid - Compact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">More Services</h3>
            <Link
              href="/services"
              className="text-brand-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {otherServices.map((service, idx) => (
              <CompactServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/90 via-teal-600/90 to-cyan-600/90" />
          <div className="absolute inset-0 bg-slate-900/40" />

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
              {[
                { value: '250+', label: 'Projects Delivered' },
                { value: '50+', label: 'Team Members' },
                { value: '15+', label: 'Countries Served' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm lg:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-600 hover:bg-white/90 rounded-full px-8 font-bold shadow-xl"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
