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
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us - Web On Dev | Leading Software Development Company',
  description: 'Learn about Web On Dev - a leading software development company with 5+ years of experience, 150+ satisfied clients, and a team of expert developers delivering innovative digital solutions.',
  keywords: 'about software agency, software development company, web development team, mobile app developers, digital transformation experts',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/about/`,
  },
  openGraph: {
    title: 'About Us - Web On Dev | Leading Software Development Company',
    description: 'Learn about Web On Dev - a leading software development company with 5+ years of experience, 150+ satisfied clients, and a team of expert developers delivering innovative digital solutions.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/about`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Web On Dev | Leading Software Development Company',
    description: 'Learn about Web On Dev - a leading software development company with 5+ years of experience, 150+ satisfied clients, and a team of expert developers delivering innovative digital solutions.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHeroSection />
        <CompanyStorySection />
        {/* <ValuesSection /> */}
        <TimelineSection />
        <TeamSection />
        <CultureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}