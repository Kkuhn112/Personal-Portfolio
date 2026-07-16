# Kestin Kuhn — Engineering Portfolio

A premium, minimal personal portfolio for a Mechanical Engineering student
targeting aerospace, robotics, and defense roles. Design language: Apple ·
NASA · SpaceX · Stripe · Linear · Lockheed Martin — monochromatic, one
aerospace-blue accent, typography-led, and built for a recruiter's ten-second scan.

## Structure

- `index.html` — Single-page portfolio: hero, featured work, about, experience,
  technical toolbox, education, certifications, résumé preview, and contact.
- `projects.html` — Full project archive with engineering-report detail for each build.
- `styles.css` — The design system (tokens, type scale, components, responsive rules).
- `script.js` — Minimal interactions: sticky-header state, scroll-spy nav,
  subtle reveal-on-scroll, mobile menu, and an image lightbox.
- `assets/img/` — Optimized project photography (PAROL 6 arm, macro pad).
- `Kestin-Kuhn-Resume.pdf` — Résumé, previewed and downloadable on the site.

Projects without a photo use clean, purposeful inline-SVG blueprint schematics
that read like CAD line art rather than stock icons.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy (GitHub Pages)

Deployed from the repository root via `.github/workflows/static.yml`.
In **Settings → Pages**, set the source to GitHub Actions (or Deploy from a
branch → `main` → `/root`).

## Editing content

- Contact links, résumé, and copy live directly in `index.html`.
- Project detail lives in `projects.html`; add a photo by dropping an optimized
  JPEG into `assets/img/` and swapping the `<img>` (or blueprint) inside the card.
- Keep images web-sized (≈1400 px long edge, progressive JPEG) for fast loads.

Plain HTML/CSS/JS by design — no build step, no dependencies, easy to maintain.
