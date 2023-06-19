import { Modal, Box } from "@mui/material";

export const ModalSmall = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose} disableRestoreFocus>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "460px",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
