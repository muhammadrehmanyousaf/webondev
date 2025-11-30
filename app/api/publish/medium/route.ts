import { NextRequest, NextResponse } from 'next/server';
import { ensureAdminToken } from '@/app/api/_utils/auth';
import { getBaseUrl } from '@/lib/site-config';

// Medium import forwarder: we forward payload to a webhook scenario that runs Medium Import Tool with canonical link.
// Env: MEDIUM_WEBHOOK_URL
// POST JSON { url: string, title?: string }
export async function POST(req: NextRequest) {
  const gate = ensureAdminToken(req);
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 });
  const hook = process.env.MEDIUM_WEBHOOK_URL;
  if (!hook) return NextResponse.json({ error: 'MEDIUM_WEBHOOK_URL not set' }, { status: 500 });
  const payload = await req.json().catch(() => ({}));
  const baseUrl = getBaseUrl();
  // Ensure canonical lives on site
  if (payload?.url && typeof payload.url === 'string' && !payload.url.startsWith(baseUrl)) {
    return NextResponse.json({ error: 'url must be your canonical domain' }, { status: 400 });
  }
  const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const text = await res.text();
  try { await fetch(`${baseUrl}/api/websub/publish`, { method: 'POST' }); } catch {}
  return NextResponse.json({ ok: res.ok, status: res.status, response: text.slice(0, 500) });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['MEDIUM_WEBHOOK_URL'] });
}


