export function getOgUrl(title: string, subtitle: string = 'Web On Dev'): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return `${base}/api/images/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`;
}

export function getWatermarkUrl(text: string, w: number = 1200, h: number = 630): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return `${base}/api/images/watermark?text=${encodeURIComponent(text)}&w=${w}&h=${h}`;
}


