import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: ${props => props.isOpen ? 'calc(100% - 230px)' : 'calc(100% - 56px)'};
    left: ${props => props.isOpen ? '230px' : '54px'};
    transition: all 0.3s ease;
`;

export default Container;
