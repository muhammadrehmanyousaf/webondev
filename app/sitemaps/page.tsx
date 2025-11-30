import React from 'react';
import Link from 'next/link';
import { getUrlPages } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export default async function SitemapsHubPage() {
	// Define page sizes (tuned for performance vs coverage)
	const txtSize = 1000;
	const rssSize = 1000;
	const htmlSize = 500;

	const { total: totalTxt, pages: pagesTxt } = await getUrlPages(txtSize);
	const { pages: pagesRss } = await getUrlPages(rssSize);
	const { pages: pagesHtml } = await getUrlPages(htmlSize);

	const Section = ({ title, base, pages, size }: { title: string; base: string; pages: number; size: number }) => (
		<section className="mb-8">
			<h2 className="text-lg font-semibold text-slate-900 mb-3">{title}</h2>
			<ul className="grid sm:grid-cols-2 gap-2">
				{Array.from({ length: pages }).map((_, i) => (
					<li key={i}>
						<Link className="text-blue-600 hover:text-blue-700" href={`${base}?page=${i + 1}&size=${size}`}>{`${base}?page=${i + 1}&size=${size}`}</Link>
					</li>
				))}
			</ul>
		</section>
	);

	return (
		<html>
			<head>
				<title>Sitemap Hub</title>
				<meta name="robots" content="index,follow" />
				<style>{`
					body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;padding:24px;color:#0f172a;background:#fff}
					h1{font-size:22px;margin:0 0 16px}
					section{margin:0 0 20px}
					ul{margin:0;padding-left:18px}
					li{margin:6px 0}
					a{text-decoration:none}
					a:hover{text-decoration:underline}
				`}</style>
			</head>
			<body>
				<h1>Sitemap Hub</h1>
				<p>Total indexed URLs (approx): <strong>{totalTxt}</strong></p>
				<Section title="Sitemap TXT (paginated)" base="/sitemaps/txt" pages={pagesTxt} size={txtSize} />
				<Section title="Sitemap RSS (paginated)" base="/sitemaps/rss" pages={pagesRss} size={rssSize} />
				<Section title="Sitemap HTML (paginated)" base="/sitemaps/html" pages={pagesHtml} size={htmlSize} />
			</body>
		</html>
	);
}
