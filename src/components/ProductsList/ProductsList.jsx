import { ProductItem } from "../ProductItem";

import List from "@mui/material/List";

export const ProductsList = ({
  products,
  onDeleteProduct,
  onOpenModalOnUpdate,
  location,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "75vh",
        "& ul": { padding: 0 },
      }}
    >
      {products.map((product, location) => {
        return (
          <ProductItem
            key={product._id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onOpenModalOnUpdate={onOpenModalOnUpdate}
            location={location}
          />
        );
      })}
    </List>
  );
};
