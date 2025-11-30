import { NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { getAllProjectSlugs } from '@/lib/portfolio-data';

export async function GET(req: Request) {
  const baseUrl = getBaseUrl();
  const hub = 'https://pubsubhubbub.appspot.com/';
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get('format') || 'rss').toLowerCase();
  const limit = Math.max(10, Math.min(5000, Number(searchParams.get('limit') || '1000')));

  let slugs: string[] = [];
  try { slugs = getAllProjectSlugs(); } catch {}
  const urls = slugs.slice(0, limit).map((s) => `${baseUrl}/portfolio/${s}`);

  if (format === 'json') {
    const feed = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Solutions Indicator – Portfolio URLs (JSON)',
      home_page_url: `${baseUrl}/portfolio`,
      feed_url: `${baseUrl}/feeds/portfolio?format=json&limit=${limit}`,
      hubs: [{ type: 'WebSub', url: hub }],
      items: urls.map((u) => ({ id: u, url: u, title: u.replace(/^https?:\/\//, ''), date_modified: new Date().toISOString() }))
    };
    return new NextResponse(JSON.stringify(feed, null, 2), { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
  }

  if (format === 'atom') {
    const updated = new Date().toISOString();
    const entries = urls.map((u) => `
    <entry>
      <title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
      <link href="${u}" />
      <id>${u}</id>
      <updated>${updated}</updated>
      <summary><![CDATA[Portfolio URL]]></summary>
    </entry>`).join('');
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Solutions Indicator – Portfolio URLs (Atom)</title>
  <id>${baseUrl}/portfolio</id>
  <updated>${updated}</updated>
  <link rel="alternate" href="${baseUrl}/portfolio" />
  <link rel="self" href="${baseUrl}/feeds/portfolio?format=atom&limit=${limit}" />
  <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
  ${entries}
</feed>`;
    return new NextResponse(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
  }

  const now = new Date().toUTCString();
  const items = urls.map((u) => `
  <item>
    <title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
    <link>${u}</link>
    <guid>${u}</guid>
    <pubDate>${now}</pubDate>
  </item>`).join('');
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Solutions Indicator – Portfolio URLs (RSS)</title>
    <description>Canonical portfolio URLs</description>
    <link>${baseUrl}/portfolio</link>
    <atom:link href="${baseUrl}/feeds/portfolio?format=rss&limit=${limit}" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" />
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    ${items}
  </channel>
</rss>`;
  return new NextResponse(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}


