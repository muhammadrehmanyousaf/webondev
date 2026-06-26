import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBaseUrl } from '@/lib/site-config';
import { getAllProductSlugs, getProductBySlug, products } from '@/lib/products-data';

export const revalidate = 86400;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found | Web On Dev' };

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/products/${product.slug}/`;
  return {
    title: `${product.metaTitle} | Web On Dev`,
    description: product.metaDescription,
    keywords: product.keywords.join(', '),
    alternates: { canonical },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      type: 'website',
      url: canonical,
      siteName: 'Web On Dev',
      locale: 'en_US',
      images: [{ url: `${siteUrl}${product.screenshot}`, width: 1440, height: 900, alt: `${product.name} screenshot` }],
    },
    twitter: { card: 'summary_large_image', title: product.metaTitle, description: product.metaDescription, site: '@webondev', images: [`${siteUrl}${product.screenshot}`] },
    robots: { index: true, follow: true },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const siteUrl = getBaseUrl();
  const canonical = `${siteUrl}/products/${product.slug}/`;
  const others = products.filter((p) => p.slug !== product.slug);

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${canonical}#software`,
    name: product.name,
    url: product.liveUrl,
    applicationCategory: product.appCategory,
    operatingSystem: 'Web',
    description: product.metaDescription,
    screenshot: `${siteUrl}${product.screenshot}`,
    image: `${siteUrl}${product.screenshot}`,
    creator: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Web On Dev' },
    publisher: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Web On Dev' },
    ...(product.pricing
      ? {
          offers: product.pricing.map((t) => ({
            '@type': 'Offer',
            name: t.name,
            price: t.price.replace(/[^0-9.]/g, '') || '0',
            priceCurrency: 'USD',
          })),
        }
      : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products/` },
      { '@type': 'ListItem', position: 3, name: product.name, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 sm:pt-20 pb-12 sm:pb-16">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,185,129,0.12), transparent 70%)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-brand-400">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/products" className="hover:text-brand-400">Products</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-slate-300">{product.name}</li>
              </ol>
            </nav>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-brand-400 font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" /> A Web On Dev Product · {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-3">{product.tagline}</p>
            <p className="text-base text-slate-400 max-w-2xl mb-8">{product.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3 font-semibold text-white hover:bg-brand-400 transition-colors"
              >
                Visit {product.name} <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3 font-semibold text-slate-200 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                Build a product like this <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">Live at {product.liveLabel}</p>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {product.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-brand-400">{h.value}</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Product screenshot (real capture of the live product) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 sm:p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src={product.screenshot}
              alt={`${product.name} — live product screenshot`}
              width={1280}
              height={800}
              className="w-full h-auto rounded-xl"
              priority
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-3">
            Live screenshot of {product.name} ({product.liveLabel})
          </p>
        </section>

        {/* Overview */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-slate-300 leading-relaxed">{product.overview}</p>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <h2 className="text-2xl font-bold text-white mb-6">Key features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <h3 className="font-semibold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing (if any) */}
        {product.pricing && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {product.pricing.map((t) => (
                <div key={t.name} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="text-sm text-slate-400">{t.name}</div>
                  <div className="text-2xl font-bold text-white my-1">{t.price}</div>
                  <p className="text-sm text-slate-400 mt-2">{t.blurb}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Prose sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {product.sections.map((s) => (
            <div key={s.heading} className="mb-8">
              <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
              <p className="text-slate-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </section>

        {/* Audience + Tech */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Who it's for</h2>
            <ul className="space-y-2">
              {product.audience.map((a) => (
                <li key={a} className="flex items-start gap-2 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Built with</h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((t) => (
                <span key={t} className="text-xs rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-slate-300">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Have a product idea?</h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Web On Dev designs and builds web platforms, mobile apps, and AI-native SaaS like {product.name}. Tell us what you want to build.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3 font-semibold text-white hover:bg-brand-400 transition-colors">
              Start your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Other products */}
        {others.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-lg font-bold text-white mb-4">More Web On Dev products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}/`} className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-brand-500/30 transition-colors">
                  <p className="text-[11px] uppercase tracking-wider text-brand-400 font-semibold mb-1">{p.category}</p>
                  <h3 className="font-semibold text-white group-hover:text-brand-400 transition-colors">{p.name}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Footer />
    </div>
  );
}
