import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';
import { getAllGuideSlugs, getGuideMeta, getRelatedGuides, loadGuide } from '@/lib/guides';

export const revalidate = 86400;

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  if (!meta) return { title: 'Guide Not Found | Web On Dev' };

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/guides/${meta.slug}/`;
  return {
    title: `${meta.title} | Web On Dev`,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      url: canonical,
      siteName: 'Web On Dev',
      locale: 'en_US',
      publishedTime: meta.date,
      modifiedTime: meta.date,
      images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: '@webondev',
    },
    robots: { index: true, follow: true },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = loadGuide(slug);
  if (!guide) notFound();

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/guides/${guide.slug}/`;
  const related = getRelatedGuides(guide.slug, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Web On Dev' },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Web On Dev',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/branding/logo.png`, width: 512, height: 512 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    articleSection: guide.category,
    keywords: guide.keywords.join(', '),
    inLanguage: 'en-US',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/guides/` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-brand-400">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/guides" className="hover:text-brand-400">Guides</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-slate-300">{guide.title}</li>
          </ol>
        </nav>

        <p className="text-xs uppercase tracking-wider text-brand-400 font-semibold mb-3">
          {guide.category} · {guide.readTime}
        </p>

        <article className="guide-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{guide.body}</ReactMarkdown>
        </article>

        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to start your project?</h2>
          <p className="text-slate-400 mb-5">Tell us what you're building — get a free consultation and a transparent quote.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-400 transition-colors">
            Get a Free Consultation
          </Link>
        </div>

        {related.length > 0 && (
          <section className="mt-14 pt-10 border-t border-white/[0.08]">
            <h2 className="text-lg font-bold text-white mb-5">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/guides/${r.slug}/`}
                  className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-brand-500/30 transition-colors"
                >
                  <p className="text-[11px] uppercase tracking-wider text-brand-400 font-semibold mb-1.5">{r.category}</p>
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-brand-400 transition-colors leading-snug">{r.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {guide.faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: guide.faqJsonLd }} />
      )}

      <Footer />
    </div>
  );
}
