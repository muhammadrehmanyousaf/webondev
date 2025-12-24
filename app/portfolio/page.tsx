import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioPageContent from '@/components/pages/portfolio/PortfolioPageContent';

export const metadata: Metadata = {
  title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
  description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
  keywords: 'software portfolio, web development projects, mobile app portfolio, case studies, successful projects, client work',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/portfolio/`,
  },
  openGraph: {
    title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
    description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/portfolio`,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/images/og?title=Our%20Portfolio&subtitle=Solutions%20Indicator`,
        width: 1200,
        height: 630,
        alt: 'Our Portfolio – Web On Dev'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
    description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <PortfolioPageContent />
        {/* JSON-LD: Portfolio CollectionPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Our Portfolio',
              description: 'Showcase of successful projects by Web On Dev.',
              publisher: { '@type': 'Organization', name: 'Web On Dev' }
            })
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
