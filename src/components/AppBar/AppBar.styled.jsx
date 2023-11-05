import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.accent};
  border-bottom: 1px solid ${p => p.theme.colors.borderHeader};
`;

export const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
    max-width: 1440px;
  }
`;

export const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
  padding: 10px 10px;
  color: ${p => p.theme.colors.textAdditional};
  transition: background-color ${p => p.theme.transition.time}
    ${p => p.theme.transition.cubic};

  @media screen and (min-width: 768px) {
    cursor: pointer;
    padding: 15px 15px;
    border-right: 1px solid ${p => p.theme.colors.borderNav};
  }

  &:hover {
    background-color: ${p => p.theme.colors.accentHover};
  }
`;
