'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)));

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-orange-600" />
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                FAQ
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge 
                className="bg-blue-600 text-white px-4 py-2 cursor-pointer hover:bg-blue-700 transition-colors"
              >
                All Questions
              </Badge>
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="border-gray-300 text-gray-700 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    {faq.category && (
                      <Badge variant="outline" className="text-xs">
                        {faq.category}
                      </Badge>
                    )}
                  </div>
                  <div className="ml-4">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-orange-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help with any questions about web development, our services, or your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFAQ;

