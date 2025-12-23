'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';

const ContactHeroSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      action: 'Start Chat',
      gradient: 'from-brand-400 to-teal-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: '+92 310 6803687',
      gradient: 'from-teal-400 to-cyan-400'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      action: 'muhammadrehmanyousaf786@gmail.com',
      gradient: 'from-cyan-400 to-brand-400'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
      action: 'Get Support',
      gradient: 'from-brand-400 to-emerald-400'
    }
  ];

  const stats = [
    { value: '< 24h', label: 'Response Time' },
    { value: 'Free', label: 'Consultation' },
    { value: '150+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[150px]"
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
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[150px]"
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
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-brand-400 text-sm font-medium">Let's Connect</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let's Build Something
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Amazing </span>
            Together
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Ready to transform your business with cutting-edge software solutions? Get in touch with our experts for a free consultation and discover how we can help you achieve your goals.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-500/30 transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {method.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {method.description}
                </p>

                <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm group-hover:text-brand-300 transition-colors">
                  <span className="truncate">{method.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50" />
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
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
