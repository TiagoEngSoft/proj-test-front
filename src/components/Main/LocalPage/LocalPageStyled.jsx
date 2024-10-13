import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .left h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.dark};
  }

  .left .breadcrumb {
    display: flex;
    align-items: center;
    gap: 16px;

    li {
      color: ${({ theme }) => theme.dark};
    }

    li a {
      color: ${({ theme }) => theme.darkGrey};
      pointer-events: none;
    }

    li a.active {
      color: ${({ theme }) => theme.rederes};
      pointer-events: none;
    }
  }

  .report {
    height: 36px;
    padding: 0 16px;
    border-radius: 36px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
  }
`;
