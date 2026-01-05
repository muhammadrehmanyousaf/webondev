import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';
const SITE_URL = 'https://www.webondev.com';

// Vercel Cron Job - Runs daily to auto-submit URLs to search engines
// This is the secret sauce for automatic indexing!

export async function GET(request: NextRequest) {
  // Verify cron secret (Vercel sends this header)
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  // Allow if no secret set (development) or if secret matches
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log('🚀 Auto-Index Cron Job Started');

  try {
    // Step 1: Fetch all URLs from sitemap
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const sitemapRes = await fetch(sitemapUrl);
    const sitemapXml = await sitemapRes.text();

    // Extract URLs from sitemap
    const urlMatches = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
    const allUrls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));

    console.log(`📊 Found ${allUrls.length} URLs in sitemap`);

    // Step 2: Submit to IndexNow in batches (max 10,000 per request)
    const batchSize = 10000;
    const results = [];

    for (let i = 0; i < allUrls.length; i += batchSize) {
      const batch = allUrls.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;

      console.log(`📤 Submitting batch ${batchNum}: ${batch.length} URLs`);

      // Submit to IndexNow API
      const indexNowPayload = {
        host: 'www.webondev.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: batch
      };

      // Submit to multiple IndexNow endpoints
      const endpoints = [
        'https://api.indexnow.org/indexnow',
        'https://www.bing.com/indexnow',
        'https://yandex.com/indexnow'
      ];

      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(indexNowPayload)
          });

          results.push({
            endpoint,
            batch: batchNum,
            status: res.status,
            ok: res.ok
          });

          console.log(`  ✅ ${endpoint}: ${res.status}`);
        } catch (error) {
          console.log(`  ❌ ${endpoint}: Failed`);
          results.push({
            endpoint,
            batch: batchNum,
            status: 'error',
            ok: false
          });
        }
      }
    }

    // Step 3: Log summary
    const successCount = results.filter(r => r.ok).length;
    const totalRequests = results.length;

    console.log(`\n✅ Auto-Index Complete: ${successCount}/${totalRequests} successful`);

    return NextResponse.json({
      success: true,
      message: 'Auto-index cron job completed',
      timestamp: new Date().toISOString(),
      stats: {
        totalUrls: allUrls.length,
        batchesSent: Math.ceil(allUrls.length / batchSize),
        successfulRequests: successCount,
        totalRequests: totalRequests
      },
      results
    });

  } catch (error) {
    console.error('❌ Auto-Index Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Also support POST for manual triggering
export async function POST(request: NextRequest) {
  return GET(request);
}
