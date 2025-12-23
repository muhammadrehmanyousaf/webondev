import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

    // Check if first segment is a country slug and NOT already where-we-serve
    if (COUNTRY_SLUGS.has(firstSegment) && firstSegment !== 'where-we-serve') {
      // Only redirect if it's just a country (1 segment) to /where-we-serve/{country}/
      // For URLs like /india/web-development/api-development/, redirect to the service page
      // because /where-we-serve/india/web-development/api-development/ doesn't exist (missing state/city)
      if (segments.length === 1) {
        // Just country - redirect to where-we-serve country page
        const newPath = `/where-we-serve/${firstSegment}`;
        const redirectUrl = new URL(newPath, req.url);
        return NextResponse.redirect(redirectUrl, 301);
      } else {
        // Country + more segments - redirect to service pages (without country prefix)
        // e.g., /india/web-development/api-development/ → /web-development/api-development/
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


