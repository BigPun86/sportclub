/**
 * Premium Sponsoring-Broschüre + Helfer-Arbeitspapier.
 * Route: /sponsoring-handoff
 *
 * Toggles in der Toolbar:
 *  1. Preise anzeigen / ausblenden
 *  2. Helfer-Anhang ein / aus
 */

import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { getHeroImage } from "../utils/imageLoader";
import {
  kpis,
  praemienRows,
  praemienExpectedCosts,
  busFlaechenPremium,
  busFlaechenStandard,
  busZusatzoptionen,
  kontakt,
  leadSheetFields,
} from "../data/sponsoringData";

// ============================================================================
// Types
// ============================================================================

interface PageProps {
  showPrices: boolean;
}

// ============================================================================
// Access Guard
// ============================================================================

function useAccessGuard(): boolean {
  const [searchParams] = useSearchParams();
  const envKey = import.meta.env.VITE_HANDOFF_KEY;
  if (!envKey) return true;
  return searchParams.get("k") === envKey;
}

// ============================================================================
// Global Print Overrides
// ============================================================================

const PrintStyles = createGlobalStyle`
  @media print {
    @page { size: A4 portrait; margin: 0; }

    html, body, #root {
      width: 100% !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
      overflow: visible !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`;

// ============================================================================
// Screen-only UI
// ============================================================================

const Toolbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  padding: 0.75rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  @media print { display: none !important; }
`;

const ToolbarTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

const ToolbarActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

const Btn = styled.button<{ $primary?: boolean; $active?: boolean }>`
  background: ${p =>
    p.$primary
      ? "#fff"
      : p.$active
        ? "rgba(255,255,255,0.35)"
        : "rgba(255,255,255,0.12)"};
  color: ${p => (p.$primary ? "#1a365d" : "#fff")};
  border: 2px solid ${p => (p.$primary ? "#fff" : "rgba(255,255,255,0.25)")};
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`;

const Hint = styled.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`;

const Pages = styled.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`;

// ============================================================================
// A4 Page Shell
// ============================================================================

const A4 = styled.section`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto 2rem;
  background: #fff;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media print {
    width: 100%;
    min-height: 297mm;
    height: 297mm;
    margin: 0;
    box-shadow: none;
    page-break-after: always;
    break-after: page;
  }
  &:last-child {
    @media print { page-break-after: auto; break-after: auto; }
  }
`;

// ============================================================================
// Wave Background (club colours – mimics old PDF swirls)
// ============================================================================

const Waves = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    bottom: -320px;
    left: -160px;
    background: radial-gradient(circle, rgba(74, 144, 226, 0.10) 0%, transparent 70%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    bottom: -200px;
    right: -120px;
    background: radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, transparent 70%);
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`;

// ============================================================================
// Reusable elements
// ============================================================================

const LogoWrap = styled.div`text-align: center; margin-bottom: 6mm;`;
const LogoImg = styled.img`height: 20mm;`;

const Title = styled.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`;

const H2 = styled.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`;

const P = styled.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`;

const Check = styled.li`
  font-size: 10.5pt;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2mm;
  padding-left: 6mm;
  position: relative;
  list-style: none;
  &::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: #1a365d;
    font-weight: 700;
  }
`;

const Checks = styled.ul`padding: 0; margin: 3mm 0;`;

const Price = styled.div<{ $hidden?: boolean }>`
  display: ${p => (p.$hidden ? "none" : "block")};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`;

const LeadField = styled.div`margin-bottom: 4mm;`;

const LeadLabel = styled.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`;

const LeadInput = styled.div<{ $lines?: number }>`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${p => (p.$lines || 1) * 8}mm;
  background: #fafafa;
`;

const Disclaimer = styled.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`;

const Footer = styled.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`;

const FooterCol = styled.div<{ $right?: boolean; $center?: boolean }>`
  text-align: ${p => (p.$right ? "right" : p.$center ? "center" : "left")};
`;

// ============================================================================
// Shared Footer + Disclaimer
// ============================================================================

function BrochureDisclaimer() {
  return (
    <Disclaimer>
      Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.<br />
      Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt.
    </Disclaimer>
  );
}

function BrochureFooter() {
  return (
    <Footer>
      <FooterCol>
        <strong>SC Konstanz-Wollmatingen e.V.</strong><br />
        Schleyerweg 5<br />
        78467 Konstanz
      </FooterCol>
      <FooterCol $center>
        {kontakt.email}<br />
        partner.sckw.de
      </FooterCol>
      <FooterCol $right>
        Sparkasse Bodensee<br />
        IBAN: DE12 6905 0001 0000 0228 06<br />
        BIC: SOLADES1KNZ
      </FooterCol>
    </Footer>
  );
}

// ============================================================================
// Gallery images
// ============================================================================

const heroTeam = getHeroImage("herren/herren_0");
const heroAction = getHeroImage("herren/herren_6");
const heroBanden = getHeroImage("herren/herren_1");
const heroJubel = getHeroImage("herren/herren_14");

const Photo = styled.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;

// ============================================================================
// PAGE 1 – Cover
// ============================================================================

function PageCover() {
  return (
    <A4>
      <div style={{
        background: "linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",
        height: "100%", minHeight: "297mm",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", color: "#fff",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-60mm", right: "-50mm",
          width: "200mm", height: "200mm", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-40mm", left: "-40mm",
          width: "180mm", height: "180mm", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "40mm", left: "-20mm",
          width: "140mm", height: "140mm", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)",
        }} />
        <img src="/sckw-logo-500club.png" alt="SC Konstanz-Wollmatingen" style={{
          height: "70mm", objectFit: "contain", position: "relative", zIndex: 1,
          filter: "drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))",
        }} />
        <h1 style={{
          fontSize: "40pt", fontWeight: 900, margin: "8mm 0 6mm",
          letterSpacing: "-0.03em",
          position: "relative", zIndex: 1,
          textShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          SPONSORING
        </h1>
        <p style={{
          fontSize: "15pt", fontWeight: 400, opacity: 0.95,
          maxWidth: "140mm", lineHeight: 1.5, margin: "0 0 12mm",
          position: "relative", zIndex: 1,
          textShadow: "0 1px 8px rgba(0,0,0,0.3)",
        }}>
          Werden Sie Teil unserer Erfolgsgeschichte.<br />
          Sichtbarkeit, die wirkt.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "5mm", position: "relative", zIndex: 1 }}>
          {kpis.slice(0, 2).map(k => (
            <div key={k.label} style={{
              background: "rgba(0,0,0,0.35)", borderRadius: "4mm",
              padding: "5mm 10mm", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <div style={{ fontSize: "24pt", fontWeight: 900 }}>{k.value}</div>
              <div style={{ fontSize: "7pt", textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.9 }}>{k.label}</div>
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: "12mm", fontSize: "9pt", opacity: 0.8,
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}>
          Saison 2025/26 · partner.sckw.de
        </div>
      </div>
    </A4>
  );
}

// ============================================================================
// PAGE 2 – Warum SCKW
// ============================================================================

function PageWhySCKW() {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>WARUM SCKW?</Title>
        <Subtitle>Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional.</Subtitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3mm", margin: "4mm 0" }}>
          {kpis.map(k => (
            <div key={k.label} style={{
              background: "linear-gradient(135deg, #1a365d, #2d5a87)",
              borderRadius: "3mm", padding: "4mm 3mm", textAlign: "center", color: "#fff",
            }}>
              <div style={{ fontSize: "16pt", fontWeight: 900 }}>{k.value}</div>
              <div style={{ fontSize: "6.5pt", textTransform: "uppercase", opacity: 0.9 }}>{k.label}</div>
            </div>
          ))}
        </div>

        <H2>Was Sie bei uns erreichen</H2>
        <Checks>
          <Check>Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region</Check>
          <Check>Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses</Check>
          <Check>Doppelte Reichweite: Live im Stadion + Digital auf Social Media</Check>
          <Check>Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch</Check>
        </Checks>

        <H2>Der Verein auf einen Blick</H2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm" }}>
          <div>
            <P><strong>Gegründet:</strong> 1912</P>
            <P><strong>Mitglieder:</strong> 500+</P>
            <P><strong>Mannschaften:</strong> Herren, Damen, Jugend</P>
          </div>
          <div>
            <P><strong>Heimspiele:</strong> 15+ pro Saison</P>
            <P><strong>Zuschauer:</strong> Ø 200 pro Spiel</P>
            <P><strong>Instagram:</strong> 2.500+ Follower</P>
          </div>
        </div>

        {heroTeam && (
          <Photo src={heroTeam} alt="Team" style={{ height: "55mm", marginTop: "4mm" }} />
        )}

        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 3 – Hauptsponsor
// ============================================================================

function PageHauptsponsor({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>HAUPTSPONSOR</Title>
        <Subtitle>
          Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält
          weitere Leistungen zur optimalen Präsentation des Unternehmens.
        </Subtitle>

        <Checks>
          <Check>Trikotwerbung auf der Brust</Check>
          <Check>Business Club Mitgliedschaft</Check>
          <Check>5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)</Check>
          <Check>1/1 seitiges Inserat im SC Magazin</Check>
          <Check>10 Saisonkarten</Check>
          <Check>Werbeauftritte nach Absprache</Check>
          <Check>Nennung (Logo) auf dem Briefpapier des SCKW</Check>
          <Check>Lautsprecherdurchsage während dem Spiel und in der Halbzeit</Check>
          <Check>Logo / Namenszug auf den Fahrzeugen</Check>
          <Check>Logo / Link auf der Vereinshomepage</Check>
          <Check>weitere Möglichkeiten nach Absprache</Check>
        </Checks>

        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 15.000€ pro Saison</strong>
        </Price>

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 4 – Co-Sponsor
// ============================================================================

function PageCoSponsor({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>CO-SPONSOR</Title>
        <Subtitle>
          Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält
          weitere Leistungen zur optimalen Präsentation des Unternehmens.
        </Subtitle>

        <Checks>
          <Check>Werbung auf den Trainingsanzügen</Check>
          <Check>Business Club Mitgliedschaft</Check>
          <Check>5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)</Check>
          <Check>1/2 seitiges Inserat im SC Magazin</Check>
          <Check>5 Saisonkarten</Check>
          <Check>Werbeauftritte nach Absprache</Check>
          <Check>Nennung (Logo) auf dem Briefpapier des SCKW</Check>
          <Check>Lautsprecherdurchsage während dem Spiel und in der Halbzeit</Check>
          <Check>Logo / Namenszug auf den Fahrzeugen</Check>
          <Check>Logo / Link auf der Vereinshomepage</Check>
          <Check>weitere Möglichkeiten nach Absprache</Check>
        </Checks>

        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 9.500€ pro Saison</strong>
        </Price>

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 5 – SILBER + Community-Partner
// ============================================================================

function PageSilberCommunity({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>SILBER-PARTNER</Title>
        <Subtitle>
          Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region.
        </Subtitle>

        <Checks>
          <Check>1 Bande (5×2 m) am Gelände</Check>
          <Check>Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr</Check>
          <Check>Werbeplane am Gelände</Check>
          <Check>Vereinsplakate + Eventsichtbarkeit</Check>
          <Check>Website: Logo auf Startseite</Check>
        </Checks>

        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 5.000€ pro Saison</strong>
        </Price>

        <H2 style={{ marginTop: "8mm" }}>COMMUNITY-PARTNER</H2>
        <Subtitle>
          Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel.
        </Subtitle>

        <Checks>
          <Check>1 Bande (3×1 m, 6 Monate sichtbar)</Check>
          <Check>Website: Logo auf der Startseite</Check>
          <Check>Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr</Check>
          <Check>Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie</Check>
        </Checks>

        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 2.000€ pro Saison</strong>
        </Price>

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 6 – Bandenwerbung
// ============================================================================

function PageBandenwerbung({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>BANDENWERBUNG</Title>
        <Subtitle>Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen</Subtitle>

        <Checks>
          <Check>Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch</Check>
        </Checks>

        <P>
          <strong>Platzierung:</strong><br />
          Gemäss Besprechung und Belegungsplan.<br />
          Die Banden sind unterteilt in einer Größe von 100 x 90 cm.<br />
          <strong>Mindestabnahmemenge: 2 Meter</strong>
        </P>

        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 800€ pro Saison</strong>
        </Price>

        {heroBanden && (
          <Photo src={heroBanden} alt="Banden" style={{ height: "60mm", marginTop: "4mm" }} />
        )}

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 7 – Stadionmagazin "HEIMSPIEL"
// ============================================================================

function PageMagazin({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>WERBUNG IM „HEIMSPIEL"</Title>
        <Subtitle>Stadionmagazin des SC Konstanz-Wollmatingen</Subtitle>

        <Checks>
          <Check>15 Ausgaben pro Saison</Check>
          <Check>ca. 100 Exemplare pro Heimspiel</Check>
          <Check>Digitale Version (Social Media & Webseite)</Check>
          <Check>1.000 - 1.500 Online Zugriffe je Auflage</Check>
          <Check>DIN A4 Stadionmagazin</Check>
          <Check>wird ausgelegt in diversen Arztpraxen</Check>
        </Checks>

        {showPrices && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4mm", margin: "8mm 0" }}>
            {[
              { size: "1 SEITE", price: "1.000€", dim: "DIN A4 (297 × 210 mm)" },
              { size: "1/2 SEITE", price: "500€", dim: "DIN A5 (148 × 210 mm)" },
              { size: "1/4 SEITE", price: "250€", dim: "DIN A6 (105 × 148 mm)" },
            ].map(m => (
              <div key={m.size} style={{
                border: "2px solid #1a365d", borderRadius: "3mm", padding: "5mm",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "14pt", fontWeight: 800 }}>{m.size}</div>
                <div style={{ fontSize: "9pt", color: "#666" }}>FARBE</div>
                <div style={{ fontSize: "18pt", fontWeight: 900, color: "#1a365d", margin: "2mm 0" }}>{m.price}</div>
              </div>
            ))}
          </div>
        )}

        {showPrices && (
          <div style={{ fontSize: "10pt", lineHeight: 1.7 }}>
            <strong>Maße</strong><br />
            1 Seite = DIN A4 (297 x 210 mm)<br />
            1/2 Seite = DIN A5 (148 x 210 mm)<br />
            1/4 Seite = DIN A6 (105 x 148 mm)
          </div>
        )}

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 8 – Spielsponsoring (Ballspende)
// ============================================================================

function PageSpieltag({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>SPIELTAG-SPONSORING</Title>
        <Subtitle>
          Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der
          1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich.
        </Subtitle>

        <H2>Ballspende</H2>
        <P style={{ fontStyle: "italic" }}>
          Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der
          Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt.
          Exklusiv: nur ein Ballsponsor pro Spiel.
        </P>
        <Checks>
          <Check>Stadiondurchsage vor dem Spiel + bei jedem Tor</Check>
          <Check>Namensnennung in der Halbzeitpause</Check>
          <Check>1 Instagram-Story vor dem Spiel mit Logo</Check>
          <Check>Logo/Name auf Website + Erwähnung im SC Magazin</Check>
        </Checks>
        <Price $hidden={!showPrices}>
          Beitrag: <strong>150€ pro Spiel</strong> · 5er-Pack: <strong>500€</strong> (statt 750€)
        </Price>

        <H2>Spielpräsentator</H2>
        <P style={{ fontStyle: "italic" }}>
          Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen
          Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel.
          Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby).
        </P>
        <Checks>
          <Check>Alle Aufstellungen + Auswechslungen im Firmennamen</Check>
          <Check>Namentliche Erwähnung im SC Magazin</Check>
          <Check>Social Media Erwähnung am Spieltag</Check>
        </Checks>
        <Price $hidden={!showPrices}>
          Beitrag: <strong>ab 250€ pro Spiel</strong>
        </Price>

        {heroAction && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm", marginTop: "3mm" }}>
            <Photo src={heroAction} alt="Action" style={{ height: "48mm" }} />
            <Photo src={heroJubel || heroAction} alt="Jubel" style={{ height: "48mm" }} />
          </div>
        )}

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 11 – Buswerbung
// ============================================================================

function PageBuswerbung({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>BUSWERBUNG</Title>
        <Subtitle>
          Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei
          Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen.
        </Subtitle>

        <img src="/vereinsbus.png" alt="Vereinsbus SC Konstanz-Wollmatingen"
          style={{ width: "100%", borderRadius: "3mm", margin: "3mm 0 4mm", display: "block" }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10pt", margin: "4mm 0" }}>
          <thead>
            <tr>
              <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left", fontWeight: 700 }}>Fläche</th>
              <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left", fontWeight: 700 }}>Größe (ca.)</th>
              {showPrices && (
                <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left", fontWeight: 700 }}>Preis/Jahr</th>
              )}
            </tr>
          </thead>
          <tbody>
            {[...busFlaechenPremium, ...busFlaechenStandard].map((f, i) => (
              <tr key={f.position} style={{ background: i % 2 === 1 ? "#f8fafc" : "transparent" }}>
                <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb" }}>{f.position}</td>
                <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb" }}>{f.groesse}</td>
                {showPrices && (
                  <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb", fontWeight: 700 }}>{f.preis}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <H2>Zusatzoptionen</H2>
        <Checks>
          {busZusatzoptionen.map((opt, i) => (
            <Check key={i}>{opt}</Check>
          ))}
        </Checks>

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 12 – Prämienmodell
// ============================================================================

function PagePraemien({ showPrices }: PageProps) {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title>PRÄMIEN-MODELL</Title>
        <Subtitle>
          Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg.
          Perfekt für Sponsoren, die mit dem Team mitfiebern wollen.
        </Subtitle>

        {showPrices && (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10pt", margin: "4mm 0" }}>
            <thead>
              <tr>
                <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left" }}>Leistung</th>
                <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left" }}>Starter</th>
                <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left" }}>Premium</th>
                <th style={{ background: "#1a365d", color: "#fff", padding: "2.5mm 3mm", textAlign: "left" }}>Kombi</th>
              </tr>
            </thead>
            <tbody>
              {praemienRows.map((r, i) => (
                <tr key={r.label} style={{ background: i % 2 === 1 ? "#f8fafc" : "transparent" }}>
                  <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb", fontWeight: 600 }}>{r.label}</td>
                  <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb" }}>{r.starter}</td>
                  <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb" }}>{r.premium}</td>
                  <td style={{ padding: "2mm 3mm", borderBottom: "1px solid #e5e7eb" }}>{r.kombi}</td>
                </tr>
              ))}
              <tr style={{ background: "#f0f9ff" }}>
                <td style={{ padding: "2mm 3mm", fontWeight: 700 }}>Ø Kosten/Saison</td>
                <td style={{ padding: "2mm 3mm", fontWeight: 700 }}>{praemienExpectedCosts.starter}</td>
                <td style={{ padding: "2mm 3mm", fontWeight: 700 }}>{praemienExpectedCosts.premium}</td>
                <td style={{ padding: "2mm 3mm", fontWeight: 700 }}>{praemienExpectedCosts.kombi}</td>
              </tr>
            </tbody>
          </table>
        )}

        <H2>So funktioniert's</H2>
        <Checks>
          <Check>Sie wählen ein Modell (Starter, Premium oder Kombi)</Check>
          <Check>Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig</Check>
          <Check>Stadionansage + Social Media Erwähnung bei jedem Erfolg</Check>
          <Check>Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)</Check>
        </Checks>

        <H2>Inkludierte Leistungen</H2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm" }}>
          <div>
            <P><strong>Starter:</strong></P>
            <Checks>
              <Check>Stadionansage bei Erfolg</Check>
              <Check>Logo auf Website</Check>
            </Checks>
          </div>
          <div>
            <P><strong>Premium:</strong></P>
            <Checks>
              <Check>+ Social Media Post bei Erfolg</Check>
              <Check>+ 1 Bande (3×1m) inklusive</Check>
            </Checks>
          </div>
        </div>

        <BrochureDisclaimer />
        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// PAGE 13 – 500 €Club (Premium-Pitch)
// ============================================================================

const heroJubelClub = getHeroImage("herren/herren_jubel_500club");

function Page500EuroClub() {
  return (
    <A4>
      {/* Jubel-Foto */}
      {heroJubelClub && (
        <img src={heroJubelClub} alt="Mannschaft feiert" style={{
          width: "100%", height: "65mm", objectFit: "cover", display: "block",
        }} />
      )}

      <div style={{ padding: "8mm 18mm 10mm", position: "relative" }}>
        <Subtitle style={{ fontSize: "11pt", margin: "0 0 4mm", fontStyle: "normal", lineHeight: 1.6, color: "#333" }}>
          Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist,
          trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege
          oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch
          Mitgliedsbeiträge gedeckt werden.
        </Subtitle>

        <P style={{ fontSize: "10.5pt", margin: "0 0 5mm", lineHeight: 1.6 }}>
          <strong>Helfen Sie uns mit dem Beitritt in den 500 €Club.</strong> Unterstützen Sie
          unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial,
          Infrastruktur und die Entwicklung unserer Mannschaften.
        </P>

        <H2>Ihre Vorteile</H2>
        <Checks>
          <Check>Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)</Check>
          <Check>Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer</Check>
          <Check>Direkte Förderung des Jugend- und Amateurfußballs in unserer Region</Check>
        </Checks>

        <H2>Zahlungsoptionen</H2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10.5pt", margin: "2mm 0" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #1a365d", color: "#1a365d", padding: "2mm 0", textAlign: "left", fontWeight: 800, fontSize: "9pt" }}>
                Zahlungsweise
              </th>
              <th style={{ borderBottom: "2px solid #1a365d", color: "#1a365d", padding: "2mm 0", textAlign: "right", fontWeight: 800, fontSize: "9pt" }}>
                Beitrag
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Vierteljährlich", betrag: "125 €" },
              { label: "Halbjährlich", betrag: "250 €" },
              { label: "Jährlich", betrag: "500 €" },
            ].map(row => (
              <tr key={row.label}>
                <td style={{ padding: "2.5mm 0", borderBottom: "1px solid #e5e7eb", color: "#444" }}>{row.label}</td>
                <td style={{ padding: "2.5mm 0", borderBottom: "1px solid #e5e7eb", fontWeight: 800, color: "#1a365d", textAlign: "right" }}>{row.betrag}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <P style={{ fontSize: "9pt", color: "#888", margin: "1mm 0 4mm" }}>
          Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre).
        </P>

        <H2>Spendenkonto</H2>
        <P style={{ fontSize: "10.5pt", margin: "0 0 0", lineHeight: 1.7 }}>
          <strong>Sport Club Konstanz‑Wollmatingen e.V.</strong><br />
          IBAN: <strong>DE84 6905 0001 0000 0929 99</strong> · Sparkasse Bodensee<br />
          Schleyerweg 5 · 78467 Konstanz
        </P>

        <div style={{ marginTop: "6mm", textAlign: "center", borderTop: "1px solid #e5e7eb", paddingTop: "5mm" }}>
          <P style={{ margin: 0, fontSize: "11pt", fontWeight: 800, fontStyle: "italic", color: "#1a365d", lineHeight: 1.4 }}>
            Gehen Sie den gemeinsamen Weg mit uns<br />
            in eine erfolgreiche Zukunft!
          </P>
          <P style={{ margin: "2mm 0 0", fontSize: "9pt", color: "#666" }}>
            Adel Grimm · Sportlicher Leiter<br />
            Tel. +49 152 3384 2436 · grimm@sckw.de
          </P>
        </div>

        <BrochureFooter />
      </div>
    </A4>
  );
}

// ============================================================================
// PAGE 14 – 500 €Club Anmeldeformular
// ============================================================================

function Page500EuroClubAnmeldung() {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title style={{ color: "#1a365d", fontSize: "22pt" }}>BEITRITTSERKLÄRUNG 500 €CLUB</Title>
        <Subtitle style={{ margin: "0 0 4mm" }}>
          Bitte ausfüllen und an den Verein übergeben oder per E-Mail an {kontakt.email} senden.
        </Subtitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
          <LeadField><LeadLabel>Vorname:</LeadLabel><LeadInput $lines={1} /></LeadField>
          <LeadField><LeadLabel>Nachname:</LeadLabel><LeadInput $lines={1} /></LeadField>
        </div>

        <LeadField><LeadLabel>Firma (optional):</LeadLabel><LeadInput $lines={1} /></LeadField>

        <LeadField><LeadLabel>Straße, Hausnummer:</LeadLabel><LeadInput $lines={1} /></LeadField>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3mm" }}>
          <LeadField><LeadLabel>PLZ:</LeadLabel><LeadInput $lines={1} /></LeadField>
          <LeadField><LeadLabel>Ort:</LeadLabel><LeadInput $lines={1} /></LeadField>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3mm" }}>
          <LeadField><LeadLabel>Geb.-Datum:</LeadLabel><LeadInput $lines={1} /></LeadField>
          <LeadField><LeadLabel>Telefon:</LeadLabel><LeadInput $lines={1} /></LeadField>
          <LeadField><LeadLabel>E-Mail:</LeadLabel><LeadInput $lines={1} /></LeadField>
        </div>

        <H2 style={{ marginTop: "4mm" }}>Zahlungsweise</H2>
        <P style={{ fontSize: "9pt", color: "#555", margin: "0 0 2mm" }}>Bitte ankreuzen:</P>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2mm" }}>
          {[
            "125 € vierteljährlich",
            "250 € halbjährlich",
            "500 € jährlich",
          ].map(opt => (
            <div key={opt} style={{
              border: "1px solid #d1d5db", borderRadius: "2mm", padding: "2.5mm 3mm",
              textAlign: "center", background: "#fafafa",
            }}>
              <LeadLabel style={{ marginBottom: 0, fontSize: "9pt" }}>☐ {opt}</LeadLabel>
            </div>
          ))}
        </div>
        <P style={{ fontSize: "8pt", color: "#888", margin: "1mm 0 0" }}>
          Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)
        </P>

        <H2 style={{ marginTop: "4mm" }}>Wie möchten Sie gewürdigt werden?</H2>
        <P style={{ fontSize: "9pt", color: "#555", margin: "0 0 2mm" }}>Mehrfachauswahl möglich:</P>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5mm" }}>
          {[
            "Danke-Post auf Instagram (\"Danke [Name], dass du Mitglied im 500 €Club bist!\")",
            "Nennung auf der Spendentafel (Vereinsgelände / Website)",
            "Ich möchte anonym bleiben",
          ].map(opt => (
            <div key={opt} style={{
              border: "1px solid #d1d5db", borderRadius: "2mm", padding: "2mm 3mm",
              background: "#fafafa", fontSize: "9pt",
            }}>
              <LeadLabel style={{ marginBottom: 0, fontSize: "9pt" }}>☐ {opt}</LeadLabel>
            </div>
          ))}
        </div>

        <LeadField style={{ marginTop: "2mm" }}>
          <LeadLabel>Name/Firma für Veröffentlichung (falls abweichend):</LeadLabel>
          <LeadInput $lines={1} />
        </LeadField>

        <div style={{
          marginTop: "3mm", background: "#f8fafc", borderRadius: "2mm",
          padding: "2.5mm 3mm", fontSize: "7.5pt", color: "#666", lineHeight: 1.5,
        }}>
          Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club.
          Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden.
          Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen.
          Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft
          Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen.
          Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm", marginTop: "4mm" }}>
          <LeadField>
            <LeadLabel>Konstanz, den _______________</LeadLabel>
            <div style={{ borderBottom: "1px solid #333", minHeight: "10mm", marginTop: "2mm" }} />
            <div style={{ fontSize: "7pt", color: "#999", marginTop: "1mm" }}>Datum</div>
          </LeadField>
          <LeadField>
            <LeadLabel>Unterschrift:</LeadLabel>
            <div style={{ borderBottom: "1px solid #333", minHeight: "10mm", marginTop: "2mm" }} />
          </LeadField>
        </div>

        <div style={{
          marginTop: "3mm", fontSize: "8pt", color: "#555", lineHeight: 1.5,
          borderTop: "1px solid #e5e7eb", paddingTop: "2mm",
        }}>
          <strong>Spendenkonto:</strong> SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee<br />
          <strong>Kontakt:</strong> {kontakt.email} · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz
        </div>

        <Footer style={{ marginTop: "auto" }}>
          <FooterCol><strong>SC Konstanz-Wollmatingen e.V.</strong></FooterCol>
          <FooterCol $center>500 €Club</FooterCol>
          <FooterCol $right>partner.sckw.de</FooterCol>
        </Footer>
      </Inner>
    </A4>
  );
}

// ============================================================================
// HELPER PAGE A – So geht's weiter + Kontakt
// ============================================================================

function PageNextSteps() {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title style={{ color: "#1a365d" }}>SO GEHT'S WEITER</Title>
        <Subtitle>In 4 einfachen Schritten zum Sponsoring-Start.</Subtitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4mm", margin: "4mm 0" }}>
          {[
            { n: "1", t: "KONTAKT", d: "Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h." },
            { n: "2", t: "BEDARF", d: "Wir klären gemeinsam Ziele, Budget und passende Leistungen." },
            { n: "3", t: "ANGEBOT", d: "Sie erhalten ein individuelles Angebot mit klaren Leistungen." },
            { n: "4", t: "START", d: "Nach Zusage: Design, Abstimmung, Launch!" },
          ].map(s => (
            <div key={s.n} style={{ background: "#f8fafc", borderRadius: "3mm", padding: "4mm", borderLeft: "4px solid #1a365d" }}>
              <div style={{ fontSize: "22pt", fontWeight: 900, color: "#1a365d" }}>{s.n}</div>
              <div style={{ fontSize: "11pt", fontWeight: 800, marginBottom: "1mm" }}>{s.t}</div>
              <P style={{ margin: 0, fontSize: "9pt" }}>{s.d}</P>
            </div>
          ))}
        </div>

        <H2>Kontakt</H2>
        <div style={{
          background: "linear-gradient(135deg, #1a365d, #2d5a87)",
          borderRadius: "3mm", padding: "5mm", color: "#fff",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm",
        }}>
          <div>
            <div style={{ fontSize: "8pt", opacity: 0.7 }}>E-Mail</div>
            <div style={{ fontSize: "13pt", fontWeight: 700 }}>{kontakt.email}</div>
          </div>
          <div>
            <div style={{ fontSize: "8pt", opacity: 0.7 }}>Website</div>
            <div style={{ fontSize: "13pt", fontWeight: 700 }}>partner.sckw.de</div>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <div style={{ fontSize: "8pt", opacity: 0.7 }}>Adresse</div>
            <div style={{ fontSize: "11pt" }}>
              {kontakt.adresse.name} · {kontakt.adresse.strasse} · {kontakt.adresse.plz} {kontakt.adresse.ort}
            </div>
          </div>
        </div>

        <H2>Gesprächsleitfaden</H2>
        <div style={{ background: "#eff6ff", border: "2px dashed #3b82f6", borderRadius: "3mm", padding: "4mm" }}>
          <P style={{ fontSize: "9pt", color: "#1e3a5f", margin: "0 0 1.5mm" }}>→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."</P>
          <P style={{ fontSize: "9pt", color: "#1e3a5f", margin: "0 0 1.5mm" }}>→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."</P>
          <P style={{ fontSize: "9pt", color: "#1e3a5f", margin: "0 0 1.5mm" }}>→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."</P>
          <P style={{ fontSize: "9pt", color: "#1e3a5f", margin: "0 0 1.5mm" }}>→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."</P>
        </div>

        <BrochureFooter />
      </Inner>
    </A4>
  );
}

// ============================================================================
// HELPER PAGE B – Lead-Sheet / Gesprächsnotiz
// ============================================================================

function PageLeadSheet() {
  return (
    <A4>
      <Waves />
      <Inner>
        <LogoWrap><LogoImg src="/logo.svg" /></LogoWrap>
        <Title style={{ color: "#1a365d" }}>GESPRÄCHSNOTIZ</Title>
        <Subtitle>Interne Dokumentation – nach dem Gespräch ausfüllen und an {kontakt.email} senden.</Subtitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
          <LeadField><LeadLabel>Datum:</LeadLabel><LeadInput $lines={1} /></LeadField>
          <LeadField><LeadLabel>Gesprächsführer (Helfer):</LeadLabel><LeadInput $lines={1} /></LeadField>
        </div>

        {leadSheetFields.map((f, i) => (
          <LeadField key={i}><LeadLabel>{f.label}:</LeadLabel><LeadInput $lines={f.lines} /></LeadField>
        ))}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3mm", marginTop: "3mm" }}>
          {["Hot Lead", "Warm Lead", "Später kontaktieren"].map(l => (
            <div key={l} style={{ border: "1px solid #d1d5db", borderRadius: "2mm", padding: "2.5mm" }}>
              <LeadLabel style={{ marginBottom: 0 }}>☐ {l}</LeadLabel>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4mm", background: "#f0f9ff", borderRadius: "2mm", padding: "3mm" }}>
          <P style={{ margin: 0, fontSize: "8pt" }}>
            <strong>Schnellreferenz:</strong> {kontakt.email} · partner.sckw.de ·{" "}
            {kontakt.vollAdresse.replace(/\n/g, " · ")}
          </P>
        </div>

        <Footer style={{ marginTop: "auto" }}>
          <FooterCol><strong>Internes Dokument</strong></FooterCol>
          <FooterCol $center />
          <FooterCol $right>SC Konstanz-Wollmatingen e.V.</FooterCol>
        </Footer>
      </Inner>
    </A4>
  );
}

// ============================================================================
// Page Registry
// ============================================================================

interface PageDef {
  id: string;
  label: string;
  group: "broschüre" | "community" | "helfer";
  needsPrices?: boolean;
  render: (showPrices: boolean) => React.ReactNode;
}

const ALL_PAGES: PageDef[] = [
  { id: "cover", label: "Titelseite", group: "broschüre", render: () => <PageCover /> },
  { id: "why", label: "Warum SCKW?", group: "broschüre", render: () => <PageWhySCKW /> },
  { id: "haupt", label: "Hauptsponsor", group: "broschüre", needsPrices: true, render: (p) => <PageHauptsponsor showPrices={p} /> },
  { id: "co", label: "Co-Sponsor", group: "broschüre", needsPrices: true, render: (p) => <PageCoSponsor showPrices={p} /> },
  { id: "silber", label: "Silber + Community", group: "broschüre", needsPrices: true, render: (p) => <PageSilberCommunity showPrices={p} /> },
  { id: "banden", label: "Bandenwerbung", group: "broschüre", needsPrices: true, render: (p) => <PageBandenwerbung showPrices={p} /> },
  { id: "magazin", label: "Stadionmagazin", group: "broschüre", needsPrices: true, render: (p) => <PageMagazin showPrices={p} /> },
  { id: "spieltag", label: "Spieltag-Sponsoring", group: "broschüre", needsPrices: true, render: (p) => <PageSpieltag showPrices={p} /> },
  { id: "bus", label: "Buswerbung", group: "broschüre", needsPrices: true, render: (p) => <PageBuswerbung showPrices={p} /> },
  { id: "praemien", label: "Prämienmodell", group: "broschüre", needsPrices: true, render: (p) => <PagePraemien showPrices={p} /> },
  { id: "club500", label: "500 €Club", group: "community", render: () => <Page500EuroClub /> },
  { id: "club500form", label: "500 €Club Anmeldung", group: "community", render: () => <Page500EuroClubAnmeldung /> },
  { id: "steps", label: "So geht's weiter", group: "helfer", render: () => <PageNextSteps /> },
  { id: "lead", label: "Gesprächsnotiz", group: "helfer", render: () => <PageLeadSheet /> },
];

// ============================================================================
// Dashboard Styles
// ============================================================================

const Dashboard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`;

const DashTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`;

const DashSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`;

const OptionsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const Toggle = styled.button<{ $on?: boolean }>`
  background: ${p => (p.$on ? "#1a365d" : "#f1f5f9")};
  color: ${p => (p.$on ? "#fff" : "#475569")};
  border: 2px solid ${p => (p.$on ? "#1a365d" : "#cbd5e1")};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`;

const GroupLabel = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`;

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`;

const PageCheckbox = styled.label<{ $checked?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${p => (p.$checked ? "#1a365d" : "#e2e8f0")};
  background: ${p => (p.$checked ? "#f0f4ff" : "#fff")};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${p => (p.$checked ? "#1a365d" : "#64748b")};
  transition: all 0.15s;
  user-select: none;
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`;

const PresetRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Preset = styled.button`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { background: #e2e8f0; }
`;

const PrintBtn = styled.button`
  background: linear-gradient(135deg, #1a365d, #2d5a87);
  color: #fff;
  border: none;
  padding: 0.85rem 2.5rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3); }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`;

const SelectedCount = styled.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;

// ============================================================================
// Main
// ============================================================================

export default function SponsoringHandoffPage() {
  const hasAccess = useAccessGuard();
  const [searchParams] = useSearchParams();

  const presetParam = searchParams.get("preset");
  const viewParam = searchParams.get("view");

  const getInitialSelection = (): Set<string> => {
    if (presetParam === "club500") return new Set(["club500", "club500form"]);
    return new Set(ALL_PAGES.filter(p => p.group === "broschüre").map(p => p.id));
  };

  const [showPrices, setShowPrices] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(getInitialSelection);
  const [mode, setMode] = useState<"dashboard" | "preview">(
    viewParam === "preview" ? "preview" : "dashboard"
  );

  if (!hasAccess) return <Navigate to="/" replace />;

  const togglePage = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(ALL_PAGES.map(p => p.id)));
  const selectNone = () => setSelected(new Set());
  const selectBroschüre = () => setSelected(new Set(ALL_PAGES.filter(p => p.group === "broschüre").map(p => p.id)));
  const selectHelfer = () => setSelected(new Set(ALL_PAGES.map(p => p.id)));
  const selectStarter = () => setSelected(new Set(["cover", "why", "spieltag", "banden"]));
  const selectPremium = () => setSelected(new Set(["cover", "why", "haupt", "co", "silber"]));
  const select500Club = () => setSelected(new Set(["club500", "club500form"]));

  const selectedPages = ALL_PAGES.filter(p => selected.has(p.id));
  const broschuerePages = ALL_PAGES.filter(p => p.group === "broschüre");
  const communityPages = ALL_PAGES.filter(p => p.group === "community");
  const helferPages = ALL_PAGES.filter(p => p.group === "helfer");

  if (mode === "preview") {
    return (
      <>
        <PrintStyles />
        <Toolbar>
          <ToolbarTitle>Vorschau · {selectedPages.length} Seiten</ToolbarTitle>
          <ToolbarActions>
            <Btn $active={showPrices} onClick={() => setShowPrices(v => !v)}>
              {showPrices ? "Preise ✓" : "Preise ✗"}
            </Btn>
            <Btn onClick={() => setMode("dashboard")}>
              Zurück
            </Btn>
            <Btn $primary onClick={() => window.print()}>
              Drucken / PDF
            </Btn>
          </ToolbarActions>
        </Toolbar>
        <Hint>
          <strong>PDF erstellen:</strong> "Drucken / PDF" klicken, "Als PDF speichern" wählen.
          <strong> Hintergrundgrafiken aktivieren</strong>. Format: A4, Ränder: Keine.
        </Hint>
        <Pages>
          {selectedPages.map(page => (
            <div key={page.id}>{page.render(showPrices)}</div>
          ))}
        </Pages>
      </>
    );
  }

  return (
    <>
      <Toolbar>
        <ToolbarTitle>Sponsoring-Kit · SCKW</ToolbarTitle>
        <ToolbarActions>
          <Btn onClick={() => navigator.clipboard.writeText(window.location.href)}>
            Link kopieren
          </Btn>
        </ToolbarActions>
      </Toolbar>

      <Dashboard>
        <DashTitle>Sponsoring-Kit zusammenstellen</DashTitle>
        <DashSubtitle>
          Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten.
          Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen.
        </DashSubtitle>

        <OptionsRow>
          <Toggle $on={showPrices} onClick={() => setShowPrices(v => !v)}>
            {showPrices ? "Preise anzeigen ✓" : "Preise ausgeblendet ✗"}
          </Toggle>
          <SelectedCount>
            {selected.size} von {ALL_PAGES.length} Seiten ausgewählt
          </SelectedCount>
        </OptionsRow>

        <PresetRow>
          <Preset onClick={selectAll}>Alles</Preset>
          <Preset onClick={selectBroschüre}>Broschüre komplett</Preset>
          <Preset onClick={selectHelfer}>Komplett-Kit (+ Helfer)</Preset>
          <Preset onClick={selectPremium}>Nur Premium-Pakete</Preset>
          <Preset onClick={selectStarter}>Starter-Paket</Preset>
          <Preset onClick={select500Club}>500 €Club</Preset>
          <Preset onClick={selectNone}>Keine</Preset>
        </PresetRow>

        <GroupLabel>Broschüre</GroupLabel>
        <PageGrid>
          {broschuerePages.map(page => (
            <PageCheckbox key={page.id} $checked={selected.has(page.id)}>
              <input
                type="checkbox"
                checked={selected.has(page.id)}
                onChange={() => togglePage(page.id)}
              />
              {page.label}
            </PageCheckbox>
          ))}
        </PageGrid>

        <GroupLabel>Community / 500 €Club</GroupLabel>
        <PageGrid>
          {communityPages.map(page => (
            <PageCheckbox key={page.id} $checked={selected.has(page.id)}>
              <input
                type="checkbox"
                checked={selected.has(page.id)}
                onChange={() => togglePage(page.id)}
              />
              {page.label}
            </PageCheckbox>
          ))}
        </PageGrid>

        <GroupLabel>Helfer-Anhang</GroupLabel>
        <PageGrid>
          {helferPages.map(page => (
            <PageCheckbox key={page.id} $checked={selected.has(page.id)}>
              <input
                type="checkbox"
                checked={selected.has(page.id)}
                onChange={() => togglePage(page.id)}
              />
              {page.label}
            </PageCheckbox>
          ))}
        </PageGrid>

        <PrintBtn
          disabled={selected.size === 0}
          onClick={() => setMode("preview")}
        >
          Vorschau & Drucken ({selected.size} Seiten)
        </PrintBtn>
      </Dashboard>
    </>
  );
}
