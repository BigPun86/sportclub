import styled from "styled-components";

const SponsorCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`;

const SponsorCategoryCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #e10073;
    box-shadow: 0 12px 32px rgba(225, 0, 115, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:focus-within {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.3);
  }
`;

const SponsorCategoryIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const SponsorCategoryTitle = styled.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const SponsorCategoryDescription = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`;

const SponsorCategoryPackages = styled.div`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #333;
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.7;
  padding: 0 1rem;

  /* Zentrierte Bullet Points */
  ul,
  ol {
    display: inline-block;
    text-align: left;
  }
`;

const SponsorCategoryButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`;

interface SponsorCategoryProps {
  icon: string;
  title: string;
  description: string;
  packages: string[];
  buttonHref: string;
  buttonText: string;
}

export function SponsorCategory({
  icon,
  title,
  description,
  packages,
  buttonHref,
  buttonText,
}: SponsorCategoryProps) {
  return (
    <SponsorCategoryCard>
      <SponsorCategoryIcon>{icon}</SponsorCategoryIcon>
      <SponsorCategoryTitle>{title}</SponsorCategoryTitle>
      <SponsorCategoryDescription>{description}</SponsorCategoryDescription>
      <SponsorCategoryPackages>
        {packages.map((pkg, index) => (
          <div key={index}>
            {pkg}
            {index < packages.length - 1 && <br />}
          </div>
        ))}
      </SponsorCategoryPackages>
      <SponsorCategoryButton href={buttonHref}>
        {buttonText}
      </SponsorCategoryButton>
    </SponsorCategoryCard>
  );
}

export default SponsorCategoriesGrid;
