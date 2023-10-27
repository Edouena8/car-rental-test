import styled from '@emotion/styled';

export const ClearBtn = styled.button`
  height: 48px;
  padding: 14px 44px;
  align-self: end;
  border-radius: 12px;
  cursor: pointer;
  border: none;

  background-color: rgba(52, 112, 255, 1);
  transition: background-color 250ms ease-in-out;
  color: #fff;

  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
