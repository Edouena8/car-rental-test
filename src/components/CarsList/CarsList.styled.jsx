import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    gap: 29px;
    row-gap: 50px;
  }
`;
