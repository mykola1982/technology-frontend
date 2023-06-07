import { Link } from "react-router-dom";

import { IconButton, Typography, Box, ListItem } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export const ProductItem = ({
  product,
  index,

  onSelectProduct,
  location,
}) => {
  const { _id, name, number } = product;

  return (
    <ListItem
      sx={{ justifyContent: "space-between", borderBottom: "1px solid" }}
    >
      <Box
        to={`/products/${_id}`}
        state={{ from: location }}
        component={Link}
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
          maxWidth: "260px",
        }}
      >
        <Typography variant="body1" mr={1}>
          {index + 1}.
        </Typography>
        <Box>
          <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
            {number}
          </Typography>
        </Box>
      </Box>

      <IconButton
        aria-label="add to order list"
        size="medium"
        onClick={() => {
          onSelectProduct(_id);
        }}
      >
        <AddIcon fontSize="medium" sx={{ color: "#1976d2" }} />
      </IconButton>
    </ListItem>
  );
};
