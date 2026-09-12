# BikePartsBD.net — Inventory OS

A live inventory, courier tracking & vendor contact dashboard for **Kayi Corporation**
([bikepartsbd.net](https://bikepartsbd.net), Jashore outlet, Bangladesh) — a complete
single-file application.

## ✨ Features

- **📦 Inventory** — 20 sample Yamaha / Suzuki / Bajaj / Honda / TVS / Hero parts loaded.
  Auto SKU, auto Bangla translation, auto brand & category detection. Inline price & stock
  editing with red flash + delta pill. Search, brand chips, low-stock filter, 5 KPI cards.
- **🏷️ 3-Field Add Part** — product name + buying price + selling price; SKU, Bangla, brand,
  category, profit, margin auto-generated.
- **🇧🇩 Bangla-First** — bilingual UI (বাংলা + English) for Inventory, Courier, and Vendor
  modules. Auto English → Bangla dictionary (80+ terms).
- **🛵 Courier Tracking** — Sundarban, SA Paribahan, Karotoa, Janani, eCourier, Pathao.
  Per-courier gross revenue & gross profit (Bengali + English). 5-stage timeline
  (Placed → Picked Up → In Transit → Out for Delivery → Delivered) with manual advance.
- **📞 Vendor Contacts** — one-tap WhatsApp (bilingual pre-filled message) and Call to 9
  pre-loaded vendors matched by brand. ✏️ Add / edit / delete vendors (names, phone /
  WhatsApp numbers, areas, brands) — plug in your real vendor numbers anytime.
- **🚨 Emergency Restock** — "1-Click Restock" shows every low-stock part with the top 3
  matching vendors and direct call/WhatsApp links.
- **🌗 Dark + Light Mode** — toggle in the top bar, preference saved to `localStorage`.
  Brand red `#e10600` consistent in both.
- **💱 Currency Switcher** — ৳ BDT · $ USD · € EUR · £ GBP · ₹ INR. Live exchange rates
  fetched from api.frankfurter.app (ECB data, no key) with automatic fallback to
  open.er-api.com and a 6h cache + offline defaults. Base data stays in BDT; inline
  editing works in the displayed currency. Rate source & update time shown in the footer.
- **↩️ Returns Module** — return any delivered order (one click in the Courier tab):
  stock is auto-restored, the order leaves courier revenue, and it appears in the
  Returns tab with value, source, timestamps and a one-click undo. The live simulation
  also generates occasional returns.
- **📊 Analytics Module** — live charts computed from delivered orders: sales over the
  last 7 days, revenue by source, revenue by courier, category share (pure-CSS bars,
  no chart library), plus KPIs (revenue, profit, AOV) and a top-parts table.
- **🖨️ Print View / Business Report** — a dedicated Report tab with the full business
  report (courier performance, inventory by brand, low stock + top vendor, top parts,
  recent orders). One click prints/saves as PDF with a clean print-only layout (dark
  mode safe, UI chrome hidden).
- **📊 Live Simulation** — "Start Live Simulation" streams sales in from Messenger,
  WhatsApp & Website in real time, with stock auto-deduction, courier auto-advance and
  occasional auto-returns.
- **📥 CSV Export** — one-click export of the inventory table and the order book
  (bilingual headers, Excel-safe UTF-8 BOM, prices in BDT, return status included).

## 📱 Responsive

- Phone (<600px): stacked layout, hidden non-essential columns, full-width buttons, bottom action bar
- Tablet (600–1100px): 2-column grids, condensed side panel
- Desktop (>1100px): full layout with 360px side panel

## 🎨 Brand

- **Primary**: BikePartsBD Red `#e10600`
- **Typography**: Inter (UI) + JetBrains Mono (prices, SKUs)
- **Logo**: "BP" mark in red rounded square — © 2026 Kayi Corporation · Jashore, Bangladesh

## Run

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy

- **GitHub Pages**: repo Settings → Pages → *Build and deployment* → Source:
  **Deploy from a branch** → branch `main`, folder `/ (root)` → Save. The app
  will be live at `https://<username>.github.io/bpb/`.
- **Any static host** (Netlify, Vercel, Cloudflare Pages, cPanel): upload
  `index.html` as-is — no build step or dependencies required.

