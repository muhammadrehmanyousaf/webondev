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
              email: 'webondev@gmail.com',
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
                  email: 'webondev@gmail.com',
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
                  email: 'webondev@gmail.com',
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

        {/* JSON-LD: FAQ Schema */}
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
                    text: 'You can contact us via email at webondev@gmail.com, phone at +92-310-6803687, WhatsApp, or through our contact form. We respond within 24 hours.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer free consultations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we offer free 30-60 minute consultations to discuss your project requirements, provide technical guidance, and give you a detailed quote.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are your business hours?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We are available Monday-Friday 9 AM - 6 PM, and Saturday-Sunday 10 AM - 4 PM (Pakistan Standard Time). For urgent matters, we offer 24/7 support.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How quickly do you respond to inquiries?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We typically respond to all inquiries within 24 hours during business days. Urgent requests are prioritized and may receive faster responses.'
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