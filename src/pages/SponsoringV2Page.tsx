import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { getHeroImage } from "../utils/imageLoader";
import { kpis, kontakt, aufstiegsBanner } from "../data/sponsoringData";
import CurrentSponsors from "../components/CurrentSponsors";
import { ContactSection } from "../components/ContactSection";
import Footer from "../components/Footer";

const EMAIL_KONTAKT = "sponsoring@sckw.de";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Section = styled.section`
  padding: 3rem 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;

const SectionAlt = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
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

// -- Hero --

const Hero = styled.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
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

// -- Aufstiegs-Banner --

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const PromoBanner = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const BannerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`;

const BannerPulse = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: ${pulse} 2s ease-in-out infinite;
  flex-shrink: 0;
`;

const BannerText = styled.span`
  color: white;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.02em;

  strong {
    color: #fbbf24;
  }
`;

// -- Angebot: Kategorie-Karten --

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const OfferCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
`;

const OfferIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const OfferTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`;

const OfferDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  flex: 1;
`;

const OfferBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const OfferBullet = styled.li`
  padding: 0.35rem 0;
  font-size: 0.9rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "\\2713";
    color: #e10073;
    font-weight: 800;
    flex-shrink: 0;
  }
`;

const OfferActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: auto;
  flex-wrap: wrap;
`;

const OfferCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e10073;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }
`;

const OfferDetailLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 600;
  color: #e10073;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// -- Reichweiten-Karte --

const MapSection = styled.div`
  margin-top: 3rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`;

const MapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MapImageContainer = styled.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 360px;
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MapBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(225, 0, 115, 0.9);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
`;

const MapContent = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const MapTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
`;

const MapText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`;

const MapHighlight = styled.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;

  strong {
    color: #e10073;
  }
`;

// -- Club 500 --

const Club500Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`;

const Club500Title = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`;

const Club500Subtitle = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`;

const Club500Highlights = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const Club500Chip = styled.div`
  background: white;
  border-radius: 50px;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f2c2d9;
  font-weight: 600;

  &::before {
    content: "\\2713  ";
    color: #e10073;
    font-weight: 800;
  }
`;

const Club500CTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`;

// -- Data --

const heroKpis = kpis;

const offerCategories = [
  {
    icon: "🏆",
    title: "Premium-Partnerschaften",
    hash: "premium",
    desc: "Maximale Sichtbarkeit als Hauptsponsor, Stadionpartner oder Co-Sponsor. Trikot, Banner, Stadionmagazin und Social Media in einem Paket.",
    bullets: [
      "Trikot- oder Bannerplatzierung",
      "Seite im Stadionmagazin (15 Ausgaben/Saison)",
      "Social Media: bis zu 60 Posts + 100 Stories/Saison",
      "Logo prominent auf der Website",
    ],
  },
  {
    icon: "🚌",
    title: "Buswerbung",
    hash: "bus",
    desc: "Ihr Logo fährt ständig durch Konstanz und die Region. Der Vereinsbus ist für alle Mannschaften im Einsatz – Herren, Damen, Jugend – und an fast jedem Wochenende unterwegs.",
    bullets: [
      "Im Einsatz für 5+ Mannschaften (Herren, Damen, Jugend)",
      "Sichtbar in 15+ Städten der Liga",
      "Großflächen, Seitenflächen oder Heckwerbung",
      "Mehrjahresrabatt & Kombi mit Online-Präsenz",
    ],
  },
  {
    icon: "📍",
    title: "Lokale Präsenz",
    hash: "lokal",
    desc: "Bandenwerbung, Community-Partnerschaften und Events. Perfekt für lokale Unternehmen, die im Stadion und bei Veranstaltungen sichtbar sein wollen.",
    bullets: [
      "Banden am Spielfeldrand",
      "Regelmäßige Social-Media-Posts & Stories",
      "Gemeinsame Events mit dem Team",
      "Logo auf der Website",
    ],
  },
  {
    icon: "⚽",
    title: "Einstieg & Spieltag",
    hash: "starter",
    desc: "Ballspenden, Prämien-Modelle und Spielerpatenschaften. Idealer Einstieg ins Sponsoring mit direkter Spieltagspräsenz.",
    bullets: [
      "Ballspende mit Stadiondurchsage",
      "Erfolgsbasierte Prämien-Modelle",
      "Spielerpatenschaften (diskret)",
      "Instagram-Stories am Spieltag",
    ],
  },
];

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const generateMailto = (category: string) => {
    const subject = encodeURIComponent(`Interesse an Sponsoring: ${category}`);
    const body = encodeURIComponent(
      `Hallo liebes SCKW-Team,\n\nich interessiere mich für den Bereich "${category}" und würde gerne mehr erfahren.\n\nBitte senden Sie mir weitere Informationen.\n\nMein Name: \nFirma (optional): \nTelefon (optional): \n\nHerzliche Grüße\n`
    );
    return `mailto:${EMAIL_KONTAKT}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
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
            <strong>500.000–800.000 Kontakte pro Saison</strong> – ohne
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
            <HeroCTA href="#kontakt" $primary onClick={(e) => { e.preventDefault(); scrollTo("kontakt"); }}>
              Jetzt Kontakt aufnehmen
            </HeroCTA>
            <HeroCTA href="#angebot" onClick={(e) => { e.preventDefault(); scrollTo("angebot"); }}>
              Angebot ansehen
            </HeroCTA>
          </HeroCTAGroup>
        </HeroContent>
      </Hero>

      {/* Aufstiegs-Banner */}
      {aufstiegsBanner.active && (
        <PromoBanner>
          <BannerInner>
            <BannerPulse />
            <BannerText>
              {aufstiegsBanner.text} <strong>{aufstiegsBanner.highlight}</strong> {aufstiegsBanner.suffix}
            </BannerText>
            <BannerPulse />
          </BannerInner>
        </PromoBanner>
      )}

      {/* Partner (Social Proof) */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Unsere Partner</SectionTitle>
            <SectionSubtitle>
              Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil
              dieser Erfolgsgeschichte.
            </SectionSubtitle>
          </SectionHeader>
          <CurrentSponsors />
        </Container>
      </Section>

      {/* Angebot */}
      <SectionAlt id="angebot">
        <Container>
          <SectionHeader>
            <SectionTitle>Sponsoring-Möglichkeiten</SectionTitle>
            <SectionSubtitle>
              Vier Wege, Ihre Marke beim SC Konstanz-Wollmatingen zu platzieren.
              Alle Details besprechen wir persönlich.
            </SectionSubtitle>
          </SectionHeader>

          <OfferGrid>
            {offerCategories.map((cat) => (
              <OfferCard key={cat.title}>
                <OfferIcon>{cat.icon}</OfferIcon>
                <OfferTitle>{cat.title}</OfferTitle>
                <OfferDesc>{cat.desc}</OfferDesc>
                <OfferBullets>
                  {cat.bullets.map((b) => (
                    <OfferBullet key={b}>{b}</OfferBullet>
                  ))}
                </OfferBullets>
                <OfferActions>
                  <OfferCTA href={generateMailto(cat.title)}>
                    Jetzt anfragen
                  </OfferCTA>
                  <OfferDetailLink to={`/sponsoring/pakete#${cat.hash}`}>
                    Details ansehen →
                  </OfferDetailLink>
                </OfferActions>
              </OfferCard>
            ))}
          </OfferGrid>

          {/* Reichweiten-Karte */}
          <MapSection>
            <MapGrid>
              <MapImageContainer>
                <MapImage src="/verbandsliga-karte.jpg" alt="Verbandsliga Südbaden – Spielorte und Reichweite" />
                <MapBadge>Saison 26/27</MapBadge>
              </MapImageContainer>
              <MapContent>
                <MapTitle>Ihre Reichweite wächst mit</MapTitle>
                <MapText>
                  Ob Buswerbung, Trikot oder Bande – Ihre Marke wird in der gesamten Region
                  sichtbar. Mit dem voraussichtlichen Aufstieg in die Verbandsliga spielen wir
                  in 15+ Städten zwischen Freiburg und Konstanz.
                </MapText>
                <MapHighlight>
                  <strong>Was das für Sie bedeutet:</strong> Mehr Gegner, größere Städte,
                  mehr Medienaufmerksamkeit – Ihre Investition wächst automatisch
                  mit, ohne Mehrkosten.
                </MapHighlight>
              </MapContent>
            </MapGrid>
          </MapSection>
        </Container>
      </SectionAlt>

      {/* CLUB 500 */}
      <Club500Section>
        <Container>
          <SectionHeader>
            <Club500Title>CLUB 500</Club500Title>
            <Club500Subtitle>
              Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken –
              werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball.
            </Club500Subtitle>
          </SectionHeader>
          <Club500Highlights>
            <Club500Chip>Spendenbescheinigung</Club500Chip>
            <Club500Chip>Name auf der Spendentafel</Club500Chip>
            <Club500Chip>Jugend- & Amateurfußball</Club500Chip>
          </Club500Highlights>
          <SectionHeader>
            <Club500CTA to="/sponsoring/club-500">
              Jetzt Mitglied werden &rarr;
            </Club500CTA>
          </SectionHeader>
        </Container>
      </Club500Section>

      {/* Kontakt */}
      <ContactSection
        headline="Kontakt aufnehmen"
        description="Kurze Anfrage genügt – wir erstellen ein passendes Angebot mit klaren Leistungen."
        contactInfos={[
          { icon: "📧", title: "E-Mail", content: kontakt.email, isEmail: true },
          { icon: "📍", title: "Adresse", content: kontakt.vollAdresse },
        ]}
      />

      <Footer />
    </>
  );
}
