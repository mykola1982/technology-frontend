import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import { AddForm } from "../../components/AddForm";
// import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
// import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { Modal } from "../../components/Modal";

import * as API from "../../services/products-API";

const Products = () => {
  // const [filter, setFilter] = useState("");
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [products, setProducts] = useState([]);

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
      console.log("при додаванні", data.product);
      setProducts((prevProducts) => [data.product, ...prevProducts]);
    } catch (error) {
    } finally {
    }

    // setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  // const handleChangeFilter = (evt) => {
  //   const { value } = evt.currentTarget;
  //   setFilter(value);
  // };

  // const getVisibelProducts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return products.filter(
  //     (product) =>
  //       product.name.toLowerCase().includes(normalizedFilter) ||
  //       product.number.startsWith(normalizedFilter)
  //   );
  // };

  // const visibleProducts = getVisibelProducts();

  return (
    <>
      <Container maxWidth="sm">
        <button type="button" onClick={openModal}>
          Добавити деталь до списку
        </button>

        <p>тут буде лист з продукцією</p>
        {/* <Filter value={filter} onChange={handleChangeFilter} /> */}
        <ProductsList
          products={products}
          // onSelectProduct={selectProduct}
        />

        {/* {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <div> тут буде вибраний продукт </div>
        )} */}
      </Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddForm onSubmit={addProduct} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Products;
