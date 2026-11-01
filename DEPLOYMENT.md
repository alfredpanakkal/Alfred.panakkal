# DEPLOYMENT.md

## Pipeline

```
GitHub: alfredpanakkal/Alfred.panakkal (branch: main)
   │  push
   ▼
Vercel project (auto-linked): builds with `vite build`
   │  emits index.html (unchanged — no module scripts) + public/* assets
   ▼
Production: https://alfred-panakkal.vercel.app
```

- **Trigger:** every push to `main` auto-deploys. No manual steps.
- **Build command:** `vite build` (Vercel defaults). No env vars are required by the site.
- **Output:** `dist/` served as static files.

## What deploys where

| Source | URL after deploy |
| :--- | :--- |
| `index.html` | `/` |
| `public/robots.txt` | `/robots.txt` |
| `public/sitemap.xml` | `/sitemap.xml` |
| `public/manifest.json` | `/manifest.json` |
| `public/llms.txt` | `/llms.txt` |

## Post-deploy verification

1. Open <https://alfred-panakkal.vercel.app> — hero renders, no console errors.
2. Toggle light/dark theme; reload — theme persists.
3. Open the mobile menu at narrow width; links navigate; Escape closes.
4. Submit the contact form once (test data) — expect the FormSubmit success status, not the mailto fallback.
5. Visit `/robots.txt` and `/sitemap.xml` — both serve updated content.

## One-time setup status

- ✅ Vercel project linked to the repo (`alfred-panakkal.vercel.app`).
- ✅ FormSubmit endpoint configured in the form JS.
- ⏳ **FormSubmit activation:** the *first* real submission triggers a confirmation email to `alpha.coil966@passinbox.com`; click its link once to start receiving messages.
- ⏳ Optional: add a custom domain in Vercel → then update `sitemap.xml`, `robots.txt`, and JSON-LD `url` to match.

## Rollback

- Vercel dashboard → the project's **Deployments** list → promote a previous deployment (instant, no repo change needed).
- Git-level: `git revert <sha>` and push to `main`; Vercel auto-deploys the revert.

## Environment / secrets

The site needs **no secrets**. `.env.example` (legacy scaffolding) describes variables for the unused Gemini AI example and can be ignored or removed.
