import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

// Pinterest v5 API requires OAuth; we'll support token via env PINTEREST_ACCESS_TOKEN
// POST JSON { imageUrl: string, link?: string, title?: string, description?: string, boardId?: string }
export async function POST(req: NextRequest) {
  const token = process.env.PINTEREST_ACCESS_TOKEN;
  const defaultBoard = process.env.PINTEREST_BOARD_ID;
  if (!token) return NextResponse.json({ error: 'PINTEREST_ACCESS_TOKEN not set' }, { status: 500 });

  const body = await req.json().catch(() => null);
  const imageUrl = body?.imageUrl as string;
  const link = (body?.link as string) || getBaseUrl();
  const title = (body?.title as string) || 'Solutions Indicator';
  const description = (body?.description as string) || 'Software Development & Growth';
  const boardId = (body?.boardId as string) || defaultBoard;
  if (!imageUrl || !boardId) return NextResponse.json({ error: 'imageUrl and boardId required' }, { status: 400 });

  const res = await fetch('https://api.pinterest.com/v5/pins', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      link,
      title,
      description,
      media_source: { source_type: 'image_url', url: imageUrl },
      board_id: boardId
    })
  });
  const json = await res.json();

  // After successful upload, publish feed updates so aggregators can crawl
  try { await fetch(`${getBaseUrl()}/api/websub/publish`, { method: 'POST' }); } catch {}

  return NextResponse.json({ ok: res.ok, status: res.status, data: json });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: ['PINTEREST_ACCESS_TOKEN', 'PINTEREST_BOARD_ID'] });
}


