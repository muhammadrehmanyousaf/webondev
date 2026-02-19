#!/usr/bin/env node

/**
 * Post-Build Auto-Indexing Script
 *
 * Runs automatically after every `npm run build` (Railway/Vercel deployment).
 * Submits all sitemap URLs to:
 *   1. IndexNow (Bing, Yandex) - all URLs, no limit
 *   2. Google Sitemap Ping - tells Google sitemap changed
 */

const SITE_URL = 'https://www.webondev.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';

async function postBuildIndex() {
  console.log('\n========================================');
  console.log('   POST-BUILD AUTO-INDEXING');
  console.log('========================================\n');

  // Skip in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Skipping indexing in development mode');
    return;
  }

  // Skip for non-production Vercel/Railway environments
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
    console.log(`Skipping indexing for ${process.env.VERCEL_ENV} environment`);
    return;
  }
  if (process.env.RAILWAY_ENVIRONMENT && process.env.RAILWAY_ENVIRONMENT !== 'production') {
    console.log(`Skipping indexing for ${process.env.RAILWAY_ENVIRONMENT} environment`);
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

    // ── Step 1: IndexNow (Bing + Yandex) ──
    console.log('\n--- IndexNow (Bing + Yandex) ---');
    const batchSize = 10000;
    let totalSuccess = 0;

    for (let i = 0; i < allUrls.length; i += batchSize) {
      const batch = allUrls.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;

      console.log(`Submitting batch ${batchNum}: ${batch.length} URLs`);

      const payload = {
        host: 'www.webondev.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      };

      const endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
        'https://yandex.com/indexnow',
      ];

      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
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

    // ── Step 2: Google Sitemap Ping ──
    console.log('\n--- Google Sitemap Ping ---');
    try {
      const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
      const pingRes = await fetch(pingUrl);
      console.log(`  Google Ping: ${pingRes.status} ${pingRes.ok ? 'OK' : 'FAILED'}`);
    } catch (error) {
      console.log('  Google Ping: Network error');
    }

    console.log('\n========================================');
    console.log('   AUTO-INDEXING COMPLETE');
    console.log(`   ${allUrls.length} URLs submitted to IndexNow`);
    console.log(`   ${totalSuccess} successful IndexNow requests`);
    console.log('   Google sitemap ping sent');
    console.log('========================================\n');
  } catch (error) {
    console.log('Auto-indexing failed:', error.message);
    console.log('This is non-fatal - URLs will be indexed on next cron run');
  }
}

// Run the script
postBuildIndex().catch(console.error);
