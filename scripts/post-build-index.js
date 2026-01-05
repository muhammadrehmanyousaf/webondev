#!/usr/bin/env node

/**
 * Post-Build Auto-Indexing Script
 *
 * This script runs automatically after every `npm run build` or Vercel deployment.
 * It submits all sitemap URLs to IndexNow (Bing, Yandex) for fast indexing.
 *
 * This is the "secret sauce" that makes pages get indexed automatically!
 */

const SITE_URL = 'https://www.webondev.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';

async function postBuildIndex() {
  console.log('\n========================================');
  console.log('   POST-BUILD AUTO-INDEXING');
  console.log('========================================\n');

  // Skip in development
  if (process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development') {
    console.log('Skipping indexing in development mode');
    return;
  }

  // Only run on production builds
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    console.log(`Skipping indexing for ${process.env.VERCEL_ENV} environment`);
    return;
  }

  try {
    console.log('Fetching sitemap URLs...');

    // Fetch sitemap
    const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`);

    if (!sitemapRes.ok) {
      console.log('Could not fetch sitemap - site may not be deployed yet');
      console.log('URLs will be indexed on next deployment');
      return;
    }

    const sitemapXml = await sitemapRes.text();

    // Extract URLs
    const urlMatches = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
    const allUrls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));

    console.log(`Found ${allUrls.length} URLs in sitemap`);

    if (allUrls.length === 0) {
      console.log('No URLs found - skipping');
      return;
    }

    // Submit to IndexNow in batches
    const batchSize = 10000;
    let totalSuccess = 0;

    for (let i = 0; i < allUrls.length; i += batchSize) {
      const batch = allUrls.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;

      console.log(`\nSubmitting batch ${batchNum}: ${batch.length} URLs`);

      const payload = {
        host: 'www.webondev.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch
      };

      // Submit to IndexNow endpoints
      const endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow'
      ];

      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (res.ok) {
            console.log(`  ${endpoint}: ${res.status} OK`);
            totalSuccess++;
          } else {
            console.log(`  ${endpoint}: ${res.status} (may still work)`);
          }
        } catch (error) {
          console.log(`  ${endpoint}: Network error`);
        }
      }
    }

    console.log('\n========================================');
    console.log('   AUTO-INDEXING COMPLETE');
    console.log(`   ${allUrls.length} URLs submitted`);
    console.log(`   ${totalSuccess} successful requests`);
    console.log('========================================\n');

  } catch (error) {
    console.log('Auto-indexing failed:', error.message);
    console.log('This is non-fatal - URLs will be indexed on next cron run');
  }
}

// Run the script
postBuildIndex().catch(console.error);
