import { Modal, Box, Button, Typography } from "@mui/material";

export const ModalToDelete = ({ open, onClose, onDelete }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "360px",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),  0px 2px 1px rgba(0, 0, 0, 0.2)",
          p: 4,
        }}
      >
        <Typography variant="h6" component="p" align="center" sx={{ mb: 2 }}>
          Ви бажаєте видалити дану деталь
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="contained" size="small" onClick={() => onDelete()}>
            Так
          </Button>
          <Button variant="contained" size="small" onClick={() => onClose()}>
            Hi
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
