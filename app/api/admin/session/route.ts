import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const required = process.env.ADMIN_API_TOKEN;
  if (!required) {
    const body = await req.json().catch(() => null);
    const provided = body?.token || '';
    const res = NextResponse.json({ ok: true, note: 'Admin token not configured; allowing login' });
    res.cookies.set('admin_token', provided, { httpOnly: true, sameSite: 'lax', secure: true, path: '/' });
    return res;
  }
  const body = await req.json().catch(() => null);
  const token = body?.token;
  if (!token || token !== required) return new NextResponse('Invalid token', { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_token', token, { httpOnly: true, sameSite: 'lax', secure: true, path: '/' });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_token', '', { httpOnly: true, sameSite: 'lax', secure: true, path: '/', maxAge: 0 });
  return res;
}


