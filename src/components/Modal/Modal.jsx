import { createPortal } from "react-dom";

import { ModalBackdrop, ModalContet } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose }) => {
  const hendleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <ModalBackdrop onClick={hendleBackdropClick}>
      <ModalContet>{children}</ModalContet>
    </ModalBackdrop>,
    modalRoot
  );
};
