import { getMetalConsumption } from "../../utils/getMetalConsumption";

import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { Container, Box, Button } from "@mui/material";

import * as API from "../../services/products-API";

import { AddForm } from "../../components/AddForm";
import { Modal } from "../../components/Modal";

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
      } catch (error) {}
    }
    getProduct();
  }, [productId, detailsProduct]);

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
      const response = await API.updateProductAPI(productId, updateData);
      setDetailsProduct(...response);
    } catch (error) {}
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
          >
            Назад
          </Button>

          {detailsProduct ? (
            <>
              <div>
                Тут буде дельний опис про деталь
                <h2>
                  Опис деталі - {detailsProduct.name} {detailsProduct.number}
                </h2>
                <p>Найменування - {detailsProduct.name}</p>
                <p>Децимальний номер - {detailsProduct.number}</p>
                <p>Дільниця виготовлення -{detailsProduct.workshop}</p>
                <p>Матеріал -{detailsProduct.material.sheet} </p>
                <p>
                  Норма витрати-{" "}
                  {getMetalConsumption(
                    detailsProduct.quantity,
                    detailsProduct.material.sheet,
                    detailsProduct.material.thickness
                  )}
                </p>
                <p>Товщина металу-{detailsProduct.material.thickness} мм.</p>
                <p>Кількість деталей листа-{detailsProduct.quantity} шт.</p>
                <p> Вага деталі-{detailsProduct.weight}кг.</p>
              </div>
              <Button
                component={Link}
                variant="contained"
                sazi="large"
                onClick={() => deleteProduct(productId)}
              >
                Bидалити
              </Button>

              <Button
                component={Link}
                variant="contained"
                sazi="large"
                onClick={openModal}
              >
                Редагувати
              </Button>
            </>
          ) : (
            <p>Дані про деталь відсутні...</p>
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
