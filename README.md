# Geeth Namal — Professional Portfolio

A modern, responsive portfolio for **Geeth Namal**, Software Engineer & Systems Architect based in Sri Lanka. Engineered with vanilla HTML, CSS, and JavaScript for GitHub Pages deployment with zero build steps or npm dependencies.

**Live URL:** [https://gnsa171.github.io/Portfolio/](https://gnsa171.github.io/Portfolio/)

---

## Architecture & Project Structure

- **`index.html`**: Production portfolio shell, responsive hero, project showcases, service offerings, engineering bio, and contact brief form.
- **`style.css`**: Design system tokens, layout grid, system preview terminal styling, responsive media queries, and accessible focus states.
- **`main.js`**: Interactive project filtering across categories, clipboard copy utility, and mailto draft launcher.
- **`assets/images/profile.png`**: Portrait asset.
- **`assets/previews/`**: Public homepage preview captures for web projects.
- **`docs/projects.json`**: Verified technical inventory covering all 13 projects with architecture notes and stack specifications.
- **`docs/FREELANCE-PROFILE.md`**: Client-facing technical profile, service descriptions, and engagement scopes.
- **`docs/GITHUB-PROFILE-README.md`**: Profile README designed for `GNSA171/GNSA171`.

---

## Local Development

Preview the portfolio locally by opening `index.html` directly or starting a local static server:

```powershell
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

---

## Deployment (GitHub Pages)

The repository uses GitHub Actions (`.github/workflows/deploy.yml`) to automatically stage and deploy public assets (`index.html`, `style.css`, `main.js`, and `assets/`) to GitHub Pages upon push to `main`.

In repository **Settings** → **Pages**, ensure the **Source** is set to **GitHub Actions**.

---

## Verified Project Showcase

1. **Production Web Platforms**:
   - **CeylonDrive** ([ceylondrive.com](https://ceylondrive.com/)): Full-stack tourism & logistics platform (PHP 8.x MVC, MySQL, Node.js Socket.IO, Google Maps Distance Matrix, Telegram Webhooks, Gemini 1.5 Flash AI ads script, Oracle Cloud VPS).
   - **BLACK SOUL** ([blacksoul.lk](https://blacksoul.lk/)): 3D streetwear storefront & persistent audio hub (Next.js 14 App Router, Three.js / React Three Fiber, Supabase PostgreSQL with RLS, PayHere Gateway, Sanity v4 CMS).
   - **Vellora Fashion** ([vellorafashion.online](https://vellorafashion.online/)): Curated fashion e-commerce storefront (Next.js, React, Tailwind CSS, Vercel).
   - **Ceylon C Tours** ([ceylonctours.netlify.app](https://ceylonctours.netlify.app/)): Chauffeur and tour fleet discovery presence.
   - **3S 3D Engineering Service** ([3s3d.netlify.app](https://3s3d.netlify.app/)): Architectural BIM visualization and engineering studio portfolio.

2. **Systems, Security & Desktop Software**:
   - **SecureFolder Locker**: Authenticated Windows folder encryption suite (.NET 8 LTS, C#, WPF MVVM, AES-256-GCM chunked encryption, Argon2id key derivation, write-through crash journaling, PathGuard safety).
   - **OpenSearch Intelligence Engine (OSIE)**: Private hybrid search engine and autonomous research agent (FastAPI, React 18, BM25 Okapi inverted indexing, Ollama dense vector embeddings, Tor SOCKS5 circuit isolation).
   - **Smart Home OS**: 100% local smart home automation ecosystem (Docker Compose, Home Assistant, Mosquitto MQTT, Node-RED, local Whisper/Piper/Ollama voice pipeline, Frigate NVR computer vision).
   - **QuantOps Algorithmic Trading Engine**: Supervised quantitative crypto futures paper-trading platform (Python, Freqtrade, FreqAI, XGBoost/LightGBM walk-forward training, Docker).
   - **Buddhist Organization Governance Platform (BOGP)**: Enterprise multi-tenant governance, double-entry fund accounting, and compliance system architecture.

3. **Mobile & Pre-Release Systems**:
   - **Kasagala Young Buddhist Association** ([kasagala-yba.vercel.app](https://kasagala-yba.vercel.app/)): Bilingual community governance, membership, and donation platform (TanStack Start SSR, TanStack Router, React 19, Tailwind CSS v4, PGlite WASM / Neon PostgreSQL).
   - **Dhamma Quotes**: Offline-first Android AI image editor with on-device TensorFlow Lite DeepLabv3 saliency segmentation (Flutter, Dart, GPU delegate, Riverpod, sqflite).
   - **Facebook Post Scheduler** ([facebookpostscheduler.vercel.app](https://facebookpostscheduler.vercel.app/)): Social media workflow automation and scheduling utility (Next.js, React).
