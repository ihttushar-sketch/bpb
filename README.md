# BikePartsBD.net — Inventory OS

A live inventory, courier tracking & vendor contact dashboard for **Kayi Corporation**
([bikepartsbd.net](https://bikepartsbd.net), Jashore outlet, Bangladesh) — a complete
single-file application.

## ✨ Features

- **📦 Inventory** — 5 sample Yamaha / Suzuki / Bajaj parts loaded. Auto SKU, auto Bangla
  translation, auto brand & category detection. Inline price editing with red flash + delta pill.
- **🏷️ 3-Field Add Part** — product name + buying price + selling price; SKU, Bangla, brand,
  category, profit, margin auto-generated.
- **🇧🇩 Bangla-First** — bilingual UI (বাংলা + English) for Inventory, Courier, and Vendor
  modules. Auto English → Bangla dictionary (70+ terms).
- **🛵 Courier Tracking** — Sundarban, SA Paribahan, Karotoa, Janani. Per-courier gross revenue
  & gross profit (Bengali + English). 5-stage timeline (Placed → Picked Up → In Transit →
  Out for Delivery → Delivered).
- **📞 Vendor Contacts** — one-tap WhatsApp (bilingual pre-filled message) and Call to 6
  pre-loaded vendors matched by brand.
- **🚨 Emergency Restock** — "1-Click Restock" shows every low-stock part with the top 3
  matching vendors and direct call/WhatsApp links.
- **🌗 Dark + Light Mode** — toggle in the top bar, preference saved to `localStorage`.
  Brand red `#e10600` consistent in both.
- **📊 Live Simulation** — "Start Live Simulation" streams sales in from Messenger, WhatsApp
  & Website in real time, with stock auto-deduction and courier auto-advance.

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
