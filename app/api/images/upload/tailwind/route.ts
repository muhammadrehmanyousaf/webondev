import { NextRequest, NextResponse } from 'next/server';

// Tailwind (Pinterest scheduler) webhook forwarder
// Env: TAILWIND_WEBHOOK_URL
// POST JSON { imageUrl: string, link?: string, title?: string, description?: string, board?: string, scheduleAt?: string }
export async function POST(req: NextRequest) {
  const url = process.env.TAILWIND_WEBHOOK_URL;
  if (!url) return NextResponse.json({ error: 'TAILWIND_WEBHOOK_URL not set' }, { status: 500 });
  const payload = await req.json().catch(() => ({}));
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const text = await res.text();
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['TAILWIND_WEBHOOK_URL'] });
}


