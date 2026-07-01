import styled from "styled-components";
import { Link } from "react-router-dom";
import { kontakt } from "../data/sponsoringData";
import Footer from "../components/Footer";

const leistungen = [
  "1 Spieler-Post in der Hinrunde + 1 in der Rückrunde",
  "1 Sponsor-Vorstellung mit 1-2 Bildern gemeinsam mit dem Spieler",
  "Du kommst mit aufs Bild, wenn er Spieler des Spiels wird oder trifft",
  "Ein vom Spieler signiertes Trikot für dein Büro",
  "Exklusiv: nur ein Partner pro Spieler",
  "So sichtbar oder so dezent, wie du magst",
];

export default function SpielerPartnerPage() {
  return (
    <>
      <PageHeader>
        <BackLink to="/sponsoring">← Zurück zur Übersicht</BackLink>
        <PageTitle>Personal Partner</PageTitle>
        <PageSubtitle>
          Unterstütze gezielt einen SCKW-Spieler und werde ein Teil seiner
          Saison. Persönlich, exklusiv und direkt am Herzstück des Vereins.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <Container>
          <Intro>
            Als Personal Partner stehst du hinter einem einzelnen Spieler und
            begleitest seine Saison bei uns. Wir sind ein Amateurverein, kein
            Profi-Club - es geht um Verbundenheit mit dem SCKW und dem Spieler,
            nicht um eine Werbetabelle. Dafür bist du ganz nah dran.
          </Intro>

          <Card>
            <CardTitle>Was drin ist</CardTitle>
            <List>
              {leistungen.map((l) => (
                <ListItem key={l}>{l}</ListItem>
              ))}
            </List>
            <PriceRow>
              <PriceLabel>Eine Saison</PriceLabel>
              <Price>2.500 €</Price>
            </PriceRow>
            <PriceNote>Verhandlungsbasis - im Gespräch individuell anpassbar</PriceNote>
          </Card>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>Interesse?</CTATitle>
          <CTAText>
            Lass uns kurz sprechen, welchen Spieler du begleiten möchtest.
          </CTAText>
          <CTAButton
            href={`mailto:${kontakt.email}?subject=${encodeURIComponent(
              "Personal Partner - Interesse"
            )}`}
          >
            Anfragen
          </CTAButton>
        </Container>
      </CTASection>

      <Footer />
    </>
  );
}

const PageHeader = styled.section`
  background: #0b0b0d;
  padding: 3.5rem 1rem 3rem;
  text-align: center;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const PageTitle = styled.h1`
  color: white;
  font-size: clamp(1.8rem, 6vw, 3rem);
  font-weight: 900;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
`;

const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Section = styled.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const Intro = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto 2.5rem;
  max-width: 620px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
  color: #e10073;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  padding: 0.7rem 0 0.7rem 1.75rem;
  font-size: 1.02rem;
  color: #333;
  line-height: 1.5;
  border-bottom: 1px solid #f4f4f4;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.7rem;
    color: #e10073;
    font-weight: 800;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
`;

const PriceLabel = styled.span`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
`;

const Price = styled.span`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const PriceNote = styled.p`
  margin: 0.6rem 0 0 0;
  font-size: 0.9rem;
  color: #888;
  text-align: right;
`;

const CTASection = styled.section`
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 100%);
`;

const CTATitle = styled.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
`;

const CTAText = styled.p`
  font-size: 1.05rem;
  color: #555;
  margin: 0 auto 0.5rem;
  max-width: 480px;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`;
