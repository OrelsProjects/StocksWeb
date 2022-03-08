import styled from 'styled-components';

const Spacer = styled.div`
height: ${({ space }) => (space ? `${space}px` : '20px')};
`;

module.exports = Spacer;
