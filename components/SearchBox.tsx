'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox({ className = '' }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const term = q.trim();
        router.push(term ? `/search?q=${encodeURIComponent(term)}` : '/search');
      }}
      role="search"
      className={`flex items-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 focus-within:border-brand dark:border-neutral-700 dark:bg-neutral-800 ${className}`}
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="search"
        placeholder="খুঁজুন…"
        aria-label="খুঁজুন"
        className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-neutral-400 dark:text-neutral-100"
      />
      <button
        type="submit"
        aria-label="অনুসন্ধান"
        className="grid h-9 w-10 shrink-0 place-items-center bg-brand text-white transition hover:bg-brand-dark"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.6-3.6" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}
