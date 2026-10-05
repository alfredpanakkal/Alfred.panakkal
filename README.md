# Alfred Panakkal – Portfolio & Projects

![GitHub stars](https://img.shields.io/github/stars/alfredpanakkal/Alfred.panakkal?style=social)
![GitHub license](https://img.shields.io/github/license/alfredpanakkal/Alfred.panakkal)
![Last Commit](https://img.shields.io/github/last-commit/alfredpanakkal/Alfred.panakkal)

> 👀 A personal portfolio for a Third Officer, full‑stack developer.

## 📦 Overview

This repo hosts my personal portfolio and internal development hub for projects that focus on offshore navigation and offline‑first tooling. Built with **React 19**, **Vite**, **Tailwind CSS**, and a minimal **Node/Express** backend that persists contact form data to `data/messages.json` and optionally forwards it to a webhook.

## 🚀 Quick Start

```bash
git clone https://github.com/alfredpanakkal/Alfred.panakkal.git
cd Alfred.panakkal
npm ci                 # or npm install
cp .env.example .env   # edit the file if you want to set your own keys
npm run dev            # starts the Vite dev server and Express
```

The app will be available at <http://localhost:3000>. To build a production bundle use `npm run build`.

## ⚙️ Configuration

| Variable | Purpose | Default |
| --------- | ------- | ------- |
| `PORT` | Server listening port | `3000` |
| `WEBHOOK_URL` | URL to POST contact‑form messages to (Discord, Slack, etc) | – |
| `CONTACT_EMAIL` | Email shown in the site’s contact section | `alpha.coil966@passinbox.com` |

Create a `.env` file in the repo root to override defaults.

## 🛠️ Tech Stack

- **Front‑end**: `React 19`, `Vite`, `Tailwind CSS`, `gsap`, `motion`, `lucide`
- **Backend**: `Node 20`, `Express`
- **Persistence**: JSON file (`data/messages.json`)
- **Styling**: Design system in `src/index.css` and `DESIGN.md`

## 🎨 Design & Accessibility

See `DESIGN.md` for color tokens, typography, motion, and accessibility guidelines. The site uses:

- Light/dark themes with localStorage persistence
- Neumorphic surfaces, fluid typography, reduced‑motion support
- Accessible keyboard navigation, skip link, proper ARIA labels for icons

## 📄 Features

| Feature | Description |
| ------- | ----------- |
| Theme toggle | Persisted light/dark mode |
| Contact form | Honeypot, rate‑cooldown, validation |
| Project grid | Detailed cards, links to live preview and source |
| Animations | GSAP ScrollTrigger, FLIP transitions and magnetic tilt |
| Accessibility | Focus styles, skip link, aria‑labels for decorative icons |

## 🧪 Development

```bash
npm run lint   # TypeScript strict type‑checking
# Add tests under __tests__ and run npm test
```

## 🤝 Contributing

Fork, add a feature, make changes and submit a pull request. Ensure you run `npm run lint` and add tests for any new behavior.

## 📬 Contact

- Email: [alpha.coil966@passinbox.com](mailto:alpha.coil966@passinbox.com)
- GitHub: <https://github.com/alfredpanakkal>
- LinkedIn: <https://www.linkedin.com/in/alfredpanakkal>

---

> *This README is a living document; feel free to suggest changes.*