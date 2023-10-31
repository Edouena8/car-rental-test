import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px 44px;
  margin-top: 30px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: rgba(52, 112, 255, 1);
  
  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;
