import { getBaseUrl } from '@/lib/site-config';

export async function GET() {
  const siteUrl = getBaseUrl();

  // Define all images with their metadata for image sitemap
  const images = [
    {
      loc: `${siteUrl}/`,
      images: [
        {
          url: `${siteUrl}/images/og-image.png`,
          title: 'Web On Dev - Professional Software Development',
          caption: 'Web On Dev provides premium web development, mobile apps, and digital solutions.',
        },
        {
          url: `${siteUrl}/images/branding/logo.png`,
          title: 'Web On Dev Logo',
          caption: 'Official logo of Web On Dev software development company.',
        },
      ],
    },
    {
      loc: `${siteUrl}/about/`,
      images: [
        {
          url: `${siteUrl}/images/about/team.jpg`,
          title: 'Web On Dev Team',
          caption: 'Our expert team of developers, designers, and digital marketers.',
        },
        {
          url: `${siteUrl}/images/about/office.jpg`,
          title: 'Web On Dev Office',
          caption: 'Our modern office space in Lahore, Pakistan.',
        },
      ],
    },
    {
      loc: `${siteUrl}/services/`,
      images: [
        {
          url: `${siteUrl}/images/services/web-development.jpg`,
          title: 'Web Development Services',
          caption: 'Custom web development using Next.js, React, and modern technologies.',
        },
        {
          url: `${siteUrl}/images/services/mobile-development.jpg`,
          title: 'Mobile App Development',
          caption: 'iOS and Android app development with React Native and Flutter.',
        },
        {
          url: `${siteUrl}/images/services/ui-ux-design.jpg`,
          title: 'UI/UX Design Services',
          caption: 'User-centric design that enhances engagement and conversions.',
        },
      ],
    },
    {
      loc: `${siteUrl}/portfolio/`,
      images: [
        {
          url: `${siteUrl}/images/portfolio/ecommerce-platform.jpg`,
          title: 'E-commerce Platform Project',
          caption: 'Custom e-commerce platform with 250% conversion increase.',
        },
        {
          url: `${siteUrl}/images/portfolio/healthcare-app.jpg`,
          title: 'Healthcare Mobile App',
          caption: 'HIPAA-compliant healthcare app with 10,000+ daily users.',
        },
        {
          url: `${siteUrl}/images/portfolio/saas-dashboard.jpg`,
          title: 'SaaS Analytics Dashboard',
          caption: 'Real-time analytics dashboard for tech startup.',
        },
      ],
    },
    {
      loc: `${siteUrl}/contact/`,
      images: [
        {
          url: `${siteUrl}/images/contact/contact-hero.jpg`,
          title: 'Contact Web On Dev',
          caption: 'Get in touch for a free consultation on your project.',
        },
      ],
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
${page.images
  .map(
    (img) => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
  )
  .join('')}
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
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
