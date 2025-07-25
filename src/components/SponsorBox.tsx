import { useState } from "react";
import styled from "styled-components";

export type SponsorBoxProps = {
  title: string;
  price: string;
  status: string;
  benefits: string[];
  maxSponsors?: number;
  sponsors?: Array<{
    name: string;
    image?: string;
    website?: string | null;
    since: string;
    until: string;
  }>;
  color?: string;
};

const Box = styled.div<{ clickable?: boolean; isVergeben?: boolean }>`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 1.5rem;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  opacity: ${(props) => (props.isVergeben ? "0.8" : "1")};
  overflow: hidden;

  &:hover {
    min-height: 420px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
    z-index: 10;
  }
`;

const HeaderArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const Title = styled.h3<{ isVergeben?: boolean }>`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.isVergeben ? "#666" : "#222")};
  transition: color 0.3s ease;

  ${Box}:hover & {
    color: ${(props) => (props.isVergeben ? "#888" : "#e10073")};
  }
`;

const Price = styled.div<{ isVergeben?: boolean }>`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: #e10073;
  margin-bottom: 0.2rem;
  text-align: center;
  display: ${(props) => (props.isVergeben ? "none" : "block")};
  transition: opacity 0.3s ease;
`;

const Benefits = styled.ul<{ isVergeben?: boolean }>`
  list-style: disc inside;
  color: #222;
  font-size: clamp(0.9rem, 2vw, 1rem);
  margin: 0 0 2.2rem 0;
  padding: 0;
  width: 100%;
  text-align: center;
  flex: 1 1 auto;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Box}:hover & {
    opacity: 1;
    max-height: 300px;
    margin: 1rem 0 2.2rem 0;
  }

  li {
    margin-bottom: 0.4rem;
    line-height: 1.5;
    text-align: center;
    margin-left: 0;
  }
`;

const VergebenMessage = styled.div`
  color: #666;
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
  font-weight: 600;
  text-align: center;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex: 1;
  justify-content: center;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Box}:hover & {
    opacity: 0.3;
    margin: 1rem 0;
  }
`;

const Status = styled.div<{ statusType: string }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 0 16px 16px;
  padding: clamp(0.5rem, 2vw, 0.7rem) 0;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 700;
  text-align: center;
  background: ${({ statusType }) =>
    statusType === "verfügbar"
      ? "#e6fbe6"
      : statusType === "vergeben"
      ? "#ffeaea"
      : "#fffbe6"};
  color: ${({ statusType }) =>
    statusType === "verfügbar"
      ? "#1a7f37"
      : statusType === "vergeben"
      ? "#c40000"
      : "#b38f00"};
  border-top: 1px solid #eee;
`;

const CTAButton = styled.a<{ isVergeben?: boolean }>`
  background: ${(props) => (props.isVergeben ? "#ccc" : "#e10073")};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.13rem);
  padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1.5rem, 4vw, 2.1rem);
  border: none;
  border-radius: 28px;
  margin-top: auto;
  margin-bottom: 0.5rem;
  cursor: ${(props) => (props.isVergeben ? "default" : "pointer")};
  box-shadow: 0 4px 16px rgba(225, 0, 115, 0.13);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  pointer-events: ${(props) => (props.isVergeben ? "none" : "auto")};
  &:hover {
    background: ${(props) => (props.isVergeben ? "#ccc" : "#b8005a")};
    transform: ${(props) => (props.isVergeben ? "none" : "scale(1.04)")};
  }
  margin-bottom: 2.5rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  padding: 2.5rem 2.2rem 2rem 2.2rem;
  max-width: 95vw;
  width: 400px;
  position: relative;
  text-align: center;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #e10073;
  cursor: pointer;
`;

export const EMAIL_KONTAKT = "grimm@sckw.de";

export default function SponsorBox({
  title,
  price,
  status,
  benefits,
  maxSponsors = 1,
  sponsors = [],
}: SponsorBoxProps) {
  // Status-Typ für Farbe bestimmen
  let statusType = "neutral";
  if (status.toLowerCase().includes("verfügbar")) statusType = "verfügbar";
  else if (status.toLowerCase().includes("vergeben")) statusType = "vergeben";

  // Automatisch als "vergeben" behandeln wenn alle Slots voll sind
  const isFullyBooked = maxSponsors - sponsors.length === 0;
  const isVergeben = statusType === "vergeben" || isFullyBooked;

  // Icon extrahieren, falls vorhanden
  const match = title.match(
    /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[\u2600-\u27BF])\s*/u
  );
  const icon = match ? match[0] : "";
  const cleanTitle = match ? title.replace(icon, "").trim() : title;

  // Modal-Logik
  const [open, setOpen] = useState(false);

  // Mailto-Link generieren
  const cleanTitleForMail = cleanTitle.replace(/"/g, "");
  const subject = encodeURIComponent(
    `Interesse am Sponsoring-Paket "${cleanTitleForMail}"`
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
  const mailto = `mailto:${EMAIL_KONTAKT}?subject=${subject}&body=${body}`;

  return (
    <>
      <Box isVergeben={isVergeben}>
        <HeaderArea>
          <Title isVergeben={isVergeben}>
            {icon && (
              <span style={{ fontSize: isVergeben ? "1.3em" : "1.6em" }}>
                {icon}
              </span>
            )}
            {cleanTitle}
          </Title>
          <Price isVergeben={isVergeben}>{price}</Price>
        </HeaderArea>

        {isFullyBooked ? (
          <VergebenMessage>
            <div>✅ Alle vergeben</div>
          </VergebenMessage>
        ) : (
          <Benefits isVergeben={isVergeben}>
            {benefits.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </Benefits>
        )}

        <CTAButton
          href={isFullyBooked ? undefined : mailto}
          onClick={(e) =>
            isFullyBooked ? e.preventDefault() : e.stopPropagation()
          }
          isVergeben={isFullyBooked}
        >
          {isFullyBooked ? "Alle vergeben" : "Jetzt anfragen"}
        </CTAButton>
        <Status statusType={isFullyBooked ? "vergeben" : statusType}>
          {isFullyBooked ? "Vergeben" : status}
        </Status>
      </Box>
      {open && (
        <ModalOverlay onClick={() => setOpen(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={() => setOpen(false)} title="Schließen">
              ×
            </ModalClose>
            <Title style={{ marginBottom: "0.7rem" }}>
              {icon && <span style={{ fontSize: "1.5em" }}>{icon}</span>}
              {cleanTitle}
            </Title>
            <Price style={{ marginBottom: "0.7rem" }}>{price}</Price>
            <Benefits>
              {benefits.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </Benefits>
            <Status statusType={statusType}>{status}</Status>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
}
