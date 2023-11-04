import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  
  display: inline-block;
  padding: 12px 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.textAdditional};
  background-color: ${p => p.theme.colors.accent};

  &:hover {
    background-color: ${p => p.theme.colors.accentHover};
  }
`;
