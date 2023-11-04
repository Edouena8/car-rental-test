import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.accent};
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.accentHover};
  }
`;
