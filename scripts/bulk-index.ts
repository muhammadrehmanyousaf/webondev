/**
 * BULK INDEXING SCRIPT
 * Run this to submit ALL your URLs to IndexNow for instant indexing
 *
 * Usage: npx ts-node scripts/bulk-index.ts
 * Or: npx tsx scripts/bulk-index.ts
 */

const SITE_URL = 'https://www.webondev.com';
const INDEXNOW_KEY = '9c53f436d18d4706aa5243baf434ce1f';

async function fetchSitemapUrls(): Promise<string[]> {
  try {
    const response = await fetch(`${SITE_URL}/sitemap.xml`);
    const xml = await response.text();

    // Extract URLs from sitemap XML
    const urlMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));

    console.log(`Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (error) {
    console.error('Failed to fetch sitemap:', error);
    return [];
  }
}

async function submitToIndexNow(urls: string[]): Promise<void> {
  const BATCH_SIZE = 10000; // IndexNow limit
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    console.log(`Submitting batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs`);

    const payload = {
      host: 'www.webondev.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: batch,
    };

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        console.log(`  ${endpoint}: ${response.status} ${response.statusText}`);
      } catch (error) {
        console.error(`  ${endpoint}: Failed`, error);
      }
    }

    // Small delay between batches
    if (i + BATCH_SIZE < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

async function pingSearchEngines(): Promise<void> {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);

  const pingUrls = [
    `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
  ];

  console.log('\nPinging search engines...');

  for (const url of pingUrls) {
    try {
      const response = await fetch(url);
      console.log(`  ${url.split('?')[0]}: ${response.status}`);
    } catch (error) {
      console.error(`  Failed to ping:`, url);
    }
  }
}

async function main() {
  console.log('🚀 BULK INDEXING SCRIPT\n');
  console.log('Step 1: Fetching sitemap URLs...');

  const urls = await fetchSitemapUrls();

  if (urls.length === 0) {
    console.log('No URLs found. Exiting.');
    return;
  }

  console.log(`\nStep 2: Submitting ${urls.length} URLs to IndexNow...`);
  await submitToIndexNow(urls);

  console.log('\nStep 3: Pinging search engines...');
  await pingSearchEngines();

  console.log('\n✅ DONE! URLs submitted for indexing.');
  console.log('\nNext steps:');
  console.log('1. Go to Google Search Console');
  console.log('2. Submit sitemap: https://www.webondev.com/sitemap.xml');
  console.log('3. Request indexing for key pages manually');
}

main().catch(console.error);
