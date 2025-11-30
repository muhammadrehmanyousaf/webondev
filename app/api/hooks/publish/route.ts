import { NextRequest, NextResponse } from 'next/server';

// Optional outgoing hook dispatcher to Zapier/Make/IFTTT via env URL(s)
// Set envs: ZAPIER_HOOK_URL, MAKE_HOOK_URL, IFTTT_HOOK_URL
export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  const hooks = [
    { name: 'zapier', url: process.env.ZAPIER_HOOK_URL },
    { name: 'make', url: process.env.MAKE_HOOK_URL },
    { name: 'ifttt', url: process.env.IFTTT_HOOK_URL }
  ].filter((h) => !!h.url);

  const results: any[] = [];
  for (const h of hooks as { name: string; url: string }[]) {
    try {
      const res = await fetch(h.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      results.push({ name: h.name, status: res.status, ok: res.ok });
    } catch (e: any) {
      results.push({ name: h.name, ok: false, error: e?.message });
    }
  }

  return NextResponse.json({ ok: true, delivered: results });
}

export async function GET() {
  return NextResponse.json({ ok: true, hooks: {
    zapier: !!process.env.ZAPIER_HOOK_URL,
    make: !!process.env.MAKE_HOOK_URL,
    ifttt: !!process.env.IFTTT_HOOK_URL
  }});
}


