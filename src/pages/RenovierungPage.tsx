import styled from "styled-components";
import Footer from "../components/Footer";
import { useState, useEffect, useCallback } from "react";
import { getRenovationImages, getGalleryHeroImage } from "../utils/imageLoader";
import DonationTracker from "../components/DonationTracker";

const Hero = styled.section`
  background: url("${getGalleryHeroImage("herren", 18)}") center/cover;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`;

const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  padding: 3rem 2rem 2rem 2rem;
  margin-top: -60px;
  position: relative;
  z-index: 2;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const UrgencyBanner = styled.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`;

const UrgencyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const UrgencyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`;

const CurrentStateSection = styled.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;

const StateTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`;

const StateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StateCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

const StateImage = styled.div`
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.9rem;
  border: 2px dashed #cbd5e1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const CarouselImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;

const CarouselDot = styled.div<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) =>
    props.$isActive ? "#fff" : "rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #fff;
    transform: scale(1.2);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LightboxNav = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$direction === "prev" ? "left: -60px;" : "right: -60px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.$direction === "prev" ? "left: -50px;" : "right: -50px;"}
    font-size: 1.2rem;
    padding: 8px 12px;
  }
`;

const StateCardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`;

const StateDescription = styled.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const RenovationPlansSection = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;

const PlansTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const PlanCard = styled.div`
  background: white;
  border: 2px solid #0ea5e9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(14, 165, 233, 0.15);
  }
`;

const PlanIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PlanTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`;

const PlanDescription = styled.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PlanCost = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;

const SponsorshipSection = styled.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;

const SponsorshipTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`;

const SponsorshipText = styled.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;

const SponsorshipBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`;

const BenefitIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const BenefitText = styled.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`;

const DonationSection = styled.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`;

const DonationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const DonationText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const DonationButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const DonationButton = styled.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &.primary {
    background: #fff;
    color: #059669;

    &:hover {
      background: #f0fdf4;
      transform: translateY(-2px);
    }
  }
`;

// Modal für Bankdaten
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

const BankDetails = styled.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BankLabel = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

const BankValue = styled.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const CopyButton = styled.button`
  background: #e10073;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.95rem;

  &:hover {
    background: #b8005a;
  }
`;

const ModalNote = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;

const renovationImages = getRenovationImages();

// Carousel Komponente
function ImageCarousel({
  images,
  onImageClick,
}: {
  images: Array<{ src: string; alt: string }>;
  onImageClick: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Wechsel alle 4 Sekunden

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "#64748b",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        📷 Bilder folgen bald
      </div>
    );
  }

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image.src}
          alt={image.alt}
          $isActive={index === currentIndex}
          onClick={() => onImageClick(index)}
        />
      ))}
      {images.length > 1 && (
        <CarouselDots>
          {images.map((_, index) => (
            <CarouselDot
              key={index}
              $isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </CarouselDots>
      )}
    </CarouselContainer>
  );
}

// Lightbox Komponente
function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: Array<{ src: string; alt: string }>;
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [onClose, nextImage, prevImage]);

  return (
    <LightboxOverlay onClick={onClose}>
      <LightboxContent onClick={(e) => e.stopPropagation()}>
        <LightboxClose onClick={onClose}>×</LightboxClose>
        <LightboxImage
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
        {images.length > 1 && (
          <>
            <LightboxNav $direction="prev" onClick={prevImage}>
              ‹
            </LightboxNav>
            <LightboxNav $direction="next" onClick={nextImage}>
              ›
            </LightboxNav>
          </>
        )}
      </LightboxContent>
    </LightboxOverlay>
  );
}

export default function RenovierungPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<
    Array<{ src: string; alt: string }>
  >([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showBankModal, setShowBankModal] = useState(false);

  const openLightbox = (
    images: Array<{ src: string; alt: string }>,
    index: number
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleBankClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBankModal(true);
  };

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06");
  };

  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>🏟️ Fürstenberg weiterentwickeln</HeroTitle>
          <HeroSubtitle>
            Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch
            besser
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <Content>
        <Section>
          <SectionTitle>Der Fürstenberg - unser Kultplatz</SectionTitle>
          <IntroText>
            Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück
            unseres Vereins mit einer einzigartigen Atmosphäre und besonderem
            Charme. Dieser authentische Charakter macht ihn zu dem, was er ist:
            unser Zuhause.
          </IntroText>

          <UrgencyBanner>
            <UrgencyTitle>✨ Charme erhalten, Komfort verbessern</UrgencyTitle>
            <UrgencyText>
              Wir möchten den besonderen Charakter des Fürstenberg bewahren und
              gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer
              Unterstützung können wir das Beste aus beiden Welten schaffen.
            </UrgencyText>
          </UrgencyBanner>
        </Section>

        <CurrentStateSection>
          <StateTitle>🔍 Wo wir ansetzen möchten</StateTitle>
          <StateGrid>
            <StateCard>
              <StateImage>
                <ImageCarousel
                  images={renovationImages.kabinen}
                  onImageClick={(index) =>
                    openLightbox(renovationImages.kabinen, index)
                  }
                />
              </StateImage>
              <StateCardTitle>🔧 Kabinen komfortabler gestalten</StateCardTitle>
              <StateDescription>
                Die Kabinen haben schon viele Geschichten erlebt - nun möchten
                wir ihnen mit neuen Bänken, frischen Wänden und durchdachter
                Ausstattung mehr Komfort verleihen, ohne ihren authentischen
                Charakter zu verlieren.
              </StateDescription>
            </StateCard>

            <StateCard>
              <StateImage>
                <ImageCarousel
                  images={renovationImages.fassade}
                  onImageClick={(index) =>
                    openLightbox(renovationImages.fassade, index)
                  }
                />
              </StateImage>
              <StateCardTitle>🎨 Fassade & Fenster erneuern</StateCardTitle>
              <StateDescription>
                Die Außenfassade hat ihren Dienst getan und möchte nun erneuert
                werden. Neue Fenster, frischer Putz und eine ansprechende
                Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum
                für die Namen unserer Partner, die diesen Kultplatz
                unterstützen.
              </StateDescription>
            </StateCard>

            <StateCard>
              <StateImage>
                <ImageCarousel
                  images={renovationImages.waschkueche}
                  onImageClick={(index) =>
                    openLightbox(renovationImages.waschkueche, index)
                  }
                />
              </StateImage>
              <StateCardTitle>
                🧺 Waschküche auf Vordermann bringen
              </StateCardTitle>
              <StateDescription>
                Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet.
                Moderne, energieeffiziente Nachfolger würden nicht nur die
                Umwelt schonen, sondern auch die Pflege unserer Trikots
                optimieren.
              </StateDescription>
            </StateCard>
          </StateGrid>
        </CurrentStateSection>

        <RenovationPlansSection>
          <PlansTitle>✨ Unsere Pläne für den Fürstenberg</PlansTitle>
          <PlansGrid>
            <PlanCard>
              <PlanIcon>🪑</PlanIcon>
              <PlanTitle>Kabinen sanieren</PlanTitle>
              <PlanDescription>
                Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren
                und eine freundliche Atmosphäre schaffen.
              </PlanDescription>
              <PlanCost>~8.000 €</PlanCost>
            </PlanCard>

            <PlanCard>
              <PlanIcon>🎨</PlanIcon>
              <PlanTitle>Fassade & Fenster erneuern</PlanTitle>
              <PlanDescription>
                Putz erneuern, professionell streichen, neue Fenster einbauen,
                SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für
                maximale Sichtbarkeit.
              </PlanDescription>
              <PlanCost>~15.000 €</PlanCost>
            </PlanCard>

            <PlanCard>
              <PlanIcon>🧺</PlanIcon>
              <PlanTitle>Waschküche modernisieren</PlanTitle>
              <PlanDescription>
                Die vorhandenen Geräte durch moderne, energieeffiziente
                Waschmaschine und Trockner ersetzen für eine optimale Pflege der
                Sportkleidung.
              </PlanDescription>
              <PlanCost>~5.000 €</PlanCost>
            </PlanCard>
          </PlansGrid>
        </RenovationPlansSection>

        <SponsorshipSection>
          <SponsorshipTitle>
            🤝 Werden Sie Renovierungs-Partner!
          </SponsorshipTitle>
          <SponsorshipText>
            Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche
            Vorteile, sondern auch prominent sichtbare Anerkennung direkt an
            unserem Sportplatz!
          </SponsorshipText>

          <SponsorshipBenefits>
            <BenefitCard>
              <BenefitIcon>🏆</BenefitIcon>
              <BenefitText>
                <strong>Namensschild an der Fassade:</strong> Ihr Firmenname
                wird dauerhaft und gut sichtbar an der renovierten Außenfassade
                angebracht
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>📄</BenefitIcon>
              <BenefitText>
                <strong>Spendenquittung:</strong> Alle Spenden sind steuerlich
                absetzbar - wir stellen Ihnen gerne eine Quittung aus
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>📱</BenefitIcon>
              <BenefitText>
                <strong>Social Media Dank:</strong> Wir danken Ihnen öffentlich
                auf unseren Kanälen mit über 4.000 Followern
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>🎯</BenefitIcon>
              <BenefitText>
                <strong>Maximale Sichtbarkeit:</strong> Die Fassade liegt direkt
                am Eingang - jeder Besucher sieht Ihren Namen
              </BenefitText>
            </BenefitCard>
          </SponsorshipBenefits>
        </SponsorshipSection>

        <DonationSection>
          <DonationTitle>🤝 Gemeinsam für den Fürstenberg</DonationTitle>
          <DonationText>
            Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ -
            gemeinsam können wir unserem Kultplatz das geben, was er verdient.
          </DonationText>

          <DonationTracker realTime={true} />

          <DonationButtons>
            <DonationButton
              className="primary"
              href="https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW"
              target="_blank"
              rel="noopener noreferrer"
            >
              💳 Mit PayPal spenden
            </DonationButton>
            <DonationButton href="#" onClick={handleBankClick}>
              🏦 Per Überweisung spenden
            </DonationButton>
          </DonationButtons>
        </DonationSection>
      </Content>

      <Footer />

      {showBankModal && (
        <Modal onClick={() => setShowBankModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Kontoverbindung für Spenden</ModalTitle>
              <CloseButton onClick={() => setShowBankModal(false)}>
                ×
              </CloseButton>
            </ModalHeader>

            <BankDetails>
              <BankRow>
                <BankLabel>Kontoinhaber:</BankLabel>
                <BankValue>SC Konstanz-Wollmatingen</BankValue>
              </BankRow>
              <BankRow>
                <BankLabel>IBAN:</BankLabel>
                <BankValue>DE12 6905 0001 0000 0228 06</BankValue>
              </BankRow>
              <BankRow>
                <BankLabel>BIC:</BankLabel>
                <BankValue>SOLADES1KNZ</BankValue>
              </BankRow>
            </BankDetails>

            <CopyButton onClick={handleCopyIBAN}>📋 IBAN kopieren</CopyButton>

            <ModalNote>
              Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen
            </ModalNote>
          </ModalContent>
        </Modal>
      )}

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
