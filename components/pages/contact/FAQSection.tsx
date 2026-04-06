'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Calendar } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We can typically start your project within 1-2 weeks after the initial consultation and agreement. For urgent projects, we offer expedited onboarding within 3-5 business days. The exact timeline depends on project complexity and our current capacity.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular sprints, daily standups, and continuous client communication. Our process includes: Discovery & Planning → Design & Prototyping → Development & Testing → Deployment & Launch → Ongoing Support & Maintenance.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We provide different support packages ranging from basic maintenance to full-service ongoing development.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, PHP, React Native, Flutter, AWS, Azure, Google Cloud, and many more. We choose the best technology stack based on your specific project requirements.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We maintain transparent communication through regular video calls, project management tools (Slack, Trello, Jira), weekly progress reports, and dedicated project managers. You\'ll always know the status of your project and have direct access to our team.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically work with milestone-based payments: 30% upfront, 40% at mid-project milestone, and 30% upon completion. For larger projects, we can arrange custom payment schedules. We accept various payment methods including bank transfers, credit cards, and digital payments.'
    },
    {
      question: 'Do you sign NDAs and protect intellectual property?',
      answer: 'Absolutely. We take intellectual property protection very seriously. We sign NDAs before any project discussion and ensure all your code, designs, and business information remain completely confidential. All IP rights belong to you upon project completion.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Yes, we excel at collaborating with existing teams. We can integrate seamlessly with your in-house developers, designers, and project managers. We also offer staff augmentation services to temporarily expand your team with our experts.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with our work, we\'ll revise it until you are satisfied. We also provide a money-back guarantee for the first milestone if the project doesn\'t meet your expectations within the agreed scope.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Yes, we work with businesses of all sizes, from startups to Fortune 500 companies. We offer flexible pricing models and can work within various budget constraints. We also provide special startup packages and can discuss equity-based partnerships for promising ventures.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#030712] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, rgba(16,185,129,0.04), transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
          >
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Get answers to the most common questions about our services, process, and how we can help your business succeed.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group"
            >
              <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                openFAQ === index
                  ? 'bg-white/[0.04] border-brand-500/20'
                  : 'bg-white/[0.02] hover:bg-white/[0.03] border-white/[0.06]'
              } border`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between"
                >
                  <h3 className={`text-sm sm:text-base font-semibold pr-4 transition-colors ${
                    openFAQ === index ? 'text-brand-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index
                      ? 'bg-brand-500/20 rotate-180'
                      : 'bg-white/[0.04] group-hover:bg-white/[0.08]'
                  }`}>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                      openFAQ === index ? 'text-brand-400' : 'text-slate-400'
                    }`} />
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="relative px-4 sm:px-6 pb-4 sm:pb-5">
                        <div className="border-t border-white/[0.06] pt-3 sm:pt-4">
                          <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
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

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-14"
        >
          <div
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
            }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
              Still Have Questions?
            </h3>
            <p className="text-slate-400 mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
              Get in touch and we&apos;ll respond within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-teal-600 transition-all duration-300 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Support
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/[0.1] text-white font-semibold rounded-xl hover:bg-white/[0.05] hover:border-brand-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
