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

	const feed = {
		version: 'https://jsonfeed.org/version/1.1',
		title: `Web On Dev – Site URLs (JSON Feed) – Page ${page} / ${pages}`,
		home_page_url: `${baseUrl}/sitemaps`,
		feed_url: `${baseUrl}/feeds/json?page=${page}&size=${size}`,
		hubs: [
			{ type: 'WebSub', url: hub }
		],
		items: urls.map((u) => ({
			id: u,
			url: u,
			title: u.replace(/^https?:\/\//, ''),
			summary: 'Canonical URL',
			date_modified: new Date().toISOString()
		}))
	};

	return new NextResponse(JSON.stringify(feed, null, 2), {
		headers: {
			'Content-Type': 'application/feed+json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}
