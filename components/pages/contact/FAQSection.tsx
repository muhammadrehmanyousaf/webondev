'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our services, process, and how we can help your business succeed.
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
                    <ChevronUp className="w-6 h-6 text-orange-600" />
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
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-full hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/50">
                Contact Support
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-orange-600 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
