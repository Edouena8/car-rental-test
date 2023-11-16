import styled from '@emotion/styled';

export const Button = styled.div`
  position: fixed;
  width: 100%;
  bottom: 100px;
  right: 5%;
  height: 80px;
  width: 80px;
  font-size: 5rem;
  z-index: 1;
  border-radius: 100%;
  color: rgba(189, 195, 199, 1);
  box-shadow: 0 0 14px -5px rgba(0, 0, 0, 5);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.2);
  }
`;
