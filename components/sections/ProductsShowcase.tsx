import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { products } from '@/lib/products-data';

// Homepage "Our Products" strip — showcases real products Web On Dev built
// (strong proof-of-work / E-E-A-T signal). Static (no JS-gated visibility).
const ProductsShowcase = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full gradient-border-subtle text-brand-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            Our Products
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-[1.1]">
            We build &amp; run our own <span className="gradient-text">products</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just ship software for clients — we design, launch, and operate our own. Proof that we build real, production products end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {products.map((p) => (
            <div
              key={p.slug}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-brand-500/20 transition-colors"
            >
              <Link href={`/products/${p.slug}/`} className="block border-b border-white/[0.06] bg-black/20" aria-label={p.name}>
                <Image
                  src={p.screenshot}
                  alt={`${p.name} screenshot`}
                  width={1280}
                  height={800}
                  className="w-full h-auto"
                  unoptimized
                />
              </Link>
              <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] uppercase tracking-wider text-brand-400 font-semibold">{p.category}</p>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-brand-400 transition-colors"
                  aria-label={`Visit ${p.name}`}
                >
                  {p.liveLabel} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-slate-300 mb-2">{p.tagline}</p>
              <p className="text-sm text-slate-400 mb-5 line-clamp-3">{p.heroDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.highlights.slice(0, 3).map((h) => (
                  <span key={h.label} className="text-xs rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-slate-300">
                    <span className="text-brand-400 font-semibold">{h.value}</span> {h.label}
                  </span>
                ))}
              </div>
              <Link
                href={`/products/${p.slug}/`}
                className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-semibold text-sm"
              >
                Explore {p.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 font-semibold transition-colors">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
