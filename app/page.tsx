import ArticleCard from '@/components/ArticleCard';
import BreakingTicker from '@/components/BreakingTicker';
import CategoryBlock, { StoryStrip } from '@/components/CategoryBlock';
import SecretariatPortal from '@/components/SecretariatPortal';
import { LatestList, MostRead, Newsletter } from '@/components/Sidebar';
import {
  allArticles,
  getBySection,
  getLead,
  getSecondary,
} from '@/lib/articles';

export default function HomePage() {
  const lead = getLead();
  const secondary = getSecondary(4);

  const jatio = getBySection('jatio').filter((a) => a.slug !== lead.slug);
  const rest = allArticles().filter((a) => a.slug !== lead.slug);

  return (
    <>
      <BreakingTicker />

      <main className="mx-auto max-w-[1240px] px-4 py-5">
        {/* ── Lead + latest ───────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ArticleCard article={lead} variant="lead" priority />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {secondary.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="card" />
              ))}
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <LatestList limit={8} />
            <Newsletter />
            <MostRead limit={6} />
          </aside>
        </div>

        {/* ── Secretariat & execution ─────────────────── */}
        <div className="mt-9">
          <SecretariatPortal />
        </div>

        {/* ── Category sections ───────────────────────── */}
        <div className="mt-9">
          <CategoryBlock
            title="জাতীয়"
            href="/jatio"
            articles={jatio.length ? jatio : rest.slice(0, 6)}
            layout="split"
          />
          <CategoryBlock title="রাজনীতি" href="/rajniti" articles={getBySection('rajniti')} />
          <CategoryBlock
            title="খেলাধুলা"
            href="/khela"
            articles={getBySection('khela')}
            layout="split"
          />
          <CategoryBlock title="বিশ্ব" href="/bishwo" articles={getBySection('bishwo')} />
          <CategoryBlock title="বিনোদন" href="/binodon" articles={getBySection('binodon')} />
          <CategoryBlock
            title="মতামত"
            href="/motamot"
            articles={getBySection('motamot')}
            layout="split"
          />
          <CategoryBlock title="অর্থনীতি" href="/orthoniti" articles={getBySection('orthoniti')} />
          <CategoryBlock title="শিক্ষা" href="/shikka" articles={getBySection('shikka')} />
          <CategoryBlock title="প্রযুক্তি" href="/projukti" articles={getBySection('projukti')} />
          <CategoryBlock title="জীবনযাপন" href="/jibonjapon" articles={getBySection('jibonjapon')} />
        </div>

        {/* ── More stories ────────────────────────────── */}
        <section className="mb-6 mt-4">
          <h2 className="mb-4 flex items-center border-b-2 border-brand pb-2 text-[19px] font-bold md:text-[21px]">
            <span className="mr-2 inline-block h-5 w-1 rounded-sm bg-brand" />
            আরও পড়ুন
          </h2>
          <StoryStrip articles={rest.slice(4, 12)} />
        </section>
      </main>
    </>
  );
}
