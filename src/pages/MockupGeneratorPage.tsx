import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { toPng } from "html-to-image";
import { mockupTemplates, type MockupZone } from "../data/mockupTemplates";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ZoneLogo {
  zoneId: string;
  dataUrl: string;
  scale: number;
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

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`;

const TemplateImage = styled.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`;

const ZoneOverlay = styled.div<{ $active: boolean; $hasLogo: boolean }>`
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    background: ${(p) => (p.$hasLogo ? "transparent" : "rgba(59,130,246,0.08)")};
  }
`;

const LogoInZone = styled.img<{ $scale: number }>`
  width: ${(p) => p.$scale * 100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
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

const ScaleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ScaleLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`;

const ScaleSlider = styled.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
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

const DownloadBtn = styled.button`
  width: 100%;
  padding: 0.7rem;
  margin-top: 0.5rem;
  background: #1a365d;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2d5a87;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function MockupGeneratorPage() {
  const [templateId, setTemplateId] = useState(mockupTemplates[0].id);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [logos, setLogos] = useState<ZoneLogo[]>([]);
  const [downloading, setDownloading] = useState(false);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const template = mockupTemplates.find((t) => t.id === templateId) ?? mockupTemplates[0];

  const getLogoEntry = (zoneId: string) =>
    logos.find((l) => l.zoneId === zoneId);

  const handleFileChange = useCallback(
    (zoneId: string, file: File | undefined) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setLogos((prev) => [
          ...prev.filter((l) => l.zoneId !== zoneId),
          { zoneId, dataUrl, scale: 1 },
        ]);
      };
      reader.readAsDataURL(file);
    },
    [],
  );

  const setLogoScale = useCallback((zoneId: string, scale: number) => {
    setLogos((prev) =>
      prev.map((l) => (l.zoneId === zoneId ? { ...l, scale } : l)),
    );
  }, []);

  const removeLogo = useCallback((zoneId: string) => {
    setLogos((prev) => prev.filter((l) => l.zoneId !== zoneId));
  }, []);

  const resetAll = useCallback(() => {
    setLogos([]);
    setActiveZone(null);
  }, []);

  const handleDownload = useCallback(async () => {
    if (!imageContainerRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(imageContainerRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `${template.label}-mockup.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }, [template.label]);

  const handleZoneClick = (zone: MockupZone) => {
    setActiveZone(zone.id);
    const entry = getLogoEntry(zone.id);
    if (!entry) {
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
            <ImageContainer ref={imageContainerRef}>
              <TemplateImage
                src={template.image}
                alt={template.label}
                draggable={false}
              />
              {template.zones.map((zone) => {
                const entry = getLogoEntry(zone.id);
                return (
                  <ZoneOverlay
                    key={zone.id}
                    $active={activeZone === zone.id}
                    $hasLogo={!!entry}
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
                    {entry && (
                      <LogoInZone
                        src={entry.dataUrl}
                        alt="Logo"
                        draggable={false}
                        $scale={entry.scale}
                      />
                    )}
                  </ZoneOverlay>
                );
              })}
            </ImageContainer>
          </CanvasArea>

          <Sidebar>
            <SidebarTitle>Werbeflächen</SidebarTitle>
            {template.zones.map((zone) => {
              const entry = getLogoEntry(zone.id);
              return (
                <ZoneCard
                  key={zone.id}
                  $active={activeZone === zone.id}
                  onClick={() => setActiveZone(zone.id)}
                >
                  <ZoneCardLabel>{zone.label}</ZoneCardLabel>
                  <ZoneCardActions>
                    <UploadBtn htmlFor={`file-${zone.id}`}>
                      {entry ? "Ändern" : "Logo hochladen"}
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
                    {entry && (
                      <RemoveBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLogo(zone.id);
                        }}
                      >
                        Entfernen
                      </RemoveBtn>
                    )}
                    {entry && <LogoPreview src={entry.dataUrl} alt="Vorschau" />}
                  </ZoneCardActions>
                  {entry && (
                    <ScaleRow>
                      <ScaleLabel>{Math.round(entry.scale * 100)}%</ScaleLabel>
                      <ScaleSlider
                        type="range"
                        min="0.3"
                        max="3"
                        step="0.05"
                        value={entry.scale}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          e.stopPropagation();
                          setLogoScale(zone.id, parseFloat(e.target.value));
                        }}
                      />
                    </ScaleRow>
                  )}
                  {!entry && (
                    <Hint>Klicken oder Bild hierher ziehen</Hint>
                  )}
                </ZoneCard>
              );
            })}
            {logos.length > 0 && (
              <>
                <DownloadBtn onClick={handleDownload} disabled={downloading}>
                  {downloading ? "Wird erstellt..." : "Bild herunterladen"}
                </DownloadBtn>
                <ResetAllBtn onClick={resetAll}>Alle Logos entfernen</ResetAllBtn>
              </>
            )}
          </Sidebar>
        </Layout>
      </Container>
    </Page>
  );
}
