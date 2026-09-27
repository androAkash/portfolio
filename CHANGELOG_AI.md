# Changelog (AI)

All notable changes and architectural decisions made by Antigravity will be documented in this append-only file.

## [2026-09-27] - Initial Project Scaffolding & Setup
- **What Changed:**
  - Read and extracted authentic career and project details from `AKASH_BHATTACHARYA_APPLICATION_DEV.pdf`.
  - Scaffolding the portfolio with Astro (`latest`).
  - Added `public/resume.pdf` for direct download CTA button.
  - Initialized master project tracking files: `PROJECT_CONTEXT.md`, `ARCHITECTURE.md`, `CURRENT_TASK.md`, and `CHANGELOG_AI.md`.
- **Why:**
  - Establish the core development baseline and maintenance framework requested by user, ensuring persistent context and 100% accurate representation of Akash Bhattacharya's mobile engineering background.

## [2026-09-27] - Portfolio Website Implementation & Build Verification
- **What Changed:**
  - Implemented `src/content.config.ts` for Astro Content Layer with Zod validation.
  - Authored markdown project cards in `src/content/projects/`: `one-percent.md`, `custom-video-player.md`, and `realtime-dashboard.md`.
  - Configured personal info, 4 experience timeline records, categorized skill chips, education, and certifications in `src/data/`.
  - Implemented futuristic minimal dark design system in `src/styles/global.css` with electric violet and cyan neon accents, custom ambient gradients, and glassmorphic cards.
  - Built modular Astro components: `Header`, `Hero`, `ProjectCard`, `Projects`, `Experience`, `Skills`, `Education`, and `Footer`.
  - Added SEO meta tags, OpenGraph, and Twitter cards to `src/layouts/Layout.astro`.
  - Created `.github/workflows/deploy.yml` for automated GitHub Pages static deployment.
  - Added `README.md` with development commands and GitHub Pages deployment workflow.
  - Verified static production build with `npm run build` and tested dev server at `http://127.0.0.1:4321`.
- **Why:**
  - Complete the full personal portfolio implementation for Akash Bhattacharya matching all design direction, content collection, and data integrity specifications.

## [2026-09-27] - Multi-Page Routing Architecture Conversion
- **What Changed:**
  - Converted the single-page layout into 5 dedicated subpages: `/projects`, `/experience`, `/skills`, `/education`, and `/contact`.
  - Reconfigured `src/data/personalInfo.ts` nav links to target individual page routes.
  - Updated `src/components/Header.astro` with route-based active highlighting (`Astro.url.pathname`), active underline indicators, and home logo routing.
  - Transformed `src/pages/index.astro` into a clean landing hub featuring the Hero section and an interactive Section Directory.
  - Added dedicated pages: `src/pages/projects.astro`, `src/pages/experience.astro`, `src/pages/skills.astro`, `src/pages/education.astro`, and `src/pages/contact.astro`.
  - Added page container utilities and subpage padding overrides in `src/styles/global.css`.
  - Verified static production build (`npm run build`) generates all 6 routes with 0 errors.
  - Verified HTTP 200 response on all routes on the live dev server.
- **Why:**
  - Address user requirement to split the portfolio from one scrolling page into dedicated distinct pages while preserving the futuristic minimal dark design system.

## [2026-09-27] - Theme Switcher & Full CSS Variable Architecture
- **What Changed:**
  - Centralized all project styling and color definitions into CSS custom properties in `src/styles/global.css`.
  - Added full token support for both `[data-theme="dark"]` and `[data-theme="light"]`.
  - Built `src/components/ThemeToggle.astro` with animated sun/moon glyphs and responsive micro-interactions.
  - Added inline blocking script in `<head>` of `src/layouts/Layout.astro` to detect OS `prefers-color-scheme: light` on first visit while defaulting to dark mode, and persisting subsequent selections to `localStorage`.
  - Refactored component stylesheets across `Header`, `Hero`, `Skills`, `Experience`, `Education`, `Footer`, and `contact` to utilize semantic theme tokens.
  - Verified static production build (`npm run build`) succeeds cleanly with 0 errors.
- **Why:**
  - Fulfill user request for an accessible navbar theme toggle with `localStorage` persistence, initial OS preference detection, and clean CSS variable architecture.

## [2026-09-27] - Light Theme Contrast & Complete Token Audit Fix
- **What Changed:**
  - Audited all components and templates to eliminate hardcoded background, border, text, and shadow color values.
  - Removed scoped dark background in `ProjectCard.astro` (`rgba(18, 18, 28, 0.7)`) that was overriding `.glass-card` styling in light mode.
  - Defined canonical variables (`--bg`, `--bg-card`, `--text`, `--text-muted`, `--border`, `--accent`) and semantic elevation shadows (`--card-shadow`, `--card-hover-shadow`, `--header-shadow`, `--btn-primary-shadow`, `--btn-primary-hover-shadow`) across both `[data-theme="dark"]` and `[data-theme="light"]`.
  - Replaced hardcoded `:hover` white text (`#ffffff`) on hub cards and project links with semantic tokens (`var(--accent-cyan)` and `var(--accent-violet)`) to prevent invisible text on hover in light mode.
  - Decoupled Hero's `terminal-card` from `.glass-card` hover transitions to preserve code console contrast.
  - Replaced dirty dark drop-shadows with luminous ambient light elevation drops in light mode.
  - Verified full static build compiles with 0 errors across all 6 static routes.
- **Why:**
## [2026-09-27] - Mobile Responsiveness & Breakpoint Architecture Fix
- **What Changed:**
  - Added global responsive defaults: media element scaling (`max-width: 100%`), `overflow-x: hidden` safeguards on `html, body`, and tiered container padding down to 320px screen widths.
  - Redesigned navbar for mobile: preserved the Resume button persistently across all screen sizes with compact touch-friendly dimensions, optimized hamburger toggle and theme switchers to 40x40px with 44px tap target expansion, and enhanced drawer navigation with scrollable touch support.
  - Implemented fluid `clamp()` typography across Hero (`clamp(2rem, 7vw, 4.2rem)`), roles, section titles, and cards with `word-break: break-word` and `overflow-wrap: anywhere` to prevent string overflows.
  - Converted Experience timeline on mobile (`<= 640px`) to a compact presentation with tight spine alignment, compact markers, wrapped headers, and comfortable padding.
  - Ensured all grids (Projects, Directory Hub, Skills categories, Education, Contact) stack vertically into single columns without horizontal overflow.
  - Ensured minimum 44px touch targets on all buttons, links, inputs, and icon toggles (`touch-action: manipulation`).
  - Verified static production build (`npm run build`) builds cleanly with 0 errors.
- **Why:**
  - Resolve mobile responsiveness defects across desktop, tablet, and mobile screens (from 320px and 360px up), satisfying all mobile UX, accessibility, and layout requirements.

## [2026-09-27] - Mobile Margin/Padding & Content Clipping Resolution
- **What Changed:**
  - Resolved heading clipping on "Engineered for Performance & Scale" by adjusting `.section-title` letter spacing from `-0.03em` to `-0.01em`, adding `box-decoration-break: clone` and `-webkit-box-decoration-break: clone` to `.gradient-text`, and increasing `.subpage-wrapper section` top padding to clear the 72px fixed header.
  - Implemented consistent horizontal mobile padding (`1.25rem` / 20px on `<= 768px` and `1rem` / 16px on `<= 480px` down to 320px) across `.container` and `.header-container` so cards, text, and chips never touch screen edges.
  - Added responsive brand abbreviation (`Akash B.`) on `<= 400px` to guarantee comfortable spacing for all navbar actions at 320px width.
  - Added the decorative Android phone mockup showcase component in `Projects.astro` below the content callout, with explicit rule `@media (max-width: 768px) { .phone-mockup-wrapper, .phone-mockup, .device-mockup, .decorative-mockup { display: none !important; } }` ensuring zero overlap on mobile while displaying an elegant Jetpack Compose preview on desktop.
  - Scaled ambient glowing background orbs on mobile to eliminate potential canvas bounds expansion.
  - Formatted Hero metrics row to stack on `<= 520px` for optimal readability.
  - Enhanced initial viewport intersection observer in `Layout.astro` for immediate reveal of content on page load.
  - Verified static production build (`npm run build`) builds cleanly in 1.37s with 0 errors.
- **Why:**
  - Satisfy all mobile margin, padding, overlap, and clipping requirements across 320px, 375px, 414px, and desktop breakpoints in both dark and light modes.

## [2026-09-27] - GitHub Pages Project Site Configuration (astro.config.mjs)
- **What Changed:**
  - Configured `site: 'https://androAkash.github.io'` and `base: '/portfolio'` in `astro.config.mjs` for the GitHub Pages project site `https://github.com/androAkash/portfolio.git`.
  - Updated all route navigation and public assets (`resume.pdf`, `favicon.svg`, hub directory links, header navigation, hero CTA) with `import.meta.env.BASE_URL` scoping to ensure links never 404 when hosted under the `/portfolio/` subpath.
  - Verified static production build (`npm run build`) builds cleanly with 0 errors.
  - Verified all HTML assets, stylesheets, scripts, and canonical URLs render with `/portfolio/` in `dist/`.
  - Verified local dev server responds with HTTP 200 on all 6 routes under `http://localhost:4321/portfolio/`.
- **Why:**
  - Enable seamless, error-free GitHub Pages project site deployment at `https://androAkash.github.io/portfolio/`.

## [2026-09-27] - Portfolio v1 Milestone: Scaffolding, Theming, Responsiveness & Deployment
- **What Changed:**
  - **Astro Setup & Core Foundation:** Scaffolded personal engineering portfolio for Akash Bhattacharya using Astro with Content Collections (`src/content/projects/*.md`), structured TypeScript data modules (`personalInfo`, `experience`, `skills`, `education`), and full multi-page architecture across 6 routes (`/`, `/projects`, `/experience`, `/skills`, `/education`, `/contact`). Populated with 100% authentic resume details, direct PDF resume download, and verified links.
  - **Theme Toggle & Design System:** Implemented futuristic minimal design system with Vanilla CSS tokens, glassmorphism, glowing ambient orbs, and animated sun/moon Theme Toggle in navbar. Added inline FOUC prevention, `localStorage` persistence, and automatic OS system preference (`prefers-color-scheme`) detection.
  - **Light-Theme Contrast & Token Audit:** Audited all components and templates to eliminate hardcoded colors, ensuring complete parity between `[data-theme="dark"]` and `[data-theme="light"]` with zero light-on-light or dark-on-dark contrast bugs, and luminous ambient elevation drops for light surfaces.
  - **Mobile Responsiveness Fixes:** Engineered comprehensive responsive behavior across all viewports (from 320px ultra-compact mobile up through tablet and desktop). Built collapsible hamburger menu drawer with persistent Resume CTA button, fluid `clamp()` typography, tight mobile timeline layout, single-column grid collapsing with zero horizontal overflow, minimum 44px touch targets, consistent 1rem - 1.25rem container padding, and hidden decorative mockup below 768px (`display: none !important`) to prevent card overlaps.
  - **GitHub Pages Configuration & Deployment:** Configured `site: 'https://androAkash.github.io'` and `base: '/portfolio'` in `astro.config.mjs`, prefixed all internal routes, assets, and canonical URLs with `import.meta.env.BASE_URL`, and configured automated CI/CD deployment via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`.
- **Why:**
  - Successfully complete, publish, and deploy the v1 production release of Akash Bhattacharya's mobile engineering portfolio live at `https://androakash.github.io/portfolio/`.
