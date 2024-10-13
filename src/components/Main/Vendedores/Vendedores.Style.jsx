import styled from 'styled-components';

export const ContainerVendedores = styled.div`
  position: relative;
  min-height: 500px;
  max-height: 500px;
  overflow: auto;
  background: ${({ theme }) => theme.light};
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  color: ${({ theme }) => theme.dark};

  .cardHeader {
    width: 100%; 
    padding: 20px; 
  }

  .listaVendedores {
    max-height: 400px; 
    overflow-y: auto; 
  }

  .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .primeiroElemento {
    background-color: ${({ theme }) => theme.red};
  }

  table tr td {
    padding: 12px 10px;

    h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2rem;

      span {
        font-size: 14px;
        color: ${({ theme }) => theme.secondary};
      }
    }
  }

  table tr:hover {
    background: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};

    td h4 span {
      color: ${({ theme }) => theme.white};
    }
  }
`;
