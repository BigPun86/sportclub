/**
 * Sponsoring-Carousel für die Einbettung auf sckw.de (iframe /widget).
 *
 * Design übernommen vom echten Hero auf partner.sckw.de/sponsoring:
 * dunkler Foto-Hintergrund, dunkles Overlay, weiße 900er-Typo, weißer
 * Pill-CTA. Bewusst schlank: Schlagzeile + eine Zeile + Button.
 * Jeder Slide verlinkt auf sein eigenes Ziel und öffnet in neuem Tab.
 *
 * Barrierefreiheit:
 *  - Steuerung liegt NEBEN dem Link (nicht darin) - valides HTML
 *  - Auto-Rotation pausiert bei Hover UND Fokus, respektiert
 *    prefers-reduced-motion (dann kein automatisches Weiterschalten)
 *  - Swipe auf Touch, Chevrons + Dots (mit Trefferfläche) für Maus/Tastatur
 */

import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { getHeroImage } from "../utils/imageLoader";
import {
  partnerBase,
  widgetRotationMs,
  widgetSlides,
} from "../data/widgetSlides";

const slides = widgetSlides.filter((s) => s.active);
const SWIPE_THRESHOLD = 45; // px, ab wann eine Wischbewegung als Swipe zählt

export default function SponsoringCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // prefers-reduced-motion beobachten
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Auto-Rotation - aus bei Pause, Einzel-Slide oder Reduced-Motion
  useEffect(() => {
    if (paused || reduced || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), widgetRotationMs);
    return () => clearInterval(t);
  }, [paused, reduced, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  if (count === 0) return null;
  const slide = slides[index];
  const bg = getHeroImage(slide.image);

  return (
    <Stage
      role="group"
      aria-roledescription="Karussell"
      aria-label="Sponsoring-Angebote des SC Konstanz-Wollmatingen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Card
        href={`${partnerBase}${slide.href}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${slide.title} - ${slide.cta} (öffnet in neuem Tab)`}
        key={slide.id}
        $bg={bg}
      >
        <TopRow>
          <Logo src="/logo-transparent.avif" alt="SC Konstanz-Wollmatingen" />
          {slide.badge && <Badge>{slide.badge}</Badge>}
        </TopRow>

        <Content>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <Title>{slide.title}</Title>
          <Subline>{slide.subline}</Subline>
          <Cta>
            {slide.cta}
            <span aria-hidden>→</span>
          </Cta>
        </Content>
      </Card>

      {count > 1 && (
        <Controls>
          <Chevron onClick={() => go(index - 1)} aria-label="Vorheriges Angebot">
            ‹
          </Chevron>
          <Dots>
            {slides.map((s, i) => (
              <Dot
                key={s.id}
                $active={i === index}
                onClick={() => go(i)}
                aria-label={`Angebot ${i + 1} von ${count}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </Dots>
          <Chevron onClick={() => go(index + 1)} aria-label="Nächstes Angebot">
            ›
          </Chevron>
        </Controls>
      )}
    </Stage>
  );
}

// ============================================================================
// Styles
// ============================================================================

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
`;

const Card = styled.a<{ $bg: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 340px;
  padding: 26px 32px 58px;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  isolation: isolate;
  background: ${({ $bg }) =>
      $bg ? `url(${$bg}) center/cover no-repeat` : "#0b0b0d"};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.94) 0%,
      rgba(0, 0, 0, 0.62) 50%,
      rgba(0, 0, 0, 0.45) 100%
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 20px 20px 48px;
    border-radius: 16px;
    gap: 14px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const Logo = styled.img`
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  @media (max-width: 480px) {
    height: 36px;
  }
`;

const Badge = styled.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  background: ${theme.colors.primary};
  box-shadow: 0 4px 14px rgba(217, 36, 95, 0.45);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);

  &::before {
    content: "";
    width: 26px;
    height: 3px;
    border-radius: 3px;
    background: ${theme.colors.primary};
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.7rem, 4.5vw, 2.5rem);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.6);
  max-width: 16ch;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 8vw, 2rem);
  }
`;

const Subline = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  max-width: 42ch;

  @media (max-width: 480px) {
    font-size: 14.5px;
  }
`;

const Cta = styled.span`
  margin-top: 10px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 800;
  padding: 12px 22px;
  border-radius: 999px;
  background: #fff;
  color: ${theme.colors.primaryDark};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);

  span {
    transition: transform 0.2s ease;
  }

  ${Card}:hover & span {
    transform: translateX(4px);
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Chevron = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.32);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  /* Auf Touch-Geräten wird gewischt - Chevrons ausblenden, spart Platz */
  @media (max-width: 480px) {
    display: none;
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

// Button = 24px hohe Trefferfläche, der sichtbare Punkt/Balken wird per
// ::before zentriert gezeichnet (WCAG Zielgröße erfüllt, Optik bleibt schlank).
const Dot = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${(p) => (p.$active ? "32px" : "24px")};
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(p) => (p.$active ? "0" : "8px")};
    right: ${(p) => (p.$active ? "0" : "8px")};
    transform: translateY(-50%);
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, ${(p) => (p.$active ? "0.95" : "0.6")});
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: background 0.25s ease;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 6px;
  }
`;
