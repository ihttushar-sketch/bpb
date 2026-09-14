import Link from 'next/link';
import { SECTIONS } from '@/lib/sections';

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[720px] flex-col items-center px-4 py-20 text-center">
      <span className="text-[64px] font-bold text-brand">৪০৪</span>
      <h1 className="mt-2 text-[26px] font-bold">পাতাটি পাওয়া যায়নি</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
        আপনি যে পাতাটি খুঁজছেন তা সরিয়ে ফেলা বা স্থানান্তরিত হয়েছে। নিচের বিভাগগুলো থেকে পছন্দের
        খবর দেখুন।
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-2 text-[13px]">
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
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand px-6 py-2 text-[14px] font-semibold text-white transition hover:bg-brand-dark"
      >
        প্রচ্ছদে ফিরে যান
      </Link>
    </main>
  );
}
