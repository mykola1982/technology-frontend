import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export const ProductItem = ({
  product,
  onDeleteProduct,
  onOpenModalOnUpdate,
  onSelectProduct,
  location,
}) => {
  const { _id, name, number } = product;

  return (
    <li style={{ cursor: "pointer" }}>
      <Link to={`/products/${_id}`} state={{ from: location }}>
        <p>
          {name} - {number}
        </p>
      </Link>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => onDeleteProduct(_id)}
      >
        <DeleteForeverIcon fontSize="small" sx={{ color: "#1976d2" }} />
      </IconButton>
      <IconButton
        aria-label="edit"
        size="small"
        onClick={() => onOpenModalOnUpdate(_id)}
      >
        <EditIcon fontSize="small" sx={{ color: "#1976d2" }} />
      </IconButton>
      <IconButton
        aria-label="add to order list"
        size="small"
        onClick={() => {
          onSelectProduct(_id);
        }}
      >
        <AddIcon fontSize="small" sx={{ color: "#1976d2" }} />
      </IconButton>
    </li>
  );
};
