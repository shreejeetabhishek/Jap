# Divya Jap — Fast Network Build

This build preserves the supplied interface and app features while improving first-load behaviour on mobile networks.

## Performance changes
- The app starts immediately with its built-in Canvas mala and Rudraksha rendering; the counter does not wait for Three.js.
- Three.js is an optional, delayed enhancement loaded after the first screen is interactive.
- Data Saver mode skips the optional Three.js download.
- On constrained connections (2G/3G or reported downlink below 1 Mbps), the optional 3D enhancement is delayed further.
- The procedural 3D texture, mesh and output sprite are smaller to reduce CPU/GPU work.
- Canvas device-pixel ratio is capped lower on mobile/low-core devices.
- The animation loop is capped at about 30 FPS and pauses rendering when the tab is hidden.

## Files
- `index.html`
- `styles.css`
- `app.js`

## Run
Open `index.html`, or serve this folder using any static web server.

## Network behaviour
The initial experience requires no remote image, font, or library download. The detailed Three.js Rudraksha enhancement is fetched from jsDelivr later. If that download fails, the built-in Canvas version remains active. Data Saver mode intentionally stays on the Canvas version to avoid consuming mobile data.


## Expanded devotional chant catalogue

This build adds a small Sri Aurobindo & The Mother (Mirra Alfassa) selection: “Ma”, “Sri Aurobindo Saranam Mama”, “Om Namo Bhagavate”, and “Om Namo Bhagavate Sri Aravindaya”. It also adds a Satsang/Thakur Anukulchandra Radhaswami remembrance entry. These are presented as devotional selections/invocations, not as universally prescribed or initiation-required practices. Radha Soami initiation-specific Simran words are intentionally not supplied; users should follow the instructions of their own tradition or authorised teacher.

## Competitive Edge Upgrades (100% Local-First)
- **Detailed Rudraksha & Deep Mukhi Grooves Preserved**: Retains the displaced 3D Rudraksha seed relief, deep winding mukhi clefts, wart-like surface protuberances, and continuous hanging mala rendering.
- **Undo & Auto-Jap Pacer**: Quick **UNDO** (up to 30 slides or `Ctrl/Cmd+Z`) and **AUTO** pacer (`1.0s`, `1.5s`, or `2.5s` intervals).
- **Daily Sankalpa & Session Telemetry**: Track active session duration, live pace (`beads/min`), and daily Sankalpa completion.
- **Sadhana Insights & 7-Day Chart**: Local-only daily logs, streak tracking, and 7-day bar visualization.
- **Count Up / Countdown, Devanagari (`१२३`) Numerals & Hindi/English UI**: Switch numeral script, counter direction, interface language, haptic vibration, and Screen Wake Lock.
- **Free Local JSON Backup**: Export and restore your full practice data locally as `.json` without any cloud paywall.

- **Sadhana Ranks & Sangha Leaderboard**: Spiritual tier progression (*Arambhak → Sadhak → Nishthavan → Bhakt → Tapasvi → Siddha → Mahasadhak*) plus an interactive Today / All-Time local Sangha ranking board with editable Sadhak Name.
- **Zero-Backend Friend Circle & Live Rank-Up**: Dynamic time-of-day Sangha benchmarks, live `#Rank` telemetry chip, automatic Rank-Up toast celebrations, and `Share My Rank` URLs that let friends/family join your local ranking circle for free.
- **Elderly-Friendly Large Counting Bead & Tactile Slide-Up**: Enlarged main counting bead and bold high-contrast counter numerals, flush bead-to-strand seating with no thread gap, and smooth upward slide motion on touch or swipe.
- **Natural Wart-Like Rudraksha Grooves on First Paint**: Upgraded the instant Canvas Rudraksha sprite with a knobby organic silhouette, 210 fused wart-like protuberances with recessed shadow valleys, jagged winding 5-Mukhi clefts, and `localStorage` WebP caching of the 3D render for zero pop-in on repeat visits.
- **Photorealistic Embedded Rudraksha Sprite**: Replaced the heavy Three.js 3D generator with an instant, zero-network embedded WebP sprite of the real Rudraksha bead—eliminating ~600 KB of external JS and giving crisp photographic detail from Frame 0.
- **Fluid Wind-Swept Silken Jhalar**: Upgraded the Sumeru tassel with 35 layered saffron-gold silk strands, continuous multi-harmonic ambient breeze physics, traveling cubic-Bezier ripples along the tips, and a zari-wrapped knot collar.
- **Photorealistic Embedded Tulsi Sprite**: Added an instant, zero-network embedded WebP sprite of the real Tulsi bead with natural wood grain and top bore.
- **Photorealistic Embedded Chandan Sprite**: Added an instant, zero-network embedded WebP sprite of the real Chandan (sandalwood) bead with natural swirling wood grain.
- **Photorealistic Embedded Sphatik Sprite**: Added an instant, zero-network embedded WebP sprite of the real Sphatik (clear quartz crystal) bead with natural internal crystal inclusions and vertical bore.
