import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Our Work - 500+ Projects Delivered (Case Studies & Results)',
  description: 'See real results from 500+ projects: e-commerce stores with 200% revenue growth, apps with 100K+ downloads, SaaS platforms & more. View case studies with actual metrics.',
  keywords: 'software portfolio, web development projects, mobile app portfolio, case studies, successful projects, client work',
  alternates: {
    canonical: `${siteUrl}/portfolio/`,
  },
  openGraph: {
    title: 'Our Work - 500+ Projects Delivered (Case Studies & Results)',
    description: 'See real results from 500+ projects: e-commerce stores, mobile apps, SaaS platforms & more. View case studies with actual metrics.',
    url: `${siteUrl}/portfolio`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/images/og?title=Our%20Portfolio&subtitle=Web%20On%20Dev`,
        width: 1200,
        height: 630,
        alt: 'Web On Dev Portfolio - 500+ Projects'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work - 500+ Projects Delivered (Case Studies & Results)',
    description: 'See real results from 500+ projects: e-commerce stores, mobile apps, SaaS platforms & more. View case studies with actual metrics.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
