import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { AddForm } from "../../components/AddForm";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
import { getProducts } from "../../fakeAPI";

const Products = () => {
  const [products, setProducts] = useState(getProducts());
  const [filter, setFilter] = useState("");

  // useEffect(() => {}, [products]);

  const addProduct = ({ name, number, quantity }) => {
    const newProduct = {
      id: nanoid(),
      name: name,
      number: number,
      quantity: quantity,
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
      <ProductsList products={visibleProducts} />
    </>
  );
};

export default Products;
