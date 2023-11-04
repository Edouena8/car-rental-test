import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  align-items: center;
  background-color: var(--accent-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Wrap = styled.div`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #e0eff2;
  text-shadow: 4px 4px 2px rgba(32, 32, 32, 0.6);
`;

export const List = styled.ul`
  display: flex;
`;

export const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px 15px;
  cursor: pointer;
  border-right: 1px solid #97abd7;
  color: var(--additional-text-color);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
