import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 56px;
  background: ${({ theme }) => theme.primary};
  padding: 0 24px 0 0;
  display: flex;
  align-items: center;
  gap: 24px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: -40px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 ${({ theme }) => theme.primary};
  }

  a {
    color: ${({ theme }) => theme.dark};
  }

  .bx.bx-menu {
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    margin-left: 20px;
  }

  div {
    max-width: 400px;
    width: 100%;
    margin-right: auto;

    .form-input {
      display: flex;
      align-items: center;
      height: 36px;

      input {
        flex-grow: 1;
        padding: 0 16px;
        height: 100%;
        border: none;
        background: ${({ theme }) => theme.grey};
        border-radius: 36px 0 0 36px;
        outline: none;
        width: 100%;
        color: ${({ theme }) => theme.dark};
      }

      button {
        width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.white};
        font-size: 18px;
        border: none;
        outline: none;
        border-radius: 0 36px 36px 0;
        cursor: pointer;
      }
    }
  }

  .notif {
    font-size: 20px;
    position: relative;

    .count {
      position: absolute;
      top: -6px;
      right: -6px;
      width: 20px;
      height: 20px;
      background: ${({ theme }) => theme.red};
      border-radius: 50%;
      color: var(--light);
      border: 2px solid ${({ theme }) => theme.red};
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .profile img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }
`;