'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our {currentService.title.toLowerCase()} services and development process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Get in touch and we'll respond within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;