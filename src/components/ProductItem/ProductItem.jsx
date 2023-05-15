export const ProductItem = ({
  id,
  name,
  number,
  onDeleteProduct,
  onSelectProduct,
}) => {
  return (
    <li
      // onClick={() => {
      //   onSelectProduct(id);
      // }}
      onFocus={() => console.log(id)}
      style={{ cursor: "pointer" }}
    >
      <p>
        {name} - {number}
      </p>

      <button type="button" onClick={() => onDeleteProduct(id)}>
        Видалити
      </button>
      <button type="button">Редагувати</button>
    </li>
  );
};
