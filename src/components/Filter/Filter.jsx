export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
