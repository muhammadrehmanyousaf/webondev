'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PillarPage, ClusterPage } from '@/lib/site-structure';

interface ServiceFAQSectionProps {
  pillar: PillarPage;
  cluster?: ClusterPage;
}

const ServiceFAQSection = ({ pillar, cluster }: ServiceFAQSectionProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const currentService = cluster || pillar;

  const faqs = [
    {
      question: `How long does a typical ${currentService.title.toLowerCase()} project take?`,
      answer: `Project timelines vary based on complexity and requirements. A basic ${currentService.title.toLowerCase()} project typically takes 2-4 weeks, while more complex solutions can take 2-6 months. We provide detailed timelines during our initial consultation.`
    },
    {
      question: `What technologies do you use for ${currentService.title.toLowerCase()}?`,
      answer: `We use cutting-edge technologies and frameworks best suited for your project. Our tech stack includes modern tools and platforms that ensure scalability, security, and performance. We'll recommend the best technology stack during our consultation.`
    },
    {
      question: `Do you provide ongoing support after project completion?`,
      answer: `Yes, we offer comprehensive post-launch support including bug fixes, updates, security patches, and feature enhancements. Our support packages range from basic maintenance to full-service ongoing development.`
    },
    {
      question: `Can you work with our existing team and systems?`,
      answer: `Absolutely! We excel at integrating with existing teams and systems. We can work alongside your in-house developers, integrate with your current infrastructure, and ensure seamless collaboration throughout the project.`
    },
    {
      question: `What is your development process for ${currentService.title.toLowerCase()}?`,
      answer: `We follow an agile development methodology with regular sprints, daily standups, and continuous client communication. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support.`
    },
    {
      question: `How do you ensure the quality of your ${currentService.title.toLowerCase()}?`,
      answer: `We maintain high quality through rigorous testing, code reviews, security audits, and performance optimization. Our QA process includes automated testing, manual testing, and user acceptance testing before deployment.`
    },
    {
      question: `What are your payment terms and pricing structure?`,
      answer: `We offer flexible payment terms typically structured as milestone-based payments: 30% upfront, 40% at mid-project milestone, and 30% upon completion. For larger projects, we can arrange custom payment schedules.`
    },
    {
      question: `Do you sign NDAs and protect intellectual property?`,
      answer: `Yes, we take intellectual property protection very seriously. We sign NDAs before any project discussion and ensure all your code, designs, and business information remain completely confidential. All IP rights belong to you upon project completion.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.1, 0.15] }}
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-500 to-teal-500 rounded-2xl mb-6 shadow-lg shadow-brand-500/25"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Got Questions?
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get answers to common questions about our {currentService.title.toLowerCase()} services and development process.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                openFAQ === index
                  ? 'bg-white/10 border-brand-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.07]'
              } border backdrop-blur-xl`}>
                {/* Glow on open */}
                {openFAQ === index && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-20" />
                )}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                    openFAQ === index ? 'text-brand-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      openFAQ === index
                        ? 'bg-brand-500/20 text-brand-400'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="relative px-6 pb-5">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-800/90 to-slate-800/90" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />

          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 lg:p-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-500 to-teal-500 rounded-xl mb-6 shadow-lg shadow-brand-500/25"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
              Get in touch and we'll respond within 2 hours during business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="glow"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Our Experts
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
              >
                <a href="tel:+15551234567" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
