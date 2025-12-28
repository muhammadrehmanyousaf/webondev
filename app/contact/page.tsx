import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHeroSection from '@/components/pages/contact/ContactHeroSection';
import ContactFormSection from '@/components/pages/contact/ContactFormSection';
import ContactInfoSection from '@/components/pages/contact/ContactInfoSection';
import LocationSection from '@/components/pages/contact/LocationSection';
import FAQSection from '@/components/pages/contact/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Us - Web On Dev | Get Your Free Consultation',
  description: 'Contact Web On Dev for your software development needs. Get a free consultation, project quote, or technical support. We\'re here to help transform your business.',
  keywords: 'contact software agency, free consultation, project quote, software development inquiry, technical support',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/contact/`,
  },
  openGraph: {
    title: 'Contact Us - Web On Dev | Get Your Free Consultation',
    description: 'Contact Web On Dev for your software development needs. Get a free consultation, project quote, or technical support. We\'re here to help transform your business.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Web On Dev | Get Your Free Consultation',
    description: 'Contact Web On Dev for your software development needs. Get a free consultation, project quote, or technical support. We\'re here to help transform your business.',
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com';

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <LocationSection />
        <FAQSection />

        {/* JSON-LD: ContactPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              '@id': `${siteUrl}/contact/#contactpage`,
              name: 'Contact Web On Dev',
              description: 'Get in touch with Web On Dev for your software development needs. Free consultation available.',
              url: `${siteUrl}/contact/`,
              isPartOf: { '@id': `${siteUrl}/#website` },
              about: { '@id': `${siteUrl}/#organization` },
              mainEntity: { '@id': `${siteUrl}/#organization` },
              inLanguage: 'en-US',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.contact-intro']
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
                { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact/` }
              ]
            })
          }}
        />

        {/* JSON-LD: LocalBusiness with Contact Details */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': `${siteUrl}/#localbusiness`,
              name: 'Web On Dev',
              image: `${siteUrl}/images/branding/logo.png`,
              description: 'Premium web development agency specializing in custom websites, mobile apps, and digital solutions.',
              url: siteUrl,
              telephone: '+92-310-6803687',
              email: 'webondev786@gmail.com',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
                addressLocality: 'Lahore',
                addressRegion: 'Punjab',
                postalCode: '54660',
                addressCountry: 'PK'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 31.440541,
                longitude: 74.444666
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '10:00',
                  closes: '16:00'
                }
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '250',
                bestRating: '5',
                worstRating: '1'
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  telephone: '+92-310-6803687',
                  email: 'webondev786@gmail.com',
                  availableLanguage: ['English', 'Urdu'],
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '00:00',
                    closes: '23:59'
                  }
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'sales',
                  telephone: '+92-310-6803687',
                  email: 'webondev786@gmail.com',
                  availableLanguage: ['English', 'Urdu']
                }
              ],
              sameAs: [
                'https://www.youtube.com/@webondev',
                'https://x.com/webon_dev',
                'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
                'https://www.instagram.com/webondev/',
                'https://www.linkedin.com/company/webondev/'
              ]
            })
          }}
        />

        {/* JSON-LD: FAQ Schema - Expanded for AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How can I contact Web On Dev?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Contact Web On Dev via: Email (webondev786@gmail.com), Phone (+92-310-6803687), WhatsApp (+92-310-6803687), or website contact form at webondev.com/contact. We respond within 24 hours. Office: G8JX+CMF, Main Gulberg, Lahore, Pakistan.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Does Web On Dev offer free consultations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Web On Dev offers free 30-60 minute consultations. We discuss your project requirements, provide technical recommendations, share relevant case studies, and give you a detailed quote. No commitment required. Schedule via contact form, email, or WhatsApp.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are Web On Dev business hours?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Web On Dev is available Monday-Friday 9 AM - 6 PM, Saturday-Sunday 10 AM - 4 PM (Pakistan Standard Time, GMT+5). For international clients, we offer flexible scheduling across time zones. 24/7 emergency support available for existing clients.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How quickly does Web On Dev respond to inquiries?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Web On Dev responds to all inquiries within 24 hours during business days. Urgent project requests receive faster responses. WhatsApp messages typically get same-day replies.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Where is Web On Dev located?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Web On Dev is headquartered in Lahore, Pakistan at G8JX+CMF, Main Gulberg, Mota Singh Wala, Lahore, Punjab 54660. We serve clients remotely worldwide across 50+ countries including USA, UK, Canada, Australia, Germany, and UAE.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What information should I provide when contacting Web On Dev?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'When contacting Web On Dev, include: Your name and company, project type (website, app, marketing), brief project description, estimated budget range, and preferred timeline. This helps us provide accurate recommendations during your free consultation.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Does Web On Dev sign NDAs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Web On Dev routinely signs Non-Disclosure Agreements (NDAs) before project discussions. We prioritize client confidentiality and can sign your NDA or provide our standard NDA upon request.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What languages does Web On Dev support?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Web On Dev team members speak English and Urdu fluently. All business communications, documentation, and project management are conducted in English. We have experience working with clients from diverse cultural backgrounds across 50+ countries.'
                  }
                }
              ]
            })
          }}
        />

        {/* JSON-LD: Action Schema for Free Consultation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              name: 'Free Consultation',
              description: 'Schedule a free 30-60 minute consultation to discuss your software development project',
              price: '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              validFrom: '2024-01-01',
              offeredBy: { '@id': `${siteUrl}/#organization` },
              itemOffered: {
                '@type': 'Service',
                name: 'Project Consultation',
                description: 'Free consultation including requirements analysis, technical recommendations, and project estimation'
              }
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}