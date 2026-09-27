# Current Task: Portfolio v1 Release & Deployment

## Status: v1 DEPLOYED
The portfolio is deployed live at: **[https://androakash.github.io/portfolio/](https://androakash.github.io/portfolio/)**

### Deployment Details
- **Method:** Automated CI/CD via GitHub Actions (`.github/workflows/deploy.yml`) triggered on push to `main`.
- **Target Repository:** `https://github.com/androAkash/portfolio.git`
- **Hosting URL:** `https://androakash.github.io/portfolio/`
- **Configuration:** `site: 'https://androAkash.github.io'`, `base: '/portfolio'` in `astro.config.mjs`.

### Current Working State
- **Architecture & Framework:** Astro v5+ static multi-page architecture with 6 distinct routes (`/`, `/projects`, `/experience`, `/skills`, `/education`, `/contact`).
- **Content System:** Astro Content Collections (`src/content/projects/*.md`) for dynamic, schema-validated project publishing without editing component layouts.
- **Theme & Styling:**
  - Dual theme architecture powered 100% by CSS custom properties (`[data-theme="dark"]` and `[data-theme="light"]`).
  - Dark mode by default (`#0a0a0f`) with electric violet and cyan neon accents.
  - Light mode with high-contrast slate text (`#0f172a`), crisp white card surfaces, and soft ambient elevation shadows.
  - Theme toggle button in header with `localStorage` persistence and OS preference detection (`prefers-color-scheme`).
- **Mobile Responsiveness & Usability:**
  - Fully responsive from ultra-compact 320px up through 375px, 414px, 768px tablet, and 1440px desktop.
  - Hamburger drawer navigation with persistent Resume CTA button across all breakpoints.
  - Strict minimum 44px tap targets for buttons, toggles, form fields, and navigation links.
  - Consistent 1rem – 1.25rem container padding preventing any edge clipping or content collision.
  - Decorative phone mockup displayed on desktop and hidden below 768px (`display: none !important`) to eliminate mobile card overlap.
  - Zero horizontal overflow (`overflow-x: hidden`) across all routes and devices.
- **Data Integrity:** Populated with 100% authentic career details, email (`akashbhattacharyak1314@gmail.com`), phone (`+91 8240285810`), education, certifications, and GitHub/LinkedIn profiles of Akash Bhattacharya.
- **Build Status:** Static build compiles cleanly in ~1.4s with 0 errors; all static assets and routes correctly scoped with `/portfolio/`.

### Next Ideas (Backlog & Future Enhancements)
- [ ] Add blog / technical articles collection under `/blog` for Android & Kotlin architecture deep-dives.
- [ ] Integrate interactive Jetpack Compose web demo (via Compose Multiplatform for Web / Wasm) inside project detail modals.
- [ ] Implement client-side search/filter on `/projects` by technology tags (e.g. Kotlin, Jetpack Compose, KMP, ExoPlayer).
- [ ] Connect the contact form to a serverless backend service or Formspree / Web3Forms endpoint for direct in-browser submissions.
- [ ] Add open-graph dynamic image generator (`@astrojs/og` or Satori) for rich social link preview cards.
- [ ] Implement analytics (e.g., privacy-focused Cloudflare Web Analytics or Plausible).
