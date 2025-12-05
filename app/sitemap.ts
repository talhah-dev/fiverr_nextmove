import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const preferredRegion = ['fra1', 'dub1', 'arn1', 'cdg1'];

// Expanded city mapping for better GEO coverage
const cities = {
  de: [
    { name: 'berlin', priority: 0.9 },
    { name: 'muenchen', priority: 0.9 },
    { name: 'hamburg', priority: 0.9 },
    { name: 'koeln', priority: 0.8 },
    { name: 'frankfurt', priority: 0.8 },
    { name: 'stuttgart', priority: 0.7 },
    { name: 'duesseldorf', priority: 0.7 },
    { name: 'dortmund', priority: 0.6 },
    { name: 'essen', priority: 0.6 },
    { name: 'leipzig', priority: 0.6 }
  ],
  at: [
    { name: 'wien', priority: 0.9 },
    { name: 'salzburg', priority: 0.7 },
    { name: 'innsbruck', priority: 0.6 },
    { name: 'graz', priority: 0.6 },
    { name: 'linz', priority: 0.5 }
  ],
  ch: [
    { name: 'zuerich', priority: 0.9 },
    { name: 'genf', priority: 0.8 },
    { name: 'basel', priority: 0.7 },
    { name: 'bern', priority: 0.6 },
    { name: 'lausanne', priority: 0.5 }
  ]
} as const;


export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nextmove-digital.de';
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    // Main pages
    { url: `${base}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    
    // Country hubs
    { url: `${base}/de`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/at`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Add city pages with individual priorities
  Object.entries(cities).forEach(([country, cityList]) => {
    cityList.forEach(city => {
      urls.push({
        url: `${base}/${country}/${city.name}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: city.priority
      });
    });
  });

  return urls;
} 