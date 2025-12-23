'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

// =============================================================================
// DYNAMIC FAQ SECTION - Premium Emerald Green Design
// =============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

interface DynamicFAQProps {
  location?: string;
  service?: string;
  city?: string;
  state?: string;
  country?: string;
  className?: string;
}

export default function DynamicFAQ({
  location = "globally",
  service = "software development",
  city = "your city",
  state = "your state",
  country = "your country",
  className = ""
}: DynamicFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: `How does Web On Dev ensure quality ${service} delivery ${location}?`,
      answer: `Our ${service} team maintains rigorous quality standards through automated testing, code reviews, and continuous integration pipelines. We implement agile methodologies with daily standups, sprint planning, and regular client check-ins to ensure deliverables meet your business objectives and technical requirements across all time zones.`
    },
    {
      question: `What ${service} technologies and frameworks do you specialize in ${location}?`,
      answer: `We specialize in modern ${service} technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. Our team stays current with emerging frameworks, ensuring your ${service} projects leverage cutting-edge tools for optimal performance, scalability, and maintainability in competitive markets.`
    },
    {
      question: `Can you provide ${service} services for businesses in ${city}, ${state}?`,
      answer: `Absolutely! We deliver comprehensive ${service} solutions to businesses throughout ${city}, ${state}, and surrounding areas. Our local expertise combined with global best practices ensures your ${service} project aligns with regional market demands while maintaining international quality standards and compliance requirements.`
    },
    {
      question: `What is the typical timeline for ${service} projects ${location}?`,
      answer: `${service} project timelines vary based on complexity and requirements, typically ranging from 4-12 weeks for standard implementations. We provide detailed project roadmaps during consultation, including milestone deliveries, testing phases, and deployment schedules to ensure transparent communication and on-time delivery.`
    },
    {
      question: `Do you offer ongoing support and maintenance for ${service} solutions?`,
      answer: `Yes, we provide comprehensive post-launch support including bug fixes, feature updates, performance monitoring, and security patches. Our ${service} maintenance packages include 24/7 monitoring, regular backups, and proactive optimization to ensure your solution remains secure, fast, and aligned with evolving business needs.`
    },
    {
      question: `How do you handle data security and compliance in ${service} projects?`,
      answer: `We implement enterprise-grade security measures including SSL encryption, secure coding practices, and compliance with GDPR, CCPA, and industry-specific regulations. Our ${service} solutions undergo rigorous security testing, vulnerability assessments, and penetration testing to protect your data and ensure regulatory compliance.`
    },
    {
      question: `What makes your ${service} approach different from competitors in ${country}?`,
      answer: `Our ${service} methodology combines technical excellence with business strategy, focusing on conversion optimization and user experience. We integrate SEO best practices, performance optimization, and analytics from day one, ensuring your ${service} solution not only functions perfectly but also drives measurable business growth and ROI.`
    },
    {
      question: `Can you integrate ${service} solutions with existing business systems?`,
      answer: `Absolutely! We specialize in seamless integration with CRM systems, payment gateways, inventory management, and third-party APIs. Our ${service} team ensures smooth data flow between systems while maintaining data integrity and security, enabling streamlined business operations and improved efficiency across your organization.`
    },
    {
      question: `What is your pricing model for ${service} projects ${location}?`,
      answer: `We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements based on your ${service} requirements and budget. Our transparent pricing includes detailed project breakdowns, no hidden fees, and milestone-based payments to ensure cost predictability and value delivery throughout your project lifecycle.`
    },
    {
      question: `How do you ensure ${service} solutions are mobile-responsive and accessible?`,
      answer: `We build all ${service} solutions with mobile-first design principles and WCAG 2.1 AA accessibility compliance. Our responsive design ensures optimal performance across devices, while accessibility features make your ${service} solution usable by all users, improving user experience and expanding your potential customer base.`
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className={`relative py-20 lg:py-32 bg-slate-900 overflow-hidden ${className}`}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Frequently Asked Questions About </span>
              <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {service}
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our {service} services and how we deliver results for businesses in {city}, {state}, and worldwide.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl blur opacity-0 ${openIndex === index ? 'opacity-20' : 'group-hover:opacity-10'} transition-opacity duration-500`} />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-brand-500/30 transition-all duration-300 overflow-hidden">
                    {/* Question Header */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            openIndex === index
                              ? 'bg-gradient-to-br from-brand-500 to-teal-500'
                              : 'bg-white/5 group-hover:bg-white/10'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className={`font-bold text-sm ${openIndex === index ? 'text-white' : 'text-brand-400'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </motion.div>
                        <span className={`font-semibold text-lg leading-snug transition-colors ${
                          openIndex === index ? 'text-brand-400' : 'text-white group-hover:text-brand-400'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          openIndex === index ? 'bg-brand-500/20' : 'bg-white/5'
                        }`}
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-brand-400' : 'text-slate-400'}`} />
                      </motion.div>
                    </button>

                    {/* Answer Content */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="pl-14">
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
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <span className="text-slate-300">
                Still have questions?{' '}
                <a href="/contact" className="text-brand-400 hover:text-brand-300 font-semibold transition-colors">
                  Contact our team
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
