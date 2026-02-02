'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FAQSchema } from '@/components/seo/SchemaScript';
import type { FAQItem } from '@/lib/schema';

// =============================================================================
// FAQ DATA - SEO-OPTIMIZED FOR GOOGLE FEATURED SNIPPETS
// Questions target high-volume long-tail keywords that trigger FAQ rich results
// =============================================================================

const homeFAQs: FAQItem[] = [
  {
    question: 'What services does Web On Dev offer?',
    answer:
      'Web On Dev is a full-service software development company offering custom web development, mobile app development (iOS & Android), e-commerce solutions, SaaS product development, UI/UX design, SEO optimization, digital marketing, cloud infrastructure & DevOps, and ongoing maintenance & support. We build scalable, high-performance applications using modern technologies including Next.js, React, Node.js, TypeScript, Python, Flutter, and AWS.',
  },
  {
    question: 'How much does it cost to build a custom website in 2025?',
    answer:
      'The cost of building a custom website depends on project scope, features, and complexity. At Web On Dev, basic business websites start from $5,000, mid-range websites with custom functionality range from $10,000 to $25,000, and enterprise-grade web applications with advanced features can exceed $50,000. Every project includes responsive design, SEO optimization, security best practices, and post-launch support. We provide detailed, transparent quotes after a free discovery call.',
  },
  {
    question: 'How long does it take to develop a website or web application?',
    answer:
      'Development timelines vary based on project complexity. A simple business or portfolio website typically takes 4 to 6 weeks. A custom web application with user authentication, dashboards, and integrations takes 8 to 12 weeks. Large-scale enterprise platforms and SaaS products can take 12 to 20 weeks or more. We follow agile methodology with weekly progress updates so you always know where your project stands.',
  },
  {
    question: 'What is your software development process?',
    answer:
      'We follow a proven 4-phase agile development process. Phase 1: Discovery & Strategy — we analyze your requirements, target audience, and business goals. Phase 2: Design & Prototyping — we create wireframes, UI/UX mockups, and interactive prototypes for your approval. Phase 3: Development & QA — our engineers build your solution with clean, scalable code and thorough quality assurance testing. Phase 4: Launch & Growth — we deploy your project, provide training, and offer ongoing support with performance monitoring and iterative improvements.',
  },
  {
    question: 'Do you provide ongoing website maintenance and support after launch?',
    answer:
      'Yes, we provide comprehensive post-launch support and maintenance for all projects. Our support includes bug fixes, security patches and updates, performance monitoring and optimization, content updates, feature enhancements, server and hosting management, and 24/7 emergency support for critical issues. We offer flexible monthly maintenance plans ranging from basic upkeep to full-service management tailored to your business needs.',
  },
  {
    question: 'What technologies and frameworks do you use for web development?',
    answer:
      'We use industry-leading technologies chosen for performance, scalability, and maintainability. For frontend development: React, Next.js, Vue.js, TypeScript, and Tailwind CSS. For backend development: Node.js, Python, Laravel, and PostgreSQL. For mobile apps: React Native and Flutter for cross-platform development. For cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, and CI/CD pipelines. We select the optimal tech stack based on your specific project requirements and business goals.',
  },
  {
    question: 'Can you help improve my website SEO and search engine rankings?',
    answer:
      'Absolutely. SEO is built into every project we deliver. Our SEO services include technical SEO audits and fixes, on-page optimization with structured data markup (Schema.org), page speed and Core Web Vitals optimization, keyword research and content strategy, local SEO for businesses targeting specific regions, and ongoing performance tracking with monthly reports. Our clients typically see 200% to 400% improvement in organic search traffic within 6 months of optimization.',
  },
  {
    question: 'Do you build mobile apps for iOS and Android?',
    answer:
      'Yes, we develop high-quality mobile applications for both iOS and Android platforms. We specialize in cross-platform development using React Native and Flutter, which allows us to build a single codebase that runs natively on both platforms — reducing development cost and time while maintaining native performance. We handle the entire mobile app lifecycle from UI/UX design and development to app store submission, launch, and post-launch updates.',
  },
];

// =============================================================================
// FAQ ITEM COMPONENT - WITH MICRODATA FOR DOUBLE SEO SIGNALS
// =============================================================================

interface FAQItemProps {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItemComponent = ({ faq, index, isOpen, onToggle }: FAQItemProps) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <div className={`relative rounded-2xl border ${isOpen ? 'border-brand-500/20 bg-white/[0.03]' : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1]'} transition-all duration-300 overflow-hidden`}>
        <button
          type="button"
          onClick={onToggle}
          className="w-full px-4 py-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5 flex items-center justify-between gap-3 sm:gap-4 text-left"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4">
            <span className={`text-xs sm:text-sm font-mono font-bold shrink-0 ${isOpen ? 'text-brand-400' : 'text-slate-600'} transition-colors duration-200`}>
              {num}
            </span>
            <h3
              className={`text-sm sm:text-base lg:text-lg font-semibold ${isOpen ? 'text-white' : 'text-slate-200'} transition-colors duration-200`}
              itemProp="name"
            >
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 ${isOpen ? 'text-brand-400' : 'text-slate-500'}`} />
          </motion.div>
        </button>

        <div
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 pt-0">
                  <div className="border-t border-white/[0.06] pt-3 sm:pt-4 ml-0 sm:ml-9">
                    <p
                      className="text-slate-400 leading-relaxed text-[13px] sm:text-sm lg:text-[15px]"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hidden answer text for crawlers (since AnimatePresence hides it visually) */}
          {!isOpen && (
            <div className="sr-only" itemProp="text">
              {faq.answer}
            </div>
          )}
        </div>
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
  subtitle = 'Find answers to common questions about our services, process, and pricing.',
  showSchema = true,
  showCTA = true,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema JSON-LD for Google Rich Results */}
      {showSchema && <FAQSchema faqs={faqs} />}

      <section
        className="relative py-12 sm:py-14 lg:py-20 bg-[#030712] overflow-hidden"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 30% 50%, rgba(6,182,212,0.04), transparent 70%)',
          }}
        />
        <div className="grain absolute inset-0" />

        {/* Divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              FAQ
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-[1.1]">
              {title.includes('Frequently') ? (
                <>
                  Questions?{' '}
                  <span className="gradient-text">We have answers</span>
                </>
              ) : (
                <span className="gradient-text">{title}</span>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
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

          {/* CTA */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 border border-white/[0.06] rounded-2xl" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.03) 100%)',
                }} />

                <div className="relative p-5 sm:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-slate-400 mb-3 sm:mb-4 max-w-md mx-auto text-xs sm:text-sm">
                    Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="rounded-full px-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                      <Link href="/contact" className="flex items-center gap-2">
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:border-white/20 hover:bg-white/[0.03]">
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>
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
