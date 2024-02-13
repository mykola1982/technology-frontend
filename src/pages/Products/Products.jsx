import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

import {
  Box,
  Button,
  Typography,
  CircularProgress,
  TextField,
  MenuItem,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

import * as productsAPI from "services/products-API";
import * as ordersAPI from "services/orders-API";
import {
  getMaterialsForOneOrder,
  normalizeProductsForOrder,
  normalizeMaterialsForOrder,
} from "utils";

import { MyContainer } from "components/MyContainer";
import { AddProductForm } from "components/AddProductForm";
import { AddComponentForm } from "components/AddComponentForm";
import { Filter } from "components/Filter";
import { ProductsList } from "components/ProductsList";
import { SelectedProductList } from "components/SelectedProductList";
import { ModalBig } from "components/ModalBig";
import { FormQuantityProduct } from "components/FormQuantityProduct";
import { ModalSmall } from "components/ModalSmall";

import { useAuth } from "hooks";

import { typeProduct } from "data/typeProduct";

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

  const [showModalСreateProduct, setShowModalCreateProduct] = useState(false);
  const [showModalCreateComponent, setShowModalCreateComponent] =
    useState(false);
  const [showModalFormQuantity, setShowModalFormQuantity] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // можливо написати функцію яка буде працювати на відкриття і закриття модалок

  const openModalCreateProduct = () => {
    setShowModalCreateProduct(true);
  };

  const closeModalCreateProduct = () => {
    setShowModalCreateProduct(false);
  };

  const openModalCreateComponent = () => {
    setShowModalCreateComponent(true);
  };

  const closeModalCreateComponent = () => {
    setShowModalCreateComponent(false);
  };

  const openModalFormQuantity = () => {
    setShowModalFormQuantity(true);
  };
  const closeModalFormQuantity = () => {
    setShowModalFormQuantity(false);
  };

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
    const selectedProductToLocal = selectedProducts.map(
      ({ _id, reserved }) => ({
        _id,
        reserved,
      })
    );

    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProductToLocal)
    );
  }, [selectedProducts]);

  const addProduct = async ({
    name,
    number,
    weight,
    quantity,
    workshop,
    material,
  }) => {
    const newProduct = {
      name,
      number,
      weight,
      quantity,
      workshop,
      material,
    };

    try {
      const { data } = await productsAPI.addProductAPI(newProduct);

      setProducts((prevProducts) => [data, ...prevProducts]);
      toast.success(`Деталь  ${name}-${number} успішно додана до списку`);
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Деталь з децимальним номером  ${number} вже є в списку`);
      } else {
        toast.error(`Щось пішло не так. Спробуй знову...`);
      }
      return error;
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

    if (!productOne.material) {
      toast.error(
        `В даталі що вибрали не заданий матеріал. Добавте матеріал та спробуйте знову.`
      );
      return;
    }

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
    const materialsForOneOrder = getMaterialsForOneOrder(products);

    const newOrder = {
      user: user.name,
      products: normalizeProductsForOrder(products),
      materials: normalizeMaterialsForOrder(materialsForOneOrder),
    };

    try {
      await ordersAPI.addOrderAPI(newOrder);
      localStorage.removeItem("selectedProducts");
      toast.success(
        "Деталі успішно додані в замовлення на розрахунок матеріалу."
      );
      navigate("/orders");
    } catch (error) {
      toast.error("Щось пішло не так. Спробуй знову...");
    }
  };

  // ----- можливо винести в окрему функцію, також можна почистити сам обєкт , не можна а треба

  const formatedSecectedProducts = selectedProducts.reduce(
    (acc, selectedProduct) => {
      const product = products.find(
        (product) => product._id === selectedProduct._id
      );
      if (product) {
        acc.push({ ...product, reserved: selectedProduct.reserved });
      }

      return acc;
    },
    []
  );

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
            mb: 6,
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
            onClick={openModalCreateProduct}
            sx={{
              width: "300px",
            }}
          >
            Створити деталь
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<PostAddIcon />}
            onClick={openModalCreateComponent}
            sx={{ width: "300px" }}
          >
            Створити виріб
          </Button>
          <TextField
            select
            size="small"
            label="Сортування"
            sx={{ width: "300px" }}
          >
            {typeProduct.map(({ label, value }) => (
              <MenuItem key={nanoid()} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>

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
            mb: 6,
            p: 1,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 8px 0 rgba(0,0,0,.3)",
          }}
        >
          {/* {isLoading && (
            <CircularProgress size={80} sx={{ mt: "auto", mb: "auto" }} />
          )} */}

          <SelectedProductList
            products={formatedSecectedProducts}
            onDeleteProductFromOrder={deleteProductFromOrder}
          />
          <Button
            variant="contained"
            size="large"
            disabled={selectedProducts.length <= 0}
            onClick={() => {
              addOrder(formatedSecectedProducts);
            }}
          >
            Сформувати замовлення
          </Button>
        </Box>
      </MyContainer>

      <ModalBig open={showModalСreateProduct} onClose={closeModalCreateProduct}>
        <AddProductForm
          onSubmit={addProduct}
          onClose={closeModalCreateProduct}
        />
      </ModalBig>

      <ModalBig
        open={showModalCreateComponent}
        onClose={closeModalCreateComponent}
      >
        <AddComponentForm onClose={closeModalCreateComponent} />
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
