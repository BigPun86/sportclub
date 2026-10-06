import styled, { css, keyframes } from "styled-components";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { brand } from "../theme";
import { Container, SectionHeader } from "./ui";
import { buttonStyles, type ButtonVariant } from "./buttonStyles";
import { exklusivPakete, werbeflaechenALaCarte } from "../data/sponsoringData";

// Wide shots of the Fürstenberg-Sportplatz with a camera move onto the ad
// space and the visitor's name drawn in. Overlay coordinates use the photo's
// own pixel grid (929 x 1239). A higher-resolution original with the same
// framing can replace the file without touching these numbers.

const PHOTO_W = 929;
const PHOTO_H = 1239;
const MAX_LEN = 28;

interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface View {
  id: string;
  tab: string;
  image: string;
  place: string;
  wide: Frame;
  zoom: Frame;
  // tighter frame for narrow screens, where the photo is not upscaled
  zoomSmall: Frame;
  marker: Frame;
  overlay: (name: string) => ReactNode;
  product: {
    title: string;
    detail: string;
    interest: string;
    action: string;
  } | null;
}

const stadion = exklusivPakete.find((p) => p.id === "stadionname");
const doppelbande =
  werbeflaechenALaCarte.find((f) => f.name === "Doppelbande") ??
  werbeflaechenALaCarte[0];

const VIEWS: View[] = [
  {
    id: "tribuene",
    tab: "Haupttribüne",
    image: "/stadion/fuerstenberg-tribuene.jpg",
    place: "auf dem Dach der Haupttribüne",
    wide: { x: 0, y: 0.3, w: 1, h: 0.33 },
    zoom: { x: 0.22, y: 0.4, w: 0.56, h: 0.12 },
    zoomSmall: { x: 0.34, y: 0.41, w: 0.32, h: 0.08 },
    marker: { x: 326, y: 547, w: 286, h: 25 },
    overlay: (name) => (
      <>
        <polygon
          points="332,553 606,553 606,567 332,567"
          fill="#dddbd2"
          stroke="#2a2f38"
          strokeWidth="0.8"
        />
        <FitText
          x={469}
          y={560.5}
          maxWidth={258}
          size={10.5}
          text={`${name} STADION`}
        />
      </>
    ),
    product:
      stadion && !stadion.vergeben
        ? {
            title: "Stadionname-Partner",
            detail: `Ihr Name für das Stadion, ${stadion.preis} pro Saison`,
            interest: stadion.name,
            action: "Stadionname anfragen",
          }
        : null,
  },
  {
    id: "gegengerade",
    tab: "Gegengerade",
    image: "/stadion/fuerstenberg-gegengerade.jpg",
    place: "an einer freien Stelle der Bandenreihe",
    wide: { x: 0, y: 0.4, w: 1, h: 0.26 },
    zoom: { x: 0.29, y: 0.49, w: 0.58, h: 0.1 },
    zoomSmall: { x: 0.44, y: 0.505, w: 0.3, h: 0.07 },
    marker: { x: 494, y: 656, w: 116, h: 29 },
    overlay: (name) => (
      <>
        <rect x="500.5" y="663.5" width="104" height="17" fill="rgba(0,0,0,0.25)" />
        <rect
          x="500"
          y="662"
          width="104"
          height="17"
          fill="#efefea"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="0.4"
        />
        <rect x="500" y="677" width="104" height="2" fill={brand.red} />
        <FitText
          x={552}
          y={669.5}
          maxWidth={94}
          size={11}
          fill={brand.navy}
          text={name}
        />
      </>
    ),
    product: {
      title: `${doppelbande.name}, ${doppelbande.groesse}`,
      detail: `${doppelbande.preis} pro Saison, noch ${doppelbande.slots} Plätze frei`,
      interest: "Bande oder Banner",
      action: "Bande anfragen",
    },
  },
];

interface Props {
  onRequest: (interest: string) => void;
}

export default function StadiumPreview({ onRequest }: Props) {
  const views = VIEWS.filter((v) => v.product);
  const [viewId, setViewId] = useState(views[0]?.id);
  const [name, setName] = useState("");
  const [zoomed, setZoomed] = useState(false);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const seen = useRef(false);
  const timer = useRef<number | undefined>(undefined);

  const view = views.find((v) => v.id === viewId) ?? views[0];
  const display = (name.trim() || "Ihr Name").toUpperCase();

  // Measure the stage so the camera frames can be computed in pixels.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // One camera move when the section first comes into view.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setZoomed(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen.current) {
          seen.current = true;
          timer.current = window.setTimeout(() => setZoomed(true), 900);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer.current);
    };
  }, []);

  if (!view || !view.product) return null;
  const product = view.product;

  const switchView = (id: string) => {
    if (id === view.id) return;
    window.clearTimeout(timer.current);
    setViewId(id);
    setZoomed(false);
    timer.current = window.setTimeout(() => setZoomed(true), 700);
  };

  const zoomFrame = stage.w < 640 ? view.zoomSmall : view.zoom;
  const t = cameraTransform(zoomed ? zoomFrame : view.wide, stage);

  return (
    <Section aria-labelledby="stadion-title" id="stadion">
      <Container>
        <SectionHeader
          id="stadion-title"
          eyebrow="Fürstenberg-Sportplatz"
          title="Ihr Name am Fürstenberg."
          lead="Tippen Sie Ihren Firmennamen ein und sehen Sie, wo er bei uns im Stadion stehen würde."
        />

        <Controls>
          <NameField>
            <label htmlFor="stadion-name">Ihr Firmenname</label>
            <input
              id="stadion-name"
              type="text"
              value={name}
              maxLength={MAX_LEN}
              placeholder="z. B. Bäckerei Muster"
              autoComplete="organization"
              onChange={(e) => {
                setName(e.target.value);
                if (!zoomed) setZoomed(true);
              }}
            />
          </NameField>
          {views.length > 1 && (
            <Tabs role="group" aria-label="Ansicht wählen">
              {views.map((v) => (
                <TabButton
                  key={v.id}
                  type="button"
                  aria-pressed={v.id === view.id}
                  onClick={() => switchView(v.id)}
                >
                  {v.tab}
                </TabButton>
              ))}
            </Tabs>
          )}
        </Controls>

        <Figure>
          <Stage ref={stageRef}>
            <World
              style={{
                transform: `translate(${t.tx}px, ${t.ty}px) scale(${t.s})`,
              }}
            >
              <img
                src={view.image}
                alt={`${view.tab} am Fürstenberg-Sportplatz, ${view.place} steht ${display}`}
                width={PHOTO_W}
                height={PHOTO_H}
              />
              <svg
                viewBox={`0 0 ${PHOTO_W} ${PHOTO_H}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {view.overlay(display)}
                <Marker
                  key={`${view.id}-${zoomed}`}
                  x={view.marker.x}
                  y={view.marker.y}
                  width={view.marker.w}
                  height={view.marker.h}
                  rx="3"
                  $hidden={zoomed}
                />
              </svg>
            </World>
            <ZoomButton
              type="button"
              onClick={() => setZoomed((z) => !z)}
              aria-pressed={zoomed}
            >
              {zoomed ? "Ganzes Stadion zeigen" : "Heranzoomen"}
            </ZoomButton>
          </Stage>

          <Caption>
            <div>
              <strong>{product.title}</strong>
              <span>{product.detail}</span>
            </div>
            <CaptionAction
              type="button"
              onClick={() => onRequest(product.interest)}
            >
              {product.action}
            </CaptionAction>
          </Caption>
        </Figure>

        <Disclaimer>
          Beispielhafte Darstellung auf echten Fotos vom Fürstenberg-Sportplatz.
          Gestaltung und Platzierung stimmen wir mit Ihnen ab.
        </Disclaimer>
      </Container>
    </Section>
  );
}

// Scale and offset that fit a frame (fractions of the photo) into the stage.
function cameraTransform(f: Frame, stage: { w: number; h: number }) {
  const { w, h } = stage;
  if (!w || !h) return { tx: 0, ty: 0, s: 1 };
  const worldH = (w * PHOTO_H) / PHOTO_W;
  const s = Math.max(1, Math.min(1 / f.w, h / (f.h * worldH)));
  const cx = (f.x + f.w / 2) * w;
  const cy = (f.y + f.h / 2) * worldH;
  const tx = Math.min(0, Math.max(w - s * w, w / 2 - s * cx));
  const ty = Math.min(0, Math.max(h - s * worldH, h / 2 - s * cy));
  return { tx, ty, s };
}

// Shrinks long names so they always fit the sign.
function FitText({
  x,
  y,
  maxWidth,
  size,
  text,
  fill = "#1d2330",
}: {
  x: number;
  y: number;
  maxWidth: number;
  size: number;
  text: string;
  fill?: string;
}) {
  const estimated = text.length * size * 0.5;
  const fontSize = estimated > maxWidth ? (size * maxWidth) / estimated : size;
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      fill={fill}
      style={{
        fontFamily: brand.fontDisplay,
        fontWeight: 800,
        fontSize,
        letterSpacing: "0.02em",
      }}
    >
      {text}
    </text>
  );
}

const Section = styled.section`
  padding: 4rem 0;
  background: #fff;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const NameField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 280px;
  max-width: 440px;

  label {
    font-weight: 700;
    font-size: 0.95rem;
    color: ${brand.ink};
    margin-bottom: 0.4rem;
  }

  input {
    height: 52px;
    padding: 0 1rem;
    border: 2px solid ${brand.navy};
    border-radius: 8px;
    font: inherit;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${brand.ink};
    background: #fff;
    color-scheme: light;
  }

  input::placeholder {
    color: #8a99ad;
    font-weight: 500;
  }

  input:focus-visible {
    outline: 3px solid ${brand.blue};
    outline-offset: 2px;
  }
`;

const Tabs = styled.div`
  display: inline-flex;
  padding: 4px;
  gap: 4px;
  background: ${brand.paper};
  border: 1px solid ${brand.line};
  border-radius: 10px;
`;

const TabButton = styled.button`
  min-height: 44px;
  padding: 0 1rem;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: ${brand.muted};
  font-family: ${brand.fontBody};
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${brand.navy};
    border-color: transparent;
  }

  &[aria-pressed="true"] {
    background: ${brand.navy};
    color: #fff;
  }
`;

const Figure = styled.figure`
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  background: ${brand.navyDeep};
  border: 1px solid ${brand.line};
`;

const Stage = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #3d4a3a;

  @media (min-width: 640px) {
    aspect-ratio: 16 / 9;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 21 / 9;
  }
`;

const World = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform-origin: 0 0;
  transition: transform 1.6s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`;

const pulse = keyframes`
  0%, 100% { stroke-opacity: 1; }
  50% { stroke-opacity: 0.25; }
`;

const Marker = styled.rect<{ $hidden: boolean }>`
  fill: none;
  stroke: #fff;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
  transition: opacity 0.4s ease;
  opacity: ${(p) => (p.$hidden ? 0 : 1)};

  ${(p) =>
    !p.$hidden &&
    css`
      animation: ${pulse} 1.1s ease-in-out 3;
    `}
`;

const ZoomButton = styled.button`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  min-height: 44px;
  padding: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  background: rgba(10, 24, 48, 0.78);
  color: #fff;
  font-family: ${brand.fontBody};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  backdrop-filter: blur(6px);

  &:hover {
    background: ${brand.navy};
    border-color: #fff;
  }

  &:focus-visible {
    outline-color: #9cc8ff;
  }
`;

const Caption = styled.figcaption`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-top: 1px solid ${brand.line};

  strong {
    display: block;
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: ${brand.navy};
  }

  span {
    color: ${brand.muted};
  }
`;

const CaptionAction = styled.button<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
  min-height: 44px;
`;

const Disclaimer = styled.p`
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: ${brand.muted};
`;
