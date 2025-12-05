import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { getBaseUrl } from '@/lib/site-config';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = getBaseUrl();
const siteName = 'Web On Dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Professional Software Development Services`,
    template: `%s | ${siteName}`,
  },
  description:
    'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
  keywords:
    'software development, web development, mobile apps, UI/UX design, digital marketing, software agency, custom software, SEO, Next.js, React, cloud, DevOps',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} - Professional Software Development Services`,
    description:
      'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Professional Software Development Services`,
    description:
      'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
    creator: '@webondev',
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
    canonical: `${siteUrl}`,
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'google-site-verification': 'iZg3gTHT6aZ91d7tRH1ExVgVOyD_d44UgafUZ1HgUII',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="RSS" href={`${siteUrl}/feed.xml`} />
        <link rel="alternate" type="application/atom+xml" title="Atom" href={`${siteUrl}/feeds/atom`} />
        <link rel="alternate" type="application/feed+json" title="JSON Feed" href={`${siteUrl}/feeds/json`} />
        {/* WebSub (PubSubHubbub) hub for real-time feed notifications */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        {/* Webmention/Pingback discovery */}
        <link rel="webmention" href={`${siteUrl}/api/webmention`} />
        <link rel="pingback" href={`${siteUrl}/api/pingback`} />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HCEQXGKF0T"></script>
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
        {/* Clarity tracking code */}
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
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
        <Toaster />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Website',
      name: 'Web On Dev - Professional Software Development Services',
      description:
        'Leading software development company providing web development, mobile apps, UI/UX design, digital marketing, and comprehensive software solutions for businesses worldwide.',
      url: 'https://www.webondev.com',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.webondev.com/#organization',
          name: 'Web On Dev',
          alternateName: 'webondev',
          legalName: 'Web On Dev',
          url: 'https://www.webondev.com',
          logo: 'https://www.webondev.com/logo.png',
          foundingDate: '1999-05-18',
          founders: [
            { '@type': 'Person', name: 'Muhammad Rehman Yousaf' },
            { '@type': 'Person', name: 'Daniyal Bahadur' },
            { '@type': 'Person', name: 'Waheed UI Islam' },
            { '@type': 'Person', name: 'Ihtisham UL Haq' }
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
            addressLocality: 'Lahore',
            addressRegion: 'Punjab',
            postalCode: '54660',
            addressCountry: { '@type': 'Country', name: 'Pakistan' }
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              telephone: '+92 310 6803687',
              email: 'webondev@gmail.com',
              availableLanguage: 'English',
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                ],
                opens: '00:00',
                closes: '23:59'
              },
              areaServed: 'Worldwide'
            },
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: '+92 310 6803687',
              email: 'webondev@gmail.com',
              availableLanguage: 'English',
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                ],
                opens: '00:00',
                closes: '23:59'
              },
              areaServed: 'Worldwide'
            },
            {
              '@type': 'ContactPoint',
              contactType: 'technical support',
              telephone: '+92 310 6803687',
              email: 'webondev@gmail.com',
              availableLanguage: 'English',
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                ],
                opens: '00:00',
                closes: '23:59'
              },
              areaServed: 'Worldwide'
            }
          ],
          areaServed: 'Worldwide',
          sameAs: [
            'https://www.youtube.com/@webondev',
            'https://x.com/webon_dev',
            'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
            'https://www.instagram.com/webondev/',
            // 'https://www.reddit.com/u/webondev/s/myNp9ZusS9',
            // 'https://www.tiktok.com/@webondev.com',
            // 'https://www.pinterest.com/webondev/',
            // 'https://www.linkedin.com/company/solutions-indicator/',
            // 'https://www.youtube.com/@webondevOfficial',
            'https://www.designrush.com/agency/profile/solutions-indicators',
            'https://clutch.co/profile/solutions-indicator',
            'https://www.goodfirms.co/company/solutions-indicator',
            'https://app.sortlist.com/solutions-indicator/'
          ],
          numberOfEmployees: '11-50',
          description:
            'Web On Dev is a digital transformation agency helping businesses achieve measurable growth through innovative software development, marketing, and data-driven strategies.'
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.webondev.com/#website',
          url: 'https://www.webondev.com',
          name: 'Web On Dev',
          inLanguage: 'en',
          about: { '@id': 'https://www.webondev.com/#organization' },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.webondev.com/search?q={search_term_string}'
            },
            'query-input': {
              '@type': 'PropertyValueSpecification',
              valueRequired: true,
              valueName: 'search_term_string'
            }
          }
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://www.webondev.com/#localbusiness',
          name: 'Web On Dev',
          image: 'https://www.webondev.com/logo.png',
          description: 'Web On Dev is a digital transformation agency.',
          url: 'https://www.webondev.com',
          telephone: '+92 310 6803687',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'G8JX+CMF, Main Gulberg, Mota Singh Wala',
            addressLocality: 'Lahore',
            addressRegion: 'Punjab',
            postalCode: '54660',
            addressCountry: { '@type': 'Country', name: 'Pakistan' }
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 31.440541451082733,
            longitude: 74.44466607506611
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ],
              opens: '00:00',
              closes: '23:59'
            }
          ],
          sameAs: [
            'https://www.youtube.com/@webondev',
            'https://x.com/webon_dev',
            'https://www.facebook.com/people/Web-On-Dev/61584774954945/',
            'https://www.instagram.com/webondev/',
            // 'https://www.reddit.com/u/webondev/s/myNp9ZusS9',
            // 'https://www.tiktok.com/@webondev.com',
            // 'https://www.pinterest.com/webondev/',
            // 'https://www.linkedin.com/company/solutions-indicator/',
            // 'https://www.youtube.com/@webondevOfficial'
          ]
        },
        {
          '@type': 'OfferCatalog',
          '@id': 'https://www.webondev.com/services/#offercatalog',
          name: 'Service Catalog',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development', description: 'Custom web, mobile, and desktop software built to streamline operations and scale businesses.' }, url: 'https://www.webondev.com/software-development/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', description: 'Responsive, SEO-friendly, and high-performance websites built with modern frameworks.' }, url: 'https://www.webondev.com/web-development/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Development', description: 'Native and cross-platform mobile apps with exceptional UI/UX and performance.' }, url: 'https://www.webondev.com/mobile-development/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design', description: 'User-centric designs that enhance engagement through sleek interfaces and intuitive experiences.' }, url: 'https://www.webondev.com/ui-ux-design/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', description: 'End-to-end digital marketing strategies including SEO, PPC, SMM, and content campaigns.' }, url: 'https://www.webondev.com/digital-marketing/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Solutions', description: 'Custom e-commerce platforms and integrations that drive sales and streamline management.' }, url: 'https://www.webondev.com/ecommerce-solutions/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & DevOps', description: 'Cloud migration, DevOps automation, and performance optimization for scalable infrastructure.' }, url: 'https://www.webondev.com/cloud-devops/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consulting & Strategy', description: 'Business transformation consulting and technology strategy for startups and enterprises.' }, url: 'https://www.webondev.com/consulting-strategy/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outsourcing Services', description: 'Dedicated teams and managed outsourcing for development, support, and maintenance.' }, url: 'https://www.webondev.com/outsourcing-services/', priceCurrency: 'USD', availability: 'InStock' },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & Support', description: 'Ongoing updates, bug fixes, and optimization to ensure long-term product reliability.' }, url: 'https://www.webondev.com/maintenance-support/', priceCurrency: 'USD', availability: 'InStock' }
          ]
        }
      ],
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': 'https://www.webondev.com/#website'
      }
    })
  }}
/>


      </body>
    </html>
  );
}
