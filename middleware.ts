import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Minimal body returned for permanently-removed location pages (HTTP 410 Gone).
const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page removed</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;text-align:center}a{color:#38bdf8}</style></head><body><div><h1>This page has been removed</h1><p>It is no longer available. Explore our <a href="/services">services</a> or visit the <a href="/">homepage</a>.</p></div></body></html>`;

// Common country slugs for redirect handling
// These are countries that might appear as direct routes without /where-we-serve/
const COUNTRY_SLUGS = new Set([
  'india', 'united-states', 'united-kingdom', 'canada', 'australia', 'germany',
  'france', 'brazil', 'mexico', 'japan', 'china', 'south-korea', 'singapore',
  'netherlands', 'sweden', 'norway', 'denmark', 'finland', 'switzerland',
  'austria', 'belgium', 'ireland', 'new-zealand', 'south-africa', 'uae',
  'united-arab-emirates', 'saudi-arabia', 'israel', 'poland', 'spain', 'italy',
  'portugal', 'russia', 'ukraine', 'turkey', 'egypt', 'nigeria', 'kenya',
  'indonesia', 'malaysia', 'thailand', 'vietnam', 'philippines', 'pakistan',
  'bangladesh', 'argentina', 'chile', 'colombia', 'peru', 'venezuela',
  // Country codes
  'us', 'uk', 'gb', 'ca', 'au', 'de', 'fr', 'br', 'mx', 'jp', 'cn', 'kr',
  'sg', 'nl', 'se', 'no', 'dk', 'fi', 'ch', 'at', 'be', 'ie', 'nz', 'za',
  'ae', 'sa', 'il', 'pl', 'es', 'it', 'pt', 'ru', 'ua', 'tr', 'eg', 'ng',
  'ke', 'id', 'my', 'th', 'vn', 'ph', 'pk', 'bd', 'ar', 'cl', 'co', 'pe', 've'
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host') || '';

  // ── WWW Redirect ──
  // Force all traffic to www.webondev.com (prevents duplicate content in Google)
  // This was previously handled by vercel.json but Railway ignores that file
  if (
    host === 'webondev.com' ||
    host === 'webondev.com:3000'
  ) {
    const url = new URL(`https://www.webondev.com${pathname}${req.nextUrl.search}`);
    return NextResponse.redirect(url, 301);
  }

  // ── 410 Gone: removed location/doorway pages ──
  // The entire /where-we-serve/* tree was deleted (programmatic doorway pages).
  // Return HTTP 410 so Google permanently de-indexes them (stronger than 404).
  // IMPORTANT: robots.txt must NOT block /where-we-serve, or Googlebot can never
  // crawl these to see the 410.
  if (pathname === '/where-we-serve' || pathname.startsWith('/where-we-serve/')) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  // Admin routes protection
  if (pathname.startsWith('/admin')) {
    const required = process.env.ADMIN_API_TOKEN;
    if (!required) return NextResponse.next();
    const cookie = req.cookies.get('admin_token')?.value;
    const header = req.headers.get('x-admin-token') || req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
    const provided = header || cookie;
    if (provided && provided === required) return NextResponse.next();
    const loginUrl = new URL('/admin/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Handle direct country routes - redirect appropriately
  // This handles indexed URLs like /india/web-development/api-development/
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 1) {
    const firstSegment = segments[0].toLowerCase();

    // Check if first segment is a bare country slug (legacy location URLs)
    if (COUNTRY_SLUGS.has(firstSegment) && firstSegment !== 'where-we-serve') {
      if (segments.length === 1) {
        // Bare country (e.g. /india) was a removed location page → 410 Gone.
        return new NextResponse(GONE_HTML, {
          status: 410,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      } else {
        // Country + service segments (e.g. /india/web-development/api-development/)
        // → salvage the real service page by stripping the country prefix.
        const serviceSegments = segments.slice(1);
        const newPath = `/${serviceSegments.join('/')}`;
        const redirectUrl = new URL(newPath, req.url);
        return NextResponse.redirect(redirectUrl, 301);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    // Match potential country-based routes (exclude static files and API routes)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ]
};


