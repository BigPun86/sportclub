import { useEffect, useState, useMemo } from "react";
import styled, { css, keyframes } from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { getHeroImage } from "../utils/imageLoader";
import { club500Config } from "../data/club500Data";
import Footer from "../components/Footer";
import Foerdertafel from "../components/Foerdertafel";
import {
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeader,
} from "../components/ui";
import { buttonStyles, type ButtonVariant } from "../components/buttonStyles";
import { brand } from "../theme";

// ---------------------------------------------------------------------------
// Page frame + hero (same look as SponsoringV2Page)
// ---------------------------------------------------------------------------

const Page = styled.div`
  color-scheme: light;
  font-family: ${brand.fontBody};
  color: ${brand.ink};
  text-align: left;
  background: #fff;
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  background: ${brand.navyDeep};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: min(calc(100svh - 70px), 760px);
`;

const HeroSlide = styled.div<{ $bg: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  background: url(${({ $bg }) => $bg}) center 30% / cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1.2s ease;
`;

const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(10, 24, 48, 0.94) 0%,
      rgba(10, 24, 48, 0.78) 45%,
      rgba(10, 24, 48, 0.35) 100%
    ),
    linear-gradient(0deg, rgba(10, 24, 48, 0.95) 0%, rgba(10, 24, 48, 0) 45%);
`;

const HeroInner = styled(Container)`
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
`;

const HeroTitle = styled.h1`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6.5rem);
  line-height: 0.9;
  margin: 0;
  color: #fff;

  span {
    text-transform: none;
  }
`;

const HeroLead = styled.p`
  max-width: 36rem;
  margin: 1.5rem 0 2rem;
  font-size: clamp(1.05rem, 2.4vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

const Section = styled.section<{ $paper?: boolean }>`
  padding: 4rem 0;
  scroll-margin-top: 72px;
  background: ${({ $paper }) => ($paper ? brand.paper : "#fff")};

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

// -- Benefits --

const BenefitGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

const BenefitCard = styled.article`
  background: #fff;
  border: 1px solid ${brand.line};
  border-top: 4px solid ${brand.red};
  border-radius: 14px;
  padding: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.05;
  text-transform: uppercase;
  color: ${brand.navy};
  margin: 0 0 0.6rem;
`;

const BenefitText = styled.p`
  margin: 0;
  line-height: 1.55;
  color: ${brand.ink};
`;

// -- Fördertafel (component stays untouched, only typography via wrapper) --

const TafelWrap = styled.div`
  h2 {
    font-family: ${brand.fontDisplay};
    font-weight: 800;
    text-transform: uppercase;
    scroll-margin-top: 90px;
  }
`;

// -- Form --

const FormCard = styled.div`
  max-width: 760px;
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FieldLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${brand.ink};
  margin-bottom: 0.6rem;
`;

const GroupLabel = styled.h3`
  font-family: ${brand.fontBody};
  font-size: 1rem;
  font-weight: 700;
  color: ${brand.ink};
  margin: 0 0 0.6rem;
`;

const MembershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const selectable = css<{ $active: boolean }>`
  border: 2px solid ${({ $active }) => ($active ? brand.blue : brand.line)};
  background: ${({ $active }) => ($active ? "#eef5ff" : "#fff")};
  border-radius: 12px;
  transition: border-color 0.15s ease, background-color 0.15s ease;

  &:hover {
    border-color: ${brand.blue};
  }
`;

const MembershipCard = styled.button<{ $active: boolean }>`
  ${selectable}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1.1rem 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: ${brand.ink};
`;

const MembershipPrice = styled.span`
  font-family: ${brand.fontDisplay};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: ${brand.navy};
`;

const MembershipDuration = styled.span`
  margin-top: 0.35rem;
  font-size: 1rem;
  font-weight: 700;
`;

const MembershipDesc = styled.span`
  font-size: 0.9rem;
  color: ${brand.muted};
`;

const CustomCard = styled.div<{ $active: boolean }>`
  ${selectable}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  margin-bottom: 2rem;
`;

const CustomHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-weight: 700;
  font-size: 1rem;
  color: ${brand.ink};
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: transparent;
  }
`;

const CustomRadio = styled.span<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? brand.blue : "#9aa9bd")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? brand.blue : "transparent")};
  }
`;

const CustomFields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`;

const DurationRadioRow = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const DurationBtn = styled.button<{ $active: boolean }>`
  ${selectable}
  min-height: 48px;
  padding: 0 0.85rem;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? "#0650a3" : brand.ink)};
  font: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 0.85rem;
  border: 1px solid #b9c6d8;
  border-radius: 8px;
  font: inherit;
  font-size: 1rem;
  background: #fff;
  color: ${brand.ink};
  color-scheme: light;

  &:focus-visible {
    outline: 3px solid ${brand.blue};
    outline-offset: 1px;
    border-color: ${brand.blue};
  }

  &::placeholder {
    color: #7b8ba1;
  }
`;

const CustomHint = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: ${brand.muted};
`;

const ToggleGroup = styled.div`
  margin-bottom: 1.75rem;
`;

const ToggleSublabel = styled.p`
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${brand.muted};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.4;
  color: ${brand.ink};

  input {
    margin: 0.1rem 0 0;
    width: 20px;
    height: 20px;
    accent-color: ${brand.blue};
    flex-shrink: 0;
  }
`;

const BescheinigungHinweis = styled.p`
  margin: 0.35rem 0 0 1.85rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${brand.muted};
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
  margin-left: 1.85rem;
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
  margin-bottom: 2rem;
`;

const BankCTA = styled.button<{ $variant?: ButtonVariant }>`
  ${buttonStyles}
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
  max-width: 420px;
  min-height: 60px;
  padding: 0.6rem 1.4rem;
`;

const CTAAmount = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  opacity: 0.9;
`;

const UeberweisungHinweis = styled.p`
  margin: 1rem 0 0;
  padding: 0.85rem 1rem;
  background: ${brand.paper};
  border-left: 3px solid ${brand.blue};
  border-radius: 6px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${brand.ink};
  max-width: 60ch;
`;

// -- Modal --

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 24, 48, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 14px;
  border-top: 4px solid ${brand.red};
  padding: 2rem 1.5rem 1.5rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 24px 48px rgba(10, 24, 48, 0.35);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  font-family: ${brand.fontBody};
  color: ${brand.ink};
  text-align: left;
  color-scheme: light;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  font-size: 1.6rem;
  line-height: 1;
  color: ${brand.muted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${brand.paper};
    border-color: transparent;
  }
`;

const ModalTitle = styled.h2`
  font-family: ${brand.fontDisplay};
  font-size: 1.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${brand.navy};
  margin: 0 2.5rem 0.5rem 0;
  line-height: 1;
`;

const ModalHint = styled.p`
  font-size: 0.95rem;
  color: ${brand.muted};
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
  border: 1px solid ${brand.line};
`;

const ModalBankRow = styled.div`
  font-size: 0.95rem;
  line-height: 1.7;
  overflow-wrap: anywhere;
  strong { color: ${brand.navy}; }
`;

const ModalBankMeta = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${brand.muted};
`;

const ModalEmailHint = styled.p`
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: ${brand.paper};
  border-left: 3px solid ${brand.blue};
  border-radius: 6px;
  font-size: 0.95rem;
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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Club500Page() {
  const cfg = club500Config;

  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    if (HERO_IMAGES.length <= 1 || prefersReducedMotion()) return;
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customMode, setCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const [customDuration, setCustomDuration] = useState("1 Jahr");

  const [tafelName, setTafelName] = useState("");

  const [wantBescheinigung, setWantBescheinigung] = useState(false);
  const [bForm, setBForm] = useState({ vorname: "", nachname: "", email: "", strasse: "", plz: "", ort: "" });

  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    if (!showQrModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowQrModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showQrModal]);

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
    if (tafelName.trim()) parts.push(`Tafel: ${tafelName.trim()}`);
    if (wantBescheinigung) {
      const namePart = [bForm.vorname, bForm.nachname].filter(Boolean).join(" ");
      const addrPart = [bForm.strasse, bForm.plz, bForm.ort].filter(Boolean).join(", ");
      const beschParts = [namePart, addrPart].filter(Boolean).join(", ");
      if (beschParts) parts.push(`Besch: ${beschParts}`);
    }
    return parts.join(" | ");
  }, [cfg.verwendungszweck, selectedDuration, tafelName, wantBescheinigung, bForm]);

  const epcPayload = useMemo(() =>
    buildEpcPayload(cfg.bankDetails.kontoinhaber, cfg.bankDetails.ibanClean,
      cfg.bankDetails.bic, baseAmount, verwendungszweck),
    [cfg.bankDetails.kontoinhaber, cfg.bankDetails.ibanClean, cfg.bankDetails.bic, baseAmount, verwendungszweck]);

  const updateBForm = (f: string, v: string) => setBForm((p) => ({ ...p, [f]: v }));

  return (
    <Page>
      {/* ===== Hero ===== */}
      <Hero aria-labelledby="club500-title" data-dark>
        {HERO_IMAGES.map((src, i) => (
          <HeroSlide key={i} $bg={src} $active={i === heroIdx} aria-hidden="true" />
        ))}
        <HeroShade />
        <HeroInner>
          <Eyebrow $onDark>100 Felder, 500 € pro Feld und Saison</Eyebrow>
          <HeroTitle id="club500-title">
            Der <span>500er</span> Club.
          </HeroTitle>
          <HeroLead>{cfg.subtitle}</HeroLead>
          <HeroActions>
            <ButtonLink
              href="#feld-sichern"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("feld-sichern");
              }}
            >
              Feld sichern
            </ButtonLink>
            <ButtonLink
              href="#tafel-titel"
              $variant="outlineLight"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("tafel-titel");
              }}
            >
              Unsere Förderer ansehen
            </ButtonLink>
          </HeroActions>
        </HeroInner>
      </Hero>

      {/* ===== Benefits ===== */}
      <Section aria-labelledby="benefits-title">
        <Container>
          <SectionHeader
            id="benefits-title"
            eyebrow="Ihre Unterstützung"
            title="Was Ihr Feld bewirkt."
          />
          <BenefitGrid>
            {cfg.benefits.map((b) => (
              <BenefitCard key={b.title}>
                <BenefitTitle>{b.title}</BenefitTitle>
                <BenefitText>{b.text}</BenefitText>
              </BenefitCard>
            ))}
          </BenefitGrid>
        </Container>
      </Section>

      {/* ===== Fördertafel ===== */}
      <TafelWrap data-dark>
        <Foerdertafel />
      </TafelWrap>

      {/* ===== Form ===== */}
      <Section $paper id="feld-sichern" aria-labelledby="feld-title">
        <Container>
          <SectionHeader
            id="feld-title"
            eyebrow="Per Überweisung oder QR-Code"
            title="Feld sichern."
            lead="Wählen Sie, für wie viele Saisons Sie ein Feld übernehmen möchten."
          />

          <FormCard>
            {/* Membership options */}
            <div role="group" aria-labelledby="optionen-label">
              <GroupLabel id="optionen-label">{cfg.sectionTitle}</GroupLabel>
              <MembershipGrid>
                {cfg.memberships.map((m, i) => {
                  const active = !customMode && selectedIdx === i;
                  return (
                    <MembershipCard
                      key={m.value}
                      $active={active}
                      aria-pressed={active}
                      onClick={() => { setCustomMode(false); setSelectedIdx(i); }}
                      type="button"
                    >
                      <MembershipPrice>{m.label}</MembershipPrice>
                      <MembershipDuration>{m.duration}</MembershipDuration>
                      <MembershipDesc>{m.description}</MembershipDesc>
                    </MembershipCard>
                  );
                })}
              </MembershipGrid>

              <CustomCard $active={customMode} onClick={() => { if (!customMode) setCustomMode(true); }}>
                <CustomHeader type="button" aria-pressed={customMode}>
                  <CustomRadio $active={customMode} />
                  {cfg.customAmount.label}
                </CustomHeader>
                {customMode && (
                  <CustomFields onClick={(e) => e.stopPropagation()}>
                    <Input
                      type="text" inputMode="decimal"
                      placeholder="Betrag in EUR"
                      aria-label="Eigener Betrag in Euro"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      autoFocus
                    />
                    <DurationRadioRow role="group" aria-label="Laufzeit">
                      {DURATION_OPTIONS.map((d) => (
                        <DurationBtn key={d} $active={customDuration === d}
                          aria-pressed={customDuration === d}
                          onClick={() => setCustomDuration(d)} type="button">
                          {d}
                        </DurationBtn>
                      ))}
                    </DurationRadioRow>
                  </CustomFields>
                )}
                {customMode && <CustomHint>{cfg.customAmount.minHint}</CustomHint>}
              </CustomCard>
            </div>

            {/* Spendentafel */}
            <ToggleGroup>
              <FieldLabel htmlFor="tafel-name">{cfg.spendentafel.label}</FieldLabel>
              <ToggleSublabel id="tafel-hinweis">{cfg.spendentafel.sublabel}</ToggleSublabel>
              <Input
                id="tafel-name"
                type="text"
                aria-describedby="tafel-hinweis"
                placeholder={cfg.spendentafel.nameFieldPlaceholder}
                value={tafelName}
                onChange={(e) => setTafelName(e.target.value)}
              />
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
                  <Input type="text" name="bescheinigung-vorname" autoComplete="given-name"
                    aria-label={cfg.bescheinigung.fields.vorname}
                    placeholder={cfg.bescheinigung.fields.vorname}
                    value={bForm.vorname} onChange={(e) => updateBForm("vorname", e.target.value)} />
                  <Input type="text" name="bescheinigung-nachname" autoComplete="family-name"
                    aria-label={cfg.bescheinigung.fields.nachname}
                    placeholder={cfg.bescheinigung.fields.nachname}
                    value={bForm.nachname} onChange={(e) => updateBForm("nachname", e.target.value)} />
                </FormRow>
                <Input type="email" name="bescheinigung-email" autoComplete="email"
                  aria-label={cfg.bescheinigung.fields.email}
                  placeholder={cfg.bescheinigung.fields.email}
                  value={bForm.email} onChange={(e) => updateBForm("email", e.target.value)} />
                <Input type="text" name="bescheinigung-strasse" autoComplete="street-address"
                  aria-label={cfg.bescheinigung.fields.strasse}
                  placeholder={cfg.bescheinigung.fields.strasse}
                  value={bForm.strasse} onChange={(e) => updateBForm("strasse", e.target.value)} />
                <FormRow>
                  <Input type="text" name="bescheinigung-plz" autoComplete="postal-code"
                    aria-label={cfg.bescheinigung.fields.plz}
                    placeholder={cfg.bescheinigung.fields.plz}
                    value={bForm.plz} onChange={(e) => updateBForm("plz", e.target.value)} />
                  <Input type="text" name="bescheinigung-ort" autoComplete="address-level2"
                    aria-label={cfg.bescheinigung.fields.ort}
                    placeholder={cfg.bescheinigung.fields.ort}
                    value={bForm.ort} onChange={(e) => updateBForm("ort", e.target.value)} />
                </FormRow>
              </MiniForm>
            </BescheinigungSection>

            {/* CTA */}
            <BankCTA type="button" onClick={() => setShowQrModal(true)}>
              {cfg.bankCtaLabel}
              <CTAAmount>{formatEuro(baseAmount)}&nbsp;€</CTAAmount>
            </BankCTA>
            {wantBescheinigung && (
              <UeberweisungHinweis>{cfg.ueberweisungHinweis}</UeberweisungHinweis>
            )}
          </FormCard>
        </Container>
      </Section>

      <Footer />

      {/* ===== QR Modal ===== */}
      {showQrModal && (
        <ModalBackdrop onClick={() => setShowQrModal(false)}>
          <ModalBox
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-title"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalClose
              type="button"
              aria-label="Schließen"
              onClick={() => setShowQrModal(false)}
              autoFocus
            >
              ×
            </ModalClose>
            <ModalTitle id="qr-title">Überweisung per QR-Code</ModalTitle>
            <ModalHint>
              Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse,
              VR-Banking, ING usw.). Alle Daten werden automatisch ausgefüllt.
            </ModalHint>
            {baseAmount > 0 && (
              <QRWrap><QRCodeSVG value={epcPayload} size={220} level="M" /></QRWrap>
            )}
            <ModalBankRow><strong>{cfg.bankDetails.kontoinhaber}</strong></ModalBankRow>
            <ModalBankRow>IBAN: <strong>{cfg.bankDetails.iban}</strong></ModalBankRow>
            <ModalBankRow>
              Betrag: <strong>{formatEuro(baseAmount)}&nbsp;€</strong>
              {selectedDuration && <>, <strong>{selectedDuration}</strong></>}
            </ModalBankRow>
            <ModalBankRow>Verwendungszweck: <strong>{verwendungszweck}</strong></ModalBankRow>
            <ModalBankMeta>
              {cfg.bankDetails.bank}, {cfg.bankDetails.adresse}
            </ModalBankMeta>
            {wantBescheinigung && bForm.email && (
              <ModalEmailHint>
                Wir senden Ihre Spendenbescheinigung an <strong>{bForm.email}</strong>.
              </ModalEmailHint>
            )}
          </ModalBox>
        </ModalBackdrop>
      )}
    </Page>
  );
}
