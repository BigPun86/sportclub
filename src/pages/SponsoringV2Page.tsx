import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHeroImage } from "../utils/imageLoader";
import sponsoringPakete from "../data/sponsoringPakete.json";
import {
  kpis,
  busFlaechenPremium,
  busFlaechenStandard,
  busZusatzoptionen,
  busNote,
  kontakt,
} from "../data/sponsoringData";
import SponsoringGrid from "../components/SponsoringGrid";
import InstagramChart from "../components/InstagramChart";
import PackageComparison from "../components/PackageComparison";
import PraemienTable from "../components/PraemienTable";
import SpielerpatenschaftenTable from "../components/SpielerpatenschaftenTable";
import CurrentSponsors from "../components/CurrentSponsors";
import { ContactSection } from "../components/ContactSection";
import Footer from "../components/Footer";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Section = styled.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

const SectionAlt = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`;

const Hero = styled.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`;

const HeroSlide = styled.div<{ $bg: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  background: url(${({ $bg }) => $bg}) center/cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  font-weight: 500;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  opacity: 0.95;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StatNumber = styled.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`;

const StatLabel = styled.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

const HeroCTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const HeroCTA = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $primary }) => ($primary ? "white" : "transparent")};
  color: ${({ $primary }) => ($primary ? "#e10073" : "white")};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $primary }) =>
    $primary ? "0 6px 20px rgba(0, 0, 0, 0.2)" : "none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({ $primary }) => ($primary ? "white" : "rgba(255, 255, 255, 0.4)")};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({ $primary }) =>
      $primary ? "#f8f9fa" : "rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`;

const KPICard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`;

const KPIValue = styled.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`;

const KPILabel = styled.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const HighlightBox = styled.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 16px;
  padding: 1.25rem;
  margin: 2rem auto 0;
  max-width: 900px;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }
`;

const ValueImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const ValueContent = styled.div`
  padding: 1.5rem 1.25rem 2rem;
`;

const ValueTitle = styled.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`;

const ValueText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

const PackageGroup = styled.div`
  margin-top: 2.5rem;
`;

const GroupTitle = styled.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`;

const Note = styled.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`;

const PillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const Pill = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ExampleCard = styled.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ExampleBody = styled.div`
  padding: 1.25rem 1rem 1.5rem;
`;

const ExampleTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`;

const ExampleText = styled.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const ExampleButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`;

const BusCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`;

const BusCardTitle = styled.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`;

const BusTableWrapper = styled.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`;

const BusTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  table-layout: fixed;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  th {
    text-align: left;
    padding: 0.5rem 0.4rem;
    color: #555;
    font-weight: 700;
    border-bottom: 1px solid #ececec;
    word-break: break-word;
  }

  td {
    padding: 0.5rem 0.4rem;
    border-bottom: 1px solid #f2f2f2;
    color: #333;
    word-break: break-word;
  }
`;

const BusOptionsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`;

const StepCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`;

const StepTitle = styled.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const StepText = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`;

// KPIs aus zentralem Datenmodul
const heroKpis = kpis;

const premiumPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "premium"
);
const localPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "lokal"
);
const starterPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "starter"
);

export default function SponsoringV2Page() {
  const heroImages = [
    getHeroImage("herren/herren_6"),
    getHeroImage("herren/herren_16"),
    getHeroImage("herren/herren_5"),
    getHeroImage("herren/herren_14"),
  ].filter(Boolean);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <>
      <Hero>
        {heroImages.map((src, i) => (
          <HeroSlide key={i} $bg={src} $active={i === heroIndex} />
        ))}
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Sponsoring, das messbar wirkt</HeroTitle>
          <HeroSubtitle>
            In der Winterpause erzielen wir bereits{" "}
            <strong>250.000 Reichweite in 90 Tagen</strong>. Mit Spielbetrieb
            steigt die Sichtbarkeit konservativ auf{" "}
            <strong>500.000-800.000 Kontakte pro Saison</strong> - ohne
            Mehrkosten für unsere Partner.
          </HeroSubtitle>
          <HeroStats>
            {heroKpis.map((kpi) => (
              <StatItem key={kpi.label}>
                <StatNumber>{kpi.value}</StatNumber>
                <StatLabel>{kpi.label}</StatLabel>
              </StatItem>
            ))}
          </HeroStats>
          <HeroCTAGroup>
            <HeroCTA
              href="#kontakt"
              $primary
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("kontakt");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Jetzt Kontakt aufnehmen
            </HeroCTA>
            <HeroCTA
              href="#pakete"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("pakete");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Pakete ansehen
            </HeroCTA>
          </HeroCTAGroup>
        </HeroContent>
      </Hero>

      <SectionAlt>
        <Container>
          <SectionHeader>
            <SectionTitle>Warum sich Sponsoring bei uns lohnt</SectionTitle>
            <SectionSubtitle>
              Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung -
              genau das, was Ihr Marketing erfolgreich macht.
            </SectionSubtitle>
          </SectionHeader>
          <ValueGrid>
            <ValueCard>
              <ValueImage
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fans jubeln im Stadion"
              />
              <ValueContent>
                <ValueTitle>Sichtbarkeit, die bleibt</ValueTitle>
                <ValueText>
                  Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird
                  wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung.
                </ValueText>
              </ValueContent>
            </ValueCard>
            <ValueCard>
              <ValueImage
                src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Konstanz und Bodensee"
              />
              <ValueContent>
                <ValueTitle>Ihre Kunden sind hier</ValueTitle>
                <ValueText>
                  Erreichen Sie Menschen aus Konstanz und der Region - genau
                  dort, wo Ihre potenziellen Kunden leben und arbeiten.
                </ValueText>
              </ValueContent>
            </ValueCard>
            <ValueCard>
              <ValueImage
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Social Media und Stadion"
              />
              <ValueContent>
                <ValueTitle>Doppelte Wirkung</ValueTitle>
                <ValueText>
                  Ihre Marke wird sowohl im Stadion als auch online gesehen -
                  doppelte Reichweite zum Paketpreis.
                </ValueText>
              </ValueContent>
            </ValueCard>
          </ValueGrid>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Diese Unternehmen sind bereits Partner</SectionTitle>
            <SectionSubtitle>
              Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil
              dieser Erfolgsgeschichte.
            </SectionSubtitle>
          </SectionHeader>
          <CurrentSponsors />
        </Container>
      </Section>

      <SectionAlt id="pakete">
        <Container>
          <SectionHeader>
            <SectionTitle>Finden Sie Ihr perfektes Paket</SectionTitle>
            <SectionSubtitle>
              Von Premium-Partnerschaften bis Starter-Optionen - klare
              Leistungen, individuell auf Ihr Unternehmen zugeschnitten.
            </SectionSubtitle>
          </SectionHeader>

          <PackageGroup>
            <GroupTitle>Premium-Partnerschaften</GroupTitle>
            <SponsoringGrid packages={premiumPackages} />
          </PackageGroup>

          <PackageGroup>
            <GroupTitle>Pakete im Vergleich</GroupTitle>
            <PackageComparison />
          </PackageGroup>

          <PraemienTable />

          <SpielerpatenschaftenTable />

          <PackageGroup>
            <GroupTitle>Lokale Werbemöglichkeiten</GroupTitle>
            <SponsoringGrid packages={localPackages} />
            <Note>
              Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder
              Story-Erwähnung). Details gerne im kurzen Erstgespräch.
            </Note>
          </PackageGroup>

          <PackageGroup>
            <GroupTitle>Starter & Spieltag</GroupTitle>
            <SponsoringGrid packages={starterPackages} />
          </PackageGroup>
        </Container>
      </SectionAlt>

      <Section id="reichweite">
        <Container>
          <SectionHeader>
            <SectionTitle>So viele Menschen erreichen Sie</SectionTitle>
            <SectionSubtitle>
              Selbst in der Winterpause erzielen wir starke Reichweiten. Mit
              Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und
              verlässlich.
            </SectionSubtitle>
          </SectionHeader>
          <KPIGrid>
            <KPICard>
              <KPIValue>32.000</KPIValue>
              <KPILabel>Reichweite / 30 Tage</KPILabel>
            </KPICard>
            <KPICard>
              <KPIValue>250.000</KPIValue>
              <KPILabel>Reichweite / 90 Tage</KPILabel>
            </KPICard>
            <KPICard>
              <KPIValue>50-80k</KPIValue>
              <KPILabel>Pro Monat in Saison</KPILabel>
            </KPICard>
            <KPICard>
              <KPIValue>500-800k</KPIValue>
              <KPILabel>Saisonreichweite (konservativ)</KPILabel>
            </KPICard>
          </KPIGrid>
          <HighlightBox>
            Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die
            Reichweite automatisch. Für Sponsoren bedeutet das:{" "}
            <strong>mehr Sichtkontakte ohne Mehrkosten</strong>.
          </HighlightBox>
        </Container>
      </Section>

      <SectionAlt>
        <Container>
          <InstagramChart />
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Was Sie auf Social Media bekommen</SectionTitle>
            <SectionSubtitle>
              Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert
              und planbar.
            </SectionSubtitle>
          </SectionHeader>
          <PillGrid>
            <Pill>📱 Feed-Posts mit Ihrem Logo</Pill>
            <Pill>📸 Stories & Erwähnungen</Pill>
            <Pill>🔗 Verlinkungen zu Ihrer Website</Pill>
          </PillGrid>
          <Note>
            Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format,
            Frequenz). So wissen Sie genau, was Sie bekommen.
          </Note>
        </Container>
      </Section>

      <SectionAlt id="buswerbung">
        <Container>
          <SectionHeader>
            <SectionTitle>Mobile Werbung auf unserem Vereinsbus</SectionTitle>
            <SectionSubtitle>
              Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu
              Heim- und Auswärtsspielen.
            </SectionSubtitle>
          </SectionHeader>

          <BusCard style={{ maxWidth: 900, margin: "0 auto 2rem" }}>
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: 12,
                padding: "2rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚌</div>
              <div style={{ color: "#999", fontSize: "0.95rem" }}>
                Foto des Vereinsbusses folgt in Kürze
              </div>
            </div>

            <BusCardTitle
              style={{ textAlign: "center", marginBottom: "1.5rem" }}
            >
              Verfügbare Werbeflächen
            </BusCardTitle>
            <BusTableWrapper>
              <BusTable>
                <thead>
                  <tr>
                    <th>Fläche</th>
                    <th>Größe (ca.)</th>
                    <th>Preis/Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  {[...busFlaechenPremium, ...busFlaechenStandard].map((f) => (
                    <tr key={f.position}>
                      <td>{f.position}</td>
                      <td>{f.groesse}</td>
                      <td>
                        <strong>{f.preis}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </BusTable>
            </BusTableWrapper>

            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <BusCardTitle
                style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}
              >
                Zusatzoptionen
              </BusCardTitle>
              <BusOptionsList>
                {busZusatzoptionen.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </BusOptionsList>
            </div>
          </BusCard>

          <Note>{busNote}</Note>
        </Container>
      </SectionAlt>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Ihre Marke in Aktion</SectionTitle>
            <SectionSubtitle>
              So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis
              zur Bandenwerbung.
            </SectionSubtitle>
          </SectionHeader>
          <ExampleGrid>
            <ExampleCard>
              <ExampleImage src="/pdf-preview.png" alt="Stadionmagazin Cover" />
              <ExampleBody>
                <ExampleTitle>Stadionmagazin</ExampleTitle>
                <ExampleText>
                  Print + Digital: Anzeigen im Stadionheft, online geteilt auf
                  unseren Kanälen.
                </ExampleText>
                <ExampleButton
                  href="/StadionMagazin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF öffnen
                </ExampleButton>
              </ExampleBody>
            </ExampleCard>

            <ExampleCard>
              <ExampleImage
                src={getHeroImage("herren/herren_1")}
                alt="Bandenwerbung Beispiel"
              />
              <ExampleBody>
                <ExampleTitle>Bandenwerbung</ExampleTitle>
                <ExampleText>
                  Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel.
                </ExampleText>
              </ExampleBody>
            </ExampleCard>

            <ExampleCard>
              <ExampleImage src="/ballspende.png" alt="Ballspende Beispiel" />
              <ExampleBody>
                <ExampleTitle>Ballspende</ExampleTitle>
                <ExampleText>
                  Ballspende mit Spieltagsnennung - idealer Einstieg ins
                  Sponsoring.
                </ExampleText>
                <ExampleButton
                  href="/ballspende.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beispiel öffnen
                </ExampleButton>
              </ExampleBody>
            </ExampleCard>
          </ExampleGrid>
        </Container>
      </Section>


      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>In 4 Schritten zum Sponsoring-Start</SectionTitle>
            <SectionSubtitle>
              Schnell, unkompliziert und transparent - so werden Sie unser
              Partner.
            </SectionSubtitle>
          </SectionHeader>
          <StepGrid>
            <StepCard>
              <StepTitle>1. Kontakt</StepTitle>
              <StepText>
                Kurz anfragen, wir melden uns innerhalb von 24h.
              </StepText>
            </StepCard>
            <StepCard>
              <StepTitle>2. Bedarf</StepTitle>
              <StepText>
                Wir klären Ziele, Budget und passende Leistungen.
              </StepText>
            </StepCard>
            <StepCard>
              <StepTitle>3. Angebot</StepTitle>
              <StepText>Fixe Leistungen, klare KPIs, sofort nutzbar.</StepText>
            </StepCard>
            <StepCard>
              <StepTitle>4. Umsetzung</StepTitle>
              <StepText>
                Design, Abstimmung, Launch - wir übernehmen das.
              </StepText>
            </StepCard>
          </StepGrid>
        </Container>
      </Section>

      <ContactSection
        headline="Kontakt aufnehmen"
        description="Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen."
        contactInfos={[
          {
            icon: "📧",
            title: "E-Mail",
            content: kontakt.email,
            isEmail: true,
          },
          {
            icon: "📍",
            title: "Adresse",
            content: kontakt.vollAdresse,
          },
        ]}
      />
      <Footer />
    </>
  );
}
