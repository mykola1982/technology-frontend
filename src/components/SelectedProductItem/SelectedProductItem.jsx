export const SelectedProductItem = ({ product }) => {
  const { name, number, reserved } = product;
  return (
    <li>
      <p>
        {name}-{number}
      </p>
      <p>Кількість {reserved} шт. </p>
    </li>
  );
};
