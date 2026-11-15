# EMETRIX Tech — Website

Trilingual static website (Deutsch default · English · فارسی RTL) for emetrix-tech.com.
No framework, no tracking, no external requests. Fonts are self-hosted (GDPR-safe).

## Structure
- `src/i18n/de.js`, `en.js`, `fa.js` — all texts. Edit content here.
- `src/build.js` — templates + generator.
- `src/assets/` — CSS, JS, fonts, icons, share image.
- `dist/` — the generated website (this is what gets deployed).

## Build
    npm run build        # -> dist/  (clean URLs for Cloudflare Pages)
    npm run preview      # -> preview/ (relative links, open preview/index.html)

## Deploy on Cloudflare Pages (via GitHub)
1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose the repo.
3. Build command: `npm run build` · Build output directory: `dist`
4. Custom domains → add `emetrix-tech.com` and `www.emetrix-tech.com`.
5. SSL/TLS → Edge Certificates: enable "Always Use HTTPS", minimum TLS 1.2, HSTS (already sent by `_headers`).

## Before going live
- The contact address is `contact@emetrix-tech.com` (set as `EMAIL` in `src/build.js`). Make sure this mailbox exists.
- `_headers` sets strict security headers (CSP, HSTS preload, frame-ancestors none).
- Legal texts (Impressum, Datenschutz) are a solid template, not legal advice — have them checked.
