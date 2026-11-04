# AGENTS.md — Rules for AI Agents Working on This Repo

## What this project is
A **single-file static portfolio site** for Alfred Panakkal Jose, deployed on Vercel at <https://alfredpanakkal.web.app>. Everything the browser needs lives in `index.html`.

## The one rule
> **`index.html` is the single source of truth.** It contains all markup, all CSS (inlined compiled Tailwind v4), and all JavaScript. There is no framework and no build-required site code.

## Do
- Make **surgical edits** to `index.html` (or `public/` assets). Match existing code style and formatting.
- Keep **all CSS inlined** inside `index.html`'s `<style>` block — the file must remain 100% standalone and offline-portable.
- Keep **all JS vanilla** — no React, no jQuery, no GSAP, no CDN scripts. Zero external JS dependencies.
- After **any** content change, keep these in sync:
  - `<head>` SEO meta (title, description, OG tags, Person JSON-LD)
  - `public/sitemap.xml`
  - `public/robots.txt` (absolute `Sitemap:` URL)
  - `public/llms.txt`
  - Live domain is **https://alfredpanakkal.web.app** — never reference `alfredpanakkal.github.io`.
- Preserve the design token system (light/dark themes via `.dark` class + `localStorage` theme key).
- Preserve accessibility: skip link, `:focus-visible` outlines, aria labels, `prefers-reduced-motion` support.
- Preserve the contact form contract: honeypot field, AJAX POST to `formsubmit.co/ajax/alpha.coil966@passinbox.com`, `mailto:` fallback on failure.
- Write commits that describe the *why* of the change.

## Don't
- ❌ Do not reintroduce or "restore" the React app in `src/`, or wire it back into `index.html`.
- ❌ Do not add build-time dependencies for the site, bundle CSS/JS into separate files, or add external `<script src>` tags.
- ❌ Do not delete the legacy scaffolding (`src/`, `package.json`, `vite.config.ts`, `bun.lock`, `.env.example`, the zip) without an explicit user request — it is documented as unused.
- ❌ Do not modify the Google site verification meta or add analytics/tracking without an explicit request.
- ❌ Do not refactor working code, rename classes, or "improve" adjacent sections while fixing something else.
- ❌ Do not re-add a "Download HTML" feature — it was deliberately removed from the header, mobile drawer, and footer.
- ❌ Do not hardcode secrets. `alpha.coil966@passinbox.com` is a public contact address and is expected in source.

## Verification checklist before finishing any change
1. `index.html` still renders standalone (open the file directly, no server).
2. No reference to `portfolio-single.html`, `/api/contact`, or `alfredpanakkal.github.io`.
3. Theme toggle, mobile drawer, header scroll blur, copy-email, and contact form still behave.
4. SEO head ↔ sitemap ↔ llms.txt are consistent with the change.
5. `vite build` (Vercel) will still succeed: `index.html` must remain a valid Vite entry (it has no module scripts — that's fine, Vite emits it as-is).

## Facts agents frequently need
- **Contact email:** alpha.coil966@passinbox.com
- **GitHub handle:** @alfredpanakkal
- **LinkedIn:** https://www.linkedin.com/in/alfredpanakkal
- **Primary palette:** light bg `#f3f0e8`, fg `#171614`, accent `#1e4f8c`; dark bg `#0c0d10`, fg `#edebe4`, accent `#7ba4d4` (full tokens in DESIGN.md).
- **Docs:** README.md (overview), DESIGN.md (visual system), ARCHITECTURE.md (system map), DEPLOYMENT.md (pipeline).
