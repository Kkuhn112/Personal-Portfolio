/* ============================================================
   Shared site behaviour: nav, header state, fade-ins, lightbox.
   Exposes window.Site helpers so render.js can re-scan new content.
   ============================================================ */
(function () {
  'use strict';
  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Footer year */
  function setYear() {
    doc.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* Mobile nav */
  function initNav() {
    var toggle = doc.getElementById('navToggle');
    var links = doc.getElementById('navLinks');
    if (!toggle || !links) return;
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

  /* Header border once scrolled */
  function initHeader() {
    var header = doc.getElementById('header');
    if (!header) return;
    function onScroll() { header.classList.toggle('is-stuck', window.scrollY > 6); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Fade-in on scroll (subtle). Re-scannable for injected content. */
  var fadeObserver = null;
  function refreshFades() {
    var els = doc.querySelectorAll('.fade:not(.in)');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    if (!fadeObserver) {
      fadeObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    }
    els.forEach(function (el) { fadeObserver.observe(el); });
  }

  /* Scroll-spy for a set of nav anchors against section ids */
  function initSpy(navSelector) {
    var anchors = Array.prototype.slice.call(doc.querySelectorAll(navSelector + ' a[href^="#"]'));
    var items = anchors.map(function (a) {
      return { a: a, el: doc.getElementById(a.getAttribute('href').slice(1)) };
    }).filter(function (s) { return s.el; });
    if (!('IntersectionObserver' in window) || !items.length) return;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        anchors.forEach(function (a) { a.classList.remove('active'); });
        var m = items.find(function (s) { return s.el === e.target; });
        if (m) m.a.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    items.forEach(function (s) { spy.observe(s.el); });
  }

  /* Lightbox for images marked [data-zoom] */
  var lb, lbImg;
  function ensureLightbox() {
    lb = doc.getElementById('lightbox');
    if (lb) { lbImg = doc.getElementById('lightboxImg'); return; }
    lb = doc.createElement('div');
    lb.className = 'lightbox'; lb.id = 'lightbox';
    lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Image viewer');
    lb.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img id="lightboxImg" src="" alt="">';
    doc.body.appendChild(lb);
    lbImg = doc.getElementById('lightboxImg');
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  function open(src, alt) { ensureLightbox(); lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); doc.body.style.overflow = 'hidden'; }
  function close() { if (lb) { lb.classList.remove('open'); doc.body.style.overflow = ''; lbImg.src = ''; } }
  function bindZoom(root) {
    (root || doc).querySelectorAll('img[data-zoom]:not([data-zoom-bound])').forEach(function (img) {
      img.setAttribute('data-zoom-bound', '1');
      img.addEventListener('click', function () { open(img.src, img.alt); });
    });
  }

  window.Site = {
    refreshFades: refreshFades,
    bindZoom: bindZoom,
    initSpy: initSpy
  };

  doc.addEventListener('DOMContentLoaded', function () {
    setYear(); initNav(); initHeader(); refreshFades(); bindZoom();
  });
})();
