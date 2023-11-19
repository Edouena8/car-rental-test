import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Main = styled.main`
  padding-top: 30px;
  overflow-y: auto;
  margin: 0px auto;
  padding-bottom: 30px;
  -webkit-box-flex: 1;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    max-width: 480px;
  }
`;
