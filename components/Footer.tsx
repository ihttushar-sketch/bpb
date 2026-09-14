import Link from 'next/link';
import { SECRETARIAT } from '@/lib/secretariat';
import { NAV_SECTIONS, MORE_SECTIONS } from '@/lib/sections';
import Logo from './Logo';

const SERVICE_LINKS = [
  { label: 'ই-পেপার', href: '/search?q=' },
  { label: 'মোবাইল অ্যাপ', href: '/search?q=' },
  { label: 'নিউজলেটার', href: '/search?q=' },
  { label: 'আর্কাইভ', href: '/search?q=' },
  { label: 'আরএসএস', href: '/search?q=' },
];

const ABOUT_LINKS = [
  { label: 'আমাদের সম্পর্কে', href: '/search?q=' },
  { label: 'বিজ্ঞাপন', href: '/search?q=' },
  { label: 'যোগাযোগ', href: '/search?q=' },
  { label: 'গোপনীয়তা নীতি', href: '/search?q=' },
  { label: 'ব্যবহারের শর্তাবলী', href: '/search?q=' },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#14161a] text-neutral-300">
      <div className="mx-auto max-w-[1240px] px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="[&_span]:!text-white">
              <Logo />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-neutral-400">
              পনডার আলো — দেশ, বিশ্ব, খেলা, বিনোদন ও মতামতের নির্ভরযোগ্য সংবাদ। সত্য, নিরপেক্ষতা ও
              মানুষের কথা মাথায় রেখে প্রতিদিনের প্রতিবেদন।
            </p>
            <div className="mt-4 flex gap-3 text-neutral-400">
              <a href="#" aria-label="Facebook" className="transition hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.1V14h2.4v7h3Z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="transition hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17.3 5.6 12 5.6 12 5.6s-5.3 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.6.5 6.9.5 6.9.5s5.3 0 6.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-2.5.4-3.8s-.1-2.5-.4-3.8ZM10.2 15.1V8.9l5.2 3.1-5.2 3.1Z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="transition hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 16.2a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.7.7.7-2.6-.2-.3a7.2 7.2 0 1 1 6.2 3.4Zm4-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.8-.1.2-.3.2-.5.1a5.9 5.9 0 0 1-1.7-1 6.4 6.4 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.8s.8 2.1.9 2.3c.1.1 1.5 2.5 3.7 3.4 1.4.6 1.9.6 2.6.5.8-.1 1.9-.8 2.1-1.5.2-.7.2-1.3.2-1.4-.1-.2-.2-.2-.4-.3Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold text-white">বিভাগ</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
              {[...NAV_SECTIONS, ...MORE_SECTIONS].map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="transition hover:text-brand">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold text-white">সেবা</h3>
            <ul className="space-y-2 text-[13px]">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold text-white">আমাদের সম্পর্কে</h3>
            <ul className="space-y-2 text-[13px]">
              {ABOUT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <address className="mt-4 space-y-1 text-[13px] not-italic leading-relaxed text-neutral-400">
              <p>পনডার আলো মিডিয়া হাউস</p>
              <p>বাড়ি ১২, রোড ৮, ব্লক-খ</p>
              <p>ঢাকা-১২১৩, বাংলাদেশ</p>
              <p className="pt-1">
                ইমেইল: <span className="text-neutral-300">desk@ponderalo.example</span>
              </p>
            </address>
          </div>
        </div>

        {/* Secretariat credit */}
        <div className="mt-9 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 px-4 py-4 text-center">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-400">
              {SECRETARIAT.creditEn.toUpperCase()}
            </span>
            <p className="text-[15px] font-bold text-white">
              {SECRETARIAT.role}: {SECRETARIAT.nameBn} ({SECRETARIAT.nameEn})
            </p>
            <p className="text-[12px] text-neutral-400">
              PonDer Alo — সংবাদ পরিচালনা, সম্পাদনা ও কারিগরি বাস্তবায়ন
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-[12px] text-neutral-400 md:flex-row">
          <p>© ২০২৬ PonDer Alo — সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-neutral-500">
            ডেমো কনটেন্ট: এই সাইটের সব সংবাদ কাল্পনিক এবং শুধুমাত্র ডিজাইন প্রদর্শনের জন্য।
          </p>
        </div>
      </div>
    </footer>
  );
}
