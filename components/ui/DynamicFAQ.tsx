import React from 'react';

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
  
  const faqs: FAQItem[] = [
    {
      question: `How does Solutions Indicator ensure quality ${service} delivery ${location}?`,
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

  return (
    <>
      {/* FAQ Section */}
      <section className={`py-20 bg-white animate-on-scroll ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{service}</span> {location}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our {service} services and how we deliver results for businesses in {city}, {state}, and worldwide.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-gray-100 rounded-2xl p-6 bg-white open:shadow-lg">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <span className="font-medium text-gray-900 text-lg">{faq.question}</span>
                    <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                  </summary>
                  <div className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
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
