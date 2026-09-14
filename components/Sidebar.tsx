import Link from 'next/link';
import { getLatest, getMostRead, articleHref } from '@/lib/articles';
import { sectionName } from '@/lib/sections';
import { banglaCount, timeAgo } from '@/lib/utils';

export function MostRead({ limit = 6 }: { limit?: number }) {
  const items = getMostRead(limit);

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-[#141821]">
      <h2 className="mb-3 flex items-center gap-2 border-b-2 border-brand pb-2 text-[17px] font-bold">
        সর্বাধিক পঠিত
      </h2>
      <ol className="space-y-3">
        {items.map((a, i) => (
          <li key={a.slug} className="flex gap-3 border-b border-dashed border-neutral-200 pb-3 last:border-0 last:pb-0 dark:border-neutral-800">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-[12px] font-bold text-white">
              {banglaCount(i + 1)}
            </span>
            <div>
              <h3 className="bn-lead text-[15px] font-semibold leading-snug">
                <Link href={articleHref(a)} className="headline-hover">
                  {a.title}
                </Link>
              </h3>
              <p className="mt-1 text-[12px] text-neutral-500 dark:text-neutral-400">
                {sectionName(a.section)} · পঠিত {banglaCount(a.views)} বার
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function LatestList({ limit = 8, excludeSlug }: { limit?: number; excludeSlug?: string }) {
  const items = getLatest(limit + 3)
    .filter((a) => a.slug !== excludeSlug)
    .slice(0, limit);

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-[#141821]">
      <h2 className="mb-3 border-b-2 border-brand pb-2 text-[17px] font-bold">সর্বশেষ</h2>
      <ul className="space-y-3">
        {items.map((a) => (
          <li key={a.slug} className="flex gap-3 border-b border-dashed border-neutral-200 pb-3 last:border-0 last:pb-0 dark:border-neutral-800">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <div>
              <h3 className="bn-lead text-[15px] font-semibold leading-snug">
                <Link href={articleHref(a)} className="headline-hover">
                  {a.title}
                </Link>
              </h3>
              <p className="mt-1 text-[12px] text-neutral-500 dark:text-neutral-400">
                {timeAgo(a.publishedAt)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="rounded-lg bg-brand-soft p-4 dark:bg-brand/15">
      <h2 className="text-[17px] font-bold text-brand-dark dark:text-white">নিউজলেটার</h2>
      <p className="mt-1 text-[13px] leading-relaxed text-neutral-700 dark:text-neutral-300">
        দিনের প্রধান খবর সকালেই পেয়ে যান ইনবক্সে।
      </p>
      <form className="mt-3 flex overflow-hidden rounded-md bg-white dark:bg-[#0f1218]">
        <input
          type="email"
          required
          placeholder="আপনার ইমেইল"
          aria-label="ইমেইল ঠিকানা"
          className="w-full bg-transparent px-3 py-2 text-[13px] outline-none dark:text-neutral-100"
        />
        <button
          type="submit"
          className="shrink-0 bg-brand px-4 text-[13px] font-semibold text-white transition hover:bg-brand-dark"
        >
          সাবস্ক্রাইব
        </button>
      </form>
    </section>
  );
}
