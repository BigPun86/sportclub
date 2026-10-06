import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getHeroImage } from "../utils/imageLoader";
import {
  kpis as fallbackKpis,
  kontakt,
  aufstiegsBanner,
  exklusivPakete,
  sharedLeistungen,
  werbeflaechenALaCarte,
  busFlaechenPremium,
  busFlaechenStandard,
  busZusatzoptionen,
  busNote,
  spieltagAngebote,
  verbandsligaSpielorte,
  type KPI,
} from "../data/sponsoringData";
import CurrentSponsors from "../components/CurrentSponsors";
import { ContactSection } from "../components/ContactSection";
import Footer from "../components/Footer";
import StadiumPreview from "../components/StadiumPreview";
import {
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeader,
} from "../components/ui";
import { buttonStyles, type ButtonVariant } from "../components/buttonStyles";
import { brand } from "../theme";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Keep "€" on the same line as its number
const nb = (text: string) => text.replace(/ €/g, "\u00a0€");

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
};

// -- Page frame --

const Page = styled.div`
  color-scheme: light;
  font-family: ${brand.fontBody};
  color: ${brand.ink};
  text-align: left;
  background: #fff;

  section[id] {
    scroll-margin-top: 72px;
  }
`;

const Section = styled.section<{ $tone?: "white" | "paper" | "navy" }>`
  padding: 4rem 0;
  background: ${({ $tone }) =>
    $tone === "paper" ? brand.paper : $tone === "navy" ? brand.navy : "#fff"};
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

// -- Hero --

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  background: ${brand.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 860px);
`;

const HeroSlide = styled.div<{ $bg: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  background: url(${({ $bg }) => $bg}) center 30% / cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1.2s ease;
`;

const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(10, 24, 48, 0.94) 0%,
      rgba(10, 24, 48, 0.78) 45%,
      rgba(10, 24, 48, 0.35) 100%
    ),
    linear-gradient(0deg, rgba(10, 24, 48, 0.95) 0%, rgba(10, 24, 48, 0) 45%);
`;

const HeroInner = styled(Container)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`;

const HeroTitle = styled.h1`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6.5rem);
  line-height: 0.9;
  letter-spacing: 0;
  margin: 0;
  color: #fff;

  span {
    display: block;
  }
  span:first-child {
    font-style: italic;
  }
`;

const HeroLead = styled.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);

  strong {
    color: #fff;
    font-weight: 700;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Stats = styled.ul`
  list-style: none;
  margin: 3.5rem 0 0;
  padding: 1.5rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;

    li + li {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      padding-left: 1.5rem;
    }
  }
`;

const StatValue = styled.strong`
  display: block;
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 2.75rem);
  line-height: 1;
  color: #fff;
  font-variant-numeric: tabular-nums;
`;

const StatLabel = styled.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
`;

// -- Promotion band --

const Band = styled.div`
  background: ${brand.red};
  color: #fff;
  padding: 0.9rem 0;
  font-size: 1.05rem;
  line-height: 1.4;

  strong {
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
`;

// -- Exclusive packages --

const Included = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 12px;
  font-size: 0.95rem;
  color: ${brand.ink};

  strong {
    font-weight: 700;
  }
`;

const CheckItem = styled.li`
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.45;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${brand.blue};
  }
`;

const InlineChecks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
`;

const PaketGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

const PaketCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`;

const PaketName = styled.h3`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1;
  text-transform: uppercase;
  color: ${brand.navy};
  margin: 0;
`;

const Placement = styled.p`
  margin: 0.4rem 0 0;
  font-weight: 600;
  color: ${brand.red};
`;

const Price = styled.p`
  margin: 1.25rem 0;
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 1;
  color: ${brand.navy};
  font-variant-numeric: tabular-nums;

  span {
    font-family: ${brand.fontBody};
    font-size: 1rem;
    font-weight: 500;
    color: ${brand.muted};
    margin-left: 0.15rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 1.25rem 0 0;
  border-top: 1px solid ${brand.line};
  display: grid;
  gap: 0.55rem;
  flex: 1;
`;

const PaketAction = styled.button<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
  width: 100%;
  margin-top: auto;
`;

const TakenStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border: 1px dashed #b9c6d8;
  border-radius: 12px;
  color: ${brand.muted};

  span {
    font-size: 0.95rem;
  }
`;

const TakenName = styled.strong`
  display: block;
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${brand.navy};
`;

const TakenSponsor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: ${brand.ink};

  img {
    width: 88px;
    height: 52px;
    object-fit: contain;
    background: #fff;
    border: 1px solid ${brand.line};
    border-radius: 8px;
    padding: 0.3rem;
  }

  strong {
    font-weight: 700;
  }
`;

const Note = styled.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${brand.muted};
`;

// -- Ad spaces --

const Card = styled.div`
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 14px;
  overflow: hidden;
`;

const CardHead = styled.div`
  padding: 1.5rem 1.5rem 1rem;

  h3 {
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: ${brand.navy};
    margin: 0;
  }

  p {
    margin: 0.35rem 0 0;
    color: ${brand.muted};
  }
`;

const TableScroll = styled.div`
  overflow-x: auto;

  &:focus-visible {
    outline-offset: -3px;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  font-variant-numeric: tabular-nums;

  th,
  td {
    padding: 0.8rem 1.5rem;
    text-align: left;
    white-space: nowrap;
  }

  th {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${brand.muted};
    background: ${brand.paper};
    border-top: 1px solid ${brand.line};
    border-bottom: 1px solid ${brand.line};
  }

  td {
    border-bottom: 1px solid ${brand.line};
    color: ${brand.ink};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    font-weight: 600;
    white-space: normal;
  }

  .num {
    text-align: right;
  }

  td.num:last-child {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;

    th,
    td {
      padding: 0.7rem 0.5rem;
      white-space: normal;
    }
    th:first-child,
    td:first-child {
      padding-left: 1rem;
    }
    th:last-child,
    td:last-child {
      padding-right: 1rem;
      white-space: nowrap;
    }
  }
`;

const AdGrid = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const BusLayout = styled.div`
  display: grid;
  grid-template-areas: "img" "table" "opt";

  & > img {
    grid-area: img;
  }
  & > div[role="region"] {
    grid-area: table;
  }

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas: "img table" "opt table";
    align-items: start;
  }
`;

const BusImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background: #0b0b0d;
`;

const Options = styled.div`
  grid-area: opt;
  padding: 1.25rem 1.5rem 1.5rem;

  h4 {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${brand.ink};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.5rem;
    color: ${brand.ink};
  }
`;

// -- Matchday --

const MatchdayGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

const MatchdayCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 14px;
  padding: 1.5rem;

  h3 {
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${brand.navy};
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.5;
    color: ${brand.ink};
  }
`;

const MatchdayPrice = styled.p`
  && {
    margin: 0.5rem 0 1rem;
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: 1.9rem;
    color: ${brand.red};
    font-variant-numeric: tabular-nums;
  }
`;

const MatchdayHint = styled.p`
  && {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${brand.line};
    font-weight: 600;
    color: ${brand.muted};
  }
`;

// -- Reach --

const Watermark = styled.div`
  position: absolute;
  inset: auto -2rem -1.5rem auto;
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-style: italic;
  font-size: clamp(6rem, 18vw, 15rem);
  line-height: 0.8;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.04);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
`;

const ReachGrid = styled.div`
  position: relative;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }
`;

const Venues = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const VenuesTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
`;

const VenueList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  li {
    font-family: ${brand.fontDisplay};
    font-weight: 700;
    font-size: clamp(1.1rem, 4.4vw, 1.35rem);
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
    padding-left: 0.75rem;
    border-left: 3px solid ${brand.red};
  }
`;

const VenuesNote = styled.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ReachText = styled.p`
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;
`;

const ReachPoint = styled.div`
  border-left: 3px solid ${brand.red};
  padding: 0.25rem 0 0.25rem 1.25rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 60ch;

  strong {
    display: block;
    color: #fff;
    font-weight: 700;
  }
`;

// -- 500er Club --

const ClubTeaser = styled.div`
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 1.5rem;
  border: 1px solid ${brand.line};
  border-top: 4px solid ${brand.blue};
  border-radius: 14px;
  background: #fff;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3rem;
    padding: 2.5rem;
  }

  h2 {
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1;
    text-transform: uppercase;
    color: ${brand.navy};
    margin: 0 0 0.75rem;
  }

  p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${brand.muted};
    max-width: 60ch;
  }
`;

const Lower = styled.span`
  text-transform: none;
`;

const ClubLink = styled(Link)<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
`;

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SponsoringV2Page() {
  const [liveKpis, setLiveKpis] = useState<KPI[]>(fallbackKpis);
  const [interest, setInterest] = useState<string | undefined>();

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
    if (heroImages.length <= 1 || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const requestPackage = (name: string) => {
    setInterest(name);
    scrollToId("kontakt");
  };

  const freiePakete = exklusivPakete.filter((p) => !p.vergeben);
  const vergebenePakete = exklusivPakete.filter((p) => p.vergeben);
  const preisZahl = (preis: string) => Number(preis.replace(/\D/g, ""));
  const minPreis = [...freiePakete].sort(
    (a, b) => preisZahl(a.preis) - preisZahl(b.preis),
  )[0]?.preis;
  const interestOptions = [
    ...freiePakete.map((p) => p.name),
    "Bande oder Banner",
    "Buswerbung",
    ...spieltagAngebote.map((a) => a.name),
  ];
  const included = sharedLeistungen.split(" · ");

  return (
    <Page>
      {/* Hero */}
      <Hero aria-labelledby="hero-title" data-dark>
        {heroImages.map((src, i) => (
          <HeroSlide
            key={i}
            $bg={src}
            $active={i === heroIndex}
            aria-hidden="true"
          />
        ))}
        <HeroShade />
        <HeroInner>
          <Eyebrow $onDark>Partner werden beim SC Konstanz-Wollmatingen</Eyebrow>
          <HeroTitle id="hero-title">
            <span>Sponsoring,</span> <span>das messbar wirkt.</span>
          </HeroTitle>
          <HeroLead>
            Wir sind ein Sportverein aus Wollmatingen, seit 1930. Und wir
            haben Reichweite: <strong>1,7 Millionen Views</strong> auf Instagram
            und Facebook in den letzten zwölf Monaten, ohne einen Euro
            Werbebudget.
          </HeroLead>
          <HeroActions>
            <ButtonLink
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("kontakt");
              }}
            >
              Anfrage stellen
            </ButtonLink>
            <ButtonLink
              href="#angebot"
              $variant="outlineLight"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("angebot");
              }}
            >
              Angebote ansehen
            </ButtonLink>
          </HeroActions>
          <Stats aria-label="Reichweite in Zahlen">
            {liveKpis.map((kpi) => (
              <li key={kpi.label}>
                <StatValue>{kpi.value}</StatValue>
                <StatLabel>{kpi.label}</StatLabel>
              </li>
            ))}
          </Stats>
        </HeroInner>
      </Hero>

      {aufstiegsBanner.active && (
        <Band data-dark>
          <Container>
            <strong>{aufstiegsBanner.text}</strong>
            {aufstiegsBanner.suffix} {aufstiegsBanner.highlight}.
          </Container>
        </Band>
      )}

      {/* Partner */}
      <Section aria-labelledby="partner-title">
        <Container>
          <SectionHeader
            id="partner-title"
            eyebrow="Saison 26/27"
            title="Unsere Partner."
            lead="Ohne sie ginge es nicht. Danke an alle Unternehmen, die den SCKW schon unterstützen."
          />
          <CurrentSponsors />
        </Container>
      </Section>

      {/* Exklusiv-Partnerschaften */}
      <Section $tone="paper" id="angebot" aria-labelledby="angebot-title">
        <Container>
          <SectionHeader
            id="angebot-title"
            eyebrow={`Ab ${minPreis} pro Saison`}
            title="Exklusiv-Partnerschaften."
            lead="Trikot oder Stadionname, dazu Bande, Banner, Magazin und Saisonkarten. Jedes Paket gibt es nur einmal."
          />

          <Included>
            <strong>In jedem Paket enthalten:</strong>
            <InlineChecks>
              {included.map((item) => (
                <CheckItem key={item}>
                  <Check />
                  {item}
                </CheckItem>
              ))}
            </InlineChecks>
          </Included>

          {vergebenePakete.map((pkg) => (
            <TakenStrip key={pkg.id}>
              <div>
                <TakenName>{pkg.name}</TakenName>
                <span>{pkg.topFeature}, vergeben an</span>
              </div>
              <TakenSponsor
                as={pkg.sponsorWebsite ? "a" : "div"}
                href={pkg.sponsorWebsite}
                target={pkg.sponsorWebsite ? "_blank" : undefined}
                rel={pkg.sponsorWebsite ? "noopener noreferrer" : undefined}
              >
                {pkg.sponsorLogo && <img src={pkg.sponsorLogo} alt="" />}
                <strong>{pkg.sponsorName}</strong>
              </TakenSponsor>
            </TakenStrip>
          ))}

          <PaketGrid>
            {freiePakete.map((pkg) => (
              <PaketCard key={pkg.id} aria-labelledby={`paket-${pkg.id}`}>
                <PaketName id={`paket-${pkg.id}`}>{pkg.name}</PaketName>
                <Placement>{pkg.topFeature}</Placement>
                <Price>
                  {pkg.preis} <span>pro Saison</span>
                </Price>
                <FeatureList>
                  {pkg.id === "stadionname" && (
                    <CheckItem>
                      <Check />
                      Das Stadion trägt Ihren Namen
                    </CheckItem>
                  )}
                  {pkg.trikot !== "–" && (
                    <CheckItem>
                      <Check />
                      Trikot: {pkg.trikot}
                    </CheckItem>
                  )}
                  <CheckItem>
                    <Check />
                    Bande: {pkg.bande}
                  </CheckItem>
                  <CheckItem>
                    <Check />
                    Banner: {pkg.banner}
                  </CheckItem>
                  <CheckItem>
                    <Check />
                    Stadionmagazin: {pkg.magazin}
                  </CheckItem>
                  <CheckItem>
                    <Check />
                    {pkg.saisonkarten} Saisonkarten
                  </CheckItem>
                </FeatureList>
                <PaketAction
                  type="button"
                  onClick={() => requestPackage(pkg.name)}
                >
                  {pkg.name} anfragen
                </PaketAction>
              </PaketCard>
            ))}
          </PaketGrid>
          <Note>Alle Preise zzgl. MwSt.</Note>
        </Container>
      </Section>

      <StadiumPreview onRequest={requestPackage} />

      {/* Werbeflächen */}
      <Section
        $tone="paper"
        id="werbeflaechen"
        aria-labelledby="werbeflaechen-title"
      >
        <Container>
          <SectionHeader
            id="werbeflaechen-title"
            eyebrow="Einzeln buchbar"
            title="Werbeflächen."
            lead="Banden, Banner und Buswerbung zu festen Preisen. Für Betriebe, die in der Region gesehen werden wollen."
          />

          <AdGrid>
            <Card>
              <CardHead>
                <h3>Banden & Banner</h3>
                <p>Am Spielfeldrand, bei jedem Heimspiel sichtbar.</p>
              </CardHead>
              <TableScroll
                tabIndex={0}
                role="region"
                aria-label="Preise Banden und Banner"
              >
                <PriceTable>
                  <thead>
                    <tr>
                      <th scope="col">Fläche</th>
                      <th scope="col">Größe</th>
                      <th scope="col" className="num">
                        Plätze
                      </th>
                      <th scope="col" className="num">
                        Preis pro Saison
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {werbeflaechenALaCarte.map((f) => (
                      <tr key={f.name}>
                        <td>{f.name}</td>
                        <td>{f.groesse}</td>
                        <td className="num">{f.slots}</td>
                        <td className="num">{f.preis}</td>
                      </tr>
                    ))}
                  </tbody>
                </PriceTable>
              </TableScroll>
            </Card>

            <Card>
              <CardHead>
                <h3>Buswerbung</h3>
                <p>
                  Jede Woche unterwegs in Konstanz, im Landkreis und bei
                  Auswärtsspielen.
                </p>
              </CardHead>
              <BusLayout>
                <BusImage
                  src="/vereinsbus.png"
                  alt="Vereinsbus des SCKW mit eingezeichneten Werbeflächen"
                />
                <Options>
                  <h4>Optionen</h4>
                  <ul>
                    {busZusatzoptionen.map((opt) => (
                      <CheckItem key={opt}>
                        <Check />
                        {opt}
                      </CheckItem>
                    ))}
                  </ul>
                  <Note>{busNote}</Note>
                </Options>
                <TableScroll
                  tabIndex={0}
                  role="region"
                  aria-label="Preise Buswerbung"
                >
                  <PriceTable>
                    <thead>
                      <tr>
                        <th scope="col">Fläche</th>
                        <th scope="col">Größe</th>
                        <th scope="col" className="num">
                          Preis pro Jahr
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...busFlaechenPremium, ...busFlaechenStandard].map(
                        (f) => (
                          <tr key={f.position}>
                            <td>{f.position}</td>
                            <td>{f.groesse}</td>
                            <td className="num">{f.preis}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </PriceTable>
                </TableScroll>
              </BusLayout>
            </Card>
          </AdGrid>
          <Note>Alle Preise zzgl. MwSt.</Note>
        </Container>
      </Section>

      {/* Spieltag & Medien */}
      <Section id="spieltag" aria-labelledby="spieltag-title">
        <Container>
          <SectionHeader
            id="spieltag-title"
            eyebrow="Ab 150 € netto"
            title="Spieltag & Medien."
            lead="Der einfachste Einstieg ins Sponsoring, gut zum Ausprobieren."
          />
          <MatchdayGrid>
            {spieltagAngebote.map((a) => (
              <MatchdayCard key={a.name}>
                <h3>{a.name}</h3>
                <MatchdayPrice>{nb(a.preis)}</MatchdayPrice>
                <p>{nb(a.beschreibung)}</p>
                {a.hinweis && <MatchdayHint>{nb(a.hinweis)}</MatchdayHint>}
              </MatchdayCard>
            ))}
          </MatchdayGrid>
        </Container>
      </Section>

      {/* Reichweite */}
      <Section $tone="navy" aria-labelledby="reichweite-title" data-dark>
        <Watermark aria-hidden="true">Verbandsliga</Watermark>
        <Container>
          <ReachGrid>
            <div>
              <SectionHeader
                id="reichweite-title"
                eyebrow="Verbandsliga Südbaden"
                title="Ihre Reichweite wächst mit."
                onDark
              />
              <ReachText>
                Als Meister und Aufsteiger spielen wir seit dieser Saison
                Verbandsliga, gegen 15 Vereine von Kuppenheim bei Baden-Baden bis
                an den Bodensee. Trikot und Vereinsbus sind bei den
                Auswärtsspielen dabei.
              </ReachText>
              <ReachPoint>
                <strong>Was das für Sie bedeutet</strong>
                Mehr Kilometer für den Vereinsbus, eine höhere Liga für Ihre
                Bande. Ihr Paket kostet dadurch nicht mehr.
              </ReachPoint>
            </div>
            <Venues>
              <VenuesTitle>Auswärts unterwegs in</VenuesTitle>
              <VenueList>
                {verbandsligaSpielorte.map((ort) => (
                  <li key={ort}>{ort}</li>
                ))}
              </VenueList>
              <VenuesNote>
                Heimspiele in Konstanz. Quelle: SBFV, Staffel 2026/27.
              </VenuesNote>
            </Venues>
          </ReachGrid>
        </Container>
      </Section>

      {/* 500er Club */}
      <Section aria-labelledby="club500-title">
        <Container>
          <ClubTeaser>
            <div>
              <Eyebrow>100 Felder, 500 € pro Feld und Saison</Eyebrow>
              <h2 id="club500-title">
                Der <Lower>500er</Lower> Club.
              </h2>
              <p>
                Für Privatpersonen und Firmen: Mit einem Feld im 500er Club
                unterstützen Sie direkt unsere erste Mannschaft in der
                Verbandsliga. Sie erhalten eine Spendenbescheinigung und auf
                Wunsch einen Platz auf der Spendentafel.
              </p>
            </div>
            <ClubLink to="/sponsoring/club-500" $variant="outlineDark">
              Zum 500er Club
            </ClubLink>
          </ClubTeaser>
        </Container>
      </Section>

      <ContactSection
        email={kontakt.email}
        address={kontakt.vollAdresse.split("\n")}
        interestOptions={interestOptions}
        interest={interest}
      />

      <Footer />
    </Page>
  );
}
