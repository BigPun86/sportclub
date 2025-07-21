import styled from "styled-components";

const FooterBar = styled.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`;

const Mail = styled.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      &copy; {new Date().getFullYear()} SC Konstanz-Wollmatingen &bull;{" "}
      <Mail href="mailto:grimm@sckw.de">grimm@sckw.de</Mail>
    </FooterBar>
  );
}
