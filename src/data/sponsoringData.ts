/**
 * Zentrales Datenmodul für alle Sponsoring-Informationen.
 * Wird sowohl von /sponsoring als auch von /sponsoring-handoff verwendet.
 */

// ============================================================================
// Aufstiegs-Banner (einfach hier anpassen)
// ============================================================================

export const aufstiegsBanner = {
  active: true,
  text: "Meister & Aufsteiger!",
  highlight: "Verbandsliga Südbaden",
  suffix: "Ab Saison 26/27 spielen wir eine Liga höher!",
};

// ============================================================================
// KPIs / Reichweite
// ============================================================================

export interface KPI {
  value: string;
  label: string;
  description?: string;
}

export const kpis: KPI[] = [
  {
    value: "1,3 Mio.",
    label: "Social-Media-Views / Saison",
    description: "IG 1,07 Mio. + FB 203K kombiniert (Jul 25 - Jun 26)",
  },
  {
    value: "310.000",
    label: "Views / Monat aktuell",
    description: "IG 230K + FB 81K kombiniert (28 Tage, Mai-Jun 26)",
  },
  {
    value: "21.400",
    label: "Personen erreicht / Monat",
    description: "Instagram Reach, 97% Non-Followers",
  },
  {
    value: "60.000+",
    label: "Website-Aufrufe / Jahr",
    description: "23.800 Sessions, Ø 2:19 Min. Verweildauer",
  },
];

// ============================================================================
// Exklusiv-Partnerpakete (Leistungen einheitlich, Unterschied = Platzierung)
// ============================================================================

export interface ExklusivPaket {
  id: string;
  name: string;
  preis: string;
  topFeature: string;
  trikot: string;
  bande: string;
  banner: string;
  magazin: string;
  saisonkarten: number;
  vergeben: boolean;
  sponsorName?: string;
  sponsorLogo?: string;
  sponsorWebsite?: string;
}

const sharedLeistungen =
  "Logo in allen Spielvor-/Nachberichten · Stadionansage jedes Heimspiel · Logo Startseite";

export const exklusivPakete: ExklusivPaket[] = [
  {
    id: "hauptsponsor",
    name: "Hauptsponsor",
    preis: "15.000 €",
    topFeature: "Trikotbrust",
    trikot: "Brust (bis 400 cm²)",
    bande: "9 m",
    banner: "1× XL (3 × 2 m)",
    magazin: "1 Seite",
    saisonkarten: 10,
    vergeben: true,
    sponsorName: "Fuchsbau Immobilien",
    sponsorLogo: "/sponsors/fuchsbau-logo.png",
    sponsorWebsite: "https://immofuchsbau.com/",
  },
  {
    id: "stadionname",
    name: "Stadionname-Partner",
    preis: "12.000 €",
    topFeature: "Namensrecht Stadion",
    trikot: "–",
    bande: "6 m",
    banner: "1× Standard (2 × 1,5 m)",
    magazin: "1/2 Seite",
    saisonkarten: 10,
    vergeben: false,
  },
  {
    id: "co-sponsor-1",
    name: "Co-Sponsor I",
    preis: "9.500 €",
    topFeature: "Trikot-Rücken",
    trikot: "Rücken (bis 200 cm²)",
    bande: "6 m",
    banner: "1× Standard (2 × 1,5 m)",
    magazin: "1/2 Seite",
    saisonkarten: 5,
    vergeben: false,
  },
  {
    id: "co-sponsor-2",
    name: "Co-Sponsor II",
    preis: "8.000 €",
    topFeature: "Trikot-Ärmel",
    trikot: "Ärmel (2 × 100 cm²)",
    bande: "6 m",
    banner: "1× Standard (2 × 1,5 m)",
    magazin: "1/2 Seite",
    saisonkarten: 5,
    vergeben: false,
  },
];

export { sharedLeistungen };

// Leistungs-Zeilen für Vergleichsdarstellung
export const exklusivLeistungsZeilen = [
  "Trikot-Platzierung",
  "Bande inkl.",
  "Banner inkl.",
  "Stadionmagazin",
  "Social Media",
  "Stadionansage",
  "Website",
  "Saisonkarten",
] as const;

// ============================================================================
// Werbeflächen à la carte (Banden + Banner)
// ============================================================================

export interface Werbeflaeche {
  name: string;
  groesse: string;
  preis: string;
  slots: number;
  kategorie: "bande" | "banner";
}

export const werbeflaechenALaCarte: Werbeflaeche[] = [
  {
    name: "Einzelbande",
    groesse: "3 × 1 m",
    preis: "600 €",
    slots: 25,
    kategorie: "bande",
  },
  {
    name: "Doppelbande",
    groesse: "6 × 1 m",
    preis: "1.000 €",
    slots: 12,
    kategorie: "bande",
  },
  {
    name: "Banner Standard",
    groesse: "ca. 2 × 1,5 m",
    preis: "1.200 €",
    slots: 10,
    kategorie: "banner",
  },
  {
    name: "Banner XL",
    groesse: "ca. 3 × 2 m",
    preis: "2.000 €",
    slots: 4,
    kategorie: "banner",
  },
];

// ============================================================================
// Spieltag & Medien à la carte
// ============================================================================

export interface SpieltagAngebot {
  name: string;
  beschreibung: string;
  preis: string;
  hinweis?: string;
}

export const spieltagAngebote: SpieltagAngebot[] = [
  {
    name: "Ballspende",
    beschreibung:
      "Durchsage vor Spiel, bei jedem Tor & Halbzeit · 1 Insta-Story",
    preis: "150 € / Spiel",
    hinweis: "5er-Pack: 500 €",
  },
  {
    name: "Spielpräsentator",
    beschreibung: "Alle Aufstellungen & Auswechslungen im Firmennamen",
    preis: "ab 250 € / Spiel",
  },
  {
    name: "Magazin-Inserat",
    beschreibung:
      "15 Ausgaben/Saison · ca. 100 Exemplare + 1.000-1.500 Online-Zugriffe",
    preis: "250 - 1.000 €",
    hinweis: "1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €",
  },
];

// ============================================================================
// Prämienmodell
// ============================================================================

export interface PraemieRow {
  label: string;
  starter: string;
  premium: string;
  kombi: string;
}

export const praemienRows: PraemieRow[] = [
  {
    label: "Pro Tor",
    starter: "100 €",
    premium: "200 €",
    kombi: "Fix + 150 €",
  },
  {
    label: "Pro Punkt",
    starter: "150 €",
    premium: "250 €",
    kombi: "Fix + 200 €",
  },
  {
    label: "Pro Zu-Null",
    starter: "300 €",
    premium: "500 €",
    kombi: "Fix + 400 €",
  },
  { label: "Pro Sieg", starter: "-", premium: "800 €", kombi: "Fix + 600 €" },
];

export const praemienExpectedCosts = {
  starter: "~5.000 €",
  premium: "~12.000 €",
  kombi: "~9.000 €",
};

export const praemienNote =
  "Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.";

// ============================================================================
// Buswerbung
// ============================================================================

export interface BusFlaeche {
  position: string;
  groesse: string;
  preis: string;
}

export const busFlaechenPremium: BusFlaeche[] = [
  { position: "Motorhaube", groesse: "100 x 65 cm", preis: "1.000 €" },
  {
    position: "Heckfläche gesamt (Doppeltür)",
    groesse: "180 x 170 cm",
    preis: "2.000 €",
  },
  {
    position: "Heckfläche pro Tür",
    groesse: "80 x 160 cm",
    preis: "je 1.000 €",
  },
  {
    position: "Seitenfläche groß (links)",
    groesse: "350 x 70 cm",
    preis: "1.500 €",
  },
  {
    position: "Seitenfläche groß (rechts)",
    groesse: "350 x 70 cm",
    preis: "1.500 €",
  },
  { position: "Schiebetür", groesse: "130 x 150 cm", preis: "1.200 €" },
];

export const busFlaechenStandard: BusFlaeche[] = [
  {
    position: "Fensterstreifen (umlaufend)",
    groesse: "15-20 cm Höhe",
    preis: "800 €",
  },
  { position: "Heckstreifen", groesse: "170 x 20 cm", preis: "600 €" },
  {
    position: "Dachfläche (optional)",
    groesse: "200 x 150 cm",
    preis: "1.000 €",
  },
];

export const busZusatzoptionen: string[] = [
  "Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)",
  "Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)",
  "Design & Folierung: optionaler Kostenbeitrag (50-100 €)",
  "Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr",
];

export const busNote =
  "Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!";

// ============================================================================
// Kontaktdaten
// ============================================================================

export const kontakt = {
  email: "sponsoring@sckw.de",
  adresse: {
    name: "SC Konstanz-Wollmatingen e.V.",
    strasse: "Schleyerweg 5",
    plz: "D-78467",
    ort: "Konstanz",
  },
  vollAdresse: "SC Konstanz-Wollmatingen e.V.\nSchleyerweg 5\nD-78467 Konstanz",
};

// ============================================================================
// Handoff Lead-Sheet Felder
// ============================================================================

export const leadSheetFields = [
  { label: "Firma / Organisation", type: "text", lines: 1 },
  { label: "Ansprechpartner", type: "text", lines: 1 },
  { label: "Telefon / E-Mail", type: "text", lines: 1 },
  { label: "Interessiert an (Paket/Leistung)", type: "text", lines: 2 },
  { label: "Budget-Rahmen", type: "text", lines: 1 },
  { label: "Notizen / Besonderheiten", type: "text", lines: 4 },
  { label: "Nächste Schritte / Follow-up", type: "text", lines: 2 },
];
