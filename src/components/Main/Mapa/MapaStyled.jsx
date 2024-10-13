import styled from 'styled-components';

export const RecentOrdersContainer = styled.div`
  position: relative;
  display: grid;
  max-height:500px;
  background: ${({ theme }) => theme.light};
  padding: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  color: ${({ theme }) => theme.dark};
`;