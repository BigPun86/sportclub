import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";

export type SponsoringTableProps = {
  packages: typeof sponsoringPakete;
};

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const Th = styled.th<{ isVergeben?: boolean }>`
  background: ${(props) => (props.isVergeben ? "#f8f9fa" : "#e10073")};
  color: ${(props) => (props.isVergeben ? "#666" : "#fff")};
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  border: 1px solid #dee2e6;
  position: relative;

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
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.4;

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

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ status }) =>
    status === "verfügbar"
      ? "#d4edda"
      : status === "vergeben"
      ? "#f8d7da"
      : "#fff3cd"};
  color: ${({ status }) =>
    status === "verfügbar"
      ? "#155724"
      : status === "vergeben"
      ? "#721c24"
      : "#856404"};
`;

const PriceCell = styled.td<{ isVergeben?: boolean }>`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${(props) => (props.isVergeben ? "#f8f9fa" : "#fff")};
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 700;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${(props) =>
    !props.isVergeben &&
    `
    color: #e10073;
  `}

  ${(props) =>
    props.isVergeben &&
    `
    color: #999;
    text-decoration: line-through;
  `}
`;

const CTAButton = styled.a<{ isVergeben?: boolean }>`
  display: inline-block;
  background: ${(props) => (props.isVergeben ? "#ccc" : "#e10073")};
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.2s ease;
  pointer-events: ${(props) => (props.isVergeben ? "none" : "auto")};

  &:hover {
    background: ${(props) => (props.isVergeben ? "#ccc" : "#b8005a")};
    transform: ${(props) => (props.isVergeben ? "none" : "scale(1.05)")};
  }
`;

const PackageIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const PackageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`;

export const EMAIL_KONTAKT = "grimm@sckw.de";

export default function SponsoringTable({ packages }: SponsoringTableProps) {
  // Status-Typ für Farbe bestimmen
  const getStatusType = (status: string) => {
    if (status.toLowerCase().includes("verfügbar")) return "verfügbar";
    if (status.toLowerCase().includes("vergeben")) return "vergeben";
    return "neutral";
  };

  // Icon extrahieren
  const getPackageIcon = (title: string) => {
    const match = title.match(
      /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[\u2600-\u27BF])\s*/u
    );
    return match ? match[0] : "";
  };

  // Mailto-Link generieren
  const generateMailto = (packageTitle: string) => {
    const cleanTitle = packageTitle
      .replace(
        /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[\u2600-\u27BF])\s*/u,
        ""
      )
      .trim();
    const subject = encodeURIComponent(
      `Interesse am Sponsoring-Paket "${cleanTitle}"`
    );
    const body = encodeURIComponent(
      `Hallo liebes SCKW-Team,\n\n` +
        `ich interessiere mich sehr für das Sponsoring-Paket "${cleanTitle}" und würde gerne mehr darüber erfahren.\n` +
        `Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.\n\n` +
        `Mein Name: \n` +
        `Firma (optional): \n` +
        `Telefon (optional): \n\n` +
        `Ich freue mich auf Ihre Rückmeldung!\n\nHerzliche Grüße\n`
    );
    return `mailto:${EMAIL_KONTAKT}?subject=${subject}&body=${body}`;
  };

  // Verfügbare Slots berechnen
  const getAvailableSlots = (pkg: (typeof sponsoringPakete)[0]) => {
    const availableSlots = pkg.maxSponsors - (pkg.sponsors?.length || 0);
    const isFullyBooked = availableSlots === 0;
    return { availableSlots, isFullyBooked };
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Paket</Th>
            {packages.map((pkg, index) => {
              const { isFullyBooked } = getAvailableSlots(pkg);
              const statusType = getStatusType(pkg.status);
              const isVergeben = statusType === "vergeben" || isFullyBooked;

              return (
                <Th key={index} isVergeben={isVergeben}>
                  <PackageTitle>
                    <PackageIcon>{getPackageIcon(pkg.title)}</PackageIcon>
                    {pkg.title
                      .replace(
                        /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[\u2600-\u27BF])\s*/u,
                        ""
                      )
                      .trim()}
                  </PackageTitle>
                </Th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Preis</Td>
            {packages.map((pkg, index) => {
              const { isFullyBooked } = getAvailableSlots(pkg);
              const statusType = getStatusType(pkg.status);
              const isVergeben = statusType === "vergeben" || isFullyBooked;

              return (
                <PriceCell key={index} isVergeben={isVergeben}>
                  {isVergeben ? "Vergeben" : pkg.price}
                </PriceCell>
              );
            })}
          </tr>
          <tr>
            <Td>Status</Td>
            {packages.map((pkg, index) => {
              const { isFullyBooked } = getAvailableSlots(pkg);
              const statusType = getStatusType(pkg.status);
              const finalStatus = isFullyBooked ? "vergeben" : statusType;

              return (
                <Td key={index}>
                  <StatusBadge status={finalStatus}>
                    {finalStatus === "vergeben"
                      ? "✅ Vergeben"
                      : "🟩 Verfügbar"}
                  </StatusBadge>
                </Td>
              );
            })}
          </tr>
          <tr>
            <Td>Trikot</Td>
            {packages.map((pkg, index) => {
              const trikotBenefit = pkg.benefits.find((b) =>
                b.includes("Trikot")
              );
              return (
                <Td key={index} isHighlight={!!trikotBenefit}>
                  {trikotBenefit
                    ? trikotBenefit.replace("Trikot", "").trim()
                    : "-"}
                </Td>
              );
            })}
          </tr>
          <tr>
            <Td>Banner</Td>
            {packages.map((pkg, index) => {
              const bannerBenefit = pkg.benefits.find((b) =>
                b.includes("Banner")
              );
              return <Td key={index}>{bannerBenefit ? bannerBenefit : "-"}</Td>;
            })}
          </tr>
          <tr>
            <Td>Stadionmagazin</Td>
            {packages.map((pkg, index) => {
              const magazinBenefit = pkg.benefits.find((b) =>
                b.includes("Stadionmagazin")
              );
              return (
                <Td key={index}>
                  {magazinBenefit
                    ? magazinBenefit.replace("im Stadionmagazin", "").trim()
                    : "-"}
                </Td>
              );
            })}
          </tr>
          <tr>
            <Td>Social Media</Td>
            {packages.map((pkg, index) => {
              const socialBenefit = pkg.benefits.find((b) =>
                b.includes("Spieltags-Post")
              );
              return (
                <Td key={index} isHighlight={!!socialBenefit}>
                  {socialBenefit ? "✅ Prominent" : "✅ Standard"}
                </Td>
              );
            })}
          </tr>
          <tr>
            <Td>Website</Td>
            {packages.map((pkg, index) => {
              const websiteBenefit = pkg.benefits.find(
                (b) => b.includes("Website") || b.includes("Startseite")
              );
              return <Td key={index}>{websiteBenefit ? "✅ Ja" : "-"}</Td>;
            })}
          </tr>
          <tr>
            <Td>Kontakt</Td>
            {packages.map((pkg, index) => {
              const { isFullyBooked } = getAvailableSlots(pkg);
              const statusType = getStatusType(pkg.status);
              const isVergeben = statusType === "vergeben" || isFullyBooked;

              return (
                <Td key={index}>
                  <CTAButton
                    href={isVergeben ? undefined : generateMailto(pkg.title)}
                    isVergeben={isVergeben}
                  >
                    {isVergeben ? "Vergeben" : "Anfragen"}
                  </CTAButton>
                </Td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}
