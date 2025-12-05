import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/drafts/',
          '/_next/',
          '/static/',
          '*.json',
          '/*?*utm_*',
          '/*?*fbclid*',
          '/*?*gclid*'
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/de/',
          '/at/', 
          '/ch/',
          '/de/*',
          '/at/*',
          '/ch/*'
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/'
        ]
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/de/',
          '/at/',
          '/ch/',
          '/de/*',
          '/at/*',
          '/ch/*'
        ]
      },
      {
        userAgent: 'CCBot',
        allow: [
          '/',
          '/de/',
          '/at/',
          '/ch/'
        ]
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/de/',
          '/at/',
          '/ch/',
          '/de/*',
          '/at/*',
          '/ch/*'
        ]
      }
    ],
    sitemap: 'https://nextmove-digital.de/sitemap.xml',
    host: 'https://nextmove-digital.de'
  };
}