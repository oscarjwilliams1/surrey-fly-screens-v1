# Surrey Fly Screens — Setup Guide

## Quick Start

```bash
cd execution/fly_screen_company
npm install
npm run dev
```

Open http://localhost:3000

---

## 1. Add Your Photos

Place your photos in `public/images/` using these exact filenames:

| File | Which Photo |
|------|-------------|
| `hero-exterior.jpg`      | Dark clapboard house exterior (best hero image) |
| `exterior-windows.jpg`   | Dark house exterior, second angle |
| `bedroom-balcony-1.jpg`  | Bedroom with open French doors to balcony |
| `bedroom-balcony-2.jpg`  | Bedroom balcony, countryside view |
| `bedroom-balcony-3.jpg`  | Wide bedroom shot with balcony doors |
| `screen-mesh-1.jpg`      | Close-up fly screen mesh (portrait) |
| `screen-mesh-2.jpg`      | Retractable screen mesh detail (portrait) |
| `door-detail.jpg`        | Door frame and brush seal close-up (portrait) |
| `farmhouse-patio.jpg`    | Stone farmhouse with bifold doors and patio |
| `farmhouse-garden.jpg`   | Farmhouse from garden with screens visible |

> Images should ideally be 2000px+ wide JPEGs. Use tools like TinyPNG or Squoosh to compress them.

---

## 2. Update Business Details

Search and replace these placeholders across the codebase:

| Placeholder | Replace With |
|-------------|--------------|
| `01234 567 890` | Real phone number |
| `info@surreyflyscreens.co.uk` | Real email |
| `surreyflyscreens.co.uk` | Real domain |

Files to check:
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/app/layout.tsx`
- `src/app/sitemap.ts`

---

## 3. Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in real values (email config is optional — quotes save to `.data/quotes.json` by default).

---

## 4. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at vercel.com for automatic deploys.

---

## Quote Submissions

Quote form submissions are saved to `.data/quotes.json` (created automatically).
This file is gitignored. To enable email notifications, add SMTP settings to `.env.local`.

---

## Tech Stack

- **Next.js 14** (App Router) + **React 18**
- **Tailwind CSS** + custom design system
- **Framer Motion** (scroll animations, lightbox, carousels)
- **React Hook Form** + **Zod** (form validation)
- **lucide-react** (icons)
- No database — quotes stored in `.data/quotes.json`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, services, process, gallery preview, testimonials, CTA |
| `/services` | Full services page with images |
| `/gallery` | Full photo gallery with lightbox |
| `/about` | About page with story, values, coverage areas |
| `/contact` | Contact page + quote request form |
| `/privacy` | Privacy policy |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots.txt |
| `/api/quote` | POST endpoint for quote submissions |
