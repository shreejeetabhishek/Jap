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
