# ARCHITECTURE.md

## 1. System Overview

**Alfred Panakkal Jose — Portfolio** is a single-page, single-file static website. No client framework, no server-side code, no database. The entire runtime is one HTML document.

```
Browser ──> index.html (markup + inlined CSS + inlined vanilla JS)
        ──> Google Fonts (only external resource)
        ──> formsubmit.co/ajax (only runtime network call, on contact submit)
Vercel ──> builds repo (Vite passes index.html through) ──> serves static output
```

## 2. File Map

| Path | Role |
| :--- | :--- |
| `index.html` | The entire site: SEO head, JSON-LD, favicon (data URI), inlined Tailwind CSS, all markup, all JS |
| `public/robots.txt` | Crawler rules + absolute sitemap URL |
| `public/sitemap.xml` | Portfolio sections + six project app URLs |
| `public/manifest.json` | Web app metadata |
| `public/llms.txt` | Context for LLM/AI crawlers |
| `DESIGN.md` | Visual system spec (tokens, type, components) |
| `AGENTS.md` | Rules for AI agents working on this repo |
| `DEPLOYMENT.md` | Pipeline, verification, rollback |
| `src/`, `package.json`, `vite.config.ts`, `bun.lock`, `.env.example` | **Legacy scaffolding — unused by the deployed site.** Vite is kept only as the Vercel build tool; it emits `index.html` unchanged because it contains no module scripts. |

## 3. Runtime Modules (inside index.html's single script)

| Module | Behaviour |
| :--- | :--- |
| Theme init (in `<head>`) | Reads `localStorage.theme` / `prefers-color-scheme`, applies `.dark` before first paint (no flash) |
| Theme toggle | Flips `.dark`, persists, updates `theme-color` meta |
| Mobile nav | Drawer open/close, `aria-expanded`, Escape key, body scroll lock |
| Header scroll | After 8px scroll: hairline border + `backdrop-blur` upgrade |
| Copy email | Clipboard write with success feedback |
| Contact form | Client validation (name ≥ 2, email regex, message ≥ 12) → honeypot check → fetch POST to formsubmit.co AJAX → inline status; on failure builds a `mailto:` link as fallback |

Load-time reveals are pure CSS (the `.reveal` class with staggered delays), disabled under `prefers-reduced-motion`.

## 4. Data & External Services

- **FormSubmit.co** (stateless): first submission from a new form requires a one-time email confirmation to the owner (`alpha.coil966@passinbox.com`). No API keys involved.
- **localStorage schema:** a single key, `theme` (`"light"` or `"dark"`).
- **Download links** point to the raw file on GitHub (`.../main/index.html`) so the standalone file can be saved from any host.

## 5. Deployment Flow

GitHub `main` → Vercel build (`vite build`) → `dist/` (`index.html` + copied `public/` assets) → live at <https://alfred-panakkal.vercel.app>. See DEPLOYMENT.md for details and verification steps.

## 6. Decision Log

| Decision | Rationale |
| :--- | :--- |
| Single-file HTML over the previous React+Vite SPA | The site must be downloadable and fully functional offline (a portfolio requirement); a zero-JS-dependency page is trivially portable and fast |
| Vite kept in pipeline | Vercel already configured for it; emits `index.html` as-is with no build coupling |
| FormSubmit.co over `/api/contact` | No server-side code desired; the mailto fallback covers outages |
| Inlined compiled Tailwind CSS | Removes the CSS build dependency entirely; file stays standalone |
| Dark mode via `.dark` class, not media-query-only | User override must persist (`localStorage.theme`) across visits |
| Old React `src/` retained, unused | Historical reference; removing it is a separate, explicit decision |

## 7. Failure Modes & Guards

- **FormSubmit unavailable** → mailto fallback link rendered in the status line.
- **Google Fonts blocked** → Space Grotesk/Inter fall back to system sans; layout unaffected.
- **JS disabled** → all content and anchor navigation still work; only the form's AJAX send and toggle behaviours are lost.
