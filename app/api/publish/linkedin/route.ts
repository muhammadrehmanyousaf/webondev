import { NextRequest, NextResponse } from 'next/server';
import { ensureAdminToken } from '@/app/api/_utils/auth';
import { getBaseUrl } from '@/lib/site-config';

// LinkedIn Article/UGC forwarder using webhook (Zapier/Make) due to OAuth complexity
// Env: LINKEDIN_WEBHOOK_URL
// POST JSON { title, text, canonicalPath }
export async function POST(req: NextRequest) {
  const gate = ensureAdminToken(req);
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 });
  const hook = process.env.LINKEDIN_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: 'LINKEDIN_WEBHOOK_URL not set' }, { status: 500 });
  const baseUrl = getBaseUrl();
  const body = await req.json().catch(() => null);
  if (!body?.title || !body?.text || !body?.canonicalPath) {
    return NextResponse.json({ error: 'title, text, canonicalPath required' }, { status: 400 });
  }
  const canonical_url = `${baseUrl}${body.canonicalPath.replace(/^\//, '/')}`;
  const payload = { ...body, canonical_url, utm: `${canonical_url}?utm_source=linkedin&utm_medium=syndication&utm_campaign=canonical` };
  const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const text = await res.text();
  try { await fetch(`${baseUrl}/api/websub/publish`, { method: 'POST' }); } catch {}
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['LINKEDIN_WEBHOOK_URL'] });
}


