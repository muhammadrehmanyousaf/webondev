import { NextRequest, NextResponse } from 'next/server';

// IndexNow API for instant indexing on Bing, Yandex, Seznam, Naver
// This submits URLs for immediate crawling

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c53f436d18d4706aa5243baf434ce1f';
const SITE_HOST = 'www.webondev.com';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'URLs array required' }, { status: 400 });
    }

    // Limit to 10000 URLs per request (IndexNow limit)
    const urlsToSubmit = urls.slice(0, 10000);

    // Submit to IndexNow (covers Bing, Yandex, Seznam, Naver)
    const indexNowPayload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlsToSubmit,
    };

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ];

    const results = await Promise.allSettled(
      endpoints.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(indexNowPayload),
        })
      )
    );

    const successCount = results.filter(r => r.status === 'fulfilled').length;

    return NextResponse.json({
      success: true,
      message: `Submitted ${urlsToSubmit.length} URLs to ${successCount} IndexNow endpoints`,
      urlsSubmitted: urlsToSubmit.length,
    });
  } catch (error) {
    console.error('IndexNow error:', error);
    return NextResponse.json({ error: 'Failed to submit URLs' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API - POST URLs to submit for instant indexing',
    usage: 'POST { "urls": ["https://www.webondev.com/page1/", "https://www.webondev.com/page2/"] }',
  });
}
