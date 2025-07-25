import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";

export type SponsoringGridProps = {
  packages: typeof sponsoringPakete;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div<{ isVergeben?: boolean }>`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isVergeben ? "0.8" : "1")};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const PackageIcon = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const PackageTitle = styled.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`;

const Price = styled.div<{ isVergeben?: boolean }>`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${(props) => (props.isVergeben ? "#999" : "#e10073")};
  margin-bottom: 1rem;
  text-decoration: ${(props) => (props.isVergeben ? "line-through" : "none")};
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
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

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`;

const BenefitItem = styled.li<{ isHighlight?: boolean }>`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: ${(props) => (props.isHighlight ? "#e10073" : "#222")};
  font-weight: ${(props) => (props.isHighlight ? "600" : "400")};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const BenefitIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const BenefitText = styled.span`
  flex: 1;
`;

const CTAButton = styled.a<{ isVergeben?: boolean }>`
  display: inline-block;
  background: ${(props) => (props.isVergeben ? "#ccc" : "#e10073")};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${(props) => (props.isVergeben ? "none" : "auto")};
  margin-top: auto;

  &:hover {
    background: ${(props) => (props.isVergeben ? "#ccc" : "#b8005a")};
    transform: ${(props) => (props.isVergeben ? "none" : "scale(1.05)")};
  }
`;

const VergebenMessage = styled.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EMAIL_KONTAKT = "grimm@sckw.de";

export default function SponsoringGrid({ packages }: SponsoringGridProps) {
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

  // Filtere Spenden-Pakete heraus (die gehören in die DonationSection)
  const sponsoringPackages = packages.filter(
    (pkg) => !pkg.title.includes("Platz-Renovierung")
  );

  return (
    <GridContainer>
      {sponsoringPackages.map((pkg, index) => {
        const { isFullyBooked } = getAvailableSlots(pkg);
        const statusType = getStatusType(pkg.status);
        const isVergeben = statusType === "vergeben" || isFullyBooked;
        const finalStatus = isFullyBooked ? "vergeben" : statusType;
        const keyBenefits = pkg.keyBenefits || [];

        return (
          <Card key={index} isVergeben={isVergeben}>
            <Header>
              <PackageIcon>{getPackageIcon(pkg.title)}</PackageIcon>
              <PackageTitle>
                {pkg.title
                  .replace(
                    /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[\u2600-\u27BF])\s*/u,
                    ""
                  )
                  .trim()}
              </PackageTitle>
              {!isVergeben && <Price>{pkg.price}</Price>}
              <StatusBadge status={finalStatus}>
                {finalStatus === "vergeben" ? "✅ Vergeben" : "🟩 Verfügbar"}
              </StatusBadge>
            </Header>

            {isVergeben ? (
              <VergebenMessage>✅ Alle Plätze vergeben</VergebenMessage>
            ) : (
              <BenefitsList>
                {keyBenefits.map(
                  (
                    benefit: { text: string; highlight: boolean; icon: string },
                    idx: number
                  ) => (
                    <BenefitItem key={idx} isHighlight={benefit.highlight}>
                      <BenefitIcon>{benefit.icon}</BenefitIcon>
                      <BenefitText>{benefit.text}</BenefitText>
                    </BenefitItem>
                  )
                )}
              </BenefitsList>
            )}

            <CTAButton
              href={isVergeben ? undefined : generateMailto(pkg.title)}
              isVergeben={isVergeben}
            >
              {isVergeben ? "Vergeben" : "Jetzt anfragen"}
            </CTAButton>
          </Card>
        );
      })}
    </GridContainer>
  );
}
