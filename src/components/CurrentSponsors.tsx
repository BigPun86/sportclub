import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const MainSponsorSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const MainSponsorCard = styled.a`
  background: white;
  border-radius: 20px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.12);
  border: 3px solid #e10073;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 280px;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.2);
  }
`;

const MainSponsorBadge = styled.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const MainSponsorLogo = styled.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`;

const MainSponsorName = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`;

const PartnerCard = styled.a`
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 100px;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 24px rgba(225, 0, 115, 0.12);
  }
`;

const PartnerLogo = styled.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const PartnerName = styled.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`;

// Aktuelle Sponsoren - zentral gepflegt
const currentSponsors = {
  hauptsponsor: {
    name: "Fuchsbau Immobilien",
    logo: "/sponsors/fuchsbau-logo.png",
    website: "https://immofuchsbau.com/",
  },
  partners: [
    {
      name: "Tasty Delivery",
      logo: "/sponsors/tasty.png",
      website: "https://tasty-delivery.de",
    },
    {
      name: "Stadtwerke Konstanz",
      logo: "/sponsors/Stadtwerke.avif",
      website: "https://www.stadtwerke-konstanz.de/",
    },
    {
      name: "Graf Hardenberg",
      logo: "/sponsors/grafhardenberg.png",
      website: "https://www.grafhardenberg.de/",
    },
    {
      name: "Kountz",
      logo: "/sponsors/KOUNTZ.avif",
      website: "#",
    },
    {
      name: "Rothaus",
      logo: "/sponsors/Rothaus.avif",
      website: "https://www.rothaus.de/",
    },
    {
      name: "J&C",
      logo: "/sponsors/JC.avif",
      website: "#",
    },
    {
      name: "Danlin Media",
      logo: "/sponsors/DANLIN.avif",
      website: "#",
    },
    {
      name: "Logan's Linde",
      logo: "/sponsors/logans.png",
      website: "https://logans-wollmatingen.de/",
    },
  ],
};

export default function CurrentSponsors() {
  const { hauptsponsor, partners } = currentSponsors;

  return (
    <Container>
      {/* Hauptsponsor prominent */}
      <MainSponsorSection>
        <MainSponsorCard
          href={hauptsponsor.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainSponsorBadge>Hauptsponsor</MainSponsorBadge>
          <MainSponsorLogo src={hauptsponsor.logo} alt={hauptsponsor.name} />
          <MainSponsorName>{hauptsponsor.name}</MainSponsorName>
        </MainSponsorCard>
      </MainSponsorSection>

      {/* Partner Grid */}
      <PartnersGrid>
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PartnerLogo src={partner.logo} alt={partner.name} />
            <PartnerName>{partner.name}</PartnerName>
          </PartnerCard>
        ))}
      </PartnersGrid>
    </Container>
  );
}
