import { useState, useEffect } from "react";
import styled from "styled-components";
import { getGalleryHeroImage, getHeroImage } from "../utils/imageLoader";

// Hero Section - Above the Fold
const Hero = styled.section`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("${getGalleryHeroImage("herren", 4)}") center/cover;
    opacity: 0.3;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
  opacity: 0.95;
`;

const HeroCTA = styled.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }
`;

// Core Values Section
const ValuesSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
`;

const ValuesGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 32px rgba(225, 0, 115, 0.15);
  }
`;

const ValueIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ValueText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ValueStats = styled.div`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Package Cards Section
const PackagesSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const PackagesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const PackageCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #e10073;
    box-shadow: 0 12px 32px rgba(225, 0, 115, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.8rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const PackagePrice = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #222;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const PackagePeriod = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const PackageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: center;
    padding: 0.5rem 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✓";
      color: #e10073;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const PackageButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`;

// Instagram Insights Section
const InsightsSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 5rem 2rem;
  border-top: 1px solid #eee;
`;

const InsightsGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const InsightCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InsightValue = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.5rem;
`;

const InsightLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const InsightsTitle = styled.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`;

// Examples Gallery
const ExamplesSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const ExamplesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExampleCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Generic preview tile (e.g. for PDFs or schematics)
const PreviewBox = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 200px;
  border-radius: 12px 12px 0 0;
  background: ${({ $bg }) =>
    $bg
      ? `url(${$bg}) center/cover`
      : `linear-gradient(135deg,#f7f7fa,#ffffff)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "Vorschau";
    color: #e10073;
    font-weight: 900;
    font-size: 1.05rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

const PreviewButton = styled.a`
  display: inline-block;
  background: #e10073;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.7rem 1.2rem;
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e10073;

  &:hover {
    background: #b8005a;
    border-color: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.25);
  }
`;

const ExampleContent = styled.div`
  padding: 1.5rem;
`;

const ExampleTitle = styled.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ExampleText = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;

const ExamplesTitle = styled.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`;

// Social Proof
const ProofSection = styled.section`
  background: white;
  padding: 5rem 2rem;
`;

const ProofGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const Testimonial = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #e10073;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  font-size: 1rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProofTitle = styled.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`;

// CTA Section
const CTASection = styled.section`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  padding: 5rem 2rem;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const CTAText = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 2px solid white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }
`;

// FAQ Section
const FAQSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
`;

const FAQGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e5e7eb;
`;

const FAQQuestion = styled.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

const FAQTitle = styled.h3`
  font-size: 2rem;
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
`;

// Instagram Insights Hook
interface InstagramInsights {
  followers: number;
  posts: number;
  engagement: number;
  reach: number;
}

const useInstagramInsights = () => {
  const [insights, setInsights] = useState<InstagramInsights>({
    followers: 2500,
    posts: 450,
    engagement: 8.2,
    reach: 15000,
  });

  useEffect(() => {
    // Mock live data - in production: Meta Graph API
    const interval = setInterval(() => {
      setInsights({
        followers: 2500 + Math.floor(Math.random() * 100),
        posts: 450 + Math.floor(Math.random() * 50),
        engagement: 8.2 + Math.random() * 2,
        reach: 15000 + Math.floor(Math.random() * 5000),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return insights;
};

export default function SponsoringV2Page() {
  const insights = useInstagramInsights();

  return (
    <>
      {/* Hero */}
      <Hero>
        <HeroContent>
          <HeroTitle>Werden Sie Teil der SC-Familie</HeroTitle>
          <HeroSubtitle>
            Maximale Sichtbarkeit bei 15+ Heimspielen, 2.500+
            Instagram-Followern und einer leidenschaftlichen Community
          </HeroSubtitle>
          <HeroCTA href="#kontakt">Jetzt Kontakt aufnehmen</HeroCTA>
        </HeroContent>
      </Hero>

      {/* Core Values */}
      <ValuesSection>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon>📊</ValueIcon>
            <ValueTitle>Maximale Reichweite</ValueTitle>
            <ValueText>
              15+ Heimspiele pro Saison mit 200+ Zuschauern, 2.500+
              Instagram-Followern und 5.000+ Website-Besuchern monatlich
            </ValueText>
            <ValueStats>Live Impact</ValueStats>
          </ValueCard>

          <ValueCard>
            <ValueIcon>🏆</ValueIcon>
            <ValueTitle>Sportlicher Erfolg</ValueTitle>
            <ValueText>
              1. Damenmannschaft in Landesliga, Cheerleading-Team aktiv,
              Jugendförderung etabliert – Ihr Logo bei echten Siegen
            </ValueText>
            <ValueStats>Emotionale Bindung</ValueStats>
          </ValueCard>

          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Community Impact</ValueTitle>
            <ValueText>
              Werden Sie Teil einer starken Gemeinschaft. Ihre Unterstützung
              fördert Talente und schafft unvergessliche Momente
            </ValueText>
            <ValueStats>Gemeinsam stark</ValueStats>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      {/* Package Cards */}
      <PackagesSection>
        <PackagesGrid>
          <PackageCard>
            <PackageTitle>🏆 Premium</PackageTitle>
            <PackagePrice>15.000€</PackagePrice>
            <PackagePeriod>Pro Jahr</PackagePeriod>
            <PackageList>
              <li>Trikotbrust 1. Mannschaft</li>
              <li>Stadion-Namensrecht</li>
              <li>Premium Social Media</li>
            </PackageList>
            <PackageButton href="mailto:sponsoring@sckw.de?subject=Premium-Sponsoring">
              Jetzt anfragen
            </PackageButton>
          </PackageCard>

          <PackageCard>
            <PackageTitle>🏢 Lokal</PackageTitle>
            <PackagePrice>5.000€</PackagePrice>
            <PackagePeriod>Pro Jahr</PackagePeriod>
            <PackageList>
              <li>Bandenwerbung (5x2m)</li>
              <li>Instagram-Erwähnungen</li>
              <li>Community-Events</li>
            </PackageList>
            <PackageButton href="mailto:sponsoring@sckw.de?subject=Lokales-Sponsoring">
              Jetzt anfragen
            </PackageButton>
          </PackageCard>

          <PackageCard>
            <PackageTitle>🌟 Starter</PackageTitle>
            <PackagePrice>500€</PackagePrice>
            <PackagePeriod>5 Spiele</PackagePeriod>
            <PackageList>
              <li>Ballspende für 5 Spiele</li>
              <li>Stadiondurchsagen</li>
              <li>Social Media Posts</li>
            </PackageList>
            <PackageButton href="mailto:sponsoring@sckw.de?subject=Starter-Sponsoring">
              Jetzt anfragen
            </PackageButton>
          </PackageCard>
        </PackagesGrid>
      </PackagesSection>

      {/* Instagram Insights */}
      <InsightsSection>
        <InsightsTitle>📱 Live Instagram Insights</InsightsTitle>
        <InsightsGrid>
          <InsightCard>
            <InsightValue>{insights.followers.toLocaleString()}</InsightValue>
            <InsightLabel>Follower</InsightLabel>
          </InsightCard>
          <InsightCard>
            <InsightValue>{insights.posts.toLocaleString()}</InsightValue>
            <InsightLabel>Posts</InsightLabel>
          </InsightCard>
          <InsightCard>
            <InsightValue>{insights.engagement.toFixed(1)}%</InsightValue>
            <InsightLabel>Engagement</InsightLabel>
          </InsightCard>
          <InsightCard>
            <InsightValue>{insights.reach.toLocaleString()}</InsightValue>
            <InsightLabel>Reichweite</InsightLabel>
          </InsightCard>
        </InsightsGrid>
      </InsightsSection>

      {/* Examples Gallery */}
      <ExamplesSection>
        <ExamplesTitle>📸 So sehen Ihre Anzeigen aus</ExamplesTitle>
        <ExamplesGrid>
          {/* Ballspende */}
          <ExampleCard>
            <ExampleImage src="/ballspende.png" alt="Ballspende Beispiel" />
            <ExampleContent>
              <ExampleTitle>⚽ Ballspende</ExampleTitle>
              <ExampleText>
                Ihr Logo prominent auf Spielbällen – direkt im Einsatz bei
                Heimspielen
              </ExampleText>
              <PreviewButton
                href="/ballspende.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Beispiel öffnen
              </PreviewButton>
            </ExampleContent>
          </ExampleCard>

          {/* Stadionmagazin (Bild-Preview) */}
          <ExampleCard>
            <ExampleImage src="/pdf-preview.png" alt="Stadionmagazin Cover" />
            <ExampleContent>
              <ExampleTitle>📖 Stadionmagazin</ExampleTitle>
              <ExampleText>
                Professionelle Anzeigen in unserem Stadionheft – 100+ Exemplare
                pro Spiel
              </ExampleText>
              <PreviewButton
                href="/StadionMagazin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 PDF öffnen
              </PreviewButton>
            </ExampleContent>
          </ExampleCard>

          {/* Bandenwerbung – mit konkret gewünschtem Bild herren_1 */}
          <ExampleCard>
            <ExampleImage
              src={getHeroImage("herren/herren_1")}
              alt="Bandenwerbung Beispiel"
            />
            <ExampleContent>
              <ExampleTitle>🖼️ Bandenwerbung</ExampleTitle>
              <ExampleText>
                Sichtbare Präsenz am Spielfeldrand – bei jedem Heimspiel im
                Fokus
              </ExampleText>
            </ExampleContent>
          </ExampleCard>

          {/* Buswerbung – Flächenübersicht als Platzhalter */}
          <ExampleCard>
            <PreviewBox />
            <ExampleContent>
              <ExampleTitle>🚌 Buswerbung (Flächenübersicht)</ExampleTitle>
              <ExampleText>
                Heck, Seitentüren und hintere Seitenflächen – markante
                Werbepositionen mit hoher Sichtbarkeit
              </ExampleText>
              <PreviewButton href="#kontakt">Details anfragen</PreviewButton>
            </ExampleContent>
          </ExampleCard>
        </ExamplesGrid>
      </ExamplesSection>

      {/* Social Proof */}
      <ProofSection>
        <ProofTitle>💬 Was unsere Partner sagen</ProofTitle>
        <ProofGrid>
          <Testimonial>
            <TestimonialText>
              "Die Zusammenarbeit mit SC Konstanz-Wollmatingen hat uns neue
              Kunden gebracht. Die Community ist unglaublich engagiert!"
            </TestimonialText>
            <TestimonialAuthor>
              Graf Hardenberg - Premium Partner
            </TestimonialAuthor>
          </Testimonial>

          <Testimonial>
            <TestimonialText>
              "Lokale Präsenz bei Heimspielen zahlt sich aus. Die Fans sind
              loyal und das Team professionell."
            </TestimonialText>
            <TestimonialAuthor>
              Logan&apos;s Linde - Community Partner
            </TestimonialAuthor>
          </Testimonial>
        </ProofGrid>
      </ProofSection>

      {/* Final CTA */}
      <CTASection id="kontakt">
        <CTATitle>Jetzt Sponsor werden</CTATitle>
        <CTAText>
          Erhalten Sie in 24 Stunden ein individuelles Angebot. Gemeinsam
          schaffen wir unvergessliche Momente!
        </CTAText>
        <CTAButton href="mailto:sponsoring@sckw.de?subject=Sponsoring-Anfrage">
          📧 Kontakt aufnehmen
        </CTAButton>
      </CTASection>

      {/* FAQ */}
      <FAQSection>
        <FAQTitle>❓ Häufige Fragen</FAQTitle>
        <FAQGrid>
          <FAQItem>
            <FAQQuestion>Sind die Preise netto?</FAQQuestion>
            <FAQAnswer>
              Ja, alle Preise verstehen sich netto zzgl. MwSt.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Wie lange läuft ein Sponsoring-Vertrag?</FAQQuestion>
            <FAQAnswer>
              Standard: 1 Jahr mit automatischer Verlängerung. Individuelle
              Laufzeiten möglich.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Wie läuft die Gestaltung ab?</FAQQuestion>
            <FAQAnswer>
              Wir übernehmen die Gestaltung. Sie liefern Logo + Claim, wir
              machen den Rest!
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Was sind die nächsten Schritte?</FAQQuestion>
            <FAQAnswer>
              Kontakt → Gespräch → Angebot → Vertrag → Umsetzung. Alles in 1-2
              Wochen möglich.
            </FAQAnswer>
          </FAQItem>
        </FAQGrid>
      </FAQSection>
    </>
  );
}
