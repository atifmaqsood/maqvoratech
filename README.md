# Maqvoratech

Marketing & portfolio site for **Maqvoratech** — a senior, full-stack software studio.
Engineering-first, design-obsessed.

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components) + **TypeScript** (strict)
- **Tailwind CSS v4** with design tokens as CSS variables (`src/styles/globals.css`)
- **shadcn/ui** (Radix) primitives, **lucide-react** icons
- **Motion** (`motion/react`) for animation, **Lenis** for smooth scrolling
- **next-themes** — dark by default, premium light mode
- **react-hook-form + zod** contact form → **Server Action** → **Resend**
- Fonts via `next/font`: Geist Sans, Geist Mono, Instrument Serif
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Script                 | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the dev server                           |
| `npm run build`        | Production build                               |
| `npm run start`        | Serve the production build                     |
| `npm run lint`         | ESLint                                         |
| `npm run format`       | Prettier (write)                               |
| `npm run favicon`      | Regenerate `src/app/favicon.ico` from the logo |

## Environment variables

| Variable               | Required | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Prod     | Resend API key. If empty, submissions are logged to the console in dev.     |
| `CONTACT_TO_EMAIL`     | Prod     | Inbox that receives contact form submissions.                               |
| `CONTACT_FROM_EMAIL`   | Prod     | Verified Resend sender, e.g. `Maqvoratech <hello@maqvoratech.com>`.         |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Public URL without trailing slash — used for canonical URLs, sitemap, OG.  |

## Editing content

All copy lives in `src/data/` — you never need to touch JSX to change text, links, projects or stats.

| File                      | Contents                                                        |
| ------------------------- | --------------------------------------------------------------- |
| `site.ts`                 | Name, tagline, email, WhatsApp, location, socials, nav, footer  |
| `home.ts`                 | Home page section copy                                          |
| `pages.ts`                | Work / Services / Team / About / Contact copy, founder          |
| `services.ts`             | Services (+ bento layout) and engagement models                 |
| `projects.ts`             | Portfolio projects                                              |
| `team.ts`                 | Team page — teams and members (add names/photos in `public/team/`) |
| `stats.ts`                | Animated counters and differentiators                          |
| `process.ts`              | The 5-step process                                              |
| `faqs.ts`                 | FAQ                                                             |
| `testimonials.ts`         | Client testimonials (section hides while empty)                |
| `tech.ts`                 | Marquee technologies and the About page stack grid              |
| `contact.ts`              | Contact form select options                                     |

**Accent words:** wrap a word in `*asterisks*` inside a headline (e.g. `"We build software that *moves* businesses"`) to render it in the italic serif ember gradient.

### Add a project

1. Take a screenshot of the site (16:10, e.g. 1600×1000) and save it as `public/projects/<slug>.webp`.
2. Add an object to `projects` in `src/data/projects.ts`:

   ```ts
   {
     slug: "my-project",
     title: "My Project",
     description: "One or two lines about what it is and why it matters.",
     category: "SaaS", // Web App | E-commerce | SaaS | Landing Page | Mobile | Dashboard | POS
     tech: ["Next.js", "PostgreSQL"],
     liveUrl: "https://my-project.com",
     githubUrl: "https://github.com/me/my-project", // optional
     image: "/projects/my-project.webp",
     year: 2025,
     featured: true, // optional — shows on the home page and spans 2 columns on /work
     accent: "#6EE7D8", // optional — card glow colour
   }
   ```

If the screenshot is missing the card shows a branded gradient placeholder with the project initials — never a broken image. Blur placeholders are generated automatically at build time. The six seeded projects are placeholders (`liveUrl: "https://example.com"`) — replace them with your real sites.

### Add a testimonial

Add an object to `testimonials` in `src/data/testimonials.ts` (an example is commented in the file). Only add real client quotes — the section appears automatically once the array has at least one entry. Optional avatars go in `public/testimonials/`.

### Add or edit a service

Edit `services` in `src/data/services.ts`. Each service gets its own page at `/services/<slug>` automatically. To show it in the home page bento, give it a `bento: { size, visual }` and add its slug to `bentoOrder` (each row's sizes should add up to 6: `lg`=4, `md`=3, `sm`=2).

## Deploying on Vercel

1. Push the repository to GitHub and import it at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (defaults are fine).
3. Add the environment variables above (`NEXT_PUBLIC_SITE_URL` = your production domain).
4. In Resend, verify your sending domain and set `CONTACT_FROM_EMAIL` to an address on it.
5. Deploy. Add your custom domain under **Settings → Domains**.

> The contact form rate limiter is in-memory (per instance). For high traffic, swap `src/lib/rate-limit.ts` for Upstash Redis or Vercel KV.

## Project structure

```
src/
  app/            routes, layout, metadata, OG images, sitemap, robots, manifest
  components/
    layout/       Navbar, Footer, MobileMenu, ThemeToggle, providers
    sections/     Hero, ServicesBento, FeaturedWork, WhyUs, Process, FAQ, CTA …
    work/         ProjectCard, ProjectGrid, ProjectMedia, Tilt
    services/ about/ contact/ seo/
    ui/           shadcn + custom primitives (SpotlightCard, Marquee, Magnetic, BrowserFrame …)
    brand/        Logo, social icons
  data/           all editable content
  lib/            utils, validations, email, rate limit, seo, og
  styles/         globals.css with design tokens
public/projects/  project screenshots
```

See `CLAUDE.md` for architecture notes and conventions.
