# Akash Bhattacharya — Android Developer Portfolio

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01.svg)](https://astro.build)
[![Kotlin](https://img.shields.io/badge/Specialization-Kotlin%20%7C%20Jetpack%20Compose-7F52FF.svg)](https://kotlinlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, futuristic-minimal personal portfolio website for **Akash Bhattacharya**, Mobile Application Developer specializing in **Kotlin, Jetpack Compose, ExoPlayer, and Clean Architecture (MVVM/MVI)**.

Built with **Astro (v5+)**, **Astro Content Collections**, and **Vanilla CSS** with glassmorphism, responsive layouts, electric violet/cyan neon accents, and zero runtime UI framework overhead.

---

## ⚡ Key Highlights & Features

- **Futuristic Minimal Design:** Deep dark canvas (`#0a0a0f`), electric violet/blue gradients, glassmorphism cards (`backdrop-filter: blur(16px)`), and monospace terminal typography (`JetBrains Mono`).
- **File-Driven Projects:** Projects are managed using Astro Content Collections (`src/content/projects/*.md`). Add or edit projects by creating Markdown files—no code modifications needed.
- **Authentic Resume Integration:** Pre-loaded with Akash's verified experience across IIPROF Consultancy, Score Information and Technologies, and Xellier Network Solutions.
- **Direct Resume Download:** One-click download button pointing to `/resume.pdf`.
- **Full SEO & Social Sharing:** Pre-configured OpenGraph metadata, Twitter cards, semantic HTML5, and responsive mobile navigation drawer.

---

## 🚀 Quick Start (Running Locally)

### 1. Prerequisites
- **Node.js**: v22.12.0 or higher
- **npm**: v10+

### 2. Installation
```bash
git clone https://github.com/androAkash/portfolio.git
cd portfolio
npm install
```

### 3. Start Development Server
Per project guidelines, you can start the Astro dev server in the background:
```bash
npx astro dev --background
```

To manage the server:
```bash
npx astro dev status   # Check server status
npx astro dev logs     # View live logs
npx astro dev stop     # Stop the dev server
```

Alternatively, run in the foreground:
```bash
npm run dev
```
Open **[http://localhost:4321/portfolio/](http://localhost:4321/portfolio/)** in your browser.

### 4. Build for Production
```bash
npm run build
```
The static build will be output to the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with a GitHub Actions workflow located at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step-by-Step Deployment:
1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: portfolio initial build"
   git branch -M main
   git remote add origin https://github.com/androAkash/<your-repo-name>.git
   git push -u origin main
   ```

2. **Configure `astro.config.mjs`:**
   If your repository is `https://github.com/androAkash/portfolio`, update [`astro.config.mjs`](astro.config.mjs):
   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     site: 'https://androAkash.github.io',
     base: '/portfolio',
   });
   ```
   *(If deploying to a custom domain or root user site `androAkash.github.io`, set `base: '/'` or omit `base`)*.

3. **Enable GitHub Pages in Repository Settings:**
   - Go to your GitHub repository -> **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
   - Push a commit to `main` or navigate to **Actions** -> **Deploy Portfolio to GitHub Pages** -> click **Run workflow**.

---

## 🛠️ Project Customization Recipes

### 1. How to Add a New Project
Create a new `.md` file inside `src/content/projects/` (e.g. `src/content/projects/my-app.md`):

```markdown
---
title: "App Title"
year: "2026"
description: "Brief 1-2 sentence overview of what the application does."
tags:
  - "Kotlin"
  - "Jetpack Compose"
  - "Ktor"
github: "https://github.com/androAkash/my-app"
demo: "https://play.google.com/store/apps/details?id=..."
featured: true
order: 4
metrics: "50K+ Downloads"
role: "Lead Mobile Developer"
---

### Project Overview
Detailed markdown documentation if needed.
```

### 2. How to Edit Personal Info, Socials, or Email
Edit [`src/data/personalInfo.ts`](src/data/personalInfo.ts):
- Update `name`, `email`, `phone`, `location`, `socials.github`, `socials.linkedin`, etc.
- Changes propagate automatically across the Hero, Navigation, and Footer.

### 3. How to Update Experience or Timeline
Edit [`src/data/experience.ts`](src/data/experience.ts) to update companies, dates, or bullet achievements.

### 4. How to Update Skills or Certifications
- Skills: [`src/data/skills.ts`](src/data/skills.ts)
- Certifications / Education: [`src/data/education.ts`](src/data/education.ts)

---

## 📂 Maintenance & Tracking Files

Per development rules, 4 master tracking files are maintained at the repository root:

| File | Purpose |
| :--- | :--- |
| [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) | Master context: goals, tech stack, design decisions, and configuration links |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Architecture guide, content collection mechanics, and maintenance recipes |
| [`CURRENT_TASK.md`](CURRENT_TASK.md) | Real-time status: completed milestones, work in progress, and next steps |
| [`CHANGELOG_AI.md`](CHANGELOG_AI.md) | Append-only dated ledger of all architectural changes and enhancements |

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
