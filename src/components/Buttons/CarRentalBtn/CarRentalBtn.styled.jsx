import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  height: 44px;
  padding: 12px 50px;
  align-self: end;
  border-radius: 12px;
  cursor: pointer;
  border: none;

  background-color: rgba(52, 112, 255, 1);
  transition: background-color 250ms ease-in-out;
  color: #fff;

  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;
