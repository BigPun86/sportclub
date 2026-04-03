import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBar = styled.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`;

const LinkA = styled.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkR = styled(Link)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterRow = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterRow>
        <div>
          &copy; {new Date().getFullYear()} SC Konstanz-Wollmatingen &bull;{" "}
          <LinkA href="mailto:sponsoring@sckw.de">sponsoring@sckw.de</LinkA>
        </div>
        <FooterLinks aria-label="Rechtliches">
          <LinkR to="/sponsoring/500er">500er Club</LinkR>
          <LinkR to="/sponsoring-v1">Sponsoring-Archiv</LinkR>
          <LinkA
            href="https://www.sckw.de/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz
          </LinkA>
          <LinkA
            href="https://www.sckw.de/impressum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum
          </LinkA>
        </FooterLinks>
      </FooterRow>
    </FooterBar>
  );
}
