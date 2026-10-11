@AGENTS.md

# Maqvoratech — working notes

Marketing/portfolio site for a software studio. Quality bar: Awwwards/Linear/Vercel — distinctive, fast, accessible. When in doubt, choose the more refined option and show restraint with the gradient.

## Commands

- `npm run dev` · `npm run build` · `npm run lint` · `npm run format`
- After any change: `npm run lint && npm run build` must pass with zero errors.

## Architecture

- **Next.js 16 App Router** with `cacheComponents` + `partialPrefetching` enabled (see `next.config.ts`). Read the bundled docs in `node_modules/next/dist/docs/` before using unfamiliar APIs.
  - `params`/`searchParams` are Promises. Use `PageProps<"/route">` / `LayoutProps<"/">` helpers.
  - No `new Date()`, `Math.random()` etc. in Server Components outside `"use cache"` (see `CurrentYear` in `components/layout/footer.tsx`). Uncached async IO needs `"use cache"` (see `lib/project-media.ts`) or `<Suspense>`.
  - `/work` keeps its `?category=` filter in the URL via the native History API (no `useSearchParams`) so the page stays fully static.
  - Routes stay mounted (React `<Activity>`) after navigation — close menus/dialogs on link click.
- **Server Components by default.** Only interactive leaves are `"use client"` (navbar, mobile menu, spotlight/tilt/magnetic, counters, process timeline, project grid, contact form). Server components (e.g. `ProjectMedia`) are passed into client wrappers as `children`/props.
- **Content** lives only in `src/data/*`. Components never hard-code copy, links or numbers. `*word*` in a headline = italic serif gradient accent (`RichText` in `components/ui/gradient-text.tsx`).
- **Contact flow:** `components/contact/contact-form.tsx` (RHF + zod `lib/validations.ts`) → Server Action `app/contact/actions.ts` (honeypot + `lib/rate-limit.ts`) → `lib/email.ts` (Resend; logs and succeeds when `RESEND_API_KEY` is missing).
- **SEO:** `lib/seo.ts` (`pageMetadata`, JSON-LD builders), `components/seo/json-ld.tsx`, `lib/og.tsx` shared OG renderer used by every `opengraph-image.tsx`. Title template `%s — Maqvoratech`.

## Design tokens (`src/styles/globals.css`)

Brand tokens are CSS variables on `:root` (light) and `.dark` (default). Never use raw hex in components — the only exceptions are `lib/brand.ts` / `static-mark.tsx` for OG/icon generation where CSS variables don't exist.

| Token | Dark | Light | Tailwind |
|---|---|---|---|
| `--bg` | `#08090C` | `#F7F5F0` | `bg-background` |
| `--surface` / `--surface-2` | `#0F1116` / `#161922` | `#FFFFFF` / `#EFECE4` | `bg-surface`, `bg-surface-2` |
| `--border` / `--border-strong` | 8% / 14% white | 9% / 16% ink | `border-border`, `border-border-strong` |
| `--text` / `--text-muted` | `#F4F1EA` / `#9A9BA3` | `#0D0E12` / `#5D5F68` | `text-foreground`, `text-muted-foreground` |
| `--accent` (Ember) | `#FF6A2B` | `#E8551A` | `bg-accent`, `text-accent` |
| `--accent-2` (Amber) | `#FFB547` | `#C9650C` | `bg-accent-2` |
| `--accent-text` (AA-safe small text) | `#FF7A3D` | `#C2410C` | `text-accent-text` |
| `--accent-contrast` (text on ember) | `#08090C` | `#0D0E12` | `text-accent-foreground` |
| `--cool` (Glacier mint) | `#6EE7D8` | `#0F8F80` | `text-cool`, `bg-cool` |

- Note: Tailwind `accent` = brand ember (not shadcn's neutral hover colour). Use `bg-muted` for neutral hover fills.
- Utilities: `container-x`, `text-gradient`, `bg-gradient-brand`, `dot-grid`, `mask-fade-edges`, `mask-fade-x`, `display-xl|lg|md` (fluid headline sizes).
- Radius: cards `rounded-3xl` (~28px), inner elements `rounded-2xl`/`rounded-xl`; pills `rounded-full`.
- Fonts: `font-sans` Geist, `font-mono` Geist Mono (labels, tags, numbers — usually uppercase with wide tracking), `font-serif` Instrument Serif (italic accent words only).

## Motion conventions

- Ease `EASE = [0.22, 1, 0.36, 1]` (`lib/constants.ts`, CSS `ease-out-expo`), durations 0.5–0.9s, stagger 0.06–0.1s.
- Animate only `transform` and `opacity`. Scroll reveals use `Reveal` / `Stagger` / `StaggerItem` (`once: true`).
- Above-the-fold animation (hero, page headers, page transition in `app/template.tsx`) is **pure CSS** (`animate-rise`, `animate-fade-in`, `animate-page-in`) so it never waits on hydration.
- Reduced motion: `MotionConfig reducedMotion="user"`, a global CSS rule kills keyframes, and `Lenis`, `Parallax`, `Tilt`, `Magnetic`, `Counter` and the process line all check `useReducedMotion()`.

## Conventions

- Components < ~200 lines, named exports, kebab-case filenames, absolute imports via `@/`.
- Every page: exactly one `h1`, `pageMetadata(...)`, and `JsonLd` breadcrumbs (home uses `organizationJsonLd`).
- Icon-only buttons/links need `aria-label`; decorative elements `aria-hidden`. External links: `target="_blank" rel="noopener noreferrer"`.
- shadcn components live in `components/ui/` and import `cn` from the `cn` package; app code imports `cn` from `@/lib/utils`.
