// import Header from "./components/Header";
import Footer from "./components/Footer";
import SponsorBox from "./components/SponsorBox";
import Gallery from "./components/Gallery";
import styled from "styled-components";

import { EMAIL_KONTAKT } from "./components/SponsorBox";
import sponsoringPakete from "./data/sponsoringPakete.json";

import "./App.css";

const Hero = styled.section`
  background: url("hero.jpg") center/cover no-repeat;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const HeroTitle = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 1.2rem;
  background: #e10073;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.7rem 2.1rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.2s;
  z-index: 1;
  &:hover {
    background: #b8005a;
  }
`;

const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  padding: 3rem 2rem 2rem 2rem;
  margin-top: -60px;
  position: relative;
  z-index: 2;
`;

const Headline = styled.h2`
  font-size: 2.25rem;
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
`;

const Grid = styled.div<{ columns: number }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`;

export default function App() {
  // Mailto-Link für allgemeinen Sponsoring-Button
  const subject = encodeURIComponent("Allgemeine Sponsoring-Anfrage");
  const body = encodeURIComponent(
    `Hallo liebes SCKW-Team,\n\nich interessiere mich für ein Sponsoring beim SC Konstanz-Wollmatingen.\nBitte nehmen Sie Kontakt mit mir auf und senden Sie mir Informationen zu den Möglichkeiten und Paketen.\n\nMein Name: \nFirma (optional): \nTelefon (optional): \n\nIch freue mich auf Ihre Rückmeldung!\nHerzliche Grüße\n`
  );
  const mailto = `mailto:${EMAIL_KONTAKT}?subject=${subject}&body=${body}`;

  const columns: number = 2;

  return (
    <>
      {/* <Header /> */}
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>
            SC Konstanz-Wollmatingen
            <br />
            Ihre Marke im Fokus – direkt am Spielfeldrand
          </HeroTitle>
        </HeroContent>
      </Hero>
      <Content>
        <Headline>Sponsoring-Pakete 2025/2026</Headline>
        <IntroBlock>
          <IntroText>
            Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams,
            fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft.
            Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem
            Spielfeld!
          </IntroText>
          <HeroButton href={mailto}>Jetzt Sponsor werden</HeroButton>
        </IntroBlock>

        <Grid columns={columns}>
          {sponsoringPakete.map((paket, idx) => (
            <SponsorBox key={paket.title + idx} {...paket} />
          ))}
        </Grid>
        <SponsorInfoBox>
          <b>Hinweis:</b> Die Banden und Banner gehen in das Eigentum des
          Sponsors über. Die Material- und Herstellungskosten für Banden/Banner
          sind im Sponsoring-Betrag nicht enthalten und werden separat
          berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen
          – Sie müssen sich um nichts kümmern!
        </SponsorInfoBox>
        <ReachSection>
          <ReachHeadline>Unsere Reichweite & Kanäle</ReachHeadline>
          <ReachGrid>
            <ReachBox>
              <ReachTitle>📱 Social Media</ReachTitle>
              <ReachList>
                <li>Instagram: 2.500+ Follower</li>
                <li>Reel-Reichweite bis 200k</li>
                <li>Facebook: 1.800+ Follower</li>
              </ReachList>
            </ReachBox>
            <ReachBox>
              <ReachTitle>🌐 Website & Online</ReachTitle>
              <ReachList>
                <li>Monatliche Besucher: 5.000+</li>
                <li>Newsletter-Abonnenten: 450+</li>
                <li>Durchschnittliche Seitenaufrufe: 15.000+</li>
                <li>Google-Sichtbarkeit: 95% lokale Suche</li>
              </ReachList>
            </ReachBox>
            <ReachBox>
              <ReachTitle>🏟️ Offline & Events</ReachTitle>
              <ReachList>
                <li>Heimspiele pro Saison: 15+</li>
                <li>Durchschnittliche Zuschauer: 200+</li>
                <li>Events & Turniere: 8+ pro Jahr</li>
                <li>Stadionheft-Auflage: 300+ pro Spiel</li>
              </ReachList>
            </ReachBox>
            <ReachBox>
              <ReachTitle>📢 Zusätzliche Kanäle</ReachTitle>
              <ReachList>
                <li>Pressearbeit & Medienkontakte</li>
                <li>Kooperationen mit lokalen Partnern</li>
                <li>Vereinsfeste & Community-Events</li>
                <li>Jugendförderung & Nachwuchsarbeit</li>
              </ReachList>
            </ReachBox>
          </ReachGrid>
        </ReachSection>

        <MagazineSection>
          <MagazineHeadline>
            Werbung im Stadionmagazin „Heimspiel“
          </MagazineHeadline>
          <MagazineGrid>
            <MagazinePrices>
              <PriceCard>
                <PriceTitle>1 Seite (Farbe)</PriceTitle>
                <PriceValue>1.000&nbsp;€</PriceValue>
                <PriceSize>DIN A4 (297 × 210 mm)</PriceSize>
              </PriceCard>
              <PriceCard>
                <PriceTitle>1/2 Seite (Farbe)</PriceTitle>
                <PriceValue>500&nbsp;€</PriceValue>
                <PriceSize>DIN A5 (148 × 210 mm)</PriceSize>
              </PriceCard>
              <PriceCard>
                <PriceTitle>1/4 Seite (Farbe)</PriceTitle>
                <PriceValue>250&nbsp;€</PriceValue>
                <PriceSize>DIN A6 (105 × 148 mm)</PriceSize>
              </PriceCard>
            </MagazinePrices>
            <MagazineInfo>
              <MagazineList>
                <MagazineListItem>
                  <MagazineBullet />
                  15 Ausgaben pro Saison
                </MagazineListItem>
                <MagazineListItem>
                  <MagazineBullet />
                  ca. 100 Exemplare pro Heimspiel
                </MagazineListItem>
                <MagazineListItem>
                  <MagazineBullet />
                  Digitale Version (Social Media & Website)
                </MagazineListItem>
                <MagazineListItem>
                  <MagazineBullet />
                  1.000 – 1.500 Online Zugriffe je Ausgabe
                </MagazineListItem>
                <MagazineListItem>
                  <MagazineBullet />
                  DIN A4 Stadionmagazin
                </MagazineListItem>
              </MagazineList>
            </MagazineInfo>
          </MagazineGrid>
        </MagazineSection>

        <DonationSection>
          <DonationHeadline>
            Jetzt unterstützen – Spenden für den Verein
          </DonationHeadline>
          <DonationText>
            Jede Spende hilft uns, unsere Jugendarbeit, den Spielbetrieb und
            besondere Projekte zu fördern. Unterstützen Sie den SC
            Konstanz-Wollmatingen direkt und unkompliziert:
          </DonationText>
          <PayPalButton
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mit PayPal spenden
          </PayPalButton>
        </DonationSection>
        <Logos>
          {/*
          <img
            src="https://dummyimage.com/120x40/000/fff&text=RICO+Bet"
            alt="RICO Bet"
            height="40"
          />
          <img
            src="https://dummyimage.com/120x40/000/fff&text=horta"
            alt="horta"
            height="40"
          />
          <img
            src="https://dummyimage.com/120x40/000/fff&text=TASTY+DELIVERY"
            alt="TASTY DELIVERY"
            height="40"
          /> */}
        </Logos>
        <Section>
          <SectionHeadline>
            Unsere Ziele und Ihr Beitrag als Sponsor
          </SectionHeadline>
          <SectionText>
            Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die
            Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber
            realistische Ziele, die wir mit Ihrer Unterstützung erreichen
            möchten:
          </SectionText>

          <AbteilungsGrid>
            <AbteilungsBox>
              <AbteilungsTitel>1. Mannschaft (Herren)</AbteilungsTitel>
              <AbteilungsText>
                Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga.
                Dafür investieren wir in eine gezielte sportliche
                Weiterentwicklung und benötigen insbesondere Unterstützung für
                die Finanzierung von Trainings- und Spielbetrieb.
              </AbteilungsText>
            </AbteilungsBox>
            <AbteilungsBox>
              <AbteilungsTitel>2. Mannschaft (Herren)</AbteilungsTitel>
              <AbteilungsText>
                Die zweite Mannschaft strebt einen Platz unter den Top 3 an.
                Auch hier sind gezielte Fördermaßnahmen und eine stabile
                finanzielle Basis entscheidend, um das sportliche Potenzial voll
                auszuschöpfen.
              </AbteilungsText>
            </AbteilungsBox>
            <AbteilungsBox>
              <AbteilungsTitel>Damenmannschaft</AbteilungsTitel>
              <AbteilungsText>
                Unsere Damen möchten sich in der Landesliga unter den besten
                drei Teams etablieren und ihren Bezirkspokal verteidigen. Die
                längeren Auswärtsfahrten in dieser Liga bringen erhöhte
                Reisekosten mit sich, für die wir gezielt Unterstützung suchen.
              </AbteilungsText>
            </AbteilungsBox>
            <AbteilungsBox>
              <AbteilungsTitel>Cheerleading</AbteilungsTitel>
              <AbteilungsText>
                Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren
                und benötigt dringend einen neuen Trikotsatz
                (Cheerleading-Uniformen). Auch hier sind Reisekosten ein
                wichtiger Faktor, um die Teilnahme an Wettbewerben zu
                ermöglichen.
              </AbteilungsText>
            </AbteilungsBox>
            <AbteilungsBox>
              <AbteilungsTitel>Fördergruppe / Jugend</AbteilungsTitel>
              <AbteilungsText>
                Mit der Fördergruppe legen wir den Grundstein für den neuen
                Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es,
                gezielt Talente zu fördern und ihnen durch qualifizierte Trainer
                optimale Entwicklungsmöglichkeiten zu bieten. Für die
                Finanzierung von Trainerfortbildungen und zusätzlichem
                Trainingsmaterial sind wir auf Unterstützung angewiesen.
              </AbteilungsText>
            </AbteilungsBox>
            <AbteilungsBox>
              <AbteilungsTitel>
                Vereinsziel: Langfristige Partnerschaften
              </AbteilungsTitel>
              <AbteilungsText>
                Unser übergeordnetes Ziel ist es, langfristige Partner zu
                gewinnen, die uns sportlich wie wirtschaftlich begleiten und
                gemeinsam mit uns die Weiterentwicklung des Vereins in den
                kommenden Jahren aktiv mitgestalten möchten.
              </AbteilungsText>
            </AbteilungsBox>
          </AbteilungsGrid>

          <SectionText>
            <b>Warum Ihre Unterstützung wichtig ist:</b>
            <br />
            Die genannten Ziele sind nur mit einer soliden finanziellen Basis
            erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken,
            moderne Ausrüstung bereitzustellen und die sportliche Entwicklung
            aller Teams nachhaltig zu sichern. Sie investieren damit direkt in
            die Zukunft des Sports in Konstanz und in die Entwicklung junger
            Talente.
            <br />
            <br />
            Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!
          </SectionText>
        </Section>
        <Gallery />
      </Content>
      <Footer />
    </>
  );
}

// Styled Components für den neuen Abschnitt
const Section = styled.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;

const SectionHeadline = styled.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`;

const SectionText = styled.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`;

const AbteilungsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 2rem 0;
`;

const AbteilungsBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AbteilungsTitel = styled.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`;

const AbteilungsText = styled.div`
  font-size: 1.04rem;
  color: #222;
  line-height: 1.6;
`;

// Styled Components für HeroContent
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Styled Components für IntroBlock
const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`;

const IntroText = styled.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`;

// Styled Components für Reichweite-Sektion
const ReachSection = styled.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;

const ReachHeadline = styled.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;

const ReachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const ReachBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ReachTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;

const ReachList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    padding-left: 0;
    text-align: left;
    &:before {
      content: "•";
      color: #e10073;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

// Styled Components für Stadionmagazin
const MagazineSection = styled.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;
const MagazineHeadline = styled.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;
const MagazineGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`;

const MagazinePrices = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const MagazineInfo = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MagazineList = styled.ul`
  font-size: 1.08rem;
  color: #222;
  line-height: 1.7;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const MagazineListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`;

const MagazineBullet = styled.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`;
const PriceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PriceTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`;
const PriceValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`;
const PriceSize = styled.div`
  font-size: 0.98rem;
  color: #666;
`;

// Styled Components für Spendenbereich
const DonationSection = styled.section`
  background: #fff6fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`;
const DonationHeadline = styled.h3`
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`;
const DonationText = styled.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.5rem;
`;
const PayPalButton = styled.a`
  display: inline-block;
  background: #0070ba;
  color: #fff;
  font-weight: 700;
  font-size: 1.13rem;
  padding: 0.8rem 2.1rem;
  border-radius: 28px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 112, 186, 0.13);
  transition: background 0.2s, transform 0.1s;
  &:hover {
    background: #003087;
    transform: scale(1.04);
  }
`;

const SponsorInfoBox = styled.div`
  background: #fff6fa;
  color: #b8005a;
  border-left: 5px solid #e10073;
  border-radius: 8px;
  margin: 2rem 0 2.5rem 0;
  padding: 1.2rem 1.5rem;
  font-size: 1.08rem;
  box-shadow: 0 1px 8px rgba(225, 0, 115, 0.06);
`;
