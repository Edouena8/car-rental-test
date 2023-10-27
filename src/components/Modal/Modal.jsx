import { createPortal } from 'react-dom';
import { Backdrop, ModalBtn, ModalContent } from './Modal.styled';
import { ReactComponent as CloseModalIcon } from '../../assets/icons/x.svg';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onKeydownEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeydownEsc);

    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalBtn onClick={onClose}>
          <CloseModalIcon />
        </ModalBtn>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};
