import { NextRequest, NextResponse } from 'next/server';
import { ensureAdminToken } from '@/app/api/_utils/auth';
import { getBaseUrl } from '@/lib/site-config';

// Orchestrates publishing to Dev.to, Medium, LinkedIn and schedules evergreen.
// POST JSON { title, bodyMarkdown, tags?, canonicalPath, medium?: {url?}, linkedin?: {text?}, evergreen?: {feed?, format?, limit?} }
export async function POST(req: NextRequest) {
  const gate = ensureAdminToken(req);
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 });
  const baseUrl = getBaseUrl();
  const payload = await req.json().catch(() => null);
  if (!payload?.title || !payload?.bodyMarkdown || !payload?.canonicalPath) {
    return NextResponse.json({ error: 'title, bodyMarkdown, canonicalPath required' }, { status: 400 });
  }

  const results: Record<string, any> = {};

  // Dev.to
  try {
    const res = await fetch(`${baseUrl}/api/publish/devto`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: payload.title, bodyMarkdown: payload.bodyMarkdown, tags: payload.tags || [], canonicalPath: payload.canonicalPath })
    });
    results.devto = { ok: res.ok, status: res.status };
  } catch (e: any) { results.devto = { ok: false, error: e?.message }; }

  // Medium
  try {
    const url = `${baseUrl}${payload.canonicalPath.replace(/^\//, '/')}`;
    const res = await fetch(`${baseUrl}/api/publish/medium`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, title: payload.title })
    });
    results.medium = { ok: res.ok, status: res.status };
  } catch (e: any) { results.medium = { ok: false, error: e?.message }; }

  // LinkedIn
  try {
    const text = payload.linkedin?.text || `${payload.title}\n\nRead the full guide: ${baseUrl}${payload.canonicalPath}?utm_source=linkedin&utm_medium=syndication&utm_campaign=canonical`;
    const res = await fetch(`${baseUrl}/api/publish/linkedin`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: payload.title, text, canonicalPath: payload.canonicalPath })
    });
    results.linkedin = { ok: res.ok, status: res.status };
  } catch (e: any) { results.linkedin = { ok: false, error: e?.message }; }

  // Evergreen schedule (optional)
  if (payload.evergreen) {
    try {
      const res = await fetch(`${baseUrl}/api/schedule/evergreen`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload.evergreen)
      });
      results.evergreen = { ok: res.ok, status: res.status };
    } catch (e: any) { results.evergreen = { ok: false, error: e?.message }; }
  }

  return NextResponse.json({ ok: true, results });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}


