import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";
import { getSponsorImages } from "../utils/imageLoader";

// Get all sponsor images
const sponsorImages = getSponsorImages();

// Typen für Sponsor
interface Sponsor {
  name: string;
  image?: string;
  website?: string;
  since?: string;
  until?: string;
}
interface Paket {
  title: string;
  price: string;
  status: string;
  benefits: string[];
  maxSponsors?: number;
  sponsors?: Sponsor[];
  color?: string;
}

// Hilfsfunktion für Logo
const getSponsorLogo = (imageName: string): string | undefined => {
  return sponsorImages[imageName.toLowerCase()] || undefined;
};

// Alle Sponsoren aus Paketen extrahieren
function getAllSponsors() {
  const result: { name: string; image?: string; website?: string }[] = [];
  (sponsoringPakete as Paket[]).forEach((paket) => {
    // Alle Sponsoren aus dem Array
    if (Array.isArray(paket.sponsors)) {
      paket.sponsors.forEach((s) => {
        result.push({ name: s.name, image: s.image, website: s.website });
      });
    }
  });
  // Duplikate entfernen (nach Name)
  return result.filter(
    (s, i, arr) => arr.findIndex((x) => x.name === s.name) === i
  );
}

const sponsors = getAllSponsors();

export default function SupporterBanner() {
  return (
    <BannerSection>
      <BannerHeadline>Unsere Partner</BannerHeadline>
      <LogoGrid>
        {sponsors.map((s, i) => {
          const logoContent =
            s.image && getSponsorLogo(s.image) ? (
              <LogoImg src={getSponsorLogo(s.image)} alt={s.name} />
            ) : (
              <LogoFallback>{s.name}</LogoFallback>
            );

          return s.website ? (
            <LogoLink
              href={s.website}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              title={`Besuche ${s.name}`}
            >
              {logoContent}
            </LogoLink>
          ) : (
            <LogoWrapper key={i}>{logoContent}</LogoWrapper>
          );
        })}
      </LogoGrid>
    </BannerSection>
  );
}

// Styled Components
const BannerSection = styled.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`;
const BannerHeadline = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`;
const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`;
const LogoLink = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`;
const LogoWrapper = styled.div`
  display: block;
`;
const LogoImg = styled.img`
  max-width: 120px;
  max-height: 60px;
  object-fit: contain;
  //filter: grayscale(1);
  opacity: 0.8;
  transition: filter 0.2s, opacity 0.2s;
  background: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  box-shadow: 0 1px 6px rgba(225, 0, 115, 0.04);
  ${LogoLink}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`;
const LogoFallback = styled.div`
  max-width: 120px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7fa;
  color: #e10073;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  box-shadow: 0 1px 6px rgba(225, 0, 115, 0.04);
  transition: background 0.2s, color 0.2s;
  ${LogoLink}:hover & {
    background: #e10073;
    color: #fff;
  }
`;
