import styled from "styled-components";
import { useEffect, useState } from "react";
import { brand } from "../theme";
import { Button, Container, SectionHeader } from "./ui";

// GitHub Pages has no backend, so the form builds a ready-to-send mail
// in the visitor's mail client instead of pretending to submit.

type FieldName = "firstName" | "lastName" | "phone" | "email" | "consent";
type Errors = Partial<Record<FieldName, string>>;

interface ContactSectionProps {
  email: string;
  address: string[];
  interestOptions: string[];
  interest?: string;
}

export function ContactSection({
  email,
  address,
  interestOptions,
  interest,
}: ContactSectionProps) {
  const [selected, setSelected] = useState(interest ?? "");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (interest) setSelected(interest);
  }, [interest]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim() !== "") return; // honeypot

    const get = (k: string) => String(data.get(k) || "").trim();
    const firstName = get("firstName");
    const lastName = get("lastName");
    const company = get("company");
    const phone = get("phone");
    const mail = get("email");
    const message = get("message");

    const next: Errors = {};
    if (!firstName) next.firstName = "Bitte geben Sie Ihren Vornamen an.";
    if (!lastName) next.lastName = "Bitte geben Sie Ihren Nachnamen an.";
    if (!/^[+\d][\d\s\-/()]{5,}$/.test(phone))
      next.phone = "Bitte geben Sie eine Telefonnummer an, z. B. 07531 123456.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (!data.get("consent"))
      next.consent = "Bitte stimmen Sie der Datenverarbeitung zu.";

    setErrors(next);
    const firstError = Object.keys(next)[0];
    if (firstError) {
      form.querySelector<HTMLInputElement>(`[name="${firstError}"]`)?.focus();
      setSent(false);
      return;
    }

    const topic = selected || "Sponsoring allgemein";
    const subject = `Sponsoring-Anfrage: ${topic}${company ? ` (${company})` : ""}`;
    const body = [
      "Hallo SCKW-Team,",
      "",
      `ich interessiere mich für: ${topic}.`,
      ...(message ? ["", message] : []),
      "",
      `Name: ${firstName} ${lastName}`,
      ...(company ? [`Firma: ${company}`] : []),
      `Telefon: ${phone}`,
      `E-Mail: ${mail}`,
      "",
      "Viele Grüße",
      `${firstName} ${lastName}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const errorProps = (name: FieldName) =>
    errors[name]
      ? { "aria-invalid": true, "aria-describedby": `${name}-error` }
      : {};

  const fieldError = (name: FieldName) =>
    errors[name] ? <ErrorText id={`${name}-error`}>{errors[name]}</ErrorText> : null;

  return (
    <Section id="kontakt" aria-labelledby="kontakt-title">
      <Container>
        <Grid>
          <div>
            <SectionHeader
              id="kontakt-title"
              eyebrow="Kontakt"
              title="Partner werden."
              lead="Schreiben Sie uns kurz, was Sie sich vorstellen. Wir melden uns innerhalb von 24 Stunden und finden mit Ihnen das passende Paket."
            />
            <Direct>
              <DirectLabel>E-Mail</DirectLabel>
              <DirectMail href={`mailto:${email}`}>{email}</DirectMail>
              <DirectLabel>Anschrift</DirectLabel>
              <address>
                {address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </Direct>
          </div>

          <FormCard>
            <FormTitle>Anfrage stellen</FormTitle>
            <Form noValidate onSubmit={handleSubmit}>
              <FieldFull>
                <label htmlFor="interest">Interesse an</label>
                <select
                  id="interest"
                  name="interest"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="">Noch offen, bitte beraten</option>
                  {interestOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </FieldFull>
              <Field>
                <label htmlFor="firstName">Vorname</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  {...errorProps("firstName")}
                />
                {fieldError("firstName")}
              </Field>
              <Field>
                <label htmlFor="lastName">Nachname</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  {...errorProps("lastName")}
                />
                {fieldError("lastName")}
              </Field>
              <Field>
                <label htmlFor="company">
                  Firma <Optional>(optional)</Optional>
                </label>
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
                  {...errorProps("phone")}
                />
                {fieldError("phone")}
              </Field>
              <FieldFull>
                <label htmlFor="email">E-Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...errorProps("email")}
                />
                {fieldError("email")}
              </FieldFull>
              <FieldFull>
                <label htmlFor="message">
                  Nachricht <Optional>(optional)</Optional>
                </label>
                <textarea id="message" name="message" rows={4} />
              </FieldFull>

              <Honeypot aria-hidden="true">
                <label htmlFor="website">Dieses Feld bitte leer lassen</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </Honeypot>

              <FieldFull>
                <Consent>
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    {...errorProps("consent")}
                  />
                  <label htmlFor="consent">
                    Ich stimme der Verarbeitung meiner Daten gemäß den{" "}
                    <a
                      href="https://www.sckw.de/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Datenschutzhinweisen
                    </a>{" "}
                    zu.
                  </label>
                </Consent>
                {fieldError("consent")}
              </FieldFull>

              <FieldFull>
                <Button type="submit">Anfrage per E-Mail senden</Button>
                <Hint>
                  Ihr E-Mail-Programm öffnet sich mit der fertigen Anfrage.
                </Hint>
              </FieldFull>

              <Status role="status" aria-live="polite">
                {sent && (
                  <>
                    Ihre Anfrage liegt jetzt im E-Mail-Programm bereit. Bitte
                    dort auf Senden klicken. Hat sich nichts geöffnet? Dann
                    schreiben Sie uns direkt an{" "}
                    <a href={`mailto:${email}`}>{email}</a>.
                  </>
                )}
              </Status>
            </Form>
          </FormCard>
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background: ${brand.paper};
  color-scheme: light;
  padding: 4rem 0;
  text-align: left;
  scroll-margin-top: 72px;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: 4rem;
    align-items: start;
  }
`;

const Direct = styled.div`
  display: grid;
  gap: 0.25rem;
  color: ${brand.ink};
  font-size: 1.05rem;
  line-height: 1.5;

  address {
    font-style: normal;
  }
`;

const DirectLabel = styled.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${brand.muted};
`;

const DirectMail = styled.a`
  font-family: ${brand.fontDisplay};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${brand.blue};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline;
    color: ${brand.blue};
  }
`;

const FormCard = styled.div`
  background: #fff;
  border: 1px solid ${brand.line};
  border-radius: 14px;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-family: ${brand.fontDisplay};
  font-weight: 800;
  font-size: 1.75rem;
  text-transform: uppercase;
  color: ${brand.navy};
  margin: 0 0 1.25rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  label {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${brand.ink};
    margin-bottom: 0.35rem;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    border: 1px solid #b9c6d8;
    border-radius: 8px;
    padding: 0.7rem 0.85rem;
    font: inherit;
    font-size: 1rem;
    background: #fff;
    color: ${brand.ink};
    color-scheme: light;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  select {
    height: 48px;
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid ${brand.blue};
    outline-offset: 1px;
    border-color: ${brand.blue};
  }

  [aria-invalid="true"] {
    border-color: ${brand.red};
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldFull = styled(Field)`
  grid-column: 1 / -1;

  & > button {
    align-self: flex-start;
  }
`;

const Optional = styled.span`
  font-weight: 400;
  color: ${brand.muted};
`;

const ErrorText = styled.span`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${brand.redDark};
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
  gap: 0.6rem;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0.1rem 0 0;
    flex-shrink: 0;
    accent-color: ${brand.blue};
  }

  label {
    font-weight: 400;
    color: ${brand.muted};
    margin: 0;
  }

  a {
    color: ${brand.blue};
    font-weight: 600;
    text-decoration: underline;
  }
`;

const Hint = styled.span`
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: ${brand.muted};
`;

const Status = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${brand.ink};

  &:empty {
    display: none;
  }

  a {
    color: ${brand.blue};
    font-weight: 600;
  }
`;
