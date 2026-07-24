/* ============================================================
   Motion layer (Framer Motion style, no dependencies)
   ------------------------------------------------------------
   Spring-like entrance reveals, staggered groups, mount
   animations, and count-ups, built on the Web Animations API.
   Fully guarded by prefers-reduced-motion: when reduced motion
   is requested, everything is shown instantly with no movement.
   Exposes window.Motion.scan() so dynamically rendered content
   (project cards, project pages) can be animated after injection.
   ============================================================ */
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SUPPORTED = typeof Element !== 'undefined' && typeof Element.prototype.animate === 'function';
  var ON = SUPPORTED && !REDUCED;

  // Spring-like easing (easeOutExpo). Reads calm and precise, not bouncy.
  var EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  var DUR = 640;
  var DIST = 18;      // px of travel
  var STAGGER = 70;   // ms between staggered siblings

  // When motion is on, elements marked for reveal start hidden (see CSS
  // rule scoped to .has-motion). Without JS or with reduced motion, they
  // stay visible because that class is never added.
  if (ON) root.classList.add('has-motion');

  function animateReveal(el, delay) {
    if (!ON) { el.classList.add('is-in'); return; }
    el.classList.add('is-in');
    el.animate(
      [
        { opacity: 0, transform: 'translateY(' + DIST + 'px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: DUR, delay: delay || 0, easing: EASE, fill: 'backwards' }
    );
  }

  // Fire cb once, when el scrolls into view.
  var io = ON && 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { obs.unobserve(e.target); e.target.__reveal(); }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0 })
    : null;

  function onEnter(el, cb) {
    if (!io) { cb(); return; }
    el.__reveal = cb;
    io.observe(el);
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
    if (!ON) { el.textContent = target.toFixed(decimals); return; }
    var start = performance.now();
    var dur = 900;
    function tick(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(tick);
  }

  // Scan the document (or a subtree) for things to animate.
  // Idempotent: already-handled nodes are skipped.
  function scan(scope) {
    scope = scope || doc;

    // Staggered groups present in static markup.
    scope.querySelectorAll('[data-stagger]:not([data-stagger-ready])').forEach(function (group) {
      group.setAttribute('data-stagger-ready', '1');
      var kids = Array.prototype.slice.call(group.querySelectorAll(':scope > .reveal'));
      kids.forEach(function (k) { k.setAttribute('data-reveal-ready', '1'); });
      onEnter(group, function () {
        kids.forEach(function (k, i) { animateReveal(k, i * STAGGER); });
      });
    });

    // Individual reveals (including dynamically injected cards/sections).
    scope.querySelectorAll('.reveal:not([data-reveal-ready])').forEach(function (el) {
      el.setAttribute('data-reveal-ready', '1');
      var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      onEnter(el, function () { animateReveal(el, delay); });
    });

    // Count-ups.
    scope.querySelectorAll('[data-count]:not([data-count-ready])').forEach(function (el) {
      el.setAttribute('data-count-ready', '1');
      onEnter(el, function () { countUp(el); });
    });
  }

  // Hero mounts immediately on load with a gentle stagger.
  function mountHero() {
    var group = doc.querySelector('[data-mount]');
    if (!group) return;
    var kids = Array.prototype.slice.call(group.querySelectorAll(':scope > .reveal'));
    kids.forEach(function (k) { k.setAttribute('data-reveal-ready', '1'); });
    if (!ON) { kids.forEach(function (k) { k.classList.add('is-in'); }); return; }
    kids.forEach(function (k, i) { animateReveal(k, 90 + i * 90); });
  }

  window.Motion = { scan: scan, reveal: animateReveal };

  doc.addEventListener('DOMContentLoaded', function () {
    mountHero();
    scan();
  });
})();
