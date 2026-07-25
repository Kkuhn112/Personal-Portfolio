/* ============================================================
   Shared site behaviour: nav, header state, scroll-spy, lightbox.
   Reveal/entrance animation lives in motion.js.
   ============================================================ */
(function () {
  'use strict';
  var doc = document;

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
  function bindZoom(scope) {
    (scope || doc).querySelectorAll('img[data-zoom]:not([data-zoom-bound])').forEach(function (img) {
      img.setAttribute('data-zoom-bound', '1');
      img.addEventListener('click', function () { open(img.src, img.alt); });
    });
  }

  /* ---------- Hover-to-play cover video ----------
     The poster image is the resting state and the video sits on top of it.
     Nothing is downloaded until the pointer enters the card (preload="none").
     Only runs on devices with a real hovering pointer, and never when the
     visitor has asked for reduced motion. On touch devices and for
     reduced-motion users the still poster is all they get, which is correct:
     the whole card is a link, so a tap must navigate, not play. */
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function bindHoverVideo(scope) {
    if (!canHover || !wantsMotion) return;
    (scope || doc).querySelectorAll('.cover.has-video:not([data-video-bound])').forEach(function (cover) {
      cover.setAttribute('data-video-bound', '1');
      var video = cover.querySelector('.cover-video');
      if (!video) return;
      var card = cover.closest('.work-card') || cover;

      card.addEventListener('mouseenter', function () {
        cover.classList.add('is-playing');
        var playing = video.play();
        // Browsers can reject play(); fall back to the poster silently.
        if (playing && typeof playing.catch === 'function') {
          playing.catch(function () { cover.classList.remove('is-playing'); });
        }
      });

      card.addEventListener('mouseleave', function () {
        cover.classList.remove('is-playing');
        video.pause();
        try { video.currentTime = 0; } catch (e) {}
      });
    });
  }

  window.Site = { bindZoom: bindZoom, initSpy: initSpy, bindHoverVideo: bindHoverVideo };

  doc.addEventListener('DOMContentLoaded', function () {
    setYear(); initNav(); initHeader(); bindZoom(); bindHoverVideo();
  });
})();
