import { ProductItem } from "../ProductItem";

export const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id, name, number }) => {
        return <ProductItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
