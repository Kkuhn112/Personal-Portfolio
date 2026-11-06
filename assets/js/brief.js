/* ============================================================
   Builds the brief (short) portfolio export.
   ------------------------------------------------------------
   The editorial copy comes from content/brief.js. The title,
   kicker and cover image for each project are read from that
   project's own content/<slug>/project.js, so the brief cannot
   drift out of sync with the site.

   Contact details are pulled out of index.html for the same
   reason. When the document is fully rendered and every image
   has decoded, this sets <html data-export-ready="1">, which the
   PDF script waits on.
   ============================================================ */
(function () {
  'use strict';
  var doc = document;
  var brief = window.PORTFOLIO_BRIEF || { projects: [] };
  var store = (window.Portfolio = window.Portfolio || {});

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function assetPath(slug, file) { return 'content/' + slug + '/' + file; }
  function txt(node) { return node ? node.textContent.trim().replace(/\s+/g, ' ') : ''; }

  function loadProjects(slugs, cb) {
    var remaining = slugs.length;
    if (!remaining) { cb(); return; }
    slugs.forEach(function (slug) {
      var s = doc.createElement('script');
      s.src = assetPath(slug, 'project.js');
      s.onload = s.onerror = function () { if (--remaining === 0) cb(); };
      doc.head.appendChild(s);
    });
  }

  /* Contact line and tagline come from the live site. */
  function readSite(html) {
    var d = new DOMParser().parseFromString(html, 'text/html');
    var mail = d.querySelector('a[href^="mailto:"]');
    var li = d.querySelector('a[href*="linkedin.com"]');
    return {
      name: txt(d.querySelector('.hero .h-display')) || 'Kestin Kuhn',
      email: mail ? mail.getAttribute('href').replace('mailto:', '') : '',
      linkedin: li ? li.getAttribute('href') : '',
      site: (d.querySelector('link[rel="canonical"]') || {}).href || 'kestinkuhn.com'
    };
  }

  function block(label, text) {
    if (!text) return '';
    return '<div class="qa">' +
             '<div class="qa-label">' + esc(label) + '</div>' +
             '<p>' + esc(text) + '</p>' +
           '</div>';
  }

  function projectMarkup(entry, index) {
    var p = store[entry.slug];
    if (!p) return '';
    var cover = p.cover ? assetPath(entry.slug, p.cover) : '';
    return '<article class="brief-project">' +
      '<header class="bp-head">' +
        '<div class="bp-index">' + String(index + 1).padStart(2, '0') + '</div>' +
        '<div class="bp-titles">' +
          (p.kicker ? '<p class="eyebrow">' + esc(p.kicker) + '</p>' : '') +
          '<h2>' + esc(p.title) + '</h2>' +
        '</div>' +
      '</header>' +
      (cover
        ? '<figure class="bp-figure"><img src="' + esc(cover) + '" alt="' + esc(p.title) + '"></figure>'
        : '') +
      '<div class="bp-body">' +
        block('Why it matters', entry.why) +
        block('What I found', entry.found) +
        block('What it taught me', entry.tools) +
        block('Where it leads', entry.path) +
      '</div>' +
    '</article>';
  }

  function render(site) {
    var parts = [];
    parts.push(
      '<header class="brief-head">' +
        '<p class="eyebrow">Selected Work</p>' +
        '<h1>' + esc(site.name) + '</h1>' +
        '<p class="brief-sub">Mechanical Design / Aerospace / Design for Manufacturing</p>' +
        (brief.intro ? '<p class="brief-intro">' + esc(brief.intro) + '</p>' : '') +
        '<p class="brief-contact">' +
          (site.email ? esc(site.email) : '') +
          (site.linkedin ? '<span class="sep">/</span>' + esc(site.linkedin.replace(/^https?:\/\/(www\.)?/, '')) : '') +
        '</p>' +
      '</header>'
    );
    brief.projects.forEach(function (entry, i) { parts.push(projectMarkup(entry, i)); });

    var root = doc.getElementById('brief-root');
    root.innerHTML = parts.join('');

    /* Only flag ready once every image has actually decoded. */
    var imgs = Array.prototype.slice.call(root.querySelectorAll('img'));
    var pending = imgs.length;
    function done() { doc.documentElement.dataset.exportReady = '1'; }
    if (!pending) { done(); return; }
    imgs.forEach(function (img) {
      if (img.complete) { if (--pending === 0) done(); return; }
      img.addEventListener('load', function () { if (--pending === 0) done(); });
      img.addEventListener('error', function () {
        img.closest('figure').hidden = true;
        if (--pending === 0) done();
      });
    });
  }

  var slugs = brief.projects.map(function (p) { return p.slug; });
  loadProjects(slugs, function () {
    fetch('index.html')
      .then(function (r) { return r.text(); })
      .then(function (html) { render(readSite(html)); })
      .catch(function () { render({ name: 'Kestin Kuhn', email: '', linkedin: '', site: '' }); });
  });
})();
