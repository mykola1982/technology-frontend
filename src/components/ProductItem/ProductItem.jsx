import { Link } from "react-router-dom";

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
      <button type="button" onClick={() => onDeleteProduct(_id)}>
        Видалити
      </button>
      <button type="button" onClick={() => onOpenModalOnUpdate(_id)}>
        Редагувати
      </button>
      <button
        type="button"
        onClick={() => {
          onSelectProduct(_id);
        }}
      >
        добавити деталь в список замовлення
      </button>
    </li>
  );
};
