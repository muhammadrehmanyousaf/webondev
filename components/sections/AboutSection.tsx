'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Award,
  Lightbulb,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Code2,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// =============================================================================
// DATA
// =============================================================================

const features = [
  { icon: Code2, text: 'Expert Development Team' },
  { icon: Zap, text: 'Agile Development Process' },
  { icon: Shield, text: 'Quality Assurance & Testing' },
  { icon: Clock, text: '24/7 Support & Maintenance' },
  { icon: Rocket, text: 'Scalable & Secure Solutions' },
  { icon: CheckCircle, text: 'On-Time Project Delivery' },
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Delivering exceptional software solutions that transform businesses and drive growth.',
    gradient: 'from-brand-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build long-term partnerships with our clients.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in code quality, design, and project delivery.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies to create innovative digital solutions.',
    gradient: 'from-purple-500 to-brand-500',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed', gradient: 'from-brand-400 to-teal-400' },
  { value: '50+', label: 'Team Members', gradient: 'from-teal-400 to-cyan-400' },
  { value: '5+', label: 'Years Experience', gradient: 'from-cyan-400 to-brand-400' },
];

// =============================================================================
// COMPONENT
// =============================================================================

const AboutSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-slate-50/50 to-background dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>About Us</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Digital Excellence
              <span className="block bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Since 2019
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a full-service software development agency specializing in creating powerful digital solutions
              that help businesses thrive in the modern digital landscape. Our team of expert developers, designers,
              and strategists work together to deliver exceptional results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/20 dark:border-white/5 hover:border-brand-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500/20 to-teal-500/20 flex items-center justify-center group-hover:from-brand-500/30 group-hover:to-teal-500/30 transition-colors">
                    <feature.icon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="glow" size="lg" className="rounded-full group">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl transform rotate-3 blur-sm" />

            {/* Main Card */}
            <motion.div
              className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20 dark:border-white/10"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Development Team"
                className="w-full h-72 lg:h-80 object-cover rounded-2xl"
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-xl border border-white/20 dark:border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/25">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">Award Winning</div>
                    <div className="text-sm text-muted-foreground">Development Team</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white dark:bg-slate-900 rounded-xl p-4 shadow-xl border border-white/20 dark:border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Available 24/7</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="bg-gradient-to-r from-brand-500 to-teal-500 bg-clip-text text-transparent">Values</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 dark:border-white/5 hover:border-brand-500/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient}
                  flex items-center justify-center shadow-lg shadow-brand-500/20 mb-6
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                `}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-500/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
