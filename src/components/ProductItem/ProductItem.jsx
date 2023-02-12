export const ProductItem = ({ id, name, number, onSelectProduct }) => {
  return (
    <li onClick={() => onSelectProduct(id)}>
      <p>
        {name} - {number}
      </p>
    </li>
  );
};
