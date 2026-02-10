# Daniel Hanke – Business Coach Website

Professionelle Website für Daniel Hanke, Business Coach & Psychological Consultant mit Fokus auf Conscious Leadership.

## Projektstruktur

```
danielhanke-website/
├── index.html                 # Homepage
├── css/
│   └── style.css             # Alle Styles
├── js/
│   └── main.js               # Navigation, Formulare, Animationen
├── images/                    # Bilder (siehe Abschnitt "Bilder")
├── pages/
│   ├── services.html         # Leistungen (Coaching, Workshops, Keynotes)
│   ├── about.html            # Über mich
│   ├── resources.html        # Ressourcen (Videos, Newsletter, Lead Magnet)
│   ├── contact.html          # Kontakt & Calendly
│   ├── impressum.html        # Impressum
│   └── datenschutz.html      # Datenschutzerklärung
└── README.md                  # Diese Datei
```

## Quick Start

### Lokale Vorschau

Die Website ist rein statisches HTML/CSS/JS – kein Build-Prozess nötig.

```bash
# Option 1: Python (bereits auf macOS installiert)
cd danielhanke-website
python3 -m http.server 8000
# → Öffne http://localhost:8000

# Option 2: Node.js
npx serve .

# Option 3: VS Code
# Installiere die Extension "Live Server" und klicke "Go Live"
```

### Deployment

**Netlify (empfohlen):**
1. Gehe zu [netlify.com](https://netlify.com) und erstelle ein Konto
2. Ziehe den `danielhanke-website`-Ordner per Drag & Drop in das Netlify Dashboard
3. Unter "Domain settings" → Custom domain → `danielhanke.com` eintragen
4. DNS bei deinem Domain-Provider auf Netlify zeigen lassen

**Vercel:**
1. `npm i -g vercel`
2. `cd danielhanke-website && vercel`
3. Custom Domain in den Vercel-Settings konfigurieren

**Traditioneller Hoster (z.B. All-Inkl, Strato):**
1. Alle Dateien per FTP in das Root-Verzeichnis hochladen
2. Fertig – keine Konfiguration nötig

---

## Bilder austauschen

Die Website enthält Bild-Platzhalter mit klaren Beschreibungen. Ersetze sie wie folgt:

### Benötigte Bilder

| Dateiname (Vorschlag) | Verwendung | Empfohlene Größe | Ort |
|---|---|---|---|
| `hero-portrait.jpg` | Hero-Sektion Homepage | 600×800px | `index.html` – Hero |
| `about-portrait.jpg` | Über-Mich-Seite Hero | 500×625px | `pages/about.html` – Hero |
| `coaching-setting.jpg` | Arbeitssituation | 400×300px | `pages/about.html` – Fotos |
| `teaching-mode.jpg` | Vor Kamera/Whiteboard | 400×300px | `pages/about.html` – Fotos |
| `og-image.jpg` | Social Media Preview | 1200×630px | Meta-Tags (alle Seiten) |

### So fügst du Bilder ein

1. Lege deine Bilder im `images/`-Ordner ab
2. Suche im HTML nach `image-placeholder` und ersetze den gesamten `<div class="image-placeholder">...</div>`-Block mit:

```html
<img src="../images/hero-portrait.jpg" alt="Daniel Hanke – Business Coach" loading="lazy">
```

(Für die Homepage `index.html` ohne `../`-Prefix: `src="images/hero-portrait.jpg"`)

### Bildoptimierung

Für schnelle Ladezeiten:
- Verwende JPEG für Fotos (Qualität: 80-85%)
- Komprimiere mit [TinyPNG](https://tinypng.com) oder [Squoosh](https://squoosh.app)
- Zielgröße pro Bild: unter 200KB

---

## Texte anpassen

### Testimonials

In `index.html` findest du 3 Testimonial-Platzhalter (Suche nach `TESTIMONIAL-PLATZHALTER`). Ersetze:
- Das Zitat im `<p>`-Tag
- Den Namen in `testimonial-card__author`
- Die Rolle in `testimonial-card__role`

### YouTube-Videos

In `pages/resources.html` findest du 4 Video-Platzhalter. Ersetze den Platzhalter-Block mit:

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/DEINE_VIDEO_ID"
  title="Video-Titel"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

### LinkedIn-Beiträge

In `pages/resources.html` findest du 3 LinkedIn-Artikel-Platzhalter. Ersetze Titel, Text und Link.

### E-Mail-Adresse

Suche nach `mail@danielhanke.com` und ersetze mit deiner echten E-Mail.

---

## Calendly-Integration

### Aktuelle Einbindung (Button-Link)

Die Website verlinkt aktuell direkt auf:
```
https://calendly.com/mitdaniel/business-coaching-audit
```

### Inline-Widget (empfohlen)

Für eine eingebettete Kalenderansicht auf der Kontaktseite, ersetze den Platzhalter in `pages/contact.html` mit:

```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget"
     data-url="https://calendly.com/mitdaniel/business-coaching-audit"
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
```

---

## Newsletter / Lead Magnet

### Aktuelle Einbindung

Das Newsletter-Formular zeigt aktuell eine Erfolgsmeldung, sendet aber noch keine echten E-Mails.

### Anbindung an E-Mail-Marketing

**ConvertKit (empfohlen für Coaches):**
1. Erstelle ein Formular in ConvertKit
2. In `js/main.js`, ersetze den `handleNewsletterSubmit`-Block mit dem ConvertKit-API-Aufruf
3. Alternativ: Ersetze das gesamte Formular in `pages/resources.html` mit dem ConvertKit-Embed-Code

**Mailchimp:**
1. Erstelle eine Audience und ein Signup-Formular
2. Verwende den Mailchimp Embed-Code oder die API

### Lead Magnet PDF

Erstelle dein PDF "Die 5 größten Selbstführungs-Fehler von Führungskräften" und verlinke den Download nach erfolgreicher Newsletter-Anmeldung (Double-Opt-In → Bestätigungsseite mit Download-Link).

---

## Kontaktformular

### Backend-Anbindung

Das Kontaktformular braucht ein Backend für den E-Mail-Versand:

**Option 1 – Formspree (einfachste Lösung):**
1. Gehe zu [formspree.io](https://formspree.io) und erstelle ein Formular
2. Ersetze im `<form>`-Tag das `onsubmit` mit der Formspree-Action:

```html
<form class="contact-form" action="https://formspree.io/f/DEINE_ID" method="POST">
```

3. Entferne das `onsubmit`-Attribut und den JavaScript-Handler

**Option 2 – Netlify Forms (bei Netlify-Hosting):**
Füge `netlify` und `data-netlify="true"` zum Form-Tag hinzu:

```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

---

## DSGVO-Checkliste

### Bereits enthalten:
- [x] Cookie-Banner mit Akzeptieren / Ablehnen
- [x] Datenschutzerklärung (Muster)
- [x] Impressum (Muster)
- [x] Newsletter-Abmeldung erwähnt
- [x] Externe Dienste dokumentiert (Calendly, Google Fonts, YouTube)

### Noch zu erledigen:
- [ ] **Impressum:** Echte Adresse, Telefonnummer, USt-IdNr. eintragen
- [ ] **Datenschutz:** Von einem Anwalt oder über [eRecht24](https://www.e-recht24.de) prüfen lassen
- [ ] **Google Fonts:** Optional lokal einbinden (DSGVO-sicherer):
  - Fonts herunterladen von [google-webfonts-helper](https://gwfh.mranftl.com/fonts)
  - In `css/`-Ordner ablegen
  - Google Fonts `<link>`-Tags in allen HTML-Dateien durch lokale `@font-face`-Deklarationen ersetzen
- [ ] **Cookie-Banner:** Bei Nutzung von Google Analytics / LinkedIn Pixel: Cookies erst nach Zustimmung laden
- [ ] **Newsletter:** Double-Opt-In implementieren (gesetzlich erforderlich in DE)

---

## Google Analytics & LinkedIn Pixel

### Google Analytics

In `index.html` findest du einen auskommentierten GA-Code. Zum Aktivieren:
1. Erstelle ein GA4-Property unter [analytics.google.com](https://analytics.google.com)
2. Ersetze `YOUR-GA-ID` mit deiner Measurement ID (z.B. `G-XXXXXXXXXX`)
3. Entferne die HTML-Kommentarzeichen `<!-- -->` um den Script-Block
4. Stelle sicher, dass GA erst nach Cookie-Zustimmung lädt (siehe Cookie-Banner)

### LinkedIn Insight Tag

Ähnlich wie GA – ersetze `YOUR-LINKEDIN-ID` mit deiner Partner-ID.

---

## SEO

### Bereits optimiert:
- Semantische HTML-Struktur
- Meta-Tags (Title, Description) auf jeder Seite
- Open Graph Tags für Social Media
- Schema.org JSON-LD (Homepage)
- Canonical URLs
- Alt-Texte (bei Bildeinbindung hinzufügen)
- Mobile-First Responsive Design

### Empfehlungen:
- Erstelle eine `sitemap.xml` (z.B. über [xml-sitemaps.com](https://www.xml-sitemaps.com))
- Erstelle eine `robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://danielhanke.com/sitemap.xml
  ```
- Reiche die Sitemap bei Google Search Console ein
- Füge `alt`-Attribute zu allen Bildern hinzu

---

## Technische Details

- **Framework:** Vanilla HTML, CSS, JavaScript (kein Build-Prozess nötig)
- **Fonts:** Inter (Body + Headlines), Playfair Display (Akzente) via Google Fonts
- **Browser-Support:** Alle modernen Browser (Chrome, Firefox, Safari, Edge)
- **Mobile:** Responsive Design, getestet für 320px+ Breite
