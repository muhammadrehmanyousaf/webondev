'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FAQSchema } from '@/components/seo/SchemaScript';
import type { FAQItem } from '@/lib/schema';

// =============================================================================
// FAQ DATA
// =============================================================================

const homeFAQs: FAQItem[] = [
  {
    question: 'What services does Web On Dev offer?',
    answer:
      'Web On Dev provides comprehensive digital solutions including custom web development, mobile app development, e-commerce solutions, SEO optimization, digital marketing, and UI/UX design. We specialize in building scalable, high-performance applications using modern technologies like Next.js, React, and Node.js.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Project timelines vary based on complexity. A simple business website typically takes 4-6 weeks, while complex web applications can take 12-16 weeks or more. We provide detailed project timelines after understanding your requirements during our initial consultation.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile development methodology with four main phases: Discovery & Planning (understanding your needs), Design & Prototyping (creating wireframes and mockups), Development & Testing (building and quality assurance), and Launch & Support (deployment and ongoing maintenance).',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, content updates, and feature enhancements. Our support packages range from basic maintenance to full-service management depending on your needs.',
  },
  {
    question: 'How much does a custom website cost?',
    answer:
      'Pricing depends on project scope, features, and complexity. Basic websites start from $5,000, business websites range from $10,000-$25,000, and enterprise solutions can exceed $50,000. We provide detailed quotes after our discovery call to ensure accurate pricing for your specific requirements.',
  },
];

// =============================================================================
// FAQ ITEM COMPONENT
// =============================================================================

interface FAQItemProps {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ faq, index, isOpen, onToggle }: FAQItemProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 ${isOpen ? 'opacity-20' : 'group-hover:opacity-10'} transition-opacity duration-500`} />

      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-500 overflow-hidden">
        <button
          type="button"
          onClick={onToggle}
          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-brand-500/5 transition-colors duration-300"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? 'bg-gradient-to-br from-brand-500 to-teal-500' : 'bg-brand-500/10'} transition-all duration-300`}
            >
              <HelpCircle className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-brand-400'}`} />
            </motion.div>
            <span className={`text-lg font-semibold ${isOpen ? 'text-brand-400' : 'text-white'} transition-colors duration-300`}>
              {faq.question}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${isOpen ? 'bg-brand-500/20' : 'bg-white/5'} transition-colors duration-300`}
          >
            <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-brand-400' : 'text-slate-400'}`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-white/10 pt-4 ml-14">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// =============================================================================
// MAIN FAQ SECTION COMPONENT
// =============================================================================

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  showSchema?: boolean;
  showCTA?: boolean;
}

const FAQSection = ({
  faqs = homeFAQs,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services, process, and pricing',
  showSchema = true,
  showCTA = true,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      {showSchema && <FAQSchema faqs={faqs} />}

      <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px]"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dot Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Got Questions?</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* CTA Section */}
          {showCTA && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Glass Container */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 mb-6 shadow-lg shadow-brand-500/25"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-slate-300 mb-8 max-w-md mx-auto">
                  Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild variant="glow" size="lg" className="rounded-full group">
                      <Link href="/contact" className="flex items-center gap-2">
                        Contact Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
