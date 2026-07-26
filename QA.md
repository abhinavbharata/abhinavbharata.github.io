# QA checklist

Validates the final quality bar from the build brief. Run through this before
each deploy.

## Content integrity

- [ ] Homepage identifies the profession (Mechanical & Thermal Engineer) on the
      first screen.
- [ ] Data-center and thermal expertise appear above the fold.
- [ ] cfd-agent is prominent but does not overshadow the engineering career.
- [ ] No unsupported standards are claimed (TC 9.9 / TIA-942 / Uptime shown as
      "expanding knowledge").
- [ ] No confidential client named.
- [ ] No fabricated CFD numerical results (mesh counts, residuals, etc.).
- [ ] No roadmap feature presented as complete.
- [ ] Each project has technical depth (problem, objectives, validation,
      results).

## Recruiter & manager usability

- [ ] Projects are scannable from `/projects`.
- [ ] Each case study offers a metadata sidebar with role, tools, disciplines,
      deliverables, validation, and metrics.

## Responsive & accessible

- [ ] No horizontal overflow at 320 px.
- [ ] Mobile menu opens/closes, locks scroll, closes on Esc and route change.
- [ ] Keyboard navigable; visible focus states.
- [ ] Reduced-motion respected (reveals collapse).
- [ ] Color is never the only status signal.

## SEO & performance

- [ ] Per-page `<title>`/description; canonical URLs.
- [ ] Open Graph + Twitter cards present.
- [ ] `sitemap.xml` and `robots.txt` resolve.
- [ ] JSON-LD Person (site) and SoftwareSourceCode/TechArticle (projects)
      validate.
- [ ] `npm run build` succeeds; all routes prerendered.

## Functionals

- [ ] Résumé download link works (PDF present or `resumeAvailable` false).
- [ ] `/cfd-agent` 308-redirects to `/projects/cfd-agent`.
- [ ] Contact form: validation errors show; success state shows; mailto
      fallback works when `RESEND_*` unset; real send works when set.
- [ ] 404 page renders for unknown routes.

## Engineering

- [ ] `npm run lint` → 0 errors.
- [ ] `npm run typecheck` → clean.
- [ ] `npm run build` → success on Vercel.
