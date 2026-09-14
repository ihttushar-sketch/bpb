import Link from 'next/link';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const mark = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10 md:h-11 md:w-11';
  const title = size === 'sm' ? 'text-xl' : 'text-2xl md:text-[28px]';

  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="পনডার আলো — প্রচ্ছদ">
      <span
        className={`${mark} grid shrink-0 place-items-center rounded-full bg-brand text-white shadow-sm`}
      >
        {/* A rising sun — the “আলো” motif of the masthead */}
        <svg viewBox="0 0 24 24" className="h-3/5 w-3/5" aria-hidden="true">
          <circle cx="12" cy="13.5" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <path d="M12 4.2v2.1M12 16.8V19M4.6 13.5H2.6M21.4 13.5h-2M6.4 7.8 4.9 6.3M19.1 20.7l-1.5-1.5M17.6 7.8l1.5-1.5M4.9 20.7l1.5-1.5" />
          </g>
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`${title} block font-bold tracking-tight text-brand group-hover:text-brand-dark`}
        >
          পনডার আলো
        </span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.3em] text-neutral-500 md:text-[10px]">
          PONDER ALO
        </span>
      </span>
    </Link>
  );
}
