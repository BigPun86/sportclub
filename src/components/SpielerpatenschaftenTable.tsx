import styled from "styled-components";

const TableContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const TableTitle = styled.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const TableSubtitle = styled.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

/* Desktop Table */
const DesktopTable = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #e10073;
    color: white;
    padding: 0.875rem 0.75rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid #d00068;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 0.875rem 0.75rem;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 0.85rem;
    color: #333;
    line-height: 1.4;

    &:first-child {
      font-weight: 700;
      background: #f8f9fa;
      color: #e10073;
    }
  }

  tr:nth-child(even) td {
    background: #f9f9f9;

    &:first-child {
      background: #f0f0f0;
    }
  }
`;

/* Mobile Cards */
const MobileCards = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileCard = styled.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const MobileCardHeader = styled.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`;

const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    font-weight: 700;
    color: #333;
    text-align: right;
  }
`;

const ExampleBox = styled.div`
  background: linear-gradient(135deg, #fff6fa, #ffffff);
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;

  strong {
    color: #e10073;
  }

  em {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #888;
  }
`;

const DiscreetNote = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #e10073;
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;

  strong {
    color: #e10073;
  }
`;

export default function SpielerpatenschaftenTable() {
  const data = [
    { label: "Fix-Betrag", bronze: "1.200 €", silber: "2.000 €", gold: "3.000 €" },
    { label: "Bonus Tor/Assist", bronze: "-", silber: "+50 €", gold: "+100 €" },
    { label: "Stories/Monat", bronze: "1", silber: "2", gold: "2-3" },
    { label: "Events", bronze: "-", silber: "-", gold: "✅ 1x/Jahr" },
  ];

  return (
    <TableContainer>
      <TableTitle>👤 Spielerpatenschaften (diskret)</TableTitle>
      <TableSubtitle>
        Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg.
      </TableSubtitle>

      {/* Desktop */}
      <DesktopTable>
        <Table>
          <thead>
            <tr>
              <th>Merkmal</th>
              <th>Bronze</th>
              <th>Silber</th>
              <th>Gold</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.label}</td>
                <td>{d.bronze}</td>
                <td>{d.silber}</td>
                <td>{d.gold}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DesktopTable>

      {/* Mobile */}
      <MobileCards>
        {["Bronze", "Silber", "Gold"].map((tier) => (
          <MobileCard key={tier}>
            <MobileCardHeader>{tier}</MobileCardHeader>
            {data.map((d, i) => (
              <MobileRow key={i}>
                <span>{d.label}</span>
                <span>{tier === "Bronze" ? d.bronze : tier === "Silber" ? d.silber : d.gold}</span>
              </MobileRow>
            ))}
          </MobileCard>
        ))}
      </MobileCards>

      <ExampleBox>
        <strong>📸 Beispiel - So sieht's aus:</strong><br />
        "⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥<br />
        Danke an [Ihr Unternehmen] für die Unterstützung! 💪"
        <em>[Foto vom Torjubel]</em>
      </ExampleBox>

      <DiscreetNote>
        <strong>💡 Diskrete Handhabung:</strong> Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.
      </DiscreetNote>
    </TableContainer>
  );
}
