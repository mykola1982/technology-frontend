import { Link } from "react-router-dom";

export const ProductItem = ({ id, name, number }) => {
  return (
    <li>
      <Link to={`/products/${id}`}>
        <p>
          {name} - {number}
        </p>
      </Link>
    </li>
  );
};
