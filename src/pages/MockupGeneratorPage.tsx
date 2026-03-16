import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import { mockupTemplates, type MockupZone } from "../data/mockupTemplates";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ZoneLogo {
  zoneId: string;
  dataUrl: string;
}

// ---------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------

const Page = styled.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const TemplateSelect = styled.select`
  display: block;
  margin: 0 auto 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  color: #1a365d;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CanvasArea = styled.div`
  flex: 1;
  min-width: 0;
`;

const ZoomWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
  cursor: grab;
  &:active { cursor: grabbing; }
`;

const ImageContainer = styled.div`
  position: relative;
  transform-origin: 0 0;
`;

const TemplateImage = styled.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`;

const ZoomControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.75rem;
`;

const ZoomBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a365d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  &:hover { background: #f3f4f6; }
`;

const ZoomLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  min-width: 48px;
  text-align: center;
`;

const ZoneOverlay = styled.div<{ $active: boolean; $hasLogo: boolean }>`
  position: absolute;
  border: 2px dashed
    ${(p) => (p.$active ? "#3b82f6" : p.$hasLogo ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.6)")};
  background: ${(p) =>
    p.$active
      ? "rgba(59,130,246,0.15)"
      : p.$hasLogo
        ? "transparent"
        : "rgba(255,255,255,0.05)"};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-color: #3b82f6;
    background: ${(p) => (p.$hasLogo ? "rgba(59,130,246,0.08)" : "rgba(59,130,246,0.12)")};
  }
`;

const ZoneLabel = styled.span`
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  text-align: center;
  padding: 4px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const LogoInZone = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4%;
`;

const Sidebar = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`;

const ZoneCard = styled.div<{ $active: boolean }>`
  background: #fff;
  border: 2px solid ${(p) => (p.$active ? "#3b82f6" : "#e5e7eb")};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`;

const ZoneCardLabel = styled.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`;

const ZoneCardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const UploadBtn = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  background: #3b82f6;
  color: #fff;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

const RemoveBtn = styled.button`
  padding: 0.4rem 0.8rem;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #fecaca;
  }
`;

const LogoPreview = styled.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Hint = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`;

const ResetAllBtn = styled.button`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.5rem;
  background: #f3f4f6;
  color: #666;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
    color: #333;
  }
`;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

export default function MockupGeneratorPage() {
  const [templateId, setTemplateId] = useState(mockupTemplates[0].id);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [logos, setLogos] = useState<ZoneLogo[]>([]);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const template = mockupTemplates.find((t) => t.id === templateId) ?? mockupTemplates[0];

  const clampPan = useCallback((x: number, y: number, z: number) => {
    if (z <= 1) return { x: 0, y: 0 };
    const wrapper = wrapperRef.current;
    if (!wrapper) return { x, y };
    const ww = wrapper.clientWidth;
    const wh = wrapper.clientHeight;
    const maxX = (ww * z - ww) / z;
    const maxY = (wh * z - wh) / z;
    return {
      x: Math.max(-maxX, Math.min(0, x)),
      y: Math.max(-maxY, Math.min(0, y)),
    };
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) => {
      const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev - e.deltaY * 0.002));
      setPan((p) => clampPan(p.x, p.y, next));
      return next;
    });
  }, [clampPan]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("[data-zone]")) return;
    isPanning.current = true;
    panStart.current = { x: e.clientX, y: e.clientY };
    panOffset.current = { ...pan };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, [pan]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return;
    const dx = (e.clientX - panStart.current.x) / zoom;
    const dy = (e.clientY - panStart.current.y) / zoom;
    setPan(clampPan(panOffset.current.x + dx, panOffset.current.y + dy, zoom));
  }, [zoom, clampPan]);

  const handlePointerUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const prevent = (e: WheelEvent) => e.preventDefault();
    wrapper.addEventListener("wheel", prevent, { passive: false });
    return () => wrapper.removeEventListener("wheel", prevent);
  }, []);

  const getLogoForZone = (zoneId: string) =>
    logos.find((l) => l.zoneId === zoneId)?.dataUrl;

  const handleFileChange = useCallback(
    (zoneId: string, file: File | undefined) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setLogos((prev) => [
          ...prev.filter((l) => l.zoneId !== zoneId),
          { zoneId, dataUrl },
        ]);
      };
      reader.readAsDataURL(file);
    },
    [],
  );

  const removeLogo = useCallback((zoneId: string) => {
    setLogos((prev) => prev.filter((l) => l.zoneId !== zoneId));
  }, []);

  const resetAll = useCallback(() => {
    setLogos([]);
    setActiveZone(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const handleZoneClick = (zone: MockupZone) => {
    setActiveZone(zone.id);
    const logo = getLogoForZone(zone.id);
    if (!logo) {
      fileInputRefs.current[zone.id]?.click();
    }
  };

  return (
    <Page>
      <Container>
        <Header>
          <Title>Mockup Generator</Title>
          <Subtitle>
            Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren
            Werbeflächen aussieht.
          </Subtitle>
        </Header>

        {mockupTemplates.length > 1 && (
          <TemplateSelect
            value={templateId}
            onChange={(e) => {
              setTemplateId(e.target.value);
              setLogos([]);
              setActiveZone(null);
            }}
          >
            {mockupTemplates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </TemplateSelect>
        )}

        <Layout>
          <CanvasArea>
            <ZoomWrapper
              ref={wrapperRef}
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <ImageContainer
                style={{
                  transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                }}
              >
                <TemplateImage
                  src={template.image}
                  alt={template.label}
                  draggable={false}
                />
                {template.zones.map((zone) => {
                  const logo = getLogoForZone(zone.id);
                  return (
                    <ZoneOverlay
                      key={zone.id}
                      data-zone="true"
                      $active={activeZone === zone.id}
                      $hasLogo={!!logo}
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        width: `${zone.width}%`,
                        height: `${zone.height}%`,
                      }}
                      onClick={() => handleZoneClick(zone)}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setActiveZone(zone.id);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files?.[0];
                        handleFileChange(zone.id, file);
                      }}
                    >
                      {logo ? (
                        <LogoInZone src={logo} alt="Logo" draggable={false} />
                      ) : (
                        <ZoneLabel>{zone.label}</ZoneLabel>
                      )}
                    </ZoneOverlay>
                  );
                })}
              </ImageContainer>
            </ZoomWrapper>
            <ZoomControls>
              <ZoomBtn onClick={() => {
                setZoom((z) => {
                  const next = Math.max(MIN_ZOOM, z - ZOOM_STEP);
                  setPan((p) => clampPan(p.x, p.y, next));
                  return next;
                });
              }}>-</ZoomBtn>
              <ZoomLabel>{Math.round(zoom * 100)}%</ZoomLabel>
              <ZoomBtn onClick={() => {
                setZoom((z) => {
                  const next = Math.min(MAX_ZOOM, z + ZOOM_STEP);
                  return next;
                });
              }}>+</ZoomBtn>
              {zoom !== 1 && (
                <ZoomBtn onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
                  style={{ fontSize: "0.75rem", width: "auto", padding: "0 8px" }}
                >Reset</ZoomBtn>
              )}
            </ZoomControls>
          </CanvasArea>

          <Sidebar>
            <SidebarTitle>Werbeflächen</SidebarTitle>
            {template.zones.map((zone) => {
              const logo = getLogoForZone(zone.id);
              return (
                <ZoneCard
                  key={zone.id}
                  $active={activeZone === zone.id}
                  onClick={() => setActiveZone(zone.id)}
                >
                  <ZoneCardLabel>{zone.label}</ZoneCardLabel>
                  <ZoneCardActions>
                    <UploadBtn htmlFor={`file-${zone.id}`}>
                      {logo ? "Ändern" : "Logo hochladen"}
                    </UploadBtn>
                    <HiddenInput
                      id={`file-${zone.id}`}
                      ref={(el) => {
                        fileInputRefs.current[zone.id] = el;
                      }}
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange(zone.id, e.target.files?.[0])
                      }
                    />
                    {logo && (
                      <RemoveBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLogo(zone.id);
                        }}
                      >
                        Entfernen
                      </RemoveBtn>
                    )}
                    {logo && <LogoPreview src={logo} alt="Vorschau" />}
                  </ZoneCardActions>
                  {!logo && (
                    <Hint>Klicken oder Bild hierher ziehen</Hint>
                  )}
                </ZoneCard>
              );
            })}
            {logos.length > 0 && (
              <ResetAllBtn onClick={resetAll}>Alle Logos entfernen</ResetAllBtn>
            )}
          </Sidebar>
        </Layout>
      </Container>
    </Page>
  );
}
