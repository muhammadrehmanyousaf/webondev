import { NextRequest, NextResponse } from 'next/server';

// IndexMeNow API wrapper
// Env: INDEXMENOW_API_KEY
// POST JSON { urls: string[] }
export async function POST(req: NextRequest) {
  const key = process.env.INDEXMENOW_API_KEY;
  if (!key) return NextResponse.json({ error: 'INDEXMENOW_API_KEY not set' }, { status: 500 });
  const body = await req.json().catch(() => null);
  const urls: string[] = body?.urls || [];
  if (!urls.length) return NextResponse.json({ error: 'urls required' }, { status: 400 });
  const res = await fetch('https://www.indexmenow.com/api/indexing', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'apikey': key },
    body: JSON.stringify({ urls })
  });
  const json = await res.json();
  return NextResponse.json({ ok: res.ok, status: res.status, data: json });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['INDEXMENOW_API_KEY'] });
}


