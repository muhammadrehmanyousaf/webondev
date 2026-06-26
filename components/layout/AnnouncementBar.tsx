'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { products } from '@/lib/products-data';

const DISMISS_KEY = 'wod-products-announcement-dismissed';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === '1') setVisible(false);
    } catch {}
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {}
  };

  return (
    <div className="relative z-[60] w-full border-b border-white/[0.08] bg-gradient-to-r from-slate-950 via-[#0a1020] to-slate-950">
      {/* hairline accent glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-10 py-2 text-center text-[12px] sm:text-[13px]">
        <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.14em] text-brand-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
          </span>
          Coming soon
        </span>
        <span aria-hidden className="hidden text-slate-600 sm:inline">·</span>
        <span className="text-slate-300">Two products, built by Web On Dev —</span>
        {products.map((p, i) => (
          <React.Fragment key={p.slug}>
            {i > 0 && <span aria-hidden className="text-slate-600">·</span>}
            <Link
              href={`/products/${p.slug}/`}
              className={`font-semibold underline-offset-4 hover:underline ${p.theme.barText}`}
            >
              {p.name}
            </Link>
          </React.Fragment>
        ))}
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 transition-colors hover:bg-white/[0.06] hover:text-slate-300"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
