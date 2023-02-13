import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { AddForm } from "../../components/AddForm";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { getProducts } from "../../fakeAPI";

const Products = () => {
  const [products, setProducts] = useState(getProducts());
  const [filter, setFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({
    id: "1",
    name: "Підсилювач",
    number: "600.000.054.50-01",
    quantity: 160,
  });

  // useEffect(() => {}, [products]);

  const selectProduct = (idProduct) => {
    console.log("це вибрав в productpage", idProduct);
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
      <AddForm onSubmit={addProduct} />
      <p>тут буде лист з продукцією</p>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ProductsList
        products={visibleProducts}
        onSelectProduct={selectProduct}
      />
      <ProductDetails product={selectedProduct} />
    </>
  );
};

export default Products;
