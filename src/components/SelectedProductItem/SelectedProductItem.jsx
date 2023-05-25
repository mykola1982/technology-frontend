export const SelectedProductItem = ({ product }) => {
  const { _id, name, number } = product;
  return (
    <li>
      <p>
        {name}-{number}
      </p>
      <p>Кількість</p>
    </li>
  );
};
