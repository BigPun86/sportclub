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

  tr:hover td {
    background: #fff6fa;

    &:first-child {
      background: #ffe6f2;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th,
    td {
      padding: 0.6rem 0.45rem;
    }
  }
`;

const HighlightRow = styled.tr`
  td {
    background: #fff6fa !important;
    font-weight: 600;
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

export default function SpielerpatenschaftenTable() {
  return (
    <TableContainer>
      <TableTitle>👤 Spielerpatenschaften (diskret)</TableTitle>
      <TableSubtitle>
        Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg.
      </TableSubtitle>
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
          <tr>
            <td>Fix-Betrag/Saison</td>
            <td>1.200 €</td>
            <td>2.000 €</td>
            <td>3.000 €</td>
          </tr>
          <tr>
            <td>Performance-Bonus (optional)</td>
            <td>-</td>
            <td>+50 €/Erfolg (max. 30)</td>
            <td>+100 €/Erfolg (max. 30)</td>
          </tr>
          <HighlightRow>
            <td>Max. Kosten/Saison</td>
            <td>1.200 €</td>
            <td>3.500 €</td>
            <td>6.000 €</td>
          </HighlightRow>
          <tr>
            <td>Willkommens-Story (mit Foto)</td>
            <td>✅ Ja</td>
            <td>✅ Ja</td>
            <td>✅ Ja</td>
          </tr>
          <tr>
            <td>Erwähnung bei Tor/Assist</td>
            <td>✅ Immer</td>
            <td>✅ Immer + dediziert</td>
            <td>✅ Immer + Premium</td>
          </tr>
          <tr>
            <td>Stories/Monat</td>
            <td>1</td>
            <td>2</td>
            <td>2-3</td>
          </tr>
          <tr>
            <td>Dedizierte Posts/Saison</td>
            <td>-</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Event mit Spieler</td>
            <td>-</td>
            <td>-</td>
            <td>✅ 1x/Jahr</td>
          </tr>
          <tr>
            <td>Website-Präsenz</td>
            <td>Logo</td>
            <td>Logo prominent</td>
            <td>Logo + Spieler-Profil</td>
          </tr>
        </tbody>
      </Table>

      <ExampleBox>
        <strong>📸 Beispiel - So sieht's aus:</strong><br />
        "⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥<br />
        Danke an [Ihr Unternehmen] für die Unterstützung! 💪"
        <em>[Foto vom Torjubel]</em>
      </ExampleBox>

      <DiscreetNote>
        <strong>💡 Diskrete Handhabung:</strong> Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen. Bei der Willkommens-Story gibt's ein gemeinsames Foto - danach wird bei jedem Erfolg Ihr Name erwähnt. <strong>Ideal für echte Fans!</strong>
      </DiscreetNote>
    </TableContainer>
  );
}
