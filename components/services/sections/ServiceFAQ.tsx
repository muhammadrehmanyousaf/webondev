'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Search
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface ServiceFAQProps {
  data?: import('./index').ServiceData;
  sectionTitle?: string;
  sectionSubtitle?: string;
  faqs?: FAQItem[];
  showSearch?: boolean;
  showCategories?: boolean;
  layout?: 'accordion' | 'grid' | 'columns';
  // Location context for Geo SEO
  city?: string;
  state?: string;
  country?: string;
  serviceName?: string;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = (props) => {
  const {
    data,
    sectionTitle: propTitle = 'Frequently Asked Questions',
    sectionSubtitle: propSubtitle = 'Everything you need to know. Can\'t find what you\'re looking for? Contact us.',
    faqs: propFaqs,
    showSearch = false,
    showCategories = true,
    layout = 'accordion',
    city,
    state,
    country,
    serviceName: propServiceName,
  } = props;

  // Use data from ServiceData object if provided
  const sectionTitle = propTitle;
  const sectionSubtitle = propSubtitle;
  const faqs = data?.faqs || propFaqs || [];
  const serviceName = data?.name || propServiceName;

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(faqs.map(f => f.category).filter(Boolean))) as string[]];

  // Filter FAQs
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = !searchQuery ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Generate JSON-LD schema for FAQs
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const locationString = [city, state, country].filter(Boolean).join(', ');

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {sectionTitle}
            {serviceName && locationString && (
              <span className="block text-lg md:text-xl font-normal text-gray-400 mt-2">
                About {serviceName} in {locationString}
              </span>
            )}
          </h2>

          <p className="text-lg text-gray-400">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Search */}
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50"
              />
            </div>
          </motion.div>
        )}

        {/* Categories */}
        {showCategories && categories.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Accordion Layout */}
        {layout === 'accordion' && (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-slate-800/50 border-emerald-500/30'
                      : 'bg-slate-900/50 border-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pt-2 border-t border-slate-700/50">
                            <p className="text-gray-400 leading-relaxed mt-4 whitespace-pre-line">
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
        )}

        {/* Grid Layout */}
        {layout === 'grid' && (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <h3 className="font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Columns Layout */}
        {layout === 'columns' && (
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="break-inside-avoid p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <h3 className="font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* No results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No questions found matching your search.</p>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <MessageCircle className="w-10 h-10 text-emerald-500" />
            <div className="text-left">
              <h4 className="font-semibold text-white">
                Still have questions?
              </h4>
              <p className="text-sm text-gray-400">
                Can't find the answer you're looking for?
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default ServiceFAQ;
