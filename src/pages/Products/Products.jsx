import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box, Button, Typography, CircularProgress } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

import * as productsAPI from "services/products-API";
import * as ordersAPI from "services/orders-API";
import { getMaterialsForOneOrder } from "utils";

import { MyContainer } from "components/MyContainer";
import { AddForm } from "components/AddForm";
import { Filter } from "components/Filter";
import { ProductsList } from "components/ProductsList";
import { SelectedProductList } from "components/SelectedProductList";
import { ModalBig } from "components/ModalBig";
import { FormQuantityProduct } from "components/FormQuantityProduct";
import { ModalSmall } from "components/ModalSmall";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  // const [isLoadingAddOrder, setIsLoadingAddOrder] = useState(true);

  const [selectedProducts, setSelectedProducts] = useState(() => {
    const sevedSelectedProducts = localStorage.getItem("selectedProducts");

    if (sevedSelectedProducts !== null && sevedSelectedProducts !== "") {
      const parsedSelecdedProducts = JSON.parse(sevedSelectedProducts);
      return parsedSelecdedProducts;
    }

    return [];
  });

  const [selectedOneProduct, setSelectedOneProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalFormQuantity, setShowModalFormQuantity] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // можливо прописати функцію окрему для закриття і відкриття різних модалок.
  const openModalFormQuantity = () => {
    setShowModalFormQuantity(true);
  };
  const closeModalFormQuantity = () => {
    setShowModalFormQuantity(false);
  };

  //

  useEffect(() => {
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const { data } = await productsAPI.fetchAllProductsAPI();

        setProducts(data);
      } catch (error) {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      } finally {
        setIsLoading(false);
      }
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addProduct = async ({
    name,
    number,
    weight,
    quantity,
    workshop,
    thickness,
    sheet,
  }) => {
    const newProduct = {
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
      const { data } = await productsAPI.addProductAPI(newProduct);
      setProducts((prevProducts) => [data.product, ...prevProducts]);
      toast.success(`Деталь  ${name}-${number} успішно додана до списку`);
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Деталь з децимальним номером  ${number} вже є в списку`);
      } else {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      }
    }
  };

  const handleChangeFilter = (evt) => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const getVisibelProducts = () => {
    const normalizedFilter = filter.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedFilter) ||
        product.number?.toLowerCase().startsWith(normalizedFilter)
    );
  };

  const visibleProducts = getVisibelProducts();

  const selectProduct = (id) => {
    const selectedProduct = products.find((product) => product._id === id);
    const { _id, name, number } = selectedProduct;

    const hasProduct = selectedProducts.some((product) => product._id === _id);

    if (hasProduct) {
      toast.warn(`Деталь ${name}- ${number} вже є в списку замовлення `);

      return;
    }
    setSelectedOneProduct(selectedProduct);
    openModalFormQuantity();
  };

  const addProductToOrder = (reserved, product) => {
    const productOne = { ...product, reserved };

    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      productOne,
    ]);
    setSelectedOneProduct(null);
  };

  const deleteProductFromOrder = (id) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product._id !== id)
    );
  };

  const addOrder = async (products) => {
    const newOrder = {
      products: products.map(
        ({ name, number, weight, quantity, material, reserved }) => {
          return { name, number, weight, quantity, material, reserved };
        }
      ),
      materials: getMaterialsForOneOrder(products),
    };

    try {
      await ordersAPI.addOrderAPI(newOrder);
      setSelectedProducts([]);
      toast.success(
        "Деталі успішно додані в замовлення на розрахунок матеріалу."
      );
    } catch (error) {
      toast.error("Щось пішло не так. Спробуй знову...");
    }
  };

  return (
    <>
      <MyContainer>
        <Box
          sx={{
            width: "380px",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            mt: 10,
            mb: 2,
            p: 1,
            pt: 3,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PostAddIcon />}
            onClick={openModal}
            sx={{
              width: "300px",
            }}
          >
            Добавити деталь
          </Button>

          <Filter value={filter} onChange={handleChangeFilter} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Список деталей
          </Typography>

          <Box>
            {products.length > 0 && (
              <Typography variant="body1" align="center">
                Всього в базі - {products.length} дет.
              </Typography>
            )}
            {filter && (
              <Typography variant="body1" align="center">
                Знайдено збігів - {visibleProducts.length}
              </Typography>
            )}
          </Box>

          {isLoading && (
            <CircularProgress size={80} sx={{ mt: "auto", mb: "auto" }} />
          )}

          {products && (
            <ProductsList
              products={visibleProducts}
              onSelectProduct={selectProduct}
              location={location}
            />
          )}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            borderRadius: 4,
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            mt: 10,
            mb: 2,
            p: 1,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          {/* {isLoading && (
            <CircularProgress size={80} sx={{ mt: "auto", mb: "auto" }} />
          )} */}

          <SelectedProductList
            products={selectedProducts}
            onDeleteProductFromOrder={deleteProductFromOrder}
          />
          <Button
            variant="contained"
            size="large"
            disabled={selectedProducts.length <= 0}
            onClick={() => {
              addOrder(selectedProducts);
              navigate("/orders");
            }}
          >
            Сформувати замовлення
          </Button>
        </Box>
      </MyContainer>

      <ModalBig open={showModal} onClose={closeModal}>
        <AddForm onSubmit={addProduct} onClose={closeModal} />
      </ModalBig>

      <ModalSmall open={showModalFormQuantity} onClose={closeModalFormQuantity}>
        <FormQuantityProduct
          onClose={closeModalFormQuantity}
          onSubmit={addProductToOrder}
          product={selectedOneProduct}
        />
      </ModalSmall>
    </>
  );
};

export default Products;
