import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/admin')) {
    const required = process.env.ADMIN_API_TOKEN;
    if (!required) return NextResponse.next();
    const cookie = req.cookies.get('admin_token')?.value;
    const header = req.headers.get('x-admin-token') || req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
    const provided = header || cookie;
    if (provided && provided === required) return NextResponse.next();
    const loginUrl = new URL('/admin/login', req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};


