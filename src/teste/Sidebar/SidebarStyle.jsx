import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primary};
  width: ${({ isOpen }) => (isOpen ? "230px" : "54px")};
  height: 100%;
  z-index: 2000;
  overflow-x: hidden;
  scrollbar-width: none;
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  height: 56px;
  display: flex;
  align-items: center;
  color:  ${({ theme }) => theme.white};
  z-index: 500;
  padding-bottom: 20px;
  box-sizing: content-box;
  margin-left: 3px;

  .logo-name span {
    color: ${({ theme }) => theme.white};
    margin-left: 10px;
  }

  .bx {
    min-width: 60px;
    display: flex;
    justify-content: center;
    font-size: 2.2rem;
  }
`;

export const SideMenu = styled.ul`
  width: 100%;
  margin-top: 48px;
`;

export const MenuItem = styled.li`
  height: 48px;
  background: transparent;
  margin-left: 6px;
  border-radius: 48px 0 0 48px;
  padding: 4px;
  display: flex;
  align-items: center;

  &.active {
    background: ${({ theme }) => theme.grey};
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 20px 20px 0 ${({ theme }) => theme.grey};
      z-index: -1;
    }

    &::before {
      top: -40px;
      right: 0;
    }

    &::after {
      bottom: -40px;
      right: 0;
      box-shadow: 20px -20px 0 ${({ theme }) => theme.grey};
    }

    a {
      color: ${({ theme }) => theme.select};
      background-color: ${({ theme }) => theme.primary};
    }
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 48px;
    font-size: 16px;
    color: ${({ theme }) => theme.white};
    white-space: nowrap;
    overflow-x: hidden;
    transition: all 0.3s ease;

    &.logout {
      color: ${({ theme }) => theme.white};
    }

    &.close {
      width: calc(48px - (4px * 2));
      color: white;
    }

    .white-icon {
      color: aliceblue;
    }

    .bx {
      min-width: calc(60px - ((4px + 6px) * 2));
      display: flex;
      font-size: 1.6rem;
      justify-content: center;
    }
  }
`;

export const MenuLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 48px;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  overflow-x: hidden;
  transition: all 0.3s ease;

  // Adicione quaisquer outros estilos necessários para MenuLink
`;
