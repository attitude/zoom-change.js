# zoom-change.js

Dispatch `resize` event when `window.devicePixelRatio` changes, e.g. when user uses zoom

Uses simple `setTimeout()` and `requestAnimationFrame()`.
Short and simple solution to support ability to listen to zoom change.

Notes
-----

- Safare seems to report device pixel ratio as fixed number;
- Chrome and Firefox multiply device pixel ratio and zoom.
