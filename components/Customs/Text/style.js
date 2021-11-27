/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${({ size }) => size};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  font-family: sans-serif;
  color: ${({ color }) => (color || '#000000')}
`;
