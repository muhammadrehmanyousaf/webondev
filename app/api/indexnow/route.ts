import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

// IndexNow API key - This should match the key file in public folder
const INDEXNOW_KEY = 'e8f7a9b2c3d4e5f6a7b8c9d0e1f2a3b4';

/**
 * IndexNow API endpoint for instant URL indexing
 * Supports Bing, Yandex, Seznam, and Naver search engines
 */
export async function POST(request: NextRequest) {
  try {
    const { urls, searchEngine = 'all' } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    const siteUrl = getBaseUrl();
    const host = new URL(siteUrl).host;

    // IndexNow endpoints for different search engines
    const indexNowEndpoints: Record<string, string> = {
      bing: 'https://www.bing.com/indexnow',
      yandex: 'https://yandex.com/indexnow',
      seznam: 'https://search.seznam.cz/indexnow',
      naver: 'https://searchadvisor.naver.com/indexnow',
    };

    const results: Record<string, { success: boolean; status?: number; error?: string }> = {};

    // Determine which endpoints to submit to
    const endpoints = searchEngine === 'all'
      ? Object.entries(indexNowEndpoints)
      : [[searchEngine, indexNowEndpoints[searchEngine]]].filter(([, url]) => url);

    // Submit to each search engine
    for (const [engine, endpoint] of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            host,
            key: INDEXNOW_KEY,
            keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
            urlList: urls.map(url => url.startsWith('http') ? url : `${siteUrl}${url}`),
          }),
        });

        results[engine] = {
          success: response.ok,
          status: response.status,
        };
      } catch (error) {
        results[engine] = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    }

    return NextResponse.json({
      success: true,
      message: 'IndexNow submission completed',
      results,
      submittedUrls: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to verify key
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: `${getBaseUrl()}/${INDEXNOW_KEY}.txt`,
    supportedEngines: ['bing', 'yandex', 'seznam', 'naver'],
  });
}
