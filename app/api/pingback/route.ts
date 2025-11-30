import { NextResponse } from 'next/server';

// Basic pingback endpoint stub for discovery compliance
export async function POST() {
  // Proper XML-RPC handling could be implemented; we respond with 501 for now
  return new NextResponse('Pingback not implemented', { status: 501 });
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Pingback endpoint placeholder' });
}


