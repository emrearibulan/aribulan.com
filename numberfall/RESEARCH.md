# Research and design notes

Researched 29 October 2026. The user asked for the calculation gameplay seen in Top Lords advertisements, without ad interruptions, as a mobile web game for aribulan.com.

## What the sources establish

The [official Google Play listing](https://play.google.com/store/apps/details?id=com.gamespark.topking.gp&hl=en) describes swiping through enemy lines and growing armies, alongside territory, heroes, fiefs and kingdom management. Reviews on the same listing describe the soldier combat as enjoyable but report building requirements and long timers as interruptions; other reviews report that they do not see in-game advertisements. The developer also describes the experience as ad-free in a review response. Therefore, the research does **not** support calling Top Lords itself an ad-heavy game.

The [official Apple App Store listing](https://apps.apple.com/gb/app/top-lords/id6767834940) includes a developer response acknowledging players' expectations of continuous number-gate gameplay and feedback about building requirements between those levels. This supports isolating the number-gate loop from the broader kingdom game.

[SocialPeta's observed advertising samples](https://socialpeta.com/en/app-store/6767834940) use arithmetic gate choices such as doubling versus adding soldiers. This is secondary evidence for the ad presentation, not a complete specification of the native game's combat rules. Its download estimates and revenue data were not used.

Research was based on the listings, published reviews/developer responses, and observed ad descriptions. The native game was not installed or played, and this project does not claim to reproduce every Top Lords mechanic or verify its complete monetization model.

## What Numberfall changes

- Keeps a continuous, short arithmetic route: ten choices followed by one visible citadel target.
- Uses only the player's decisions for progression. No city building, energy, upgrade timers, purchases or account requirements.
- Makes every displayed choice an actual calculation. Shows the complete arithmetic after a run, including division rounding.
- Provides time pressure as a choice. Think mode gives unlimited time; timed modes pause when no path was selected.
- Gives every generated stage a verified winning path. Losing restarts immediately on the same route.
- Offers campaign progress, deterministic daily routes and endless frontiers without adding a backend or tracking.
- Uses original title, code, palette, generated geometric artwork and synthesized sounds. No Top Lords assets, characters, copied UI, trademarks or affiliation are used in the game.

Numberfall is an original implementation of the general number-gate game idea. The current structure deliberately favours quick mobile web play and small transfers over a large native kingdom simulation.
