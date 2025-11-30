import { NextRequest, NextResponse } from 'next/server';

// InstantLinkIndexer forwarder
// Env: INSTANTLINKINDEXER_WEBHOOK_URL
// POST JSON { urls: string[] }
export async function POST(req: NextRequest) {
  const hook = process.env.INSTANTLINKINDEXER_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: 'INSTANTLINKINDEXER_WEBHOOK_URL not set' }, { status: 500 });
  const payload = await req.json().catch(() => ({ urls: [] }));
  const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const text = await res.text();
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['INSTANTLINKINDEXER_WEBHOOK_URL'] });
}


