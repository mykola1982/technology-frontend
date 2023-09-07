import { Box, Button } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useState } from "react";
import { ModalBig } from "components/ModalBig";
import { AddMaterialForm } from "components/AddMaterialForm";

export const MaterialsDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<PostAddIcon />}
          onClick={openModal}
          sx={{ width: "300px" }}
        >
          Добавити матеріал
        </Button>
      </Box>
      <ModalBig open={showModal} onClose={closeModal}>
        <AddMaterialForm onClose={closeModal} />
      </ModalBig>
    </>
  );
};
