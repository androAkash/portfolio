# Project Context: Akash Bhattacharya Portfolio

## 1. Project Purpose
This project is the personal engineering portfolio website of **Akash Bhattacharya**, an Android Developer specializing in **Kotlin, Jetpack Compose, and Modern Mobile Architecture (MVVM, Clean Architecture)** with 3+ years of experience building scalable applications, video playback engines, and reactive user interfaces.

The website presents his professional experience, featured Android and Kotlin Multiplatform projects, core technical skills, certifications, and educational background in an engaging, futuristic minimal aesthetic.

## 2. Tech Stack
- **Framework:** [Astro](https://astro.build/) (v5+ / latest)
- **Routing:** Multi-page architecture (`/`, `/projects`, `/experience`, `/skills`, `/education`, `/contact`) with active nav state detection.
- **Content Management:** Astro Content Collections (`src/content/projects/*.md`) for dynamic, file-based project additions without modifying application logic.
- **Styling:** Modern Vanilla CSS with CSS custom properties (design tokens), glassmorphism, responsive grid & flexbox layouts. No heavy external CSS or UI dependencies.
- **Fonts:** Google Fonts — `'JetBrains Mono'` (code, labels, section identifiers, stats) and `'Plus Jakarta Sans'` / `'Inter'` (headings and body typography).
- **Deployment Target:** GitHub Pages project site at [https://androAkash.github.io/portfolio/](https://androAkash.github.io/portfolio/) (`gh-pages` workflow via `.github/workflows/deploy.yml`).
- **Site URL:** `https://androAkash.github.io`
- **Base Path:** `/portfolio`

## 3. Design System & Theming
- **Theming System:** Dual theme architecture powered 100% by CSS Custom Properties (`[data-theme="dark"]` and `[data-theme="light"]`).
  - **Default:** Futuristic Minimal Dark Mode (`#0a0a0f`).
  - **First-Visit Behavior:** Detects and respects OS system preference (`prefers-color-scheme: light`), defaulting to dark mode.
  - **Persistence:** User selection saved to `localStorage.getItem('theme')`.
  - **FOUC Prevention:** Inline blocking script in `<head>` applies `data-theme` prior to stylesheet rendering.
  - **Navbar Toggle:** Sleek animated Sun/Moon toggle button with smooth micro-interactions.
- **Dark Theme Tokens:**
  - Background Base: `#0a0a0f`
  - Card Surfaces: `rgba(16, 16, 26, 0.72)` with `backdrop-filter: blur(16px)`
  - Primary Accent: Electric Violet (`#8b5cf6`)
  - Secondary Accent: Cyber Cyan (`#38bdf8`)
- **Light Theme Tokens:**
  - Background Base: `#f8fafc`
  - Card Surfaces: `rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(16px)`
  - Card Hover: `#ffffff`
  - Text Primary: `#0f172a` (high contrast slate)
  - Text Secondary: `#475569`
  - Primary Accent: Violet (`#7c3aed`)
  - Secondary Accent: Sky Cyan (`#0284c7`)
  - Elevation Shadows: Clean, soft ambient drops (`rgba(15, 23, 42, 0.05)` and `rgba(124, 58, 237, 0.15)`) without dark dirty glows.
- **Atmosphere:** Deep dark canvas with subtle glowing ambient orbs in dark mode; luminous, crisp, high-contrast clarity in light mode with smooth micro-hover transitions.
- **Accessibility & UX:** Strict WCAG AAA/AA contrast compliance across both themes, mobile-first responsive breakpoints, keyboard navigable links, and reduced-motion considerations.

## 4. Personal Info Configuration
- Centralized configuration file: [`src/data/personalInfo.ts`](file:///d:/Porfolio/src/data/personalInfo.ts)
  - Name, title, tagline, summary
  - Email (`akashbhattacharyak1314@gmail.com`)
  - Phone (`+91 8240285810`)
  - Location (`Howrah, West Bengal, India`)
  - Social Links:
    - GitHub: `https://github.com/androAkash`
    - LinkedIn: `https://www.linkedin.com/in/akash-bhattacharya-b343bb1aa/`
  - Resume file: `/portfolio/resume.pdf`

## 5. Important Links & Resources
- **GitHub Repository:** [https://github.com/androAkash/portfolio](https://github.com/androAkash/portfolio)
- **Live GitHub Pages URL:** [https://androAkash.github.io/portfolio/](https://androAkash.github.io/portfolio/)
- **GitHub Profile:** [https://github.com/androAkash](https://github.com/androAkash)
- **LinkedIn Profile:** [https://www.linkedin.com/in/akash-bhattacharya-b343bb1aa/](https://www.linkedin.com/in/akash-bhattacharya-b343bb1aa/)
- **Astro Official Documentation:** [https://docs.astro.build](https://docs.astro.build)
