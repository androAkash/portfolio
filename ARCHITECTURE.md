# Architecture Guide: Akash Bhattacharya Portfolio

## 1. Folder Structure & Key Components

```
/
├── .github/workflows/          # GitHub Actions deployment workflows
├── public/                     # Static assets served at root
│   ├── favicon.svg             # Futuristic developer favicon
│   ├── resume.pdf              # Direct downloadable resume
│   └── AKASH_BHATTACHARYA_...  # Original resume PDF file
├── src/
│   ├── content/
│   │   └── projects/           # Markdown project records (Content Collection)
│   │       ├── one-percent.md
│   │       ├── custom-video-player.md
│   │       └── realtime-dashboard.md
│   ├── content.config.ts       # Astro Content Collections schema definition
│   ├── components/             # Modular UI components
│   │   ├── Header.astro        # Sticky glassmorphic navbar with active anchors
│   │   ├── ThemeToggle.astro   # Animated theme switcher (dark/light mode)
│   │   ├── Hero.astro          # Futuristic hero section with CTA buttons
│   │   ├── ProjectCard.astro   # Card component for project entries
│   │   ├── Projects.astro      # Projects showcase section
│   │   ├── Experience.astro    # Vertical interactive timeline of roles
│   │   ├── Skills.astro        # Categorized tech chips
│   │   ├── Education.astro     # Degrees & verified certifications
│   │   └── Footer.astro        # Social links & contact info
│   ├── data/                   # Centralized configuration & structured data
│   │   ├── personalInfo.ts     # Editable personal metadata (email, socials, bio)
│   │   ├── experience.ts       # Detailed career history & achievements
│   │   ├── skills.ts           # Grouped technical skill chips
│   │   └── education.ts        # Academic background & certifications
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout with SEO meta tags & styles
│   ├── styles/
│   │   └── global.css          # Design system variables, animations, glassmorphism
│   └── pages/
│       ├── index.astro         # Home landing hub & Hero
│       ├── projects.astro      # Dedicated Projects showcase
│       ├── experience.astro    # Dedicated Experience timeline
│       ├── skills.astro        # Dedicated Technical skills
│       ├── education.astro     # Dedicated Education & certifications
│       └── contact.astro       # Dedicated Contact transmission
├── astro.config.mjs            # Astro configuration
├── package.json                # Project dependencies and npm scripts
├── PROJECT_CONTEXT.md          # Master context
├── ARCHITECTURE.md             # Codebase guide and maintenance recipes
├── CURRENT_TASK.md             # Live task status and active tracker
└── CHANGELOG_AI.md             # Append-only chronological changelog
```

## 2. Content Collections: How Projects Work
Project data is managed through Astro Content Collections located in `src/content/projects/`.

Each project is defined in a separate Markdown file (`.md`) with YAML frontmatter:
```yaml
---
title: "One-Percent (Habit Tracker & Todo App)"
year: "2026"
description: "A hybrid productivity application combining daily habit tracking with task management."
tags:
  - "Kotlin"
  - "Jetpack Compose"
  - "Custom UI"
  - "Coroutines"
github: "https://github.com/androAkash"
demo: "https://github.com/androAkash"
featured: true
order: 1
---
Detailed markdown content and notes can be placed here if needed.
```

The schema is validated in `src/content.config.ts` using Astro's `defineCollection` and Zod (`z.object({...})`).

## 3. Maintenance Recipes

### Recipe A: How to Add a New Project
1. Create a new `.md` file in `src/content/projects/` (e.g. `my-new-app.md`).
2. Add the required frontmatter properties:
   - `title`: Project title
   - `year`: Year of creation (string or number)
   - `description`: 1-3 sentence summary of the project
   - `tags`: Array of technology strings
   - `github` (optional): GitHub repository URL
   - `demo` (optional): Live demo or Play Store URL
   - `featured` (optional): `true` or `false`
   - `order` (optional): Numerical sort order (lower numbers appear first)
3. No code changes are required! The site automatically renders the new project card.

### Recipe B: How to Update Experience or Timeline
1. Open [`src/data/experience.ts`](file:///d:/Porfolio/src/data/experience.ts).
2. Edit existing roles or add a new object to the `experienceList` array with:
   - `company`: Name of employer / client
   - `role`: Job title
   - `location`: e.g. "Remote" or "Onsite, Kolkata"
   - `period`: e.g. "2026 – Present"
   - `highlights`: Array of bullet points describing achievements and responsibilities
   - `skills`: Array of technologies used

### Recipe C: How to Edit Personal Info & Socials
1. Open [`src/data/personalInfo.ts`](file:///d:/Porfolio/src/data/personalInfo.ts).
2. Update the properties: `name`, `email`, `phone`, `socials.github`, `socials.linkedin`, `tagline`, etc.
3. Any changes are automatically reflected across the Hero, Header, and Footer.

### Recipe D: How to Update Skills or Certifications
1. Skills: Edit [`src/data/skills.ts`](file:///d:/Porfolio/src/data/skills.ts) to add or reorder skill categories (Languages, Android, Architecture, Networking, Tools, Other).
2. Education & Certs: Edit [`src/data/education.ts`](file:///d:/Porfolio/src/data/education.ts).

### Recipe E: How to Customize Themes & Color Variables
1. All colors are defined as CSS variables in [`src/styles/global.css`](file:///d:/Porfolio/src/styles/global.css).
2. Edit tokens under `:root, [data-theme="dark"]` for dark mode or `[data-theme="light"]` for light mode.
3. The theme switcher is located in [`src/components/ThemeToggle.astro`](file:///d:/Porfolio/src/components/ThemeToggle.astro) and toggles between `dark` and `light` with `localStorage` persistence.

## 4. Build and Deploy Commands

```bash
# Start local development server (with background mode)
astro dev --background

# Stop, check status, or view logs of background dev server
astro dev stop
astro dev status
astro dev logs

# Build static production bundle
npm run build

# Preview static build locally
npm run preview
```

### GitHub Pages Deployment
1. Set `site` and `base` in `astro.config.mjs` if deploying to `https://<username>.github.io/<repo>/`.
2. A GitHub Action workflow (`.github/workflows/deploy.yml`) is provided for automatic build and deployment upon pushes to `main`.
