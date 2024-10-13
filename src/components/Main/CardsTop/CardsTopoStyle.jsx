import styled from 'styled-components';

export const InsightsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const InsightItem = styled.li`
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${({ theme }) => theme.light};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: top;
  cursor: pointer;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  height: ${({ expanded }) => (expanded ? '200px' : '100px')};
  overflow: hidden;

  .infoTopo {
    display: flex;
    align-items: top;
    gap: 15px;
    margin: 0px;
    color: ${({ theme }) => theme.primary};
    
    .bx {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info h3 {
      font-size: 15px;
      font-weight: 600;
      color: ${({ theme }) => theme.dark};
    }

    .info p {
      color: ${({ theme }) => theme.dark};
      font-size: 15px;
    }
  }

  &:nth-child(1) .bx { background: ${({ theme }) => theme.lightPrimary}; }
  &:nth-child(2) .bx { background: ${({ theme }) => theme.lightWarning}; }
  &:nth-child(3) .bx { background: ${({ theme }) => theme.lightSuccess}; }
  &:nth-child(4) .bx { background: ${({ theme }) => theme.lightDanger}; }
`;

export const Table = styled.table`
  width: 100%;
  margin-right: 10px; 
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 3px;
    font-size:11px;
  }

  th {
    background-color: ${({ theme }) => theme.secondary};
    color: white;
    font-size: 13px;
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.light};
  }
`;

export const TableRow = styled.tr`
`;

export const TableCell = styled.td`
  color: ${({ theme }) => theme.text};
`;
