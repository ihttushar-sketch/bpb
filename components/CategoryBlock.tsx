import Link from 'next/link';
import type { Article } from '@/lib/types';
import { articleHref } from '@/lib/articles';
import ArticleCard from './ArticleCard';
import SectionTitle from './SectionTitle';

/**
 * Two section layouts, both used across the Prothom Alo–style home page:
 *  - grid : three image cards side by side
 *  - split: one image card on the left + a two-column list of headlines
 */
export default function CategoryBlock({
  title,
  href,
  articles,
  layout = 'grid',
}: {
  title: string;
  href: string;
  articles: Article[];
  layout?: 'grid' | 'split';
}) {
  if (articles.length === 0) return null;

  return (
    <section className="mb-9">
      <SectionTitle title={title} href={href} />

      {layout === 'split' ? (
        <div className="grid gap-5 md:grid-cols-3">
          <ArticleCard article={articles[0]} variant="card" className="md:col-span-1" />
          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 md:col-span-2 md:content-start">
            {articles.slice(1, 7).map((a) => (
              <ArticleCard key={a.slug} article={a} variant="text" />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} variant="card" />
          ))}
        </div>
      )}

      <div className="mt-3 text-center">
        <Link
          href={href}
          className="inline-block rounded-full border border-brand px-5 py-1.5 text-[13px] font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          {title} — আরও খবর
        </Link>
      </div>
    </section>
  );
}

/** Horizontal strip of stories with thumbnails — used for “আরও পড়ুন”. */
export function StoryStrip({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} variant="row" />
      ))}
    </div>
  );
}
