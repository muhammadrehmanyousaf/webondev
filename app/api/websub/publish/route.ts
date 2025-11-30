import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

// Minimal WebSub publish endpoint to notify hub that feeds were updated.
// This is safe and idempotent; it can be called after publishing content.
export async function POST(req: NextRequest) {
  const hubUrl = 'https://pubsubhubbub.appspot.com/';
  const baseUrl = getBaseUrl();

  const feeds = [
    `${baseUrl}/feed.xml`,
    `${baseUrl}/feeds/atom`,
    `${baseUrl}/feeds/json`,
    `${baseUrl}/sitemaps/rss`
  ];

  try {
    const body = new URLSearchParams();
    body.set('hub.mode', 'publish');
    feeds.forEach((topic) => body.append('hub.url', topic));

    const res = await fetch(hubUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });

    const text = await res.text();
    return new NextResponse(JSON.stringify({ ok: res.ok, status: res.status, hub: hubUrl, topics: feeds, response: text }), {
      status: res.ok ? 200 : 502,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ ok: false, error: error?.message || 'Publish failed' }), { status: 500 });
  }
}

export async function GET() {
  // Convenience: allow GET for quick manual tests
  const req = new Request('http://local', { method: 'POST' });
  // @ts-expect-error NextRequest not required for reuse here; delegate to POST
  return POST(req);
}


