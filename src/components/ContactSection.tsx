import styled from "styled-components";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`;

const ContactBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
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
  content: string | JSX.Element;
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
  return (
    <Section id="kontakt">
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
