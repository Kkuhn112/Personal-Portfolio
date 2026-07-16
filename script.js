/* =====================================================================
   Kestin Kuhn — Portfolio interactions
   Deliberately minimal: nav state, scroll-spy, subtle reveal, lightbox.
   ===================================================================== */
(function () {
  'use strict';

  var doc = document;

  /* ---- Footer year ---- */
  var year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Mobile nav ---- */
  var toggle = doc.getElementById('navToggle');
  var links = doc.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Header shadow once scrolled ---- */
  var header = doc.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll-spy: highlight active nav link ---- */
  var navAnchors = Array.prototype.slice.call(
    (links ? links.querySelectorAll('a[href^="#"]') : [])
  );
  var sections = navAnchors
    .map(function (a) {
      var id = a.getAttribute('href').slice(1);
      return { a: a, el: doc.getElementById(id) };
    })
    .filter(function (s) { return s.el; });

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navAnchors.forEach(function (a) { a.classList.remove('active'); });
        var match = sections.find(function (s) { return s.el === e.target; });
        if (match) match.a.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s.el); });
  }

  /* ---- Reveal on scroll (subtle) ---- */
  var reveals = doc.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Lightbox for project photos ---- */
  var lb = doc.getElementById('lightbox');
  var lbImg = doc.getElementById('lightboxImg');
  var lbClose = doc.getElementById('lightboxClose');
  function openLightbox(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    doc.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    doc.body.style.overflow = '';
    lbImg.src = '';
  }
  function bgUrl(el) {
    var bg = window.getComputedStyle(el).backgroundImage || '';
    var m = bg.match(/url\((['"]?)(.*?)\1\)/);
    return m ? m[2] : '';
  }
  doc.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function () {
      if (el.tagName === 'IMG') {
        openLightbox(el.src, el.alt);
      } else {
        var url = bgUrl(el);
        if (url) openLightbox(url, el.getAttribute('aria-label') || '');
      }
    });
  });
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb && lb.classList.contains('open')) closeLightbox();
  });
})();
