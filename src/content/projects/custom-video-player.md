---
title: "Custom Video Player"
year: "2024"
description: "High-performance video playback engine with live frame preview, scrubbing, speed controls, custom UI controls, and lifecycle-aware playback management built on ExoPlayer and Jetpack Compose."
tags:
  - "Kotlin"
  - "Jetpack Compose"
  - "ExoPlayer"
  - "Coroutines"
  - "Low-Latency Buffering"
  - "Gesture Controls"
github: "https://github.com/androAkash"
demo: "https://github.com/androAkash"
featured: true
order: 2
metrics: "Optimized Low-Latency Buffering"
role: "Media Systems Engineer"
---

### Project Overview
A feature-rich media playback engine engineered specifically to deliver low latency, smooth frame scrubbing, and intuitive gesture controls without stuttering or UI lag.

### Key Architecture & Engineering Highlights
- **Frame-Accurate Scrubbing & Preview:** Integrated ExoPlayer seek parameters and surface listeners to generate real-time frame previews during user swipe scrubbing.
- **Custom Compose Media Overlay:** Engineered responsive touch controls, pinch-to-zoom, dual-tap seek (10s forwards/backwards), and playback rate stepping (0.5x to 2.0x).
- **Optimized Buffering Logic:** Customized `DefaultLoadControl` buffers to minimize initial time-to-first-frame while preventing buffer underruns on unstable networks.
- **Lifecycle-Aware State Machine:** Automatic resource reclamation and audio focus management conforming to Android activity/fragment lifecycle events.
