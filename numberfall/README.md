# Numberfall

An original, ad-free arithmetic army runner for **aribulan.com/numberfall/**, by **emr**. No build step, runtime dependencies, account, ads, analytics, payments, or server API.

## Play

Choose a gate to add or multiply soldiers. Enemy shields and minus gates subtract soldiers; division rounds down. Reach the citadel with **strictly more** soldiers than its defence. Three stars require at least 92% of the best possible army, two require 75%; any other victory earns one.

- 24 deterministic campaign stages; winning unlocks the next stage.
- A daily route seeded by the device's calendar date. The same date produces the same route on every device. Personal bests stay in that browser; there is no online leaderboard.
- Endless frontiers, one ten-choice wave at a time. Each wave starts with a fresh army; completed-wave records persist.
- Steady (4 seconds per gate), Sprint (2.5 seconds), and Think (untimed; tap to advance). Timed modes pause if no gate was selected instead of choosing for the player.
- Tap a button or either half of the field, swipe horizontally, or press Left/Right (1/2). P/Esc pauses. Changing tabs pauses automatically.
- Optional synthesized sound and vibration where supported. Sound begins only after a user gesture. Reduced-motion preferences remove soldier bobbing and ground movement.

## Preview locally

From the website repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://localhost:8765/numberfall/`. Files must be served with JavaScript module MIME types; GitHub Pages supports `.mjs`. The standalone HTML preview supplied with this project can also be opened directly in a browser without a server (PWA installation is only available on a hosted origin).

## Publish later

This change is prepared for review in a feature branch. **Do not merge until the owner approves publishing.** Merging the game folder into the website's `main` branch will make it available at `/numberfall/` through the repository's existing GitHub Pages configuration. No DNS change or separate hosting service is needed. The existing homepage and other games are unchanged; this first review does not add a homepage link.

Use HTTPS for the public URL. On 29 October 2026, the Pages API reported the custom domain and main-branch publishing were configured, but `https_enforced` was false. An unauthenticated HTTPS check of the domain could not complete in the research browser. HTTPS/certificate behaviour should be verified before public launch; this change does not modify Pages or domain settings.

## Offline and install

The manifest and scoped service worker make the game installable in supporting browsers. On iOS, use Safari's Share → Add to Home Screen; availability and exact menus depend on the browser. After one successful online load and worker activation, the app shell and game rules work offline. Offline mode also creates each day's route locally.

The worker only handles requests under `/numberfall/`; it does not cache or control the other games or website root. Updates wait for the next clean launch. When changing shipped assets, bump `CACHE` in `sw.js`, then close all Numberfall tabs and reopen to activate the new worker. To bypass previously installed caches while developing, use a different local port or origin.

Progress uses `localStorage` key `emr.numberfall.v1`. Clearing website data clears progress. Browsers may restrict or evict device storage; failures fall back to progress for the current visit. No save sync or sign-in is provided.

## Implementation and validation

Canvas 2D draws original scenery and a bounded formation (maximum 45 visible soldiers, regardless of army size). The canvas pixel ratio is capped at 2. There are no image downloads, webfonts, WebGL, or third-party requests. The animation loop stops for menus, pause, results, and hidden tabs. CSS uses safe-area insets, responsive desktop/portrait/landscape layouts, large gate controls, keyboard focus indicators, and DOM equivalents for every calculation choice.

The arithmetic rules are separate from rendering in `engine.mjs`. Operations are monotone, so selecting the greater result at each row produces the maximum possible final army. The boss is set below that maximum, guaranteeing a winning route without purchases or upgrades. Enemies deduct their displayed strength. Army values are bounded to 999,999; this is a calculation game, not a simulation of that many individual units.

```sh
node --test numberfall/engine.test.mjs
node --check numberfall/game.js
node --check numberfall/sw.js
```

Tests cover arithmetic, flooring, zero armies and caps, all 24 campaign stages, 366 sample daily seeds, 200 endless waves, deterministic daily dates, and exhaustive comparison of all 1,024 paths in four representative stages. Browser checks and remaining device limitations are recorded in the delivered project report. The Node tests need no package installation.

See [RESEARCH.md](RESEARCH.md) for the reference game research and design choices.
