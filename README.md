# Kestin Kuhn, Engineering Portfolio

A minimal, professional portfolio site. Plain HTML, CSS, and JavaScript with no
build step, so it can be edited directly on GitHub and hosted on GitHub Pages.

The site is built so that every project is a self-contained folder. You edit one
file to change a project, and copy one folder to add a project. You never have to
touch the layout code.

## How the site is organized

```
index.html            Home page (hero, work, about, experience, toolbox, education, contact)
project.html          The template that displays a single project
assets/
  css/site.css        All styling
  js/site.js          Navigation, header, fade-ins, image lightbox
  js/render.js        Builds the project cards and project pages from /content
content/
  manifest.js         The list of projects and their order
  <project>/          One folder per project
    project.js        All of that project's text and settings
    *.jpg / *.png     That project's images
Kestin-Kuhn-Resume.pdf
```

## Edit a project

1. Open `content/<project>/project.js`.
2. Change the text between the quotes or backticks. Each field is labeled.
3. Commit. The home card and the project page both update automatically.

## Add a photo to a project

1. Put the image file in that project's folder, for example
   `content/custom-slitting-saw-arbor/arbor.jpg`.
2. In that folder's `project.js`, set `cover` (and usually `hero`) to the file
   name, for example `cover: "arbor.jpg"`.

Until a `cover` is set, the card shows a clean placeholder, so nothing looks broken.

## Add a new project

1. Copy an existing folder in `content/` (for example `custom-macro-pad`) and
   rename it to your project's slug, using lowercase-with-dashes.
2. Edit the `project.js` inside it and drop in the images.
3. Add the slug to the list in `content/manifest.js`.

## Remove or reorder projects

Edit the list in `content/manifest.js`. Delete a line to remove a project, or
change the order of the lines to reorder the cards.

## What a project.js looks like

```js
window.Portfolio["my-project"] = {
  title:   "My Project",
  kicker:  "Category shown above the title",
  featured: false,              // true makes it the large card on the home page
  blurb:   "One or two sentences for the home page card.",
  tagline: "One sentence shown under the title on the project page.",
  cover:   "photo.jpg",         // image file in this folder; leave "" for a placeholder
  hero:    "photo.jpg",         // large image at the top of the project page
  tags:    ["Tag One", "Tag Two"],
  spec:    [ ["Role", "..."], ["Timeline", "..."] ],   // facts box on the project page
  links:   [ { label: "GitHub", href: "" } ],          // empty href hides the button
  sections: [
    {
      id: "overview",           // used for the on-page navigation
      heading: "Overview",
      body: [ "A paragraph.", "Another paragraph." ],
      list: [ "An optional bullet." ],
      figures: [ { src: "photo.jpg", caption: "An optional image caption." } ]
    }
  ]
};
```

## Local preview

The site loads project files with JavaScript, so open it through a local server
rather than double-clicking the file.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Hosting

Served by GitHub Pages from the repository root. In Settings, Pages, choose the
branch to publish.
