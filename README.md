# Ascension Land Surveying — Redesign Concept

A static, framework-free redesign of ascension-landsurveying.com. Plain HTML/CSS/JS —
no build step, so it's easy to compare against the current Squarespace site and cheap to host anywhere
(GitHub Pages, Cloudflare Pages, Netlify).

## What's here

```
index.html                          Homepage
services.html                        Full service descriptions
service-areas.html                   Region hub — Nashville to the NC Outer Banks
service-area-middle-tennessee.html   Region 01
service-area-east-tennessee.html     Region 02
service-area-piedmont-triad.html     Region 03 (home base)
service-area-triangle.html           Region 04
service-area-coastal-nc.html         Region 05
about.html                           Founder / company background (needs real copy — see note below)
contact.html                         Quote request form
css/styles.css                        All design tokens + layout
js/main.js                            Mobile nav, live time readout, form handler stub
```

## Corridor expansion strategy

The service-area structure covers five real regions along the Nashville–Outer Banks corridor
rather than one page per city or county. This keeps each page's content genuinely differentiated
(real terrain, real licensing detail, real growth status) instead of templated clones — see the
doorway-page note further down.

Two of the five regions (Middle Tennessee, NC Triangle, Coastal NC) currently say the crew there is
still being built out — that's intentional and should stay accurate. As surveyors are hired into each
region, update that section with real local detail (completed projects, review counts, a named point of
contact) rather than leaving it generic. Piedmont Triad and East Tennessee/Tri-Cities have the most
detail since they reflect where the team has an actual track record today.

Counties on the Piedmont Triad page (Catawba/Hickory, Caswell) were added based on real, unprompted
Search Console query data — not guessed — worth re-checking Search Console periodically for the same
signal in other regions as they develop.

## Design direction

Grounded in actual surveying artifacts rather than generic "professional services" template moves:

- **Benchmark disk** motif (the brass monuments surveyors stamp and set in the ground) reused as the
  logo mark, credential badges, and contact icon — the one signature element, used consistently rather
  than as one-off decoration.
- **IBM Plex Mono** for every coordinate, license number, and data readout — surveyors' working documents
  are full of stamped numbers, so the mono face is doing real signaling, not styling.
- **Space Grotesk** (display) + **Source Serif 4** (body) — technical without going full "engineering blueprint" cliché.
- Orange (`#E2572B`) and brass (`#B8935A`) accents on a charcoal/paper base — kept the orange from the
  current site's brand, shifted the hue so it's not the generic AI-orange (`#D97757`) that shows up in
  every other AI-assisted redesign right now.

## Why service-areas.html is structured the way it is

Only two sections — North Carolina and Tennessee — each with genuinely different content (different
licensing boards, different county lists, different terrain considerations). This is deliberate: a page
per city with swapped-out place names is exactly the "doorway page" pattern Google's spam policies target,
and recent core updates have specifically penalized that structure. If you want to rank for individual
city searches later, build that out as real content (permitting quirks, local project examples) rather
than templated clones — happy to help with that as a next phase.

## Before this replaces the live site

- [ ] Swap in real photography and the real logo (this build uses SVG placeholders to avoid using assets
      I don't have rights to include)
- [ ] Replace the About page placeholder paragraph with real founder background
- [ ] Wire the contact form to a real backend (Formspree, Netlify Forms, or a Cloudflare Worker) —
      right now it only fakes a success state client-side
- [ ] Add a dedicated call-tracking number if this site will be used to justify a lead-based revenue share
      — you'll want hard attribution data, not just "site looks nicer"
- [ ] Replace the review screenshots concept with real embedded reviews (Google review schema, not images)
- [ ] Add a blog/resources section for ongoing topical content — nothing here builds long-term search
      authority on its own

## Getting this onto GitHub

From this folder:

```bash
git add -A
git commit -m "Initial redesign concept"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

To preview it instantly with GitHub Pages: repo Settings → Pages → Deploy from branch → `main` / `/ (root)`.
