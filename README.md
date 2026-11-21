# Divya Jap

This project is split from the supplied `divya-jap-rudraksha-organic-3d-1.html` baseline.

## Files
- `index.html` — original interface and modal markup
- `styles.css` — original styling
- `app.js` — original chanting, counter, mala animation, audio, persistence, and renderer logic

## Run
Open `index.html` in a modern browser. For best results, serve this folder from a local static web server.

## 3D Rudraksha
The supplied implementation loads Three.js 0.160.0 from jsDelivr for its detailed procedural Rudraksha model. If the CDN is unavailable, its built-in 2D Rudraksha sprite fallback is used. The rest of the app remains HTML, CSS, and JavaScript.

No redesign or feature rewrite was applied; the source UI and application logic were separated into three files.
