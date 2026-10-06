import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { brand } from "../theme";

const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 200;
  background: ${brand.navy};
  color: #fff;
  font-family: ${brand.fontBody};
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 8px;

  &:focus {
    top: 0.75rem;
  }
`;

const NavContainer = styled.nav`
  background: #fff;
  border-bottom: 1px solid ${brand.line};
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: ${brand.fontBody};
  text-align: left;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
`;

const LogoImage = styled.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`;

const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const BrandName = styled.span`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: ${brand.navy};
  white-space: nowrap;
`;

const BrandSub = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${brand.muted};

  @media (max-width: 380px) {
    display: none;
  }
`;

const NavLinks = styled.div<{ $open?: boolean }>`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  @media (max-width: 767px) {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid ${brand.line};
    box-shadow: 0 12px 24px rgba(16, 34, 63, 0.08);
    padding: 0.75rem 1rem 1rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    display: ${(p) => (p.$open ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  color: ${(p) => (p.$active ? brand.navy : brand.muted)};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0.9rem;
    right: 0.9rem;
    bottom: 0.25rem;
    height: 2px;
    background: ${brand.red};
    opacity: ${(p) => (p.$active ? 1 : 0)};
  }

  &:hover {
    color: ${brand.navy};
    background: ${brand.paper};
  }

  @media (max-width: 767px) {
    padding: 0.85rem 0.9rem;

    &::after {
      left: 0;
      right: auto;
      top: 0.6rem;
      bottom: 0.6rem;
      width: 3px;
      height: auto;
    }
  }
`;

const NavCTA = styled(Link)`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 1.1rem;
  border-radius: 8px;
  background: ${brand.red};
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    background: ${brand.redDark};
  }

  @media (max-width: 767px) {
    margin: 0.5rem 0 0;
  }
`;

const MobileToggle = styled.button`
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: ${brand.navy};
  color: #fff;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${brand.navySoft};
    border-color: transparent;
  }

  @media (max-width: 767px) {
    display: inline-flex;
  }
`;

const Burger = styled.span<{ $open: boolean }>`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${(p) => (p.$open ? "transparent" : "#fff")};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    background: #fff;
    transition: transform 0.2s ease;
  }
  &::before {
    transform: ${(p) => (p.$open ? "rotate(45deg)" : "translateY(-6px)")};
  }
  &::after {
    transform: ${(p) => (p.$open ? "rotate(-45deg)" : "translateY(6px)")};
  }
`;

export default function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ENABLE_RENOVIERUNG = false;
  const close = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <>
      <SkipLink href="#inhalt">Zum Inhalt springen</SkipLink>
      <NavContainer aria-label="Hauptnavigation">
        <NavContent>
          <Brand to="/sponsoring" onClick={close}>
            <LogoImage src={logo} alt="" />
            <BrandText>
              <BrandName>SC Konstanz-Wollmatingen</BrandName>
              <BrandSub>Partner & Sponsoring</BrandSub>
            </BrandText>
          </Brand>

          <MobileToggle
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
            aria-controls="hauptmenue"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <Burger $open={isMenuOpen} />
          </MobileToggle>

          <NavLinks id="hauptmenue" $open={isMenuOpen}>
            <NavLink
              to="/sponsoring"
              $active={location.pathname === "/sponsoring"}
              aria-current={
                location.pathname === "/sponsoring" ? "page" : undefined
              }
              onClick={close}
            >
              Sponsoring
            </NavLink>
            <NavLink
              to="/sponsoring/club-500"
              $active={location.pathname === "/sponsoring/club-500"}
              aria-current={
                location.pathname === "/sponsoring/club-500"
                  ? "page"
                  : undefined
              }
              onClick={close}
            >
              500er Club
            </NavLink>
            {ENABLE_RENOVIERUNG && (
              <NavLink
                to="/renovierung"
                $active={location.pathname === "/renovierung"}
                onClick={close}
              >
                Renovierung
              </NavLink>
            )}
            <NavCTA to="/sponsoring#kontakt" onClick={close}>
              Anfrage stellen
            </NavCTA>
          </NavLinks>
        </NavContent>
      </NavContainer>
    </>
  );
}
