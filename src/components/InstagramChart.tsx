import styled from "styled-components";

const ChartContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }
`;

const ChartTitle = styled.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ChartSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`;

const BarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const BarRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;

  span:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span:last-child {
    color: #e10073;
    font-weight: 800;
    font-size: 1.1rem;
  }
`;

const BarTrack = styled.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 32px;
  overflow: hidden;
  position: relative;
`;

const BarFill = styled.div<{ $percent: number; $color: string }>`
  background: ${({ $color }) => $color};
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  border-radius: 9999px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Legend = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`;

const LegendColor = styled.div<{ $color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const HighlightBox = styled.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const chartData = [
  {
    label: "Winterpause (Nov-Jan)",
    value: 285000,
    color: "#9ca3af",
    icon: "❄️",
  },
  {
    label: "Saison (Jun-Aug)",
    value: 684000,
    color: "#e10073",
    icon: "⚽",
  },
  {
    label: "Prognose Saison (konservativ)",
    value: 650000,
    color: "#ff6b9d",
    icon: "📈",
  },
];

const maxValue = Math.max(...chartData.map((d) => d.value));

export default function InstagramChart() {
  return (
    <ChartContainer>
      <ChartTitle>📊 Instagram-Reichweite: Saison vs. Winterpause</ChartTitle>
      <ChartSubtitle>
        Echte Zahlen aus unserem Account - so entwickelt sich die Sichtbarkeit über das Jahr
      </ChartSubtitle>
      <BarsContainer>
        {chartData.map((bar) => (
          <BarRow key={bar.label}>
            <BarLabel>
              <span>
                {bar.icon} {bar.label}
              </span>
              <span>{(bar.value / 1000).toFixed(0)}k</span>
            </BarLabel>
            <BarTrack>
              <BarFill
                $percent={(bar.value / maxValue) * 100}
                $color={bar.color}
              />
            </BarTrack>
          </BarRow>
        ))}
      </BarsContainer>
      <Legend>
        <LegendItem>
          <LegendColor $color="#9ca3af" />
          <span>Aktuell (Winterpause)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#e10073" />
          <span>Letzte Saison (Landesliga)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#ff6b9d" />
          <span>Prognose kommende Saison</span>
        </LegendItem>
      </Legend>
      <HighlightBox>
        <strong>Wichtig:</strong> Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit.
      </HighlightBox>
    </ChartContainer>
  );
}
