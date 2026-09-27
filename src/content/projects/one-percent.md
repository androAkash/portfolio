---
title: "One-Percent (Habit Tracker & Todo App)"
year: "2026"
description: "A hybrid productivity application combining daily habit tracking with task management. Engineered a custom HeatMap calendar component in Jetpack Compose to visualize task completion data via epoch timestamps, featuring a GitHub-style contribution UI."
tags:
  - "Kotlin"
  - "Jetpack Compose"
  - "Custom Canvas HeatMap"
  - "Epoch Timestamps"
  - "StateFlow"
  - "Room DB"
github: "https://github.com/androAkash"
demo: "https://github.com/androAkash"
featured: true
order: 1
metrics: "Custom Compose Canvas HeatMap"
role: "Lead Android Architect"
---

### Project Overview
**One-Percent** is a modern Android productivity application engineered with **Kotlin** and **Jetpack Compose**. It bridges daily atomic habit tracking with task management routines.

### Key Architecture & Engineering Highlights
- **Custom Canvas HeatMap Calendar:** Designed and rendered a custom high-performance grid component in Jetpack Compose mimicking GitHub-style commit heatmaps, mapping epoch completion timestamps directly to dynamic alpha color scales.
- **Reactive State Pipeline:** Driven by Kotlin Coroutines, `StateFlow`, and unidirectional data flow (UDF) under MVVM architecture.
- **Offline-First Persistence:** Robust local caching and fast queries using Room Database and SQLite indexing.
- **Fluid Micro-Animations:** Implemented smooth state transitions and interactive completion gestures using Compose animation specs.
