# Current Task: GitHub Pages Project Site Configuration (astro.config.mjs)

## Current Status: COMPLETED
Configured `astro.config.mjs` with `site: 'https://androAkash.github.io'` and `base: '/portfolio'` for GitHub Pages project site deployment at `https://github.com/androAkash/portfolio.git`.

### Key Changes:
1. **Astro Configuration (`astro.config.mjs`):**
   - Configured `site: 'https://androAkash.github.io'`
   - Configured `base: '/portfolio'`

2. **Base-Aware Routing & Asset Paths:**
   - Updated `src/data/personalInfo.ts`: Prefix `navLinks` and `resumeUrl` with `import.meta.env.BASE_URL` so all navigation routes under `/portfolio/` without 404s.
   - Updated `src/components/Header.astro`: Made home link and active page indicators base-aware (`${base}/`).
   - Updated `src/pages/index.astro`: Made hub directory card links base-aware (`${base}/projects`, etc.).
   - Updated `src/components/Hero.astro`: Prefix "View Projects" CTA link with `${base}/projects`.
   - Updated `src/layouts/Layout.astro`: Prefix favicon and canonical URL with `siteUrl` and `${base}/favicon.svg`.

3. **Build & Route Verification:**
   - Static production build (`npm run build`) succeeded in 1.49s with 0 errors across all 6 static routes.
   - Verified in `dist/index.html`: All scripts, stylesheets, asset links, nav anchors, and canonical tags correctly render with `/portfolio/` prefix.
   - Verified dev server responds with HTTP 200 on all routes under `http://localhost:4321/portfolio/`.
