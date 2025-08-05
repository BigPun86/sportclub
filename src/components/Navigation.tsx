import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const NavContainer = styled.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(p) => p.theme.colors.primary};
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

interface NavLinksProps {
  $open?: boolean;
}

const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #eee;
    padding: 0.75rem 1rem;
    flex-direction: column;
    align-items: stretch;
    display: ${(p) => (p.$open ? "flex" : "none")};
  }
`;

interface NavLinkProps {
  $active?: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.$active ? props.theme.colors.primary : "#333")};
  font-weight: ${(props) => (props.$active ? "700" : "600")};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${(props) =>
    props.$active
      ? `2px solid ${props.theme.colors.primary}`
      : "2px solid transparent"};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  color: #222;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  gap: 0.4rem;
  line-height: 1;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }
`;

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo>
            <LogoImage src={logo} alt="SCKW Logo" />
            <LogoText>SC Konstanz-Wollmatingen e. V.</LogoText>
          </Logo>
        </NavLink>

        <MobileToggle
          aria-label="Menü öffnen/schließen"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          Menü
          <span style={{ fontSize: "1.25rem", marginLeft: "0.1rem" }}>☰</span>
        </MobileToggle>

        <NavLinks id="mobile-nav" $open={isMenuOpen}>
          <NavLink
            to="/sponsoring"
            $active={location.pathname === "/sponsoring"}
            onClick={() => setIsMenuOpen(false)}
          >
            🤝 Sponsoring
          </NavLink>
          <NavLink
            to="/jobs"
            $active={location.pathname === "/jobs"}
            onClick={() => setIsMenuOpen(false)}
          >
            💼 Jobbörse
          </NavLink>
          <NavLink
            to="/renovierung"
            $active={location.pathname === "/renovierung"}
            onClick={() => setIsMenuOpen(false)}
          >
            🏗️ Renovierung
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}
