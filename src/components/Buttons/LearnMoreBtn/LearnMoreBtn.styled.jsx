import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  cursor: pointer;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  color: ${p => p.theme.colors.textAdditional};
  background-color: ${p => p.theme.colors.accent};
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.accentHover};
  }
`;
