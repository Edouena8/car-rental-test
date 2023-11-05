import styled from '@emotion/styled';

export const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 5px;
`;

export const Image = styled.img`
  max-width: 320px;
  height: 320px;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    width: 450px;
    // height: 450px;
    margin-top: 30px;
  }
`;
