import { NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';

export async function GET(req: Request) {
  const baseUrl = getBaseUrl();
  const hub = 'https://pubsubhubbub.appspot.com/';
  const { searchParams } = new URL(req.url);
  const format = (searchParams.get('format') || 'rss').toLowerCase(); // rss | atom | json
  const limit = Math.max(50, Math.min(2000, Number(searchParams.get('limit') || '1000')));

  const urls: string[] = [];
  try {
    const countries = (await getAllCountriesAPI()).slice(0, 50);
    for (const c of countries) {
      const cSlug = (c.name || '').toLowerCase().replace(/\s+/g, '-');
      urls.push(`${baseUrl}/where-we-serve/${cSlug}`);
      let states: { name: string }[] = [];
      try { states = await getStatesByCountryAPI(c.name); } catch {}
      for (const s of states.slice(0, 50)) {
        const sSlug = (s.name || '').toLowerCase().replace(/\s+/g, '-');
        urls.push(`${baseUrl}/where-we-serve/${cSlug}/${sSlug}`);
        let cities: { name: string }[] = [];
        try { cities = await getCitiesByStateAPI(c.name, s.name); } catch {}
        for (const ci of cities.slice(0, 200)) {
          const ciSlug = (ci.name || '').toLowerCase().replace(/\s+/g, '-');
          urls.push(`${baseUrl}/where-we-serve/${cSlug}/${sSlug}/${ciSlug}`);
          if (urls.length >= limit) break;
        }
        if (urls.length >= limit) break;
      }
      if (urls.length >= limit) break;
    }
  } catch {}

  if (format === 'json') {
    const feed = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Solutions Indicator – Location URLs (JSON)',
      home_page_url: `${baseUrl}/where-we-serve`,
      feed_url: `${baseUrl}/feeds/locations?format=json&limit=${limit}`,
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
      <summary><![CDATA[Location URL]]></summary>
    </entry>`).join('');
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Solutions Indicator – Location URLs (Atom)</title>
  <id>${baseUrl}/where-we-serve</id>
  <updated>${updated}</updated>
  <link rel="alternate" href="${baseUrl}/where-we-serve" />
  <link rel="self" href="${baseUrl}/feeds/locations?format=atom&limit=${limit}" />
  <link rel="hub" href="${hub}" />
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
    <title>Solutions Indicator – Location URLs (RSS)</title>
    <description>Canonical location URLs</description>
    <link>${baseUrl}/where-we-serve</link>
    <atom:link href="${baseUrl}/feeds/locations?format=rss&limit=${limit}" rel="self" type="application/rss+xml" />
    <atom:link href="${hub}" rel="hub" />
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    ${items}
  </channel>
</rss>`;
  return new NextResponse(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}


