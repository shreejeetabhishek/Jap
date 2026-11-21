# Divya Jap — offline-first pure-code mala prototype

All runtime assets are local. The app uses only HTML, CSS, SVG/canvas 2D and JavaScript.
No Three.js, external CDN, remote image, texture, font, or 3D model is required.

## Files
- `index.html` — app structure
- `styles.css` — interface styling
- `app.js` — existing application logic and counting
- `mala-renderer.js` — self-contained procedural mala renderer
- `favicon.svg` — existing favicon asset (not redesigned in this milestone)
- `manifest.webmanifest` — PWA metadata

## Rudraksha renderer
The renderer draws an irregular seed silhouette, five curved longitudinal Mukhi channels,
raised surface nodules, small pits, highlights, shadowing and a central threading bore.
Each bead receives deterministic per-bead variation. It is a 2D procedural illustration
with simulated depth, not a physically modelled 3D mesh.

## Offline and network behaviour
No third-party runtime requests are made by the mala renderer. Once the app files are
available on the device/browser, the mala does not need a network connection to render.
