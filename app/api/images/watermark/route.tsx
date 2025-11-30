import React from 'react';
import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Returns a simple watermarked image (OG-friendly). Accepts text via ?text=
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || 'Solutions Indicator';
  const width = Math.max(600, Math.min(1600, Number(searchParams.get('w') || '1200')));
  const height = Math.max(315, Math.min(900, Number(searchParams.get('h') || '630')));

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)',
        }}
      >
        <div
          style={{
            fontSize: 64,
            color: '#fff',
            fontWeight: 800,
            letterSpacing: -1,
            textAlign: 'center',
            textShadow: '0 4px 24px rgba(0,0,0,0.25)'
          }}
        >
          {text}
        </div>
        <div style={{ marginTop: 24, color: 'rgba(255,255,255,0.9)' }}>solutionsindicator.com</div>
      </div>
    ),
    { width, height }
  );
}


