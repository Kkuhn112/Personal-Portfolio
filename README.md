# Personal Portfolio Website

A lightweight, recruiter-friendly personal portfolio for a mechanical engineering student targeting aerospace/defense internships.

## File Structure

- `index.html` — Main single-page portfolio layout and content sections.
- `styles.css` — Visual style, responsive layout, typography, and component styling.
- `script.js` — Mobile navigation toggle and footer year update.
- `assets/projects/` — Per-project folders for cover images and any additional project photos/renders.

## Local Preview

1. Clone the repository.
2. Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

### Option 1: Deploy from `main` branch (recommended for this project)

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Save settings.
5. After deployment completes, GitHub will provide your site URL.

### Option 2: Deploy from `gh-pages` branch

1. Create and push a `gh-pages` branch containing these files.
2. In **Settings → Pages**, choose `gh-pages` and `/ (root)`.

## Editing Content

- Update contact links, resume URL, and project details directly in `index.html`.
- Add project photos and renders to the matching folder inside `assets/projects/`.
- Use each project folder's `cover.svg` file for the image that should appear on that project card; the pages already point to these `cover.svg` paths and fall back to the CSS cover style until an image exists.
- The text overlay on each project cover comes from the `.project-cover-title` span in `index.html` and `projects.html`.
- Keep image sizes compressed for fast loading.

## Notes

This project uses plain HTML/CSS/JS for low complexity and easy long-term maintenance on GitHub Pages.
