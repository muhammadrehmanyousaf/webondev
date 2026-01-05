import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';
const SITE_URL = 'https://www.webondev.com';

// Deploy Hook - Called after every Vercel deployment
// This ensures new pages are immediately submitted for indexing

export async function POST(request: NextRequest) {
  console.log('🚀 Deploy Hook Triggered - Submitting URLs for indexing');

  try {
    // Fetch sitemap URLs
    const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, {
      cache: 'no-store' // Always get fresh sitemap
    });
    const sitemapXml = await sitemapRes.text();

    // Extract URLs
    const urlMatches = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
    const allUrls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));

    console.log(`📊 Found ${allUrls.length} URLs to index`);

    // Submit to IndexNow in batches
    const batchSize = 10000;
    const results = [];

    for (let i = 0; i < allUrls.length; i += batchSize) {
      const batch = allUrls.slice(i, i + batchSize);

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
          results.push({ endpoint, status: res.status, ok: res.ok });
        } catch {
          results.push({ endpoint, status: 'error', ok: false });
        }
      }
    }

    console.log('✅ Deploy Hook Complete - URLs submitted');

    return NextResponse.json({
      success: true,
      message: 'Deploy hook completed - URLs submitted for indexing',
      urlCount: allUrls.length,
      results
    });

  } catch (error) {
    console.error('❌ Deploy Hook Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Deploy hook endpoint. Send POST request to trigger URL submission.',
    usage: 'Add this URL to Vercel Deploy Hooks to auto-submit URLs after each deploy'
  });
}
