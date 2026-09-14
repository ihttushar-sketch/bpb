import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/types';
import { sectionName } from '@/lib/sections';
import { articleHref } from '@/lib/articles';
import { banglaTime, timeAgo } from '@/lib/utils';

type Variant = 'lead' | 'card' | 'row' | 'text';

export default function ArticleCard({
  article,
  variant = 'card',
  showExcerpt = true,
  showSection = true,
  priority = false,
  className = '',
}: {
  article: Article;
  variant?: Variant;
  showExcerpt?: boolean;
  showSection?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const href = articleHref(article);

  const meta = (
    <span className="flex flex-wrap items-center gap-x-2 text-[12px] text-neutral-500 dark:text-neutral-400">
      {article.marked && (
        <span className="rounded-sm bg-brand px-1.5 py-0.5 text-[11px] font-semibold text-white">
          {article.marked}
        </span>
      )}
      <span>{timeAgo(article.publishedAt)}</span>
    </span>
  );

  if (variant === 'lead') {
    return (
      <article className={`group ${className}`}>
        <Link href={href} className="block overflow-hidden rounded-md">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <div className="mt-3">
          {showSection && (
            <Link
              href={`/${article.section}`}
              className="mb-1.5 inline-block text-[13px] font-bold uppercase tracking-wide text-brand"
            >
              {sectionName(article.section)}
            </Link>
          )}
          <h2 className="bn-lead text-[24px] font-bold leading-tight md:text-[34px]">
            <Link href={href} className="headline-hover">
              {article.title}
            </Link>
          </h2>
          {showExcerpt && (
            <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
              {article.excerpt}
            </p>
          )}
          <div className="mt-2 flex items-center gap-3">
            {meta}
            <span className="text-[12px] text-neutral-400">{banglaTime(article.publishedAt)}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'row') {
    return (
      <article className={`group flex gap-3 ${className}`}>
        <Link
          href={href}
          className="relative h-[74px] w-[110px] shrink-0 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="110px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="min-w-0">
          <h3 className="bn-lead text-[15px] font-semibold leading-snug">
            <Link href={href} className="headline-hover line-clamp-3">
              {article.title}
            </Link>
          </h3>
          <div className="mt-1">{meta}</div>
        </div>
      </article>
    );
  }

  if (variant === 'text') {
    return (
      <article className={`group border-b border-dashed border-neutral-200 pb-3 dark:border-neutral-800 ${className}`}>
        <h3 className="bn-lead text-[15px] font-semibold leading-snug">
          <Link href={href} className="headline-hover">
            {article.title}
          </Link>
        </h3>
        <div className="mt-1">{meta}</div>
      </article>
    );
  }

  return (
    <article className={`group ${className}`}>
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="mt-2.5">
        {showSection && (
          <Link
            href={`/${article.section}`}
            className="mb-1 inline-block text-[12px] font-bold text-brand"
          >
            {sectionName(article.section)}
          </Link>
        )}
        <h3 className="bn-lead text-[17px] font-bold leading-snug">
          <Link href={href} className="headline-hover line-clamp-3">
            {article.title}
          </Link>
        </h3>
        {showExcerpt && (
          <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {article.excerpt}
          </p>
        )}
        <div className="mt-1.5">{meta}</div>
      </div>
    </article>
  );
}
