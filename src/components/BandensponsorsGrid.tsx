import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

const SponsorCard = styled.a`
  background: white;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 120px;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 24px rgba(225, 0, 115, 0.15);
  }
`;

const SponsorLogo = styled.img`
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
`;

const SponsorName = styled.div`
  font-size: 0.85rem;
  color: #333;
  font-weight: 600;
  line-height: 1.3;
`;

const PlaceholderCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px dashed #e0e0e0;
  min-height: 120px;
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

export default function BandensponsorsGrid() {
  // Hole alle Bandenwerbung-Sponsoren
  const bandenPaket = sponsoringPakete.find((pkg) =>
    pkg.title.includes("Bandenwerbung")
  );
  const bandenSponsors = bandenPaket?.sponsors || [];
  const maxSponsors = bandenPaket?.maxSponsors || 30;
  const availableSlots = maxSponsors - bandenSponsors.length;

  if (bandenSponsors.length === 0) {
    return (
      <EmptyState>
        Aktuell noch keine Bandenwerbung-Partner vorhanden. Seien Sie einer der
        Ersten und sichern Sie sich Ihre Werbefläche!
      </EmptyState>
    );
  }

  return (
    <GridContainer>
      {bandenSponsors.map((sponsor, index) => (
        <SponsorCard
          key={index}
          href={sponsor.website || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sponsor.image && (
            <SponsorLogo
              src={`/sponsors/${sponsor.image}`}
              alt={sponsor.name}
            />
          )}
          <SponsorName>{sponsor.name}</SponsorName>
        </SponsorCard>
      ))}

      {/* Zeige verfügbare Plätze als Platzhalter */}
      {availableSlots > 0 &&
        Array.from({ length: Math.min(availableSlots, 6) }).map((_, i) => (
          <PlaceholderCard key={`placeholder-${i}`}>
            Noch verfügbar
          </PlaceholderCard>
        ))}
    </GridContainer>
  );
}
