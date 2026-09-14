import Link from 'next/link';

export default function SectionTitle({
  title,
  href,
  moreLabel = 'আরও',
}: {
  title: string;
  href?: string;
  moreLabel?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between border-b-2 border-brand pb-2">
      <h2 className="relative flex items-center text-[19px] font-bold md:text-[21px]">
        <span className="mr-2 inline-block h-5 w-1 rounded-sm bg-brand" />
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline"
        >
          {moreLabel}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 6 6 6-6 6" strokeLinecap="round" />
          </svg>
        </Link>
      )}
    </div>
  );
}
