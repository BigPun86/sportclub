import { useState } from "react";
import styled, { css } from "styled-components";
import foerdererData from "../data/foerderer.json";

/**
 * Fördertafel des 500er Clubs.
 *
 * Liest dieselbe foerderer.json, aus der auch die Grafiken für Instagram
 * und Druck erzeugt werden. Ein Eintrag, überall aktuell.
 */

type Foerderer = {
  feld: number;
  name: string | null;
  anonym: boolean;
  saisonBis: number;
};

const ANONYM_LABEL = "SCKW Gönner";

const FARBEN = {
  blau: "#0061D6",
  magenta: "#CC0546",
  navy: "#021A3E",
  grund: "#010814",
  rahmen: "#264270",
  weiss: "#FFFFFF",
  gedaempft: "#96BAF0",
};

// Am Handy 3 Spalten; freie Felder hinter den belegten sind zugeklappt,
// sonst scrollt man durch 30 Reihen leerer Kästen.
const Raster = styled.ol<{ $zugeklappt: boolean }>`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.5rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;

    .tafel-name {
      font-size: 0.85rem;
    }

    ${({ $zugeklappt }) =>
      $zugeklappt &&
      css`
        /* !important: die Felder setzen display inline */
        li[data-extra="true"] {
          display: none !important;
        }
      `}
  }
`;

const AlleButton = styled.button`
  display: none;
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem;
  font: inherit;
  font-weight: 700;
  color: ${FARBEN.weiss};
  background: transparent;
  border: 2px solid ${FARBEN.rahmen};
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Foerdertafel() {
  const { felderGesamt, foerderer } = foerdererData as {
    felderGesamt: number;
    foerderer: Foerderer[];
  };

  const [alleZeigen, setAlleZeigen] = useState(false);
  const belegt = new Map(foerderer.map((f) => [f.feld, f]));
  const vergeben = foerderer.length;
  const felder = Array.from({ length: felderGesamt }, (_, i) => i + 1);
  // Belegte Felder plus zwei volle Reihen freie, auf 3 Spalten aufgerundet
  const letztesBelegt = Math.max(0, ...foerderer.map((f) => f.feld));
  const sichtbarBis = Math.ceil((letztesBelegt + 6) / 3) * 3;

  return (
    <section
      aria-labelledby="tafel-titel"
      style={{ background: FARBEN.grund, padding: "3rem 1rem", color: FARBEN.weiss }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          id="tafel-titel"
          style={{ textAlign: "center", fontSize: "clamp(1.5rem,4vw,2.25rem)", margin: 0 }}
        >
          Unsere Förderer
        </h2>

        <p
          style={{
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: ".05em",
            marginTop: ".75rem",
          }}
        >
          {vergeben} von {felderGesamt} Feldern vergeben
        </p>

        {/* Fortschritt: für Screenreader als progressbar ausgezeichnet */}
        <div
          role="progressbar"
          aria-valuenow={vergeben}
          aria-valuemin={0}
          aria-valuemax={felderGesamt}
          aria-label={`${vergeben} von ${felderGesamt} Feldern vergeben`}
          style={{
            height: 10,
            borderRadius: 999,
            background: "#0E1E3A",
            overflow: "hidden",
            margin: "0 auto 2rem",
            maxWidth: 640,
          }}
        >
          <div
            style={{
              width: `${(vergeben / felderGesamt) * 100}%`,
              height: "100%",
              background: FARBEN.magenta,
            }}
          />
        </div>

        <Raster id="tafel-felder" $zugeklappt={!alleZeigen}>
          {felder.map((nr) => {
            const eintrag = belegt.get(nr);
            const rohName = eintrag
              ? eintrag.anonym
                ? ANONYM_LABEL
                : eintrag.name
              : null;
            // "|" im Namen erzwingt den Zeilenumbruch, gleiche Konvention wie im Tafel-Generator
            const label = rohName ? rohName.replace("|", "\n") : null;

            return (
              <li
                key={nr}
                data-extra={!eintrag && nr > sichtbarBis}
                style={{
                  background: eintrag ? FARBEN.blau : FARBEN.navy,
                  border: eintrag ? "none" : `2px solid ${FARBEN.rahmen}`,
                  borderRadius: 8,
                  padding: ".5rem .4rem",
                  minHeight: 76,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: eintrag ? "space-between" : "center",
                  alignItems: eintrag ? "stretch" : "center",
                }}
              >
                <span
                  style={{
                    fontSize: eintrag ? ".8rem" : "1.1rem",
                    fontWeight: 700,
                    color: eintrag ? "#C6DEFC" : "#3E5A80",
                    lineHeight: 1,
                  }}
                >
                  {String(nr).padStart(2, "0")}
                </span>
                {label && (
                  <span
                    className="tafel-name"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      textAlign: "center",
                      lineHeight: 1.15,
                      hyphens: "manual",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {label}
                  </span>
                )}
              </li>
            );
          })}
        </Raster>

        {sichtbarBis < felderGesamt && (
          <AlleButton
            type="button"
            aria-expanded={alleZeigen}
            aria-controls="tafel-felder"
            onClick={() => setAlleZeigen((v) => !v)}
          >
            {alleZeigen
              ? "Weniger anzeigen"
              : `Alle ${felderGesamt} Felder anzeigen`}
          </AlleButton>
        )}

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: FARBEN.gedaempft,
            fontSize: ".95rem",
          }}
        >
          Jedes Feld steht für einen Förderer unserer ersten Mannschaft.
          Ob Ihr Name erscheint, entscheiden Sie selbst - sonst steht dort
          „{ANONYM_LABEL}".
        </p>
      </div>
    </section>
  );
}
