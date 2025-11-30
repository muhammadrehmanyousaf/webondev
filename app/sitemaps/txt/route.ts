import { NextResponse } from 'next/server';
import { collectCanonicalUrls, getUrlsPage, getUrlPages } from '@/lib/sitemap-urls';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const page = Math.max(1, Number(searchParams.get('page') || '1'));
	const size = Math.max(50, Math.min(5000, Number(searchParams.get('size') || '1000')));

	const { total, pages } = await getUrlPages(size);
	const urls = await getUrlsPage(page, size);
	const body = urls.join('\n') + '\n';
	return new NextResponse(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
			'X-Sitemap-Total': String(total),
			'X-Sitemap-Pages': String(pages),
			'X-Sitemap-Page': String(page),
			'X-Sitemap-Page-Size': String(size)
		},
	});
}
