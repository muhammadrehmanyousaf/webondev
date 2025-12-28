'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';

const ContactHeroSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers',
      action: 'Start Chat',
      gradient: 'from-brand-400 to-teal-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our experts',
      action: '+92-310-6803687',
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send your requirements',
      action: 'webondev786@gmail.com',
      gradient: 'from-cyan-400 to-brand-400'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock help',
      action: 'Get Support',
      gradient: 'from-brand-400 to-emerald-400'
    }
  ];

  const stats = [
    { value: '< 24h', label: 'Response Time' },
    { value: 'Free', label: 'Consultation' },
    { value: '500+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Animated Background Elements - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-500/20 rounded-full blur-[100px] sm:blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-teal-500/20 rounded-full blur-[100px] sm:blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-400" />
            <span className="text-brand-400 text-xs sm:text-sm font-medium">Let&apos;s Connect</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Let&apos;s Build Something
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Amazing </span>
            Together
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
          >
            Ready to transform your business? Get in touch with our experts for a free consultation.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500 h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${method.gradient} rounded-lg sm:rounded-xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-brand-400 transition-colors">
                  {method.title}
                </h3>

                <p className="text-slate-400 mb-2 sm:mb-4 text-xs sm:text-sm leading-relaxed hidden sm:block">
                  {method.description}
                </p>

                <div className="flex items-center gap-1 sm:gap-2 text-brand-400 font-semibold text-xs sm:text-sm group-hover:text-brand-300 transition-colors">
                  <span className="truncate">{method.action}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-xl opacity-50" />
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-[10px] sm:text-xs lg:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
