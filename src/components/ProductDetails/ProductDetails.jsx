import { getMetalConsumption } from "../../utils/getMetalConsumption";

export const ProductDetails = ({ product }) => {
  const { name, number, weight, quantity, department, thickness, sheet } =
    product;

  const metalConsumption = getMetalConsumption(quantity, sheet, thickness);
  return (
    <div>
      Тут буде дельний опис про деталь
      <h2>
        Опис деталі - {name} {number}
      </h2>
      <p>Найменування - {name}</p>
      <p>Децимальний номер - {number}</p>
      <p>Дільниця виготовлення -{department}</p>
      <p>Матеріал -{sheet} </p>
      {/* написати фунцію для прорахунку норм  */}
      <p>Норма витрати- {metalConsumption}</p>
      <p>Товщина металу-{thickness} мм.</p>
      <p>Кількість деталей листа-{quantity} шт.</p>
      <p> Вага деталі-{weight}кг.</p>
    </div>
  );
};
