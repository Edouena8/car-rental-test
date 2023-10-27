import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 752px;
  max-width: 541px;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;

  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

