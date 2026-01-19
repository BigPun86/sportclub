import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";

export type SponsoringTableProps = {
  packages: typeof sponsoringPakete;
};

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

/* Desktop-Tabelle */
const TableContainer = styled.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th<{ isVergeben?: boolean }>`
  background: ${(props) => (props.isVergeben ? "#f8f9fa" : "#e10073")};
  color: ${(props) => (props.isVergeben ? "#666" : "#fff")};
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #dee2e6;

  &:first-child {
    background: #f8f9fa;
    color: #222;
    font-weight: 800;
    text-align: left;
    min-width: 200px;
  }
`;

const Td = styled.td<{ isVergeben?: boolean; isHighlight?: boolean }>`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${(props) => (props.isVergeben ? "#f8f9fa" : "#fff")};
  color: ${(props) => (props.isVergeben ? "#999" : "#222")};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${(props) =>
    props.isHighlight &&
    `
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`;

const PriceCell = styled.td<{ isVergeben?: boolean }>`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${(props) => (props.isVergeben ? "#f8f9fa" : "#fff")};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${(props) =>
    props.isVergeben &&
    `
    color: #999;
    text-decoration: line-through;
  `}
`;

/* Mobile Card Layout */
const MobileCards = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileCard = styled.div<{ isVergeben?: boolean }>`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${(props) => (props.isVergeben ? "#eee" : "#f0f0f0")};
  opacity: ${(props) => (props.isVergeben ? 0.8 : 1)};
`;

const MobileCardTitle = styled.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`;

const MobileCardPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;

const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-of-type {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    text-align: right;
    color: #222;
  }
`;

const CTAButton = styled.a<{ isVergeben?: boolean }>`
  display: inline-block;
  background: ${(props) => (props.isVergeben ? "#ccc" : "#e10073")};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  margin-top: 1.5rem;
  box-sizing: border-box;
  pointer-events: ${(props) => (props.isVergeben ? "none" : "auto")};
`;

export const EMAIL_KONTAKT = "sponsoring@sckw.de";

export default function SponsoringTable({ packages }: SponsoringTableProps) {
  const generateMailto = (packageTitle: string) => {
    const cleanTitle = packageTitle.replace(/[^\w\s]/gi, "").trim();
    const subject = encodeURIComponent(`Interesse am Paket "${cleanTitle}"`);
    return `mailto:${EMAIL_KONTAKT}?subject=${subject}`;
  };

  const getSocialMediaLabel = (pkg: (typeof sponsoringPakete)[0]) => {
    const benefit = pkg.benefits.find((b) => {
      const normalized = b.toLowerCase();
      return normalized.includes("social media") || normalized.includes("instagram");
    });
    if (!benefit) return "-";
    const normalized = benefit.toLowerCase();
    if (normalized.includes("premium") || normalized.includes("allen")) return "ÜBERALL";
    if (normalized.includes("sehr präsent")) return "Sehr präsent";
    if (normalized.includes("regelmässig") || normalized.includes("regelmäßig")) return "Regelmäßig";
    return "Standard";
  };

  return (
    <Container>
      {/* Desktop View */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Paket</Th>
              {packages.map((pkg, i) => (
                <Th key={i} isVergeben={pkg.status.includes("Vergeben")}>
                  {pkg.title}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Preis</Td>
              {packages.map((pkg, i) => (
                <PriceCell key={i} isVergeben={pkg.status.includes("Vergeben")}>
                  {pkg.price}
                </PriceCell>
              ))}
            </tr>
            <tr>
              <Td>Trikot/Banner</Td>
              {packages.map((pkg, i) => {
                const benefit = pkg.benefits.find(b => b.includes("Trikot") || b.includes("Banner"));
                return <Td key={i}>{benefit ? "✅ Ja" : "-"}</Td>;
              })}
            </tr>
            <tr>
              <Td>Social Media</Td>
              {packages.map((pkg, i) => {
                const label = getSocialMediaLabel(pkg);
                return <Td key={i} isHighlight={label === "ÜBERALL"}>{label === "-" ? "-" : `✅ ${label}`}</Td>;
              })}
            </tr>
            <tr>
              <Td>Aktion</Td>
              {packages.map((pkg, i) => (
                <Td key={i}>
                  <CTAButton 
                    href={pkg.status.includes("Vergeben") ? undefined : generateMailto(pkg.title)}
                    isVergeben={pkg.status.includes("Vergeben")}
                  >
                    {pkg.status.includes("Vergeben") ? "Vergeben" : "Anfragen"}
                  </CTAButton>
                </Td>
              ))}
            </tr>
          </tbody>
        </Table>
      </TableContainer>

      {/* Mobile View */}
      <MobileCards>
        {packages.map((pkg, i) => {
          const isVergeben = pkg.status.includes("Vergeben");
          return (
            <MobileCard key={i} isVergeben={isVergeben}>
              <MobileCardTitle>{pkg.title}</MobileCardTitle>
              <MobileCardPrice>{pkg.price}</MobileCardPrice>
              <MobileRow>
                <span>Status</span>
                <span>{isVergeben ? "🟥 Vergeben" : "🟩 Verfügbar"}</span>
              </MobileRow>
              <MobileRow>
                <span>Social Media</span>
                <span>{getSocialMediaLabel(pkg)}</span>
              </MobileRow>
              <MobileRow>
                <span>Vorteile</span>
                <span>{pkg.benefits.length} Leistungen</span>
              </MobileRow>
              <CTAButton 
                href={isVergeben ? undefined : generateMailto(pkg.title)}
                isVergeben={isVergeben}
              >
                {isVergeben ? "Bereits vergeben" : "Jetzt anfragen"}
              </CTAButton>
            </MobileCard>
          );
        })}
      </MobileCards>
    </Container>
  );
}
