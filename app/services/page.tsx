import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHeroSection from '@/components/pages/services/ServicesHeroSection';
import ServicesGridSection from '@/components/pages/services/ServicesGridSection';
import ServiceProcessSection from '@/components/pages/services/ServiceProcessSection';
import ServiceBenefitsSection from '@/components/pages/services/ServiceBenefitsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

const servicesFAQs = [
  {
    question: 'How do you scope complex, multi-service engagements?',
    answer: 'We start with discovery and a written proposal outlining problem, goals, scope, deliverables, assumptions, timeline, dependencies, risks, and acceptance criteria. That reduces ambiguity and aligns stakeholders upfront.',
  },
  {
    question: 'Can you align development with SEO, performance, and accessibility from day one?',
    answer: 'Yes—our process bakes in technical SEO (semantic HTML, schema), Core Web Vitals, and WCAG compliance alongside design/development to avoid late rework and ensure search-friendly, inclusive experiences.',
  },
  {
    question: 'Do you support internationalization and programmatic content at scale?',
    answer: 'We implement i18n routing, localized currency/tax, and scalable content models for programmatic pages—plus hreflang, canonical logic, and feeds for discovery and syndication.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern technologies including Next.js, React, Node.js, TypeScript, Python, and cloud platforms like AWS, Google Cloud, and Vercel. We also work with databases like PostgreSQL, MongoDB, and Redis.',
  },
  {
    question: 'How do you ensure quality and security in your development process?',
    answer: 'We follow industry best practices including code reviews, automated testing (unit, integration, E2E), CI/CD pipelines, security audits, and OWASP guidelines. All projects include comprehensive documentation and knowledge transfer.',
  },
];

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
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <ServicesHeroSection />
        <ServicesGridSection />
        <ServiceProcessSection />
        <ServiceBenefitsSection />
        <FAQSection
          faqs={servicesFAQs}
          subtitle="Find answers to common questions about our development services, process, and expertise"
          showCTA={false}
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