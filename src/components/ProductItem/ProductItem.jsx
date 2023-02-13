export const ProductItem = ({ id, name, number, onSelectProduct }) => {
  return (
    <li
      onClick={() => {
        onSelectProduct(id);
      }}
      onFocus={() => console.log(id)}
      style={{ cursor: "pointer" }}
    >
      <p>
        {name} - {number}
      </p>
    </li>
  );
};
