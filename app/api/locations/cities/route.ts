import { NextRequest, NextResponse } from 'next/server';
import { getCitiesByStateAPI } from '@/lib/location-api';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get('country');
  const state = searchParams.get('state');
  if (!country || !state) return NextResponse.json({ error: 'country and state required' }, { status: 400 });
  try {
    const cities = await getCitiesByStateAPI(country, state);
    return NextResponse.json({ data: cities });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to load cities' }, { status: 500 });
  }
}


