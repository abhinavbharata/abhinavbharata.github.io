# Abhinav Bharata — Engineering Portfolio

A multi-page professional portfolio for **Abhinav Bharata**, a Mechanical and
Thermal Engineer working across data-center infrastructure, CFD, Revit BIM,
thermal systems, product development, testing & validation, and engineering
automation (including the **cfd-agent** OpenFOAM assistant).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**Framer Motion**, and **lucide-react**. Fully static — no database required.

---

## Project purpose

Present Abhinav as a technically credible engineer for senior mechanical,
thermal, CFD, data-center, product-design, and engineering-automation roles;
feature **cfd-agent** as a flagship engineering-software project; and keep all
content factual, defensible, and confidentiality-safe.

---

## Technology stack

- Next.js 16 (App Router, Turbopack, Server Components, Server Actions)
- React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first tokens, class-based dark mode)
- Framer Motion (subtle, reduced-motion-aware reveals)
- lucide-react (icons) + custom brand SVGs (GitHub/LinkedIn)
- ESLint (flat config) + Prettier (+ tailwind plugin)

---

## Environment requirements

- Node.js 20.9+ (Node 24 recommended)
- npm 10+

Copy `.env.example` to `.env.local` and fill in what you have. All values are
optional — the site runs with sensible defaults and hides unavailable links.

```bash
cp .env.example .env.local
```

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (SEO, sitemap, OG) | For production |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn icon/button | No |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub icon/button | No |
| `NEXT_PUBLIC_CFD_AGENT_REPOSITORY` | cfd-agent repo link | No |
| `NEXT_PUBLIC_CFD_AGENT_DEMO` | cfd-agent demo video | No |
| `RESEND_API_KEY` | Server-side contact email | No (falls back to mailto) |
| `RESEND_FROM` | Verified Resend sender address | No (falls back to mailto) |
| `CONTACT_EMAIL` | Recipient for form submissions | No (defaults to profile email) |

---

## Development commands

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:3000)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm start          # serve the production build
npm run format     # Prettier write
npm run format:check
```

> Next.js 16 uses Turbopack by default for both `dev` and `build`.

---

## Production build

```bash
npm run build      # static export → ./out (configured via output: "export")
```

> This project is configured for **static export** (`output: "export"` in
> `next.config.ts`), so there is no Node server to run with `npm start`. Serve
> the generated `out/` directory from any static host.

---

## GitHub Pages deployment (free, recommended)

The repo includes a workflow at `.github/workflows/deploy.yml` that builds the
static site and publishes it to GitHub Pages on every push to `main`.

**One-time setup (in GitHub):**

1. Push to `main` (the workflow runs automatically).
2. Repo **→ Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Wait for the "Deploy to GitHub Pages" action to finish, then visit:
   `https://abhinavbharata.github.io/`

This repo is named `abhinavbharata.github.io`, so GitHub serves it at the apex
URL with **no basePath**. (`next.config.ts` reads `NEXT_PUBLIC_BASE_PATH`, which
is empty here. For a project repo served under `/<repo>/`, set that env var to
`/<repo>` instead.)

> The contact form composes a prefilled **mailto:** link on GitHub Pages
> (static hosts can't run server actions). No data passes through a server.

---

## Vercel deployment (alternative, full features)

To restore server-side features (e.g. real contact-form email via Resend):

1. Remove `output: "export"` (and the `basePath`/`trailingSlash`/`images`
   lines) from `next.config.ts`.
2. Restore the server-action contact form (see `src/app/contact/actions.ts`)
   instead of the client `mailto:` form.
3. Import the repo into Vercel and add env vars (see table above).

---

## Folder structure

```text
src/
├── app/                    # App Router routes (pages, metadata, sitemap, robots)
│   ├── page.tsx            # Home
│   ├── about/ experience/ projects/ projects/[slug]/
│   ├── cfd-agent/          # 308 → /projects/cfd-agent
│   ├── skills/ research/ resume/ contact/ privacy/
│   ├── contact/actions.ts  # contact form server action (Resend + mailto fallback)
│   ├── layout.tsx          # fonts, metadata, theme script, header/footer
│   ├── not-found.tsx       # custom 404
│   ├── sitemap.ts robots.ts
│   └── globals.css         # design tokens + base styles
├── components/
│   ├── layout/             # header, footer, social links
│   ├── navigation/         # (reserved)
│   ├── home/               # hero
│   ├── experience/ projects/ cfd-agent/ skills/ contact/
│   ├── theme/              # ThemeProvider, ThemeToggle
│   └── ui/                 # reusable primitives (Button, Card, TerminalWindow, …)
├── data/                   # ← all content lives here
│   ├── profile.ts site-config.ts navigation.ts
│   ├── experience.ts education.ts skills.ts research.ts
│   ├── projects.ts         # 7 projects incl. cfd-agent
│   ├── cfd-agent.ts        # flagship-specific structured content
│   └── home.ts             # home metrics, specialties, philosophy
├── lib/                    # env, cn, theme-script
├── types/                  # shared content types
└── public/                 # static assets (resume, images, icons)
```

---

## Content architecture

All copy is in `src/data/` as typed TypeScript. Pages are thin and declarative —
they read from data and render components. **To change content, edit data files,
not components.**

---

## Adding a project

1. Open `src/data/projects.ts`.
2. Add an object matching the `Project` type. Set `slug` (used in the URL
   `/projects/<slug>`), `featured: true/false`, and fill `seoTitle` /
   `seoDescription`.
3. (Optional) Add its slug to other projects' `relatedProjects` arrays.
4. Run `npm run dev` — it appears on `/projects`, in filters, and gets its own
   statically-generated case study automatically.

---

## Updating experience

Edit `src/data/experience.ts`. Each entry drives both the Experience timeline
and the résumé page. The first entry with `current: true` is featured on the
home page.

---

## Replacing the résumé

1. Drop the PDF at `public/resume/abhinav-bharata-resume.pdf`
   (or change `profile.resumePath` in `src/data/profile.ts`).
2. Set `profile.resumeAvailable` to `true` (it is by default). Set to `false`
   to hide all download buttons gracefully.

---

## Adding images

Project images are currently **labeled placeholders** (intentional — see the
confidentiality rules). To use real assets:

1. Add the file under `public/projects/<slug>/<name>.svg` (or `.png`/`.webp`).
2. In `src/data/projects.ts`, set the image's `src` to that path and
   `placeholder: false`. Provide accurate `alt` and a `caption`.
3. Use `next/image` via a component when you swap placeholders for real media.

Every image must have alt text, a caption, and a confidentiality status.

---

## Updating metadata

- Site-wide defaults: `src/data/site-config.ts` and `metadata` in
  `src/app/layout.tsx`.
- Per-page metadata: each page's `metadata` export (titles use the `%s |
  Abhinav Bharata` template).

---

## Configuring the contact form

- Server action: `src/app/contact/actions.ts` (Resend via `fetch`, honeypot,
  validation, graceful mailto fallback).
- Form UI: `src/components/contact/contact-form.tsx`.
- Enable real email: set `RESEND_API_KEY` + `RESEND_FROM` (verified domain) +
  `CONTACT_EMAIL`.

---

## Adding social URLs

Set `NEXT_PUBLIC_LINKEDIN_URL` / `NEXT_PUBLIC_GITHUB_URL` in `.env.local` (or
Vercel env). Empty values hide the corresponding icon/button — no broken links.

---

## Accessibility

- Semantic landmarks, single H1 per page, logical heading order.
- Keyboard-operable nav + mobile menu (Esc to close, scroll-lock).
- Visible focus rings; ARIA only where needed; error messages use `role="alert"`.
- Status badges never rely on color alone (text + dot).
- Global `prefers-reduced-motion` handling; Framer Motion reveals disabled under
  reduced motion.
- Skip-to-content link.

---

## Performance

- Static generation for all routes.
- Minimal client JavaScript (only interactive components are client components).
- `next/font` (no layout shift), optimized images when added.
- No background video, no 3D, no heavy animation.

---

## Confidentiality

- The critical-infrastructure OEM is **not** named.
- Project details are generalized; placeholders stand in for confidential media.
- See `MISSING_INFO.md` for the list of assets/details still needed.
- Confidential projects use the reusable confidentiality note.

---

## Future enhancements

- Replace placeholder media with approved images.
- Publish cfd-agent repository/demo and wire env links.
- Add real OG images per route.
- Enable privacy-respecting analytics if desired.
- Internationalization.
