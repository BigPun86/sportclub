import styled from "styled-components";
import { useState, useEffect } from "react";
import { getGalleryImages } from "../utils/imageLoader";

export default function Gallery() {
  const grouped = getGalleryImages();
  const [lightbox, setLightbox] = useState<{
    folder: string;
    idx: number;
  } | null>(null);

  // Lightbox ESC schließen
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section>
      <h3>Bildergalerie</h3>
      {Object.entries(grouped).map(([folder, images]) => (
        <div key={folder} style={{ marginBottom: "2.5rem" }}>
          <GalleryFolderTitle>{folder.toUpperCase()}</GalleryFolderTitle>
          <GalleryGrid>
            {images.map((src, i) => (
              <GalleryImage
                src={src}
                alt={`Bild ${i + 1} aus ${folder}`}
                key={i}
                onClick={() => setLightbox({ folder, idx: i })}
                style={{ cursor: "pointer" }}
              />
            ))}
          </GalleryGrid>
          {lightbox && lightbox.folder === folder && (
            <LightboxOverlay onClick={() => setLightbox(null)}>
              <LightboxContent onClick={(e) => e.stopPropagation()}>
                <LightboxImage
                  src={images[lightbox.idx]}
                  alt={`Großansicht aus ${folder}`}
                />
                <LightboxClose
                  onClick={() => setLightbox(null)}
                  title="Schließen"
                >
                  ×
                </LightboxClose>
              </LightboxContent>
            </LightboxOverlay>
          )}
        </div>
      ))}
    </section>
  );
}

const GalleryFolderTitle = styled.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`;

const LightboxClose = styled.button`
  position: absolute;
  top: -18px;
  right: -18px;
  background: #fff;
  color: #e10073;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  &:hover {
    background: #ffe6f2;
  }
`;
