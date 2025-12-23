import { NextRequest, NextResponse } from 'next/server';
import { getBaseUrl } from '@/lib/site-config';

/**
 * SCHEMA VALIDATION ENDPOINT
 * Test structured data for SEO validation
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      {
        error: 'URL parameter is required',
        usage: '/api/schema-test?url=https://www.webondev.com',
      },
      { status: 400 }
    );
  }

  try {
    // Fetch the page
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Schema-Validator/1.0',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch URL: ${response.status}` },
        { status: 400 }
      );
    }

    const html = await response.text();

    // Extract JSON-LD scripts
    const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    const schemas: unknown[] = [];
    let match;

    while ((match = jsonLdRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(match[1]);
        schemas.push(parsed);
      } catch (e) {
        schemas.push({ error: 'Invalid JSON', raw: match[1].substring(0, 200) });
      }
    }

    // Extract meta tags
    const metaTags: Record<string, string> = {};
    const metaRegex = /<meta[^>]*(?:name|property)=["']([^"']+)["'][^>]*content=["']([^"']+)["'][^>]*>/gi;
    while ((match = metaRegex.exec(html)) !== null) {
      metaTags[match[1]] = match[2];
    }

    // Check for common SEO elements
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);

    // Validation results
    const validation = {
      hasTitle: !!titleMatch,
      title: titleMatch ? titleMatch[1] : null,
      hasCanonical: !!canonicalMatch,
      canonical: canonicalMatch ? canonicalMatch[1] : null,
      hasH1: !!h1Match,
      h1: h1Match ? h1Match[1].trim() : null,
      hasOgTitle: !!metaTags['og:title'],
      hasOgDescription: !!metaTags['og:description'],
      hasOgImage: !!metaTags['og:image'],
      hasTwitterCard: !!metaTags['twitter:card'],
      schemaCount: schemas.length,
      schemaTypes: schemas.map((s: any) => s['@type'] || s['@graph']?.map((g: any) => g['@type']) || 'unknown'),
    };

    // Calculate SEO score
    let score = 0;
    if (validation.hasTitle) score += 10;
    if (validation.hasCanonical) score += 10;
    if (validation.hasH1) score += 10;
    if (validation.hasOgTitle) score += 10;
    if (validation.hasOgDescription) score += 10;
    if (validation.hasOgImage) score += 10;
    if (validation.hasTwitterCard) score += 10;
    if (validation.schemaCount > 0) score += 15;
    if (validation.schemaCount > 2) score += 15;

    return NextResponse.json({
      url,
      score: `${score}/100`,
      validation,
      schemas,
      metaTags: {
        'og:title': metaTags['og:title'],
        'og:description': metaTags['og:description'],
        'og:image': metaTags['og:image'],
        'twitter:card': metaTags['twitter:card'],
        'twitter:title': metaTags['twitter:title'],
      },
      recommendations: [
        !validation.hasTitle && 'Add a <title> tag',
        !validation.hasCanonical && 'Add a canonical URL',
        !validation.hasH1 && 'Add an <h1> heading',
        !validation.hasOgTitle && 'Add og:title meta tag',
        !validation.hasOgDescription && 'Add og:description meta tag',
        !validation.hasOgImage && 'Add og:image meta tag',
        validation.schemaCount === 0 && 'Add JSON-LD structured data',
      ].filter(Boolean),
      googleTestUrl: `https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`,
      schemaValidatorUrl: `https://validator.schema.org/#url=${encodeURIComponent(url)}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST endpoint for testing raw schema
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { schema } = body;

    if (!schema) {
      return NextResponse.json(
        { error: 'Schema is required in request body' },
        { status: 400 }
      );
    }

    // Validate JSON-LD structure
    const issues: string[] = [];
    const warnings: string[] = [];

    // Check for @context
    if (!schema['@context']) {
      issues.push('Missing @context - should be "https://schema.org"');
    } else if (schema['@context'] !== 'https://schema.org') {
      warnings.push(`@context should be "https://schema.org", got "${schema['@context']}"`);
    }

    // Check for @type
    if (!schema['@type'] && !schema['@graph']) {
      issues.push('Missing @type - every schema object needs a type');
    }

    // Check for @id (recommended)
    if (!schema['@id'] && !schema['@graph']) {
      warnings.push('Missing @id - recommended for entity identification');
    }

    // Common type-specific validation
    const type = schema['@type'];
    if (type === 'Organization') {
      if (!schema.name) issues.push('Organization missing required "name" property');
      if (!schema.url) warnings.push('Organization should have "url" property');
    }
    if (type === 'LocalBusiness' || type === 'ProfessionalService') {
      if (!schema.address) warnings.push('LocalBusiness should have "address" property');
    }
    if (type === 'Article' || type === 'BlogPosting') {
      if (!schema.headline) issues.push('Article missing required "headline" property');
      if (!schema.datePublished) issues.push('Article missing required "datePublished" property');
      if (!schema.author) warnings.push('Article should have "author" property');
    }
    if (type === 'Product') {
      if (!schema.name) issues.push('Product missing required "name" property');
      if (!schema.offers) warnings.push('Product should have "offers" property');
    }
    if (type === 'FAQPage') {
      if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
        issues.push('FAQPage missing required "mainEntity" array');
      }
    }

    const isValid = issues.length === 0;

    return NextResponse.json({
      valid: isValid,
      issues,
      warnings,
      schema,
      testUrls: {
        googleRichResults: 'https://search.google.com/test/rich-results',
        schemaValidator: 'https://validator.schema.org/',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Invalid JSON' },
      { status: 400 }
    );
  }
}
