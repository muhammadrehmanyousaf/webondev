import { siteStructure } from '@/lib/site-structure';
import { blogData } from '@/lib/blog-data';
import { getAllProjectSlugs } from '@/lib/portfolio-data';
import { getAllCountriesAPI, getStatesByCountryAPI, getCitiesByStateAPI } from '@/lib/location-api';
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

	// Locations expanded: countries → states → cities → selected services (chunked/limited)
	try {
		const popularCountries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Pakistan', 'India'];
		const countries = (await getAllCountriesAPI())
			.filter((c) => !!c?.name)
			.sort((a, b) => popularCountries.indexOf(a.name) - popularCountries.indexOf(b.name))
			.slice(0, Math.min(limitPerSection, 12));

		// gather service slugs (pillars + clusters)
		const serviceSlugs: string[] = [];
		siteStructure.forEach((pillar) => {
			serviceSlugs.push(pillar.slug);
			(pillar.clusters || []).forEach((c) => serviceSlugs.push(`${pillar.slug}/${c.slug}`));
		});

		for (const country of countries) {
			const cSlug = (country.name || '').toLowerCase().replace(/\s+/g, '-');
			urls.add(`${BASE_URL}/where-we-serve/${cSlug}`);

			let states: { name: string }[] = [];
			try { states = await getStatesByCountryAPI(country.name); } catch {}
			states = states.slice(0, Math.min(limitPerSection, 25));

			for (const state of states) {
				const sSlug = (state.name || '').toLowerCase().replace(/\s+/g, '-');
				urls.add(`${BASE_URL}/where-we-serve/${cSlug}/${sSlug}`);

				let cities: { name: string }[] = [];
				try { cities = await getCitiesByStateAPI(country.name, state.name); } catch {}
				cities = cities.slice(0, Math.min(limitPerSection, 30));

				for (const city of cities) {
					const ciSlug = (city.name || '').toLowerCase().replace(/\s+/g, '-');
					urls.add(`${BASE_URL}/where-we-serve/${cSlug}/${sSlug}/${ciSlug}`);

					// add limited service pages per city to control size
					serviceSlugs.slice(0, Math.min(limitPerSection, 30)).forEach((svc) => {
						urls.add(`${BASE_URL}/where-we-serve/${cSlug}/${sSlug}/${ciSlug}/${svc}`);
					});
				}
			}
		}
	} catch {}

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
