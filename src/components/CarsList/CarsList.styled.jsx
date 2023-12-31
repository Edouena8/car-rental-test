import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 70px;
  row-gap: 50px;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 618px;
    justify-content: start;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 1183px;
    column-gap: 29px;
  }
`;
