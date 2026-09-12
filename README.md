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
  fetched from open.er-api.com (cached 6h, offline fallback). Base data stays in BDT;
  inline editing works in the displayed currency.
- **📊 Live Simulation** — "Start Live Simulation" streams sales in from Messenger,
  WhatsApp & Website in real time, with stock auto-deduction and courier auto-advance.
- **📥 CSV Export** — one-click export of the inventory table and the order book
  (bilingual headers, Excel-safe UTF-8 BOM, prices in BDT).

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
