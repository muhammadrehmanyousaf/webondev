import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { toSlug } from '@/lib/slug';

// =============================================================================
// SERVICE CITY LINKS - Cross-linking same service in sibling cities for SEO
// =============================================================================

interface ServiceCityLinksProps {
  currentCity: string;
  siblingCities: string[];
  countrySlug: string;
  stateSlug: string;
  serviceSlug: string;
  stateName: string;
}

export default function ServiceCityLinks({
  currentCity,
  siblingCities,
  countrySlug,
  stateSlug,
  serviceSlug,
  stateName,
}: ServiceCityLinksProps) {
  const filtered = siblingCities
    .filter((name) => name !== currentCity)
    .slice(0, 20);

  if (filtered.length === 0) return null;

  return (
    <section className="relative py-14 sm:py-16 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Also Available In</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-white">This service in other </span>
            <span className="gradient-text">{stateName} cities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            We deliver the same world-class quality across every city in {stateName}. Find your local service page below.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((name) => (
            <Link
              key={name}
              href={`/where-we-serve/${countrySlug}/${stateSlug}/${toSlug(name)}/${serviceSlug}/`}
              className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-500/30 hover:bg-white/[0.04] transition-all duration-200"
            >
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors truncate">
                {name}
              </span>
              <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-brand-400 flex-shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
