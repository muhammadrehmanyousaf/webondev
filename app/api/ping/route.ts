import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

// Passive, safe pings to discovery endpoints; extend with provider-specific hooks as needed.
export async function POST(req: NextRequest) {
  const baseUrl = getBaseUrl();
  const homepage = baseUrl;

  // Targets are conservative and safe. Many accept no auth; others can be added later.
  const targets: { name: string; url: string; method?: 'GET'|'POST'; body?: URLSearchParams }[] = [
    // WebSub publish handled separately; keep here for visibility
    { name: 'WebSub', url: `${baseUrl}/api/websub/publish`, method: 'POST' },
    // Feedburner-style (legacy) generic ping endpoints can be added if desired
  ];

  const results: any[] = [];
  for (const t of targets) {
    try {
      const res = await fetch(t.url, { method: t.method || 'GET', body: t.body });
      const text = await res.text();
      results.push({ name: t.name, url: t.url, ok: res.ok, status: res.status, snippet: text.slice(0, 200) });
    } catch (e: any) {
      results.push({ name: t.name, url: t.url, ok: false, error: e?.message });
    }
  }

  return NextResponse.json({ ok: true, homepage, results });
}

export async function GET() {
  // Convenience GET
  const req = new Request('http://local', { method: 'POST' });
  // @ts-expect-error NextRequest not required for reuse here; delegate to POST
  return POST(req);
}


