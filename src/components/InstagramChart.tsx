import styled from "styled-components";
import { getHeroImage } from "../utils/imageLoader";

const ChartContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
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
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const BarRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px; /* Kompakter für Mobile */
  gap: 0.75rem;
  align-items: center;
  min-width: 0;

  @media (min-width: 768px) {
    grid-template-columns: 140px 1fr 100px;
    gap: 1rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 80px 1fr 50px; /* Extrem kompakt für iPhone SE */
    font-size: 0.8rem;
  }
`;

const BarImage = styled.img`
  width: 100%;
  height: 60px; /* Kleiner auf Mobile */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: 140px;
    height: 90px;
    border-radius: 12px;
  }
`;

const BarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

const BarLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BarTrack = styled.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`;

const BarFill = styled.div<{ $percent: number; $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  border-radius: 9999px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    border-radius: 9999px 9999px 0 0;
  }
`;

const BarValue = styled.div`
  font-size: 1.3rem;
  font-weight: 900;
  color: #e10073;
  text-align: right;
  white-space: nowrap;
  min-width: 0;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
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
    label: "Winterpause (Nov–Jan)",
    value: 285000,
    gradient: "linear-gradient(135deg, #9ca3af, #6b7280)",
    icon: "❄️",
    image: getHeroImage("herren/herren_8"),
  },
  {
    label: "Saison (Jun–Aug)",
    value: 684000,
    gradient: "linear-gradient(135deg, #e10073, #c70066)",
    icon: "⚽",
    image: getHeroImage("herren/herren_6"),
  },
  {
    label: "Prognose Saison (konservativ)",
    value: 650000,
    gradient: "linear-gradient(135deg, #ff6b9d, #e10073)",
    icon: "📈",
    image: getHeroImage("herren/herren_16"),
  },
];

const maxValue = Math.max(...chartData.map((d) => d.value));

export default function InstagramChart() {
  return (
    <ChartContainer>
      <ChartTitle>📊 Instagram-Reichweite: Saison vs. Winterpause</ChartTitle>
      <ChartSubtitle>
        Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr
      </ChartSubtitle>
      <BarsContainer>
        {chartData.map((bar) => (
          <BarRow key={bar.label}>
            <BarImage src={bar.image} alt={bar.label} />
            <BarContent>
              <BarLabel>
                {bar.icon} {bar.label}
              </BarLabel>
              <BarTrack>
                <BarFill
                  $percent={(bar.value / maxValue) * 100}
                  $gradient={bar.gradient}
                />
              </BarTrack>
            </BarContent>
            <BarValue>{(bar.value / 1000).toFixed(0)}k</BarValue>
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
