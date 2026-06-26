import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { products } from '@/lib/products-data';

// Homepage "Our Products" banners — large, alternating, browser-framed screenshots
// with each product's own accent glow. Real products Web On Dev built (proof-of-work),
// teased as "coming soon".
const ProductsShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full gradient-border-subtle px-3 py-1 text-xs font-medium text-brand-400 sm:px-4 sm:py-1.5 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Our Products
          </div>
          <h2 className="text-2xl font-bold leading-[1.1] text-white sm:text-3xl lg:text-5xl">
            Two products we built —{' '}
            <span className="gradient-text">launching soon</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
            We don&apos;t just ship software for clients. We design, build, and run our own — proof that we take a product from idea to launch end-to-end.
          </p>
        </div>

        {/* Banners */}
        <div className="space-y-6 sm:space-y-8">
          {products.map((p, i) => {
            const imageRight = i % 2 === 1;
            return (
              <article
                key={p.slug}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] transition-colors hover:border-white/[0.14]"
              >
                {/* accent glow drawn from the product's own world */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background: `radial-gradient(70% 90% at ${imageRight ? '85%' : '15%'} 50%, ${p.theme.glow}, transparent 70%)`,
                  }}
                />

                <div className="relative grid items-stretch gap-0 lg:grid-cols-2">
                  {/* Screenshot in a clean browser frame */}
                  <div className={`p-5 sm:p-8 lg:p-10 ${imageRight ? 'lg:order-2' : ''}`}>
                    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-black/30 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.7)]">
                      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="ml-3 truncate rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-500">
                          {p.liveLabel}
                        </span>
                      </div>
                      <Image
                        src={p.screenshot}
                        alt={`${p.name} — product preview`}
                        width={1280}
                        height={800}
                        className="h-auto w-full"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-12 ${imageRight ? 'lg:order-1' : ''}`}>
                    <div className="mb-4 flex flex-wrap items-center gap-2.5">
                      {p.comingSoon && (
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${p.theme.pill}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${p.theme.dot}`} />
                          Coming soon
                        </span>
                      )}
                      <span className={`text-[11px] font-semibold uppercase tracking-wider ${p.theme.eyebrow}`}>
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
                    <p className="mt-2 text-base text-slate-300">{p.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">{p.heroDescription}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h.label}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                        >
                          <span className="font-semibold text-white">{h.value}</span> {h.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/products/${p.slug}/`}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
                      >
                        Explore {p.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.03]"
                      >
                        Preview <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
