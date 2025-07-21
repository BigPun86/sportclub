import Header from "./components/Header";
import Footer from "./components/Footer";
import SponsorBox from "./components/SponsorBox";
import styled from "styled-components";
import "./App.css";

const Hero = styled.section`
  background: url("/hero.jpg") center/cover no-repeat;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

const Content = styled.main`
  max-width: 1140px;
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

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  return (
    <>
      {/* <Header /> */}
      <Hero>
        <HeroOverlay />
        <HeroTitle>
          SC Konstanz-Wollmatingen
          <br />
          Ihre Marke im Fokus – direkt am Spielfeldrand
        </HeroTitle>
      </Hero>
      <Content>
        <Headline>Sponsoring-Pakete 2025/2026</Headline>
        <Grid>
          <SponsorBox
            title="🏆 Hauptsponsor"
            price="15.000 €/Jahr"
            status="✅ Vergeben"
            benefits={[
              "Trikotbrust 1. Mannschaft",
              "2 Banden (3x1 m)",
              "Logo auf Präsentationsanzügen",
              "Großfläche am Eingang",
              "Anzeige im Stadionheft (U2/U4)",
              "5 Stadiondurchsagen",
              "Sichtbarkeit: Social, Print, Google",
            ]}
          />

          <SponsorBox
            title="🏟 Stadionpartner"
            price="12.000 €/Jahr"
            status="🟩 1 verfügbar"
            benefits={[
              "Namensrecht Stadion",
              "1 Bande + Werbeplane",
              "2 Social Media Posts/Monat",
              "1/1 Seite im Stadionheft",
              "Stadionansage jedes Heimspiel",
            ]}
          />

          <SponsorBox
            title="🥈 Co-Sponsor"
            price="10.000 €/Jahr"
            status="🟧 1 vergeben · 2 verfügbar"
            benefits={[
              "Trikotärmel",
              "1 Bande (3x1 m)",
              "1/2 Seite im Stadionheft",
              "2 Stadiondurchsagen",
              "Social Media je Spiel",
            ]}
          />

          <SponsorBox
            title="🥉 Silber"
            price="5.000 €/Jahr"
            status="🟧 1 vergeben · 3 verfügbar"
            benefits={[
              "1 Bande (3x1 m, 6 Monate)",
              "1/4 Seite im Stadionheft",
              "Social Media-Erwähnung",
              "Werbeplane am Gelände",
            ]}
          />

          <SponsorBox
            title="🟫 Bronze"
            price="2.000 €/Jahr"
            status="🟩 Verfügbar"
            benefits={[
              "1 Bande (3x1 m, 6 Monate)",
              "Logo & Link auf Website",
              "Optional: CL-Abende + Social Media",
            ]}
          />

          <SponsorBox
            title="🟧 Bandenwerbung"
            price="800 €/Jahr"
            status="🟧 11 vergeben · ~19 verfügbar"
            benefits={[
              "3x1 m Bande am Hauptspielfeld",
              "Sichtbarkeit bei allen Heimspielen",
              "Option: Website-Link",
              "Einmalkosten: 70€/lfd. Meter für Herstellung",
            ]}
          />
        </Grid>
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
      </Content>
      <Footer />
    </>
  );
}
