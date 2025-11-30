import { NextRequest, NextResponse } from 'next/server';
import { ensureAdminToken } from '@/app/api/_utils/auth';
import { getBaseUrl } from '@/lib/site-config';

// Dev.to publishing via API. Requires DEVTO_API_KEY.
// POST JSON { title, bodyMarkdown, tags?: string[], canonicalPath: string }
// We append canonical_url and UTM-safe link.
export async function POST(req: NextRequest) {
  const gate = ensureAdminToken(req);
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: 401 });
  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'DEVTO_API_KEY not set' }, { status: 500 });
  const baseUrl = getBaseUrl();

  const body = await req.json().catch(() => null);
  if (!body?.title || !body?.bodyMarkdown || !body?.canonicalPath) {
    return NextResponse.json({ error: 'title, bodyMarkdown, canonicalPath required' }, { status: 400 });
  }

  const canonical_url = `${baseUrl}${body.canonicalPath.replace(/^\//, '/')}`;
  const article = {
    article: {
      title: body.title,
      published: true,
      tags: body.tags || [],
      body_markdown: `${body.bodyMarkdown}\n\n—\nOriginally published at ${canonical_url}?utm_source=devto&utm_medium=syndication&utm_campaign=canonical`,
      canonical_url
    }
  };

  const res = await fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey
    },
    body: JSON.stringify(article)
  });
  const json = await res.json();

  // Notify hub
  try { await fetch(`${baseUrl}/api/websub/publish`, { method: 'POST' }); } catch {}

  return NextResponse.json({ ok: res.ok, status: res.status, data: json });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['DEVTO_API_KEY'] });
}


