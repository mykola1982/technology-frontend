import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Container } from "@mui/material";

import { AddForm } from "../../components/AddForm";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { getProducts } from "../../fakeAPI";
import { Modal } from "../../components/Modal";

const Products = () => {
  const [products, setProducts] = useState(getProducts());
  const [filter, setFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {}, [products]);

  const selectProduct = (idProduct) => {
    setSelectedProduct(products.find((product) => product.id === idProduct));

    // дописати логігу вибраного продукту
  };

  const addProduct = ({
    name,
    number,
    quantity,
    department,
    thickness,
    material,
  }) => {
    const newProduct = {
      id: nanoid(),
      name: name,
      number: number,
      quantity: quantity,
      department: department,
      thickness: thickness,
      material: material,
    };

    setProducts((prevProducts) => [newProduct, ...prevProducts]);
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
        product.number.startsWith(normalizedFilter)
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
          onSelectProduct={selectProduct}
        />

        {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <div> тут буде вибраний продукт </div>
        )}
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
