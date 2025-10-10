import Footer from "../components/Footer";
import SponsoringGrid from "../components/SponsoringGrid";
import SponsoringAccordion from "../components/SponsoringAccordion";
import Gallery from "../components/Gallery";
import styled from "styled-components";
import { getGalleryHeroImage } from "../utils/imageLoader";

import sponsoringPakete from "../data/sponsoringPakete.json";
import SponsorCategoriesGrid, {
  SponsorCategory,
} from "../components/SponsorCategories";
import { ContactSection } from "../components/ContactSection";

const Hero = styled.section`
  background: url("${getGalleryHeroImage("herren", 4)}") center/cover;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  z-index: 1;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  z-index: 1;
  text-align: center;
  margin-top: 0;
  opacity: 0.95;
`;

interface HeroButtonProps {
  secondary?: boolean;
}

const HeroButton = styled.a<HeroButtonProps>`
  display: inline-block;
  background: ${(props) =>
    props.secondary ? "rgba(255, 255, 255, 0.15)" : "#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  border: ${(props) =>
    props.secondary ? "2px solid rgba(255, 255, 255, 0.5)" : "none"};
  backdrop-filter: ${(props) => (props.secondary ? "blur(15px)" : "none")};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: ${(props) =>
      props.secondary ? "rgba(255, 255, 255, 0.25)" : "#b8005a"};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
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
  font-size: clamp(2rem, 5vw, 3rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  margin-top: 4rem;
  border-bottom: 5px solid #e10073;
  display: inline-block;
  scroll-margin-top: 100px; /* Für Anker-Navigation */
  letter-spacing: -0.02em;
  line-height: 1.2;

  &:first-of-type {
    margin-top: 2rem;
  }
`;

// Styled Components für HeroContent
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
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
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
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

// Accessibility Helper
const SROnly = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// Styled Components für Ballspende Visual
const BallspendeSection = styled.section`
  background: #f7f7fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;

const BallspendeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

// Styled Components für Bus-Werbeflächen
const BusSection = styled.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;

const BusHeadline = styled.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &::before {
    content: "🚌";
    font-size: 1.2em;
  }

  &::after {
    content: "🚌";
    font-size: 1.2em;
  }
`;

const BusText = styled.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`;

const BusCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BusCardTitle = styled.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const BusTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    background: #e10073;
    color: white;
    padding: 0.75rem 0.5rem;
    text-align: left;
    font-weight: 600;
    border: 1px solid #d00068;
  }

  td {
    padding: 0.75rem 0.5rem;
    border: 1px solid #ddd;
    background: #fff;
  }

  tr:nth-child(even) td {
    background: #f9f9f9;
  }

  tr:hover td {
    background: #f0f0f0;
  }
`;

const BusOptions = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`;

const BusOptionsTitle = styled.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const BusOptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "✓";
      color: #e10073;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const BusCTA = styled.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`;

const BusCTATitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const BusCTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const BusCTAEmail = styled.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

export default function SponsoringPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>SC Konstanz-Wollmatingen</HeroTitle>
          <HeroSubtitle>Werden Sie Teil unserer Erfolgsgeschichte</HeroSubtitle>
          <HeroButtonGroup>
            <HeroButton href="#sponsoring-kategorien">
              Sponsoring-Übersicht
            </HeroButton>
            <HeroButton href="#kontakt" secondary>
              Kontakt aufnehmen
            </HeroButton>
          </HeroButtonGroup>
        </HeroContent>
      </Hero>

      <Content>
        {/* Landing Page: Sponsor-Kategorien Übersicht */}
        <Headline id="sponsoring-kategorien">Sponsoring-Möglichkeiten</Headline>
        <IntroBlock>
          <IntroText>
            Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von
            exklusiven Premium-Partnerschaften bis hin zu lokalen
            Werbemöglichkeiten – bei uns ist für jeden das Richtige dabei.
          </IntroText>
        </IntroBlock>

        {/* Sponsor-Kategorien Grid */}
        <section aria-labelledby="sponsor-categories-heading">
          <SROnly id="sponsor-categories-heading">
            Sponsoring-Kategorien Übersicht
          </SROnly>
          <SponsorCategoriesGrid
            role="region"
            aria-label="Sponsoring-Kategorien"
          >
            <SponsorCategory
              icon="🏆"
              title="Premium-Partnerschaften"
              description="Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€"
              packages={[
                "• Hauptsponsor (15.000€)",
                "• Stadionpartner (12.000€)",
                "• Co-Sponsor (9.500€)",
              ]}
              buttonHref="#premium-pakete"
              buttonText="Premium-Pakete ansehen"
            />

            <SponsorCategory
              icon="🏢"
              title="Lokale Werbung"
              description="Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€"
              packages={[
                "• SILBER-Paket (5.000€)",
                "• Bandenwerbung (800€)",
                "• Community-Partner (2.000€)",
              ]}
              buttonHref="#lokale-pakete"
              buttonText="Lokale Pakete ansehen"
            />

            <SponsorCategory
              icon="🌟"
              title="Starter & Spenden"
              description="Einfacher Einstieg in die Vereinsförderung ab 150€"
              packages={[
                "• Ballspende (150€)",
                "• Ballspende 5er Pack (500€)",
                "• Platz-Renovierung Spende (ab 100€)",
              ]}
              buttonHref="#starter-pakete"
              buttonText="Starter-Pakete ansehen"
            />
          </SponsorCategoriesGrid>
        </section>

        {/* Haupt-Sponsoring-Pakete */}
        <section aria-labelledby="premium-pakete">
          <Headline id="premium-pakete">Premium-Sponsoring-Pakete</Headline>
          <SponsoringGrid
            packages={sponsoringPakete.filter(
              (pkg) =>
                pkg.price === "15.000 €/Jahr" ||
                pkg.price === "12.000 €/Jahr" ||
                pkg.price === "9.500 €/Jahr"
            )}
          />
        </section>

        <section aria-labelledby="lokale-pakete">
          <Headline id="lokale-pakete">Lokale Werbemöglichkeiten</Headline>
          <SponsoringGrid
            packages={sponsoringPakete.filter(
              (pkg) =>
                pkg.price === "5.000 €/Jahr" ||
                pkg.price === "800 €/Jahr" ||
                pkg.price === "2.000 €/Jahr"
            )}
          />
        </section>

        <section aria-labelledby="starter-pakete">
          <Headline id="starter-pakete">Starter & Spenden-Optionen</Headline>

          {/* Ballspende Visual */}
          <BallspendeSection>
            <BallspendeImage
              src="/ballspende.png"
              alt="Ballspende - Vielen Dank - DerbyStar Bundesliga Fußball mit SC Konstanz-Wollmatingen Logo"
            />
          </BallspendeSection>

          <SponsoringGrid
            packages={sponsoringPakete.filter(
              (pkg) =>
                pkg.price === "150 €/pro Spiel" ||
                pkg.price === "500 €/5 Spiele" ||
                pkg.price.includes("Ab 100")
            )}
          />
        </section>

        {/* Reichweite & Impact - früher zeigen */}
        <ReachSection>
          <ReachHeadline>Warum SC Konstanz-Wollmatingen?</ReachHeadline>
          <ReachGrid>
            <ReachBox>
              <ReachTitle>📊 Erreichte Reichweite</ReachTitle>
              <ReachList>
                <li>15+ Heimspiele pro Saison</li>
                <li>200+ Zuschauer pro Spiel</li>
                <li>2.500+ Instagram Follower</li>
                <li>5.000+ monatliche Website-Besucher</li>
              </ReachList>
            </ReachBox>
            <ReachBox>
              <ReachTitle>🏆 Sportlicher Erfolg</ReachTitle>
              <ReachList>
                <li>1. Damenmannschaft in Landesliga</li>
                <li>2. Mannschaften pro Abteilung</li>
                <li>Cheerleading-Team aktiv</li>
                <li>Jugendförderung etabliert</li>
              </ReachList>
            </ReachBox>
          </ReachGrid>
        </ReachSection>

        {/* Zusätzliche Werbemöglichkeiten - nach den wichtigsten Infos */}
        <Headline>Zusätzliche Werbemöglichkeiten</Headline>

        <MagazineSection>
          <MagazineHeadline>
            Werbung im Stadionmagazin „Heimspiel"
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
              </MagazineList>
            </MagazineInfo>
          </MagazineGrid>
        </MagazineSection>

        <BusSection>
          <BusHeadline>
            Werbeflächen auf dem Vereinsbus
          </BusHeadline>
          <BusText>
            Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei
            Auswärtsspielen unterwegs – ein idealer Ort für Ihre Werbung!
            Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie
            von lokaler Sichtbarkeit.
          </BusText>

          <BusGrid>
            <BusCard>
              <BusCardTitle>Premium-Flächen</BusCardTitle>
              <BusTable>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Sichtbarkeit</th>
                    <th>Preis / Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heckfläche (100×80 cm)</td>
                    <td>Sehr hoch</td>
                    <td>1.200 €</td>
                  </tr>
                  <tr>
                    <td>Seitentüren (links/rechts)</td>
                    <td>Hoch</td>
                    <td>je 900 €</td>
                  </tr>
                  <tr>
                    <td>Hintere Seitenflächen</td>
                    <td>Mittel–hoch</td>
                    <td>je 600 €</td>
                  </tr>
                </tbody>
              </BusTable>
            </BusCard>

            <BusCard>
              <BusCardTitle>Standard-Flächen</BusCardTitle>
              <BusTable>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Sichtbarkeit</th>
                    <th>Preis / Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fensterstreifen (15 cm Höhe)</td>
                    <td>Mittel</td>
                    <td>400 € je Seite</td>
                  </tr>
                  <tr>
                    <td>Frontstoßstange</td>
                    <td>Gering–mittel</td>
                    <td>250 €</td>
                  </tr>
                </tbody>
              </BusTable>
            </BusCard>
          </BusGrid>

          <BusOptions>
            <BusOptionsTitle>Zusatzoptionen:</BusOptionsTitle>
            <BusOptionsList>
              <li>Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)</li>
              <li>
                Kombi-Paket Online + Bus: +150 € für Logo & Link auf
                partner.sckw.de
              </li>
              <li>Design & Folierung: optionaler Kostenbeitrag (50–100 €)</li>
            </BusOptionsList>
          </BusOptions>

          <BusCTA>
            <BusCTATitle>➡️ Interesse an einer Bus-Werbefläche?</BusCTATitle>
            <BusCTAText>
              Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:
            </BusCTAText>
            <BusCTAEmail href="mailto:sponsoring@sckw.de">
              📧 sponsoring@sckw.de
            </BusCTAEmail>
          </BusCTA>
        </BusSection>

        {/* Erweiterte Informationen (Accordion) - ganz am Ende */}
        <SponsoringAccordion />


        {/* Kontakt & nächste Schritte */}
        <ContactSection
          headline="Bereit für eine Partnerschaft?"
          description="Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen."
          contactInfos={[
            {
              icon: "📧",
              title: "E-Mail",
              content: "sponsoring@sckw.de",
              isEmail: true,
            },
            {
              icon: "📍",
              title: "Adresse",
              content:
                "SC Konstanz-Wollmatingen e.V.\nSchleyerweg 5\nD-78467 Konstanz",
            },
            {
              icon: "💼",
              title: "Rechtliches",
              content:
                "Gemeinnütziger Verein\nSpenden steuerlich absetzbar\nSchnelle Abwicklung garantiert",
            },
          ]}
        />

        <Gallery />
      </Content>
      <Footer />
    </>
  );
}
