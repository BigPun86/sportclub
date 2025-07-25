import styled from "styled-components";

const UsageSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const UsageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const UsageCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const DepartmentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
`;

const DepartmentIcon = styled.span`
  font-size: 2.5rem;
  margin-right: 1rem;
`;

const DepartmentTitle = styled.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`;

const UsageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UsageItem = styled.li`
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: #444;
  display: flex;
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
  }
`;

const UsageIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`;

const UsageText = styled.span`
  flex: 1;
`;

const CostInfo = styled.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`;

const usageData = [
  {
    department: "Herren",
    icon: "⚽",
    items: [
      { icon: "👕", text: "Trikots (Spiel & Training)" },
      { icon: "👨‍🏫", text: "Trainer-Gehälter" },
      { icon: "⚽", text: "Equipment & Trainingsbälle" },
      { icon: "🚌", text: "Auswärtsfahrten" },
      { icon: "🏟️", text: "Spielbetrieb & Platzkosten" },
    ],
    costInfo: "Fokus: Spielbetrieb & Trainerkosten",
  },
  {
    department: "Damen",
    icon: "⚽",
    items: [
      { icon: "👕", text: "Trikots (Spiel & Training)" },
      { icon: "👨‍🏫", text: "Trainer-Gehälter" },
      { icon: "🥅", text: "Torwart-Ausrüstung" },
      { icon: "🚌", text: "Auswärtsfahrten" },
      { icon: "🏟️", text: "Spielbetrieb & Platzkosten" },
    ],
    costInfo: "Fokus: Spielbetrieb & Equipment",
  },
  {
    department: "Renovierung Fürstenbergsportplatz",
    icon: "🏗️",
    items: [
      { icon: "🏟️", text: "Platz-Sanierung & Drainage" },
      { icon: "🚿", text: "Umkleiden & Sanitäranlagen" },
      { icon: "💡", text: "Flutlichtanlage modernisieren" },
      { icon: "🪑", text: "Tribüne & Zuschauerbereich" },
      { icon: "🚧", text: "Sicherheitsmaßnahmen & Zäune" },
    ],
    costInfo: "Großprojekt: Modernisierung der Sportanlage",
  },
  {
    department: "Cheerleading",
    icon: "💃",
    items: [
      { icon: "👗", text: "Tanz-Outfits & Kostüme" },
      { icon: "👨‍🏫", text: "Trainer-Gehälter" },
      { icon: "🏆", text: "Wettkämpfe & Turniere" },
      { icon: "🎵", text: "Musik & Choreografie" },
      { icon: "🚌", text: "Auswärtsfahrten" },
    ],
    costInfo: "Fokus: Wettkämpfe & Ausrüstung",
  },
  {
    department: "Allgemein",
    icon: "🏟️",
    items: [
      { icon: "🏟️", text: "Platzpflege & Infrastruktur" },
      { icon: "💡", text: "Flutlicht & Stromkosten" },
      { icon: "🚿", text: "Sanitäranlagen & Umkleiden" },
      { icon: "🛠️", text: "Wartung & Reparaturen" },
      { icon: "📢", text: "Kommunikation & Marketing" },
    ],
    costInfo: "Grundlage für alle Abteilungen",
  },
  {
    department: "Fördergruppe",
    icon: "🎯",
    items: [
      { icon: "👕", text: "Zuschuss zu Trikots (Training)" },
      { icon: "🥅", text: "Minitore & Equipment" },
      { icon: "🏟️", text: "Fangnetze & Infrastruktur" },
      { icon: "⚽", text: "Trainingsbälle & Zubehör" },
      { icon: "🛠️", text: "Wartung & Reparaturen" },
    ],
    costInfo: "Unterstützung für alle Abteilungen",
  },
];

export default function SponsoringUsage() {
  return (
    <UsageSection>
      <Container>
        <SectionTitle>Wofür wird Ihr Sponsoring verwendet?</SectionTitle>
        <SectionSubtitle>
          Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld
          direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt.
        </SectionSubtitle>

        <UsageGrid>
          {usageData.map((dept, index) => (
            <UsageCard key={index}>
              <DepartmentHeader>
                <DepartmentIcon>{dept.icon}</DepartmentIcon>
                <DepartmentTitle>{dept.department}</DepartmentTitle>
              </DepartmentHeader>

              <UsageList>
                {dept.items.map((item, idx) => (
                  <UsageItem key={idx}>
                    <UsageIcon>{item.icon}</UsageIcon>
                    <UsageText>{item.text}</UsageText>
                  </UsageItem>
                ))}
              </UsageList>

              <CostInfo>{dept.costInfo}</CostInfo>
            </UsageCard>
          ))}
        </UsageGrid>
      </Container>
    </UsageSection>
  );
}
