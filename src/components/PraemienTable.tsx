import styled from "styled-components";
import {
  praemienRows,
  praemienExpectedCosts,
  praemienNote,
} from "../data/sponsoringData";

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

/* Desktop View */
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
`;

const PriceCell = styled.td`
  font-weight: 700;
  color: #e10073;
`;

/* Mobile View - Card based */
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
  border-radius: 12px;
  overflow: hidden;
`;

const MobileCardHeader = styled.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
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
    color: #e10073;
    text-align: right;
  }
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
  // Daten aus zentralem Modul
  const praemien = praemienRows;

  return (
    <TableContainer>
      <TableTitle>🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring</TableTitle>
      <TableSubtitle>
        Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen.
      </TableSubtitle>

      {/* Desktop View */}
      <DesktopTable>
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
            {praemien.map((p, i) => (
              <tr key={i}>
                <td>{p.label}</td>
                <PriceCell>{p.starter}</PriceCell>
                <PriceCell>{p.premium}</PriceCell>
                <PriceCell>{p.kombi}</PriceCell>
              </tr>
            ))}
            <tr>
              <td>Erwartete Kosten</td>
              <td>{praemienExpectedCosts.starter}</td>
              <td>{praemienExpectedCosts.premium}</td>
              <td>{praemienExpectedCosts.kombi}</td>
            </tr>
          </tbody>
        </Table>
      </DesktopTable>

      {/* Mobile View */}
      <MobileCards>
        {["Starter", "Premium", "Kombi"].map((tier) => (
          <MobileCard key={tier}>
            <MobileCardHeader>{tier}</MobileCardHeader>
            {praemien.map((p, i) => (
              <MobileRow key={i}>
                <span>{p.label}</span>
                <span>{tier === "Starter" ? p.starter : tier === "Premium" ? p.premium : p.kombi}</span>
              </MobileRow>
            ))}
          </MobileCard>
        ))}
      </MobileCards>

      <Note>{praemienNote}</Note>
    </TableContainer>
  );
}
