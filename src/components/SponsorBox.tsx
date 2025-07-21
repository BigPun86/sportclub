import { useState } from "react";
import styled from "styled-components";

export type SponsorBoxProps = {
  title: string;
  price: string;
  status: string;
  benefits: string[];
  color?: string;
};

const Box = styled.div<{ clickable?: boolean }>`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 420px;
  position: relative;
  transition: box-shadow 0.2s, transform 0.15s;
  margin-bottom: 1.5rem;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
    transform: ${(props) =>
      props.clickable ? "translateY(-2px) scale(1.025)" : "none"};
  }
`;

const HeaderArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e10073;
  margin-bottom: 0.2rem;
  text-align: center;
`;

const Benefits = styled.ul`
  list-style: disc inside;
  color: #222;
  font-size: 1rem;
  margin: 0 0 2.2rem 0;
  padding: 0;
  width: 100%;
  text-align: center;
  flex: 1 1 auto;
  li {
    margin-bottom: 0.4rem;
    line-height: 1.5;
    text-align: center;
    margin-left: 0;
  }
`;

const Status = styled.div<{ statusType: string }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0 0 16px 16px;
  padding: 0.7rem 0;
  font-size: 1rem;
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

const CTAButton = styled.a`
  background: #e10073;
  color: #fff;
  font-weight: 700;
  font-size: 1.13rem;
  padding: 0.8rem 2.1rem;
  border: none;
  border-radius: 28px;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(225, 0, 115, 0.13);
  transition: background 0.2s, transform 0.1s;
  z-index: 2;
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: #b8005a;
    transform: scale(1.04);
  }
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
}: SponsorBoxProps) {
  // Status-Typ für Farbe bestimmen
  let statusType = "neutral";
  if (status.toLowerCase().includes("verfügbar")) statusType = "verfügbar";
  else if (status.toLowerCase().includes("vergeben")) statusType = "vergeben";

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
      <Box>
        <HeaderArea>
          <Title>
            {icon && <span style={{ fontSize: "1.6em" }}>{icon}</span>}
            {cleanTitle}
          </Title>
          <Price>{price}</Price>
        </HeaderArea>
        <Benefits>
          {benefits.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </Benefits>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2.2rem",
          }}
        >
          <CTAButton href={mailto} onClick={(e) => e.stopPropagation()}>
            Jetzt anfragen
          </CTAButton>
        </div>
        <Status statusType={statusType}>{status}</Status>
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
