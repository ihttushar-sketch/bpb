import type { MetadataRoute } from 'next';
import { allArticles, articleHref } from '@/lib/articles';
import { SECTIONS } from '@/lib/sections';

const BASE = 'https://ponderalo.example';

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = SECTIONS.map((s) => ({
    url: `${BASE}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'hourly' as const,
    priority: 0.7,
  }));

  const articles = allArticles().map((a) => ({
    url: `${BASE}${articleHref(a)}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'hourly', priority: 1 },
    ...sections,
    ...articles,
  ];
}
