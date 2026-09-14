import Link from 'next/link';
import { getBreaking } from '@/lib/articles';
import { articleHref } from '@/lib/articles';

export default function BreakingTicker() {
  const items = getBreaking(6);
  if (items.length === 0) return null;

  const list = [...items, ...items]; // duplicated for a seamless loop

  return (
    <div className="ticker-wrap border-y border-neutral-100 bg-white dark:border-neutral-800 dark:bg-[#12151c]">
      <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-4">
        <span className="flex shrink-0 items-center gap-1.5 py-2 text-[13px] font-bold text-brand">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          জরুরি
        </span>
        <div className="overflow-hidden py-2">
          <div className="ticker-track gap-8">
            {list.map((a, i) => (
              <Link
                key={`${a.slug}-${i}`}
                href={articleHref(a)}
                className="flex items-center gap-2 text-[14px] text-neutral-700 hover:text-brand dark:text-neutral-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
