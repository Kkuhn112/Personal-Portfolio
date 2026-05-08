const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');
const year = document.getElementById('year');
const themeStorageKey = 'portfolio-theme';

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

const applyTheme = (theme) => {
  const useLightTheme = theme === 'light';
  document.body.classList.toggle('light-theme', useLightTheme);

  if (themeToggle) {
    themeToggle.textContent = useLightTheme ? 'Dark' : 'Light';
    themeToggle.setAttribute('aria-label', `Switch to ${useLightTheme ? 'dark' : 'light'} theme`);
  }
};

const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme === 'light' ? 'light' : 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
}
