import { NextRequest, NextResponse } from 'next/server';

// Schedules reshares by selecting URLs from feeds and forwarding to a webhook for queueing.
// Env: EVERGREEN_WEBHOOK_URL
// POST JSON { feed: 'services'|'locations'|'portfolio', format?: 'rss'|'atom'|'json', limit?: number }
export async function POST(req: NextRequest) {
  const hook = process.env.EVERGREEN_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: 'EVERGREEN_WEBHOOK_URL not set' }, { status: 500 });
  const body = await req.json().catch(() => ({ feed: 'services', format: 'json', limit: 50 }));
  const feed = body.feed || 'services';
  const format = (body.format || 'json').toLowerCase();
  const limit = Math.max(1, Math.min(1000, Number(body.limit || 100)));

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const feedUrl = `${base}/feeds/${feed}?format=${format}&limit=${limit}`;
  const res = await fetch(feedUrl);
  if (!res.ok) return NextResponse.json({ error: 'Failed to read feed' }, { status: 502 });

  let urls: string[] = [];
  if (format === 'json') {
    const json = await res.json();
    urls = (json.items || []).map((it: any) => it.url).filter(Boolean);
  } else {
    const text = await res.text();
    urls = Array.from(text.matchAll(/<link[^>]*>([^<]+)<\/link>/g)).map((m) => m[1]).filter((u) => /^https?:\/\//.test(u));
  }

  const forward = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ feed, urls }) });
  const ftext = await forward.text();
  return NextResponse.json({ ok: forward.ok, status: forward.status, count: urls.length, response: ftext.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['EVERGREEN_WEBHOOK_URL'] });
}


