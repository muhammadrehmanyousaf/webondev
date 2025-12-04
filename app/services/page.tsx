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
        {/* JSON-LD: Services CollectionPage and ItemList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Our Services',
              description: 'Comprehensive software development services.',
              publisher: { '@type': 'Organization', name: 'Web On Dev' }
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}