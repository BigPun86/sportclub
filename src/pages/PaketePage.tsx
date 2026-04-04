import { useEffect, useRef, useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import sponsoringPakete from "../data/sponsoringPakete.json";
import {
  busFlaechenPremium,
  busFlaechenStandard,
  busZusatzoptionen,
  busNote,
  kontakt,
} from "../data/sponsoringData";
import SponsoringGrid from "../components/SponsoringGrid";
import PackageComparison from "../components/PackageComparison";
import PraemienTable from "../components/PraemienTable";
import SpielerpatenschaftenTable from "../components/SpielerpatenschaftenTable";
import Footer from "../components/Footer";

const SECTIONS = [
  { id: "premium", label: "Premium" },
  { id: "vergleich", label: "Vergleich" },
  { id: "lokal", label: "Lokal" },
  { id: "starter", label: "Starter" },
  { id: "praemien", label: "Prämien" },
  { id: "bus", label: "Buswerbung" },
];

// -- Page Header --

const PageHeader = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 3rem 1rem 1.5rem;
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
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

// -- Tab Navigation --

const TabBar = styled.nav<{ $stuck: boolean }>`
  position: sticky;
  top: 64px;
  z-index: 80;
  background: white;
  border-bottom: 1px solid #eee;
  transition: box-shadow 0.2s ease;

  ${({ $stuck }) =>
    $stuck &&
    css`
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    `}
`;

const TabBarInner = styled.div`
  display: flex;
  gap: 0;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabLink = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0.9rem 1.25rem;
  font-size: 0.85rem;
  font-weight: ${({ $active }) => ($active ? 800 : 600)};
  color: ${({ $active }) => ($active ? "#e10073" : "#666")};
  border-bottom: 3px solid ${({ $active }) => ($active ? "#e10073" : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #e10073;
    background: rgba(225, 0, 115, 0.04);
  }
`;

// -- Layout --

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
  overflow-x: hidden;
  scroll-margin-top: 130px;

  @media (min-width: 768px) {
    padding: 4rem 0;
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
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  color: #666;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.6;
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

const PackageGroup = styled.div`
  margin-top: 2.5rem;
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

const CTASection = styled.section`
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 100%);
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

// -- Data --

const premiumPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "premium"
);
const localPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "lokal"
);
const starterPackages = sponsoringPakete.filter(
  (pkg) => (pkg as { tier?: string }).tier === "starter"
);

export default function PaketePage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [tabStuck, setTabStuck] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const handleScroll = useCallback(() => {
    setTabStuck(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageHeader>
        <BackLink to="/sponsoring">← Zurück zur Übersicht</BackLink>
        <PageTitle>Sponsoring-Pakete im Detail</PageTitle>
        <PageSubtitle>
          Alle Leistungen auf einen Blick – von Premium-Partnerschaften bis
          zum Spieltag-Einstieg. Alle Preise individuell verhandelbar.
        </PageSubtitle>
      </PageHeader>

      {/* Tab Navigation */}
      <TabBar $stuck={tabStuck}>
        <TabBarInner>
          {SECTIONS.map((s) => (
            <TabLink
              key={s.id}
              $active={activeSection === s.id}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </TabLink>
          ))}
        </TabBarInner>
      </TabBar>

      {/* Premium */}
      <Section id="premium">
        <Container>
          <SectionHeader>
            <SectionTitle>Premium-Partnerschaften</SectionTitle>
            <SectionSubtitle>
              Maximale Sichtbarkeit und exklusive Platzierungen für Ihr Unternehmen.
            </SectionSubtitle>
          </SectionHeader>
          <SponsoringGrid packages={premiumPackages} />
        </Container>
      </Section>

      {/* Vergleich */}
      <SectionAlt id="vergleich">
        <Container>
          <SectionHeader>
            <SectionTitle>Pakete im Vergleich</SectionTitle>
            <SectionSubtitle>
              Alle Leistungen der verschiedenen Pakete auf einen Blick vergleichen.
            </SectionSubtitle>
          </SectionHeader>
          <PackageComparison />
        </Container>
      </SectionAlt>

      {/* Lokal */}
      <Section id="lokal">
        <Container>
          <SectionHeader>
            <SectionTitle>Lokale Werbemöglichkeiten</SectionTitle>
            <SectionSubtitle>
              Starke Präsenz bei Heimspielen und regelmäßige Online-Sichtbarkeit.
            </SectionSubtitle>
          </SectionHeader>
          <SponsoringGrid packages={localPackages} />
          <Note>
            Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder
            Story-Erwähnung). Details gerne im Erstgespräch.
          </Note>
        </Container>
      </Section>

      {/* Starter */}
      <SectionAlt id="starter">
        <Container>
          <SectionHeader>
            <SectionTitle>Starter & Spieltag</SectionTitle>
            <SectionSubtitle>
              Der ideale Einstieg ins Sponsoring mit direkter Spieltagspräsenz.
            </SectionSubtitle>
          </SectionHeader>
          <SponsoringGrid packages={starterPackages} />
        </Container>
      </SectionAlt>

      {/* Prämien & Patenschaften */}
      <Section id="praemien">
        <Container>
          <SectionHeader>
            <SectionTitle>Erfolgsbasierte Modelle</SectionTitle>
            <SectionSubtitle>
              Prämien und Spielerpatenschaften – Sie zahlen bei sportlichem Erfolg.
            </SectionSubtitle>
          </SectionHeader>
          <PraemienTable />
          <SpielerpatenschaftenTable />
        </Container>
      </Section>

      {/* Buswerbung */}
      <SectionAlt id="bus">
        <Container>
          <SectionHeader>
            <SectionTitle>Buswerbung im Detail</SectionTitle>
            <SectionSubtitle>
              Der Vereinsbus ist für alle Mannschaften im Einsatz – Herren, Damen,
              Jugend – und an fast jedem Wochenende unterwegs.
            </SectionSubtitle>
          </SectionHeader>

          <BusCard style={{ maxWidth: 900, margin: "0 auto 2rem" }}>
            <img
              src="/vereinsbus.png"
              alt="Vereinsbus SC Konstanz-Wollmatingen"
              style={{ width: "100%", borderRadius: 12, marginBottom: "1.5rem", display: "block" }}
            />

            <PackageGroup>
              <GroupTitle>Verfügbare Werbeflächen</GroupTitle>
              <BusTableWrapper>
                <BusTable>
                  <thead>
                    <tr><th>Fläche</th><th>Größe (ca.)</th><th>Preis/Jahr</th></tr>
                  </thead>
                  <tbody>
                    {[...busFlaechenPremium, ...busFlaechenStandard].map((f) => (
                      <tr key={f.position}>
                        <td>{f.position}</td>
                        <td>{f.groesse}</td>
                        <td><strong>{f.preis}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </BusTable>
              </BusTableWrapper>
            </PackageGroup>

            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #f0f0f0" }}>
              <BusCardTitle style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                Zusatzoptionen
              </BusCardTitle>
              <BusOptionsList>
                {busZusatzoptionen.map((opt, i) => <li key={i}>{opt}</li>)}
              </BusOptionsList>
            </div>
          </BusCard>
          <Note>{busNote}</Note>
        </Container>
      </SectionAlt>

      {/* CTA */}
      <CTASection>
        <Container>
          <SectionTitle>Interesse geweckt?</SectionTitle>
          <SectionSubtitle>
            Alle Pakete sind individuell anpassbar. Kontaktieren Sie uns für ein
            unverbindliches Erstgespräch.
          </SectionSubtitle>
          <CTAButton href={`mailto:${kontakt.email}?subject=${encodeURIComponent("Interesse an Sponsoring-Paket")}`}>
            Jetzt anfragen
          </CTAButton>
        </Container>
      </CTASection>

      <Footer />
    </>
  );
}
