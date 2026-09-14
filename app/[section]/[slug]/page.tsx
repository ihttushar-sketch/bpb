import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumb from '@/components/Breadcrumb';
import ShareRow from '@/components/ShareRow';
import { LatestList, MostRead } from '@/components/Sidebar';
import { allArticles, getArticle, getRelated } from '@/lib/articles';
import { getSection } from '@/lib/sections';
import { banglaCount, banglaDate, banglaTime } from '@/lib/utils';

export function generateStaticParams() {
  return allArticles().map((a) => ({ section: a.section, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await params;
  const article = getArticle(section, slug);
  if (!article) return { title: 'পাওয়া যায়নি' };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const article = getArticle(section, slug);
  if (!article) notFound();

  const meta = getSection(article.section);
  const related = getRelated(article, 4);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-5">
      <Breadcrumb
        items={[
          { label: meta?.name ?? article.section, href: `/${article.section}` },
          { label: article.title.slice(0, 40) },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* ── Article ─────────────────────────────────── */}
        <article className="lg:col-span-8">
          <Link
            href={`/${article.section}`}
            className="text-[13px] font-bold uppercase tracking-wide text-brand"
          >
            {meta?.name}
          </Link>

          <h1 className="bn-lead mt-1.5 text-[26px] font-bold leading-tight md:text-[36px]">
            {article.title}
          </h1>

          <p className="mt-3 text-[16px] leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-[17px]">
            {article.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-y border-neutral-200 py-3 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-[15px] font-bold text-white">
                {article.author.slice(0, 1)}
              </span>
              <div className="text-[13px] leading-tight">
                <p className="font-semibold">{article.author}</p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {banglaDate(article.publishedAt)} · {banglaTime(article.publishedAt)}
                </p>
              </div>
            </div>
            <ShareRow title={article.title} />
          </div>

          <figure className="mt-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            {article.imageCaption && (
              <figcaption className="mt-2 text-[12px] text-neutral-500 dark:text-neutral-400">
                {article.imageCaption}
              </figcaption>
            )}
          </figure>

          <div className="article-body bn-text mt-5 text-neutral-800 dark:text-neutral-200">
            {article.body.map((para, i) =>
              para.startsWith('> ') ? (
                <blockquote key={i}>{para.replace('> ', '')}</blockquote>
              ) : (
                <p key={i}>{para}</p>
              ),
            )}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <span className="text-[13px] font-semibold text-neutral-500">ট্যাগ:</span>
            {article.tags.map((t) => (
              <Link
                key={t}
                href={`/search?q=${encodeURIComponent(t)}`}
                className="rounded-full bg-neutral-100 px-3 py-1 text-[12px] transition hover:bg-brand hover:text-white dark:bg-neutral-800"
              >
                {t}
              </Link>
            ))}
            <span className="ml-auto text-[12px] text-neutral-400">
              পঠিত {banglaCount(article.views)} বার
            </span>
          </div>

          {/* Related */}
          <section className="mt-8">
            <h2 className="mb-4 flex items-center border-b-2 border-brand pb-2 text-[19px] font-bold">
              <span className="mr-2 inline-block h-5 w-1 rounded-sm bg-brand" />
              সম্পর্কিত খবর
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="card" showExcerpt={false} />
              ))}
            </div>
          </section>
        </article>

        {/* ── Sidebar ─────────────────────────────────── */}
        <aside className="space-y-5 lg:col-span-4">
          <LatestList limit={6} excludeSlug={article.slug} />
          <MostRead limit={5} />
          <section className="rounded-lg bg-brand-soft p-4 text-[13px] leading-relaxed text-neutral-700 dark:bg-brand/15 dark:text-neutral-300">
            <h2 className="text-[15px] font-bold text-brand-dark dark:text-white">
              সম্পাদকের কাছে
            </h2>
            <p className="mt-1.5">
              ভুল সংশোধন বা খবর পাঠাতে লিখুন:{' '}
              <span className="font-semibold">desk@ponderalo.example</span>
            </p>
            <p className="mt-1 text-neutral-500 dark:text-neutral-400">
              সচিবালয় ও বাস্তবায়নে: রজিত চকলাদার
            </p>
          </section>
        </aside>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: article.title,
            description: article.excerpt,
            image: [article.image],
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            author: { '@type': 'Person', name: article.author },
            publisher: {
              '@type': 'Organization',
              name: 'পনডার আলো',
              founder: { '@type': 'Person', name: 'Rajit Chakladar' },
            },
            interactionStatistic: {
              '@type': 'InteractionCounter',
              interactionType: 'https://schema.org/ReadAction',
              userInteractionCount: article.views,
            },
          }),
        }}
      />
    </main>
  );
}
