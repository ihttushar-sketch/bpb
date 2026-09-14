import Link from 'next/link';

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="ব্রেডক্রাম্ব" className="mb-4 flex flex-wrap items-center gap-1 text-[12px] text-neutral-500 dark:text-neutral-400">
      <Link href="/" className="hover:text-brand">
        প্রচ্ছদ
      </Link>
      {items.map((it, i) => (
        <span key={`${it.label}-${i}`} className="flex items-center gap-1">
          <span aria-hidden="true">/</span>
          {it.href ? (
            <Link href={it.href} className="hover:text-brand">
              {it.label}
            </Link>
          ) : (
            <span className="text-neutral-700 dark:text-neutral-300">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
