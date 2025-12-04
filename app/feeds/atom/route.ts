import { NextResponse } from 'next/server';
import { getUrlsPage, getUrlPages } from '@/lib/sitemap-urls';
import { getBaseUrl } from '@/lib/site-config';

export async function GET(req: Request) {
	const baseUrl = getBaseUrl();
	const hub = 'https://pubsubhubbub.appspot.com/';
	const { searchParams } = new URL(req.url);
	const page = Math.max(1, Number(searchParams.get('page') || '1'));
	const size = Math.max(50, Math.min(1000, Number(searchParams.get('size') || '500')));

	const { pages } = await getUrlPages(size);
	const urls = await getUrlsPage(page, size);
	const updated = new Date().toISOString();

	const entries = urls
		.map((u) => `
		<entry>
			<title><![CDATA[${u.replace(/^https?:\/\//, '')}]]></title>
			<link href="${u}" />
			<id>${u}</id>
			<updated>${updated}</updated>
			<summary><![CDATA[Canonical URL]]></summary>
		</entry>
	`).join('');

	const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>Web On Dev – Site URLs (Atom) – Page ${page} / ${pages}</title>
	<id>${baseUrl}/</id>
	<updated>${updated}</updated>
	<link rel="alternate" href="${baseUrl}" />
	<link rel="self" href="${baseUrl}/feeds/atom?page=${page}&size=${size}" />
	<link rel="hub" href="${hub}" />
	${entries}
</feed>`;

	return new NextResponse(xml, {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}
