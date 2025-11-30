import { NextRequest, NextResponse } from 'next/server';

// Minimal Webmention receiver stub. Validates required params and logs; extend to store/process if desired.
export async function POST(req: NextRequest) {
  const data = await req.formData().catch(() => null);
  const source = (data?.get('source') || '').toString();
  const target = (data?.get('target') || '').toString();

  if (!source || !target) {
    return NextResponse.json({ error: 'source and target are required' }, { status: 400 });
  }

  // For now, accept and noop. Optionally, validate target is on our domain.
  return NextResponse.json({ ok: true, received: { source, target } }, { status: 202 });
}

export async function GET() {
  // Discovery documentation could be returned here
  return NextResponse.json({ ok: true, message: 'Webmention endpoint. POST form-encoded source and target.' });
}


