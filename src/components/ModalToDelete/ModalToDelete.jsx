import { useEffect, useRef } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

export const ModalToDelete = ({ showModalDelete, closeModalDelete }) => {
  //   useEffect(() => {
  //     buttonRef.current.focus();
  //   }, []);

  <Modal
    open={showModalDelete}
    // onClose={closeModalDelete}
  >
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
      <Button
      // onClick={() => {
      //   deleteProduct(productId);
      //   closeModalDelete();
      // }}
      >
        Так
      </Button>
      {/* <Button onClick={closeModalDelete} ref={buttonRef}>
        Hi
      </Button> */}
    </Box>
  </Modal>;
};
