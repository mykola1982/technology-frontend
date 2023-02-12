import { nanoid } from "nanoid";
import { useState } from "react";
// const Department = {
//   CNC: "Дільниця з ЧПУ",
//   PRESSING: "Штамповочна дільниця",
// };

export const AddForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const quantityInputId = nanoid();

  // стейт що контролює вибір виробничої дільниці цеху
  //   const [department, setDepartment] = useState("");

  // стейт що контролює кнопку сабміту форми через чекбокс
  const [agreed, setAgreed] = useState(false);

  const handleChangeChecked = (evt) => {
    setAgreed(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const quantity = form.elements.quantity.value;
    onSubmit({ name, number, quantity });

    //   почитати про форм дата FormData

    form.reset();
  };

  return (
    <form style={{ display: " inline-grid" }} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Найменування</label>
      <input type="text" name="name" id={nameInputId} />
      <label htmlFor={numberInputId}>Децимальний номер</label>
      <input type="text" name="number" id={numberInputId} />
      <label htmlFor={quantityInputId}>Кількість деталей з листа</label>
      <input type="number" name="quantity" id={quantityInputId} />

      {/* <label>
        ЧПУ
        <input
          type="radio"
          checked={department === Department.CNC}
          name="department"
          value={Department.CNC}
          //   onChange={ }
        />
      </label>
      <p>Виберіть виробничу дільницю</p>
      <label>
        Штамповка
        <input
          type="radio"
          checked={department === Department.PRESSING}
          name="department"
          value={Department.PRESSING}
          //   onChange={}
        />
      </label> */}

      <label>
        Всі дані введені вірно
        <input
          type="checkbox"
          checked={agreed}
          onChange={handleChangeChecked}
        />
      </label>

      <button type="submit" disabled={!agreed}>
        Додати деталь до списку
      </button>
    </form>
  );
};
