'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = (localStorage.getItem('pa-theme') as Theme | null) ?? null;
    const initial: Theme =
      stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('pa-theme', next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'লাইট মোডে যান' : 'ডার্ক মোডে যান'}
      title={theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}
      className={`grid h-8 w-8 place-items-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-brand hover:text-brand dark:border-neutral-700 dark:text-neutral-300 ${className}`}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8Z" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
