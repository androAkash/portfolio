---
title: "Realtime Dashboard + Carousel Feed"
year: "2024"
description: "Dynamic real-time dashboard and content streaming system utilizing LiveView and Jetpack Compose. Includes a Pinterest-style masonry carousel feed with multi-layer caching, physics animations, and lazy loading."
tags:
  - "Compose"
  - "LiveView"
  - "GraphQL"
  - "MVVM"
  - "Memory Caching"
  - "Lazy Loading"
github: "https://github.com/androAkash"
demo: "https://github.com/androAkash"
featured: true
order: 3
metrics: "Realtime GraphQL + Lazy Caching"
role: "Frontend Android Engineer"
---

### Project Overview
An interactive data visualization and media feed system created to demonstrate high-throughput real-time events alongside a smooth, staggered Pinterest-style carousel.

### Key Architecture & Engineering Highlights
- **Live Event Synchronization:** Connected with GraphQL subscriptions and LiveView channels to stream dynamic analytics metrics without manual pulling.
- **Pinterest-Style Staggered Carousel Feed:** Custom vertical and horizontal grid virtualization with disk/memory LRU bitmap caching and placeholder shimmer skeletons.
- **Time-Based Event Aggregation:** Footfall chart filtering system condensing thousands of granular hourly event logs into dynamic day, week, and month snapshots.
- **Pagination & Memory Safeguards:** Cursor-based GraphQL query pagination maintaining steady 60fps frame rates on low-to-mid-tier Android devices.
