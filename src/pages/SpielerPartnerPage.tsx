import styled from "styled-components";
import { Link } from "react-router-dom";
import { kontakt } from "../data/sponsoringData";
import Footer from "../components/Footer";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Lead,
  SectionHeader,
} from "../components/ui";
import { brand } from "../theme";

const leistungen = [
  "Ein Spieler-Post in der Hinrunde und einer in der Rückrunde",
  "Eine Vorstellung als Partner mit ein bis zwei gemeinsamen Bildern mit dem Spieler",
  "Sie kommen mit aufs Bild, wenn er trifft oder Spieler des Spiels wird",
  "Ein vom Spieler signiertes Trikot für Ihr Büro",
  "Exklusiv: nur ein Partner pro Spieler",
  "So sichtbar oder so dezent, wie Sie möchten",
];

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

export default function SpielerPartnerPage() {
  const mailto = `mailto:${kontakt.email}?subject=${encodeURIComponent(
    "Personal Partner - Interesse",
  )}`;

  return (
    <Page>
      <Hero aria-labelledby="pp-title" data-dark>
        <Container>
          <BackLink to="/sponsoring">Zurück zur Übersicht</BackLink>
          <Eyebrow $onDark>Persönliche Partnerschaft</Eyebrow>
          <HeroTitle id="pp-title">Personal Partner.</HeroTitle>
          <Lead $onDark>
            Unterstützen Sie gezielt einen SCKW-Spieler und begleiten Sie ihn
            durch seine Saison. Persönlich, exklusiv und ganz nah an der
            Mannschaft.
          </Lead>
        </Container>
      </Hero>

      <Section aria-labelledby="pp-leistungen">
        <Container>
          <Grid>
            <div>
              <SectionHeader
                id="pp-leistungen"
                eyebrow="Ein Spieler, ein Partner"
                title="Ganz nah dran."
              />
              <Text>
                Als Personal Partner stehen Sie hinter einem einzelnen Spieler
                und begleiten seine Saison beim SCKW. Das ist persönlicher als
                jede Bande: Sie lernen den Spieler kennen, erscheinen gemeinsam
                mit ihm auf unseren Kanälen und sind bei seinen großen Momenten
                dabei.
              </Text>
            </div>

            <Card>
              <CardTitle>Das ist enthalten</CardTitle>
              <List>
                {leistungen.map((l) => (
                  <li key={l}>
                    <Check />
                    {l}
                  </li>
                ))}
              </List>
              <PriceRow>
                <span>Eine Saison</span>
                <Price>2.500&nbsp;€</Price>
              </PriceRow>
              <PriceNote>
                Verhandlungsbasis, im Gespräch individuell anpassbar.
              </PriceNote>
            </Card>
          </Grid>
        </Container>
      </Section>

      <CTASection aria-labelledby="pp-kontakt">
        <Container>
          <SectionHeader
            id="pp-kontakt"
            eyebrow="Kontakt"
            title="Sprechen wir darüber."
            lead="Erzählen Sie uns, welchen Spieler Sie begleiten möchten. Wir melden uns innerhalb von 24 Stunden."
          />
          <ButtonLink href={mailto}>Per E-Mail anfragen</ButtonLink>
        </Container>
      </CTASection>

      <Footer />
    </Page>
  );
}

const Page = styled.div`
  color-scheme: light;
  font-family: ${brand.fontBody};
  color: ${brand.ink};
  text-align: left;
  background: #fff;
`;

const Hero = styled.section`
  background: ${brand.navy};
  color: #fff;
  padding: 3rem 0 3.5rem;

  @media (min-width: 768px) {
    padding: 4rem 0 5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: #fff;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 9vw, 5.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;
`;

const Section = styled.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: 4rem;
    align-items: start;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.65;
  color: ${brand.ink};
  max-width: 60ch;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid ${brand.line};
  border-top: 4px solid ${brand.red};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: ${brand.navy};
  margin: 0 0 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    padding: 0.7rem 0;
    line-height: 1.5;
    border-bottom: 1px solid ${brand.line};
  }

  li:last-child {
    border-bottom: none;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.25rem;
    color: ${brand.blue};
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${brand.line};
  font-weight: 600;
  color: ${brand.muted};
`;

const Price = styled.span`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 2.8rem);
  line-height: 1;
  color: ${brand.navy};
`;

const PriceNote = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: ${brand.muted};
`;

const CTASection = styled.section`
  background: ${brand.paper};
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`;
