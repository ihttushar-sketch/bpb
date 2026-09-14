import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumb from '@/components/Breadcrumb';
import SearchBox from '@/components/SearchBox';
import { MostRead } from '@/components/Sidebar';
import { searchArticles } from '@/lib/articles';
import { SECTIONS } from '@/lib/sections';
import { banglaCount } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'অনুসন্ধান',
  description: 'পনডার আলোর সব খবর এক জায়গায় খুঁজুন।',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const results = searchArticles(q);

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-5">
      <Breadcrumb items={[{ label: 'অনুসন্ধান' }]} />

      <header className="mb-6 border-b-2 border-brand pb-4">
        <h1 className="text-[26px] font-bold md:text-[32px]">অনুসন্ধান</h1>
        <div className="mt-3 max-w-md">
          <SearchBox />
        </div>
        {q ? (
          <p className="mt-3 text-[14px] text-neutral-600 dark:text-neutral-400">
            <span className="font-semibold text-brand">“{q}”</span> — এই বিষয়ে{' '}
            {banglaCount(results.length)} টি খবর পাওয়া গেছে
          </p>
        ) : (
          <p className="mt-3 text-[14px] text-neutral-600 dark:text-neutral-400">
            খবরের শিরোনাম, সারাংশ বা ট্যাগ লিখে খুঁজুন।
          </p>
        )}
      </header>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {q && results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-700">
              <p className="text-[16px] font-semibold">কোনো খবর পাওয়া যায়নি</p>
              <p className="mt-1 text-[14px] text-neutral-500">
                অন্য কিছু দিয়ে চেষ্টা করুন, যেমন— <span className="font-semibold">ঢাকা</span>,{' '}
                <span className="font-semibold">ক্রিকেট</span>,{' '}
                <span className="font-semibold">শিক্ষা</span>
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {(q ? results : []).map((a) => (
                <ArticleCard key={a.slug} article={a} variant="row" />
              ))}
            </div>
          )}

          {!q && (
            <section className="mt-2">
              <h2 className="mb-3 text-[17px] font-bold">বিভাগ অনুযায়ী ব্রাউজ করুন</h2>
              <ul className="flex flex-wrap gap-2 text-[13px]">
                {SECTIONS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 transition hover:bg-brand hover:text-white dark:bg-neutral-800"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:col-span-4">
          <MostRead limit={6} />
        </aside>
      </div>
    </main>
  );
}
