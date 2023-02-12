import { ProductItem } from "../ProductItem";

export const ProductsList = ({ products, onSelectProduct }) => {
  return (
    <ul>
      {products.map(({ id, name, number }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            name={name}
            number={number}
            onSelectProduct={onSelectProduct}
          />
        );
      })}
    </ul>
  );
};
