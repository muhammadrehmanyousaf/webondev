import { NextResponse } from 'next/server';
import { getUrlsPage, getUrlPages } from '@/lib/sitemap-urls';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const page = Math.max(1, Number(searchParams.get('page') || '1'));
	const size = Math.max(50, Math.min(2000, Number(searchParams.get('size') || '500')));

	const { total, pages } = await getUrlPages(size);
	const urls = await getUrlsPage(page, size);
	const listItems = urls.map((u) => `<li><a href="${u}">${u.replace(/^https?:\/\//, '')}</a></li>`).join('');
	const html = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>HTML Sitemap – Page ${page} / ${pages}</title>
	<style>
		body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;padding:24px;color:#0f172a;background:#fff}
		h1{font-size:20px;margin:0 0 16px}
		ul{margin:0;padding-left:18px;columns:2;column-gap:24px}
		li{margin:6px 0;break-inside:avoid}
		a{color:#2563eb;text-decoration:none}
		a:hover{text-decoration:underline}
		.nav{margin:16px 0}
		.nav a{margin-right:8px}
	</style>
</head>
<body>
	<h1>HTML Sitemap – Page ${page} / ${pages}</h1>
	<div class="nav">
		${page > 1 ? `<a href="?page=${page-1}&size=${size}">← Prev</a>` : ''}
		${page < pages ? `<a href="?page=${page+1}&size=${size}">Next →</a>` : ''}
	</div>
	<ul>${listItems}</ul>
	<div class="nav">
		${page > 1 ? `<a href="?page=${page-1}&size=${size}">← Prev</a>` : ''}
		${page < pages ? `<a href="?page=${page+1}&size=${size}">Next →</a>` : ''}
	</div>
</body>
</html>`;
	return new NextResponse(html, {
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}
