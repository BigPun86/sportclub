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
    font-size: 0.95rem;
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
    font-size: 0.9rem;
    color: #333;

    &:first-child {
      font-weight: 600;
      background: #f8f9fa;
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
    font-size: 0.85rem;

    th,
    td {
      padding: 0.65rem 0.5rem;
    }
  }
`;

const PriceCell = styled.td`
  font-weight: 700;
  color: #e10073;
`;

const Note = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;

export default function PraemienTable() {
  return (
    <TableContainer>
      <TableTitle>🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring</TableTitle>
      <TableSubtitle>
        Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen.
      </TableSubtitle>
      <Table>
        <thead>
          <tr>
            <th>Leistung / Erfolg</th>
            <th>Starter</th>
            <th>Premium</th>
            <th>Kombi (Beispiel)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pro Tor</td>
            <PriceCell>100 €</PriceCell>
            <PriceCell>200 €</PriceCell>
            <PriceCell>3.000 € Fix + 150 €/Tor</PriceCell>
          </tr>
          <tr>
            <td>Pro Punkt</td>
            <PriceCell>150 €</PriceCell>
            <PriceCell>250 €</PriceCell>
            <PriceCell>3.000 € Fix + 200 €/Punkt</PriceCell>
          </tr>
          <tr>
            <td>Pro Zu-Null-Spiel</td>
            <PriceCell>300 €</PriceCell>
            <PriceCell>500 €</PriceCell>
            <PriceCell>3.000 € Fix + 400 €/Zu-Null</PriceCell>
          </tr>
          <tr>
            <td>Pro Sieg</td>
            <td>-</td>
            <PriceCell>800 €</PriceCell>
            <PriceCell>3.000 € Fix + 600 €/Sieg</PriceCell>
          </tr>
          <tr>
            <td>Erwartete Kosten/Saison</td>
            <td>~5.000-8.000 €</td>
            <td>~12.000-18.000 €</td>
            <td>~9.000-12.000 €</td>
          </tr>
        </tbody>
      </Table>
      <Note>
        Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege, 10 Zu-Null-Spiele pro Saison (Landesliga). Bei Aufstieg in die Verbandsliga steigen Erfolgsrate + Kosten.
      </Note>
    </TableContainer>
  );
}
