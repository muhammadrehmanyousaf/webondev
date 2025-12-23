import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get parameters
  const title = searchParams.get('title') || 'Web On Dev';
  const description = searchParams.get('description') || 'Premium Web Development & Digital Solutions';
  const type = searchParams.get('type') || 'default'; // default, service, blog, location

  // Color themes based on type
  const themes: Record<string, { bg: string; accent: string }> = {
    default: { bg: '#0f172a', accent: '#10b981' },
    service: { bg: '#0f172a', accent: '#14b8a6' },
    blog: { bg: '#0f172a', accent: '#06b6d4' },
    location: { bg: '#0f172a', accent: '#22c55e' },
  };

  const theme = themes[type] || themes.default;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: theme.bg,
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 80% 20%, ${theme.accent}20 0%, transparent 50%), radial-gradient(circle at 20% 80%, ${theme.accent}15 0%, transparent 50%)`,
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(${theme.accent}10 1px, transparent 1px), linear-gradient(90deg, ${theme.accent}10 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />

        {/* Logo area */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${theme.accent}, #14b8a6)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            W
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Web On Dev
          </span>
        </div>

        {/* Type badge */}
        {type !== 'default' && (
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '60px',
              padding: '8px 16px',
              borderRadius: '20px',
              background: `${theme.accent}20`,
              border: `1px solid ${theme.accent}40`,
              color: theme.accent,
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
          >
            {type}
          </div>
        )}

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '900px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? '48px' : '60px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description.length > 120 ? description.slice(0, 120) + '...' : description}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: `linear-gradient(90deg, ${theme.accent}, #14b8a6, #06b6d4)`,
          }}
        />

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '60px',
            color: '#64748b',
            fontSize: '18px',
          }}
        >
          www.webondev.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
