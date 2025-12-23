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
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-500 to-teal-500 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about our services, process, and how we can help your business succeed.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                openFAQ === index
                  ? 'bg-white/10 border-brand-500/30'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              } border backdrop-blur-sm`}>
                {/* Glow effect when open */}
                {openFAQ === index && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-50" />
                )}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                    openFAQ === index ? 'text-brand-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index
                      ? 'bg-brand-500/20 rotate-180'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      openFAQ === index ? 'text-brand-400' : 'text-gray-400'
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
                      <div className="relative px-6 pb-5">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-400 leading-relaxed">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help.
                Get in touch and we'll respond within 2 hours during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold rounded-xl hover:from-brand-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-brand-500/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-brand-500/30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
