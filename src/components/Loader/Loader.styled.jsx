import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${p => p.theme.colors.backdrop};
  z-index: 1;
`;
