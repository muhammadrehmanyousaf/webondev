import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';
import { GUIDES } from '@/lib/guides';

export const revalidate = 86400;

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Guides & Resources | Web On Dev',
  description:
    'In-depth guides on software development, hiring developers, framework comparisons (Next.js vs React, React Native vs Flutter), and app development costs — by Web On Dev.',
  alternates: { canonical: `${siteUrl}/guides/` },
  openGraph: {
    title: 'Guides & Resources | Web On Dev',
    description: 'Software development guides, framework comparisons, hiring, and cost breakdowns.',
    url: `${siteUrl}/guides/`,
    type: 'website',
    siteName: 'Web On Dev',
  },
  robots: { index: true, follow: true },
};

export default function GuidesIndexPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Web On Dev Guides',
    itemListElement: GUIDES.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.title,
      url: `${siteUrl}/guides/${g.slug}/`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-3">Guides &amp; Resources</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Software Development Guides</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical, research-backed guides on building software, hiring developers, choosing frameworks, and what projects really cost.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}/`}
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-brand-500/30 transition-colors"
            >
              <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-2">
                {g.category} · {g.readTime}
              </p>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {g.title}
              </h2>
              <p className="text-sm text-slate-400 line-clamp-3">{g.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Footer />
    </div>
  );
}
