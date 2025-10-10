# SC Konstanz-Wollmatingen e.V. - Website

Eine moderne React/TypeScript Website für den Sportclub Konstanz-Wollmatingen e.V. mit Fokus auf Sponsoring und Mitglieder-Engagement.

## 🚀 Features

### Hauptfunktionen
- **Sponsoring-Seite** - Übersichtliche Darstellung von Sponsoring-Möglichkeiten
- **Team-Galerie** - Bilder der verschiedenen Mannschaften und Abteilungen
- **Spenden-Funktion** - Einfache Online-Spende für Vereinsprojekte
- **Kontakt** - Einfacher Kontakt zu Vorstand und Abteilungen

### Technische Features
- **React 18** mit TypeScript für Typsicherheit
- **Vite** für schnelle Entwicklung und optimierte Builds
- **Styled Components** für konsistente UI-Styles
- **Responsive Design** für alle Geräte
- **Accessibility** (WCAG-konform)
- **SEO-optimiert** für bessere Auffindbarkeit

## 📁 Projektstruktur

```
src/
├── assets/           # Bilder und Medien
│   ├── gallery/     # Team-Fotos und Galerie
│   ├── sponsors/    # Sponsor-Logos
│   └── renovation/  # Renovierungs-Bilder
├── components/      # Wiederverwendbare UI-Komponenten
├── data/           # JSON-Daten für Inhalte
├── pages/          # Seiten-Komponenten
└── utils/          # Hilfsfunktionen

public/             # Statische Assets
├── logo.svg               # Hauptlogo
├── logo-transaprent.svg   # Logo mit transparentem Hintergrund
├── StadionMagazin.pdf     # Aktuelle Vereinszeitschrift
└── ballspende.png         # Ballspende-Beispielbild
```

## 🎨 Design-System

### Farben
- **Primär**: `#e10073` (Pink/Rot)
- **Sekundär**: `#ff6b9d` (Hellrosa)
- **Akzent**: `#b8005a` (Dunkelrosa)
- **Text**: `#222` (Dunkelgrau)
- **Hintergrund**: `#fff` (Weiß), `#f7f7fa` (Hellgrau)

### Typografie
- **Überschriften**: `clamp()` für responsive Größen
- **Fließtext**: 16px Basis mit guter Lesbarkeit
- **Buttons**: Konsistente Padding und Hover-Effekte

## 🔧 Entwicklung

### Voraussetzungen
```bash
Node.js 18+
npm oder yarn
```

### Installation
```bash
npm install
```

### Entwicklung
```bash
npm run dev
```

### Build für Produktion
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📦 Assets & Medien

### Logos
- `logo.svg` - Hauptlogo für dunkle Hintergründe
- `logo-transaprent.svg` - Logo mit transparentem Hintergrund (Favicon)

### Dokumente
- `StadionMagazin.pdf` - Aktuelle Vereinszeitschrift für Sponsoren
- `ballspende.png` - Beispielbild für Ballspende-Pakete

### Bilder
- Team-Fotos in `/src/assets/gallery/`
- Sponsor-Logos in `/src/assets/sponsors/`
- Hero-Bilder und sonstige Assets

## 🌐 Deployment

Die Website läuft auf GitHub Pages und wird automatisch bei jedem Push auf den `main`-Branch deployed.

**Live-URL**: [https://sc-konstanz-wollmatingen.de](https://sc-konstanz-wollmatingen.de)

## 📋 Content-Management

### Sponsoring-Pakete
Die Sponsoring-Pakete werden in `src/data/sponsoringPakete.json` definiert und automatisch auf der Sponsoring-Seite angezeigt.

### Bilder
Team-Bilder und Galerie-Bilder werden im `src/assets/gallery/`-Ordner verwaltet und automatisch geladen.

### Texte & Inhalte
Die meisten Texte sind direkt in den React-Komponenten definiert für einfache Aktualisierung.

## 🔒 Sicherheit

- Alle Formulare validieren Eingaben
- Bilder werden optimiert geladen
- Keine sensiblen Daten im Frontend
- Sichere API-Kommunikation (wenn implementiert)

## 📞 Kontakt

Bei Fragen oder Problemen kontaktieren Sie das Entwicklerteam über die Kontakt-Seite der Website.
