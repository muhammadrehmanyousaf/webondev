import { NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { siteStructure } from '@/lib/site-structure';

export async function GET(req: Request) {
  const baseUrl = getBaseUrl();
  const hub = 'https://pubsubhubbub.appspot.com/';
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get('format') || 'rss').toLowerCase();
  const limit = Math.max(10, Math.min(5000, Number(searchParams.get('limit') || '1000')));

  const urls: string[] = [];
  siteStructure.forEach((pillar) => {
    urls.push(`${baseUrl}/${pillar.slug}`);
    (pillar.clusters || []).forEach((c) => urls.push(`${baseUrl}/${pillar.slug}/${c.slug}`));
  });
  const sliced = urls.slice(0, limit);

  if (format === 'json') {
    const feed = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Solutions Indicator – Services URLs (JSON)',
      home_page_url: `${baseUrl}/services`,
      feed_url: `${baseUrl}/feeds/services?format=json&limit=${limit}`,
      hubs: [{ type: 'WebSub', url: hub }],
      items: sliced.map((u) => ({ id: u, url: u, title: u.replace(/^https?:\/\//, ''), date_modified: new Date().toISOString() }))
    };
    return new NextResponse(JSON.stringify(feed, null, 2), { headers: { 'Content-Type': 'application/feed+json; charset=utf-8' } });
  }

  if (format === 'atom') {
    const updated = new Date().toISOString();
    const entries = sliced.map((u) => `
    <entry>
      <title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
      <link href="${u}" />
      <id>${u}</id>
      <updated>${updated}</updated>
      <summary><![CDATA[Service URL]]></summary>
    </entry>`).join('');
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Solutions Indicator – Services URLs (Atom)</title>
  <id>${baseUrl}/services</id>
  <updated>${updated}</updated>
  <link rel="alternate" href="${baseUrl}/services" />
  <link rel="self" href="${baseUrl}/feeds/services?format=atom&limit=${limit}" />
  <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
  ${entries}
</feed>`;
    return new NextResponse(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
  }

  const now = new Date().toUTCString();
  const items = sliced.map((u) => `
  <item>
    <title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
    <link>${u}</link>
    <guid>${u}</guid>
    <pubDate>${now}</pubDate>
  </item>`).join('');
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Solutions Indicator – Services URLs (RSS)</title>
    <description>Canonical service URLs</description>
    <link>${baseUrl}/services</link>
    <atom:link href="${baseUrl}/feeds/services?format=rss&limit=${limit}" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" />
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    ${items}
  </channel>
</rss>`;
  return new NextResponse(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}


