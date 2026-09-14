export type Section = {
  slug: string;
  name: string;
  en: string;
  /** shown in the red nav bar */
  inNav: boolean;
  blurb: string;
};

export const SECTIONS: Section[] = [
  { slug: 'jatio', name: 'জাতীয়', en: 'National', inNav: true, blurb: 'সারা দেশের খবর এক জায়গায়' },
  { slug: 'rajniti', name: 'রাজনীতি', en: 'Politics', inNav: true, blurb: 'রাজনীতির সর্বশেষ খবর ও বিশ্লেষণ' },
  { slug: 'bishwo', name: 'বিশ্ব', en: 'World', inNav: true, blurb: 'বিশ্বের প্রধান সংবাদ ও বিশ্লেষণ' },
  { slug: 'khela', name: 'খেলাধুলা', en: 'Sports', inNav: true, blurb: 'ক্রিকেট, ফুটবল ও সব খেলার খবর' },
  { slug: 'binodon', name: 'বিনোদন', en: 'Entertainment', inNav: true, blurb: 'নাটক, সিনেমা ও তারকার খবর' },
  { slug: 'motamot', name: 'মতামত', en: 'Opinion', inNav: true, blurb: 'কলাম, সম্পাদকীয় ও পাঠকের মত' },
  { slug: 'orthoniti', name: 'অর্থনীতি', en: 'Economy', inNav: true, blurb: 'বাজার, বাণিজ্য ও কর্মসংস্থান' },
  { slug: 'shikka', name: 'শিক্ষা', en: 'Education', inNav: true, blurb: 'স্কুল-কলেজ-বিশ্ববিদ্যালয় ও ভর্তি' },
  { slug: 'projukti', name: 'প্রযুক্তি', en: 'Technology', inNav: true, blurb: 'মোবাইল, ইন্টারনেট ও নতুন আবিষ্কার' },
  { slug: 'jibonjapon', name: 'জীবনযাপন', en: 'Lifestyle', inNav: true, blurb: 'খাবার, স্বাস্থ্য ও সম্পর্ক' },
  { slug: 'biggan', name: 'বিজ্ঞান', en: 'Science', inNav: false, blurb: 'বিজ্ঞান ও পরিবেশ' },
  { slug: 'shastho', name: 'স্বাস্থ্য', en: 'Health', inNav: false, blurb: 'চিকিৎসা ও সুস্থতা' },
  { slug: 'bhromon', name: 'ভ্রমণ', en: 'Travel', inNav: false, blurb: 'দেশে-বিদেশে ঘোরার গল্প' },
];

export const NAV_SECTIONS = SECTIONS.filter((s) => s.inNav);
export const MORE_SECTIONS = SECTIONS.filter((s) => !s.inNav);

export function getSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}

export function sectionName(slug: string): string {
  return getSection(slug)?.name ?? 'সংবাদ';
}
