import styled from "styled-components";
import type { ReactNode } from "react";
import { brand } from "../theme";
import { buttonStyles, type ButtonVariant } from "./buttonStyles";

// Shared building blocks for the club look (sckw.de): condensed uppercase
// headings, red accent line, navy/red/blue buttons.

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Eyebrow = styled.p<{ $onDark?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem;
  font-family: ${brand.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${(p) => (p.$onDark ? "rgba(255, 255, 255, 0.8)" : brand.muted)};

  &::before {
    content: "";
    width: 40px;
    height: 3px;
    background: ${brand.red};
    flex-shrink: 0;
  }
`;

export const Title = styled.h2<{ $onDark?: boolean }>`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${(p) => (p.$onDark ? "#fff" : brand.navy)};
  margin: 0;
`;

export const Lead = styled.p<{ $onDark?: boolean }>`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${(p) => (p.$onDark ? "rgba(255, 255, 255, 0.8)" : brand.muted)};
  max-width: 62ch;
  margin: 1rem 0 0;
`;

const HeaderWrap = styled.header`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
`;

export function SectionHeader({
  eyebrow,
  title,
  lead,
  onDark,
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  onDark?: boolean;
  id?: string;
}) {
  return (
    <HeaderWrap>
      <Eyebrow $onDark={onDark}>{eyebrow}</Eyebrow>
      <Title id={id} $onDark={onDark}>
        {title}
      </Title>
      {lead && <Lead $onDark={onDark}>{lead}</Lead>}
    </HeaderWrap>
  );
}

export const ButtonLink = styled.a<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
`;

export const Button = styled.button<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
`;
