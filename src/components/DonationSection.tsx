import styled from "styled-components";
import { useState } from "react";

interface DonationOptionProps {
  preferred?: boolean;
}

const DonationSectionContainer = styled.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`;

const DonationTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`;

const DonationIntro = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`;

const DonationText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DonationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const DonationOption = styled.div<DonationOptionProps>`
  background: ${(props) =>
    props.preferred
      ? "linear-gradient(135deg, #e10073 0%, #ff1493 100%)"
      : "linear-gradient(135deg, #6c757d 0%, #495057 100%)"};
  color: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px
    ${(props) =>
      props.preferred
        ? "rgba(225, 0, 115, 0.25)"
        : "rgba(108, 117, 125, 0.25)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px
      ${(props) =>
        props.preferred
          ? "rgba(225, 0, 115, 0.35)"
          : "rgba(108, 117, 125, 0.35)"};
  }
`;

const PreferredBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #ffd700;
  color: #333;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
`;

const OptionIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const PayPalLogo = styled.svg`
  height: 50px;
  width: auto;
`;

const OptionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const OptionDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const DonationButton = styled.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }
`;

const TaxInfo = styled.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TaxInfoTitle = styled.h4`
  color: #0c5460;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const TaxInfoText = styled.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const ContactTitle = styled.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

const BankDetails = styled.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BankLabel = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

const BankValue = styled.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const CopyButton = styled.button`
  background: #e10073;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.95rem;

  &:hover {
    background: #b8005a;
  }
`;

const ModalNote = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;

export default function DonationSection() {
  const [showBankModal, setShowBankModal] = useState(false);

  const handleCopyIBAN = () => {
    navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06");
    // Optionale Bestätigung könnte hier hinzugefügt werden
  };

  const handleBankClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBankModal(true);
  };

  return (
    <DonationSectionContainer id="spenden">
      <DonationTitle>💚 Spenden für den SC Konstanz-Wollmatingen</DonationTitle>

      <DonationIntro>
        <DonationText>
          Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist
          der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der
          Aktivenbereiche unseres Vereins nicht zu finanzieren. Die
          Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser
          Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und
          Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen
          Mitglieder, Spieler und Teams erbringt, nicht aus.
        </DonationText>
        <DonationText>
          <strong>Wir freuen uns über jede Zuwendung und Unterstützung!</strong>
        </DonationText>
      </DonationIntro>

      <DonationOptions>
        <DonationOption preferred>
          <PreferredBadge>⭐ Bevorzugt</PreferredBadge>
          <OptionIcon>
            <PayPalLogo
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z"
                fill="#263B80"
              />
              <path
                d="M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z"
                fill="#139AD6"
              />
              <path
                d="M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z"
                fill="#232C65"
              />
            </PayPalLogo>
          </OptionIcon>
          <OptionTitle>PayPal Spende</OptionTitle>
          <OptionDescription>
            Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal.
            Ihre Spende kommt sofort bei uns an.
          </OptionDescription>
          <DonationButton
            href="https://www.paypal.me/sckw2012"
            target="_blank"
            rel="noopener noreferrer"
          >
            💚 Mit PayPal spenden
          </DonationButton>
        </DonationOption>

        <DonationOption>
          <OptionIcon>🏦</OptionIcon>
          <OptionTitle>Banküberweisung</OptionTitle>
          <OptionDescription>
            Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für
            größere Spenden und Spendenquittungen.
          </OptionDescription>
          <DonationButton onClick={handleBankClick}>
            🏦 Kontodaten anzeigen
          </DonationButton>
        </DonationOption>
      </DonationOptions>

      <TaxInfo>
        <TaxInfoTitle>📄 Steuerliche Absetzbarkeit</TaxInfoTitle>
        <TaxInfoText>
          <strong>Bis 200 EUR:</strong> Sie können einfach die
          Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung
          angeben.
        </TaxInfoText>
        <TaxInfoText>
          <strong>Über 200 EUR:</strong> Wir stellen Ihnen gerne eine offizielle
          Spendenquittung aus. Überweisen Sie dafür bitte auf unser
          Vereinskonto.
        </TaxInfoText>
      </TaxInfo>

      <ContactInfo>
        <ContactTitle>📧 Spendenquittung anfordern</ContactTitle>
        <ContactText>
          Für Spenden über 200 EUR richten Sie bitte die Anforderung einer
          Spendenquittung per E-Mail an <strong>grimm@sckw.de</strong> oder
          schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre
          Anschrift, Telefonnummer und den Verwendungszweck an.
        </ContactText>
      </ContactInfo>

      {showBankModal && (
        <Modal onClick={() => setShowBankModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Kontoverbindung für Spenden</ModalTitle>
              <CloseButton onClick={() => setShowBankModal(false)}>
                ×
              </CloseButton>
            </ModalHeader>

            <BankDetails>
              <BankRow>
                <BankLabel>Kontoinhaber:</BankLabel>
                <BankValue>SC Konstanz-Wollmatingen</BankValue>
              </BankRow>
              <BankRow>
                <BankLabel>IBAN:</BankLabel>
                <BankValue>DE12 6905 0001 0000 0228 06</BankValue>
              </BankRow>
              <BankRow>
                <BankLabel>BIC:</BankLabel>
                <BankValue>SOLADES1KNZ</BankValue>
              </BankRow>
            </BankDetails>

            <CopyButton onClick={handleCopyIBAN}>📋 IBAN kopieren</CopyButton>

            <ModalNote>
              Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen
            </ModalNote>
          </ModalContent>
        </Modal>
      )}
    </DonationSectionContainer>
  );
}
