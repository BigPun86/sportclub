/**
 * Konfiguration für die Club-500-Spendenseite.
 * Alle Texte, Beträge und Optionen zentral an einer Stelle.
 */

export interface MembershipOption {
  value: number;
  label: string;
  duration: string;
  description: string;
}

export const club500Config = {
  subtitle:
    "Nach der Meisterschaft in der Landesliga spielt unsere erste Mannschaft ab der Saison 2026/27 in der Verbandsliga. 100 Felder, 500 € pro Feld und Saison - jedes Feld steht für einen Förderer.",

  heroImage: "/sckw-logo-500club.png",
  heroTitle: "500er Club",
  heroSubtitle: "GEMEINSAM STARK",

  sectionTitle: "Unterstützungsmöglichkeiten",

  memberships: [
    {
      value: 500,
      label: "500 €",
      duration: "1 Jahr",
      description: "Saison 2026/27",
    },
    {
      value: 1000,
      label: "1.000 €",
      duration: "2 Jahre",
      description: "Unterstützung",
    },
    {
      value: 1500,
      label: "1.500 €",
      duration: "3 Jahre",
      description: "Unterstützung",
    },
  ] as MembershipOption[],

  customAmount: {
    label: "Eigener Betrag",
    minAmount: 500,
    minHint: "Mindestens 500 €",
    durationPlaceholder: "Laufzeit (z. B. 1 Jahr, 2 Jahre …)",
  },

  benefits: [
    {
      icon: "📄",
      title: "Spendenbescheinigung",
      text: "Der SC Konstanz-Wollmatingen ist als gemeinnützig anerkannt. Auf Wunsch erhalten Sie eine Zuwendungsbestätigung.",
    },
    {
      icon: "🏅",
      title: "Ihr Name auf der Tafel",
      text: "Wenn Sie möchten. Wer lieber im Hintergrund bleibt, erscheint als „SCKW Gönner\".",
    },
    {
      icon: "⚽",
      title: "Direkte Förderung der Ersten",
      text: "Auswärtsfahrten, Training, Material und Spielbetrieb in der Verbandsliga.",
    },
  ],

  spendentafel: {
    label: "Spendentafel (optional)",
    sublabel:
      "Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",
    nameFieldPlaceholder: "Name/Firma für die Spendentafel (leer = anonym)",
  },

  bescheinigung: {
    label: "Ich möchte eine Spendenbescheinigung erhalten",
    hinweis: "Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",
    fields: {
      vorname: "Vorname",
      nachname: "Nachname",
      email: "E-Mail",
      strasse: "Straße + Hausnr.",
      plz: "PLZ",
      ort: "Ort",
    },
  },

  paypalCtaLabel: "Mit PayPal spenden",
  paypalHinweis:
    "Bitte geben Sie bei PayPal im Mitteilungsfeld Ihren vollständigen Namen und Ihre Adresse an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.",
  bankCtaLabel: "Per Überweisung",
  verwendungszweck: "CLUB 500",

  paypalMeUrl: "https://www.paypal.me/sckw2012",

  bankDetails: {
    kontoinhaber: "Sport Club Konstanz-Wollmatingen e.V.",
    iban: "DE84 6905 0001 0000 0929 99",
    ibanClean: "DE84690500010000092999",
    bic: "SOLADES1KNZ",
    bank: "Sparkasse Bodensee",
    adresse: "Schleyerweg 5 · 78467 Konstanz",
  },

};
