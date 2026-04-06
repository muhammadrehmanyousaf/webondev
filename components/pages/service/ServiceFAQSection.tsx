'use client';

import React, { useState } from 'react';
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
    <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
      {/* Grain Texture */}

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 80% 30%, rgba(16,185,129,0.08), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-full h-1/2"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 20% 70%, rgba(6,182,212,0.06), transparent 70%)' }}
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
          >
            <HelpCircle className="w-8 h-8 text-brand-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-border-subtle text-brand-400 text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Got Questions?
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">
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
              <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                openFAQ === index
                  ? 'bg-white/[0.04] border-brand-500/20'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03]'
              } border`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200"
                  aria-label={`Toggle answer for: ${faq.question}`}
                  title={openFAQ === index ? 'Collapse answer' : 'Expand answer'}
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
                        ? 'bg-brand-500/10 text-brand-400'
                        : 'bg-white/[0.05] text-slate-400'
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
                        <div className="border-t border-white/[0.06] pt-4">
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
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.05) 100%)' }}
        >
          {/* Top Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* Decorative */}
          <div
            className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)' }}
          />

          <div className="relative z-10 p-8 lg:p-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
            >
              <MessageCircle className="w-7 h-7 text-brand-400" />
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
                type="button"
                variant="default"
                size="lg"
                className="rounded-full px-8"
                onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Our Experts
              </Button>
              <Button
                asChild
                type="button"
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white/[0.06] text-white hover:bg-white/[0.05] hover:border-brand-500/20"
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
