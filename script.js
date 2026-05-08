const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const projectCoverImages = document.querySelectorAll('.project-cover-image');
const projectCoverExtensions = ['avif', 'webp', 'png', 'jpg', 'jpeg', 'gif', 'svg'];

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function loadProjectCover(image, sources, sourceIndex = 0) {
  if (sourceIndex >= sources.length) {
    image.removeAttribute('src');
    image.hidden = true;
    return;
  }

  image.onload = () => {
    image.hidden = false;
  };

  image.onerror = () => {
    loadProjectCover(image, sources, sourceIndex + 1);
  };

  image.src = sources[sourceIndex];
}

projectCoverImages.forEach((image) => {
  const coverBase = image.dataset.coverBase;
  const fallbackSrc = image.dataset.fallbackSrc;
  const titleSources = coverBase
    ? projectCoverExtensions.map((extension) => `${coverBase}.${extension}`)
    : [];
  const sources = fallbackSrc ? [...titleSources, fallbackSrc] : titleSources;

  loadProjectCover(image, sources);
});
