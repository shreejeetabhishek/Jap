# Divya Jap

A mobile-first digital mala counter for Naam Jap, Mantra Jap and Chalisa Path.

## Repository layout (all project files in root)

```text
divya-jap/
├── index.html
├── styles.css
├── app.js
├── favicon.svg
├── manifest.webmanifest
├── README.md
├── .gitignore
└── .nojekyll
```

## Run locally

No build step or package installation is required. Open `index.html`, or serve the folder with:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload **all files in this ZIP directly to the repository root** (do not upload a containing project folder).
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select your default branch and `/(root)`, then save.

## 3D renderer

The enhanced Rudraksha renderer loads Three.js `0.160.0` from jsDelivr at runtime. If the CDN or WebGL is unavailable, the built-in 2D fallback is used. Internet access is required for the enhanced 3D render.

## Controls

- Swipe upward on the mala, tap it, or press Space / Arrow Up to advance one bead.
- Toggle sound, switch theme or reset the current count from the top controls.
- Choose a chant, target bead count and material from the controls.
- Progress and preferences are saved in browser local storage.

## Notes

This is based on the last agreed visually good Rudraksha V2 baseline. HTML, CSS and JavaScript are separate root-level files. No framework or bundler is required.


## Rendering architecture (prototype milestone)

- `app.js` owns application state, chant selection, counting, persistence, audio, and UI events.
- `mala-renderer.js` owns the hanging mala geometry, bead rendering, sway/tassel motion, and material appearance.
- `styles.css` and `index.html` own presentation and markup.

The Rudraksha bead currently uses the detailed Three.js-generated 3D prototype (with procedural color, relief/bump and roughness maps, five longitudinal grooves, seed nodules and bore details). Tulsi, Chandan and Sphatik remain on their existing fallback bead treatments in this milestone; they are intentionally not represented as finished photoreal 3D materials yet.

Three.js is loaded from jsDelivr at runtime. If WebGL/Three.js is unavailable, the renderer falls back to its built-in canvas bead artwork.
