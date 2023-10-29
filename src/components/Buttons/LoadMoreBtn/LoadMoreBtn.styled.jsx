import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;
