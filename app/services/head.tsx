export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return (
    <>
      <link rel="alternate" type="application/rss+xml" href={`${siteUrl}/feeds/services?format=rss`} />
      <link rel="alternate" type="application/atom+xml" href={`${siteUrl}/feeds/services?format=atom`} />
      <link rel="alternate" type="application/feed+json" href={`${siteUrl}/feeds/services?format=json`} />
    </>
  );
}


