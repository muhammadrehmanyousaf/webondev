import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHeroSection from '@/components/pages/services/ServicesHeroSection';
import ServicesGridSection from '@/components/pages/services/ServicesGridSection';
import ServiceProcessSection from '@/components/pages/services/ServiceProcessSection';
import ServiceBenefitsSection from '@/components/pages/services/ServiceBenefitsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Our Services - Web On Dev | Complete Software Development Solutions',
  description: 'Explore our comprehensive range of software development services including web development, mobile apps, UI/UX design, digital marketing, cloud services, and more.',
  keywords: 'software development services, web development, mobile app development, UI/UX design, digital marketing, cloud services, consulting',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services/`,
  },
  openGraph: {
    title: 'Our Services - Web On Dev | Complete Software Development Solutions',
    description: 'Explore our comprehensive range of software development services including web development, mobile apps, UI/UX design, digital marketing, cloud services, and more.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/services/`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/images/og?title=Our%20Services&subtitle=Solutions%20Indicator`,
        width: 1200,
        height: 630,
        alt: 'Our Services – Web On Dev'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Web On Dev | Complete Software Development Solutions',
    description: 'Explore our comprehensive range of software development services including web development, mobile apps, UI/UX design, digital marketing, cloud services, and more.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ServicesHeroSection />
        <ServicesGridSection />
        <ServiceProcessSection />
        <ServiceBenefitsSection />
        {/* Semantic FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently asked questions about our services</h3>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed max-w-4xl">
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">How do you scope complex, multi-service engagements?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">We start with discovery and a written proposal outlining problem, goals, scope, deliverables, assumptions, timeline, dependencies, risks, and acceptance criteria. That reduces ambiguity and aligns stakeholders upfront.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Can you align development with SEO, performance, and accessibility from day one?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">Yes—our process bakes in technical SEO (semantic HTML, schema), Core Web Vitals, and WCAG compliance alongside design/development to avoid late rework and ensure search-friendly, inclusive experiences.</div>
              </details>
              <details className="group border border-gray-100 rounded-2xl p-6 bg-white">
                <summary className="flex cursor-pointer items-center justify-between">
                  <span className="font-semibold text-gray-900">Do you support internationalization and programmatic content at scale?</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <div className="mt-4">We implement i18n routing, localized currency/tax, and scalable content models for programmatic pages—plus hreflang, canonical logic, and feeds for discovery and syndication.</div>
              </details>
            </div>
          </div>
        </section>
        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do you scope complex, multi-service engagements?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We start with discovery and a written proposal outlining problem, goals, scope, deliverables, assumptions, timeline, dependencies, risks, and acceptance criteria.' }
                },
                {
                  '@type': 'Question',
                  name: 'Can you align development with SEO, performance, and accessibility from day one?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes—our process bakes in technical SEO (semantic HTML, schema), Core Web Vitals, and WCAG compliance alongside design/development.' }
                },
                {
                  '@type': 'Question',
                  name: 'Do you support internationalization and programmatic content at scale?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We implement i18n routing, localized currency/tax, and scalable content models for programmatic pages—plus hreflang, canonical logic, and feeds for discovery and syndication.' }
                }
              ]
            })
          }}
        />
        <CTASection />
        {/* JSON-LD: Services CollectionPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              '@id': 'https://www.webondev.com/services/#collectionpage',
              name: 'Our Services - Complete Software Development Solutions',
              description: 'Comprehensive software development services including web development, mobile apps, UI/UX design, digital marketing, cloud services, and more.',
              url: 'https://www.webondev.com/services/',
              isPartOf: { '@id': 'https://www.webondev.com/#website' },
              about: { '@id': 'https://www.webondev.com/#organization' },
              publisher: { '@id': 'https://www.webondev.com/#organization' },
              inLanguage: 'en-US',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'h2', '.service-description']
              }
            })
          }}
        />
        {/* JSON-LD: Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.webondev.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.webondev.com/services/' }
              ]
            })
          }}
        />
        {/* JSON-LD: ItemList of Services with Offers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Web On Dev Services',
              description: 'Complete list of software development services offered by Web On Dev',
              numberOfItems: 7,
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'Service',
                    name: 'Web Development',
                    description: 'Custom websites and web applications built with Next.js, React, Vue.js, and modern technologies',
                    url: 'https://www.webondev.com/web-development/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '3000', maxPrice: '100000' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'Service',
                    name: 'Mobile App Development',
                    description: 'Native iOS, Android, and cross-platform mobile apps using React Native and Flutter',
                    url: 'https://www.webondev.com/mobile-development/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '10000', maxPrice: '150000' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '85' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description: 'User-centric design solutions including wireframing, prototyping, and design systems',
                    url: 'https://www.webondev.com/ui-ux-design/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '2000', maxPrice: '25000' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '65' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  item: {
                    '@type': 'Service',
                    name: 'Digital Marketing',
                    description: 'SEO, PPC, social media marketing, content marketing, and email campaigns',
                    url: 'https://www.webondev.com/digital-marketing/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '500', maxPrice: '10000', unitText: 'MONTH' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '92' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  item: {
                    '@type': 'Service',
                    name: 'E-commerce Development',
                    description: 'Shopify, WooCommerce, Magento, and custom e-commerce platform development',
                    url: 'https://www.webondev.com/ecommerce-solutions/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '5000', maxPrice: '75000' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '78' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  item: {
                    '@type': 'Service',
                    name: 'Cloud & DevOps',
                    description: 'AWS, Azure, GCP cloud services, CI/CD, Docker, Kubernetes, and infrastructure automation',
                    url: 'https://www.webondev.com/cloud-devops/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '45' }
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 7,
                  item: {
                    '@type': 'Service',
                    name: 'Custom Software Development',
                    description: 'Enterprise applications, SaaS products, API development, and legacy system modernization',
                    url: 'https://www.webondev.com/custom-software/',
                    provider: { '@id': 'https://www.webondev.com/#organization' },
                    offers: {
                      '@type': 'Offer',
                      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: '20000', maxPrice: '500000' }
                    },
                    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '55' }
                  }
                }
              ]
            })
          }}
        />
        {/* JSON-LD: HowTo Schema for Getting Started */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Get Started with Web On Dev Services',
              description: 'Step-by-step guide to starting your software development project with Web On Dev',
              totalTime: 'P7D',
              estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
              step: [
                { '@type': 'HowToStep', position: 1, name: 'Free Consultation', text: 'Schedule a free 30-60 minute consultation to discuss your project requirements and goals.' },
                { '@type': 'HowToStep', position: 2, name: 'Project Proposal', text: 'Receive a detailed proposal with scope, timeline, deliverables, and transparent pricing.' },
                { '@type': 'HowToStep', position: 3, name: 'Design Phase', text: 'Our UI/UX team creates wireframes, prototypes, and visual designs for your approval.' },
                { '@type': 'HowToStep', position: 4, name: 'Development Sprint', text: 'Agile development with regular updates, demos, and feedback integration.' },
                { '@type': 'HowToStep', position: 5, name: 'Testing & QA', text: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing.' },
                { '@type': 'HowToStep', position: 6, name: 'Launch & Support', text: 'Production deployment with ongoing maintenance, monitoring, and support.' }
              ]
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}