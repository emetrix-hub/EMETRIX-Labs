/* EMETRIX Tech static site generator
 * Usage: node src/build.js            -> dist/ (clean URLs, for Cloudflare Pages)
 *        node src/build.js --preview  -> preview/ (relative links, works from any folder)
 */
const fs = require('fs');
const path = require('path');

const PREVIEW = process.argv.includes('--preview');
const OUT = path.join(__dirname, '..', PREVIEW ? 'preview' : 'dist');
const SITE = 'https://emetrix-tech.com';
const EMAIL = 'contact@emetrix-tech.com';
const LANGS = ['de', 'en', 'fa'];
const SOCIAL = [
  { key: 'instagram', label: 'Instagram', handle: '@emetrix_tech', url: 'https://www.instagram.com/emetrix_tech/', icon: 'camera' },
  { key: 'tiktok', label: 'TikTok', handle: '@emetrix_tech', url: 'https://www.tiktok.com/@emetrix_tech', icon: 'note' },
  { key: 'github', label: 'GitHub', handle: 'EMETRIX Labs', url: 'https://github.com/emetrix-hub/EMETRIX-Labs', icon: 'code' }
];
const socialLinks = (cls = 'social') => `<ul class="${cls}">${SOCIAL.map(x => `<li><a href="${x.url}" rel="noopener me" target="_blank" aria-label="${x.label} ${x.handle}">${icon(x.icon)}<span>${x.label}</span></a></li>`).join('')}</ul>`;
const T = Object.fromEntries(LANGS.map(l => [l, require(`./i18n/${l}.js`)]));
const PAGES = ['home', 'services', 'about', 'contact', 'imprint', 'privacy'];
const VERSION = Date.now().toString(36);

/* ---------- paths ---------- */
const dirOf = (lang, page) => page === 'notfound' ? '' : path.posix.join(lang, T[lang].slugs[page] || '');
const absUrl = (lang, page) => `/${dirOf(lang, page)}${dirOf(lang, page) ? '/' : ''}`.replace(/\/+/g, '/');
function href(fromDir, lang, page, hash = '') {
  if (!PREVIEW) return absUrl(lang, page) + hash;
  let rel = path.posix.relative(fromDir || '.', dirOf(lang, page) || '.');
  return (rel ? rel + '/' : '') + 'index.html' + hash;
}
function asset(fromDir, p) {
  if (!PREVIEW) return `/assets/${p}?v=${VERSION}`;
  const rel = path.posix.relative(fromDir || '.', 'assets');
  return `${rel}/${p}`;
}

/* ---------- icons (24px, stroke) ---------- */
const P = {
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  cloud: '<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5a4.25 4.25 0 01-.5 8.5H7z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3M12 14.5v2.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18.5 14.8c1.8.7 2.8 2.4 3 5.2"/>',
  building: '<path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M16 9h2a2 2 0 012 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  cart: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a2 2 0 002 1.6h8.2a2 2 0 002-1.5L21.5 8H6"/>',
  rocket: '<path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M14 4c3.5-1 6-1 6-1s0 2.5-1 6l-7 7-5-5 7-7zM9 11l-4-1 3-3h4M13 15l1 4 3-3v-4"/><circle cx="15.5" cy="8.5" r="1.3"/>',
  tool: '<path d="M14.7 6.3a4 4 0 005 5L21 13l-8 8-3-3 6.3-6.3a4 4 0 01-1.6-5.4zM3 21l6-6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-6.2 7-12a7 7 0 00-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M4 5h16v11H8l-4 4V5z"/><path d="M8 9h8M8 12.5h5"/>',
  alert: '<path d="M12 3l10 18H2L12 3z"/><path d="M12 10v4M12 17.5h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  camera: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  note: '<path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5"/><path d="M14 3c.5 2.8 2.4 4.6 5 5"/>'
};
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

const logoImg = (dir, cls = 'logo-mark', w = 96, eager = false) => `<img class="${cls}" src="${asset(dir, `logo-${w === 96 ? 96 : w}.webp`)}" alt="" width="${w}" height="${Math.round(w * 482 / 653)}" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>`;
const brand = `<span class="brand-text">EMETRIX<span> Tech</span></span>`;

/* ---------- layout ---------- */
function layout({ lang, page, dir, body, meta }) {
  const t = T[lang];
  const canonical = SITE + absUrl(lang, page);
  const alternates = page === 'notfound' ? '' : LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE + absUrl(l, page)}">`).join('\n  ') + `\n  <link rel="alternate" hreflang="x-default" href="${SITE + absUrl('de', page)}">`;
  const navItems = ['services', 'about', 'contact'].map(p => `<li><a href="${href(dir, lang, p)}"${p === page ? ' aria-current="page"' : ''}>${t.nav[p]}</a></li>`).join('');
  const langLinks = LANGS.map(l => `<a href="${href(dir, l, page === 'notfound' ? 'home' : page)}" hreflang="${l}" lang="${l}" data-lang="${l}"${l === lang ? ' aria-current="true"' : ''}><b>${T[l].short}</b><span>${T[l].label}</span></a>`).join('');
  const ld = page === 'home' ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'EMETRIX Tech', url: SITE + '/', email: EMAIL,
    description: t.meta.home.desc, image: SITE + '/assets/og.png', logo: SITE + '/assets/logo-200.png', vatID: 'DE465574206', founder: { '@type': 'Person', name: 'Abdul Naasir Obaidy' },
    address: { '@type': 'PostalAddress', streetAddress: 'Eifelstr. 66A', postalCode: '60529', addressLocality: 'Frankfurt am Main', addressCountry: 'DE' },
    areaServed: ['DE', 'EU'], sameAs: SOCIAL.map(x => x.url), knowsLanguage: ['de', 'en', 'fa'],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: t.nav.services, itemListElement: t.home.services.items.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })) }
  })}</script>` : '';
  const faqLd = page === 'home' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: t.home.faq.items.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>` : '';

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${t.dir}">
<head>
  <meta charset="utf-8">
  <script>document.documentElement.classList.add('js')</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.desc}">
  <meta name="theme-color" content="#050b16">
  <meta name="color-scheme" content="dark">
  ${page === 'notfound' ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
  ${alternates}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="EMETRIX Tech">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.desc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE}/assets/og.png">
  <meta property="og:locale" content="${t.locale}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="${asset(dir, 'favicon-48.png')}" sizes="48x48" type="image/png">
  <link rel="icon" href="${asset(dir, 'favicon-32.png')}" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="${asset(dir, 'apple-touch-icon.png')}">
  <link rel="manifest" href="${PREVIEW ? asset(dir, 'site.webmanifest') : '/site.webmanifest'}">
  <link rel="preload" href="${asset(dir, lang === 'fa' ? 'fonts/vazirmatn-arabic-wght-normal.woff2' : 'fonts/inter-latin-wght-normal.woff2').replace(/\?v=.*/, '')}" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${asset(dir, 'css/style.css')}">
  ${ld}${faqLd}
</head>
<body class="page-${page}">
  <a class="skip" href="#main">${t.skip}</a>
  <header class="site-header" id="top">
    <div class="wrap header-inner">
      <a class="brand" href="${href(dir, lang, 'home')}" aria-label="EMETRIX Tech – ${t.nav.home}">${logoImg(dir, 'logo-mark', 96, true)}${brand}</a>
      <nav class="main-nav" id="main-nav" aria-label="Main">
        <ul>${navItems}</ul>
        <div class="lang-switch" aria-label="${t.nav.lang}">
          <button class="lang-btn" type="button" aria-expanded="false" aria-haspopup="true">${icon('globe')}<span>${t.short}</span></button>
          <div class="lang-menu" role="menu">${langLinks}</div>
        </div>
        <a class="btn btn-primary btn-sm nav-cta" href="${href(dir, lang, 'contact')}">${t.nav.cta}</a>
      </nav>
      <button class="nav-toggle" type="button" aria-controls="main-nav" aria-expanded="false" aria-label="${t.nav.menu}">${icon('menu', 'i-open')}${icon('close', 'i-close')}</button>
    </div>
  </header>
  <main id="main">
${body}
  </main>
  ${footer(lang, dir)}
  <script src="${asset(dir, 'js/main.js')}" defer></script>
</body>
</html>`;
}

function footer(lang, dir) {
  const t = T[lang], f = t.footer;
  const svc = t.services.blocks.map(b => `<li><a href="${href(dir, lang, 'services', '#' + b.id)}">${b.kicker.replace(/^[^—]+—\s*/, '')}</a></li>`).join('');
  return `<footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${href(dir, lang, 'home')}">${logoImg(dir)}${brand}</a>
          <p>${f.tagline}</p>
          <a class="footer-mail" href="mailto:${EMAIL}" dir="ltr">${icon('mail')} ${EMAIL}</a>
          <p class="social-label">${f.follow}</p>${socialLinks()}
        </div>
        <div><h3>${f.servicesT}</h3><ul>${svc}</ul></div>
        <div><h3>${f.company}</h3><ul>
          <li><a href="${href(dir, lang, 'about')}">${t.nav.about}</a></li>
          <li><a href="${href(dir, lang, 'contact')}">${t.nav.contact}</a></li>
        </ul></div>
        <div><h3>${f.legal}</h3><ul>
          <li><a href="${href(dir, lang, 'imprint')}">${t.imprint.title.replace(/\s*\(.*\)/, '')}</a></li>
          <li><a href="${href(dir, lang, 'privacy')}">${t.privacy.title}</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <p>© <span data-year>2026</span> EMETRIX Tech · Frankfurt am Main. ${f.rights}</p>
        <p class="vat">${f.vat}: DE465574206</p>
        <a class="to-top" href="#top">${icon('up')} ${f.top}</a>
      </div>
    </div>
  </footer>`;
}

/* ---------- sections ---------- */
const sectionHead = (k, h, lead = '', cls = '') => `<div class="sec-head reveal ${cls}">${k ? `<p class="kicker">${k}</p>` : ''}<h2>${h}</h2>${lead ? `<p class="lead">${lead}</p>` : ''}</div>`;

function ctaBand(lang, dir, c) {
  return `<section class="cta-band">
    <div class="wrap"><div class="cta-card reveal">
      <div class="cta-glow" aria-hidden="true"></div><div class="cta-orbits" aria-hidden="true"><span></span><span></span><span></span></div>${logoImg(dir, 'cta-logo', 200, true)}
      <h2>${c.title}</h2><p>${c.text}</p>
      <div class="cta-actions">
        <a class="btn btn-primary btn-lg" href="${href(dir, lang, 'contact')}">${c.btn} ${icon('arrow', 'flip')}</a>
        ${c.alt ? `<span class="cta-alt">${c.alt} <a href="mailto:${EMAIL}" dir="ltr">${EMAIL}</a></span>` : ''}
      </div>
    </div></div>
  </section>`;
}

function pageHero(h, extra = '') {
  return `<section class="page-hero">
    <div class="hero-bg" aria-hidden="true"><div class="grid-lines"></div><div class="orb o1"></div><div class="orb o2"></div></div>
    <div class="wrap"><div class="page-hero-inner reveal"><p class="kicker">${h.kicker}</p><h1>${h.title}</h1><p class="lead">${h.lead}</p>${extra}</div></div>
  </section>`;
}

function postureTemplate(hp) {
  const rows = hp.rows.map(([n, st], i) => `<li style="--d:${i}"><span class="row-ic ${st}">${icon(st === 'ok' ? 'check' : 'alert')}</span><span class="row-n">${n}</span><span class="pill ${st}">${hp.status[st]}</span></li>`).join('');
  return `<div class="panel" aria-hidden="true">
        <div class="panel-top"><span class="dots"><i></i><i></i><i></i></span><span class="panel-url" dir="ltr">emetrix · posture</span></div>
        <div class="panel-body">
          <div class="panel-head">
            <div><p class="panel-title">${hp.title}</p><p class="panel-sub">${hp.sub}</p></div>
            <div class="ring" style="--p:92"><svg viewBox="0 0 120 120"><defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f8cff"/><stop offset="1" stop-color="#ff9a3c"/></linearGradient></defs><circle cx="60" cy="60" r="52" class="track"/><circle cx="60" cy="60" r="52" class="bar"/></svg><div class="ring-val"><b data-count="92">92</b><span>${hp.score}</span></div></div>
          </div>
          <ul class="checks">${rows}</ul>
          <div class="panel-foot"><span class="live"></span>${hp.foot}<span class="spark" dir="ltr"><svg viewBox="0 0 120 28"><path d="M0 22 L10 20 L20 23 L30 15 L40 17 L50 10 L60 13 L70 7 L80 9 L90 4 L100 6 L110 3 L120 5"/></svg></span></div>
        </div>
      </div>`;
}

function orbitStage(dir, chips) {
  return `<div class="orbit-stage" aria-hidden="true">
      <div class="stage-glow"></div>
      <svg class="orbits" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="og1" x1="0" x2="1"><stop offset="0" stop-color="#2f8cff" stop-opacity="0"/><stop offset=".5" stop-color="#2f8cff"/><stop offset="1" stop-color="#ff9a3c"/></linearGradient>
          <linearGradient id="og2" x1="1" x2="0"><stop offset="0" stop-color="#ff9a3c" stop-opacity="0"/><stop offset="1" stop-color="#cfd8e6" stop-opacity=".6"/></linearGradient>
        </defs>
        <g class="orb-ring r1"><ellipse cx="300" cy="300" rx="280" ry="96" stroke="url(#og1)"/><circle class="sat" cx="580" cy="300" r="5"/></g>
        <g class="orb-ring r2"><ellipse cx="300" cy="300" rx="250" ry="150" stroke="url(#og2)"/><circle class="sat o" cx="50" cy="300" r="4"/></g>
        <g class="orb-ring r3"><ellipse cx="300" cy="300" rx="210" ry="210" stroke="rgba(150,180,230,.14)" stroke-dasharray="2 10"/></g>
      </svg>
      <div class="stage-logo">${logoImg(dir, 'hero-logo', 720, true)}</div>
      ${chips.map((c, i) => `<div class="float-chip c${i + 1}">${icon(c[0])}<span dir="ltr">${c[1]}</span></div>`).join('')}
    </div>`;
}

function home(lang, dir) {
  const t = T[lang], h = t.home;
  const sv = h.services.items;
  const svcCard = (s, i, extra = '') => `<article class="svc-card reveal ${i === 0 ? 'svc-feature' : ''}" style="--i:${i}">
        <div class="svc-copy">
          <div class="svc-ic">${icon(s.icon)}</div>
          <h3>${s.title}</h3><p>${s.text}</p>
          <ul class="ticks">${s.points.map(p => `<li>${icon('check')}${p}</li>`).join('')}</ul>
          <a class="link-arrow" href="${href(dir, lang, 'services', '#' + t.services.blocks[i].id)}">${t.common.learnMore} ${icon('arrow', 'flip')}</a>
        </div>${extra}
      </article>`;
  return `
<section class="hero">
  <div class="hero-bg" aria-hidden="true"><div class="grid-lines"></div><div class="orb o1"></div><div class="orb o2"></div><canvas class="net" data-net></canvas></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow reveal"><span class="dot"></span>${h.hero.eyebrow}</p>
      <h1 class="reveal chrome">${h.hero.title}</h1>
      <p class="lead reveal">${h.hero.lead}</p>
      <div class="hero-actions reveal">
        <a class="btn btn-primary btn-lg" href="${href(dir, lang, 'contact')}">${h.hero.cta1} ${icon('arrow', 'flip')}</a>
        <a class="btn btn-ghost btn-lg" href="${href(dir, lang, 'services')}">${h.hero.cta2}</a>
      </div>
      <ul class="hero-badges reveal">${h.hero.badges.map(b => `<li>${icon('check')}${b}</li>`).join('')}</ul>
    </div>
    <div class="hero-visual reveal">${orbitStage(dir, [['lock', 'TLS 1.3 · HSTS'], ['shield', 'DMARC p=reject'], ['layers', 'ISO 27001'], ['eye', 'NIS2 ready']])}</div>
  </div>
  <div class="wrap"><div class="hero-stats reveal">${h.stats.map(s => `<div class="stat"><b dir="ltr"><span data-count="${s.value}">${s.value}</span>${s.unit}</b><span>${s.label}</span></div>`).join('')}</div></div>
</section>

<section class="trust">
  <div class="wrap">
    <p class="trust-label">${h.trust.label}</p>
    <div class="marquee"><ul>${[...h.trust.items, ...h.trust.items].map((x, i) => `<li${i >= h.trust.items.length ? ' aria-hidden="true"' : ''}>${x}</li>`).join('')}</ul></div>
  </div>
</section>

<section class="section" id="services">
  <div class="wrap">
    ${sectionHead(h.services.kicker, h.services.title, h.services.lead)}
    <div class="bento">
      ${svcCard(sv[0], 0, `<div class="svc-visual">${postureTemplate(h.hero.panel)}</div>`)}
      ${sv.slice(1).map((s, i) => svcCard(s, i + 1)).join('')}
    </div>
  </div>
</section>

<section class="section paper why">
  <div class="wrap why-grid">
    <div>${sectionHead(h.why.kicker, h.why.title, h.why.lead, 'left')}
      <div class="why-orbit reveal" aria-hidden="true">${logoImg(dir, 'why-logo', 200, true)}<span class="ring-a"></span><span class="ring-b"></span></div>
    </div>
    <div class="why-list">${h.why.items.map((w, i) => `<div class="why-item reveal" style="--i:${i}"><div class="why-ic">${icon(w.icon)}</div><div><h3>${w.title}</h3><p>${w.text}</p></div></div>`).join('')}</div>
  </div>
</section>

<section class="section process">
  <div class="wrap">
    ${sectionHead(h.process.kicker, h.process.title)}
    <ol class="steps">${h.process.steps.map((s, i) => `<li class="step reveal" style="--i:${i}"><span class="step-n" dir="ltr">0${i + 1}</span><h3>${s.title}</h3><p>${s.text}</p><span class="step-dur">${icon('clock')}${s.dur}</span></li>`).join('')}</ol>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="check-card reveal">
      <div class="check-copy">
        <p class="kicker">${h.check.kicker}</p><h2>${h.check.title}</h2><p class="lead">${h.check.text}</p>
        <a class="btn btn-primary btn-lg" href="${href(dir, lang, 'contact')}?topic=quick-check">${h.check.cta} ${icon('arrow', 'flip')}</a>
        <p class="note">${h.check.note}</p>
      </div>
      <ul class="check-list">${h.check.list.map((x, i) => `<li><span class="cl-n" dir="ltr">${String(i + 1).padStart(2, '0')}</span><span>${x}</span></li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section paper">
  <div class="wrap">
    ${sectionHead(h.industries.kicker, h.industries.title)}
    <div class="ind-grid">${h.industries.items.map((x, i) => `<div class="ind reveal" style="--i:${i}"><div class="ind-ic">${icon(x.icon)}</div><h3>${x.title}</h3><p>${x.text}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section faq">
  <div class="wrap faq-grid">
    ${sectionHead(h.faq.kicker, h.faq.title, '', 'left')}
    <div class="faq-list">${h.faq.items.map(f => `<details class="reveal"><summary><span>${f.q}</span>${icon('plus')}</summary><div class="faq-a"><p>${f.a}</p></div></details>`).join('')}</div>
  </div>
</section>
${ctaBand(lang, dir, h.cta)}`;
}

function services(lang, dir) {
  const t = T[lang], s = t.services;
  const toc = `<nav class="svc-toc" aria-label="${t.nav.services}">${s.blocks.map(b => `<a href="#${b.id}">${icon(b.icon)}${b.kicker.replace(/^[^—]+—\s*/, '')}</a>`).join('')}</nav>`;
  return `${pageHero(s.hero, toc)}
  ${s.blocks.map((b, i) => `<section class="section svc-block" id="${b.id}">
    <div class="wrap">
      <div class="svc-block-grid ${i % 2 ? 'alt' : ''}">
        <div class="svc-block-intro reveal">
          <div class="svc-ic lg">${icon(b.icon)}</div>
          <p class="kicker">${b.kicker}</p><h2>${b.title}</h2><p class="lead">${b.lead}</p>
          <div class="deliv"><h3>${t.common.deliverables}</h3><ul class="ticks">${b.deliverables.map(d => `<li>${icon('check')}${d}</li>`).join('')}</ul></div>
          <div class="stds"><h3>${t.common.standards}</h3><ul class="tags" dir="ltr">${b.standards.map(x => `<li>${x}</li>`).join('')}</ul></div>
        </div>
        <div class="feat-grid">${b.features.map((f, j) => `<div class="feat reveal" style="--i:${j}"><h3>${f.t}</h3><p>${f.d}</p></div>`).join('')}</div>
      </div>
    </div>
  </section>`).join('')}
  <section class="section models paper">
    <div class="wrap">
      ${sectionHead(s.models.kicker, s.models.title)}
      <div class="model-grid">${s.models.items.map((m, i) => `<div class="model reveal ${m.featured ? 'featured' : ''}" style="--i:${i}">${m.tag ? `<span class="model-tag">${m.tag}</span>` : ''}<h3>${m.name}</h3><p>${m.desc}</p><ul class="ticks">${m.points.map(p => `<li>${icon('check')}${p}</li>`).join('')}</ul><a class="btn ${m.featured ? 'btn-primary' : 'btn-ghost'}" href="${href(dir, lang, 'contact')}">${t.nav.cta}</a></div>`).join('')}</div>
    </div>
  </section>
  ${ctaBand(lang, dir, s.cta)}`;
}

function about(lang, dir) {
  const t = T[lang], a = t.about;
  return `${pageHero(a.hero)}
  <section class="section">
    <div class="wrap story-grid">
      <div class="reveal"><h2>${a.story.title}</h2>${a.story.paras.map((p, i) => `<p class="${i === a.story.paras.length - 1 ? 'pull' : ''}">${p}</p>`).join('')}</div>
      <aside class="facts reveal">${a.facts.map(f => `<div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join('')}</aside>
    </div>
  </section>
  <section class="section paper">
    <div class="wrap">
      ${sectionHead('', a.values.title)}
      <div class="values">${a.values.items.map((v, i) => `<div class="value reveal" style="--i:${i}"><div class="why-ic">${icon(v.icon)}</div><h3>${v.title}</h3><p>${v.text}</p></div>`).join('')}</div>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <div class="founder reveal">
        <div class="founder-mark" aria-hidden="true">${logoImg(dir, 'founder-logo', 200)}</div>
        <div><p class="kicker">${a.founder.kicker}</p><h2>${a.founder.name}</h2><p class="role">${a.founder.role}</p><p>${a.founder.text}</p></div>
      </div>
    </div>
  </section>
  ${ctaBand(lang, dir, a.cta)}`;
}

function contact(lang, dir) {
  const t = T[lang], c = t.contact, f = c.form, i = c.info;
  const consent = f.consent.replace('{privacy}', href(dir, lang, 'privacy'));
  return `${pageHero(c.hero)}
  <section class="section contact-sec">
    <div class="wrap contact-grid">
      <form class="contact-form reveal" data-contact data-email="${EMAIL}" data-subject="${f.subject}" novalidate>
        <div class="row2">
          <label><span>${f.name} *</span><input name="name" autocomplete="name" required></label>
          <label><span>${f.company}</span><input name="company" autocomplete="organization"></label>
        </div>
        <div class="row2">
          <label><span>${f.email} *</span><input name="email" type="email" autocomplete="email" required dir="ltr"></label>
          <label><span>${f.phone}</span><input name="phone" type="tel" autocomplete="tel" dir="ltr"></label>
        </div>
        <fieldset class="topics"><legend>${f.topic}</legend>${f.topics.map((x, k) => `<label class="chip"><input type="radio" name="topic" value="${x}"${k === 0 ? ' checked' : ''}${k === 4 ? ' data-quick' : ''}><span>${x}</span></label>`).join('')}</fieldset>
        <label><span>${f.message} *</span><textarea name="message" rows="6" required placeholder="${f.placeholder}"></textarea></label>
        <label class="consent"><input type="checkbox" name="consent" required><span>${consent}</span></label>
        <p class="form-msg" role="status" aria-live="polite" data-ok="${f.success} ${EMAIL}" data-err="${f.required}"></p>
        <button class="btn btn-primary btn-lg" type="submit">${f.submit} ${icon('arrow', 'flip')}</button>
        <p class="note">${f.note}</p>
      </form>
      <aside class="contact-side">
        <div class="info-card reveal">
          <h2>${i.title}</h2>
          <dl>
            <div>${icon('mail')}<dt>${i.email}</dt><dd><a href="mailto:${EMAIL}" dir="ltr">${EMAIL}</a></dd></div>
            <div>${icon('pin')}<dt>${i.location}</dt><dd>${i.locationV}</dd></div>
            <div>${icon('clock')}<dt>${i.hours}</dt><dd>${i.hoursV}</dd></div>
            <div>${icon('chat')}<dt>${i.langs}</dt><dd>${i.langsV}</dd></div>
          </dl>
        </div>
        <div class="info-card reveal"><h3>${t.footer.follow}</h3>${socialLinks('social social-lg')}</div>
        <div class="info-card alert reveal">${icon('alert')}<div><h3>${i.emergency}</h3><p>${i.emergencyV}</p></div></div>
        <div class="info-card reveal"><h3>${c.next.title}</h3><ol class="mini-steps">${c.next.steps.map(s => `<li>${s}</li>`).join('')}</ol></div>
      </aside>
    </div>
  </section>`;
}

function legal(lang, dir, key) {
  const t = T[lang], d = t[key];
  const body = d.body.replace(/\{email\}/g, EMAIL).replace('{deImprint}', href(dir, 'de', 'imprint')).replace('{dePrivacy}', href(dir, 'de', 'privacy'));
  return `<section class="page-hero slim"><div class="hero-bg" aria-hidden="true"><div class="grid-lines"></div><div class="orb o1"></div></div><div class="wrap"><h1>${d.title}</h1></div></section>
  <section class="section legal"><div class="wrap"><article class="prose">${body}</article></div></section>`;
}

function notfound(lang, dir) {
  const n = T[lang].notfound;
  return `<section class="page-hero nf"><div class="hero-bg" aria-hidden="true"><div class="grid-lines"></div><div class="orb o1"></div><div class="orb o2"></div></div>
  <div class="wrap"><p class="nf-code" dir="ltr">404</p><h1>${n.title}</h1><p class="lead">${n.text}</p>
  <div class="hero-actions">${LANGS.map(l => `<a class="btn ${l === lang ? 'btn-primary' : 'btn-ghost'}" href="${href(dir, l, 'home')}" lang="${l}">${T[l].notfound.btn}</a>`).join('')}</div></div></section>`;
}

/* ---------- write ---------- */
function write(rel, content) {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
fs.rmSync(OUT, { recursive: true, force: true });

const RENDER = { home, services, about, contact, imprint: (l, d) => legal(l, d, 'imprint'), privacy: (l, d) => legal(l, d, 'privacy') };
for (const lang of LANGS) {
  for (const page of PAGES) {
    const dir = dirOf(lang, page);
    write(path.join(dir, 'index.html'), layout({ lang, page, dir, meta: T[lang].meta[page], body: RENDER[page](lang, dir) }));
  }
}
// 404 (German first, links to all languages)
write('404.html', layout({ lang: 'de', page: 'notfound', dir: '', meta: T.de.meta.notfound, body: notfound('de', '') }));

// Root: German default, honours a remembered language choice
const rootTarget = l => PREVIEW ? `${l}/index.html` : `/${l}/`;
write('index.html', `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><title>EMETRIX Tech</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="${SITE}/de/">
${LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE}/${l}/">`).join('')}
<link rel="alternate" hreflang="x-default" href="${SITE}/de/">
<script>(function(){var l='de';try{var s=localStorage.getItem('emx-lang');if(s==='en'||s==='fa')l=s;}catch(e){}location.replace(${PREVIEW ? "l+'/index.html'" : "'/'+l+'/'"});})();</script>
<meta http-equiv="refresh" content="0; url=${rootTarget('de')}">
<style>body{background:#081522;color:#e8f0f8;font:16px system-ui;display:grid;place-items:center;height:100vh;margin:0}a{color:#38e1ff}</style>
</head><body><p><a href="${rootTarget('de')}">Deutsch</a> · <a href="${rootTarget('en')}">English</a> · <a href="${rootTarget('fa')}">فارسی</a></p></body></html>`);

// assets
const copyDir = (src, dst) => { fs.mkdirSync(dst, { recursive: true }); for (const e of fs.readdirSync(src, { withFileTypes: true })) { const s = path.join(src, e.name), d = path.join(dst, e.name); e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d); } };
copyDir(path.join(__dirname, 'assets'), path.join(OUT, 'assets'));
write(PREVIEW ? 'assets/site.webmanifest' : 'site.webmanifest', JSON.stringify({ name: 'EMETRIX Tech', short_name: 'EMETRIX', start_url: '/de/', display: 'standalone', background_color: '#050b16', theme_color: '#050b16', icons: [{ src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 2));

if (!PREVIEW) {
  const today = new Date().toISOString().slice(0, 10);
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.flatMap(l => PAGES.map(p => `  <url><loc>${SITE}${absUrl(l, p)}</loc><lastmod>${today}</lastmod><priority>${p === 'home' ? '1.0' : ['imprint', 'privacy'].includes(p) ? '0.3' : '0.8'}</priority>
${LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a}" href="${SITE}${absUrl(a, p)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${absUrl('de', p)}"/>
  </url>`)).join('\n')}
</urlset>`);
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
  write('_headers', `/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self' mailto:; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/.well-known/security.txt
  Content-Type: text/plain; charset=utf-8
`);
  const exp = new Date(Date.now() + 365 * 864e5).toISOString().replace(/\.\d+Z$/, '.000Z');
  write('.well-known/security.txt', `Contact: mailto:${EMAIL}\nExpires: ${exp}\nPreferred-Languages: de, en, fa\nCanonical: ${SITE}/.well-known/security.txt\n`);
}
console.log(`Built ${LANGS.length * PAGES.length + 2} pages -> ${path.relative(process.cwd(), OUT)}`);
