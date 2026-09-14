'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MORE_SECTIONS, NAV_SECTIONS } from '@/lib/sections';
import { banglaFullDate, DEMO_NOW } from '@/lib/utils';
import Logo from './Logo';
import SearchBox from './SearchBox';
import ThemeToggle from './ThemeToggle';

const TOP_LINKS = [
  { href: '/search?q=', label: 'ই-পেপার' },
  { href: '/search?q=', label: 'ইংরেজি সংস্করণ' },
  { href: '/search?q=', label: 'বিজ্ঞাপন' },
  { href: '/search?q=', label: 'লগ ইন' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const isActive = (slug: string) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-[#0f1218]">
      {/* ── Utility strip ─────────────────────────────── */}
      <div className="hidden border-b border-neutral-100 bg-neutral-50 text-[12px] dark:border-neutral-800 dark:bg-[#12151c] lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-1.5">
          <span className="text-neutral-600 dark:text-neutral-400">
            {banglaFullDate(DEMO_NOW.toISOString())}
          </span>
          <nav className="flex items-center gap-4">
            {TOP_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-neutral-600 transition hover:text-brand dark:text-neutral-400"
              >
                {l.label}
              </Link>
            ))}
            <span className="flex items-center gap-2 text-neutral-400">
              <a href="#" aria-label="Facebook" className="transition hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.1V14h2.4v7h3Z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="transition hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17.3 5.6 12 5.6 12 5.6s-5.3 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.6.5 6.9.5 6.9.5s5.3 0 6.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-2.5.4-3.8s-.1-2.5-.4-3.8ZM10.2 15.1V8.9l5.2 3.1-5.2 3.1Z" />
                </svg>
              </a>
            </span>
          </nav>
        </div>
      </div>

      {/* ── Masthead row ──────────────────────────────── */}
      <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="মেনু"
          aria-expanded={menuOpen}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-neutral-200 text-neutral-700 lg:hidden dark:border-neutral-700 dark:text-neutral-200"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>

        <Logo />

        <span className="ml-auto hidden w-full max-w-[300px] sm:block">
          <SearchBox />
        </span>

        <ThemeToggle className="ml-auto sm:ml-2" />
      </div>

      {/* ── Category bar ──────────────────────────────── */}
      <nav className="border-t border-neutral-100 bg-brand text-white dark:border-neutral-800">
        <div className="mx-auto flex max-w-[1240px] items-center gap-1 overflow-x-auto px-2 no-scrollbar">
          <Link
            href="/"
            className={`shrink-0 px-3 py-2.5 text-[14px] font-medium transition hover:bg-black/15 ${pathname === '/' ? 'bg-black/20' : ''}`}
          >
            প্রচ্ছদ
          </Link>
          {NAV_SECTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className={`shrink-0 px-3 py-2.5 text-[14px] font-medium transition hover:bg-black/15 ${
                isActive(s.slug) ? 'bg-black/20' : ''
              }`}
            >
              {s.name}
            </Link>
          ))}

          <div className="relative hidden shrink-0 lg:block">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              className="flex items-center gap-1 px-3 py-2.5 text-[14px] font-medium transition hover:bg-black/15"
            >
              আরও
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-50 w-44 bg-white py-1 text-neutral-700 shadow-lg dark:bg-[#171b22] dark:text-neutral-200">
                {MORE_SECTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="block px-4 py-2 text-[14px] transition hover:bg-brand-soft hover:text-brand dark:hover:bg-white/5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ───────────────────────────────── */}
      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white px-4 py-3 shadow-lg lg:hidden dark:border-neutral-800 dark:bg-[#12151c]">
          <div className="mb-3 sm:hidden">
            <SearchBox />
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <Link href="/" className="py-1.5 text-[15px] font-medium hover:text-brand">
              প্রচ্ছদ
            </Link>
            {[...NAV_SECTIONS, ...MORE_SECTIONS].map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="py-1.5 text-[15px] hover:text-brand">
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 border-t border-neutral-100 pt-3 text-[13px] text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            {TOP_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
