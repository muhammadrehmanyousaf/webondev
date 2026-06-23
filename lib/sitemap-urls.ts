import { siteStructure } from '@/lib/site-structure';
import { blogData } from '@/lib/blog-data';
import { getAllProjectSlugs } from '@/lib/portfolio-data';
import { getBaseUrl } from '@/lib/site-config';

const BASE_URL = getBaseUrl();

export async function collectCanonicalUrls(limitPerSection: number = 200): Promise<string[]> {
	const urls: Set<string> = new Set();

	// Core
	urls.add(`${BASE_URL}/`);
	urls.add(`${BASE_URL}/about`);
	urls.add(`${BASE_URL}/services`);
	urls.add(`${BASE_URL}/portfolio`);
	urls.add(`${BASE_URL}/blog`);
	urls.add(`${BASE_URL}/contact`);
	urls.add(`${BASE_URL}/where-we-serve`);

	// Service pillar and cluster pages
	siteStructure.slice(0, limitPerSection).forEach((pillar) => {
		urls.add(`${BASE_URL}/${pillar.slug}`);
		pillar.clusters?.slice(0, limitPerSection).forEach((c) => urls.add(`${BASE_URL}/${pillar.slug}/${c.slug}`));
	});

	// Blog posts
	blogData.slice(0, limitPerSection).forEach((post) => {
		urls.add(`${BASE_URL}/blog/${post.slug}`);
	});

	// Portfolio
	try {
		getAllProjectSlugs().slice(0, limitPerSection).forEach((slug: string) => {
			urls.add(`${BASE_URL}/portfolio/${slug}`);
		});
	} catch {}

	// NOTE: Programmatic /where-we-serve location pages were permanently removed
	// (they now return HTTP 410). They are intentionally NOT generated here so
	// feeds and any consumer of this list stay free of doorway URLs.

	return Array.from(urls);
}

export function chunk<T>(arr: T[], size: number): T[][] {
	const out: T[][] = [];
	for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
	return out;
}

export async function collectAllCanonicalUrls(): Promise<string[]> {
	// Delegate to collectCanonicalUrls with a very high limit; callers should paginate
	return collectCanonicalUrls(10_000);
}

export async function getUrlPages(pageSize: number): Promise<{ total: number; pages: number }>{
	const all = await collectAllCanonicalUrls();
	const total = all.length;
	const pages = Math.max(1, Math.ceil(total / Math.max(1, pageSize)));
	return { total, pages };
}

export async function getUrlsPage(page: number, pageSize: number): Promise<string[]>{
	const all = await collectAllCanonicalUrls();
	const start = Math.max(0, (page - 1) * Math.max(1, pageSize));
	return all.slice(start, start + Math.max(1, pageSize));
}
