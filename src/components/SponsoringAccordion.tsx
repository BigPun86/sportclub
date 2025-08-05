import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.bgMuted};
  border: 1px solid ${(p) => p.theme.colors.border};
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${(props) =>
    props.isOpen ? props.theme.colors.bg : props.theme.colors.bgMuted};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: ${(p) => p.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background: ${(p) => p.theme.colors.bg};
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`;

const AccordionIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${(p) => p.theme.colors.primary};
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  background: ${(p) => p.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
`;

const AccordionBody = styled.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: ${(p) => p.theme.colors.text};
  text-align: left;

  b {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`;

const InfoIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`;

interface AccordionItemData {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

const accordionData: AccordionItemData[] = [
  {
    id: "social-media",
    title: "Social Media Stufen Erklärung",
    icon: "📱",
    content: (
      <>
        <b>Prominent:</b> Begrüßungspost + Logo bei allen Posts/Reels (Vor- &
        Nachbericht, Stories) mit größter Fläche
        <br />
        <br />
        <b>Erweitert:</b> Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit
        kleinerer Fläche
        <br />
        <br />
        <b>Basis:</b> Begrüßungspost + 2 zusätzliche Posts pro Jahr
      </>
    ),
  },
  {
    id: "website",
    title: "Website Stufen Erklärung",
    icon: "🌐",
    content: (
      <>
        <b>Startseite Premium:</b> Logo prominent auf der Startseite mit größter
        Fläche (Haupt-, Co-, Stadionpartner)
        <br />
        <br />
        <b>Startseite Erweitert:</b> Logo auf der Startseite mit kleinerer
        Fläche (Premium-Partner)
        <br />
        <br />
        <b>Startseite Basis:</b> Logo auf der Startseite mit kleinster Fläche
        (Community-Partner)
        <br />
        <br />
        <b>Sponsoren-Seite:</b> Auflistung auf separater Sponsoren-Seite
        (Bandenwerbung & weitere)
        <br />
        <br />
        <b>Dankesliste:</b> Namentliche Erwähnung auf separater
        Spender-Dankesliste (Platz-Renovierung)
      </>
    ),
  },
  {
    id: "banner-info",
    title: "Wichtige Hinweise zu Banden & Bannern",
    icon: "ℹ️",
    content: (
      <>
        Die Banden und Banner gehen in das Eigentum des Sponsors über. Die
        Material- und Herstellungskosten für Banden/Banner sind im
        Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir
        kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen
        sich um nichts kümmern!
      </>
    ),
  },
];

export default function SponsoringAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <AccordionContainer>
      {accordionData.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <AccordionItem key={item.id}>
            <AccordionHeader
              isOpen={isOpen}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span>
                <InfoIcon>{item.icon}</InfoIcon>
                {item.title}
              </span>
              <AccordionIcon isOpen={isOpen}>▼</AccordionIcon>
            </AccordionHeader>
            <AccordionContent
              isOpen={isOpen}
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
            >
              <AccordionBody>{item.content}</AccordionBody>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
}
