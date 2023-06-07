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
import { ProductDetailsDescription } from "../../components/ProductDetailsDescription";

const ProductDetails = () => {
  const location = useLocation();

  const { productId } = useParams();
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
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
      toast.success(`Деталь про деталь успішно оновлені`);
      console.log("то оновлені чи ні");
      console.log("data", data);
      setDetailsProduct(data);
    } catch (error) {
      console.log(error);
      toast.error(`Щось пішло не так. Спробуй знову... на оновленні`);
      console.log("що за помилка");
    }
  };

  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            borderRadius: 4,
            mt: 10,
            mb: 2,
            p: 2,
            flexGrow: 1,
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
            sx={{ mb: 1 }}
          >
            Назад
          </Button>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Технічний опис деталі
          </Typography>

          {detailsProduct ? (
            <>
              <ProductDetailsDescription detailsProduct={detailsProduct} />

              <Button
                variant="contained"
                sazi="large"
                onClick={() => deleteProduct(productId)}
                startIcon={<DeleteForeverIcon />}
                sx={{
                  width: "150px",
                  mr: 2,
                }}
              >
                Bидалити
              </Button>
              <Button
                variant="contained"
                sazi="large"
                onClick={() => openModal()}
                startIcon={<EditIcon />}
                sx={{
                  width: "150px",
                }}
              >
                Редагувати
              </Button>
            </>
          ) : (
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              Дані про деталь не знайдено...
            </Typography>
          )}
        </Box>
      </Container>

      {showModal && (
        <Modal onClose={closeModal}>
          <AddForm
            onSubmit={updateProduct}
            onClose={closeModal}
            productForUpdate={detailsProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default ProductDetails;
