import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const ModalBig = ({ open, children, onClose }) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "450px",
          maxWidth: "450px",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",
          p: 4,
        }}
      >
        <IconButton
          aria-label="close"
          size="medium"
          onClick={() => onClose()}
          sx={{ position: "absolute", top: 3, right: 3 }}
        >
          <CloseIcon fontSize="medium" sx={{ color: "#1976d2" }} />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};
