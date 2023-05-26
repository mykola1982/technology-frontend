export const FormQuantityProduct = ({ onSubmit, onClose, product }) => {
  const handelSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const reserved = form.elements.reserved.value;
    onSubmit(reserved, product);
    onClose();
    form.reset();
  };
  return (
    <form onSubmit={handelSubmit}>
      <label>
        Введіть кількість деталей
        <input type="number" name="reserved" min="1" defaultValue={"1"} />
      </label>
      <button type="submit">OK</button>
    </form>
  );
};
