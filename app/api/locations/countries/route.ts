import { NextResponse } from 'next/server';
import { getAllCountriesAPI } from '@/lib/location-api';

export async function GET() {
  try {
    const countries = await getAllCountriesAPI();
    return NextResponse.json({ data: countries });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to load countries' }, { status: 500 });
  }
}


