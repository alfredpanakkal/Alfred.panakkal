# DEPLOYMENT.md

## Pipeline

```
GitHub: alfredpanakkal/Alfred.panakkal (branch: main)
   │  push
   ▼
GitHub Actions: bun install + vite build -> dist/
   │
   ▼
Firebase Hosting (site: alfredpanakkal)
   │
   ▼
Production: https://alfredpanakkal.web.app
```

- **Trigger:** every push to `main` auto-deploys (also manual via the Actions tab).
- **Build:** `bun install --frozen-lockfile` then `vite build`; output `dist/` served as static files.
- **Firebase project:** `gen-lang-client-0431355172` (HELM WEB APPS).
- **Secret:** `FIREBASE_SERVICE_ACCOUNT_GEN_LANG_CLIENT_0431355172` (repo Actions secret).

## What deploys where

| Source | URL after deploy |
| :--- | :--- |
| `index.html` (built) | `/` |
| `public/robots.txt` | `/robots.txt` |
| `public/sitemap.xml` | `/sitemap.xml` |
| `public/manifest.json` | `/manifest.json` |
| `public/llms.txt` | `/llms.txt` |

## One-time setup status

- [x] `firebase.json` (site `alfredpanakkal`, SPA rewrite, cache headers)
- [x] `.firebaserc` (project `gen-lang-client-0431355172`)
- [x] `.github/workflows/firebase-hosting.yml` (build + deploy to live channel)
- [x] Service-account secret added to repo Actions secrets
- [ ] Hosting site `alfredpanakkal` created in Firebase console (Hosting -> Add another site)
- [ ] First successful deploy

## Rollback

- Firebase console -> Hosting -> Release history -> roll back to a previous release.
- Git-level: `git revert <sha>` and push to `main`; the workflow auto-deploys the revert.

## Notes

- `cleanUrls: true` is enabled; URLs have no `.html` extension.
- Vercel still serves https://alfred-panakkal.vercel.app until that project is removed; keep or retire as desired.
- If the domain changes from `alfredpanakkal.web.app`, update `sitemap.xml`, `robots.txt`, and JSON-LD `url` to match.
