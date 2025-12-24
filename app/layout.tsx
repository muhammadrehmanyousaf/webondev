import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { getBaseUrl } from '@/lib/site-config';
import { ThemeProvider, ThemeScript } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = getBaseUrl();
const siteName = 'Web On Dev';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Premium Web Development & Digital Solutions`,
    template: `%s | ${siteName}`,
  },
  description:
    'Transform your digital vision into reality with Web On Dev. We deliver cutting-edge web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
  keywords: [
    'web development',
    'mobile app development',
    'UI/UX design',
    'digital marketing',
    'software agency',
    'custom software',
    'SEO optimization',
    'Next.js development',
    'React development',
    'cloud solutions',
    'DevOps',
    'e-commerce development',
  ],
  authors: [{ name: 'Web On Dev', url: siteUrl }],
  creator: 'Web On Dev',
  publisher: 'Web On Dev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} - Premium Web Development & Digital Solutions`,
    description:
      'Transform your digital vision into reality. Cutting-edge web development, mobile apps, and digital solutions that drive business growth.',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Web On Dev - Premium Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Premium Web Development & Digital Solutions`,
    description:
      'Transform your digital vision into reality. Cutting-edge web development, mobile apps, and digital solutions.',
    creator: '@webondev',
    site: '@webondev',
    images: [`${siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
      'application/atom+xml': `${siteUrl}/feeds/atom`,
      'application/feed+json': `${siteUrl}/feeds/json`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'iZg3gTHT6aZ91d7tRH1ExVgVOyD_d44UgafUZ1HgUII',
    'tiktok-developers-site-verification': '4KEFGE3EaZQWBw7oPf3jrhTnGhmfQ9hZ',
  },
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.webondev.com/#organization',
  name: 'Web On Dev',
  alternateName: 'webondev',
  legalName: 'Web On Dev',
  url: 'https://www.webondev.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.webondev.com/images/branding/logo.png',
    width: 512,
    height: 512,
  },
  foundingDate: '2015',
  founders: [
    { '@type': 'Person', name: 'Muhammad Rehman Yousaf' },
    { '@type': 'Person', name: 'Daniyal Bahadur' },
    { '@type': 'Person', name: 'Waheed UI Islam' },
    { '@type': 'Person', name: 'Ihtisham UL Haq' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54660',
    addressCountry: 'PK',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+92-310-6803687',
      email: 'webondev@gmail.com',
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+92-310-6803687',
      email: 'webondev@gmail.com',
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'Worldwide',
    },
  ],
  sameAs: [
    'https://www.youtube.com/@webondev',
    'https://x.com/webon_dev',
    'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
    'https://www.instagram.com/webondev/',
    'https://www.designrush.com/agency/profile/solutions-indicators',
    'https://clutch.co/profile/solutions-indicator',
    'https://www.goodfirms.co/company/solutions-indicator',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 11,
    maxValue: 50,
  },
  slogan: 'Transforming Digital Vision Into Reality',
  description:
    'Web On Dev is a premium digital transformation agency helping businesses achieve measurable growth through innovative software development, marketing, and data-driven strategies.',
};

// WebSite Schema with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.webondev.com/#website',
  url: 'https://www.webondev.com',
  name: 'Web On Dev',
  description: 'Premium Web Development & Digital Solutions',
  inLanguage: 'en-US',
  publisher: { '@id': 'https://www.webondev.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.webondev.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.webondev.com/#localbusiness',
  name: 'Web On Dev',
  image: 'https://www.webondev.com/images/branding/logo.png',
  description:
    'Premium web development agency specializing in custom websites, mobile apps, and digital solutions.',
  url: 'https://www.webondev.com',
  telephone: '+92-310-6803687',
  email: 'webondev@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '54660',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.440541,
    longitude: 74.444666,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '250',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'India' },
  ],
  sameAs: [
    'https://www.youtube.com/@webondev',
    'https://x.com/webon_dev',
    'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
    'https://www.instagram.com/webondev/',
  ],
};

// Service Catalog Schema
const offerCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': 'https://www.webondev.com/#offercatalog',
  name: 'Web On Dev Services',
  provider: { '@id': 'https://www.webondev.com/#organization' },
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development',
        description:
          'Custom websites and web applications built with Next.js, React, and modern technologies.',
        url: 'https://www.webondev.com/web-development',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        url: 'https://www.webondev.com/mobile-development',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'UI/UX Design',
        description: 'User-centric designs that enhance engagement and conversions.',
        url: 'https://www.webondev.com/ui-ux-design',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Digital Marketing',
        description: 'SEO, PPC, social media marketing, and content strategies.',
        url: 'https://www.webondev.com/digital-marketing',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'E-commerce Development',
        description: 'Shopify, WooCommerce, and custom e-commerce solutions.',
        url: 'https://www.webondev.com/ecommerce-solutions',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Cloud & DevOps',
        description: 'Cloud migration, infrastructure, and DevOps automation.',
        url: 'https://www.webondev.com/cloud-devops',
      },
    },
  ],
};

// Combined Schema Graph
const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, websiteSchema, localBusinessSchema, offerCatalogSchema],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Script - Prevents flash of wrong theme */}
        <ThemeScript />

        {/* Feed Links */}
        <link rel="alternate" type="application/rss+xml" title="RSS" href={`${siteUrl}/feed.xml`} />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom"
          href={`${siteUrl}/feeds/atom`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          title="JSON Feed"
          href={`${siteUrl}/feeds/json`}
        />

        {/* WebSub/Webmention */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="webmention" href={`${siteUrl}/api/webmention`} />
        <link rel="pingback" href={`${siteUrl}/api/pingback`} />

        {/* AI SEO - LLM Context Files */}
        <link rel="alternate" type="text/plain" title="LLM Context" href={`${siteUrl}/llms.txt`} />
        <link rel="alternate" type="application/json" title="AI Plugin" href={`${siteUrl}/.well-known/ai-plugin.json`} />
        <link rel="alternate" type="application/ld+json" title="Knowledge Graph" href={`${siteUrl}/.well-known/knowledge-graph.json`} />

        {/* Trust & Attribution Files */}
        <link rel="author" type="text/plain" href={`${siteUrl}/humans.txt`} />

        {/* IndexNow Key Verification */}
        <link rel="indexnow" href={`${siteUrl}/e8f7a9b2c3d4e5f6a7b8c9d0e1f2a3b4.txt`} />

        {/* Hreflang Tags for International SEO */}
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/where-we-serve/united-states/`} />
        <link rel="alternate" hrefLang="en-GB" href={`${siteUrl}/where-we-serve/united-kingdom/`} />
        <link rel="alternate" hrefLang="en-CA" href={`${siteUrl}/where-we-serve/canada/`} />
        <link rel="alternate" hrefLang="en-AU" href={`${siteUrl}/where-we-serve/australia/`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Sitemap Links */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href={`${siteUrl}/sitemap.xml`} />
        <link rel="alternate" type="application/xml" title="News Sitemap" href={`${siteUrl}/sitemap-news.xml`} />
        <link rel="alternate" type="application/xml" title="Image Sitemap" href={`${siteUrl}/sitemap-images.xml`} />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HCEQXGKF0T" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HCEQXGKF0T');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tituu28ul5");
            `,
          }}
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="webondev-theme">
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
