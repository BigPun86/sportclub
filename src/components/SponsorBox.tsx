import styled from "styled-components";

export type SponsorBoxProps = {
  title: string;
  price: string;
  status: string;
  benefits: string[];
  color?: string;
};

const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 420px;
  position: relative;
  transition: box-shadow 0.2s;
  margin-bottom: 1.5rem;
  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
    transform: translateY(-2px) scale(1.02);
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
  text-align: left;
  flex: 1 1 auto;
  li {
    margin-bottom: 0.4rem;
    line-height: 1.5;
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

  return (
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
      <Status statusType={statusType}>{status}</Status>
    </Box>
  );
}
