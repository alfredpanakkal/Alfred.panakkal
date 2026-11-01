# Alfred Panakkal Jose

### Third Officer · Full-Stack Developer · Maritime Technology

I'm a maritime professional and full-stack developer building practical digital tools for maritime operations, productivity, and everyday problems. My work combines the precision of navigational watchkeeping with modern software engineering to create useful, responsive, and reliable applications.

**Portfolio:** [alfred-panakkal.vercel.app](https://alfred-panakkal.vercel.app/)  
**GitHub:** [@alfredpanakkal](https://github.com/alfredpanakkal) · **LinkedIn:** [Connect with me](https://linkedin.com/in/alfredpanakkal)

---

## This Repository — Portfolio Site

The deployed portfolio is a **single-file static site**: all markup, CSS, and JavaScript live in [`index.html`](index.html) with no build step required to serve it.

- **One file:** `index.html` inlines the compiled Tailwind CSS and all vanilla-JS behaviour (theme toggle, mobile nav, contact form). Only external dependency is Google Fonts.
- **Offline-portable:** the "Download HTML" button serves the raw `index.html` from this repo so visitors can keep a fully working offline copy.
- **Deployment:** Vercel builds the repo automatically; the Vite pipeline emits `index.html` plus the static assets from `public/` (`robots.txt`, `sitemap.xml`, `manifest.json`, `llms.txt`).
- **Contact form:** posts via FormSubmit.co (AJAX) with a honeypot field and a `mailto:` fallback; no server-side code.
- **SEO:** meta tags, Open Graph, Person JSON-LD, sitemap, and robots are all kept in sync with the live domain.

> **Note:** `src/`, `package.json`, `vite.config.ts`, and `bun.lock` are legacy scaffolding from the previous React version of the site. They are no longer used by the deployed page.

## Documentation

- **[AGENTS.md](AGENTS.md)** — rules for AI agents: single-file contract, do/don't list, sync checklist
- **[DESIGN.md](DESIGN.md)** — visual system: color tokens, typography, components
- **[ARCHITECTURE.md](ARCHITECTURE.md)** — file map, runtime modules, decision log
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — Vercel pipeline, post-deploy verification, rollback

## About Me

- ⚓ **Maritime Operations:** Third Officer with experience in navigational watchkeeping, passage planning, bridge equipment, and onboard safety procedures.
- 💻 **Software Engineering:** Building web applications, developer tools, and productivity solutions.
- 🌊 **Maritime Technology:** Exploring ways to improve maritime workflows through automation, data processing, and digital tools.
- 🛠️ **Open Source:** Developing and maintaining projects with a focus on practical functionality, maintainability, and user experience.

My goal is to bridge real-world operational experience and software engineering by turning practical problems into useful digital solutions.

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | React, TypeScript, JavaScript, HTML, CSS |
| Styling & UI | Tailwind CSS, responsive design, design systems |
| Build Tools | Vite, Bun, npm |
| Backend & Automation | Node.js, Python, REST APIs |
| Data & Storage | PostgreSQL, SQLite, IndexedDB, LocalStorage |
| Deployment | Vercel, GitHub |

*Technologies vary by project; this list represents my broader development toolkit.*

## Featured Projects

Explore my [GitHub repositories](https://github.com/alfredpanakkal?tab=repositories) and [portfolio](https://alfred-panakkal.vercel.app/) for current projects, live demonstrations, and source code.

### Helm.Warning / Navarea Warning Plotter
Maritime safety tooling for NAVAREA navigational warnings — geographic coordinate extraction, hazard visualization, and warning management.

### Helm Almanac
A maritime utility application designed to bring practical tools and reference information together in an accessible, offline-ready interface.

### Developer & Productivity Tools
Web applications and utilities built to simplify workflows, reduce repetitive tasks, and make information easier to access.

*See each project's repository for its specific features, technology stack, setup instructions, and current status.*

## Engineering Principles

- **Practical over flashy:** Solve real problems before adding complexity.
- **Reliable by design:** Validate inputs, handle errors, and make application behavior predictable.
- **Responsive and accessible:** Build interfaces that work across desktop and mobile devices.
- **Offline-conscious:** Consider limited connectivity and interrupted access where the use case requires it.
- **Maintainable code:** Prefer clear architecture, reusable components, and understandable documentation.
- **Continuous improvement:** Test, review, and refine projects as requirements evolve.

## Maritime Background

My maritime experience informs how I approach software: situational awareness, procedural discipline, clear interfaces, and careful handling of operational information matter.

Areas of professional experience include:

- Navigational watchkeeping and passage planning
- ECDIS, RADAR/ARPA, and bridge equipment
- Shipboard safety and regulatory procedures
- Maritime operations and workflow improvement

## Connect With Me

I'm interested in maritime technology, full-stack development, open-source collaboration, and practical software engineering.

- **Portfolio:** https://alfred-panakkal.vercel.app/
- **GitHub:** https://github.com/alfredpanakkal
- **LinkedIn:** https://linkedin.com/in/alfredpanakkal

---

*Built with curiosity, engineering discipline, and a commitment to solving real-world problems.*
