import { NextRequest, NextResponse } from 'next/server';
import { getStatesByCountryAPI } from '@/lib/location-api';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country');
  if (!country) return NextResponse.json({ error: 'country required' }, { status: 400 });
  try {
    const states = await getStatesByCountryAPI(country);
    return NextResponse.json({ data: states });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to load states' }, { status: 500 });
  }
}


