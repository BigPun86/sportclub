/**
 * Slides für das Sponsoring-Carousel auf sckw.de (eingebettet via iframe /widget).
 *
 * Bewusst schlank gehalten - das Band auf der Startseite soll in 2 Sekunden
 * wirken: Schlagzeile + eine Zeile + Button. Details + Preise stehen auf der
 * jeweiligen Zielseite (href).
 *
 * DEINE STELLSCHRAUBE:
 *  - Slide raus:      active: false setzen (oder Block löschen)
 *  - Slide rein:      neuen Block ergänzen
 *  - Reihenfolge:     Blöcke umsortieren
 *  - Text ändern:     title (Schlagzeile) + subline (eine Zeile darunter)
 *  - Klickziel:       href = Pfad auf partner.sckw.de (Anker oder Unterseite),
 *                     öffnet in neuem Tab. Beispiele:
 *                       "/sponsoring#angebot"        (Anker auf Hauptseite)
 *                       "/sponsoring/club-500"       (eigene Unterseite)
 *  - Bewusst KEINE Preise hier.
 */

export interface WidgetSlide {
  id: string;
  active: boolean;
  eyebrow: string; // kleine Zeile über dem Titel
  title: string; // Schlagzeile
  subline: string; // eine unterstützende Zeile
  href: string; // Klickziel, relativ zu partnerBase
  image: string; // Hintergrundbild, Gallery-Referenz (z.B. "herren/herren_6")
  badge?: string; // optionales Label, z.B. "Noch frei"
  cta: string; // Button-Text
}

/** Basis-Domain, auf die alle href-Pfade zeigen. */
export const partnerBase = "https://partner.sckw.de";

/** Auto-Rotation in Millisekunden. */
export const widgetRotationMs = 6000;

export const widgetSlides: WidgetSlide[] = [
  {
    id: "reichweite",
    active: true,
    eyebrow: "SC Konstanz-Wollmatingen · Sponsoring",
    title: "1,3 Mio. Views pro Saison",
    subline: "100% organisch - deine Marke bei jedem Spiel im Bild.",
    href: "/sponsoring",
    image: "herren/herren_6",
    cta: "Partner werden",
  },
  {
    id: "exklusiv",
    active: true,
    eyebrow: "Exklusiv-Partnerschaften",
    title: "Werde das Gesicht des Vereins",
    subline: "Stadionname, Trikot-Rücken oder -Ärmel - noch zu vergeben.",
    href: "/sponsoring#angebot",
    image: "herren/herren_16",
    badge: "Noch frei",
    cta: "Details ansehen",
  },
  {
    id: "werbeflaechen",
    active: true,
    eyebrow: "Werbeflächen",
    title: "Dein Logo bei jedem Heimspiel",
    subline: "Banden & Banner direkt am Spielfeldrand.",
    href: "/sponsoring#werbeflaechen",
    image: "herren/herren_5",
    cta: "Flächen ansehen",
  },
  {
    id: "spieltag",
    active: true,
    eyebrow: "Spieltag & Medien",
    title: "Schon mit kleinem Budget dabei",
    subline: "Ballspende, Spielpräsentator oder Magazin-Inserat.",
    href: "/sponsoring#spieltag",
    image: "herren/herren_14",
    badge: "Einstieg",
    cta: "Möglichkeiten ansehen",
  },
  {
    id: "club-500",
    active: true,
    eyebrow: "Club 500",
    title: "Gemeinsam stark - schon als Fan",
    subline: "Werde Teil des Club 500 und unterstütze den Verein.",
    href: "/sponsoring/club-500",
    image: "herren/herren_6",
    cta: "Zum Club 500",
  },
  {
    id: "kontakt",
    active: true,
    eyebrow: "Partner werden",
    title: "Lass uns über Sponsoring reden",
    subline: "Individuelle Pakete jederzeit möglich - sponsoring@sckw.de.",
    href: "/sponsoring",
    image: "herren/herren_16",
    cta: "Zur Sponsoring-Seite",
  },
];
