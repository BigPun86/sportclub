import styled from "styled-components";
import { brand } from "../theme";

const Layout = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 1.25rem;
  }
`;

const MainSponsorCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  background: #fff;
  border: 1px solid ${brand.line};
  border-top: 4px solid ${brand.red};
  border-radius: 14px;
  padding: 1.5rem;
  text-decoration: none;
  min-height: 220px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${brand.blue};
    border-top-color: ${brand.red};
  }
`;

const MainSponsorLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${brand.red};
`;

const MainSponsorLogo = styled.img`
  align-self: center;
  width: 100%;
  max-width: 220px;
  max-height: 120px;
  object-fit: contain;
`;

const MainSponsorName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${brand.ink};
`;

const PartnersGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`;

const PartnerCard = styled.a`
  height: 100%;
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${brand.blue};
  }
`;

const PartnerLogo = styled.img`
  max-width: 100%;
  max-height: 48px;
  object-fit: contain;
`;

// Aktuelle Sponsoren - zentral gepflegt (Reihenfolge wie auf sckw.de)
const currentSponsors = {
  hauptsponsor: {
    name: "Fuchsbau Immobilien",
    logo: "/sponsors/fuchsbau-logo.png",
    website: "https://immofuchsbau.com/",
  },
  partners: [
    {
      name: "Graf Hardenberg",
      logo: "/sponsors/grafhardenberg.png",
      website: "https://www.grafhardenberg.de/",
    },
    {
      name: "Stadtwerke Konstanz",
      logo: "/sponsors/Stadtwerke.avif",
      website: "https://www.stadtwerke-konstanz.de/",
    },
    {
      name: "Sparkasse Bodensee",
      logo: "/sponsors/sparkasse-bodensee.png",
      website: "https://www.sparkasse-bodensee.de/",
    },
    {
      name: "MUMM Magazin",
      logo: "/sponsors/mumm-magazin.png",
      website: "https://www.nil-media.de/mumm-magazin/",
    },
    {
      name: "FUCHS",
      logo: "/sponsors/fuchs.png",
      website: "https://www.fuchs-haustechnik.de/",
    },
    {
      name: "Logan's Linde",
      logo: "/sponsors/logans-linde.png",
      website: "https://logans-wollmatingen.de/",
    },
    {
      name: "KARAKI Services",
      logo: "/sponsors/karaki-services.png",
      website: "https://karaki-services.de/",
    },
    {
      name: "Danlin Media",
      logo: "/sponsors/DANLIN.avif",
      website: "https://www.danlin-media.de/",
    },
    {
      name: "grenz|gänger tools",
      logo: "/sponsors/grenzgaenger-tools.png",
      website: "https://grenzgaenger-tools.de",
    },
  ],
};

export default function CurrentSponsors() {
  const { hauptsponsor, partners } = currentSponsors;

  return (
    <Layout>
      <MainSponsorCard
        href={hauptsponsor.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MainSponsorLabel>Hauptsponsor</MainSponsorLabel>
        <MainSponsorLogo src={hauptsponsor.logo} alt={hauptsponsor.name} />
        <MainSponsorName>{hauptsponsor.name}</MainSponsorName>
      </MainSponsorCard>

      <PartnersGrid aria-label="Partner">
        {partners.map((partner) => (
          <li key={partner.name}>
            <PartnerCard
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PartnerLogo src={partner.logo} alt={partner.name} />
            </PartnerCard>
          </li>
        ))}
      </PartnersGrid>
    </Layout>
  );
}
