import { NextRequest, NextResponse } from 'next/server';

// Google Indexing API - FASTEST way to get Google to index your pages
// This pushes URLs directly to Google's index queue

const SITE_URL = 'https://www.webondev.com';

// Google Service Account credentials (set in Vercel Environment Variables)
const GOOGLE_SERVICE_ACCOUNT = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

interface GoogleCredentials {
  client_email: string;
  private_key: string;
}

// Get access token from Google using Service Account
async function getGoogleAccessToken(): Promise<string | null> {
  if (!GOOGLE_SERVICE_ACCOUNT) {
    console.log('❌ GOOGLE_SERVICE_ACCOUNT_JSON not set');
    return null;
  }

  try {
    const credentials: GoogleCredentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT);

    // Create JWT for Google OAuth
    const now = Math.floor(Date.now() / 1000);
    const jwt = await createJWT(credentials, now);

    // Exchange JWT for access token
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      })
    });

    const tokenData = await tokenRes.json();
    return tokenData.access_token || null;
  } catch (error) {
    console.error('Failed to get Google access token:', error);
    return null;
  }
}

// Create JWT for Google Service Account authentication
async function createJWT(credentials: GoogleCredentials, now: number): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encoder = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const signatureInput = `${headerB64}.${payloadB64}`;

  // Import private key and sign
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
  const signatureB64 = btoa(signatureStr)
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${signatureInput}.${signatureB64}`;
}

// Convert PEM to binary
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

// Submit URL to Google Indexing API
async function submitToGoogleIndexing(url: string, accessToken: string, action: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED') {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      url: url,
      type: action
    })
  });

  return {
    url,
    status: res.status,
    ok: res.ok,
    response: await res.json().catch(() => null)
  };
}

export async function POST(request: NextRequest) {
  console.log('🔍 Google Indexing API Request');

  try {
    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls || [];
    const submitAll = body.submitAll === true;

    // Get access token
    const accessToken = await getGoogleAccessToken();

    if (!accessToken) {
      return NextResponse.json({
        success: false,
        error: 'Google Service Account not configured',
        setup: {
          step1: 'Go to Google Cloud Console > APIs & Services > Credentials',
          step2: 'Create a Service Account',
          step3: 'Download the JSON key file',
          step4: 'Add GOOGLE_SERVICE_ACCOUNT_JSON to Vercel Environment Variables',
          step5: 'Add the service account email to Google Search Console as owner',
          docs: 'https://developers.google.com/search/apis/indexing-api/v3/prereqs'
        }
      }, { status: 400 });
    }

    let urlsToSubmit = urls;

    // If submitAll, fetch all URLs from sitemap
    if (submitAll || urls.length === 0) {
      const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, { cache: 'no-store' });
      const sitemapXml = await sitemapRes.text();
      const matches = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
      urlsToSubmit = matches.map(m => m.replace(/<\/?loc>/g, ''));
    }

    console.log(`📤 Submitting ${urlsToSubmit.length} URLs to Google Indexing API`);

    // Google Indexing API has rate limits: 200 requests per day
    // For large sitemaps, we'll submit the most important pages first
    const maxUrls = Math.min(urlsToSubmit.length, 200);
    const priorityUrls = urlsToSubmit.slice(0, maxUrls);

    const results = [];
    let successCount = 0;

    for (const url of priorityUrls) {
      const result = await submitToGoogleIndexing(url, accessToken);
      results.push(result);
      if (result.ok) successCount++;

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log(`✅ Google Indexing Complete: ${successCount}/${priorityUrls.length} successful`);

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to Google Indexing API',
      stats: {
        totalUrls: urlsToSubmit.length,
        submitted: priorityUrls.length,
        successful: successCount,
        dailyLimit: 200,
        remaining: 200 - priorityUrls.length
      },
      results: results.slice(0, 10) // Only return first 10 for readability
    });

  } catch (error) {
    console.error('❌ Google Indexing Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'Google Indexing API',
    usage: {
      submitSpecificUrls: 'POST with { "urls": ["https://..."] }',
      submitAllFromSitemap: 'POST with { "submitAll": true }'
    },
    limits: {
      dailyQuota: 200,
      note: 'Google allows 200 URL submissions per day'
    },
    setup: {
      required: 'GOOGLE_SERVICE_ACCOUNT_JSON environment variable',
      docs: 'https://developers.google.com/search/apis/indexing-api/v3/prereqs'
    }
  });
}
