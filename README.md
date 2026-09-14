# পনডার আলো · PonDer Alo

A Bengali news portal whose **page structure and visual design are modelled on
[Prothom Alo](https://www.prothomalo.com)** — masthead + red category bar,
breaking-news ticker, lead story with sub-leads, per-category blocks, sidebar of
*সর্বশেষ* / *সর্বাধিক পঠিত*, section pages and full article pages.

> **সচিবালয় ও বাস্তবায়নে: রজিত চকলাদার (Rajit Chakladar)**
> *Secretariat & Executed by Rajit Chakladar*

All headlines, articles and images are **original demo content** written for this
project — nothing is copied from Prothom Alo.

---

## ✨ Structure (Prothom Alo–style)

| Route | What it is |
|---|---|
| `/` | প্রচ্ছদ — lead story + 4 sub-leads, sidebar (সর্বশেষ · নিউজলেটার · সর্বাধিক পঠিত), **সচিবালয়** block, then one block per category, and আরও পড়ুন |
| `/[section]` | বিভাগ পাতা — e.g. `/jatio`, `/khela`, `/motamot` — lead + grid + pagination + sidebar |
| `/[section]/[slug]` | Article page — breadcrumb, kicker, headline, byline, share row, hero image, body with drop cap + pull quotes, tags, related news, JSON-LD |
| `/search?q=` | অনুসন্ধান — searches titles, excerpts, authors and tags |
| `/404` | Custom Bengali not-found page |

**13 sections** (10 in the red nav bar + 3 under আরও):
জাতীয় · রাজনীতি · বিশ্ব · খেলাধুলা · বিনোদন · মতামত · অর্থনীতি · শিক্ষা ·
প্রযুক্তি · জীবনযাপন · বিজ্ঞান · স্বাস্থ্য · ভ্রমণ

**Content:** 39 original Bangla articles across all sections.

## 🎨 Design notes

- Brand red `#d31217` — masthead, category bar, section rules, kickers
- Bengali-first typography: **Hind Siliguri** (self-hosted, so no Google Fonts
  call at build or run time) with Inter for Latin
- Dark mode (class-based, no flash — theme applied before first paint), saved to
  `localStorage`
- Sticky red category bar, horizontally scrollable on mobile, with a mobile
  hamburger menu
- Bangla numerals and dates everywhere (`১৪ সেপ্টেম্বর ২০২৬`, `২ ঘণ্টা আগে`) via
  `lib/utils.ts`. Relative times use a fixed demo clock so server and client
  renders always agree — no hydration mismatch
- Responsive: 1 column on phones → 2 on tablets → 12-column desktop grid

## 📁 Layout

```
app/
  layout.tsx              fonts, metadata, header + footer, theme script
  page.tsx                home page
  [section]/page.tsx      category page (with pagination)
  [section]/[slug]/page.tsx  article page
  search/page.tsx         search
  not-found.tsx, sitemap.ts
components/               Header, Footer, ArticleCard, CategoryBlock,
                          Sidebar, BreakingTicker, SecretariatPortal,
                          SafeImage, ShareRow, Breadcrumb, SearchBox, Logo
lib/                      articles, sections, secretariat, utils, types
public/images/            article photos + secretariat photos
```

## 🖼️ Secretariat block — adding Rajit’s photos

The home page has a **পনডার আলো সচিবালয়** block. Drop images into
`public/images/` using these names and they light up automatically; until a file
exists, a labelled placeholder is shown instead (nothing ever breaks):

| File | Where it shows |
|---|---|
| `public/images/rajit-portrait.jpg` | Main profile photo (3:4 portrait) |
| `public/images/rajit-1.jpg` | Gallery strip — left |
| `public/images/rajit-2.jpg` | Gallery strip — middle |
| `public/images/rajit-3.jpg` | Gallery strip — right |

All the text for that block lives in **`lib/secretariat.ts`** — name, role,
message, bio, contacts and photo paths — so it is a one-file edit.

## 🚀 Run

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## 📦 Deploy

- **Vercel / Netlify / Render / any Node host:** build `npm run build`, start
  `npm start`.
- **Static host or GitHub Pages** (no Node server): images are unoptimized by
  design, so the whole site can be exported to plain HTML:

  ```bash
  STATIC_EXPORT=1 npm run build     # output in /out
  ```

  Upload the contents of `out/` anywhere.

## ℹ️ Notes

- Content is demo data living in `lib/articles-a.ts`, `lib/articles-b.ts`,
  `lib/sections.ts`. Swap in a CMS or API later — the pages only touch
  `lib/articles.ts` helpers.
- The previous single-file app (`index.html`, BikePartsBD Inventory OS) is still
  in the repo root and is not part of this site — say the word and it can be
  moved or removed.
