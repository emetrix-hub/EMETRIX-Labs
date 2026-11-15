(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header state */
  var header = d.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 12); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile nav */
  var toggle = d.querySelector('.nav-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var open = root.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  d.querySelectorAll('.main-nav a').forEach(function (a) { a.addEventListener('click', function () { root.classList.remove('nav-open'); }); });

  /* language switch */
  var ls = d.querySelector('.lang-switch'), lb = ls && ls.querySelector('.lang-btn');
  if (lb) {
    lb.addEventListener('click', function (e) { e.stopPropagation(); var o = ls.classList.toggle('open'); lb.setAttribute('aria-expanded', o); });
    d.addEventListener('click', function () { ls.classList.remove('open'); lb.setAttribute('aria-expanded', false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') { ls.classList.remove('open'); root.classList.remove('nav-open'); } });
  }
  d.querySelectorAll('[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('emx-lang', a.getAttribute('data-lang')); } catch (e) {}
      if (location.hash) a.href = a.href.split('#')[0] + location.hash;
    });
  });

  /* counters */
  function count(el) {
    var end = parseInt(el.getAttribute('data-count'), 10); if (!end || reduce) return;
    var t0 = null, dur = 1400;
    function step(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }
    el.textContent = '0'; requestAnimationFrame(step);
  }

  /* reveal on scroll */
  var els = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('[data-count]').forEach(count);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  /* spotlight on service cards */
  d.querySelectorAll('.svc-card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* network canvas in hero */
  var cv = d.querySelector('[data-net]');
  if (cv && !reduce && cv.getContext) {
    var ctx = cv.getContext('2d'), pts = [], W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), raf, visible = true;
    function size() {
      W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.min(70, Math.floor(W * H / 22000)); pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, dist = dx * dx + dy * dy;
          if (dist < 16000) { ctx.strokeStyle = 'rgba(56,225,255,' + (0.18 * (1 - dist / 16000)) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.fillStyle = 'rgba(110,255,196,.55)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, 6.283); ctx.fill();
      }
      if (visible) raf = requestAnimationFrame(draw);
    }
    size(); draw();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 200); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) { cancelAnimationFrame(raf); draw(); } }).observe(cv);
  }

  /* contact form -> mailto */
  var form = d.querySelector('[data-contact]');
  if (form) {
    var params = new URLSearchParams(location.search);
    if (params.get('topic') === 'quick-check') { var q = form.querySelector('[data-quick]'); if (q) q.checked = true; }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg'), ok = true;
      ['name', 'email', 'message'].forEach(function (n) {
        var f = form.elements[n], bad = !f.value.trim() || (n === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.setAttribute('aria-invalid', bad); if (bad) ok = false;
      });
      if (!form.elements.consent.checked) ok = false;
      if (!ok) { msg.className = 'form-msg err'; msg.textContent = msg.getAttribute('data-err'); return; }
      var v = function (n) { return (form.elements[n].value || '').trim(); };
      var topic = (form.querySelector('[name=topic]:checked') || {}).value || '';
      var body = [v('message'), '', '—', 'Name: ' + v('name'), v('company') ? 'Company: ' + v('company') : '', 'E-Mail: ' + v('email'), v('phone') ? 'Phone: ' + v('phone') : '', 'Topic: ' + topic].filter(Boolean).join('\n');
      var href = 'mailto:' + form.getAttribute('data-email') + '?subject=' + encodeURIComponent(form.getAttribute('data-subject') + ' — ' + topic) + '&body=' + encodeURIComponent(body);
      window.location.href = href;
      msg.className = 'form-msg ok'; msg.textContent = msg.getAttribute('data-ok');
    });
  }

  /* year */
  d.querySelectorAll('[data-year]').forEach(function (y) { y.textContent = new Date().getFullYear(); });
})();
