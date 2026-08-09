# Salty Leaf Florist

A Next.js website for **Salty Leaf**, a Mandurah-based florist crafting bespoke, seasonal floral experiences for weddings, farewells and events across Western Australia.

## Features

- **Public site** — home, weddings, farewells, events and contact pages
- **Enquiry form** — visitors can submit enquiries, which are stored and managed by the admin
- **Gallery** — image management with categories (wedding, farewell, event, general), drag-free reordering and Vercel Blob storage
- **Admin dashboard** — secure login, dashboard, gallery and enquiry management
- **Auth** — JWT-based authentication with bcrypt-hashed passwords and role support (admin / superadmin)
- **Analytics** — Google Analytics (GA4) integration with a stats endpoint
- **SEO** — metadata, JSON-LD structured data, sitemap and robots.txt
- **Smooth scrolling** — Lenis-powered smooth scroll with motion animations

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, React 19)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4 + [shadcn/ui](https://ui.shadcn.com)
- [MongoDB](https://www.mongodb.com) with [Mongoose](https://mongoosejs.com)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for image storage
- [JWT](https://jwt.io) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for authentication
- [motion](https://motion.dev) + [lenis](https://lenis.darkroom.engineering) for animations and smooth scroll
- [Google Analytics Data API](https://developers.google.com/analytics/devguides/reporting/data/v1)

## Getting Started

### Prerequisites

- Node.js (v20+)
- A MongoDB database
- A Vercel Blob store (for gallery uploads)
- (Optional) Google Analytics 4 property + service account

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file (see [Environment Variables](#environment-variables)) with your credentials.

3. Seed an admin user:

   ```bash
   npx tsx src/scripts/seedAdmin.ts
   ```

   > Default credentials are defined at the top of `src/scripts/seedAdmin.ts`. Update them before running.

4. Run the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

| Variable | Description |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign admin session tokens |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read/write token for gallery uploads |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (used for client-side tracking) |
| `GA_CREDENTIALS` | Base64-encoded service account credentials for the analytics API |
| `GA_PROPERTY_ID` | GA4 property ID for the analytics endpoint |

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── (pages)/          # Public pages (home, weddings, farewells, events, contact)
│   ├── admin/            # Admin login, dashboard, gallery, enquiries
│   ├── api/              # API routes (auth, enquiries, gallery, analytics)
│   ├── layout.tsx        # Root layout with fonts, SEO & analytics
│   └── page.tsx          # Home page entry
├── components/           # UI components & page sections
├── config/
│   └── mongoDB.ts        # Mongoose connection (cached)
├── lib/
│   └── utils.ts          # Shared utilities
├── models/               # Mongoose models (Admin, Enquiry, GalleryImage)
└── scripts/
    └── seedAdmin.ts      # Admin seeding script
```

## Admin Access

Navigate to `/admin/login` and sign in with the seeded admin credentials to manage enquiries and the gallery.

## Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. Configure the [environment variables](#environment-variables) in the Vercel project settings after importing the repository.
