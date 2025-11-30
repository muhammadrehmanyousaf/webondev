import { NextRequest, NextResponse } from 'next/server';

// Uploads a base64 image to Imgur. Requires IMGUR_CLIENT_ID env.
// POST JSON { imageBase64: string, title?: string, description?: string }
export async function POST(req: NextRequest) {
  const clientId = process.env.IMGUR_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: 'IMGUR_CLIENT_ID not set' }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const imageBase64 = body?.imageBase64 as string;
  const title = body?.title as string | undefined;
  const description = body?.description as string | undefined;
  if (!imageBase64) {
    return NextResponse.json({ error: 'imageBase64 is required' }, { status: 400 });
  }

  const form = new URLSearchParams();
  form.set('image', imageBase64);
  if (title) form.set('title', title);
  if (description) form.set('description', description);

  const res = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${clientId}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });
  const json = await res.json();
  return NextResponse.json({ ok: res.ok, status: res.status, data: json });
}

export async function GET() {
  return NextResponse.json({ ok: true, requires: 'IMGUR_CLIENT_ID' });
}


