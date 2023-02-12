export const ProductDetails = ({ product }) => {
  const { name, number, quantity, department } = product;
  return (
    <div>
      Тут буде дельний опис про деталь
      <h2>
        Опис деталі - {name} {number}
      </h2>
      <p>Найменування - {name}</p>
      <p>Децимальний номер - {number}</p>
      <p>Дільниця виготовлення -{department}</p>
      <p>Матеріал</p>
      <p>Норма витрати</p>
      <p>Товщина металу</p>
      <p>Кількість деталей листа-{quantity}</p>
    </div>
  );
};
