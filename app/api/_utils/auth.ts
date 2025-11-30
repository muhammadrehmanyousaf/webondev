import { NextRequest } from 'next/server';

export function ensureAdminToken(req: NextRequest): { ok: boolean; error?: string } {
  const token = process.env.ADMIN_API_TOKEN;
  if (!token) return { ok: true }; // if not set, do not block
  const incoming = req.headers.get('x-admin-token') || req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (incoming && incoming === token) return { ok: true };
  return { ok: false, error: 'Unauthorized' };
}


