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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}