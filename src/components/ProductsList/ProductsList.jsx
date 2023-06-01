import { ProductItem } from "../ProductItem";

import List from "@mui/material/List";

export const ProductsList = ({
  products,
  onDeleteProduct,
  onOpenModalOnUpdate,
  onSelectProduct,
  location,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        position: "relative",
        overflow: "auto",
        maxHeight: "75vh",
        "& ul": { padding: 0 },
      }}
    >
      {products.map((product, index) => {
        return (
          <ProductItem
            index={index}
            key={product._id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onOpenModalOnUpdate={onOpenModalOnUpdate}
            onSelectProduct={onSelectProduct}
            location={location}
          />
        );
      })}
    </List>
  );
};
