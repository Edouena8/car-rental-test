import styled from '@emotion/styled';
import { ReactComponent as XModalIcon } from '../../assets/icons/x.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.color.backdrop};
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
  background-color: ${p => p.theme.color.bgPrimary};
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

export const CloseModalIcon = styled(XModalIcon)`
  stroke: #121417;
  transition: stroke 250ms ease-in-out;

  &:hover {
    stroke: rgba(52, 112, 255, 1);
  }
`;
