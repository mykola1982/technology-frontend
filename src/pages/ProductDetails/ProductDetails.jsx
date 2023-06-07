import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { Container, Box, Typography, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import * as API from "../../services/products-API";

import { AddForm } from "../../components/AddForm";
import { Modal } from "../../components/Modal";
import { ModalToDelete } from "../../components/ModalToDelete";
import { ProductDetailsDescription } from "../../components/ProductDetailsDescription";
import { TechnologyDescription } from "../../components/TechnologyDescription";

const ProductDetails = () => {
  const location = useLocation();

  const { productId } = useParams();

  const [detailsProduct, setDetailsProduct] = useState(null);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const openModalUpdate = () => {
    setShowModalUpdate(true);
  };
  const closeModalUpdate = () => {
    setShowModalUpdate(false);
  };

  const openModalDelete = () => {
    setShowModalDelete(true);
  };

  const closeModalDelete = () => {
    setShowModalDelete(false);
  };

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await API.fetchProductAPI(productId);
        setDetailsProduct(response.data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      }
    }
    getProduct();
  }, [productId]);

  const deleteProduct = async (id) => {
    try {
      await API.removeProductAPI(id);
      setDetailsProduct(null);
      toast.success(`Деталь успішно видалена iз списку`);
    } catch (error) {
      toast.error(`Щось пішло не так. Спробуй знову...`);
    }
  };

  const hendelDelete = async () => {
    await deleteProduct(productId);
    closeModalDelete();
  };

  const updateProduct = async ({
    name,
    number,
    weight,
    quantity,
    workshop,
    thickness,
    sheet,
  }) => {
    const updateData = {
      name,
      number,
      weight,
      quantity,
      workshop,
      material: {
        thickness,
        sheet,
      },
    };

    try {
      const { data } = await API.updateProductAPI(productId, updateData);
      toast.success(`Дані про деталь успішно оновлені`);

      setDetailsProduct(data);
    } catch (error) {
      toast.error(`Щось пішло не так. Спробуй знову... на оновленні`);
    }
  };

  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", height: "100vh", gap: 2 }}
      >
        <Box
          sx={{
            width: "600px",
            borderRadius: 4,
            mt: 10,
            mb: 2,
            p: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <Button
            component={Link}
            to={backLinkHref}
            variant="contained"
            sazi="large"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Назад
          </Button>
          <Typography variant="h4" align={"center"} sx={{ fontWeight: 700 }}>
            Технічний опис деталі
          </Typography>

          {detailsProduct ? (
            <>
              <ProductDetailsDescription detailsProduct={detailsProduct} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  sazi="large"
                  onClick={openModalDelete}
                  startIcon={<DeleteForeverIcon />}
                  sx={{
                    width: "150px",
                  }}
                >
                  Bидалити
                </Button>
                <Button
                  variant="contained"
                  sazi="large"
                  onClick={openModalUpdate}
                  startIcon={<EditIcon />}
                  sx={{
                    width: "150px",
                  }}
                >
                  Редагувати
                </Button>
              </Box>
            </>
          ) : (
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              Дані про деталь не знайдено...
            </Typography>
          )}
        </Box>

        <TechnologyDescription />
      </Container>

      {showModalUpdate && (
        <Modal onClose={closeModalUpdate}>
          <AddForm
            onSubmit={updateProduct}
            onClose={closeModalUpdate}
            productForUpdate={detailsProduct}
          />
        </Modal>
      )}

      <ModalToDelete
        open={showModalDelete}
        onClose={closeModalDelete}
        onDelete={hendelDelete}
      />
    </>
  );
};

export default ProductDetails;
