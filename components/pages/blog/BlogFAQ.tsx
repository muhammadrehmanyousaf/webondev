'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface BlogFAQProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

const BlogFAQ: React.FC<BlogFAQProps> = ({
  title = "Frequently Asked Questions",
  description = "Get answers to common questions about web development, our services, and best practices.",
  faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. Our stack is chosen based on performance, scalability, and maintainability requirements.",
      category: "Technology"
    },
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 8-12 weeks. We provide detailed timelines during the planning phase.",
      category: "Timeline"
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support to ensure your website runs smoothly.",
      category: "Support"
    },
    {
      question: "What is your approach to SEO optimization?",
      answer: "We implement technical SEO, create quality content, optimize for Core Web Vitals, and follow Google's best practices to improve search rankings and drive organic traffic.",
      category: "SEO"
    },
    {
      question: "Can you help with existing websites?",
      answer: "Absolutely! We can audit, redesign, or enhance existing websites. We'll analyze current performance and provide recommendations for improvements.",
      category: "Services"
    },
    {
      question: "What about mobile responsiveness?",
      answer: "All our websites are built mobile-first and fully responsive. We ensure optimal performance across all devices and screen sizes.",
      category: "Design"
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer reliable hosting solutions and can help with domain registration and management. We recommend hosting that matches your website's performance needs.",
      category: "Hosting"
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement SSL certificates, secure coding practices, regular security updates, and follow OWASP guidelines to protect your website and user data.",
      category: "Security"
    }
  ]
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#030712] overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.08))' }}
          >
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white/[0.04] border-brand-500/20'
                  : 'bg-white/[0.02] hover:bg-white/[0.03] border-white/[0.06]'
              } border`}>
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="relative w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between"
                >
                  <div className="flex-1 pr-4">
                    <h3 className={`text-sm sm:text-base font-semibold transition-colors ${
                      openIndex === index ? 'text-brand-400' : 'text-white'
                    }`}>
                      {faq.question}
                    </h3>
                    {faq.category && (
                      <Badge variant="outline" className="mt-2 text-xs border-white/[0.1] text-slate-500">
                        {faq.category}
                      </Badge>
                    )}
                  </div>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-brand-500/20 rotate-180'
                      : 'bg-white/[0.04] group-hover:bg-white/[0.08]'
                  }`}>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                      openIndex === index ? 'text-brand-400' : 'text-slate-400'
                    }`} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
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
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-14">
          <div
            className="bg-white/[0.02] border border-white/[0.06] rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)',
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
              Still Have Questions?
            </h3>
            <p className="text-slate-400 mb-5 sm:mb-6 max-w-xl mx-auto text-sm">
              Can't find the answer you're looking for? Our team is here to help with any questions about web development, our services, or your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-brand-500 to-teal-500 text-white rounded-xl font-semibold hover:from-brand-600 hover:to-teal-600 transition-all text-sm"
              >
                Contact Us
              </a>
              <a
                href="tel:+923106803687"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/[0.1] text-white rounded-xl font-semibold hover:bg-white/[0.05] hover:border-brand-500/30 transition-all text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFAQ;
