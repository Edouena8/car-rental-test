import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  display: inline-block;
  height: 44px;
  padding: 12px 50px;
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
`;
