module.exports = {
  lang: 'en', dir: 'ltr', locale: 'en_US', label: 'English', short: 'EN',
  slugs: { home: '', services: 'services', about: 'about', contact: 'contact', imprint: 'imprint', privacy: 'privacy' },
  skip: 'Skip to content',
  nav: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact', cta: 'Book a consultation', menu: 'Menu', lang: 'Language' },
  meta: {
    home: { title: 'EMETRIX Tech — Cybersecurity, IT Services & Web Development in Frankfurt', desc: 'Independent cybersecurity, IT and web services from Frankfurt am Main. Security audits, NIS2 readiness, managed IT and high-performance websites, delivered with structure.' },
    services: { title: 'Services — Cybersecurity, IT, Web Development & Cloud | EMETRIX Tech', desc: 'Security audits, penetration testing, NIS2 & ISO 27001 readiness, managed IT, Microsoft 365, accessible websites and cloud infrastructure: all from one partner.' },
    about: { title: 'About — EMETRIX Tech, Frankfurt am Main', desc: 'Independent, structured, transparent: how EMETRIX Tech works and why companies trust us with their IT security.' },
    contact: { title: 'Contact — Book a free consultation | EMETRIX Tech', desc: 'Free initial consultation on cybersecurity, IT or web projects. Advice in German, English and Persian, in Frankfurt and remote.' },
    imprint: { title: 'Imprint | EMETRIX Tech', desc: 'Legal notice of EMETRIX Tech.' },
    privacy: { title: 'Privacy Policy | EMETRIX Tech', desc: 'How personal data is processed on emetrix-tech.com.' },
    notfound: { title: 'Page not found | EMETRIX Tech', desc: 'This page does not exist.' }
  },
  common: { learnMore: 'Learn more', allServices: 'View all services', deliverables: 'What you get', standards: 'Standards & frameworks', step: 'Step', typical: 'Typical duration' },

  home: {
    hero: {
      eyebrow: 'Cybersecurity · IT Services · Web Development',
      title: 'Secure IT.<br><em>Delivered</em> with structure.',
      lead: 'EMETRIX Tech protects, operates and builds the digital infrastructure of businesses: independently, transparently and to recognised standards. From Frankfurt am Main, for all of Europe.',
      cta1: 'Free consultation', cta2: 'Explore services',
      badges: ['GDPR compliant', 'EU hosting', 'Advice in DE · EN · FA'],
      panel: {
        title: 'Security Posture', sub: 'Sample assessment', score: 'Score',
        rows: [['Patch management', 'ok'], ['MFA on all accounts', 'ok'], ['3-2-1 backup & restore test', 'ok'], ['TLS & security headers', 'ok'], ['Phishing resilience', 'warn']],
        status: { ok: 'Verified', warn: 'Action' },
        foot: 'Live monitoring active'
      }
    },
    trust: { label: 'We work to recognised standards', items: ['GDPR', 'BSI IT-Grundschutz', 'ISO/IEC 27001', 'NIS2', 'OWASP Top 10', 'WCAG 2.2 / EAA'] },
    services: {
      kicker: 'Services', title: 'Everything that makes your IT secure and capable.',
      lead: 'Four areas of expertise, one point of contact. We treat security, operations and development as one system instead of separate silos.',
      items: [
        { icon: 'shield', title: 'Cybersecurity', text: 'Security audits, penetration tests and vulnerability management. We find the risks before attackers do.', points: ['Security audits & pentests', 'NIS2 & ISO 27001 readiness', 'Incident response'] },
        { icon: 'server', title: 'IT Services', text: 'Reliable IT operations for small and mid-sized businesses: workplaces, networks, backups, Microsoft 365.', points: ['Managed IT & support', 'Network & endpoint security', 'Backup & continuity planning'] },
        { icon: 'code', title: 'Web Development', text: 'Fast, accessible and secure websites and web applications, from concept to operation.', points: ['Websites & web apps', 'Accessibility (EAA / WCAG)', 'Performance & SEO'] },
        { icon: 'cloud', title: 'Cloud & DevOps', text: 'Modern infrastructure that scales: cloud migration, automation and hardened deployments.', points: ['Cloudflare, AWS & Azure', 'CI/CD & infrastructure as code', 'Monitoring & hardening'] }
      ]
    },
    why: {
      kicker: 'Why EMETRIX', title: 'Technical depth. Clear communication.',
      lead: 'Good security is not a product you buy. It is the result of careful work. This is how we work:',
      items: [
        { icon: 'compass', title: 'Vendor-independent', text: 'We recommend what fits you, not what earns the highest commission. No licence lock-in, no hidden dependencies.' },
        { icon: 'layers', title: 'Structured & documented', text: 'Every project follows a clear method with traceable results. You get documentation your auditor understands too.' },
        { icon: 'eye', title: 'Transparent', text: 'Fixed quotes, clear milestones, honest assessments. You always know what we are working on and why.' },
        { icon: 'globe', title: 'Multilingual', text: 'Consulting and documentation in German, English and Persian, for international teams and founders.' }
      ]
    },
    stats: [
      { value: '24', unit: 'h', label: 'Response time on business days' },
      { value: '100', unit: '%', label: 'Data processing in the EU wherever possible' },
      { value: '3', unit: '', label: 'Languages: German, English, Persian' },
      { value: '0', unit: '', label: 'Vendor lock-ins or licence commissions' }
    ],
    process: {
      kicker: 'Approach', title: 'From analysis to secure operations in four steps.',
      steps: [
        { title: 'Analyse', text: 'We understand your business, systems and risks. Inventory, interviews, technical review.', dur: '1–2 weeks' },
        { title: 'Plan', text: 'You receive a prioritised action plan with effort, cost and impact, explained in plain language.', dur: '1 week' },
        { title: 'Implement', text: 'We deliver in clear stages, tested and documented. Your day-to-day business keeps running.', dur: 'per project' },
        { title: 'Operate', text: 'Monitoring, updates and regular reviews keep your security level high over time.', dur: 'ongoing' }
      ]
    },
    check: {
      kicker: 'Starter package', title: 'Security Quick-Check',
      text: 'The fastest way to a clear picture of your IT security. Within days you get a well-founded assessment and concrete next steps.',
      list: ['External attack surface: domains, email (SPF/DKIM/DMARC), TLS, exposed services', 'Review of accounts, MFA and permissions', 'Backup and recovery capability', 'Gap check against NIS2 and BSI baseline requirements', 'Report with traffic-light rating and action plan', 'Debrief session with your team'],
      cta: 'Request a Quick-Check', note: 'Fixed price after a short call.'
    },
    industries: {
      kicker: 'Who we work for', title: 'For businesses that are responsible for data.',
      items: [
        { icon: 'building', title: 'SMEs', text: 'Professional IT security without an in-house security department.' },
        { icon: 'briefcase', title: 'Law firms & medical practices', text: 'Protecting sensitive client and patient data under professional rules and GDPR.' },
        { icon: 'cart', title: 'E-commerce', text: 'Fast, secure shops with a stable checkout and clean tracking.' },
        { icon: 'rocket', title: 'Startups & scale-ups', text: 'Security by design from day one, ready for investors and enterprise customers.' },
        { icon: 'tool', title: 'Trades & service providers', text: 'Reliable IT and a professional web presence that wins customers.' },
        { icon: 'globe', title: 'International teams', text: 'Multilingual advice for companies between Germany, Europe and the Middle East.' }
      ]
    },
    faq: {
      kicker: 'FAQ', title: 'Frequently asked questions',
      items: [
        { q: 'Does the NIS2 directive apply to me?', a: 'NIS2 significantly widens the range of regulated companies, mainly those with 50+ employees or €10M+ turnover in certain sectors. Smaller companies are often affected indirectly too, because their customers require security evidence from suppliers. We clarify your situation in the first call.' },
        { q: 'What does a project with EMETRIX Tech cost?', a: 'It depends on scope. After a free consultation you receive a written quote with a fixed price or a clearly defined hour budget. No surprises.' },
        { q: 'Do you work remotely?', a: 'Yes. Most services are delivered fully remotely and securely. For on-site work we are quickly with you in the Rhine-Main area, and Germany-wide by arrangement.' },
        { q: 'What if we have an active security incident?', a: 'Email us immediately with the subject "EMERGENCY". We help with containment, analysis and recovery, and support you with reporting duties under GDPR and NIS2.' },
        { q: 'Do you build accessible websites?', a: 'Yes. Since June 2025 the European Accessibility Act (in Germany: BFSG) applies to many online services. We build to WCAG 2.2 and audit existing sites for conformance.' },
        { q: 'Which languages do you work in?', a: 'German, English and Persian (Farsi/Dari). We also create documentation and websites in these languages.' }
      ]
    },
    cta: { title: 'Let’s talk about your IT.', text: 'In a free 30-minute consultation we assess your situation and show the most important next steps, with no obligation.', btn: 'Book a consultation', alt: 'or write to' }
  },

  services: {
    hero: { kicker: 'Services', title: 'Security, operations and development, <em>from one partner</em>.', lead: 'Whether a single audit or a long-term partnership, our services are modular and fit together seamlessly.' },
    blocks: [
      {
        id: 'cybersecurity', icon: 'shield', kicker: '01 — Cybersecurity', title: 'Spot risks before they cause damage.',
        lead: 'Attacks on small and mid-sized companies keep rising, mostly through known, avoidable weaknesses. We make your risks visible and close gaps systematically.',
        features: [
          { t: 'Security audits', d: 'Structured review of infrastructure, configuration and processes based on BSI IT-Grundschutz and CIS Benchmarks.' },
          { t: 'Penetration testing', d: 'Authorised attack simulations against web applications, external infrastructure and internal networks, with a traceable report.' },
          { t: 'Vulnerability management', d: 'Continuous scanning, risk-based prioritisation and guided remediation instead of endless reports.' },
          { t: 'NIS2 & ISO 27001 readiness', d: 'Gap analysis, policies, risk management and evidence, so you pass audits and customer requirements with confidence.' },
          { t: 'Email & identity security', d: 'SPF, DKIM, DMARC, MFA, conditional access and least privilege: the most effective protections first.' },
          { t: 'Awareness & incident response', d: 'Practical training for your team, plus emergency plans and hands-on support when it counts.' }
        ],
        deliverables: ['Management summary with risk rating', 'Detailed technical report with evidence', 'Prioritised action plan', 'Retest after remediation'],
        standards: ['BSI IT-Grundschutz', 'ISO/IEC 27001', 'NIS2', 'OWASP', 'CIS Controls']
      },
      {
        id: 'it-services', icon: 'server', kicker: '02 — IT Services', title: 'IT that just works, and stays secure.',
        lead: 'We handle planning, setup and operation of your IT environment so you can focus on your business.',
        features: [
          { t: 'Managed IT & support', d: 'A dedicated contact, fast remote help and predictable monthly costs.' },
          { t: 'Microsoft 365 & Google Workspace', d: 'Setup, migration, licence optimisation and secure best-practice configuration.' },
          { t: 'Network & Wi-Fi', d: 'Segmented networks, firewalls, VPN and guest Wi-Fi: stable, fast and secured.' },
          { t: 'Endpoint management', d: 'Central management, encryption and protection for every device, including home office.' },
          { t: 'Backup & disaster recovery', d: '3-2-1 backup strategy with immutable copies and regular restore tests.' },
          { t: 'IT documentation', d: 'Complete, current documentation of your systems, access and procedures.' }
        ],
        deliverables: ['Inventory of all systems and licences', 'Hardened baseline configuration', 'Emergency handbook', 'Monthly status report'],
        standards: ['BSI IT-Grundschutz', 'CIS Benchmarks', 'Microsoft Secure Score', 'ITIL principles']
      },
      {
        id: 'web', icon: 'code', kicker: '03 — Web Development', title: 'Websites that convince: fast, secure, accessible.',
        lead: 'Your website is often the first contact with customers. We build digital products that look great, load fast and meet current legal requirements.',
        features: [
          { t: 'Company websites', d: 'Custom design, multilingual, easy-to-maintain content and a strong brand presence.' },
          { t: 'Web applications', d: 'Portals, dashboards and internal tools with modern frameworks and clean architecture.' },
          { t: 'E-commerce', d: 'Online shops with secure checkout, payment integration and connections to your systems.' },
          { t: 'Accessibility (EAA)', d: 'Development and audits to WCAG 2.2, for wider reach and legal certainty.' },
          { t: 'Performance & SEO', d: 'Top Core Web Vitals, structured data and technical search engine optimisation.' },
          { t: 'Security & maintenance', d: 'Security headers, regular updates, monitoring and backups, looked after continuously.' }
        ],
        deliverables: ['Design system & prototype', 'Responsive, multilingual website', 'Accessibility and performance report', 'Handover and operations documentation'],
        standards: ['WCAG 2.2', 'EAA / BFSG', 'Core Web Vitals', 'OWASP ASVS', 'GDPR']
      },
      {
        id: 'cloud', icon: 'cloud', kicker: '04 — Cloud & DevOps', title: 'Infrastructure that grows with you.',
        lead: 'We design and automate cloud environments that are secure, cost-efficient and reproducible.',
        features: [
          { t: 'Cloud migration', d: 'Step-by-step moves to the cloud, focused on EU regions, data protection and resilience.' },
          { t: 'Cloudflare & edge', d: 'DNS, WAF, DDoS protection, zero-trust access and global delivery for top performance.' },
          { t: 'CI/CD pipelines', d: 'Automated testing and deployment with GitHub Actions or GitLab CI: faster and error-free.' },
          { t: 'Infrastructure as code', d: 'Terraform and containers for traceable, versioned infrastructure.' },
          { t: 'Monitoring & observability', d: 'Metrics, logs and alerts so problems are caught before users notice.' },
          { t: 'Cost optimisation', d: 'Transparent cloud spend through rightsizing, reservations and clear ownership.' }
        ],
        deliverables: ['Architecture diagram & concept', 'Versioned infrastructure codebase', 'Automated deployment pipeline', 'Monitoring dashboard'],
        standards: ['Zero Trust', 'CIS Benchmarks', 'Cloud Security Alliance', 'BSI C5']
      }
    ],
    models: {
      kicker: 'Engagement', title: 'Three ways to work with us.',
      items: [
        { name: 'Project', desc: 'Clearly scoped work with a fixed price and defined results.', points: ['Audit, pentest, website, migration', 'Fixed schedule and price', 'Sign-off with documentation'] },
        { name: 'Retainer', desc: 'Ongoing support with a fixed hour budget and guaranteed availability.', points: ['Managed IT & security', 'Monthly reporting', 'Priority support'], featured: true, tag: 'Popular' },
        { name: 'Advisory', desc: 'Strategic guidance for decisions, tenders and audits.', points: ['vCISO / security advisory', 'Technical due diligence', 'Second opinion'] }
      ]
    },
    cta: { title: 'Which service fits you?', text: 'We give honest advice, even if it means you need less than you thought.', btn: 'Get in touch' }
  },

  about: {
    hero: { kicker: 'About', title: 'Independent IT expertise from <em>Frankfurt am Main</em>.', lead: 'EMETRIX Tech brings cybersecurity, IT operations and web development together into one well-designed whole, for companies that take their digital infrastructure seriously.' },
    story: {
      title: 'Why EMETRIX Tech exists',
      paras: [
        'Many companies face the same problem: their IT grew over years, responsibilities are scattered, and nobody has the full picture. At the same time, the demands keep rising, from cyberattacks, from regulation like NIS2 and GDPR, and from customers who ask for proof of security.',
        'EMETRIX Tech was founded to solve exactly this, with technical depth, a structured method and the ability to explain complex topics clearly. We do not see security, operations and development as separate. We see one connected system.',
        'Our standard: every recommendation is justified, every measure documented, every invoice traceable.'
      ]
    },
    values: {
      title: 'What we stand for',
      items: [
        { icon: 'lock', title: 'Confidentiality', text: 'Your data and the findings from our reviews stay with you. We work under NDA on request.' },
        { icon: 'compass', title: 'Independence', text: 'No vendor ties, no commissions. Our recommendations follow your needs alone.' },
        { icon: 'layers', title: 'Thoroughness', text: 'We work to recognised standards and document so that results can be verified.' },
        { icon: 'users', title: 'Partnership', text: 'We explain instead of complicating, and enable your team to practise security every day.' }
      ]
    },
    founder: { kicker: 'Owner', name: 'Abdul Naasir Obaidy', role: 'Founder & Owner, EMETRIX Tech', text: 'As the owner, I take personal responsibility for every project, from the first analysis to handover. For specialised tasks I work with a network of experienced professionals who share the same quality standards.' },
    facts: [
      { k: 'Location', v: 'Frankfurt am Main' },
      { k: 'Coverage', v: 'Rhine-Main, Germany-wide & remote' },
      { k: 'Languages', v: 'German · English · Persian' },
      { k: 'Focus', v: 'Security · IT · Web · Cloud' }
    ],
    cta: { title: 'Let’s get to know each other.', text: 'A short conversation is enough to see whether we are a good fit.', btn: 'Get in touch' }
  },

  contact: {
    hero: { kicker: 'Contact', title: 'Tell us about <em>your project</em>.', lead: 'We reply within 24 hours on business days. The first consultation is free and without obligation.' },
    form: {
      name: 'Name', company: 'Company', email: 'Email', phone: 'Phone (optional)', topic: 'Topic', message: 'Your message', placeholder: 'Briefly describe your situation and your goal …',
      topics: ['Cybersecurity', 'IT services', 'Web development', 'Cloud & DevOps', 'Security Quick-Check', 'Other'],
      consent: 'I have read the <a href="{privacy}">privacy policy</a> and agree that my details are processed to answer my request.',
      submit: 'Prepare message', note: 'Clicking opens your email app with a pre-filled message. No data is stored on this website.',
      success: 'Your email app has been opened. If not, write to us directly at', required: 'Please fill in all required fields and accept the privacy policy.',
      subject: 'Enquiry via emetrix-tech.com'
    },
    info: {
      title: 'Direct contact',
      email: 'Email', location: 'Location', locationV: 'Frankfurt am Main, Germany<br>On-site meetings by appointment', hours: 'Availability', hoursV: 'Mon–Fri, 9:00–18:00 CET', langs: 'Languages', langsV: 'German, English, Persian',
      emergency: 'Active security incident?', emergencyV: 'Email us with the subject "EMERGENCY" and we will prioritise your request.'
    },
    next: { title: 'What happens next', steps: ['We review your request and reply within 24 hours.', 'In a 30-minute call we clarify goals and scope.', 'You receive a written fixed-price quote.'] }
  },

  imprint: {
    title: 'Imprint',
    body: `
<p class="muted">This is a translation for convenience. The <a href="{deImprint}">German version</a> is legally binding.</p>
<h2>Information pursuant to § 5 DDG (German Digital Services Act)</h2>
<p>EMETRIX Tech<br>Owner: Abdul Naasir Obaidy<br>Eifelstr. 66A<br>60529 Frankfurt am Main<br>Germany</p>
<h2>Contact</h2>
<p>Email: <a href="mailto:{email}">{email}</a></p>
<h2>VAT ID</h2>
<p>VAT identification number pursuant to § 27a of the German VAT Act:<br>DE465574206</p>
<h2>Responsible for content pursuant to § 18 (2) MStV</h2>
<p>Abdul Naasir Obaidy, Eifelstr. 66A, 60529 Frankfurt am Main</p>
<h2>Consumer dispute resolution</h2>
<p>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.</p>
<h2>Liability for content and links</h2>
<p>As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor third-party information transmitted or stored, or to investigate circumstances indicating illegal activity. Our site contains links to external third-party websites over whose content we have no control; the respective provider is always responsible for linked content. We will remove any infringing content or links as soon as we become aware of them.</p>
<h2>Copyright</h2>
<p>Content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright require written consent of the respective author.</p>`
  },

  privacy: {
    title: 'Privacy Policy',
    body: `
<p class="muted">Last updated: November 2026. This is a translation for convenience; the <a href="{dePrivacy}">German version</a> is legally binding.</p>
<h2>1. Controller</h2>
<p>The controller for data processing on this website under the General Data Protection Regulation (GDPR) is:<br>EMETRIX Tech, owner Abdul Naasir Obaidy, Eifelstr. 66A, 60529 Frankfurt am Main, Germany<br>Email: <a href="mailto:{email}">{email}</a></p>
<h2>2. Principles</h2>
<p>We only process personal data as far as needed to provide a working website and our content and services. This website uses <strong>no tracking cookies, no analytics tools and no advertising pixels</strong>. Fonts are loaded locally from our own server; no connection is made to Google Fonts or other font providers.</p>
<h2>3. Hosting and content delivery (Cloudflare)</h2>
<p>This website is served via Cloudflare Pages and delivered and protected by the network of Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. When you visit, Cloudflare processes technically necessary data such as IP address, date and time of access, requested page, referrer URL and browser and operating system information, to deliver the website securely and efficiently and to fend off attacks (e.g. DDoS).</p>
<p>The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is the secure, fast and stable provision of our website. Cloudflare is certified under the EU-U.S. Data Privacy Framework, and standard contractual clauses are in place. A data processing agreement exists with Cloudflare. More: <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener">cloudflare.com/privacypolicy</a>.</p>
<h2>4. Contact by email</h2>
<p>If you contact us by email, including via the contact form, which only opens your own email app with a pre-filled message, we process your details (e.g. name, email address, company, message) to handle your request. The form itself does not store or transmit any data to our server.</p>
<p>The legal basis is Art. 6(1)(b) GDPR where your request relates to entering into or performing a contract, otherwise Art. 6(1)(f) GDPR. We delete your data once it is no longer needed and no statutory retention obligations apply.</p>
<h2>5. Local browser storage</h2>
<p>To remember your language choice, the website may create an entry in your browser's local storage. It is never sent to us and can be deleted at any time in your browser settings. The legal basis is § 25(2) no. 2 TDDDG, as this storage is strictly necessary for the service you requested.</p>
<h2>6. Your rights</h2>
<p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object (Art. 21). Contact us at the email address above.</p>
<p>You also have the right to lodge a complaint with a supervisory authority. Ours is: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Germany.</p>
<h2>7. TLS encryption</h2>
<p>For security, this website uses TLS encryption, shown by "https://" in your browser's address bar.</p>
<h2>8. Changes</h2>
<p>We update this policy whenever changes to the website or the law require it.</p>`
  },

  notfound: { title: 'Page not found', text: 'The page you requested does not exist or has moved.', btn: 'Back to home' },

  footer: {
    tagline: 'Independent cybersecurity, IT and web services from Frankfurt am Main.',
    company: 'Company', legal: 'Legal', servicesT: 'Services',
    rights: 'All rights reserved.', vat: 'VAT ID', top: 'Back to top'
  }
};
