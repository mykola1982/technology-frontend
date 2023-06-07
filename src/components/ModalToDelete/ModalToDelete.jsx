import { useEffect, useRef } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

export const ModalToDelete = ({ open, onClose, onDelete }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Ви бажаєте видалити дану деталь
        </Typography>
        <Button onClick={() => onDelete()}>Так</Button>
        {/* <button ref={buttonRef}> для фокуса тест</button> */}
        <Button onClick={onClose} ref={buttonRef}>
          Hi
        </Button>
      </Box>
    </Modal>
  );
};
