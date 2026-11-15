module.exports = {
  lang: 'de', dir: 'ltr', locale: 'de_DE', label: 'Deutsch', short: 'DE',
  slugs: { home: '', services: 'leistungen', about: 'ueber-uns', contact: 'kontakt', imprint: 'impressum', privacy: 'datenschutz' },
  skip: 'Zum Inhalt springen',
  nav: { home: 'Start', services: 'Leistungen', about: 'Über uns', contact: 'Kontakt', cta: 'Erstgespräch buchen', menu: 'Menü', lang: 'Sprache' },
  meta: {
    home: { title: 'EMETRIX Tech — Cybersecurity, IT-Services & Webentwicklung in Frankfurt', desc: 'Unabhängige Cybersecurity-, IT- und Web-Services aus Frankfurt am Main. Sicherheitsaudits, NIS2-Readiness, Managed IT und hochperformante Websites – strukturiert umgesetzt.' },
    services: { title: 'Leistungen — Cybersecurity, IT-Services, Webentwicklung & Cloud | EMETRIX Tech', desc: 'Security-Audits, Penetrationstests, NIS2 & ISO 27001 Readiness, Managed IT, Microsoft 365, barrierefreie Websites und Cloud-Infrastruktur – alles aus einer Hand.' },
    about: { title: 'Über uns — EMETRIX Tech, Frankfurt am Main', desc: 'Unabhängig, strukturiert, transparent: Wie EMETRIX Tech arbeitet und warum Unternehmen uns ihre IT-Sicherheit anvertrauen.' },
    contact: { title: 'Kontakt — Erstgespräch vereinbaren | EMETRIX Tech', desc: 'Kostenloses Erstgespräch zu Cybersecurity, IT oder Webprojekten. Beratung auf Deutsch, Englisch und Persisch – in Frankfurt und remote.' },
    imprint: { title: 'Impressum | EMETRIX Tech', desc: 'Impressum und Anbieterkennzeichnung von EMETRIX Tech.' },
    privacy: { title: 'Datenschutzerklärung | EMETRIX Tech', desc: 'Informationen zur Verarbeitung personenbezogener Daten auf emetrix-tech.com.' },
    notfound: { title: 'Seite nicht gefunden | EMETRIX Tech', desc: 'Diese Seite existiert nicht.' }
  },
  common: { learnMore: 'Mehr erfahren', allServices: 'Alle Leistungen ansehen', deliverables: 'Was Sie erhalten', standards: 'Standards & Frameworks', step: 'Schritt', typical: 'Typische Dauer' },

  home: {
    hero: {
      eyebrow: 'Cybersecurity · IT-Services · Webentwicklung',
      title: 'Sichere IT.<br><em>Strukturiert</em> umgesetzt.',
      lead: 'EMETRIX Tech schützt, betreibt und entwickelt die digitale Infrastruktur von Unternehmen – unabhängig, nachvollziehbar und nach anerkannten Standards. Aus Frankfurt am Main, für ganz Europa.',
      cta1: 'Kostenloses Erstgespräch', cta2: 'Leistungen entdecken',
      badges: ['DSGVO-konform', 'Hosting in der EU', 'Beratung auf DE · EN · FA'],
      panel: {
        title: 'Security Posture', sub: 'Beispielhafte Auswertung', score: 'Score',
        rows: [['Patch-Management', 'ok'], ['MFA für alle Konten', 'ok'], ['Backup 3-2-1 & Restore-Test', 'ok'], ['TLS & Security-Header', 'ok'], ['Phishing-Resilienz', 'warn']],
        status: { ok: 'Geprüft', warn: 'Maßnahme' },
        foot: 'Live-Monitoring aktiv'
      }
    },
    trust: { label: 'Wir arbeiten nach anerkannten Standards', items: ['DSGVO', 'BSI IT-Grundschutz', 'ISO/IEC 27001', 'NIS2', 'OWASP Top 10', 'WCAG 2.2 / BFSG'] },
    services: {
      kicker: 'Leistungen', title: 'Alles, was Ihre IT sicher und leistungsfähig macht.',
      lead: 'Vier Kompetenzfelder, ein Ansprechpartner. Wir denken Sicherheit, Betrieb und Entwicklung zusammen – statt sie in Silos zu verteilen.',
      items: [
        { icon: 'shield', title: 'Cybersecurity', text: 'Sicherheitsaudits, Penetrationstests und Schwachstellenmanagement – wir finden Risiken, bevor Angreifer es tun.', points: ['Security-Audits & Pentests', 'NIS2- & ISO-27001-Readiness', 'Incident Response'] },
        { icon: 'server', title: 'IT-Services', text: 'Zuverlässiger IT-Betrieb für kleine und mittlere Unternehmen: Arbeitsplätze, Netzwerke, Backups, Microsoft 365.', points: ['Managed IT & Support', 'Netzwerk & Endpoint-Security', 'Backup & Notfallplanung'] },
        { icon: 'code', title: 'Webentwicklung', text: 'Schnelle, barrierefreie und sichere Websites und Web-Anwendungen – vom Konzept bis zum Betrieb.', points: ['Websites & Web-Apps', 'Barrierefreiheit nach BFSG', 'Performance & SEO'] },
        { icon: 'cloud', title: 'Cloud & DevOps', text: 'Moderne Infrastruktur, die skaliert: Cloud-Migration, Automatisierung und abgesicherte Deployments.', points: ['Cloudflare, AWS & Azure', 'CI/CD & Infrastructure as Code', 'Monitoring & Hardening'] }
      ]
    },
    why: {
      kicker: 'Warum EMETRIX', title: 'Technische Tiefe. Klare Kommunikation.',
      lead: 'Gute IT-Sicherheit ist kein Produkt, das man kauft – sie ist das Ergebnis sauberer Arbeit. So arbeiten wir:',
      items: [
        { icon: 'compass', title: 'Herstellerunabhängig', text: 'Wir empfehlen, was zu Ihnen passt – nicht, was die höchste Provision bringt. Keine Lizenzbindung, keine versteckten Abhängigkeiten.' },
        { icon: 'layers', title: 'Strukturiert & dokumentiert', text: 'Jedes Projekt folgt einem klaren Vorgehen mit nachvollziehbaren Ergebnissen. Sie erhalten Dokumentation, die auch Ihr Auditor versteht.' },
        { icon: 'eye', title: 'Transparent', text: 'Feste Angebote, klare Meilensteine, ehrliche Einschätzungen. Sie wissen jederzeit, woran wir arbeiten und warum.' },
        { icon: 'globe', title: 'Mehrsprachig', text: 'Beratung und Dokumentation auf Deutsch, Englisch und Persisch – für internationale Teams und Gründer:innen.' }
      ]
    },
    stats: [
      { value: '24', unit: 'h', label: 'Reaktionszeit auf Anfragen an Werktagen' },
      { value: '100', unit: '%', label: 'Datenverarbeitung in der EU, wo immer möglich' },
      { value: '3', unit: '', label: 'Sprachen: Deutsch, Englisch, Persisch' },
      { value: '0', unit: '', label: 'Herstellerbindungen oder Lizenz-Provisionen' }
    ],
    process: {
      kicker: 'Vorgehen', title: 'Von der Analyse zum sicheren Betrieb – in vier Schritten.',
      steps: [
        { title: 'Analyse', text: 'Wir verstehen Ihr Geschäft, Ihre Systeme und Ihre Risiken. Bestandsaufnahme, Interviews, technische Prüfung.', dur: '1–2 Wochen' },
        { title: 'Konzept', text: 'Sie erhalten einen priorisierten Maßnahmenplan mit Aufwand, Kosten und Wirkung – verständlich aufbereitet.', dur: '1 Woche' },
        { title: 'Umsetzung', text: 'Wir setzen um – in klaren Etappen, getestet und dokumentiert. Ihr Tagesgeschäft läuft ungestört weiter.', dur: 'projektabhängig' },
        { title: 'Betrieb', text: 'Monitoring, Updates und regelmäßige Reviews halten das Sicherheitsniveau dauerhaft hoch.', dur: 'fortlaufend' }
      ]
    },
    check: {
      kicker: 'Einstiegspaket', title: 'Security Quick-Check',
      text: 'Der schnellste Weg zu einem klaren Bild Ihrer IT-Sicherheit. In wenigen Tagen erhalten Sie eine fundierte Einschätzung und konkrete nächste Schritte.',
      list: ['Externe Angriffsfläche: Domains, E-Mail (SPF/DKIM/DMARC), TLS, offene Dienste', 'Prüfung von Konten, MFA und Berechtigungen', 'Backup- und Wiederherstellungsfähigkeit', 'Abgleich mit den Basisanforderungen von NIS2 und BSI', 'Ergebnisbericht mit Ampelbewertung und Maßnahmenplan', 'Abschlussgespräch mit Ihrem Team'],
      cta: 'Quick-Check anfragen', note: 'Festpreis nach kurzem Vorgespräch.'
    },
    industries: {
      kicker: 'Für wen wir arbeiten', title: 'Für Unternehmen, die Verantwortung für Daten tragen.',
      items: [
        { icon: 'building', title: 'KMU & Mittelstand', text: 'Professionelle IT-Sicherheit ohne eigene Security-Abteilung.' },
        { icon: 'briefcase', title: 'Kanzleien & Praxen', text: 'Schutz sensibler Mandanten- und Patientendaten nach Berufsrecht und DSGVO.' },
        { icon: 'cart', title: 'E-Commerce', text: 'Schnelle, sichere Shops mit stabilem Checkout und sauberem Tracking.' },
        { icon: 'rocket', title: 'Startups & Scale-ups', text: 'Security by Design von Tag eins – bereit für Investoren und Enterprise-Kunden.' },
        { icon: 'tool', title: 'Handwerk & Dienstleister', text: 'Verlässliche IT und ein professioneller Webauftritt, der Kunden gewinnt.' },
        { icon: 'globe', title: 'Internationale Teams', text: 'Mehrsprachige Beratung für Unternehmen zwischen Deutschland, Europa und dem Nahen Osten.' }
      ]
    },
    faq: {
      kicker: 'FAQ', title: 'Häufige Fragen',
      items: [
        { q: 'Betrifft mich die NIS2-Richtlinie?', a: 'NIS2 erweitert den Kreis der regulierten Unternehmen deutlich – vor allem ab 50 Beschäftigten oder 10 Mio. € Umsatz in bestimmten Sektoren. Aber auch kleinere Unternehmen sind häufig indirekt betroffen, weil ihre Kunden Sicherheitsnachweise von Zulieferern verlangen. Im Erstgespräch klären wir, ob und wie Sie betroffen sind.' },
        { q: 'Was kostet ein Projekt mit EMETRIX Tech?', a: 'Das hängt vom Umfang ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein schriftliches Angebot mit Festpreis oder klar definiertem Stundenkontingent – ohne Überraschungen.' },
        { q: 'Arbeiten Sie auch remote?', a: 'Ja. Die meisten Leistungen erbringen wir vollständig remote und sicher. Für Vor-Ort-Termine sind wir im Rhein-Main-Gebiet schnell bei Ihnen, deutschlandweit nach Absprache.' },
        { q: 'Was passiert bei einem akuten Sicherheitsvorfall?', a: 'Kontaktieren Sie uns sofort per E-Mail mit dem Betreff „NOTFALL“. Wir helfen bei Eindämmung, Analyse und Wiederherstellung und unterstützen bei Meldepflichten nach DSGVO und NIS2.' },
        { q: 'Entwickeln Sie auch barrierefreie Websites?', a: 'Ja. Seit Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz (BFSG) für viele Online-Angebote. Wir entwickeln nach WCAG 2.2 und prüfen bestehende Websites auf Konformität.' },
        { q: 'In welchen Sprachen beraten Sie?', a: 'Auf Deutsch, Englisch und Persisch (Farsi/Dari). Auch Dokumentationen und Websites erstellen wir in diesen Sprachen.' }
      ]
    },
    cta: { title: 'Lassen Sie uns über Ihre IT sprechen.', text: 'Im kostenlosen 30-minütigen Erstgespräch analysieren wir Ihre Ausgangslage und zeigen die wichtigsten nächsten Schritte – unverbindlich.', btn: 'Erstgespräch vereinbaren', alt: 'oder schreiben Sie an' }
  },

  services: {
    hero: { kicker: 'Leistungen', title: 'Sicherheit, Betrieb und Entwicklung – <em>aus einer Hand</em>.', lead: 'Ob einzelnes Audit oder langfristige Partnerschaft: Unsere Leistungen sind modular aufgebaut und greifen nahtlos ineinander.' },
    blocks: [
      {
        id: 'cybersecurity', icon: 'shield', kicker: '01 — Cybersecurity', title: 'Risiken erkennen, bevor sie zum Schaden werden.',
        lead: 'Angriffe auf kleine und mittlere Unternehmen nehmen stetig zu – meist über bekannte, vermeidbare Schwachstellen. Wir machen Ihre Risiken sichtbar und schließen Lücken systematisch.',
        features: [
          { t: 'Security-Audits', d: 'Strukturierte Prüfung von Infrastruktur, Konfiguration und Prozessen nach BSI IT-Grundschutz und CIS Benchmarks.' },
          { t: 'Penetrationstests', d: 'Autorisierte Angriffssimulationen auf Web-Anwendungen, externe Infrastruktur und interne Netze – mit nachvollziehbarem Bericht.' },
          { t: 'Schwachstellenmanagement', d: 'Kontinuierliche Scans, Priorisierung nach Risiko und begleitete Behebung – statt endloser Reports.' },
          { t: 'NIS2- & ISO-27001-Readiness', d: 'Gap-Analyse, Richtlinien, Risikomanagement und Nachweisführung – damit Sie Audits und Kundenanforderungen souverän bestehen.' },
          { t: 'E-Mail- & Identitätssicherheit', d: 'SPF, DKIM, DMARC, MFA, Conditional Access und Least-Privilege – die wirksamsten Schutzmaßnahmen zuerst.' },
          { t: 'Awareness & Incident Response', d: 'Praxisnahe Schulungen für Ihr Team sowie Notfallpläne und Unterstützung im Ernstfall.' }
        ],
        deliverables: ['Management-Summary mit Risikobewertung', 'Technischer Detailbericht mit Nachweisen', 'Priorisierter Maßnahmenplan', 'Nachtest nach Behebung'],
        standards: ['BSI IT-Grundschutz', 'ISO/IEC 27001', 'NIS2', 'OWASP', 'CIS Controls']
      },
      {
        id: 'it-services', icon: 'server', kicker: '02 — IT-Services', title: 'IT, die einfach funktioniert – und sicher bleibt.',
        lead: 'Wir übernehmen Planung, Einrichtung und Betrieb Ihrer IT-Umgebung, damit Sie sich auf Ihr Geschäft konzentrieren können.',
        features: [
          { t: 'Managed IT & Support', d: 'Fester Ansprechpartner, schnelle Hilfe per Fernwartung und planbare monatliche Kosten.' },
          { t: 'Microsoft 365 & Google Workspace', d: 'Einrichtung, Migration, Lizenzoptimierung und sichere Konfiguration nach Best Practice.' },
          { t: 'Netzwerk & WLAN', d: 'Segmentierte Netze, Firewalls, VPN und Gäste-WLAN – stabil, schnell und abgesichert.' },
          { t: 'Endpoint-Management', d: 'Zentrale Verwaltung, Verschlüsselung und Schutz aller Geräte – auch im Homeoffice.' },
          { t: 'Backup & Disaster Recovery', d: '3-2-1-Backupstrategie mit unveränderlichen Kopien und regelmäßigen Wiederherstellungstests.' },
          { t: 'IT-Dokumentation', d: 'Vollständige, aktuelle Dokumentation Ihrer Systeme, Zugänge und Abläufe.' }
        ],
        deliverables: ['Inventar aller Systeme und Lizenzen', 'Gehärtete Standardkonfiguration', 'Notfallhandbuch', 'Monatlicher Statusbericht'],
        standards: ['BSI IT-Grundschutz', 'CIS Benchmarks', 'Microsoft Secure Score', 'ITIL-Prinzipien']
      },
      {
        id: 'web', icon: 'code', kicker: '03 — Webentwicklung', title: 'Websites, die überzeugen – schnell, sicher, barrierefrei.',
        lead: 'Ihr Webauftritt ist oft der erste Kontakt mit Kunden. Wir entwickeln digitale Produkte, die gut aussehen, schnell laden und rechtlich auf dem neuesten Stand sind.',
        features: [
          { t: 'Unternehmenswebsites', d: 'Individuelles Design, mehrsprachig, mit einfach pflegbaren Inhalten und starkem Markenauftritt.' },
          { t: 'Web-Anwendungen', d: 'Portale, Dashboards und interne Tools mit modernen Frameworks und sauberer Architektur.' },
          { t: 'E-Commerce', d: 'Online-Shops mit sicherem Checkout, Zahlungsanbindung und Schnittstellen zu Ihren Systemen.' },
          { t: 'Barrierefreiheit (BFSG)', d: 'Entwicklung und Prüfung nach WCAG 2.2 – für mehr Reichweite und Rechtssicherheit.' },
          { t: 'Performance & SEO', d: 'Top-Werte bei Core Web Vitals, strukturierte Daten und technische Suchmaschinenoptimierung.' },
          { t: 'Sicherheit & Wartung', d: 'Security-Header, regelmäßige Updates, Monitoring und Backups – dauerhaft betreut.' }
        ],
        deliverables: ['Design-System & Prototyp', 'Responsive, mehrsprachige Website', 'Barrierefreiheits- und Performance-Report', 'Einweisung und Betriebsdokumentation'],
        standards: ['WCAG 2.2', 'BFSG', 'Core Web Vitals', 'OWASP ASVS', 'DSGVO']
      },
      {
        id: 'cloud', icon: 'cloud', kicker: '04 — Cloud & DevOps', title: 'Infrastruktur, die mit Ihnen wächst.',
        lead: 'Wir planen und automatisieren Cloud-Umgebungen, die sicher, kosteneffizient und reproduzierbar sind.',
        features: [
          { t: 'Cloud-Migration', d: 'Schrittweiser Umzug in die Cloud – mit Fokus auf EU-Regionen, Datenschutz und Ausfallsicherheit.' },
          { t: 'Cloudflare & Edge', d: 'DNS, WAF, DDoS-Schutz, Zero-Trust-Zugriffe und globale Auslieferung für maximale Performance.' },
          { t: 'CI/CD-Pipelines', d: 'Automatisierte Tests und Deployments mit GitHub Actions oder GitLab CI – schneller und fehlerfrei.' },
          { t: 'Infrastructure as Code', d: 'Terraform und Container für nachvollziehbare, versionierte Infrastruktur.' },
          { t: 'Monitoring & Observability', d: 'Metriken, Logs und Alarme, damit Probleme erkannt werden, bevor Nutzer sie bemerken.' },
          { t: 'Kostenoptimierung', d: 'Transparente Cloud-Kosten durch Rightsizing, Reservierungen und klare Verantwortlichkeiten.' }
        ],
        deliverables: ['Architekturdiagramm & Konzept', 'Versionierte Infrastruktur-Codebasis', 'Automatisierte Deployment-Pipeline', 'Monitoring-Dashboard'],
        standards: ['Zero Trust', 'CIS Benchmarks', 'Cloud Security Alliance', 'BSI C5']
      }
    ],
    models: {
      kicker: 'Zusammenarbeit', title: 'Drei Wege, mit uns zu arbeiten.',
      items: [
        { name: 'Projekt', desc: 'Klar abgegrenzte Vorhaben mit Festpreis und definierten Ergebnissen.', points: ['Audit, Pentest, Website, Migration', 'Fester Zeitplan und Festpreis', 'Abnahme mit Dokumentation'] },
        { name: 'Retainer', desc: 'Laufende Betreuung mit festem Stundenkontingent und garantierter Verfügbarkeit.', points: ['Managed IT & Security', 'Monatliches Reporting', 'Priorisierter Support'], featured: true, tag: 'Beliebt' },
        { name: 'Beratung', desc: 'Strategische Begleitung für Entscheidungen, Ausschreibungen und Audits.', points: ['vCISO / Sicherheitsberatung', 'Technische Due Diligence', 'Second Opinion'] }
      ]
    },
    cta: { title: 'Welche Leistung passt zu Ihnen?', text: 'Wir beraten Sie ehrlich – auch wenn das bedeutet, dass Sie weniger brauchen als gedacht.', btn: 'Unverbindlich anfragen' }
  },

  about: {
    hero: { kicker: 'Über uns', title: 'Unabhängige IT-Expertise aus <em>Frankfurt am Main</em>.', lead: 'EMETRIX Tech verbindet Cybersecurity, IT-Betrieb und Webentwicklung zu einem durchdachten Ganzen – für Unternehmen, die ihre digitale Infrastruktur ernst nehmen.' },
    story: {
      title: 'Warum es EMETRIX Tech gibt',
      paras: [
        'Viele Unternehmen stehen vor demselben Problem: Die IT wurde über Jahre gewachsen, Zuständigkeiten sind verteilt, und niemand hat den vollständigen Überblick. Gleichzeitig steigen die Anforderungen – durch Cyberangriffe, durch Regulierung wie NIS2 und DSGVO und durch Kunden, die Sicherheitsnachweise verlangen.',
        'EMETRIX Tech wurde gegründet, um genau hier anzusetzen: mit technischer Tiefe, einem strukturierten Vorgehen und der Fähigkeit, komplexe Themen verständlich zu erklären. Wir betrachten Sicherheit, Betrieb und Entwicklung nicht getrennt, sondern als zusammenhängendes System.',
        'Unser Anspruch: Jede Empfehlung ist begründet, jede Maßnahme dokumentiert, jede Rechnung nachvollziehbar.'
      ]
    },
    values: {
      title: 'Wofür wir stehen',
      items: [
        { icon: 'lock', title: 'Vertraulichkeit', text: 'Ihre Daten und Erkenntnisse aus unseren Prüfungen bleiben bei Ihnen. Auf Wunsch arbeiten wir unter NDA.' },
        { icon: 'compass', title: 'Unabhängigkeit', text: 'Keine Herstellerbindung, keine Provisionen. Unsere Empfehlungen folgen allein Ihrem Bedarf.' },
        { icon: 'layers', title: 'Gründlichkeit', text: 'Wir arbeiten nach anerkannten Standards und dokumentieren so, dass Ergebnisse überprüfbar sind.' },
        { icon: 'users', title: 'Partnerschaft', text: 'Wir erklären, statt zu verkomplizieren – und befähigen Ihr Team, Sicherheit im Alltag zu leben.' }
      ]
    },
    founder: { kicker: 'Inhaber', name: 'Abdul Naasir Obaidy', role: 'Gründer & Inhaber, EMETRIX Tech', text: 'Als Inhaber verantworte ich jedes Projekt persönlich – von der ersten Analyse bis zur Übergabe. Für spezialisierte Aufgaben arbeite ich mit einem Netzwerk erfahrener Fachleute zusammen, die dieselben Qualitätsmaßstäbe teilen.' },
    facts: [
      { k: 'Standort', v: 'Frankfurt am Main' },
      { k: 'Einsatzgebiet', v: 'Rhein-Main, deutschlandweit & remote' },
      { k: 'Sprachen', v: 'Deutsch · Englisch · Persisch' },
      { k: 'Schwerpunkte', v: 'Security · IT · Web · Cloud' }
    ],
    cta: { title: 'Lernen wir uns kennen.', text: 'Ein kurzes Gespräch genügt, um zu sehen, ob wir zueinander passen.', btn: 'Kontakt aufnehmen' }
  },

  contact: {
    hero: { kicker: 'Kontakt', title: 'Erzählen Sie uns von <em>Ihrem Vorhaben</em>.', lead: 'Wir melden uns innerhalb von 24 Stunden an Werktagen. Das Erstgespräch ist kostenlos und unverbindlich.' },
    form: {
      name: 'Name', company: 'Unternehmen', email: 'E-Mail', phone: 'Telefon (optional)', topic: 'Thema', message: 'Ihre Nachricht', placeholder: 'Beschreiben Sie kurz Ihre Ausgangslage und Ihr Ziel …',
      topics: ['Cybersecurity', 'IT-Services', 'Webentwicklung', 'Cloud & DevOps', 'Security Quick-Check', 'Sonstiges'],
      consent: 'Ich habe die <a href="{privacy}">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage einverstanden.',
      submit: 'Nachricht vorbereiten', note: 'Mit Klick öffnet sich Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht. Es werden keine Daten auf dieser Website gespeichert.',
      success: 'Ihr E-Mail-Programm wurde geöffnet. Falls nicht, schreiben Sie uns direkt an', required: 'Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.',
      subject: 'Anfrage über emetrix-tech.com'
    },
    info: {
      title: 'Direkter Kontakt',
      email: 'E-Mail', location: 'Standort', locationV: 'Frankfurt am Main, Deutschland<br>Termine vor Ort nach Vereinbarung', hours: 'Erreichbarkeit', hoursV: 'Mo–Fr, 9:00–18:00 Uhr', langs: 'Sprachen', langsV: 'Deutsch, Englisch, Persisch',
      emergency: 'Akuter Sicherheitsvorfall?', emergencyV: 'Schreiben Sie uns mit dem Betreff „NOTFALL“ – wir priorisieren Ihre Anfrage.'
    },
    next: { title: 'So geht es weiter', steps: ['Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Stunden.', 'Im 30-minütigen Erstgespräch klären wir Ziele und Rahmen.', 'Sie erhalten ein schriftliches Angebot mit Festpreis.'] }
  },

  imprint: {
    title: 'Impressum',
    body: `
<h2>Angaben gemäß § 5 DDG</h2>
<p>EMETRIX Tech<br>Inhaber: Abdul Naasir Obaidy<br>Eifelstr. 66A<br>60529 Frankfurt am Main<br>Deutschland</p>
<h2>Kontakt</h2>
<p>E-Mail: <a href="mailto:{email}">{email}</a></p>
<h2>Umsatzsteuer-ID</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>DE465574206</p>
<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>Abdul Naasir Obaidy<br>Eifelstr. 66A<br>60529 Frankfurt am Main</p>
<h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
<h2>Haftung für Inhalte</h2>
<p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
<h2>Haftung für Links</h2>
<p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
<h2>Urheberrecht</h2>
<p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>`
  },

  privacy: {
    title: 'Datenschutzerklärung',
    body: `
<p class="muted">Stand: November 2026</p>
<h2>1. Verantwortlicher</h2>
<p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br>EMETRIX Tech, Inhaber Abdul Naasir Obaidy, Eifelstr. 66A, 60529 Frankfurt am Main, Deutschland<br>E-Mail: <a href="mailto:{email}">{email}</a></p>
<h2>2. Grundsätze</h2>
<p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Diese Website verwendet <strong>keine Tracking-Cookies, keine Analyse-Tools und keine Werbe-Pixel</strong>. Schriftarten werden lokal von unserem Server geladen; es findet keine Verbindung zu Google Fonts oder anderen Schriftanbietern statt.</p>
<h2>3. Hosting und Content Delivery (Cloudflare)</h2>
<p>Diese Website wird über Cloudflare Pages bereitgestellt und durch das Netzwerk der Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA, ausgeliefert und geschützt. Beim Aufruf der Website verarbeitet Cloudflare technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssysteminformationen. Dies dient der sicheren und effizienten Auslieferung der Website sowie der Abwehr von Angriffen (z. B. DDoS).</p>
<p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der sicheren, schnellen und stabilen Bereitstellung unseres Online-Angebots. Cloudflare ist unter dem EU-U.S. Data Privacy Framework zertifiziert; zusätzlich wurden Standardvertragsklauseln vereinbart. Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag (Data Processing Addendum). Weitere Informationen: <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener">cloudflare.com/privacypolicy</a>.</p>
<h2>4. Kontaktaufnahme per E-Mail</h2>
<p>Wenn Sie uns per E-Mail kontaktieren – auch über das Kontaktformular, das lediglich Ihr eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht öffnet –, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Unternehmen, Nachricht) zur Bearbeitung Ihrer Anfrage. Das Formular selbst speichert oder überträgt keine Daten an unseren Server.</p>
<p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Wir löschen Ihre Daten, sobald sie für die Zweckerreichung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten (z. B. nach HGB oder AO) entgegenstehen.</p>
<h2>5. Lokale Speicherung im Browser</h2>
<p>Zur Speicherung Ihrer Sprachauswahl kann die Website einen Eintrag im lokalen Speicher Ihres Browsers (localStorage) anlegen. Dieser Eintrag wird nicht an uns übertragen und kann jederzeit über die Browsereinstellungen gelöscht werden. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, da die Speicherung für den von Ihnen gewünschten Dienst unbedingt erforderlich ist.</p>
<h2>6. Ihre Rechte</h2>
<p>Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Wenden Sie sich hierzu an die oben genannte E-Mail-Adresse.</p>
<p>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für uns ist: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.</p>
<h2>7. SSL-/TLS-Verschlüsselung</h2>
<p>Diese Website nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am „https://“ in der Adresszeile Ihres Browsers.</p>
<h2>8. Änderungen</h2>
<p>Wir passen diese Datenschutzerklärung an, sobald Änderungen der Website oder der Rechtslage dies erforderlich machen.</p>`
  },

  notfound: { title: 'Seite nicht gefunden', text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.', btn: 'Zur Startseite' },

  footer: {
    tagline: 'Unabhängige Cybersecurity-, IT- und Web-Services aus Frankfurt am Main.',
    company: 'Unternehmen', legal: 'Rechtliches', servicesT: 'Leistungen',
    rights: 'Alle Rechte vorbehalten.', vat: 'USt-IdNr.', top: 'Nach oben'
  }
};
