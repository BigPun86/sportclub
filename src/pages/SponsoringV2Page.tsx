import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { getHeroImage } from "../utils/imageLoader";
import {
  kpis as fallbackKpis,
  kontakt,
  aufstiegsBanner,
  exklusivPakete,
  werbeflaechenALaCarte,
  busFlaechenPremium,
  busFlaechenStandard,
  busZusatzoptionen,
  spieltagAngebote,
  type KPI,
} from "../data/sponsoringData";
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

// -- Exklusiv-Pakete --

const PaketGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const PaketCard = styled.div<{ $vergeben?: boolean }>`
  background: white;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid ${({ $vergeben }) => ($vergeben ? "#e5e7eb" : "#e10073")};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${({ $vergeben }) => ($vergeben ? 0.85 : 1)};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
  }
`;

const PaketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const PaketName = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #222;
  margin: 0;
`;

const PaketPreis = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  color: #e10073;
  white-space: nowrap;
`;

const PaketTopFeature = styled.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
`;

const PaketLeistungen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 1rem;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
  flex: 1;
`;

const PaketLeistung = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: baseline;
  padding: 0.2rem 0;

  &::before {
    content: "\\2713";
    color: #e10073;
    font-weight: 700;
    flex-shrink: 0;
    font-size: 0.75rem;
  }
`;

const PaketShared = styled.div`
  font-size: 0.8rem;
  color: #888;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const StatusBadge = styled.span<{ $vergeben?: boolean }>`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({ $vergeben }) => ($vergeben ? "#fee2e2" : "#d1fae5")};
  color: ${({ $vergeben }) => ($vergeben ? "#991b1b" : "#065f46")};
`;

const PaketCTA = styled.a<{ $vergeben?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $vergeben }) => ($vergeben ? "#e5e7eb" : "#e10073")};
  color: ${({ $vergeben }) => ($vergeben ? "#6b7280" : "white")};
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  pointer-events: ${({ $vergeben }) => ($vergeben ? "none" : "auto")};
  margin-top: auto;

  &:hover {
    background: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }
`;

const SponsorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex: 1;
`;

const SponsorLogo = styled.img`
  max-width: 80px;
  max-height: 50px;
  object-fit: contain;
`;

const SponsorName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
`;

// -- Werbeflächen-Tabelle --

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    text-align: left;
    padding: 0.75rem 0.75rem;
    font-weight: 700;
    color: white;
    background: #e10073;

    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:last-child {
      border-radius: 0 10px 0 0;
    }
  }

  td {
    padding: 0.65rem 0.75rem;
    border-bottom: 1px solid #f0f0f0;
    color: #333;
  }

  tr:nth-child(even) td {
    background: #fafafa;
  }
  tr:last-child td {
    border-bottom: none;
  }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`;

const TableTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SlotsTag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #065f46;
  background: #d1fae5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

// -- Spieltag & Medien --

const MiniCard = styled.div`
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
`;

const MiniCardName = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.25rem;
`;

const MiniCardPreis = styled.div`
  font-size: 1.05rem;
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
`;

const MiniCardDesc = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  flex: 1;
`;

const MiniCardHint = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.5rem;
  font-style: italic;
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

export default function SponsoringV2Page() {
  const [liveKpis, setLiveKpis] = useState<KPI[]>(fallbackKpis);

  useEffect(() => {
    fetch("/social-stats.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (data?.kpis?.length) setLiveKpis(data.kpis);
      })
      .catch(() => {});
  }, []);

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
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const generateMailto = (category: string) => {
    const subject = encodeURIComponent(`Interesse an Sponsoring: ${category}`);
    const body = encodeURIComponent(
      `Hallo liebes SCKW-Team,\n\nich interessiere mich für den Bereich "${category}" und würde gerne mehr erfahren.\n\nBitte senden Sie mir weitere Informationen.\n\nMein Name: \nFirma (optional): \nTelefon (optional): \n\nHerzliche Grüße\n`,
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
            <strong>1,3 Millionen Social-Media-Views</strong> in dieser Saison –
            100 % organisch, ohne Werbebudget. Aktuell erreichen wir{" "}
            <strong>310.000 Views pro Monat</strong> und Ihre Marke ist in jedem
            Spielbericht dabei.
          </HeroSubtitle>
          <HeroStats>
            {liveKpis.map((kpi) => (
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
                scrollTo("kontakt");
              }}
            >
              Jetzt Kontakt aufnehmen
            </HeroCTA>
            <HeroCTA
              href="#angebot"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("angebot");
              }}
            >
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
              {aufstiegsBanner.text}{" "}
              <strong>{aufstiegsBanner.highlight}</strong>{" "}
              {aufstiegsBanner.suffix}
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

      {/* Exklusiv-Partnerschaften */}
      <SectionAlt id="angebot">
        <Container>
          <SectionHeader>
            <SectionTitle>Exklusiv-Partnerschaften</SectionTitle>
            <SectionSubtitle>
              Vier einzigartige Pakete – jeweils nur 1× verfügbar. Alle Partner
              erscheinen in jedem Spielvor- und Nachbericht.
            </SectionSubtitle>
          </SectionHeader>

          <PaketGrid>
            {exklusivPakete.map((pkg) => (
              <PaketCard key={pkg.id} $vergeben={pkg.vergeben}>
                <PaketHeader>
                  <div>
                    <PaketName>{pkg.name}</PaketName>
                    <PaketPreis>{pkg.preis} / Saison</PaketPreis>
                  </div>
                  <StatusBadge $vergeben={pkg.vergeben}>
                    {pkg.vergeben ? "Vergeben" : "Verfügbar"}
                  </StatusBadge>
                </PaketHeader>

                <PaketTopFeature>{pkg.topFeature}</PaketTopFeature>

                {pkg.vergeben && pkg.sponsorLogo ? (
                  <SponsorInfo>
                    <SponsorLogo
                      src={pkg.sponsorLogo}
                      alt={pkg.sponsorName || ""}
                    />
                    <SponsorName>{pkg.sponsorName}</SponsorName>
                  </SponsorInfo>
                ) : (
                  <PaketLeistungen>
                    {pkg.trikot !== "–" && (
                      <PaketLeistung>Trikot: {pkg.trikot}</PaketLeistung>
                    )}
                    {pkg.id === "stadionname" && (
                      <PaketLeistung>Stadion trägt Ihren Namen</PaketLeistung>
                    )}
                    <PaketLeistung>Bande: {pkg.bande}</PaketLeistung>
                    <PaketLeistung>Banner: {pkg.banner}</PaketLeistung>
                    <PaketLeistung>Magazin: {pkg.magazin}</PaketLeistung>
                    <PaketLeistung>
                      {pkg.saisonkarten} Saisonkarten
                    </PaketLeistung>
                  </PaketLeistungen>
                )}

                <PaketShared>
                  Logo in allen Spielberichten · Stadionansage · Logo Website
                </PaketShared>

                <PaketCTA
                  href={pkg.vergeben ? undefined : generateMailto(pkg.name)}
                  $vergeben={pkg.vergeben}
                >
                  {pkg.vergeben ? "Vergeben" : "Jetzt anfragen"}
                </PaketCTA>
              </PaketCard>
            ))}
          </PaketGrid>
        </Container>
      </SectionAlt>

      {/* Werbeflächen */}
      <Section id="werbeflaechen">
        <Container>
          <SectionHeader>
            <SectionTitle>Werbeflächen</SectionTitle>
            <SectionSubtitle>
              Banden, Banner und Buswerbung – à la carte buchbar, klare Preise.
            </SectionSubtitle>
          </SectionHeader>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {/* Banden & Banner */}
            <TableCard>
              <div style={{ padding: "1.25rem 1.25rem 0" }}>
                <TableTitle>Banden & Banner</TableTitle>
              </div>
              <div style={{ overflowX: "auto" }}>
                <PriceTable>
                  <thead>
                    <tr>
                      <th>Typ</th>
                      <th>Grösse</th>
                      <th>Preis / Saison</th>
                      <th>Verfügbar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {werbeflaechenALaCarte.map((f) => (
                      <tr key={f.name}>
                        <td style={{ fontWeight: 600 }}>{f.name}</td>
                        <td>{f.groesse}</td>
                        <td style={{ fontWeight: 700, color: "#e10073" }}>
                          {f.preis}
                        </td>
                        <td>
                          <SlotsTag>{f.slots} Plätze</SlotsTag>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </PriceTable>
              </div>
            </TableCard>

            {/* Buswerbung */}
            <TableCard>
              <div style={{ padding: "1.25rem 1.25rem 0" }}>
                <TableTitle>Buswerbung</TableTitle>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.5,
                  }}
                >
                  Jede Woche unterwegs in Konstanz, im Landkreis und bei
                  Auswärtsspielen.
                </p>
              </div>
              <img
                src="/vereinsbus.png"
                alt="Vereinsbus SCKW"
                style={{ width: "100%", display: "block" }}
              />
              <div style={{ overflowX: "auto" }}>
                <PriceTable>
                  <thead>
                    <tr>
                      <th>Fläche</th>
                      <th>Grösse</th>
                      <th>Preis / Jahr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...busFlaechenPremium, ...busFlaechenStandard].map(
                      (f) => (
                        <tr key={f.position}>
                          <td style={{ fontWeight: 600 }}>{f.position}</td>
                          <td>{f.groesse}</td>
                          <td style={{ fontWeight: 700, color: "#e10073" }}>
                            {f.preis}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </PriceTable>
              </div>
              <div style={{ padding: "0.75rem 1.25rem 1.25rem" }}>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.2rem",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {busZusatzoptionen.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              </div>
            </TableCard>
          </div>
        </Container>
      </Section>

      {/* Spieltag & Medien */}
      <SectionAlt id="spieltag">
        <Container>
          <SectionHeader>
            <SectionTitle>Spieltag & Medien</SectionTitle>
            <SectionSubtitle>
              Einstieg ins Sponsoring ab 150 € – perfekt zum Ausprobieren.
            </SectionSubtitle>
          </SectionHeader>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {spieltagAngebote.map((a) => (
              <MiniCard key={a.name}>
                <MiniCardName>{a.name}</MiniCardName>
                <MiniCardPreis>{a.preis}</MiniCardPreis>
                <MiniCardDesc>{a.beschreibung}</MiniCardDesc>
                {a.hinweis && <MiniCardHint>{a.hinweis}</MiniCardHint>}
              </MiniCard>
            ))}
          </div>
        </Container>
      </SectionAlt>

      {/* Reichweiten-Karte */}
      <Section>
        <Container>
          <MapSection>
            <MapGrid>
              <MapImageContainer>
                <MapImage
                  src="/verbandsliga-karte.jpg"
                  alt="Verbandsliga Südbaden – Spielorte und Reichweite"
                />
                <MapBadge>Saison 26/27</MapBadge>
              </MapImageContainer>
              <MapContent>
                <MapTitle>Ihre Reichweite wächst mit</MapTitle>
                <MapText>
                  Ob Buswerbung, Trikot oder Bande – Ihre Marke wird in der
                  gesamten Region sichtbar. Als frischer Meister und Aufsteiger
                  spielen wir ab Saison 26/27 Verbandsliga – in 15+ Städten
                  zwischen Freiburg und Konstanz.
                </MapText>
                <MapHighlight>
                  <strong>Was das für Sie bedeutet:</strong> Mehr Gegner,
                  größere Städte, mehr Medienaufmerksamkeit – Ihre Investition
                  wächst automatisch mit, ohne Mehrkosten.
                </MapHighlight>
              </MapContent>
            </MapGrid>
          </MapSection>
        </Container>
      </Section>

      {/* CLUB 500 */}
      <Club500Section>
        <Container>
          <SectionHeader>
            <Club500Title>CLUB 500</Club500Title>
            <Club500Subtitle>
              Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken –
              werden Sie Mitglied und fördern Sie unseren Jugend- und
              Amateurfußball.
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
          {
            icon: "📧",
            title: "E-Mail",
            content: kontakt.email,
            isEmail: true,
          },
          { icon: "📍", title: "Adresse", content: kontakt.vollAdresse },
        ]}
      />

      <Footer />
    </>
  );
}
