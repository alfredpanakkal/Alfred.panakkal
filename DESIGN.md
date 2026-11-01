# Design & Architecture Specification (DESIGN.md)

## 1. Design Philosophy

**Theme & Identity:** *Editorial maritime portfolio — quiet paper tones, one accent, procedural restraint.*

The portfolio for **Alfred Panakkal Jose** (Third Officer & Full-Stack Developer) is a single-file static site. The design favors long-form editorial typography, generous whitespace, thin rules, and numbered project entries over decorative effects. Motion is minimal and CSS-only; behaviour is vanilla JS with zero external script dependencies.

### Design Principles
1. **Bridge clarity:** uncluttered layout, high-contrast text, small uppercase metadata labels, and a strict typographic scale.
2. **Two crafts, one standard:** content mirrors deck-officer discipline — credentials, watchkeeping duties, and tools built from real operational friction.
3. **Offline-portable:** one HTML file works standalone with no network; only Google Fonts are external (system-font fallbacks in place).
4. **Motion with purpose:** CSS reveal animations on load only; everything respects `prefers-reduced-motion`.

## 2. Architecture

- **Single entry:** `index.html` contains markup, inlined compiled Tailwind CSS (v4 utilities + custom tokens), the JSON-LD block, and all JavaScript.
- **JS (vanilla, no framework):** theme toggle with `localStorage` persistence and a no-flash init script in `<head>`; mobile drawer with Escape-to-close; header blur on scroll; copy-email button; contact form.
- **Static assets:** `public/` provides `robots.txt`, `sitemap.xml`, `manifest.json`, and `llms.txt`.
- **Deployment:** Vercel; Vite emits the standalone `index.html` unchanged.
- **Legacy:** `src/` React app is no longer rendered; kept in the repo as unused scaffolding.

## 3. Typographic System

| Usage | Font | Notes |
| :--- | :--- | :--- |
| Display / headings | Space Grotesk 500–600 | `h1`–`h3` via `--font-display`, tight tracking, `text-wrap: balance` |
| Body / UI | Inter 400–600 | OpenType features `ss01`, `cv11` enabled; `text-wrap: pretty` on paragraphs |
| Labels | Inter (uppercase) | `.6875rem`, letter-spacing `.14em`, faint color |

Hero scale is fluid: `clamp(2.75rem, 1.5rem + 5.2vw, 5rem)` at `.96` line-height; section titles `clamp(1.5rem, …, 2rem)`.

## 4. Color Tokens

Light (default):

```css
--color-bg: #f3f0e8;      /* warm paper */
--color-elev: #faf8f3;    /* elevated surface */
--color-fg: #171614;      /* ink */
--color-muted: #5c5a53;
--color-faint: #8a877c;
--color-line: #ddd8cc;    /* hairline rules */
--color-accent: #1e4f8c;  /* signal blue */
--color-accent-hover: #173e70;
--color-solid: #171614;   /* solid button */
--color-solid-fg: #f3f0e8;
```

Dark (`.dark` on `<html>`, toggled by user, persisted in `localStorage`):

```css
--color-bg: #0c0d10;  --color-elev: #14161b;  --color-fg: #edebe4;
--color-muted: #a09d94;  --color-faint: #6f6d66;  --color-line: #26282e;
--color-accent: #7ba4d4;  --color-accent-hover: #9bbbe0;
```

Selection uses `color-mix(in oklab, accent 28%, transparent)` where supported. `theme-color` meta is updated by JS on toggle.

## 5. Key Components

- **Header:** sticky, transparent at rest; gains a hairline border and `backdrop-blur` after 8px of scroll.
- **Hero:** fluid display name, role label, three actions (solid, outline, text-link).
- **About / Experience / Projects / Skills / Contact:** numbered or ruled list layouts; projects use Problem / Built / Why-it-matters definition lists.
- **Contact form:** client-side validation (name ≥ 2, email regex, message ≥ 12), honeypot field, AJAX POST to `formsubmit.co`, `mailto:` fallback if the request fails, inline status text (no toasts).
- **Download HTML:** header, mobile drawer, and footer links serve the raw `index.html` from GitHub so the file downloads fully functional.

## 6. Performance & Accessibility

- **Zero external JS**, zero layout libraries, zero CLS-prone embeds; everything inline in one request.
- Fonts loaded with `display=swap` and system-font fallbacks.
- Skip-to-content link; `:focus-visible` outlines in the accent color; aria labels on icon-only buttons; `aria-expanded` state on the mobile toggle.
- `prefers-reduced-motion` disables smooth scrolling and all entrance animations.
