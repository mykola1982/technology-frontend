import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "@mui/material";

import { AddForm } from "../../components/AddForm";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
// import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { Modal } from "../../components/Modal";

import * as API from "../../services/products-API";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  // const [isUpdate, setIsUpdate] = useState(false);
  const [productForUpdate, setProductForUpdate] = useState(null);

  // const [selectedProduct, setSelectedProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  const openModal = () => {
    setShowModal(true);
    setProductForUpdate(null);
  };

  const closeModal = () => {
    setShowModal(false);
    // setIsUpdate(false);
  };

  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await API.fetchAllProductAPI();
        setProducts(data.products);
      } catch (error) {}
    }
    getAllProducts();
  }, []);

  // const selectProduct = (idProduct) => {
  //   setSelectedProduct(products.find((product) => product.id === idProduct));

  // дописати логігу вибраного продукту
  // };

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
    console.log("відправляємо на редагування");
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

  return (
    <>
      <Container maxWidth="sm">
        <button type="button" onClick={openModal}>
          Добавити деталь до списку
        </button>

        <p>тут буде лист з продукцією</p>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ProductsList
          products={visibleProducts}
          onDeleteProduct={deleteProduct}
          onOpenModalOnUpdate={openModalOnUpdate}
          location={location}
        />
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
    </>
  );
};

export default Products;
