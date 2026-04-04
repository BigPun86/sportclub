/**
 * Zentrales Datenmodul für alle Sponsoring-Informationen.
 * Wird sowohl von /sponsoring als auch von /sponsoring-handoff verwendet.
 */

// ============================================================================
// Aufstiegs-Banner (einfach hier anpassen)
// ============================================================================

export const aufstiegsBanner = {
  active: true,
  text: "Auf Aufstiegskurs:",
  highlight: "7 Punkte Vorsprung",
  suffix: "– ab Saison 26/27 voraussichtlich Verbandsliga Südbaden",
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
  { value: "250.000", label: "Reichweite / 90 Tage", description: "In der Winterpause gemessen" },
  { value: "32.000", label: "Reichweite / 30 Tage", description: "Monatliche Reichweite aktuell" },
  { value: "50-80k", label: "Monat im Spielbetrieb", description: "Erwartete monatliche Reichweite" },
  { value: "500-800k", label: "Saisonreichweite", description: "Konservative Hochrechnung" },
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
  { label: "Pro Tor", starter: "100 €", premium: "200 €", kombi: "Fix + 150 €" },
  { label: "Pro Punkt", starter: "150 €", premium: "250 €", kombi: "Fix + 200 €" },
  { label: "Pro Zu-Null", starter: "300 €", premium: "500 €", kombi: "Fix + 400 €" },
  { label: "Pro Sieg", starter: "-", premium: "800 €", kombi: "Fix + 600 €" },
];

export const praemienExpectedCosts = {
  starter: "~5.000 €",
  premium: "~12.000 €",
  kombi: "~9.000 €",
};

export const praemienNote = "Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.";

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
  { position: "Heckfläche gesamt (Doppeltür)", groesse: "180 x 170 cm", preis: "2.000 €" },
  { position: "Heckfläche pro Tür", groesse: "80 x 160 cm", preis: "je 1.000 €" },
  { position: "Seitenfläche groß (links)", groesse: "350 x 70 cm", preis: "1.500 €" },
  { position: "Seitenfläche groß (rechts)", groesse: "350 x 70 cm", preis: "1.500 €" },
  { position: "Schiebetür", groesse: "130 x 150 cm", preis: "1.200 €" },
];

export const busFlaechenStandard: BusFlaeche[] = [
  { position: "Fensterstreifen (umlaufend)", groesse: "15-20 cm Höhe", preis: "800 €" },
  { position: "Heckstreifen", groesse: "170 x 20 cm", preis: "600 €" },
  { position: "Dachfläche (optional)", groesse: "200 x 150 cm", preis: "1.000 €" },
];

export const busZusatzoptionen: string[] = [
  "Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)",
  "Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)",
  "Design & Folierung: optionaler Kostenbeitrag (50-100 €)",
  "Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr",
];

export const busNote = "Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!";

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
