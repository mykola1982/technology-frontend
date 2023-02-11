import { useState } from "react";
import { Filter } from "../../components/Filter";
import { ProductsList } from "../../components/ProductsList";
import { getProducts } from "../../fakeAPI";

const Products = () => {
  const [products, setProducts] = useState(getProducts());
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getVisibelProcts = () => {
    const normalizedFilter = filter.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedFilter) ||
        product.number.startsWith(normalizedFilter)
    );
  };

  const visibleProducts = getVisibelProcts();

  return (
    <>
      <p>тут буде лист з продукцією</p>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ProductsList products={visibleProducts} />
    </>
  );
};

export default Products;
