import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  align-items: center;
  background-color: ${p => p.theme.colors.accent};
  border-bottom: 1px solid ${p => p.theme.colors.borderHeader};
`;

export const Wrap = styled.div`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.headerTitle};
  text-shadow: ${p => p.theme.shadows.text};
`;

export const List = styled.ul`
  display: flex;
`;

export const Nav = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  padding: 15px 15px;
  cursor: pointer;
  border-right: 1px solid ${p => p.theme.colors.borderNav};
  color: ${p => p.theme.colors.textAdditional};
  transition: background-color ${p => p.theme.transition.time}
    ${p => p.theme.transition.cubic};

  &:hover {
    background-color: ${p => p.theme.colors.accentHover};
  }
`;
