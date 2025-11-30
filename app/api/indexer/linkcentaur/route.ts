import { NextRequest, NextResponse } from 'next/server';

// Link Centaur API wrapper (generic webhook forwarder)
// Env: LINKCENTAUR_WEBHOOK_URL
// POST JSON { urls: string[] }
export async function POST(req: NextRequest) {
  const hook = process.env.LINKCENTAUR_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: 'LINKCENTAUR_WEBHOOK_URL not set' }, { status: 500 });
  const payload = await req.json().catch(() => ({ urls: [] }));
  const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const text = await res.text();
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['LINKCENTAUR_WEBHOOK_URL'] });
}


