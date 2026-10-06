import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { brand } from "../theme";

const FooterBar = styled.footer`
  width: 100%;
  background: ${brand.navyDeep};
  border-top: 4px solid ${brand.red};
  color: rgba(255, 255, 255, 0.72);
  font-family: ${brand.fontBody};
  font-size: 0.95rem;
  text-align: left;
  padding: 2.5rem 1rem 2rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem 2.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
`;

const Club = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    background: #fff;
    border-radius: 50%;
    padding: 3px;
  }
`;

const ClubName = styled.div`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0.35rem;
`;

const ColTitle = styled.h2`
  font-family: ${brand.fontDisplay};
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0 0 0.75rem;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
`;

const linkStyle = `
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const LinkA = styled.a`
  ${linkStyle}
`;

const LinkRouter = styled(Link)`
  ${linkStyle}
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

export default function Footer() {
  return (
    <FooterBar>
      <Inner>
        <Club>
          <img src={logo} alt="" />
          <div>
            <ClubName>SC Konstanz-Wollmatingen e.V.</ClubName>
            Schleyerweg 5, 78467 Konstanz
          </div>
        </Club>

        <nav aria-label="Kontakt">
          <ColTitle>Sponsoring</ColTitle>
          <LinkList>
            <li>
              <LinkA href="mailto:sponsoring@sckw.de">sponsoring@sckw.de</LinkA>
            </li>
            <li>
              <LinkRouter to="/sponsoring/club-500">500er Club</LinkRouter>
            </li>
            <li>
              <LinkA href="https://www.sckw.de" target="_blank" rel="noopener">
                sckw.de
              </LinkA>
            </li>
          </LinkList>
        </nav>

        <nav aria-label="Rechtliches">
          <ColTitle>Rechtliches</ColTitle>
          <LinkList>
            <li>
              <LinkA
                href="https://www.sckw.de/impressum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Impressum
              </LinkA>
            </li>
            <li>
              <LinkA
                href="https://www.sckw.de/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutz
              </LinkA>
            </li>
          </LinkList>
        </nav>
      </Inner>

      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} SC Konstanz-Wollmatingen e.V.
        </span>
        <LinkRouter to="/sponsoring/spielerpatenschaft">
          Personal Partner
        </LinkRouter>
      </Bottom>
    </FooterBar>
  );
}
