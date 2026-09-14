import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumb from '@/components/Breadcrumb';
import { MostRead, Newsletter } from '@/components/Sidebar';
import { getBySection, paginate } from '@/lib/articles';
import { getSection, SECTIONS } from '@/lib/sections';
import { banglaCount, toBangla } from '@/lib/utils';

const PER_PAGE = 9;

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const meta = getSection(section);
  if (!meta) return { title: 'পাওয়া যায়নি' };
  return {
    title: meta.name,
    description: `${meta.name} — ${meta.blurb}। পনডার আলো।`,
  };
}

export default async function SectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ section: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { section } = await params;
  const { page } = await searchParams;
  const meta = getSection(section);
  if (!meta) notFound();

  const all = getBySection(section);
  const current = Number(page ?? '1') || 1;
  const { items, pages } = paginate(all, current, PER_PAGE);
  const [lead, ...rest] = items;

  return (
    <main className="mx-auto max-w-[1240px] px-4 py-5">
      <Breadcrumb items={[{ label: meta.name }]} />

      <header className="mb-6 border-b-2 border-brand pb-3">
        <h1 className="text-[28px] font-bold md:text-[34px]">{meta.name}</h1>
        <p className="mt-1 text-[14px] text-neutral-600 dark:text-neutral-400">
          {meta.blurb} · মোট {banglaCount(all.length)} টি খবর
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {lead && <ArticleCard article={lead} variant="lead" priority />}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="card" />
              ))}
            </div>
          )}

          {pages > 1 && (
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? `/${section}` : `/${section}?page=${p}`}
                  className={`grid h-9 min-w-9 place-items-center rounded border px-3 text-[13px] font-semibold transition ${
                    p === current
                      ? 'border-brand bg-brand text-white'
                      : 'border-neutral-300 hover:border-brand hover:text-brand dark:border-neutral-700'
                  }`}
                >
                  {toBangla(p)}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <aside className="space-y-5 lg:col-span-4">
          <Newsletter />
          <MostRead limit={6} />
          <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
            <h2 className="mb-3 border-b-2 border-brand pb-2 text-[17px] font-bold">অন্যান্য বিভাগ</h2>
            <ul className="flex flex-wrap gap-2 text-[13px]">
              {SECTIONS.filter((s) => s.slug !== section).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="inline-block rounded-full bg-neutral-100 px-3 py-1 transition hover:bg-brand hover:text-white dark:bg-neutral-800"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
