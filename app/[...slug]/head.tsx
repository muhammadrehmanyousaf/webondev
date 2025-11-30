import { getBaseUrl } from '@/lib/site-config';
import { getServiceBySlug } from '@/lib/site-structure';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function Head({ params }: Props) {
  const { slug } = await params;
  const baseUrl = getBaseUrl();
  const service = getServiceBySlug(slug[0], slug[1]);
  const self = `${baseUrl}/${slug.join('/')}`;
  // Use services feed as the alternate for service pages
  return (
    <>
      <link rel="alternate" type="application/rss+xml" href={`${baseUrl}/feeds/services?format=rss`} />
      <link rel="alternate" type="application/atom+xml" href={`${baseUrl}/feeds/services?format=atom`} />
      <link rel="alternate" type="application/feed+json" href={`${baseUrl}/feeds/services?format=json`} />
    </>
  );
}


