import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    height: 35px;
    width: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 10px;
    background: ${({ theme }) => theme.grey};
    color: ${({ theme }) => theme.text};
    border-color: transparent;
  }
`;

export const SuggestionsBox = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  max-height: 100px;
  overflow-y: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #fff;
`;

export const ListItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#cccccc' : 'transparent'};
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ButtonSearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

`;

export const SearchButton = styled.button`
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--redsecond);
  color: var(--light);
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 0 36px 36px 0;
  cursor: pointer;
`;
