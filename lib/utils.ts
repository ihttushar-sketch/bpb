/* Helpers for Bangla numerals, dates and text — used by both server and client. */

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toBangla(input: string | number): string {
  return String(input).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

const BN_MONTHS = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর',
];

const BN_WEEKDAYS = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার',
];

/**
 * All timestamps on the demo site are interpreted in Dhaka time (UTC+6) and
 * measured against DEMO_NOW, so a server render and a client render always
 * agree — no hydration mismatches on relative times.
 */
export const DEMO_NOW = new Date('2026-09-14T13:30:00+06:00');

const DHAKA_OFFSET_MS = 6 * 60 * 60 * 1000;

function dhakaParts(iso: string) {
  const d = new Date(new Date(iso).getTime() + DHAKA_OFFSET_MS);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth(),
    date: d.getUTCDate(),
    hours: d.getUTCHours(),
    minutes: d.getUTCMinutes(),
    weekday: d.getUTCDay(),
  };
}

/** ১৪ সেপ্টেম্বর ২০২৬ */
export function banglaDate(iso: string): string {
  const p = dhakaParts(iso);
  return `${toBangla(p.date)} ${BN_MONTHS[p.month]} ${toBangla(p.year)}`;
}

/** সোমবার, ১৪ সেপ্টেম্বর ২০২৬ */
export function banglaFullDate(iso: string): string {
  const p = dhakaParts(iso);
  return `${BN_WEEKDAYS[p.weekday]}, ${toBangla(p.date)} ${BN_MONTHS[p.month]} ${toBangla(p.year)}`;
}

/** সকাল ১০:২৫ / দুপুর ১:০৫ / বিকেল ৪:৩০ / রাত ৯:১০ */
export function banglaTime(iso: string): string {
  const p = dhakaParts(iso);
  const h24 = p.hours;
  let period = 'ভোর';
  if (h24 >= 6 && h24 < 12) period = 'সকাল';
  else if (h24 >= 12 && h24 < 15) period = 'দুপুর';
  else if (h24 >= 15 && h24 < 18) period = 'বিকেল';
  else if (h24 >= 18 && h24 < 20) period = 'সন্ধ্যা';
  else if (h24 >= 20 || h24 < 4) period = 'রাত';

  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const mm = String(p.minutes).padStart(2, '0');
  return `${period} ${toBangla(h12)}:${toBangla(mm)}`;
}

/** ২ ঘণ্টা আগে / ৩ দিন আগে */
export function timeAgo(iso: string, now: Date = DEMO_NOW): string {
  const diffMs = now.getTime() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);

  if (mins < 1) return 'এইমাত্র';
  if (mins < 60) return `${toBangla(mins)} মিনিট আগে`;

  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${toBangla(hours)} ঘণ্টা আগে`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${toBangla(days)} দিন আগে`;

  return banglaDate(iso);
}

/** ১২,৩৪৫ বার পঠিত */
export function banglaCount(n: number): string {
  return toBangla(n.toLocaleString('en-US'));
}

/** Short, URL-safe Bengali slug handling for search matching. */
export function normalize(text: string): string {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Split article body into paragraphs, supporting an optional > quote prefix. */
export function isQuote(paragraph: string): boolean {
  return paragraph.startsWith('> ');
}
