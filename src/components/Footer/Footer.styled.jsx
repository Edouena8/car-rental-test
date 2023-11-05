import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border-top: 1px solid ${p => p.theme.colors.borderDetails};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    flex-direction: row;
    justify-content: space-around;
  }
`;
