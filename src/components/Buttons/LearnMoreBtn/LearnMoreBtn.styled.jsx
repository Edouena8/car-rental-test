import styled from '@emotion/styled';

export const Button = styled.button`

  font-size: 14px;
  fonct-weight: 600;
  line-height: 1.4;
  cursor: pointer;

  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  color: #fff;
  background-color: rgba(52, 112, 255, 1);
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;
