import { SelectedProductItem } from "../SelectedProductItem";

import List from "@mui/material/List";

export const SelectedProductList = ({ products }) => {
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
      {products.map((product) => {
        return <SelectedProductItem key={product._id} product={product} />;
      })}
    </List>
  );
};
