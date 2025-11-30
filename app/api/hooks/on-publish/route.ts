import { NextRequest, NextResponse } from 'next/server';

// CI/CD or CMS webhook: call to fan-out publish + WebSub
// POST JSON { title, canonicalPath, bodyMarkdown, tags?[] }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.title || !body?.canonicalPath || !body?.bodyMarkdown) {
    return NextResponse.json({ error: 'title, canonicalPath, bodyMarkdown required' }, { status: 400 });
  }
  // Fan-out using orchestrator
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/publish/syndicate`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
  });
  const json = await res.json();
  return NextResponse.json({ ok: res.ok, status: res.status, results: json?.results });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}


