import styled from "styled-components";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`;

const ContactBox = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`;

const ContactTitle = styled.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ContactText = styled.p<{ $isEmail?: boolean }>`
  font-size: 0.95rem;
  color: #222;
  line-height: 1.5;

  a {
    color: #e10073;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  ${({ $isEmail }) =>
    $isEmail &&
    `
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;

interface ContactInfo {
  icon: string;
  title: string;
  content: string | React.JSX.Element;
  isEmail?: boolean;
}

interface ContactSectionProps {
  headline: string;
  description: string;
  contactInfos: ContactInfo[];
}

export function ContactSection({
  headline,
  description,
  contactInfos,
}: ContactSectionProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const website = String(formData.get("website") || "");
    if (website.trim() !== "") {
      // Spam/Honeypot ausgelöst - silently ignore
      return;
    }

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    const errors: Record<string, string> = {};
    if (!firstName) errors.firstName = "Bitte Vornamen angeben";
    if (!lastName) errors.lastName = "Bitte Nachnamen angeben";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Bitte gültige E-Mail eingeben";
    if (!/^[+\d][\d\s\-/()]{5,}$/.test(phone))
      errors.phone = "Bitte gültige Telefonnummer eingeben";

    if (Object.keys(errors).length > 0) {
      // Minimal-UX: Browser-Validation übernehmen; Fokus auf ersten Fehler
      const firstErrorField = Object.keys(errors)[0];
      const el = form.querySelector<HTMLInputElement>(
        `[name="${firstErrorField}"]`
      );
      if (el) el.focus();
      alert(Object.values(errors).join("\n"));
      return;
    }

    // Erfolgsfeedback (Stub)
    alert("Danke! Wir melden uns innerhalb von 24 Stunden.");
    form.reset();
  };

  return (
    <Section id="kontakt">
      <Inner>
        <SectionHeadline>{headline}</SectionHeadline>
        <SectionText>{description}</SectionText>

        <ContactGrid>
          {contactInfos.map((info, index) => (
            <ContactBox key={index}>
              <ContactTitle>
                {info.icon} {info.title}
              </ContactTitle>
              <ContactText $isEmail={info.isEmail}>
                {info.isEmail ? (
                  <a href={`mailto:${info.content}`}>{info.content}</a>
                ) : (
                  info.content
                )}
              </ContactText>
            </ContactBox>
          ))}
        </ContactGrid>

        <FormWrapper>
          <FormTitle>Kontakt aufnehmen</FormTitle>
          <FormDescription>
            Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden.
          </FormDescription>
          <ContactForm noValidate onSubmit={handleSubmit}>
            <Row>
              <Field>
                <label htmlFor="firstName">Vorname</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                />
              </Field>
              <Field>
                <label htmlFor="lastName">Nachname</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </Field>
            </Row>
            <Row>
              <Field>
                <label htmlFor="company">Firma (optional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </Field>
              <Field>
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </Field>
            </Row>
            <Row>
              <FieldFull>
                <label htmlFor="email">E-Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FieldFull>
            </Row>

            <Honeypot aria-hidden="true" tabIndex={-1}>
              <label htmlFor="website">
                Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer
              </label>
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="off"
              />
            </Honeypot>

            <Consent>
              <input id="consent" name="consent" type="checkbox" required />
              <label htmlFor="consent">
                Ich stimme der Verarbeitung meiner Daten gemäß{" "}
                <a
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzhinweisen
                </a>{" "}
                zu.
              </label>
            </Consent>

            <SubmitRow>
              <SubmitButton type="submit">Absenden</SubmitButton>
              <SmallNote>
                Alternativ:{" "}
                <a href="mailto:sponsoring@sckw.de">sponsoring@sckw.de</a>
              </SmallNote>
            </SubmitRow>
          </ContactForm>
        </FormWrapper>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`;

const FormTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`;

const FormDescription = styled.p`
  margin: 0 0 1rem 0;
  color: #555;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
    display: inline-block;
    text-align: left;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    font-size: 1rem;
    line-height: 1.2;
    height: 44px;
    outline: none;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    background: #fff;
    color: #111;
    caret-color: #e10073;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.15);
  }

  input::placeholder {
    color: #9ca3af;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #111;
    transition: background-color 9999s ease-in-out 0s;
    box-shadow: 0 0 0px 1000px #fff inset;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldFull = styled(Field)`
  grid-column: 1 / -1;
`;

const Honeypot = styled.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Consent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  input[type="checkbox"] {
    margin-top: 0.2rem;
  }

  a {
    color: #e10073;
  }
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 16px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.35);
  }
`;

const SmallNote = styled.span`
  font-size: 0.9rem;
  color: #666;

  a {
    color: #e10073;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SectionHeadline = styled.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`;

const SectionText = styled.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
