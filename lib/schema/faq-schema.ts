/**
 * COMPREHENSIVE FAQ SCHEMA
 * Service-specific FAQs for featured snippets and rich results
 */

import { getBaseUrl } from '@/lib/site-config';

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// =============================================================================
// GENERAL FAQS
// =============================================================================

export const generalFAQs: FAQ[] = [
  {
    question: 'What services does Web On Dev offer?',
    answer:
      'Web On Dev offers comprehensive software development services including web development (Next.js, React, Vue.js), mobile app development (iOS, Android, React Native, Flutter), UI/UX design, digital marketing (SEO, PPC, social media), e-commerce solutions (Shopify, WooCommerce), cloud services (AWS, Azure, GCP), and custom software development.',
    category: 'general',
  },
  {
    question: 'Where is Web On Dev located?',
    answer:
      'Web On Dev is headquartered in Lahore, Pakistan, but we serve clients globally. We have successfully delivered 500+ projects for clients in the United States, United Kingdom, Canada, Australia, Germany, UAE, India, and 50+ other countries. Our remote-first approach ensures seamless collaboration across time zones.',
    category: 'general',
  },
  {
    question: 'How do I get started with Web On Dev?',
    answer:
      'Getting started is easy! Contact us through our website, email (webondev786@gmail.com), or WhatsApp (+92-310-6803687) to schedule a free consultation. We will discuss your project requirements, provide a detailed proposal with timeline and pricing, and begin development once approved.',
    category: 'general',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes, Web On Dev offers free consultations for all potential projects. During the consultation, we will discuss your requirements, answer your questions, provide expert recommendations, and give you a preliminary estimate. There is no obligation to proceed.',
    category: 'general',
  },
];

// =============================================================================
// WEB DEVELOPMENT FAQS
// =============================================================================

export const webDevFAQs: FAQ[] = [
  {
    question: 'How much does website development cost?',
    answer:
      'Website development costs vary based on complexity: Simple websites start from $3,000, business websites range from $5,000-$15,000, e-commerce sites from $8,000-$30,000, and complex web applications from $20,000-$100,000+. Factors include design complexity, number of pages, features, integrations, and timeline.',
    category: 'web-development',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Website development timelines depend on complexity: Simple websites take 2-4 weeks, business websites 4-8 weeks, e-commerce sites 6-12 weeks, and complex web applications 8-16+ weeks. These include design, development, testing, and launch phases.',
    category: 'web-development',
  },
  {
    question: 'What technologies do you use for web development?',
    answer:
      'We use modern technologies including Next.js, React, Vue.js, Angular for frontend; Node.js, Python, PHP for backend; PostgreSQL, MongoDB, MySQL for databases; and AWS, Vercel, Google Cloud for hosting. Technology stack is chosen based on project requirements.',
    category: 'web-development',
  },
  {
    question: 'Do you provide website maintenance and support?',
    answer:
      'Yes, we offer comprehensive website maintenance and support packages. This includes security updates, bug fixes, performance monitoring, content updates, backups, and technical support. We offer monthly retainer plans starting from $500/month.',
    category: 'web-development',
  },
  {
    question: 'Will my website be SEO optimized?',
    answer:
      'Absolutely! All our websites are built with SEO best practices including proper HTML structure, meta tags, schema markup, fast loading times, mobile responsiveness, and clean URLs. We also offer dedicated SEO services for ongoing optimization.',
    category: 'web-development',
  },
];

// =============================================================================
// MOBILE APP FAQS
// =============================================================================

export const mobileAppFAQs: FAQ[] = [
  {
    question: 'How much does mobile app development cost?',
    answer:
      'Mobile app development costs range from $10,000 for simple apps to $150,000+ for complex enterprise applications. Factors include platform (iOS, Android, or both), features, design complexity, backend requirements, and third-party integrations. Cross-platform apps (React Native, Flutter) are typically 30-40% cheaper than native development.',
    category: 'mobile-development',
  },
  {
    question: 'Should I build a native or cross-platform app?',
    answer:
      'It depends on your requirements. Cross-platform (React Native, Flutter) is cost-effective and faster to market, suitable for most apps. Native development (Swift/Kotlin) offers better performance and access to platform-specific features, ideal for gaming or hardware-intensive apps. We will recommend the best approach for your project.',
    category: 'mobile-development',
  },
  {
    question: 'How long does mobile app development take?',
    answer:
      'Mobile app development typically takes 8-24 weeks depending on complexity: Simple apps take 8-12 weeks, medium complexity apps 12-16 weeks, and complex apps 16-24+ weeks. This includes design, development, testing, and app store submission.',
    category: 'mobile-development',
  },
  {
    question: 'Do you help with app store submission?',
    answer:
      'Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store. This includes preparing app descriptions, screenshots, compliance with store guidelines, and addressing any review feedback.',
    category: 'mobile-development',
  },
];

// =============================================================================
// DIGITAL MARKETING FAQS
// =============================================================================

export const marketingFAQs: FAQ[] = [
  {
    question: 'How much does SEO cost?',
    answer:
      'SEO services range from $1,000-$5,000/month depending on competition and goals. Basic SEO starts at $1,000/month, comprehensive SEO at $2,000-$3,000/month, and enterprise SEO at $5,000+/month. ROI typically shows within 3-6 months.',
    category: 'digital-marketing',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a long-term strategy. Initial improvements can be seen within 1-3 months, significant results typically appear within 3-6 months, and substantial growth within 6-12 months. Results depend on competition, industry, and starting position.',
    category: 'digital-marketing',
  },
  {
    question: 'Do you offer PPC management?',
    answer:
      'Yes, we manage PPC campaigns on Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, and other platforms. Our services include campaign setup, keyword research, ad creation, bid management, and continuous optimization for maximum ROI.',
    category: 'digital-marketing',
  },
];

// =============================================================================
// ECOMMERCE FAQS
// =============================================================================

export const ecommerceFAQs: FAQ[] = [
  {
    question: 'Should I use Shopify or a custom e-commerce platform?',
    answer:
      'Shopify is ideal for small-to-medium businesses wanting quick launch and ease of use, with monthly fees. Custom platforms (built with Next.js, WooCommerce) offer more flexibility and no transaction fees, better for larger businesses with specific requirements. We help you choose the best option.',
    category: 'ecommerce',
  },
  {
    question: 'What payment gateways do you integrate?',
    answer:
      'We integrate all major payment gateways including Stripe, PayPal, Square, Authorize.net, Braintree, and regional gateways for local markets. We also support buy-now-pay-later services like Klarna, Affirm, and Afterpay.',
    category: 'ecommerce',
  },
  {
    question: 'Can you migrate my existing store to a new platform?',
    answer:
      'Yes, we handle complete e-commerce migrations including product data, customer information, order history, and SEO preservation. We ensure zero downtime and maintain search rankings during the transition.',
    category: 'ecommerce',
  },
];

// =============================================================================
// SCHEMA GENERATORS
// =============================================================================

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate FAQ schema for specific category
 */
export function generateCategoryFAQSchema(category: string) {
  const allFAQs = [...generalFAQs, ...webDevFAQs, ...mobileAppFAQs, ...marketingFAQs, ...ecommerceFAQs];
  const categoryFAQs = allFAQs.filter((faq) => faq.category === category);
  return generateFAQSchema(categoryFAQs);
}

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: string): FAQ[] {
  const faqMap: Record<string, FAQ[]> = {
    general: generalFAQs,
    'web-development': webDevFAQs,
    'mobile-development': mobileAppFAQs,
    'digital-marketing': marketingFAQs,
    ecommerce: ecommerceFAQs,
  };
  return faqMap[category] || generalFAQs;
}

/**
 * Get all FAQs
 */
export function getAllFAQs(): FAQ[] {
  return [...generalFAQs, ...webDevFAQs, ...mobileAppFAQs, ...marketingFAQs, ...ecommerceFAQs];
}

export default {
  generalFAQs,
  webDevFAQs,
  mobileAppFAQs,
  marketingFAQs,
  ecommerceFAQs,
  generateFAQSchema,
  getFAQsByCategory,
  getAllFAQs,
};
