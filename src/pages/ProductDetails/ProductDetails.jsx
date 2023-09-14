import { useState, useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { Box, Typography, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import * as productsAPI from "services/products-API";

import { MyContainer } from "components/MyContainer";
import { AddProductForm } from "components/AddProductForm";
import { ModalBig } from "components/ModalBig";
import { ModalSmall } from "components/ModalSmall";
import { ProductDetailsDescription } from "components/ProductDetailsDescription";
import { TechnologyDescription } from "components/TechnologyDescription";
import { ContentModalDelete } from "components/ContentModalDelete";
import { Loader } from "components/Loader";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { productId } = useParams();

  const [detailsProduct, setDetailsProduct] = useState(null);
  const [isloading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        const response = await productsAPI.fetchProductAPI(productId);
        setDetailsProduct(response.data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [productId]);

  const deleteProduct = async (id) => {
    try {
      await productsAPI.removeProductAPI(id);
      setIsLoading(true);
      setDetailsProduct(null);
      toast.success(`Деталь успішно видалена iз списку`);
      navigate("/products");
    } catch (error) {
      toast.error(`Щось пішло не так. Спробуй знову...`);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
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
    material,
  }) => {
    const updateData = {
      name,
      number,
      weight,
      quantity,
      workshop,
      material,
    };

    try {
      setIsLoading(true);
      const { data } = await productsAPI.updateProductAPI(
        productId,
        updateData
      );
      toast.success(`Дані про деталь успішно оновлені`);
      setDetailsProduct(data);
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Деталь з децимальним номером  ${number} вже є в списку`);
      } else {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      {isloading && <Loader />}
      <MyContainer>
        <Box
          sx={{
            width: "600px",
            borderRadius: 4,
            mt: 10,
            mb: 6,
            p: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
            overflowX: "auto",
          }}
        >
          <Button
            component={Link}
            to={backLinkHref}
            variant="contained"
            size="small"
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
                  justifyContent: "space-evenly",
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
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
                  size="large"
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
      </MyContainer>

      <ModalBig open={showModalUpdate} onClose={closeModalUpdate}>
        <AddProductForm
          onSubmit={updateProduct}
          onClose={closeModalUpdate}
          productForUpdate={detailsProduct}
        />
      </ModalBig>

      <ModalSmall open={showModalDelete} onClose={closeModalDelete}>
        <ContentModalDelete
          title={"Бажаєте видалити дану деталь?"}
          onDelete={hendelDelete}
          onClose={closeModalDelete}
        />
      </ModalSmall>
    </>
  );
};

export default ProductDetails;
