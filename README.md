# Personal Portfolio Website

A lightweight, recruiter-friendly personal portfolio for a mechanical engineering student targeting aerospace/defense internships. The site uses plain HTML, CSS, and minimal JavaScript so it stays fast and easy to deploy on GitHub Pages.

## File Structure

- `index.html` — Homepage with summary, about, four featured projects, experience, skills, and contact.
- `projects.html` — Traditional detailed portfolio page with expanded project writeups.
- `styles.css` — Visual style, responsive layout, typography, light/dark theme, and card styling.
- `script.js` — Mobile navigation toggle, light/dark theme toggle, and footer year update.
- `assets/` — Lightweight project visuals and future project images.

## Local Preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Save settings.
5. After deployment completes, GitHub will provide your site URL.

## Editing Content

- Update contact links, resume URL, and project copy directly in `index.html` and `projects.html`.
- Replace project visuals in `assets/` with final JPG/PNG/WebP files when available.
- Keep project images compressed for fast page loading.
- Replace `resume.pdf` with the real resume file or update the resume button URL.

## Project Organization

The homepage intentionally shows only the four main projects for fast recruiter scanning. The `projects.html` page contains the full traditional portfolio with expanded problem, constraints, approach, result, and tools sections for each project.
