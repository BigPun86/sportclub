export interface MockupZone {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MockupTemplate {
  id: string;
  label: string;
  image: string;
  zones: MockupZone[];
}

export const mockupTemplates: MockupTemplate[] = [
  {
    id: "vereinsbus",
    label: "Vereinsbus",
    image: "/sckw-bud-exclusive-platzhalter.png",
    zones: [
      {
        id: "seite-gross-oben",
        label: "Seitenfläche groß",
        x: 42.5,
        y: 14.6,
        width: 30.3,
        height: 9.8,
      },
      {
        id: "heck",
        label: "Heckfläche",
        x: 5.9,
        y: 70.4,
        width: 15.2,
        height: 7.9,
      },
      {
        id: "seite-gross-unten",
        label: "Seitenfläche groß",
        x: 43.5,
        y: 71.6,
        width: 27.1,
        height: 8.3,
      },
    ],
  },
  {
    id: "fuerstenberg-bande",
    label: "Fürstenberg: Bande",
    image: "/stadion/bande.jpg",
    zones: [
      {
        id: "freie-bande",
        label: "Einzelbande 3 × 1 m",
        x: 4.2,
        y: 44.5,
        width: 37.5,
        height: 17.5,
      },
    ],
  },
  {
    id: "fuerstenberg-tribuene",
    label: "Fürstenberg: Tribünendach",
    image: "/stadion/tribuene.jpg",
    zones: [
      {
        id: "dach-schriftzug",
        label: "Schriftzug Tribünendach",
        x: 0.5,
        y: 15.5,
        width: 77,
        height: 9.5,
      },
    ],
  },
];
