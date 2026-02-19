import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';
const SITE_URL = 'https://www.webondev.com';
const GOOGLE_SERVICE_ACCOUNT = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

// ═══════════════════════════════════════════════════════════════════
// MASTER CRON JOB - Pings ALL search engines daily
// ═══════════════════════════════════════════════════════════════════
// 1. IndexNow  → Bing, Yandex (all URLs, no limit)
// 2. Google Indexing API → Google (200 URLs/day limit - sends priority pages first)
// 3. Google Sitemap Ping → Tells Google "sitemap changed, come recrawl"
// ═══════════════════════════════════════════════════════════════════

// ── Priority URL patterns (submitted to Google first since 200/day limit) ──
const PRIORITY_PATTERNS = [
  /^\/$/, // Homepage
  /^\/web-development\//,
  /^\/mobile-app-development\//,
  /^\/ui-ux-design\//,
  /^\/digital-marketing\//,
  /^\/e-commerce-development\//,
  /^\/cloud-devops\//,
  /^\/where-we-serve\/$/, // Main location hub
  /^\/where-we-serve\/united-states/,
  /^\/where-we-serve\/united-kingdom/,
  /^\/where-we-serve\/canada/,
  /^\/where-we-serve\/australia/,
  /^\/where-we-serve\/india/,
  /^\/where-we-serve\/germany/,
  /^\/where-we-serve\/uae/,
  /^\/where-we-serve\/singapore/,
  /^\/where-we-serve\/saudi-arabia/,
  /^\/where-we-serve\/netherlands/,
  /^\/blog\//,
  /^\/about\//,
  /^\/contact\//,
  /^\/portfolio\//,
  /^\/services\//,
];

function sortByPriority(urls: string[]): string[] {
  const priority: string[] = [];
  const rest: string[] = [];

  for (const url of urls) {
    const path = url.replace(SITE_URL, '');
    if (PRIORITY_PATTERNS.some(p => p.test(path))) {
      priority.push(url);
    } else {
      rest.push(url);
    }
  }

  return [...priority, ...rest];
}

// ── Google JWT Auth (same as google-indexing route) ──

interface GoogleCredentials {
  client_email: string;
  private_key: string;
}

async function getGoogleAccessToken(): Promise<string | null> {
  if (!GOOGLE_SERVICE_ACCOUNT) return null;

  try {
    const credentials: GoogleCredentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT);
    const now = Math.floor(Date.now() / 1000);

    const header = { alg: 'RS256', typ: 'JWT' };
    const payload = {
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const encoder = new TextEncoder();
    const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const signatureInput = `${headerB64}.${payloadB64}`;

    const privateKey = await crypto.subtle.importKey(
      'pkcs8',
      pemToBinary(credentials.private_key),
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      privateKey,
      encoder.encode(signatureInput)
    );

    const signatureBytes = new Uint8Array(signature);
    let signatureStr = '';
    for (let i = 0; i < signatureBytes.length; i++) {
      signatureStr += String.fromCharCode(signatureBytes[i]);
    }
    const signatureB64 = btoa(signatureStr).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

    const jwt = `${signatureInput}.${signatureB64}`;

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    const tokenData = await tokenRes.json();
    return tokenData.access_token || null;
  } catch (error) {
    console.error('Google auth failed:', error);
    return null;
  }
}

function pemToBinary(pem: string): ArrayBuffer {
  const b64 = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// ── Fetch all URLs from sitemap ──

async function fetchSitemapUrls(): Promise<string[]> {
  const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, { cache: 'no-store' });
  const sitemapXml = await sitemapRes.text();

  // Check if this is a sitemap index (contains other sitemaps)
  const sitemapLinks = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
  let allUrls: string[] = [];

  for (const match of sitemapLinks) {
    const url = match.replace(/<\/?loc>/g, '');

    if (url.includes('sitemap') && url.endsWith('.xml')) {
      // This is a sub-sitemap - fetch its URLs too
      try {
        const subRes = await fetch(url, { cache: 'no-store' });
        const subXml = await subRes.text();
        const subMatches = subXml.match(/<loc>([^<]+)<\/loc>/g) || [];
        allUrls.push(...subMatches.map(m => m.replace(/<\/?loc>/g, '')));
      } catch {
        console.log(`  Failed to fetch sub-sitemap: ${url}`);
      }
    } else {
      allUrls.push(url);
    }
  }

  return allUrls;
}

// ═══════════════════════════════════════════════════════════════════
// STEP 1: IndexNow (Bing + Yandex) - No daily limit
// ═══════════════════════════════════════════════════════════════════

async function submitToIndexNow(allUrls: string[]) {
  const batchSize = 10000;
  const results: Array<{ endpoint: string; batch: number; status: number | string; ok: boolean }> = [];

  for (let i = 0; i < allUrls.length; i += batchSize) {
    const batch = allUrls.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;

    console.log(`  IndexNow batch ${batchNum}: ${batch.length} URLs`);

    const payload = {
      host: 'www.webondev.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: batch,
    };

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ];

    for (const endpoint of endpoints) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        results.push({ endpoint, batch: batchNum, status: res.status, ok: res.ok });
        console.log(`    ${endpoint}: ${res.status}`);
      } catch {
        results.push({ endpoint, batch: batchNum, status: 'error', ok: false });
        console.log(`    ${endpoint}: FAILED`);
      }
    }
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════
// STEP 2: Google Indexing API - 200 URLs/day (priority pages first)
// ═══════════════════════════════════════════════════════════════════

async function submitToGoogleIndexing(sortedUrls: string[]) {
  const accessToken = await getGoogleAccessToken();

  if (!accessToken) {
    console.log('  Google Indexing API: SKIPPED (no service account configured)');
    return { submitted: 0, success: 0, skipped: true };
  }

  const maxUrls = Math.min(sortedUrls.length, 200);
  const urlsToSubmit = sortedUrls.slice(0, maxUrls);
  let successCount = 0;

  console.log(`  Google Indexing API: Submitting ${maxUrls} priority URLs...`);

  for (const url of urlsToSubmit) {
    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      });

      if (res.ok) successCount++;

      // Small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 50));
    } catch {
      // Continue with next URL
    }
  }

  console.log(`  Google Indexing API: ${successCount}/${maxUrls} successful`);
  return { submitted: maxUrls, success: successCount, skipped: false };
}

// ═══════════════════════════════════════════════════════════════════
// STEP 3: Google Sitemap Ping - Tell Google your sitemap changed
// ═══════════════════════════════════════════════════════════════════

async function pingGoogleSitemap() {
  try {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
    const res = await fetch(pingUrl);
    console.log(`  Google Sitemap Ping: ${res.status}`);
    return { status: res.status, ok: res.ok };
  } catch {
    console.log('  Google Sitemap Ping: FAILED');
    return { status: 'error', ok: false };
  }
}

// ═══════════════════════════════════════════════════════════════════
// MAIN HANDLER
// ═══════════════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  // Auth check - supports Vercel cron header, query param, or no-auth if CRON_SECRET not set
  const authHeader = request.headers.get('authorization');
  const querySecret = request.nextUrl.searchParams.get('secret');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret) {
    const provided = authHeader?.replace(/^Bearer\s+/i, '') || querySecret;
    if (provided !== cronSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  console.log('=== MASTER AUTO-INDEX CRON STARTED ===');
  const startTime = Date.now();

  try {
    // Fetch all URLs
    console.log('Step 0: Fetching sitemap URLs...');
    const allUrls = await fetchSitemapUrls();
    const sortedUrls = sortByPriority(allUrls);
    console.log(`Found ${allUrls.length} URLs total`);

    // Step 1: IndexNow (Bing + Yandex)
    console.log('\nStep 1: IndexNow (Bing + Yandex)...');
    const indexNowResults = await submitToIndexNow(allUrls);

    // Step 2: Google Indexing API
    console.log('\nStep 2: Google Indexing API...');
    const googleResults = await submitToGoogleIndexing(sortedUrls);

    // Step 3: Google Sitemap Ping
    console.log('\nStep 3: Google Sitemap Ping...');
    const pingResult = await pingGoogleSitemap();

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n=== CRON COMPLETE in ${duration}s ===`);

    return NextResponse.json({
      success: true,
      message: 'Master auto-index cron completed',
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      stats: {
        totalUrls: allUrls.length,
        indexNow: {
          requests: indexNowResults.length,
          successful: indexNowResults.filter(r => r.ok).length,
        },
        googleIndexingApi: googleResults,
        googleSitemapPing: pingResult,
      },
    });
  } catch (error) {
    console.error('CRON ERROR:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Also support POST for manual triggering
export async function POST(request: NextRequest) {
  return GET(request);
}
