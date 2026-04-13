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
    "Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",

  heroImage: "/sckw-logo-500club.png",
  heroTitle: "CLUB 500",
  heroSubtitle: "GEMEINSAM STARK",

  sectionTitle: "Unterstützungsmöglichkeiten",

  memberships: [
    {
      value: 500,
      label: "500 €",
      duration: "1 Jahr",
      description: "Mitglied im CLUB 500",
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
    { icon: "📄", text: "Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)" },
    { icon: "🏅", text: "Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer" },
    { icon: "⚽", text: "Direkte Förderung des <strong>lokalen Sports</strong> und der Jugend" },
  ],

  spendentafel: {
    label: "Auf die Spendentafel",
    sublabel:
      "Ihr Name/Firma wird auf unserer Website & am Vereinsgelände veröffentlicht.",
    anonymLabel: "Anonym spenden",
    nameFieldPlaceholder:
      "Name/Firma für Veröffentlichung (optional, falls abweichend)",
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
    kontoinhaber: "SC Konstanz-Wollmatingen e.V.",
    iban: "DE84 6905 0001 0000 0929 99",
    ibanClean: "DE84690500010000092999",
    bic: "SOLADES1KNZ",
    bank: "Sparkasse Bodensee",
    adresse: "Schleyerweg 5 · 78467 Konstanz",
  },

};
