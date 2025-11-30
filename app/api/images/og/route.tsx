import React from 'react';
import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Generic OG image generator for pages: /api/images/og?title=&subtitle=
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Solutions Indicator';
  const subtitle = searchParams.get('subtitle') || 'Software Development & Growth';

  return new ImageResponse(
    (
      <div style={{
        height: '100%', width: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: 80,
        background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)'
      }}>
        <div style={{ fontSize: 64, color: '#fff', fontWeight: 800, letterSpacing: -1 }}>{title}</div>
        <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.95)', marginTop: 12 }}>{subtitle}</div>
        <div style={{ position: 'absolute', bottom: 32, right: 40, color: 'rgba(255,255,255,0.9)' }}>solutionsindicator.com</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}


