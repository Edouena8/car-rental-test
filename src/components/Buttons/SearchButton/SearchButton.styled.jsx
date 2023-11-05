import styled from '@emotion/styled';

export const SearchBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  height: 48px;
  padding: 14px 44px;
  align-self: end;
  border-radius: 12px;
  cursor: pointer;
  border: none;

  background-color: ${p => p.theme.colors.accent};
  transition: background-color ${p => p.theme.transition.time}
    ${p => p.theme.transition.cubic};
  color: ${p => p.theme.colors.textAdditional};

  &:hover {
    background-color: ${p => p.theme.colors.accentHover};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.disabled};
    cursor: not-allowed;
  }
`;
