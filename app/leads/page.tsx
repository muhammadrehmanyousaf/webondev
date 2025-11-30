import React from 'react';
import { Metadata } from 'next';
import LeadsPageClient from '@/components/pages/LeadsPageClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Lead Management - Solutions Indicator | Customer Relationship Management',
  description: 'Manage and track all customer leads, inquiries, and potential clients. Streamline your sales process with our comprehensive lead management system.',
  keywords: 'lead management, CRM, customer relationship management, sales tracking, client management',
  alternates: {
    canonical: `${siteUrl}/leads/`,
  },
  openGraph: {
    title: 'Lead Management - Solutions Indicator | Customer Relationship Management',
    description: 'Manage and track all customer leads, inquiries, and potential clients. Streamline your sales process with our comprehensive lead management system.',
    url: `${siteUrl}/leads/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Management - Solutions Indicator | Customer Relationship Management',
    description: 'Manage and track all customer leads, inquiries, and potential clients. Streamline your sales process with our comprehensive lead management system.',
  },
};

export default function LeadManagementPage() {
  return <LeadsPageClient />;
} 