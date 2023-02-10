export const ProductItem = ({ id, name, number }) => {
  return (
    <li>
      <p>
        {name} - {number}
      </p>
    </li>
  );
};
