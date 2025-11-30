import { NextRequest, NextResponse } from 'next/server';

// Flickr uses OAuth 1.0a; implement a forwarder to a Make/Zapier scenario that performs the OAuth step.
// Env: FLICKR_WEBHOOK_URL (Zapier/Make webhook)
// POST JSON { imageUrl?: string, imageBase64?: string, title?: string, description?: string, tags?: string[] }
export async function POST(req: NextRequest) {
  const webhook = process.env.FLICKR_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: 'FLICKR_WEBHOOK_URL not set' }, { status: 500 });

  const payload = await req.json().catch(() => ({}));
  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const text = await res.text();
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['FLICKR_WEBHOOK_URL'] });
}


