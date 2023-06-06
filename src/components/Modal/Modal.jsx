import { createPortal } from "react-dom";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ModalBackdrop, ModalContet } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <ModalBackdrop>
      <ModalContet>
        {children}
        <IconButton
          aria-label="close"
          size="medium"
          onClick={onClose}
          sx={{ position: "absolute", top: 3, right: 3 }}
        >
          <CloseIcon fontSize="medium" sx={{ color: "#1976d2" }} />
        </IconButton>
      </ModalContet>
    </ModalBackdrop>,
    modalRoot
  );
};
