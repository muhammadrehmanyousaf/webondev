import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
  description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
  keywords: 'software portfolio, web development projects, mobile app portfolio, case studies, successful projects, client work',
  alternates: {
    canonical: `${siteUrl}/portfolio/`,
  },
  openGraph: {
    title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
    description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
    url: `${siteUrl}/portfolio`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/images/og?title=Our%20Portfolio&subtitle=Solutions%20Indicator`,
        width: 1200,
        height: 630,
        alt: 'Our Portfolio – Web On Dev'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio - Web On Dev | Showcase of Successful Projects',
    description: 'Explore our portfolio of successful software development projects including web applications, mobile apps, e-commerce solutions, and enterprise software.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
