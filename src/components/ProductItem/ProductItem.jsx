export const ProductItem = ({
  id,
  name,
  number,
  onDeleteProduct,
  onOpenModalOnUpdate,
}) => {
  return (
    <li>
      <p>
        {name} - {number}
      </p>

      <button type="button" onClick={() => onDeleteProduct(id)}>
        Видалити
      </button>

      <button type="button" onClick={() => onOpenModalOnUpdate(id)}>
        Редагувати
      </button>
    </li>
  );
};
