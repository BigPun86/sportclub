import styled from "styled-components";

const BallspendeSection = styled.section`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #e10073, #ff6b9d, #e10073);
    background-size: 200% 100%;
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const BallspendeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin: 1rem auto 0;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    max-width: 650px;
    margin: 2rem auto 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 750px;
  }
`;

interface BallspendeVisualProps {
  imageSrc: string;
  altText: string;
}

export function BallspendeVisual({ imageSrc, altText }: BallspendeVisualProps) {
  return (
    <BallspendeSection>
      <BallspendeImage src={imageSrc} alt={altText} />
    </BallspendeSection>
  );
}
