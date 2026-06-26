import { NextResponse } from 'next/server';
import { siteStructure } from '@/lib/site-structure';
import { blogData } from '@/lib/blog-data';
import { getAllProjectSlugs } from '@/lib/portfolio-data';

const BASE_URL = 'https://www.webondev.com';

// Standalone pillar slugs that 301-redirect to a primary pillar (see next.config.js).
// They must NOT appear in the sitemap — a sitemap should list only canonical 200 URLs,
// never redirect sources. Their child clusters are excluded with them.
const REDIRECTED_SLUGS = new Set([
  'react-development',
  'nextjs-development',
  'custom-software-development',
  'custom-web-development',
  'payment-gateway-integration',
  'prototyping',
  'shopify-development',
  'api-development',
  'wordpress-development',
  'progressive-web-apps',
]);

// ============================================================================
// SITEMAP — real, canonical pages only.
// Programmatic location ("where-we-serve") pages were permanently removed and
// now return HTTP 410, so they are intentionally excluded here.
// ============================================================================
export async function GET() {
  const now = new Date().toISOString();

  type Entry = { url: string; changefreq: string; priority: number };
  const entries: Entry[] = [];
  const add = (path: string, changefreq: string, priority: number) =>
    entries.push({ url: `${BASE_URL}${path}`, changefreq, priority });

  // Core pages
  add('/', 'weekly', 1.0);
  add('/about/', 'monthly', 0.8);
  add('/services/', 'monthly', 0.9);
  add('/portfolio/', 'weekly', 0.8);
  add('/blog/', 'daily', 0.9);
  add('/contact/', 'monthly', 0.7);
  add('/careers/', 'monthly', 0.5);
  add('/privacy/', 'yearly', 0.3);
  add('/terms/', 'yearly', 0.3);
  add('/cookies/', 'yearly', 0.3);
  add('/data-deletion/', 'yearly', 0.3);

  // Service pillar + cluster pages (skip redirect-source pillars)
  for (const pillar of siteStructure) {
    if (REDIRECTED_SLUGS.has(pillar.slug)) continue;
    add(`/${pillar.slug}/`, 'monthly', 0.8);
    for (const cluster of pillar.clusters || []) {
      add(`/${pillar.slug}/${cluster.slug}/`, 'monthly', 0.7);
    }
  }

  // Blog posts
  for (const post of blogData) {
    add(`/blog/${post.slug}/`, 'monthly', 0.6);
  }

  // Portfolio projects
  try {
    for (const slug of getAllProjectSlugs()) {
      add(`/portfolio/${slug}/`, 'monthly', 0.6);
    }
  } catch {}

  const urlEntries = entries
    .map(
      (e) => `
  <url>
    <loc>${e.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
