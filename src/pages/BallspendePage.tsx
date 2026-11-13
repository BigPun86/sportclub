import styled from "styled-components";
import { getHeroImage } from "../utils/imageLoader";
import ballspenden from "../data/ballspenden.json";
import Footer from "../components/Footer";
import { ButtonLink, Container, Eyebrow, SectionHeader } from "../components/ui";
import { brand } from "../theme";

// Daten pflegen: src/data/ballspenden.json (Quelle ist die Kampagne
// "Ballspender" in der Zentrale). Ein Spiel ohne "spender" gilt als frei.

type Spiel = {
  anstoss: string;
  gegner: string;
  ort: string;
  wettbewerb: string;
  spender: string | null;
};

const PREIS = "150 €";
const MAIL = "sponsoring@sckw.de";
const HERO_IMAGE = getHeroImage("herren/herren_1.jpg");

const LEISTUNGEN = [
  {
    title: "Stadiondurchsage",
    text: "Ihr Name vor dem Anpfiff, bei jedem Tor und zur Halbzeit.",
  },
  {
    title: "Heimspielmagazin",
    text: "Nennung als Ballspender im Heft zum Spiel.",
  },
  {
    title: "Instagram",
    text: "Eine Story mit Ihrem Namen auf unserem Instagram-Kanal.",
  },
];

const datum = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const uhrzeit = (iso: string) =>
  new Date(iso).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

const anfrageLink = (s: Spiel) => {
  const spiel = `SCKW - ${s.gegner} am ${datum(s.anstoss)}`;
  const subject = `Ballspende: ${spiel}`;
  const body =
    `Hallo,\n\nich möchte Ballspender beim Heimspiel ${spiel} werden.\n\n` +
    `Name für Durchsage und Heft:\nTelefon:\n\nViele Grüße`;
  return `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// ---------------------------------------------------------------------------

const Page = styled.div`
  color-scheme: light;
  font-family: ${brand.fontBody};
  color: ${brand.ink};
  text-align: left;
  background: #fff;
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  color: #fff;
  background:
    linear-gradient(90deg, rgba(10, 24, 48, 0.94) 0%, rgba(10, 24, 48, 0.7) 55%, rgba(10, 24, 48, 0.35) 100%),
    url(${HERO_IMAGE}) center 30% / cover no-repeat,
    ${brand.navyDeep};
`;

const HeroInner = styled(Container)`
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`;

const HeroTitle = styled.h1`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.9;
  margin: 0;
`;

const HeroLead = styled.p`
  max-width: 34rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`;

const Section = styled.section<{ $paper?: boolean }>`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({ $paper }) => ($paper ? brand.paper : "#fff")};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const LeistungGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

const LeistungCard = styled.div`
  border: 1px solid ${brand.line};
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    font-family: ${brand.fontDisplay};
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    color: ${brand.muted};
    line-height: 1.5;
  }
`;

const Preis = styled.p`
  margin: 2rem 0 0;
  font-size: 1.1rem;

  strong {
    font-family: ${brand.fontDisplay};
    font-size: 2rem;
    color: ${brand.red};
    margin-right: 0.5rem;
  }
`;

const Liste = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
`;

const Zeile = styled.li<{ $vorbei: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  align-items: center;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  opacity: ${({ $vorbei }) => ($vorbei ? 0.6 : 1)};

  @media (min-width: 768px) {
    grid-template-columns: 11rem 1fr auto;
  }
`;

const Wann = styled.div`
  font-weight: 700;

  span {
    display: block;
    font-weight: 400;
    color: ${brand.muted};
    font-size: 0.9rem;
  }
`;

const Gegner = styled.div`
  font-family: ${brand.fontDisplay};
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.15;

  span {
    display: block;
    font-family: ${brand.fontBody};
    font-size: 0.9rem;
    font-weight: 400;
    color: ${brand.muted};
  }
`;

const Spender = styled.div`
  font-weight: 700;
  color: ${brand.blue};

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${brand.muted};
  }

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const Frei = styled.span`
  color: ${brand.muted};
  font-weight: 600;
`;

// ---------------------------------------------------------------------------

export default function BallspendePage() {
  const { saison, spiele } = ballspenden as { saison: string; spiele: Spiel[] };
  const jetzt = Date.now();
  const offen = spiele.filter((s) => !s.spender && new Date(s.anstoss).getTime() > jetzt).length;

  return (
    <Page>
      <Hero aria-labelledby="ballspende-title" data-dark>
        <HeroInner>
          <Eyebrow $onDark>{PREIS} pro Heimspiel · Saison {saison}</Eyebrow>
          <HeroTitle id="ballspende-title">Ballspende.</HeroTitle>
          <HeroLead>
            Sie spenden den Spielball für ein Heimspiel unserer Ersten in der
            Verbandsliga. Dafür hört das ganze Stadion Ihren Namen.
          </HeroLead>
          <ButtonLink href="#spiele">
            {offen > 0 ? `${offen} freie Spiele ansehen` : "Alle Spiele ansehen"}
          </ButtonLink>
        </HeroInner>
      </Hero>

      <Section aria-labelledby="leistung-title">
        <Container>
          <SectionHeader
            id="leistung-title"
            eyebrow="Ihre Ballspende"
            title="Was Sie bekommen."
          />
          <LeistungGrid>
            {LEISTUNGEN.map((l) => (
              <LeistungCard key={l.title}>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </LeistungCard>
            ))}
          </LeistungGrid>
          <Preis>
            <strong>{PREIS}</strong> pro Spiel · 5er-Pack 500 €
          </Preis>
        </Container>
      </Section>

      <Section $paper id="spiele" aria-labelledby="spiele-title">
        <Container>
          <SectionHeader
            id="spiele-title"
            eyebrow={`Heimspiele ${saison}`}
            title="Alle Spiele, alle Ballspender."
            lead="Freies Spiel gefunden? Ein Klick, und die Anfrage ist schon vorbereitet."
          />
          <Liste>
            {spiele.map((s) => {
              const vorbei = new Date(s.anstoss).getTime() < jetzt;
              return (
                <Zeile key={s.anstoss} $vorbei={vorbei && !s.spender}>
                  <Wann>
                    {datum(s.anstoss)}
                    <span>{uhrzeit(s.anstoss)} Uhr</span>
                  </Wann>
                  <Gegner>
                    {s.gegner}
                    <span>
                      {s.ort}
                      {s.wettbewerb !== "Verbandsliga" && ` · ${s.wettbewerb}`}
                    </span>
                  </Gegner>
                  {s.spender ? (
                    <Spender>
                      <span>Ballspender</span>
                      {s.spender}
                    </Spender>
                  ) : vorbei ? (
                    <Frei>Spiel vorbei</Frei>
                  ) : (
                    <ButtonLink href={anfrageLink(s)}>Spiel anfragen</ButtonLink>
                  )}
                </Zeile>
              );
            })}
          </Liste>
        </Container>
      </Section>

      <Footer />
    </Page>
  );
}
