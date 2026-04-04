import { useEffect, useState, useMemo } from "react";
import styled, { css, keyframes } from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { getHeroImage } from "../utils/imageLoader";
import { club500Config } from "../data/club500Data";
import Footer from "../components/Footer";

// ---------------------------------------------------------------------------
// Hero (same pattern as SponsoringV2Page)
// ---------------------------------------------------------------------------

const Hero = styled.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`;

const HeroSlide = styled.div<{ $bg: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  background: url(${({ $bg }) => $bg}) center/cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroLogo = styled.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`;

const HeroSub = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`;

const HeroCTA = styled.a`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #e10073;
  font-weight: 800;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
  }
`;

// ---------------------------------------------------------------------------
// Content Sections (matching SponsoringV2Page pattern)
// ---------------------------------------------------------------------------

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;


const Section = styled.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const SectionAlt = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`;

// -- Benefits --

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`;

const BenefitIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const BenefitText = styled.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`;

// -- Form Elements --

const FieldLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`;

const MembershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MembershipCard = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  border: 2px solid ${({ $active }) => ($active ? "#e10073" : "#e5e7eb")};
  background: ${({ $active }) => ($active ? "#fff0f6" : "#fff")};
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`;

const MembershipPrice = styled.div<{ $active: boolean }>`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({ $active }) => ($active ? "#e10073" : "#222")};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`;

const MembershipDuration = styled.div<{ $active: boolean }>`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#e10073" : "#555")};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`;

const MembershipDesc = styled.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`;

const CustomCard = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 2px solid ${({ $active }) => ($active ? "#e10073" : "#e5e7eb")};
  background: ${({ $active }) => ($active ? "#fff0f6" : "#fff")};
  margin-bottom: 1.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
  }
`;

const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`;

const CustomRadio = styled.div<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? "#e10073" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? "#e10073" : "transparent")};
  }
`;

const CustomFields = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`;

const DurationRadioRow = styled.div`
  display: flex;
  gap: 0.35rem;
`;

const DurationBtn = styled.button<{ $active: boolean }>`
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1.5px solid ${({ $active }) => ($active ? "#e10073" : "#e5e7eb")};
  background: ${({ $active }) => ($active ? "#fff0f6" : "#fff")};
  color: ${({ $active }) => ($active ? "#e10073" : "#555")};
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: #e10073;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.12);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const CustomHint = styled.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`;


// -- Spendentafel --

const ToggleGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const RadioRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ToggleBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.65rem 0.5rem;
  border-radius: 8px;
  border: 1.5px solid ${({ $active }) => ($active ? "#e10073" : "#e5e7eb")};
  background: ${({ $active }) => ($active ? "#fff0f6" : "#fff")};
  color: ${({ $active }) => ($active ? "#e10073" : "#555")};
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #e10073;
  }
`;

const ToggleSublabel = styled.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

// -- Bescheinigung --

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  line-height: 1.4;

  input {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    accent-color: #e10073;
    flex-shrink: 0;
  }
`;

const BescheinigungHinweis = styled.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`;

const slideDown = keyframes`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`;

const slideUp = keyframes`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`;

const MiniForm = styled.div<{ $visible: boolean }>`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ $visible }) =>
    $visible
      ? css`animation: ${slideDown} 0.3s ease forwards;`
      : css`animation: ${slideUp} 0.2s ease forwards; pointer-events: none;`}
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const BescheinigungSection = styled.div`
  margin-bottom: 1.75rem;
`;

// -- CTAs --

const CTARow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PaypalCTA = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.35);
  }
`;

const BankCTA = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  color: #e10073;
  border: 2px solid #e10073;
  box-shadow: 0 4px 12px rgba(225, 0, 115, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.2);
    background: #fff0f6;
  }
`;

const CTAAmount = styled.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`;

// -- Modal --

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: #f0f0f0; }
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`;

const ModalHint = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`;

const QRWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`;

const ModalBankRow = styled.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`;

const ModalEmailHint = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatEuro(n: number): string {
  return n.toLocaleString("de-DE", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 2,
  });
}

function buildEpcPayload(
  name: string, iban: string, bic: string,
  amount: number, verwendungszweck: string,
): string {
  return ["BCD","002","1","SCT",bic,name,iban,
    `EUR${amount.toFixed(2)}`,"","",verwendungszweck].join("\n");
}

const HERO_IMAGES = [
  getHeroImage("herren/herren_club500_1"),
  getHeroImage("herren/herren_club500_4"),
  getHeroImage("herren/herren_club500_2"),
  getHeroImage("herren/herren_club500_3"),
  getHeroImage("herren/herren_club500_5"),
].filter(Boolean);

const DURATION_OPTIONS = ["1 Jahr", "2 Jahre", "3 Jahre"];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Club500Page() {
  const cfg = club500Config;

  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customMode, setCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const [customDuration, setCustomDuration] = useState("1 Jahr");

  const [onTafel, setOnTafel] = useState(true);
  const [tafelName, setTafelName] = useState("");

  const [wantBescheinigung, setWantBescheinigung] = useState(true);
  const [bForm, setBForm] = useState({ vorname: "", nachname: "", email: "", strasse: "", plz: "", ort: "" });

  const [showQrModal, setShowQrModal] = useState(false);

  const baseAmount = useMemo(() => {
    if (customMode) {
      const parsed = parseFloat(customValue.replace(",", "."));
      return isNaN(parsed) || parsed < cfg.customAmount.minAmount ? 0 : parsed;
    }
    return cfg.memberships[selectedIdx]?.value ?? 0;
  }, [customMode, customValue, selectedIdx, cfg.memberships, cfg.customAmount.minAmount]);

  const selectedDuration = useMemo(() => {
    if (customMode) return customDuration;
    return cfg.memberships[selectedIdx]?.duration ?? "";
  }, [customMode, customDuration, selectedIdx, cfg.memberships]);

  const verwendungszweck = useMemo(() => {
    const parts = [cfg.verwendungszweck];
    if (selectedDuration) parts.push(selectedDuration);
    if (onTafel && tafelName.trim()) parts.push(`Tafel: ${tafelName.trim()}`);
    if (!onTafel) parts.push("Anonym");
    return parts.join(" | ");
  }, [cfg.verwendungszweck, selectedDuration, onTafel, tafelName]);

  const paypalHref = useMemo(() => {
    if (baseAmount <= 0) return "#";
    return `${cfg.paypalMeUrl}/${baseAmount}EUR`;
  }, [baseAmount, cfg.paypalMeUrl]);

  const epcPayload = useMemo(() =>
    buildEpcPayload(cfg.bankDetails.kontoinhaber, cfg.bankDetails.ibanClean,
      cfg.bankDetails.bic, baseAmount, verwendungszweck),
    [cfg.bankDetails.kontoinhaber, cfg.bankDetails.ibanClean, cfg.bankDetails.bic, baseAmount, verwendungszweck]);

  const updateBForm = (f: string, v: string) => setBForm((p) => ({ ...p, [f]: v }));

  return (
    <>
      {/* ===== Hero ===== */}
      <Hero>
        {HERO_IMAGES.map((src, i) => (
          <HeroSlide key={i} $bg={src} $active={i === heroIdx} />
        ))}
        <HeroOverlay />
        <HeroContent>
          <HeroLogo src={cfg.heroImage} alt="Club 500" />
          <HeroTitle>{cfg.heroTitle}</HeroTitle>
          <HeroSub>{cfg.subtitle}</HeroSub>
          <HeroCTA
            href="#mitglied-werden"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("mitglied-werden")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Jetzt Mitglied werden
          </HeroCTA>
        </HeroContent>
      </Hero>

      {/* ===== Benefits ===== */}
      <Section>
        <Container>
          <SectionTitle>Ihre Vorteile</SectionTitle>
          <SectionSubtitle>
            Als Mitglied im CLUB 500 unterstützen Sie direkt den Jugend- und
            Amateurfußball in Konstanz.
          </SectionSubtitle>
          <BenefitGrid>
            {cfg.benefits.map((b, i) => (
              <BenefitCard key={i}>
                <BenefitIcon>{b.icon}</BenefitIcon>
                <BenefitText dangerouslySetInnerHTML={{ __html: b.text }} />
              </BenefitCard>
            ))}
          </BenefitGrid>
        </Container>
      </Section>

      {/* ===== Form ===== */}
      <SectionAlt id="mitglied-werden">
        <Container>
          <SectionTitle>Mitglied werden</SectionTitle>
          <SectionSubtitle>
            Wählen Sie Ihre Unterstützung und werden Sie Teil des CLUB 500.
          </SectionSubtitle>

          {/* Membership options */}
          <FieldLabel>{cfg.sectionTitle}</FieldLabel>
          <MembershipGrid>
            {cfg.memberships.map((m, i) => (
              <MembershipCard
                key={m.value}
                $active={!customMode && selectedIdx === i}
                onClick={() => { setCustomMode(false); setSelectedIdx(i); }}
                type="button"
              >
                <MembershipPrice $active={!customMode && selectedIdx === i}>
                  {m.label}
                </MembershipPrice>
                <MembershipDuration $active={!customMode && selectedIdx === i}>
                  {m.duration}
                </MembershipDuration>
                <MembershipDesc>{m.description}</MembershipDesc>
              </MembershipCard>
            ))}
          </MembershipGrid>

          <CustomCard $active={customMode} onClick={() => { if (!customMode) setCustomMode(true); }}>
            <CustomHeader>
              <CustomRadio $active={customMode} />
              {cfg.customAmount.label}
            </CustomHeader>
            {customMode && (
              <CustomFields onClick={(e) => e.stopPropagation()}>
                <Input
                  type="text" inputMode="decimal"
                  placeholder="Betrag in EUR"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  autoFocus
                />
                <DurationRadioRow>
                  {DURATION_OPTIONS.map((d) => (
                    <DurationBtn key={d} $active={customDuration === d}
                      onClick={() => setCustomDuration(d)} type="button">
                      {d}
                    </DurationBtn>
                  ))}
                </DurationRadioRow>
              </CustomFields>
            )}
            {customMode && <CustomHint>{cfg.customAmount.minHint}</CustomHint>}
          </CustomCard>

          {/* Spendentafel */}
          <ToggleGroup>
            <FieldLabel>Veröffentlichung</FieldLabel>
            <RadioRow>
              <ToggleBtn $active={onTafel} onClick={() => setOnTafel(true)} type="button">
                {cfg.spendentafel.label}
              </ToggleBtn>
              <ToggleBtn $active={!onTafel} onClick={() => setOnTafel(false)} type="button">
                {cfg.spendentafel.anonymLabel}
              </ToggleBtn>
            </RadioRow>
            {onTafel && (
              <>
                <ToggleSublabel>{cfg.spendentafel.sublabel}</ToggleSublabel>
                <Input
                  type="text"
                  placeholder={cfg.spendentafel.nameFieldPlaceholder}
                  value={tafelName}
                  onChange={(e) => setTafelName(e.target.value)}
                />
              </>
            )}
          </ToggleGroup>

          {/* Bescheinigung */}
          <BescheinigungSection>
            <CheckboxLabel>
              <input type="checkbox" checked={wantBescheinigung}
                onChange={(e) => setWantBescheinigung(e.target.checked)} />
              <span>{cfg.bescheinigung.label}</span>
            </CheckboxLabel>
            <BescheinigungHinweis>{cfg.bescheinigung.hinweis}</BescheinigungHinweis>

            <MiniForm $visible={wantBescheinigung}>
              <FormRow>
                <Input type="text" placeholder={cfg.bescheinigung.fields.vorname}
                  value={bForm.vorname} onChange={(e) => updateBForm("vorname", e.target.value)} />
                <Input type="text" placeholder={cfg.bescheinigung.fields.nachname}
                  value={bForm.nachname} onChange={(e) => updateBForm("nachname", e.target.value)} />
              </FormRow>
              <Input type="email" placeholder={cfg.bescheinigung.fields.email}
                value={bForm.email} onChange={(e) => updateBForm("email", e.target.value)} />
              <Input type="text" placeholder={cfg.bescheinigung.fields.strasse}
                value={bForm.strasse} onChange={(e) => updateBForm("strasse", e.target.value)} />
              <FormRow>
                <Input type="text" placeholder={cfg.bescheinigung.fields.plz}
                  value={bForm.plz} onChange={(e) => updateBForm("plz", e.target.value)} />
                <Input type="text" placeholder={cfg.bescheinigung.fields.ort}
                  value={bForm.ort} onChange={(e) => updateBForm("ort", e.target.value)} />
              </FormRow>
            </MiniForm>
          </BescheinigungSection>

          {/* CTAs */}
          <CTARow>
            <PaypalCTA href={paypalHref} target="_blank" rel="noopener noreferrer">
              {cfg.paypalCtaLabel}
              <CTAAmount>{formatEuro(baseAmount)} €</CTAAmount>
            </PaypalCTA>
            <BankCTA type="button" onClick={() => setShowQrModal(true)}>
              {cfg.bankCtaLabel}
              <CTAAmount>{formatEuro(baseAmount)} €</CTAAmount>
            </BankCTA>
          </CTARow>

        </Container>
      </SectionAlt>

      <Footer />

      {/* ===== QR Modal ===== */}
      {showQrModal && (
        <ModalBackdrop onClick={() => setShowQrModal(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <ModalClose onClick={() => setShowQrModal(false)}>×</ModalClose>
            <ModalTitle>Überweisung per QR-Code</ModalTitle>
            <ModalHint>
              Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse,
              VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt.
            </ModalHint>
            {baseAmount > 0 && (
              <QRWrap><QRCodeSVG value={epcPayload} size={220} level="M" /></QRWrap>
            )}
            <ModalBankRow><strong>{cfg.bankDetails.kontoinhaber}</strong></ModalBankRow>
            <ModalBankRow>IBAN: <strong>{cfg.bankDetails.iban}</strong></ModalBankRow>
            <ModalBankRow>
              Betrag: <strong>{formatEuro(baseAmount)} €</strong>
              {selectedDuration && <> · <strong>{selectedDuration}</strong></>}
            </ModalBankRow>
            <ModalBankRow>Verwendungszweck: <strong>{verwendungszweck}</strong></ModalBankRow>
            <ModalBankRow style={{ fontSize: "0.8rem", color: "#888" }}>
              {cfg.bankDetails.bank} · {cfg.bankDetails.adresse}
            </ModalBankRow>
            {wantBescheinigung && bForm.email && (
              <ModalEmailHint>
                Wir senden Ihre Spendenbescheinigung an <strong>{bForm.email}</strong>.
              </ModalEmailHint>
            )}
          </ModalBox>
        </ModalBackdrop>
      )}
    </>
  );
}
