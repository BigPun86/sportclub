import styled from "styled-components";
import Footer from "../components/Footer";
import jobsData from "../data/jobsData.json";

const Hero = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
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

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ExampleJobsSection = styled.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;

const ExampleHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ExampleTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const ExampleSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const JobCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(30, 58, 138, 0.1);
  }
`;

const ExampleBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #f59e0b;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  background: #f8fafc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`;

const JobTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const JobDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const JobTag = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const JobDescription = styled.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ApplyButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #2563eb;
  }
`;

const PricingSection = styled.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`;

const PricingTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`;

const PricingSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const PricingCard = styled.div`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(30, 58, 138, 0.15);
  }

  &.popular {
    border-color: #3b82f6;
    transform: scale(1.02);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
`;

const PricingPackageName = styled.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`;

const PricingPrice = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`;

const PricingPeriod = styled.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`;

const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #475569;

  &:before {
    content: "✓";
    color: #10b981;
    font-weight: 800;
    font-size: 1.1rem;
  }
`;

const PricingButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #2563eb;
  }

  &.secondary {
    background: #f1f5f9;
    color: #475569;

    &:hover {
      background: #e2e8f0;
    }
  }
`;

const FlatPackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const AdditionalOptionsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`;

const OptionsTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const OptionCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const OptionName = styled.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`;

const OptionPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`;

const OptionDescription = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
`;

const BenefitsSection = styled.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const BenefitIcon = styled.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

const BenefitText = styled.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;

export default function JobsPage() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>SCKW Jobbörse</HeroTitle>
          <HeroSubtitle>
            Karrierechancen bei unseren Sponsoren und Partnern
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Willkommen bei der SCKW Jobbörse</SectionTitle>
          <IntroText>
            Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren
            und Partnern. Als Vermittler zwischen lokalen Unternehmen und
            qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für
            alle Beteiligten.
          </IntroText>
        </Section>

        <ExampleJobsSection>
          <ExampleHeader>
            <ExampleTitle>So könnte es aussehen</ExampleTitle>
            <ExampleSubtitle>
              Beispiel-Stellenausschreibungen unserer Partner
            </ExampleSubtitle>
          </ExampleHeader>

          <JobsGrid>
            {jobsData.map((job) => (
              <JobCard key={job.id}>
                {job.isExample && <ExampleBadge>MUSTER</ExampleBadge>}
                <CompanyLogo>
                  <LogoImage
                    src={`/sponsors/${job.logo}`}
                    alt={`${job.company} Logo`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.style.background =
                        "linear-gradient(135deg, #3b82f6, #1e3a8a)";
                      e.currentTarget.parentElement!.innerHTML = job.company
                        .substring(0, 2)
                        .toUpperCase();
                    }}
                  />
                </CompanyLogo>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobDetails>
                  {job.tags.map((tag, index) => (
                    <JobTag key={index}>{tag}</JobTag>
                  ))}
                </JobDetails>
                <JobDescription>{job.description}</JobDescription>
                <ApplyButton>Mehr erfahren</ApplyButton>
              </JobCard>
            ))}
          </JobsGrid>
        </ExampleJobsSection>

        <PricingSection>
          <PricingTitle>Preise für Stellenausschreibungen</PricingTitle>
          <PricingSubtitle>
            Professionelle Jobbörse mit lokaler Reichweite und authentischer
            Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher
            MwSt.
          </PricingSubtitle>

          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1e3a8a",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            💼 Einzelanzeigen
          </h4>

          <PricingGrid>
            <PricingCard>
              <PricingPackageName>Basis</PricingPackageName>
              <PricingPrice>149 €</PricingPrice>
              <PricingPeriod>netto / Anzeige</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>
                  30 Tage auf Website (Jobbereich)
                </PricingFeature>
                <PricingFeature>Firmenlogo und Link</PricingFeature>
                <PricingFeature>
                  Detaillierte Stellenbeschreibung
                </PricingFeature>
                <PricingFeature>Bewerbermanagement</PricingFeature>
              </PricingFeatures>
              <PricingButton className="secondary">Basis wählen</PricingButton>
            </PricingCard>

            <PricingCard className="popular">
              <PopularBadge>BELIEBT</PopularBadge>
              <PricingPackageName>Standard</PricingPackageName>
              <PricingPrice>229 €</PricingPrice>
              <PricingPeriod>netto / Anzeige</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>Alle Basis-Features</PricingFeature>
                <PricingFeature>1 Social Media Post</PricingFeature>
                <PricingFeature>Instagram + Facebook Reichweite</PricingFeature>
                <PricingFeature>Newsletter-Erwähnung</PricingFeature>
              </PricingFeatures>
              <PricingButton>Standard wählen</PricingButton>
            </PricingCard>

            <PricingCard>
              <PricingPackageName>Boosted</PricingPackageName>
              <PricingPrice>349 €</PricingPrice>
              <PricingPeriod>netto / Anzeige</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>Alle Standard-Features</PricingFeature>
                <PricingFeature>Instagram Story</PricingFeature>
                <PricingFeature>Stadionmagazin-Erwähnung</PricingFeature>
                <PricingFeature>Prioritäre Platzierung</PricingFeature>
              </PricingFeatures>
              <PricingButton className="secondary">
                Boosted wählen
              </PricingButton>
            </PricingCard>
          </PricingGrid>

          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1e3a8a",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            🧾 Jahres-Flatrates
          </h4>

          <FlatPackagesGrid>
            <PricingCard>
              <PricingPackageName>Job Flat SMALL</PricingPackageName>
              <PricingPrice>799 €</PricingPrice>
              <PricingPeriod>netto / Jahr</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>Bis zu 6 Anzeigen im Jahr</PricingFeature>
                <PricingFeature>6 Social Media Posts</PricingFeature>
                <PricingFeature>Website-Präsenz</PricingFeature>
                <PricingFeature>Newsletter-Integration</PricingFeature>
              </PricingFeatures>
              <PricingButton className="secondary">Small Flat</PricingButton>
            </PricingCard>

            <PricingCard className="popular">
              <PopularBadge>EMPFOHLEN</PopularBadge>
              <PricingPackageName>Job Flat MEDIUM</PricingPackageName>
              <PricingPrice>1.199 €</PricingPrice>
              <PricingPeriod>netto / Jahr</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>Bis zu 12 Anzeigen im Jahr</PricingFeature>
                <PricingFeature>Stadionmagazin-Präsenz</PricingFeature>
                <PricingFeature>Social Media Posts</PricingFeature>
                <PricingFeature>Stories & Highlights</PricingFeature>
              </PricingFeatures>
              <PricingButton>Medium Flat</PricingButton>
            </PricingCard>

            <PricingCard>
              <PricingPackageName>Job Flat PARTNER</PricingPackageName>
              <PricingPrice>1.499 €</PricingPrice>
              <PricingPeriod>netto / Jahr</PricingPeriod>
              <PricingFeatures>
                <PricingFeature>Unbegrenzte Anzeigen</PricingFeature>
                <PricingFeature>Erwähnung bei Heimspielen</PricingFeature>
                <PricingFeature>"Top Partner" Sichtbarkeit</PricingFeature>
                <PricingFeature>Prioritärer Support</PricingFeature>
              </PricingFeatures>
              <PricingButton className="secondary">Partner Flat</PricingButton>
            </PricingCard>
          </FlatPackagesGrid>

          <AdditionalOptionsSection>
            <OptionsTitle>➕ Zusatzoptionen</OptionsTitle>
            <OptionsGrid>
              <OptionCard>
                <OptionName>Social Story</OptionName>
                <OptionPrice>39 €</OptionPrice>
                <OptionDescription>
                  Facebook & Instagram Story mit 24h Laufzeit
                </OptionDescription>
              </OptionCard>
              <OptionCard>
                <OptionName>Designservice</OptionName>
                <OptionPrice>59 €</OptionPrice>
                <OptionDescription>
                  Wir gestalten Ihre Anzeige professionell (1 Revision
                  inklusive)
                </OptionDescription>
              </OptionCard>
              <OptionCard>
                <OptionName>Stadionmagazin</OptionName>
                <OptionPrice>99 €</OptionPrice>
                <OptionDescription>
                  1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder
                  Boosted)
                </OptionDescription>
              </OptionCard>
            </OptionsGrid>
          </AdditionalOptionsSection>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <ContactButton href="mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße">
              📧 Jetzt Angebot anfordern
            </ContactButton>
          </div>
        </PricingSection>

        <BenefitsSection>
          <BenefitsTitle>🎯 Warum SCKW Jobbörse?</BenefitsTitle>
          <BenefitsList>
            <BenefitItem>
              <BenefitIcon>🏠</BenefitIcon>
              <BenefitText>
                <strong>Lokal & authentisch:</strong> Echte Sichtbarkeit bei
                Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz
              </BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>👥</BenefitIcon>
              <BenefitText>
                <strong>Community-Nähe:</strong> Zugang zu potenziellen Azubis,
                Werkstudenten und erfahrenen Fachkräften
              </BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>💰</BenefitIcon>
              <BenefitText>
                <strong>Günstiger & flexibler:</strong> Faire Preise im
                Vergleich zu großen Medienhäusern bei gezielter Reichweite
              </BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>📈</BenefitIcon>
              <BenefitText>
                <strong>Über 4.000 Follower:</strong> Ihre
                Stellenausschreibungen erreichen eine engagierte Community
              </BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>⚡</BenefitIcon>
              <BenefitText>
                <strong>Schnelle Umsetzung:</strong> Ihre Stellenausschreibung
                ist innerhalb von 24h online und wird beworben
              </BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>🤲</BenefitIcon>
              <BenefitText>
                <strong>Persönlicher Service:</strong> Individuelle Betreuung
                und Beratung durch unser erfahrenes Team
              </BenefitText>
            </BenefitItem>
          </BenefitsList>
        </BenefitsSection>
      </Content>

      <Footer />
    </>
  );
}
