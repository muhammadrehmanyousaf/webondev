import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHeroSection from '@/components/pages/about/AboutHeroSection';
import CompanyStorySection from '@/components/pages/about/CompanyStorySection';
import TeamSection from '@/components/pages/about/TeamSection';
import ValuesSection from '@/components/pages/about/ValuesSection';
import TimelineSection from '@/components/pages/about/TimelineSection';
import CultureSection from '@/components/pages/about/CultureSection';

export const revalidate = 86400;
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Web On Dev - 500+ Projects, 250+ Clients, 50+ Countries',
  description: 'Meet the team behind Web On Dev. 4.9★ rated software company with 500+ delivered projects, 250+ happy clients & experts in Next.js, React, Flutter. See why businesses worldwide trust us.',
  keywords: 'about software agency, software development company, web development team, mobile app developers, digital transformation experts',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com'}/about/`,
  },
  openGraph: {
    title: 'About Web On Dev - 500+ Projects, 250+ Clients, 50+ Countries',
    description: 'Meet the team behind Web On Dev. 4.9★ rated software company with 500+ delivered projects & experts in Next.js, React, Flutter.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com'}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Web On Dev - 500+ Projects, 250+ Clients, 50+ Countries',
    description: 'Meet the team behind Web On Dev. 4.9★ rated software company with 500+ delivered projects & experts in Next.js, React, Flutter.',
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.webondev.com';

  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />
      <main>
        <AboutHeroSection />
        <CompanyStorySection />
        {/* <ValuesSection /> */}
        <TimelineSection />
        <TeamSection />
        <CultureSection />
        <CTASection />

        {/* JSON-LD: AboutPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              '@id': `${siteUrl}/about/#aboutpage`,
              name: 'About Web On Dev',
              description: 'Learn about Web On Dev - a leading software development company with 10+ years of experience and 500+ successful projects.',
              url: `${siteUrl}/about/`,
              isPartOf: { '@id': `${siteUrl}/#website` },
              about: { '@id': `${siteUrl}/#organization` },
              mainEntity: { '@id': `${siteUrl}/#organization` },
              inLanguage: 'en-US',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.company-story', 'h2']
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
                { '@type': 'ListItem', position: 2, name: 'About', item: `${siteUrl}/about/` }
              ]
            })
          }}
        />

        {/* JSON-LD: Organization with Team Members */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${siteUrl}/#organization`,
              name: 'Web On Dev',
              url: siteUrl,
              logo: `${siteUrl}/images/branding/logo.png`,
              foundingDate: '2015',
              description: 'Web On Dev is a premium digital transformation agency helping businesses achieve measurable growth through innovative software development.',
              slogan: 'Transforming Digital Vision Into Reality',
              // numberOfEmployees aligned to the canonical value in app/layout.tsx (11–50).
              numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 11, maxValue: 50 },
              founder: [
                { '@type': 'Person', name: 'Muhammad Rehman Yousaf', jobTitle: 'Co-Founder' },
                { '@type': 'Person', name: 'Daniyal Bahadur', jobTitle: 'Co-Founder' },
                { '@type': 'Person', name: 'Waheed UI Islam', jobTitle: 'Co-Founder' },
                { '@type': 'Person', name: 'Ihtisham UL Haq', jobTitle: 'Co-Founder' }
              ],
              // NOTE: removed fabricated `employee` list (Ahmad Raza / Sarah Johnson / Michael
              // Chen / Emma Wilson) and the unverifiable `award` list (which referenced a
              // different brand's directory profiles). Re-add only real, verifiable people/awards.
              knowsAbout: [
                'Web Development', 'Mobile Development', 'UI/UX Design', 'Digital Marketing',
                'SEO', 'Cloud Computing', 'DevOps', 'E-commerce', 'SaaS Development'
              ]
            })
          }}
        />

        {/* JSON-LD: ItemList of Achievements/Milestones */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Web On Dev Milestones',
              description: 'Key achievements and milestones in Web On Dev history',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Company Founded', description: 'Web On Dev was established in 2015 with a vision to transform digital experiences.' },
                { '@type': 'ListItem', position: 2, name: '100+ Projects', description: 'Reached the milestone of completing 100 successful projects for clients worldwide.' },
                { '@type': 'ListItem', position: 3, name: 'Global Expansion', description: 'Expanded operations to serve clients in 50+ countries across 6 continents.' },
                { '@type': 'ListItem', position: 4, name: 'Growing Portfolio', description: 'Delivered a growing portfolio of successful projects for clients worldwide.' }
              ]
            })
          }}
        />

      </main>
      <Footer />
    </div>
  );
}