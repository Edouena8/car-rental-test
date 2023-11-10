import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${p => p.theme.colors.accent};
  background-color: transparent;
  border: none;
  padding: 0;
  margin-bottom: 30px;
  cursor: pointer;
  transition: color ${p => p.theme.transition.time}
    ${p => p.theme.transition.cubic};

  &:hover {
    color: ${p => p.theme.colors.accentHover};
  }
`;
