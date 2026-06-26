import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';
import { products } from '@/lib/products-data';

export const revalidate = 86400;

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Our Products | Web On Dev',
  description:
    'Products designed and built by Web On Dev — including Schedura (AI social media automation) and Wedding Wala (Pakistan wedding vendor marketplace).',
  alternates: { canonical: `${siteUrl}/products/` },
  openGraph: {
    title: 'Our Products | Web On Dev',
    description: 'Software products designed and built by Web On Dev: Schedura and Wedding Wala.',
    url: `${siteUrl}/products/`,
    type: 'website',
    siteName: 'Web On Dev',
  },
  robots: { index: true, follow: true },
};

export default function ProductsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Web On Dev Products',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${siteUrl}/products/${p.slug}/`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-3">Our Products</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Products we build &amp; run</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just build software for clients — we design, ship, and operate our own products.
            Here&apos;s what Web On Dev has built.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}/`}
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 hover:border-brand-500/30 transition-colors"
            >
              <p className="text-[11px] uppercase tracking-wider text-brand-400 font-semibold mb-2">{p.category}</p>
              <h2 className="text-xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{p.name}</h2>
              <p className="text-sm text-slate-300 mb-3">{p.tagline}</p>
              <p className="text-sm text-slate-400 line-clamp-3 mb-4">{p.heroDescription}</p>
              <span className="inline-flex items-center gap-1.5 text-brand-400 text-sm font-semibold">
                Explore {p.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Want us to build your product?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">From idea to launched product — web platforms, mobile apps, and AI-native SaaS.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3 font-semibold text-white hover:bg-brand-400 transition-colors">
            Start your project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Footer />
    </div>
  );
}
