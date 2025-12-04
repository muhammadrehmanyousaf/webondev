import { NextResponse } from 'next/server';
import { getUrlsPage, getUrlPages } from '@/lib/sitemap-urls';
import { getBaseUrl } from '@/lib/site-config';

export async function GET(req: Request) {
	const baseUrl = getBaseUrl();
	const hub = 'https://pubsubhubbub.appspot.com/';
	const { searchParams } = new URL(req.url);
	const page = Math.max(1, Number(searchParams.get('page') || '1'));
	const size = Math.max(50, Math.min(5000, Number(searchParams.get('size') || '1000')));

	const { total, pages } = await getUrlPages(size);
	const urls = await getUrlsPage(page, size);
	const now = new Date().toUTCString();
	const items = urls.map((u) => `
	<item>
		<title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
		<link>${u}</link>
		<guid>${u}</guid>
		<pubDate>${now}</pubDate>
	</item>
	`).join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Web On Dev – Site URLs (RSS) – Page ${page} / ${pages}</title>
		<description>All canonical URLs for discovery</description>
		<link>${baseUrl}</link>
		<atom:link href="${baseUrl}/sitemaps/rss?page=${page}&size=${size}" rel="self" type="application/rss+xml" />
		<atom:link href="${hub}" rel="hub" />
		<language>en-US</language>
		<lastBuildDate>${now}</lastBuildDate>
		<pubDate>${now}</pubDate>
		${items}
	</channel>
</rss>`;

	return new NextResponse(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
			'X-Sitemap-Total': String(total),
			'X-Sitemap-Pages': String(pages),
			'X-Sitemap-Page': String(page),
			'X-Sitemap-Page-Size': String(size)
		},
	});
}
