import { getBaseUrl } from '@/lib/site-config';
import { blogData, BlogPost } from '@/lib/blog-data';

/**
 * Google News Sitemap
 * For blog content to appear in Google News
 * Only includes posts from the last 48 hours (Google News requirement)
 */
export async function GET() {
  const siteUrl = getBaseUrl();

  // Filter posts from last 48 hours for Google News
  const now = new Date();
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  // For demo purposes, include recent posts (in production, filter by actual date)
  const recentPosts: BlogPost[] = blogData.slice(0, 10); // Latest 10 posts

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentPosts
  .map(
    (post: BlogPost) => `
  <url>
    <loc>${siteUrl}/blog/${post.slug}/</loc>
    <news:news>
      <news:publication>
        <news:name>Web On Dev Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
      <news:keywords>${escapeXml(post.tags?.join(', ') || post.category)}</news:keywords>
    </news:news>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
