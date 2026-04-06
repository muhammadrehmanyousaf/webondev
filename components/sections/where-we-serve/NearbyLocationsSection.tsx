import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { toSlug } from '@/lib/slug';

// =============================================================================
// NEARBY LOCATIONS SECTION - Internal Cross-Linking for SEO
// =============================================================================

interface NearbyLocationsSectionProps {
  /** Current location name to exclude from the list */
  currentName: string;
  /** Type of sibling locations being shown */
  type: 'city' | 'state';
  /** Array of sibling location names */
  siblings: string[];
  /** Parent path segments for building URLs */
  parentPath: string;
  /** Label for the parent area (e.g., state name or country name) */
  parentName: string;
}

export default function NearbyLocationsSection({
  currentName,
  type,
  siblings,
  parentPath,
  parentName,
}: NearbyLocationsSectionProps) {
  const filtered = siblings
    .filter((name) => name !== currentName)
    .slice(0, 24);

  if (filtered.length === 0) return null;

  const heading =
    type === 'city'
      ? `More cities we serve in ${parentName}`
      : `More states we serve in ${parentName}`;

  const description =
    type === 'city'
      ? `Explore our software development services across ${parentName}. We deliver web apps, mobile apps, and custom software to businesses in every city.`
      : `Discover our software development services across ${parentName}. From web development to mobile apps, we serve businesses in every state and region.`;

  return (
    <section className="relative py-16 sm:py-20 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-brand-400 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Nearby Locations</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-white">{heading}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((name) => (
            <Link
              key={name}
              href={`${parentPath}/${toSlug(name)}/`}
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
