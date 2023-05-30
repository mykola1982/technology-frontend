import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Box, Button, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { AddForm } from "../../components/AddForm";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
import { SelectedProductList } from "../../components/SelectedProductList";
import { Modal } from "../../components/Modal";
import { FormQuantityProduct } from "../../components/FormQuantityProduct";

import * as API from "../../services/products-API";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [productForUpdate, setProductForUpdate] = useState(null);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOneProduct, setSelectedOneProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalFormQuantity, setShowModalFormQuantity] = useState(false);

  const location = useLocation();

  const openModal = () => {
    setShowModal(true);
    setProductForUpdate(null);
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
        const { data } = await API.fetchAllProductAPI();
        setProducts(data.products);
      } catch (error) {}
    }
    getAllProducts();
  }, []);

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
      const { data } = await API.addProductAPI(newProduct);

      setProducts((prevProducts) => [data.product, ...prevProducts]);
    } catch (error) {
    } finally {
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await API.removeProductAPI(id);
      setProducts((prevProducts) =>
        prevProducts.filter(({ _id }) => _id !== response.id)
      );
    } catch (error) {
      console.log(error.mesage);
    }
  };

  const openModalOnUpdate = async (id) => {
    openModal();
    setProductForUpdate(() => products.find((product) => product._id === id));
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
      const response = await API.updateProductAPI(
        productForUpdate._id,
        updateData
      );
      // мені здається що можна змінити тут більш простим методом

      setProducts((prevProducts) => {
        const indexUpdatedProduct = prevProducts.findIndex(
          (product) => product._id === productForUpdate._id
        );

        if (indexUpdatedProduct !== -1) {
          prevProducts[indexUpdatedProduct] = {
            ...prevProducts[indexUpdatedProduct],
            ...response.data,
          };
        }

        const updatetedProducts = [...prevProducts];
        return updatetedProducts;
      });
    } catch (error) {}
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
        product.number?.startsWith(normalizedFilter)
    );
  };

  const visibleProducts = getVisibelProducts();
  // функцію пошуку прожуку можна винести в Utils
  const selectProduct = (id) => {
    const selectedProduct = products.find((product) => product._id === id);

    const hasProduct = selectedProducts.some(
      (product) => product._id === selectedProduct._id
    );

    if (hasProduct) {
      // замінити на тостер
      console.log(
        `Деталь ${selectedProduct.name}- ${selectedProduct.number} вже є в списку замовлення `
      );
      return;
    }
    setSelectedOneProduct(selectedProduct);
    openModalFormQuantity();

    // setSelectedProducts((prevSelectedProducts) => [
    //   selectedProduct,
    //   ...prevSelectedProducts,
    // ]);
  };

  const addProductToOrder = (reserved, product) => {
    console.log("Ми в формі додавання деталі");
    console.log("кількість замовлених деталей", reserved);
    console.log("вибраний продук", product);
    const productOne = { ...product, reserved };
    console.log(
      "вибраний продук після додавання кількості в замовлення ",
      productOne
    );
    setSelectedProducts((prevSelectedProducts) => [
      productOne,
      ...prevSelectedProducts,
    ]);
    setSelectedOneProduct(null);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex", maxHeight: "100%" }}>
        <Box
          sx={{
            maxWidth: "380px",

            flexGrow: 1,
            border: "1px solid",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            mt: 2,
            backgroundColor: "#eeeeee",
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PostAddIcon />}
            onClick={openModal}
            sx={{
              mt: 2,
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
          <ProductsList
            products={visibleProducts}
            onDeleteProduct={deleteProduct}
            onOpenModalOnUpdate={openModalOnUpdate}
            onSelectProduct={selectProduct}
            location={location}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            // display: { xs: "none" },
          }}
        >
          <SelectedProductList products={selectedProducts} />
          <button type="button" disabled={selectedProducts.length <= 0}>
            Сформувати замовлення
          </button>
        </Box>
      </Container>

      {showModal && (
        <Modal onClose={closeModal}>
          <AddForm
            onSubmit={!productForUpdate ? addProduct : updateProduct}
            onClose={closeModal}
            productForUpdate={productForUpdate}
          />
        </Modal>
      )}
      {showModalFormQuantity && (
        <Modal onClose={closeModalFormQuantity}>
          <FormQuantityProduct
            onClose={closeModalFormQuantity}
            onSubmit={addProductToOrder}
            product={selectedOneProduct}
          />
        </Modal>
      )}
    </>
  );
};

export default Products;
