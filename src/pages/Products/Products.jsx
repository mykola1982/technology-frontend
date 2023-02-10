import { ProductsList } from "../../components/ProductsList";
import { getProducts } from "../../fakeAPI";

const Products = () => {
  const products = getProducts();

  return (
    <>
      <p>тут буде лист з продукцією</p>;
      <ProductsList products={products}></ProductsList>
    </>
  );
};

export default Products;
