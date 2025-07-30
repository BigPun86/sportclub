import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

interface NavLinkProps {
  $active?: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.$active ? "#e10073" : "#333")};
  font-weight: ${(props) => (props.$active ? "700" : "600")};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${(props) =>
    props.$active ? "2px solid #e10073" : "2px solid transparent"};

  &:hover {
    color: #e10073;
    background: rgba(225, 0, 115, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

export default function Navigation() {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <Logo>
          <LogoText>SCKW</LogoText>
        </Logo>

        <NavLinks>
          <NavLink to="/" $active={location.pathname === "/"}>
            🤝 Sponsoring
          </NavLink>
          <NavLink to="/jobs" $active={location.pathname === "/jobs"}>
            💼 Jobbörse
          </NavLink>
          <NavLink
            to="/renovierung"
            $active={location.pathname === "/renovierung"}
          >
            🏗️ Renovierung
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}
