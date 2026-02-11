import React from 'react';

interface WhereWeServeSchemaProps {
  countries: any[];
  siteUrl: string;
}

export default function WhereWeServeSchema({ countries, siteUrl }: WhereWeServeSchemaProps) {
  // Breadcrumb for the main where-we-serve index page
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Where We Serve',
        item: `${siteUrl}/where-we-serve`,
      },
    ],
  };

  // ItemList of countries served (valid for list/directory pages)
  const countryListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Countries Served by Web On Dev',
    description: 'Web On Dev provides software development services across 50+ countries worldwide.',
    numberOfItems: countries.length,
    itemListElement: countries.slice(0, 50).map((c: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: c.name,
      url: `${siteUrl}/where-we-serve/${c.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countryListSchema) }}
      />
    </>
  );
}
