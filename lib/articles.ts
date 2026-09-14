import { ARTICLES_A } from './articles-a';
import { ARTICLES_B } from './articles-b';
import type { Article } from './types';

const RAW: Article[] = [...ARTICLES_A, ...ARTICLES_B];

/** Newest first — matches how a newsroom orders its feed. */
export const ARTICLES: Article[] = [...RAW].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function allArticles(): Article[] {
  return ARTICLES;
}

export function getBySection(section: string): Article[] {
  return ARTICLES.filter((a) => a.section === section);
}

export function getArticle(section: string, slug: string): Article | undefined {
  return ARTICLES.find((a) => a.section === section && a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** The big story at the top of the home page. */
export function getLead(): Article {
  return ARTICLES.find((a) => a.lead) ?? ARTICLES[0];
}

/** The four stories that sit beside the lead. */
export function getSecondary(n = 4): Article[] {
  const lead = getLead();
  return ARTICLES.filter((a) => a.slug !== lead.slug).slice(0, n);
}

export function getLatest(n = 10): Article[] {
  return ARTICLES.slice(0, n);
}

export function getBreaking(n = 6): Article[] {
  return ARTICLES.filter((a) => a.breaking).slice(0, n);
}

export function getMostRead(n = 6): Article[] {
  return [...ARTICLES].sort((a, b) => b.views - a.views).slice(0, n);
}

export function getRelated(article: Article, n = 4): Article[] {
  const sameSection = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.section === article.section,
  );
  const tagMatched = ARTICLES.filter(
    (a) =>
      a.slug !== article.slug &&
      a.section !== article.section &&
      a.tags.some((t) => article.tags.includes(t)),
  );
  const rest = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.section !== article.section,
  );
  return [...sameSection, ...tagMatched, ...rest].slice(0, n);
}

/** One lead + a grid of the rest, the pattern used on section pages. */
export function sectionFeed(section: string): { lead: Article | null; rest: Article[] } {
  const list = getBySection(section);
  if (list.length === 0) return { lead: null, rest: [] };
  return { lead: list[0], rest: list.slice(1) };
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter((a) => {
    const haystack = [a.title, a.excerpt, a.author, ...a.tags].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

/** Simple client-safe pagination used by section + search pages. */
export function paginate<T>(items: T[], page: number, perPage = 9): { items: T[]; pages: number } {
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), pages);
  const start = (current - 1) * perPage;
  return { items: items.slice(start, start + perPage), pages };
}

export function articleHref(a: Article): string {
  return `/${a.section}/${a.slug}`;
}

export function sectionHref(section: string): string {
  return `/${section}`;
}
